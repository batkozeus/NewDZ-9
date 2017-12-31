// Task 1

const lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./",
  space: "space",
  sound: ['do', 're', 'mi', 'fa', 'sol', 'la', 'si']
};

// let massAlphabet = lang['en'].split('');


// for (var i = 0; i < lang.en.length; i++) {
// 	console.log(lang.en[i]);
// }

console.log(lang.sound[Math.floor(lang.sound.length * Math.random())]);


const html = document.querySelector("#musicKey").textContent.trim();

const compiled = _.template(html);

const result = compiled(lang);

const container = document.querySelector("#wrapper");

container.innerHTML = result;


const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
keys.push(' ');

console.log(keys);

const toggleSound = document.querySelector("#slideThree");


let callback = (event) => {
	// if ((event.keyCode >=65 && event.keyCode <=90) || event.keyCode == 188 || event.keyCode == 190 || event.keyCode == 191 || event.keyCode == 219 || event.keyCode == 221 || event.keyCode == 222 || event.keyCode == 32 ) {
	for (let i=0; i<keys.length; i++) {
		if (event.key == keys[i]) {

			if (event.key == buttons[i].innerHTML || event.key == ' ') {

				buttons[i].classList.add("keyboard__btn--active");
				setTimeout(() => {
			      buttons[i].classList.remove("keyboard__btn--active");
			    }, 300);

			    if (toggleSound.checked) {
			    	playSound(buttons[i].getAttribute('data-note'));
			    }

			}
		}
	}
	
}

window.addEventListener("keydown", callback);