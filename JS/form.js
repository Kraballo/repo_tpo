const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const comentario = document.getElementById('comentario');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const telefonoValue = telefono.value.trim();
	const comentarioValue = comentario.value.trim();
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'Debe ingresar su Nombre y Apellido!');
	} else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Debe ingresar su email!');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingresó un email válido!');
	} else {
		setSuccessFor(email);
	}
	
	if(telefonoValue === '') {
		setErrorFor(telefono, 'No puede dejar el campo en blanco!');
	} else {
		setSuccessFor(telefono);
	}
	
	if(comentarioValue === '') {
		setErrorFor(comentario, 'No puede dejar el campo en blanco!');
	} else{
		setSuccessFor(comentario);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}