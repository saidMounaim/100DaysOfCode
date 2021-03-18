let w = dotty.width = window.innerWidth;
let h = dotty.height = window.innerHeight;

let sum = w + h;
let ctx = dotty.getContext("2d");
const opts = {
    side: 15,
    pickPartick: 2,
    baseTime: 40,
    addedTime: 10,
    colors: ['rgba(39, 174, 96,alp)', 'rgba(41, 128, 185, alp)', 'rgba(236, 240, 241, alp)'],
    addedAlpha: 20,
    strokeColor: 'rgba(43,45,53)',
    hueSpeedL: 0.2,
    repainAlpha: 1
}

let difX = Math.sqrt(3) * opts.side / 2;
let difY = opts.side * 3 / 2;
let rad = Math.PI / 6;
let cons = Math.cos(rad) * opts.side;
let sin = Math.sin(rad) * opts.side;

let hexs = [];
let tick = 0;