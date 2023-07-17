function sesion1() {
    let img = document.getElementById("psicologoImg");
    img.src = "Img2/Psicologo1.png"
    let name = document.getElementById("psicologoNombre")
    let desc = document.getElementById("psicologoDesc")
    let hora = document.getElementById("psicologoHora")
    name.innerText = "Cesar"
    desc.innerText = "Entiendo tu singularidad y te ofrezco un espacio sin juicios. Mi enfoque terapéutico se basa en empatía, comprensión y colaboración para explorar tus inquietudes y encontrar soluciones."
    hora.innerText = "Hora: 12:00"
}
function sesion2() {
    let img = document.getElementById("psicologoImg");
    img.src = "Img2/Psicologo2.png"
    let name = document.getElementById("psicologoNombre")
    let desc = document.getElementById("psicologoDesc")
    let hora = document.getElementById("psicologoHora")
    name.innerText = "Carmen"
    desc.innerText = "Creo en tu capacidad de crecimiento y transformación. Trabajemos juntos para superar obstáculos y alcanzar tus metas personales en un ambiente de colaboración y empoderamiento."
    hora.innerText = "Hora: 2:30"
}
function sesion3() {
    let img = document.getElementById("psicologoImg");
    img.src = "Img2/Psicologo3.png"
    let name = document.getElementById("psicologoNombre")
    let desc = document.getElementById("psicologoDesc")
    let hora = document.getElementById("psicologoHora")
    name.innerText = "Sergio"
    desc.innerText = "Más de 10 años de experiencia en psicología y formación sólida. Brindo un espacio seguro y confidencial para superar desafíos emocionales y lograr bienestar mental."
    hora.innerText = "Hora: 4:00"
}
function sesion4() {
    let img = document.getElementById("psicologoImg");
    img.src = "Img2/Psicologo4.png"
    let name = document.getElementById("psicologoNombre")
    let desc = document.getElementById("psicologoDesc")
    let hora = document.getElementById("psicologoHora")
    name.innerText = "Jordan"
    desc.innerText = "Tu confianza es primordial. Ofrezco un entorno seguro y confidencial, libre de prejuicios, para compartir tus pensamientos y sentimientos sin temor."
    hora.innerText = "Hora: 6:30"
}


h6Frases = document.getElementById("frase")
let f1 = "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, serás exitoso. - Albert Schweitzer"
let f2 = "El único modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs"
let f3 = "No importa cuántas veces te caigas, sino cuántas veces te levantes. - Vince Lombardi"
let f4 = "No tengas miedo de renunciar a lo bueno para perseguir lo grandioso. - John D. Rockefeller"
let f5 = "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello. - Charles R. Swindoll"
let f6 = "El éxito no se mide por la cantidad de dinero que tienes, sino por la cantidad de impacto que tienes en la vida de los demás. - Michelle Obama"
let f7 = "El futuro pertenece a aquellos que creen en la belleza de sus sueños. - Eleanor Roosevelt"
let f8 = "No hay atajos para llegar a cualquier parte que valga la pena. - Beverly Sills"
let f9 = "La única manera de hacer un gran trabajo es amar lo que haces. - Steve Jobs"
let f10 = "La única manera de hacer un gran trabajo es amar lo que haces. - Steve Jobs"

let frases = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10];

let indiceAleatorio = Math.floor(Math.random() * frases.length);


h6Frases.innerText = frases[indiceAleatorio];

