const skibb = document.getElementById("skibb");
const infoC = document.getElementById("info-container");

const chars = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$'];
function ben() {
	let text = ""
	for(let i=0; i < 855; i++) {
		let number = Math.floor(Math.random() * 66);
		if (chars[number] == "&") {
			console.log("penis")
		}
		text += chars[number];
	}
	skibb.innerHTML = text.toString();
}
let gay = setInterval("ben()", 80)


let active = false;
function change(inn) {
	if (active == false) {
		active = true;
		infoC.classList.add("animate");
		setTimeout(() => {
			clearInterval(gay);
			switch(inn) {
				case "about":
					skibb.innerHTML = `Yo, I started getting into coding around 2020 during the midst of the pandemic. As you can see from my sad attempts at being zark muckerberg in the projects section, I haven't really been the most consistent with getting better at coding, atleast I'm trying :skull: Apart from programming, I enjoy drawing, sports, reading, and playing games :P <br>--<br>You can find my socials & stuff in the top left!`;
					break;
				case "gay":
					skibb.innerHTML = "gay bitch";
					break;
				case "projects":
					skibb.innerHTML = "projecto";
					break;
			}
		}, 1000);
		setTimeout(() => {
			infoC.classList.remove("animate")
			active = false;
		}, 2000);
	};	
};