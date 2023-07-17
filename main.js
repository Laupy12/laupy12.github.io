function AbrirLogin(){
    let loginModal = document.getElementById("loginModal");
    loginModal.classList.remove("hidden");
    let loginScreenBG = document.getElementById("loginScreenBG");
    loginScreenBG.classList.remove("hidden");
}

function CerrarModal() {
    let loginModal = document.getElementById("loginModal");
    loginModal.classList.add("hidden")
    let loginScreenBG = document.getElementById("loginScreenBG");
    loginScreenBG.classList.add("hidden")
}

function Logeado() {
  var usuario = document.getElementById('userInput').value;
  var contra = document.getElementById('userContra').value;
  if (contra.length <= 2) {
    alert("Ingrese una contraseña con mas de 3 caracteres")
  }
  if (usuario.length <= 2) {
    alert("Ingrese un usuario con mas de 3 caracteres")
  }
  if (contra.length >= 2 && usuario.length >= 3){
    window.location.href = 'premium.html?usuario=' + encodeURIComponent(usuario);
  }
}

// Obtener el valor del parámetro "usuario" de la URL
var parametros = new URLSearchParams(window.location.search);
var usuario = parametros.get('usuario');

// Modificar el texto del elemento con el valor del usuario
document.getElementById('userText').innerText = usuario;