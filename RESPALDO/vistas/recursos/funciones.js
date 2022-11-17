// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
            RegistrarDepartamento();
            event.preventDefault();
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  function RegistrarDepartamento(){
    let codigo = document.querySelector("#txtCodigoDepto").value;
    let Nombre = document.querySelector("#txtNombreDepto").value;

    let url = `http://localhost:3000/departamentos`;
    let datos = {
      codigo: codigo,
      nombre: Nombre
    };

    fetch(url,{
      method: "POST",
      body: JSON.stringify(datos),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(mensaje=>{
      console.log(mensaje)})

    
  }