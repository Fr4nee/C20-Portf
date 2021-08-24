function AlertaExitoEs() {
        const nombre = document.getElementById("name")
        const email = document.getElementById("email")
        const telefono = document.getElementById("exampleFormControlInput1")
        const form = document.getElementById("form")
        const parrafo = document.getElementById("warnings")
        const comentario = document.getElementById("exampleFormControlTextarea1")

        form.addEventListener("submit", e=>{
            let warnings = ""
            let entrar = false
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
            let regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
            let regextelefono = /^\d{7,14}$/
            parrafo.innerHTML = ""
          
            if(!regexName.test(nombre.value) && nombre.value != ""){
                warnings += `El nombre no es valido <br>`
                entrar = true
            }
            if(nombre.value == ""){
                warnings += `Ingrese su nombre <br>`
                entrar = true
            }
            if(!regexEmail.test(email.value) && email.value != ""){
                warnings += `El email no es valido <br>`
                entrar = true
            }
            if(email.value == ""){
                warnings += ` Ingrese su email <br>`
                entrar = true
            }
            if(telefono.value == "" || telefono.value < 12){
                warnings += `  Ingrese un numero de telefono <br>`
                entrar = true
            }
            if(!regextelefono.test(telefono.value) && telefono.value != ""){
                warnings += `Ingrese un numero de telefono valido <br>`
                entrar = true
            }
            if(comentario.value == ""){
                warnings += `Ingrese su consulta `
                entrar = true
            }
            if(entrar){
                e.preventDefault()
                parrafo.innerHTML = warnings
            }else{
                parrafo.innerHTML = alert("Su consulta ha sido recibida")
            }
        })
    }

    function AlertaExitoEn() {
        const nombre = document.getElementById("name")
        const email = document.getElementById("email")
        const telefono = document.getElementById("exampleFormControlInput1")
        const form = document.getElementById("form")
        const parrafo = document.getElementById("warnings")
        const comentario = document.getElementById("exampleFormControlTextarea1")
        
        form.addEventListener("submit", e=>{
            let warnings = ""
            let entrar = false
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
            let regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
            let regextelefono = /^\d{7,14}$/
            parrafo.innerHTML = ""
          
            if(!regexName.test(nombre.value) && nombre.value != ""){
                warnings += `Enter a valid phone number <br>`
                entrar = true
            }
            if(nombre.value == ""){
                warnings += ` Enter your name <br>`
                entrar = true
            }
            if(!regexEmail.test(email.value) && email.value != ""){
                warnings = `The email is not valid <br>`
                entrar = true
            }
            if(email.value == ""){
                warnings += `Enter your email <br>`
                entrar = true
            }
            if(telefono.value == "" || telefono.value < 12){
                warnings += `Enter a phone number <br>`
                entrar = true
            }
            if(!regextelefono.test(telefono.value) && telefono.value != ""){
                warnings += `Enter a valid phone number <br>`
                entrar = true
            }
            if(comentario.value == ""){
                warnings += `Enter your consultation`
                entrar = true
            }
            if(entrar){
                e.preventDefault()
                parrafo.innerHTML = warnings
            }else{
                parrafo.innerHTML = alert("Your consultation has been received")
            }
        })
    }






   

    
    
    
    
    
    
    
    

    

















   
   
   
  