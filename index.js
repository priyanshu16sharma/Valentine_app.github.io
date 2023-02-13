const valentineMusic = new Audio('/valentinemusic.mp3');
valentineMusic.play();
const yesMusic = new Audio('/yes.mp3');
window.onload = function welcome() {
    alert("For better Experience open this on pc/laptop...\n Yes I am lazy hence didnt add responsiveness")
    alert("Click start on Top left corner of screen to begin<3...");
}

let Yesbuttondir = { x: 2, y: 3 };
let Nobuttondir = { x: 4, y: 3 }
let times = 1;

function ModalDrop() {
    var yesButton = document.createElement('button');
    yesButton.style.gridColumnStart = Yesbuttondir.x;
    yesButton.style.gridRowStart = Yesbuttondir.y;
    yesButton.innerHTML = "<h4>Yes</h4>";
    yesButton.id = "Yes";
    yesButton.className = "button-elem";
    playArea.appendChild(yesButton);
    var NoButton = document.createElement('button');
    NoButton.style.gridColumnStart = Nobuttondir.x;
    NoButton.style.gridRowStart = Nobuttondir.y;
    NoButton.innerHTML = "<h4>No</h4>";
    NoButton.className = "button-elem No";

    NoButton.id = "No";
    playArea.appendChild(NoButton);
    app();
}
let count = 0;
function app() {
    const elem = document.getElementById("No");
    const yeselem = document.getElementById("Yes");
    elem.addEventListener('click', myFunction);
    yeselem.addEventListener('click', yesFunction);
}

function yesFunction() {
    if (count < 1) {
        alert("Awww I luv u m'lady 😳\n But Say no Atleast once, coz i worked alot on no part>:((");
    } else {
        valentineMusic.pause();
        yesMusic.play();
        alert("Good Choice Luv!!!!!!!!!😍😘🥰🥳 \n Now text me coz no db added yet >:((");
        yesMusic.pause();

    }
}

function appendNo() {
    const myelem = document.getElementById("No");
    console.log(myelem.parentNode);
    myelem.parentNode.removeChild(myelem);

    var NoButton = document.createElement('button');
    NoButton.style.gridColumnStart = Nobuttondir.x;
    NoButton.style.gridRowStart = Nobuttondir.y;
    NoButton.innerHTML = "<h4>No</h4>";
    NoButton.className = "button-elem No";
    if (count == 5 * times) {
        alert(`${5 * times} baar naa\nkya itna bura hu mai maaaa...;-; 😣`)
        times++;
    }

    NoButton.id = "No";
    playArea.appendChild(NoButton);
    app();
}

function myFunction() {
    // Your code here
    let a = 3, c = 0;
    let b = 5, d = 5;

    Nobuttondir = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(c + (d - c) * Math.random()) };
    appendNo();
    count++;
    console.log("Hi" + count);
}
