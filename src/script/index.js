const lightBtn = document.getElementById('light')
const darkBtn = document.getElementById('dark')
const purpleBtn = document.getElementById('purple')

const navBar = document.querySelector('.navegation-bar')
const mainContent = document.querySelector('.to-change')

darkBtn.addEventListener('click', ()=>{
    navBar.classList.add('dark-mode');
    navBar.classList.remove('purple-mode');
    mainContent.classList.add('dark-mode');
    mainContent.classList.remove('purple-mode');
    darkBtn.classList.add('active')
    lightBtn.classList.remove('active')
    purpleBtn.classList.remove('active')
})

purpleBtn.addEventListener('click', ()=>{
    navBar.classList.add('purple-mode');
    navBar.classList.remove('dark-mode');
    mainContent.classList.add('purple-mode');
    mainContent.classList.remove('dark-mode');
    purpleBtn.classList.add('active')
    lightBtn.classList.remove('active')
    darkBtn.classList.remove('active')
})

lightBtn.addEventListener('click', ()=>{
    navBar.classList.remove('dark-mode', 'purple-mode')
    mainContent.classList.remove('dark-mode', 'purple-mode')
    lightBtn.classList.add('active')
    darkBtn.classList.remove('active')
    purpleBtn.classList.remove('active')
})