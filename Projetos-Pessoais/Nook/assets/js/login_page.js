const btnEye = document.getElementById('button-eye');
let inputPassword = document.querySelector('.password-login');

function clickBtn(){
    if (inputPassword.type === 'password'){
        inputPassword.type = 'text';
    } else {
        inputPassword.type = 'password';
    }
}

function hoverBtn(hover){
    if (hover){
        btnEye.style.backgroundColor = 'rgba(0, 255, 0, 0.1)';
    } else {
        btnEye.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    }
}