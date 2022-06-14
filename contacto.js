const re = /\S+@\S+\.\S+/
window.addEventListener('load', function(){
    let fomrR= this.document.querySelector('#contacto-form')
    fomrR.onsubmit = function(ev){
        ev.preventDefault()
        let inputNombreyApellido = document.querySelector('#NombreyApellido')
        let textoNombreyApellido = inputNombreyApellido.value
        if(textoNombreyApellido.length < 2 ){
            let spanError = inputNombreyApellido.parentElement.querySelector('span')
            spanError.innerHTML= 'Escribe Nombre y Apellido'
        }
        let inputPaís = document.querySelector('#país')
        let textoPaís = inputPaís.value
        if(textoPaís.length < 2 ){
            let spanError = inputPaís.parentElement.querySelector('span')
            spanError.innerHTML= 'Escribe País'
        }
        let inputasunto = document.querySelector('#asunto')
        let textoasunto = inputasunto.value
        if(textoasunto.length < 2 ){
            let spanError = inputasunto.parentElement.querySelector('span')
            spanError.innerHTML= 'Escribe Asunto'
        }

        let inputEmail = document.querySelector('#email')
        
        // compruebo que cumpla con la patron del email
        if (!re.test(inputEmail.value)) {
            // debeo aqui colocar el mensaje de error
            let spanError = inputEmail.parentElement.querySelector('span')
            spanError.innerHTML= 'Escribe Mail Válido'
        } 

        ev.preventDefault();
    }
})
 
