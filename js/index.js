const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

 botaoMenu.addEventListener('click', () => {
   menu.classList.toggle('menu-lateral--ativo');
 })

const menuHome = document.querySelector('.menu-lateral__link-inicio');
const menuSobre = document.querySelector('.menu-lateral__link-sobre');
const menuHabilidades = document.querySelector('.menu-lateral__link-habilidades');
const menuProjetos = document.querySelector('.menu-lateral__link-projetos');
const menuContato = document.querySelector('.menu-lateral__link-contato');

menuHome.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo');
})

menuSobre.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo');
})

menuHabilidades.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo');
})

menuProjetos.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo');
})

menuContato.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo');
})
