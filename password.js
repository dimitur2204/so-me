const PASSWORD_TO_LOG_IN = 'socialmediaiskey'
const $form = document.getElementById('pass-form')
const $password = document.getElementById('password')
const $validationError = document.getElementById('validation-password')
$form.addEventListener('submit', (e) => {
    e.preventDefault();
    if ($password.value !== PASSWORD_TO_LOG_IN) {
        $password.classList.add('is-invalid')
        $validationError.style.display = 'block'
    } else {
        window.location.href = 'index.html';
        localStorage.setItem('auth','true')
    }
})