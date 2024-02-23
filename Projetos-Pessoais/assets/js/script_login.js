const input = document.querySelector('.password-login');
const btn = document.querySelector('.togglePassword');

btn.addEventListener('mousedown', function(e) {
    e.preventDefault();
    if (input.type = 'password') {
        input.type = 'text';
    }
});

btn.addEventListener('mouseup', function(e) {
    e.preventDefault();
    if (input.type = 'text') {
        input.type = 'password';
    }
});
