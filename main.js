// TAREFA PRONTA
let $btnPronto = $('#btnP');

$btnPronto.click(function (evt) {

    //5
    $(this).hide();
    $('#btnD').show();

    let $card = $(this).parent().parent();
    let $pronto = $('#pronto');

    $pronto.append($card);

    
});

// DESFAZER TAREFA
let $btnDesfazer = $('#btnD');

$btnDesfazer.click(function (evt) {

    //5
    $(this).hide();
    $('#btnP').show();

    let $card = $(this).parent().parent();
    let $desfazer = $('#card-container');

    $desfazer.append($card);

    
});

// EXCLUI TAREFA
let btnExclui = $('#btnE');

btnExclui.click(function (evt) {
    let card = $(this).parent().parent();
    card.remove();
});

// CRIA NOVA TAREFA
// A
let form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let script_card = document.getElementById('placeholder-card')
    let conteudo_html = script_card.innerHTML

    let titulo = document.getElementById('input-titulo').value;
    let descricao = document.getElementById('input-descricao').value;

    conteudo_html = conteudo_html.replace("@titulo", titulo);
    conteudo_html = conteudo_html.replace("@descricao", descricao)

    console.log(conteudo_html);

    $container = $('#card-container');
    $card = $(conteudo_html)

    $container.append($card);
});

//