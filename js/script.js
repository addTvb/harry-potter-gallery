'use strict';

fetch('https://hp-api.onrender.com/api/characters', { method: 'GET' })
	.then((res) => res.json())
	.then((parsedData) => {
		console.log('Это данные из API: ', parsedData);

		parsedData.forEach((character) => {
			let cardWrapper = document.createElement('a');
			cardWrapper.className = 'card';
			cardWrapper.addEventListener('click', () => {
				localStorage.setItem('hp-character', JSON.stringify(character));
			});
			cardWrapper.href = '/character.html';

			let textWrapper = document.createElement('div');
			textWrapper.className = 'text-wrapper';

			let image = document.createElement('img');
			image.classList.add('card-image');
			if (character.house === 'Gryffindor') image.classList.add('border-red');
			if (character.house === 'Slytherin') image.classList.add('border-green');
			if (character.house === 'Ravenclaw') image.classList.add('border-blue');
			if (character.house === 'Hufflepuff') image.classList.add('border-yellow');
			image.src = character.image;

			let name = document.createElement('p');
			name.className = 'card-name';
			name.textContent = character.name;

			// alternate names
			let alternateNames = document.createElement('div');
			alternateNames.className = 'card-alternate-names';

			if (character.alternate_names.length !== 0)
				alternateNames.textContent = `Alternate names: ${character.alternate_names.join(
					', '
				)}`;

			textWrapper.append(name, alternateNames);
			cardWrapper.append(image, textWrapper);

			document.body.appendChild(cardWrapper);
		});
	});
