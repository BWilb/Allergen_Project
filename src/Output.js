// code cited
// https://stackoverflow.com/questions/11323548/how-to-output-message-when-2-buttons-have-been-pressed-consecutively

document.querySelector('.click').addEventListener('click', (e) => {
    // Do whatever you want
    e.target.textContent = 'Clicked!';
});

document.querySelector('.click2').addEventListener('click', (e)      => {
    // Do whatever you want
    e.target.textContent = 'Clicked!';
});

document.querySelector('.click3').addEventListener('click', (e) => {
    // Do whatever you want
    e.target.textContent = 'Clicked!';
});

document.querySelector('.click4').addEventListener('click', (e) => {
    // Do whatever you want
    e.target.textContent = 'Clicked!';
});

var glutenbutton = false;
var pfeifferbutton = false;
var dairybutton = false;
var peanutbutton = false;
var b1_id = document.getElementById('glutenbutton');
var b2_id = document.getElementById('dairybutton');
var b3_id = document.getElementById('peanutbutton');
var b4_id = document.getElementById('pfeifferbutton')

b1_id.addEventListener('click',click1,false);
function click1() {
    // alert("Button1 clicked");
    glutenbutton = true;
    check();
}
b2_id.addEventListener('click',click2,false);
function click2() {
    // alert("Button1 clicked");
    dairybutton = true;
    check();

}
b3_id.addEventListener('click',click3,false);
function click3() {
    peanutbutton = true;
    check();
}
b4_id.addEventListener('click', click4, false)
function click4() {
    // alert("Button2 clicked");
    // if (glutenbutton!== false && dairybutton !== false)
        pfeifferbutton = true;
    // else if (peanutbutton!== false && dairybutton !== false) pfeifferbutton = true;
    // else if (peanutbutton!== false && glutenbutton !== false) pfeifferbutton = true;
    // else if (glutenbutton !== false) pfeifferbutton = true;//this is to make sure they are clicked consecutivley
    // else if (dairybutton !== false) pfeifferbutton = true;
    // else if (peanutbutton !== false) pfeifferbutton = true;

    check();
}


function check() {
    if (dairybutton === true && pfeifferbutton === true && glutenbutton=== true) {
        alert("dairy, gluten, and pfeiffer clicked consecutively");
        window.open('src/webscrapingDatabase/html/Pfieffer.html');
        dairybutton = false;
        pfeifferbutton = false;
        glutenbutton = false;

        document.querySelector('.click2').textContent = 'Dairy';
        document.querySelector('.click4').textContent = 'Pfeiffer';
        document.querySelector('.click').textContent = 'Gluten';
    }

    else if (dairybutton === true && pfeifferbutton === true && peanutbutton === true) {
        alert("dairy, peanut, and pfeiffer clicked consecutively");
        window.open('src/webscrapingDatabase/html/Pfieffer.html');
        dairybutton = false;
        pfeifferbutton = false;
        peanutbutton = false;

        document.querySelector('.click2').textContent = 'Dairy';
        document.querySelector('.click4').textContent = 'Pfeiffer';
        document.querySelector('.click3').textContent = 'Peanut';
    }
    else if (glutenbutton === true && pfeifferbutton === true && peanutbutton === true) {
        alert("gluten, peanut, and pfeiffer clicked consecutively");
        window.open('src/webscrapingDatabase/html/Pfieffer.html');
        glutenbutton = false;
        pfeifferbutton = false;
        peanutbutton = false;

        document.querySelector('.click').textContent = 'Gluten';
        document.querySelector('.click4').textContent = 'Pfeiffer';
        document.querySelector('.click3').textContent = 'Peanut';
    }

    else if (glutenbutton === true && pfeifferbutton === true) {
        alert("gluten and pfeiffer clicked consecutively");
        window.open('src/webscrapingDatabase/html/Pfieffer.html');

        glutenbutton = false;
        document.querySelector('.click').textContent = 'Gluten';

        pfeifferbutton = false;
        document.querySelector('.click4').textContent = 'Pfeiffer';

    }

    else if (dairybutton === true && pfeifferbutton === true) {
        alert("dairy and pfeiffer clicked consecutively");
        window.open('src/webscrapingDatabase/html/Pfieffer.html');
        dairybutton = false;
        pfeifferbutton = false;
        document.querySelector('.click2').textContent = 'Dairy';
        document.querySelector('.click4').textContent = 'Pfeiffer';
    }

    else if (peanutbutton === true && pfeifferbutton === true) {
        alert('peanut and pfeiffer clicked consectutively');
        window.open('src/webscrapingDatabase/html/Pfieffer.html');
        peanutbutton = false;
        pfeifferbutton = false;
        document.querySelector('.click4').textContent = 'Pfeiffer';
        document.querySelector('.click3').textContent = 'Peanut';
    }
}