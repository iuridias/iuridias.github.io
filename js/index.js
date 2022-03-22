//Constantes para Menu e Switch de Modo (Dark e Light)
const botaoMenu = document.querySelector('.cabecalho__menu');
const botaoMode = document.querySelector('.cabecalho__mode');
const menu = document.querySelector('.menu-lateral');

//Const para salvar estado do modo dark
const storageMode = localStorage.getItem('statusDarkMode')

//Meta Tag - para alterar cor da barra superior do android
const metaThemeColor = document.querySelector('meta[name=theme-color]');

//Constante para desaparecer o Menu ao clicar
const menuLinks = document.querySelectorAll('.menu-lateral__link');

//Verifica o Storage para determinar o dark-mode
if (storageMode) {
  document.documentElement.classList.add('dark-mode');
  metaThemeColor.setAttribute('content', '#141414');
}

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo');
});

botaoMode.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  //Se o dark-mode tiver ativo, salva seu estado no storage, senão remove o status
  if (document.documentElement.classList.contains('dark-mode')) {
    localStorage.setItem('statusDarkMode', true);
  } else {
    localStorage.removeItem('statusDarkMode');
    metaThemeColor.setAttribute('content', '#F7F7F7');
  }
});

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo');
  })
}