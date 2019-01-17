const bookingBtn = document.querySelector('.button--booking');
const form = document.forms[0];
const formWrapper = document.querySelector('.form__wrapper');
const formBtn = document.querySelector('.form__wrapper button');
const formClose = document.querySelector('.form__close');
const formCloseBtn = document.querySelector('.form__close-btn');
const spinner = document.querySelector('.spinner');
const message = document.querySelector('.message');
let loading = false;


function loadingState(state) {
    loading = state;
    spinner.hidden = !loading;
    formBtn.disabled = loading;
}

const sendData = (e) => {
    e.preventDefault();
    loadingState(true);

    const formData = new FormData(form);
    fetch('sendform.php', {
        method: 'POST',
        body:   formData,
    })
        .then((response) => {
            if (response.status === 200) {
                loadingState(false);
                message.hidden = loading;
                form.querySelectorAll('input')
                    .forEach((el) => {
                        el.value = '';
                    });
            } else {
                message.innerHTML = 'Произошла ошибка.';
                message.hidden = loading;
            }
        });
};

form.addEventListener('submit', sendData);

formClose.addEventListener('click', () => {
    formWrapper.classList.add('visually-hidden');
});
formCloseBtn.addEventListener('click', () => {
    formWrapper.classList.add('visually-hidden');
});

bookingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    formWrapper.classList.remove('visually-hidden');
});
