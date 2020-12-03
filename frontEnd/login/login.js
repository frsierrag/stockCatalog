function validations() {
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    let user = document.entryData.userName;
    let pass = document.entryData.pass;
    if(user.value.length <= 4) {
        alert("Longitud de usuario incorrecta");
    }
    if(!pass.value.match(passRegex)) {
        alert("Formato de contraseña inválido");
    }
}