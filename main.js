var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');
var washMash = document.getElementById('washingMachine');
var fridge = document.getElementById('fridge');
var dishwasher = document.getElementById('dishwasher');



slide3.onclick = function (event) {
    if (fridge.classList.toggle('active') || washMash.classList.toggle('active') || dishwasher.classList.toggle('active')) {
        fridge.classList.remove('active');
        washMash.classList.remove('active');
        dishwasher.classList.add('active');
    } 
};
 slide2.onclick  = function (event) {
     if (fridge.classList.toggle('active') || washMash.classList.toggle('active') || dishwasher.classList.toggle('active')) {
        washMash.classList.remove('active');
        dishwasher.classList.remove('active');
        fridge.classList.add('active');
     }
 }
 slide1.onclick = function (event) {
     if (fridge.classList.toggle('active') || washMash.classList.toggle('active') || dishwasher.classList.toggle('active')) {
         fridge.classList.remove('active');
         dishwasher.classList.remove('active');
         washMash.classList.add('active');
     }
 }

const work = document.getElementById('work');
work.scrollIntoView();