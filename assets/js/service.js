
const svg = document.querySelector('svg.squiggle')
const path = svg.querySelector('path')
// const eachsection = querySelector('#scrollbar-id')

const scroll = () => {
    const distance = window.scrollY
    const totalDistance = svg.clientHeight - window.innerHeight

    const percentage = distance / totalDistance

    const pathlength = path.getTotalLength()
    path.style.strokeDasharray = `${pathlength}`
    path.style.strokeDashoffset = `${pathlength * (1- percentage)}`
}

scroll()
window.addEventListener('scroll',scroll)









  








const options = {
	rainbow: false,
	circles: false,
	shadows: true,
	depth: false,
	organicShape: false,
	insetBorders: false,

	noiseFactor: 0.0005,
	maxParticlesPerFrame: 9, // set options.maxParticlesPerFrame = 9 for a smoother* performance in Firefox
	minParticleSize: 10,
	maxParticleSize: 90,
	zoomFactor: 1 / 5
};

let mouseX = null;
let mouseY = null;
let mousePosTimer = setTimeout(() => {}, 10);

const container = document.querySelector(".particles");
const controls = document.querySelectorAll('.controls input[type="checkbox"]');
const colors = [
	"rgb(0, 190, 255)",
	"rgb(255, 255, 255)",
	"rgb(0, 160, 255)",
	"rgb(255, 165, 0)",
	"rgb(240, 245, 250)",
	"rgb(230, 60, 0)"
];

const random = (min, max, round) => {
	let value = min + Math.random() * (max - min);
	return round ? Math.round(value) : value;
};

const color = () => {
	return colors[random(0, colors.length - 1, true)];
};

const map = (value, inMin, inMax, outMin, outMax) => {
	return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const simplex = new SimplexNoise();

const createParticle = (index, x, y, hue, diameter) => {
	let particle = document.createElement("div");
	let particleCSS = particle.style;
	particle.classList.add("particle");

	let size = options.organicShape ? diameter : options.maxParticleSize;
	let diameter_ = Math.max(options.minParticleSize, size) * options.zoomFactor;
	let color_ = options.rainbow ? `hsl(${hue}deg, 60%, 70%)` : color();

	particleCSS.width = `${diameter_}vmin`;
	particleCSS.height = `${diameter_}vmin`;

	if (options.insetBorders) {
		particleCSS.border = `${10 * options.zoomFactor}vmin solid transparent`;
		particleCSS.backgroundClip = `border-box`;
	}

	if (!options.shadows) particleCSS.setProperty("--shadow-opacity", "0");

	if (!options.depth) particleCSS.setProperty("--depth-opacity", "0");

	particleCSS.backgroundColor = color_;
	particleCSS.color = color_;
	particleCSS.borderRadius = options.circles ? "50%" : `${random(10, 50)}%`;
	particleCSS.left = `${x}px`;
	particleCSS.top = `${y}px`;

	let shiftX = random(-100, 100) * options.zoomFactor;
	let shiftY = random(-100, 100) * options.zoomFactor;
	let delay = `${random(10, 40)}ms`;

	particle.style.setProperty("--i", delay);
	particle.style.setProperty("--shiftX", shiftX + "vmin");
	particle.style.setProperty("--shiftY", shiftY + "vmin");

	particle.addEventListener("animationend", () => particle.remove());

	return particle;
};

const drawParticles = (x, y, hue, d) => {
	let particleCount = random(1, options.maxParticlesPerFrame, true),
		particleFragment = new DocumentFragment();

	for (let i = 0; i < particleCount; ++i)
		particleFragment.appendChild(createParticle(i, x, y, hue, d));

	container.appendChild(particleFragment);
};

const render = (time) => {
	const noiseX = (simplex.noise2D(0, time * options.noiseFactor) + 1) / 2;
	const noiseY = (simplex.noise2D(1, time * options.noiseFactor) + 1) / 2;

	const posX = mouseX || map(noiseX, 0, 1, 0, window.innerWidth);
	const posY = mouseY || map(noiseY, 0, 1, 0, window.innerHeight);
	const hue =
		map(mouseX, 0, window.innerWidth, 0, 360) || map(noiseX, 0, 1, 0, 360); // hue is based on the X axis movement
	const diameter =
		map(mouseY, 0, window.innerHeight, 0, options.maxParticleSize) ||
		map(noiseY, 0, 1, 0, options.maxParticleSize); // diameter is based on the Y axis movement

	drawParticles(posX, posY, hue, diameter);
	requestAnimationFrame(render);
};

const clearMousePositions = (duration) => {
	if (mousePosTimer) clearTimeout(mousePosTimer);
	mousePosTimer = setTimeout(() => {
		mouseX = null;
		mouseY = null;
		document.body.style.cursor = "default";
		console.log("mouseout");
	}, duration);
};

const setMousePositions = (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
	document.body.style.cursor = "none";
	clearMousePositions(1000);
};

const initControls = () => {
	controls.forEach((control) => {
		applyControl(control);
		control.addEventListener("change", () => applyControl(control));
	});
};

const applyControl = (control) => {
	let optionsPrefix = control.dataset["changes"];
	let classPrefix = control.dataset["class"];
	let bodyclassList = document.body.classList;

	if (optionsPrefix) {
		options[optionsPrefix] = !!control.checked;
		console.log("=>", optionsPrefix, options[optionsPrefix]);
	} else {
		if (control.checked) bodyclassList.add(classPrefix);
		else bodyclassList.remove(classPrefix);

		console.log("=>", classPrefix, [...bodyclassList].indexOf(classPrefix));
	}
};

window.addEventListener("load", () => {
	initControls();
	setTimeout(() => requestAnimationFrame(render), 400);
});

container.addEventListener("mousemove", (e) => setMousePositions(e));
container.addEventListener("touchmove", (e) => setMousePositions(e.touches[0]));
container.addEventListener("mouseout", () => clearMousePositions(100));
container.addEventListener("touchend", () => clearMousePositions(10));

document
	.querySelector(".controls")
	.addEventListener("mouseover", () =>
		document.body.setAttribute("data-hint-shown", "yes")
	);






	var authAnimation

function openAuthModal(cardTitle,cardDescription,cardImage) {
  const navbar = document.getElementById('nav-bar')
  const handburger = document.getElementById('handburger')
  const title = document.getElementById('modal-title')
  const image = document.getElementById('modal-image')
  const description = document.getElementById('modal-description')

  navbar.style.width = 'fit-content'
  handburger.style.display = 'none'



  title.innerText = cardTitle
  description.innerText = cardDescription
  image.src = cardImage
  

    authAnimation = gsap.timeline({ defaults: { ease: "power2.inOut" }})
        .to("#authOverlay", {scaleY: 0.01, x: 1, opacity: 1, display: "flex", duration: 0.4})
        .to("#authOverlay", {scaleY: 1,duration: 0.6})
        .to("#authOverlay #second", {scaleY: 1, opacity: 1, duration: 0.6}, "-=0.4")
        .to("#authOverlay #third", {scaleY: 1, opacity: 1, duration: 0.4}, "-=0.2")
        .to("#authOverlay #fourth", {duration: 0.8}, "-=0.4")
}

function closeAuthModal() {

  const navbar = document.getElementById('nav-bar')
  const handburger = document.getElementById('handburger')          



  console.log('closing....');
  
  authAnimation.reverse().timeScale(-1.6)

    navbar.style.width = '100%'
  handburger.style.display = 'block'
}











