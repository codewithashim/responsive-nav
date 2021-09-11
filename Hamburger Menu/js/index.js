const mainManu = document.querySelector('.mainManu');
const openMenu = document.querySelector('.openMenu');
const cluseMenu = document.querySelector('.cluseMenu');

openMenu.addEventListener('click',show);
cluseMenu.addEventListener('click',close);

function show(){
    mainManu.style.display = 'flex';
    mainManu.style.top = '10vh';
}

function close(){
    mainManu.style.top = '-10000%';
}