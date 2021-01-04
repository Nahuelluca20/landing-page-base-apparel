const email = document.getElementById('email');
const icon = document.getElementById('icon')

email.addEventListener('invalid', function() {
    email.classList.add('input-invalid')
    email.classList.remove('input-valid')
    icon.classList.remove('hidden')
})