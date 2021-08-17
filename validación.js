



function AlertaExito() {
        const nombre = document.getElementById("name")
        const email = document.getElementById("email")
        const telefono = document.getElementById("exampleFormControlInput1")
        const form = document.getElementById("form")
        const parrafo = document.getElementById("warnings")
        
        form.addEventListener("submit", e=>{
            
            let warnings = ""
            let entrar = false
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
            let regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
            let regextelefono = /^\d{7,14}$/
            parrafo.innerHTML = ""
            if(nombre.value.length <6){
            
                warnings += ` <br> El nombre debe ser mayor a 6 digitos <br>`
                entrar = true
            }
    
            if(!regexName.test(regexName.value) && nombre.value == null){
           
                warnings += `El nombre no es valido <br>`
                entrar = true
            }
    
            if(!regexEmail.test(email.value)){
           
                warnings += `El email no es valido <br>`
                entrar = true
            }
            if(email.value == null){
             
                warnings += `Ingrese su email <br>`
                entrar = true
                
            }
    
            if(telefono.value == null && telefono.value < 12){
                warnings += `  Ingrese un numero de telefono valido <br>`
                entrar = true
            }
    
            if(!regextelefono.test(telefono.value)){
           
                warnings += `Ingrese un numero de telefono valido`
                entrar = true
            }
    
            if(entrar){
                e.preventDefault()
                parrafo.innerHTML = warnings
            }else{
                parrafo.innerHTML = alert("Gracias por su consulta")
                
            
            }
        })

    }






   

    
    
    
    
    
    
    
    

    

















   
   
   
  