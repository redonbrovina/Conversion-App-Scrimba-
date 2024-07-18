let inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
let btnS = document.getElementById("btn-s");
let bottom = document.getElementById("bottom");
let btnT = document.getElementById("btn-t");

function length_func() {
    let mf = inputEl.value * 3.281;
    mf = mf.toFixed(3);
    let fm = inputEl.value / 3.281;
    fm = fm.toFixed(3);
    lengthEl.textContent = `${inputEl.value} meters = ${mf} feet | ${inputEl.value} feet = ${fm} meters`;
}
function volume_func() {
   let lg = inputEl.value / 3.785;
   lg = lg.toFixed(3);
   let gl = inputEl.value * 3.785;
   gl = gl.toFixed(3);
   volumeEl.textContent = `${inputEl.value} liters = ${lg} gallons | ${inputEl.value} gallons = ${gl} liters`;
   
}
function mass_func() {
    let kp = inputEl.value * 2.205;
    kp = kp.toFixed(3);
    let pk = inputEl.value / 2.205;
    pk = pk.toFixed(3);
    massEl.textContent = `${inputEl.value} kilograms = ${kp} pounds | ${inputEl.value} pounds = ${pk} kilograms`;
}

btnEl.addEventListener("dblclick", function() {
    length_func();
    volume_func();
    mass_func();
});

btnS.addEventListener("click", function() {
    bottom.style.backgroundColor =  '#1F2937';
    bottom.style.transitionDuration = '.5s';
    let box = document.querySelectorAll(".box");
    let res = document.querySelectorAll(".res");
    for(let i = 0; i<box.length; i++){
        box[i].style.backgroundColor = '#273549';
        box[i].style.color = '#CCC1FF';
        res[i].style.color = 'white';
        box[i].style.transitionDuration = '.5s';
    }

})

btnT.addEventListener("click", function() {
    bottom.style.backgroundColor = '#F4F4F4';
    bottom.style.transitionDuration = '.5s';
    let box = document.querySelectorAll(".box");
    let res = document.querySelectorAll(".res");
    for(let i = 0; i<box.length; i++){
        box[i].style.backgroundColor = 'white';
        box[i].style.color = '#5A537B';
        res[i].style.color = '#353535';
        box[i].style.transitionDuration = '.5s';
        res[i].style.transitionDuration = '.5s';
    }
})