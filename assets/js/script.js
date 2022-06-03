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



//control steps simulador ============================================

const btn_first = document.getElementById('btn_first_step'); //first button simulator
const input_first = document.getElementById('input_first'); //first input simulator
const square = document.querySelector('.square'); //quadrado que mostro o valor da simulação

const first_step = document.querySelector('.first_step');
const second_step = document.querySelector('.second_step');

//função que marca a borda de um elemento
function warningElement(el){
    
    el.classList.add('border-red');
    setTimeout(function(){
        el.classList.remove('border-red');
    }, 666);
}

if(btn_first){
    btn_first.addEventListener('click', function(e){

        if(input_first.value == ""){
    
            warningElement(document.querySelector('.input_simple'));
            
        }else{

            let step_cur = e.currentTarget.getAttribute('data-step');

            if(step_cur == 1){
                square.classList.add('d-block');
                e.currentTarget.innerText = "Simular com meus dados";
                e.currentTarget.classList.add('next_step');

                e.currentTarget.setAttribute('data-step', '2');
            }else{
                first_step.classList.add('d-none');
                second_step.classList.add('d-block');
            }
    
        }
    
    });
}
    

function submitDate(){
  
    let name = document.getElementById('inputName');
    let telefone = document.getElementById('inputTel');
    let cpf = document.getElementById('inputCpf');
    let email = document.getElementById('inputEmail');

    let agree = document.getElementById('concordo');
    let terms = document.getElementById('termos');


    if(name.value && telefone.value && cpf.value && email.value){

        if(agree.checked && terms.checked){

            //envia o formulário e próximos passos

        }else{
            alert('você deve aceitar os termos');
        }
        
    }else{

        if(!name.value){
            warningElement(name);
        }
        if(!telefone.value){
            warningElement(telefone);
        }
        if(!cpf.value){
            warningElement(cpf);
        }
        if(!email.value){
            warningElement(email);
        }
    }

}


//proposta selecionada
const select_prop = document.querySelectorAll('#select_prop'); //seleciona todos os botões de seleção de proposta
const open_table = document.querySelectorAll('#open_parcelas'); //botoes que abrem as tabelas de parcelas
const table_parcelas = document.querySelectorAll('#table_parcelas');

select_prop.forEach((item) => {

    item.addEventListener('click', function(e){

        select_prop.forEach((item) => {

            item.classList.replace('btn_select_proposta', 'btn_unselect_proposta');

        });

        e.currentTarget.classList.replace('btn_unselect_proposta', 'btn_select_proposta')

    });

});

open_table.forEach((item, index) => {

    item.addEventListener('click', (e) =>{

        

        if(table_parcelas[index].classList.contains('open_board_table_det')){
            table_parcelas[index].classList.remove('open_board_table_det');
            e.currentTarget.querySelector('#arrow_open_table').style.transform = "unset";
            e.currentTarget.querySelector('#arrow_open_table').style.position = "unset";

        }else{
            table_parcelas.forEach((item) => {

                item.classList.remove('open_board_table_det');
    
            });
            document.querySelectorAll('#arrow_open_table').forEach((item) => {

                item.style.transform = "unset";
                item.style.position = "unset";

            });
            table_parcelas[index].classList.add('open_board_table_det');
            e.currentTarget.querySelector('#arrow_open_table').style.transform = "rotate(180deg)";
            e.currentTarget.querySelector('#arrow_open_table').style.position = "absolute";
        }

        

    });

});