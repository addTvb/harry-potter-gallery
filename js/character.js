'use strict';

const localCharacter = localStorage.getItem('hp-character');
const character = JSON.parse(localCharacter);

const setEyeColor = (eyeColor) => {
	const eye = document.querySelector('#eye-color');
	if (eyeColor === 'grey') eye.style = 'background-color: var(--gray);';
	if (eyeColor === 'brown') eye.style = 'background-color: var(--brown);';
	if (eyeColor === 'green') eye.style = 'background-color: var(--green);';
	if (eyeColor === 'blue') eye.style = 'background-color: var(--blue);';
	if (eyeColor === 'red') eye.style = 'background-color: var(--red);';
};

const setCharacterHouse = (house) => {
	const houseImg = document.querySelector('#character-house');
	if (house === 'Gryffindor') houseImg.src = './img/Gryffindor.png';
	if (house === 'Slytherin') houseImg.src = './img/Slytherin.png';
	if (house === 'Ravenclaw') houseImg.src = './img/Ravenclaw.webp';
	if (house === 'Hufflepuff') houseImg.src = './img/Hufflepuff.jpg';
};

const setCharacterAlive = (alive) => {
	const circle = document.querySelector('#alive-circle');
	const aliveStatus = document.querySelector('#character-alive');

	if (alive) {
		circle.classList.add('green');
		aliveStatus.append('Yes');
	} else if (!alive) {
		circle.classList.add('red');
		aliveStatus.append('No');
	} else {
		circle.classList.add('orange');
		aliveStatus.append('Unknown');
	}
};

const setBirthDate = (date, year) => {
	const birthDate = document.querySelector('#character-birth');

	if (date) {
		const formattedDate = date.split('-').join('.');
		birthDate.textContent = formattedDate;
	} else birthDate.textContent = year;
};

const setCharacterInfo = () => {
	const name = document.querySelector('#character-name');
	const actor = document.querySelector('#character-actor');
	const image = document.querySelector('#character-image');
	const wizard = document.querySelector('#character-wizard');

	if (character.wizard) {
		if (character.gender === 'male') wizard.textContent = 'Yes🧙‍♂️';
		if (character.gender === 'female') wizard.textContent = 'Yes🧙‍♀️';
	} else {
		if (character.gender === 'male') wizard.textContent = 'No🧔';
		if (character.gender === 'female') wizard.textContent = 'No👩';
	}
	name.textContent = character.name;
	actor.textContent = character.actor;
	
	if (character.image) image.src = character.image;
	else image.classList.add('placeholder');
};

setCharacterInfo();
setCharacterHouse(character.house);
setEyeColor(character.eyeColour);
setCharacterAlive(character.alive);
setBirthDate(character.dateOfBirth, character.yearOfBirth);
