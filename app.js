const menuBtn = document.getElementById('burger-menu');
const sideNav = document.querySelector('.side-nav');
const closeBtn = document.getElementById('close-btn')
menuBtn.addEventListener('click', ()=> {
    sideNav.style.display ='block';
});
closeBtn.addEventListener('click', () =>{
    sideNav.style.display = 'none';
});