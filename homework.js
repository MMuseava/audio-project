"use strict";

const inputText = document.getElementById("inputText");
const clickBtn = document.getElementById("clickBtn");

const onChangeHandler = (e) => {
	let inputValue = e.target.value;
	console.log(inputValue);
	fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);

			if (data[0].phonetics[0].audio) {
				const audioUrl = data[0].phonetics[0].audio;
				document.querySelector("audio").src = audioUrl;
			} else {
				const audioUrl = data[0].phonetics[1].audio;
				document.querySelector(`audio`).src = audioUrl;
			}
		})
		.catch((err) => console.log(`Sorry, error ocured`));
};

const onClickHandler = () => {
	document.querySelector("audio").play();
};
