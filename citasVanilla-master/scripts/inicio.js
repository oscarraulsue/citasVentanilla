let usuario = []
let formReg = document.getElementById('formReg');
let formInicio = document.getElementById('formInicio');
let register = document.getElementById('register');
let regresar = document.getElementById('regresar');
let comprobar1 = JSON.parse(localStorage.getItem('Usuario'));


if( comprobar1 !== null){
    usuario  = JSON.parse(localStorage.getItem('Citas'));

}

const capturaDatos1 = () => {
    let valUsurio = JSON.parse(localStorage.getItem('Usuario'));
    let email = document.getElementById('inputEmail4').value;
    let pass = document.getElementById('inputPassword4').value;
    let direc = document.getElementById('inputAddress').value;
    let city = document.getElementById('inputCity').value;
    let valiEmail = valUsurio.filter( mail => mail.email === email);
console.log(valiEmail)
  if (valiEmail.length > 0) {
      alert('Este correo ' + email + ' ya se encuentra registrado');
  }else{

    let login = {
        email,
        pass,
        direc,
        city
    }

    usuario.unshift(login);
    localStorage.setItem('Usuario',JSON.stringify(usuario));
}
}

formReg.addEventListener('submit', e => {
    e.preventDefault();
    
    capturaDatos1();
    document.querySelector('#formReg').reset();
    alert('Usuario guardado con exito');
    document.getElementById('registro').style.display = "none";
document.getElementById('iniciar').style.display = "flex";
    
})
const validacion = () => {
    let vall = JSON.parse(localStorage.getItem('Usuario'));
    
    let emailF = document.getElementById('exampleInputEmail1').value;
    let passF = document.getElementById('exampleInputPassword1').value;
    let valiEmail = vall.filter(usuario => usuario.email.toLowerCase()  === emailF.toLowerCase())
    console.log(emailF)
  
    console.log(valiEmail)
    valiEmail.length === 0 ?
    alert('El correo no se encuentra registrado') :
    valiEmail.map(usuario => { 
        const {pass} = usuario;
        console.log(passF)
        console.log(pass)
        if (passF == pass){
            console.log('corret')
            location.href="index.html";
        }else{

            alert('Contraseña incorrecta')
        }
     })

}

formInicio.addEventListener('submit', e => {
    e.preventDefault();
    validacion();
 document.getElementById('exampleInputPassword1').value = "";
})
register.addEventListener('click', e => {
    e.preventDefault();
console.log('yeah')
document.getElementById('registro').style.display = "flex";
document.getElementById('iniciar').style.display = "none";
document.querySelector('#formInicio').reset();
})
regresar.addEventListener('click', e => {
    e.preventDefault();
console.log('yeah')
document.getElementById('registro').style.display = "none";
document.getElementById('iniciar').style.display = "flex";
document.querySelector('#formReg').reset();
})
