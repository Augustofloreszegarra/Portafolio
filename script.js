// --------------VALIDACION DE FORMULARIO NOMBRE--------------

const formNombre = document.getElementById('formNombre');
const mensajeErrorNombre = document.getElementById('mensajeErrorNombre');
const formEnviar = document.getElementById('formEnviar');

formNombre.addEventListener('input', function() {
    let inputLength = formNombre.value.length;
    if (inputLength === 0) {
        mensajeErrorNombre.innerHTML = 'El campo Nombre no puede estar vacío';
        formNombre.style.border = '2px solid red';
    } else if (inputLength > 50) {
        mensajeErrorNombre.innerHTML = 'El campo Nombre debe contener máximo 50 caracteres';
        formNombre.style.border = '2px solid red';
    } else {
        mensajeErrorNombre.innerHTML = '';
        formNombre.style.border = '';
    }
});


// --------------VALIDACION DE FORMULARIO EMAIL--------------

const mensajeErrorEmail = document.getElementById('mensajeErrorEmail');
const formEmail = document.getElementById('formEmail');

formEmail.addEventListener('input', function() {
    let email = formEmail.value;
    if (email === '') {
        mensajeErrorEmail.innerHTML = 'El campo E-mail no puede estar vacío';
        formEmail.style.border = '2px solid red';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        mensajeErrorEmail.innerHTML = 'Debe ingresar un formato de correo electrónico válido';
        formEmail.style.border = '2px solid red';
    } else {
        mensajeErrorEmail.innerHTML = '';
        formEmail.style.border = '';
    }
})

// --------------VALIDACION DE FORMULARIO ASUNTO--------------

const formAsunto = document.getElementById('formAsunto');
const mensajeErrorAsunto = document.getElementById('mensajeErrorAsunto');


formAsunto.addEventListener('input', function() {
    let inputLength = formAsunto.value.length;
    if (inputLength === 0) {
        mensajeErrorAsunto.innerHTML = 'El campo ASUNTO no puede estar vacío';
        formAsunto.style.border = '2px solid red';
    } else if (inputLength > 50) {
        mensajeErrorAsunto.innerHTML = 'El campo ASUNTO debe contener máximo 50 caracteres';
        formAsunto.style.border = '2px solid red';
    } else {
        mensajeErrorAsunto.innerHTML = '';
        formAsunto.style.border = '';
    }
});


// --------------VALIDACION DE FORMULARIO MENSAJE--------------

const formTextarea = document.getElementById('formTextarea');
const mensajeErrorTextarea = document.getElementById('mensajeErrorTextarea');


formTextarea.addEventListener('input', function() {
    let inputLength = formTextarea.value.length;
    if (inputLength === 0) {
        mensajeErrorTextarea.innerHTML = 'El campo Nombre no puede estar vacío';
        formTextarea.style.border = '2px solid red';
    } else if (inputLength > 300) {
        mensajeErrorTextarea.innerHTML = 'El campo Nombre debe contener máximo 300 caracteres';
        formTextarea.style.border = '2px solid red';
    } else {
        mensajeErrorTextarea.innerHTML = '';
        formTextarea.style.border = '';
    }
});

formEnviar.addEventListener('click', function() {
    let inputLengthNombre = formNombre.value.length;
    let inputLengthEmail = formEmail.value.length;
    let inputLengthAsunto = formAsunto.value.length;
    let inputLengthTextarea = formTextarea.value.length;

    if (inputLengthNombre === 0  || inputLengthEmail === 0 || inputLengthAsunto === 0 || inputLengthTextarea === 0) {
        formEnviar.setAttribute("disabled", true);
    } else {
        alert('Formulario enviado correctamente');
    }
});