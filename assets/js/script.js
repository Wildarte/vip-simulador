const btn_menu = document.getElementById('menu-toggle');
const menu_full = document.querySelector('.header_right');

const btn_simulador = document.getElementById('btn_simulador'); //button open simulador
const modal_sim = document.querySelector('.modal_board');


btn_menu.addEventListener('click', () => {

    menu_full.classList.toggle('header_menu_open');

});

btn_simulador.addEventListener('click', () => {

    modal_sim.classList.add('modal_board_open');

});

modal_sim.addEventListener('click', () => {
    modal_sim.classList.remove('modal_board_open');
});