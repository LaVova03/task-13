const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');
const loading = document.querySelector('.box');

let getNum = '';
email.addEventListener('click', getN);
function getN() {
    password.addEventListener('click', getA) || login.addEventListener('click', getA);
    function getA() {
        getNum = document.getElementById('email').value;
        console.log(getNum);
    };
};

let getNum1 = '';
password.addEventListener('click', getEl);
function getEl() {
    login.addEventListener('click', getA) || email.addEventListener('click', getA);
    function getA() {
        getNum1 = document.getElementById('password').value;
        console.log(getNum1);
    };
};

loading.style.display = 'none';
login.addEventListener('click', getEnter);
function getEnter() {
    setTimeout(getOut, 2000);
    loading.style.display = 'block';
    function getOut() {
        if (!getNum || !getNum1) {
            alert('Введите данные');
            loading.style.display = 'none';
        } else {
            location.replace('index2.html');
        };
    };
};
