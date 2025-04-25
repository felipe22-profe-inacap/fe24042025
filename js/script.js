/*window.addEventListener('DOMContentLoaded',function(){ //utilizar para confirmar que el dom esta cargado
    
        // Selectore en javascript
        //    getElementById          ->  trae el elemento por el id
        //    getElementsByClassName  ->  trae los elementos por el nombre de la clase
        //    getElementByName        ->  trae elemento por su nombre o atributo name
        //    querySelector           ->  trae el primer elemento con un selector de css
        //    querySelectorAll        ->  trae todos los elementos con un selector de css
    
    document.getElementById('btn-1').addEventListener('click', function() {
        let segundoBoton  = document.getElementById('btn-2')
        segundoBoton.removeAttribute('class');
        segundoBoton.setAttribute('class','btn btn-success')

    });

    document.getElementById('btn-3').addEventListener('click', function() {
        let segundoBoton  = document.getElementById('btn-2')
        segundoBoton.removeAttribute('class');
        segundoBoton.setAttribute('class','btn btn-warning')

    });

    document.getElementById('btn-3').addEventListener('dblclick', function() {
        let segundoBoton  = document.getElementById('btn-2')
        segundoBoton.removeAttribute('class');
        segundoBoton.setAttribute('class','btn btn-primary')

    });

    document.getElementById('btn-2').addEventListener('mouseover', function() {
        document.querySelector('.card-img-top').setAttribute('src','images/03.jpg');
    });

    document.getElementById('btn-2').addEventListener('mouseout', function() {
        document.querySelector('.card-img-top').setAttribute('src','images/01.jpg');
    });

});*/


$(function(){
    $('#btn-1').on('click', function() {
        $('#btn-2').attr('class','btn btn-success');
    });

    $('#btn-3').on('click', function() {
        $('#btn-2').attr('class','btn btn-warning');
    });

    $('#btn-3').on('dblclick', function() {
        $('#btn-2').attr('class','btn btn-primary');
    });

    $('#btn-2').on('mouseover', function() {
        $('.card-img-top').first().attr('src','images/03.jpg');
    });

    $('#btn-2').on('mouseout', function() {
        $('.card-img-top').first().attr('src','images/01.jpg');
    });
});