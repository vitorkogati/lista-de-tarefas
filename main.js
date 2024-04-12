$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const nomeNovaTarefa = $('#tarefa').val();
        const novaTarefa = $(`<li style = "display: none"></li>`);

        $(`<input type="checkbox" id="meuCheckbox">`).appendTo(novaTarefa);
        $(`<label for="meuCheckbox">${nomeNovaTarefa}</label>`).appendTo(novaTarefa);

        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(1000);
        $('#tarefa').val('');
        
    })

    $('ul').on('change','#meuCheckbox', function(){
        const label = $(this).next('label');
        if ($(this).is(':checked')) {
            label.addClass('checked');
        } else {
            label.removeClass('checked');
        }
    })
})