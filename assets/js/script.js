const btn_menu = document.getElementById('menu-toggle');
const menu_full = document.querySelector('.header_right');

const btn_simulador = document.getElementById('btn_simulador'); //button open simulador
const modal_sim = document.querySelector('.modal_board');
const board_simulador = document.querySelector('.board_simulador');


btn_menu.addEventListener('click', () => {

    menu_full.classList.toggle('header_menu_open');

});

btn_simulador.addEventListener('click', () => {

    modal_sim.classList.add('modal_board_open');
    board_simulador.classList.add('d-flex');

    setTimeout(() => {
        board_simulador.classList.add('board_simulador_open');
    }, 10);

});

modal_sim.addEventListener('click', (e) => {

    //caso o elemento pai tenha sido clicado
    if (e.target.nodeType == 1 && e.target.classList.contains('modal_board')){
        
        board_simulador.classList.remove('board_simulador_open'); 

        setTimeout(() => {
            modal_sim.classList.remove('modal_board_open');
            board_simulador.classList.remove('d-flex');
        }, 200);
    }

    /*
    board_simulador.classList.remove('board_simulador_open');
    document.querySelector('body').classList.remove('modal_open');

    setTimeout(() => {
        modal_sim.classList.remove('modal_board_open');
        board_simulador.classList.remove('d-flex');
    }, 200);
    */

});

board_simulador.addEventListener('click', (e) => {

    

});