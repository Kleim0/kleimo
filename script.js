const infoC = document.getElementById("info-container");

const wenis = document.getElementById("wenis");
const skibb = document.getElementById("skibb");
const gay = document.getElementById("gay");
const projects = document.getElementById("project-wrapper");

// 18.4 char height  45 per line 20 lines  45 character per line. each line is 18.4
const chars = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$'];
function ben() {
	let text = "";
	for(let i=0; i < Math.floor(infoC.clientHeight / 26.7) * 45; i++) {
		let number = Math.floor(Math.random() * 66);
		if (chars[number] == "&") {
			console.log("penis");
		}
		text += chars[number];
	}
	wenis.innerHTML = text.toString();
}
let gays = setInterval("ben()", 80);

let delay = 1000;
let active = false;
function change(inn) {
	if (active == false) {
		active = true;
		infoC.classList.add("animate");
		setTimeout(() => {
			clearInterval(gays);
			wenis.style.display = "none";
			skibb.style.display = "none";
			gay.style.display = "none";
			projects.style.display = "none";
			switch(inn) {
				case "about":
					skibb.style.display = "block";
					break;
				case "gay":
					gay.style.display = "block";
					break;
				case "projects":
					projects.style.display = "flex";
					break;
			}
		}, delay);
		setTimeout(() => {
			infoC.classList.remove("animate");
			active = false;
		}, delay * 2);
	};	
};

function popup(message) {
	let popup = document.createElement("div");
	document.body.appendChild(popup);
	popup.classList.add("popup");
	let popupText = document.createElement("p");
	popup.appendChild(popupText);
	popupText.innerHTML = message;
	let popupExit = document.createElement("img");
	popup.appendChild(popupExit);
	popupExit.src = "icons/close.svg";
	popupExit.addEventListener("click", function(){popup.remove()});
}


window.addEventListener('resize', penis);

function penis() {
	const links = document.getElementsByTagName('a');
	if (screen.width < 900 || screen.height < 650 || window.innerWidth < 900 || window.innerHeight < 650) {
		delay = 0;
		skibb.innerHTML = "Yo, I started getting into coding around 2020 during the midst of the pandemic becuase I wanted to be a game developer. I haven't really been the most consistent with getting better at coding as to why I still suck, atleast I'm trying :skull: Apart from programming, I enjoy drawing, sports, reading, and playing games :P <br>--<br>You can find my Youtube, Github, and Replit at the top!";
		for (let i=0; i < links.length; i++) {
			links[i].setAttribute("target", "_self");
		} 
	} else {
		delay = 1000;
		skibb.innerHTML = "Yo, I started getting into coding around 2020 during the midst of the pandemic becuase I wanted to be a game dev. As you can see from my sad attempts at being zark muckerberg in the projects section, that didn't happen. I haven't really been the most consistent with getting better at coding as to why I still suck, atleast I'm trying :skull: Apart from programming, I enjoy drawing, sports, reading, and playing games :P <br>--<br>You can find my socials & stuff in the top left!"
		for (let i=0; i < links.length; i++) {
		links[i].setAttribute("target", "_self");
		} 
	}
}

penis();