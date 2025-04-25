$(function(){

    const esEmailValido = (email) => {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const esEdadValida = (edad) =>{
        let min = 18;
        let max = 65;
        return edad >= min && edad <= max;
    }
       

    $('#contactForm').on('submit',function(e){
        let errores=[];
        let nombre = $('#inputNombre').val();
        if( nombre == ''){
            errores.push("El nombre no puede estar vacio");
        }
        let email = $('#inputEmail').val();
        if( email == ''){
            errores.push("El email no puede estar vacio");
        }else if(!esEmailValido(email)){
            errores.push("El email es invalido");
        }
        let comentarios = $('#textAreaComentarios').val();
        if( comentarios == ''){
            errores.push("Los comentarios no pueden estar vacio");
        }
        let edad = $('#inputEdad').val();
        if(!esEdadValida(edad)){
            errores.push("La edad no está permitida");
        }

        if(errores.length > 0){
            $('.errores').html(errores.join('<br/>'));
            $('.errores').addClass('alert alert-danger');
            e.preventDefault();
        }else{
            
        }
    })
})