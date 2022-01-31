

function timeNaw() {
    const time = document.querySelector('.time');
    setInterval(() => time.innerHTML = new Date().toLocaleTimeString().slice(0, -3), 1000);
}
timeNaw();


const login = document.querySelector('.login');
const password = document.querySelector('.password');
const btn = document.querySelector('.main__button__submit');

function form() {

    btn.addEventListener('click', () => {
        if (login.value == '' && password.value == '') {
            login.value = 'Введите логин'
            password.value = 'Введите пароль'
        } else if (login.value != 1 && password.value != 1) {
            login.value = 'Err Login'
            password.value = 'Err Password'

        } else if (login.value == 1 && password.value == 1) {
            document.location.href = 'market.html'
        }
    })
}
clearInput();
form();


function clearInput() {
    const input = document.querySelectorAll('input');
    input.forEach(element => {
        element.addEventListener('mousedown', () => {
            element.value = '';
        });
    });

}




