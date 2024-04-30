// Отримуємо кнопку "Більше..." та модальне вікно для програми ССІ за їхніми ідентифікаторами
var openModalButtonCCI = document.getElementById('open-modal-cci');
var modalCCI = document.getElementById('modal-cci');

// Додаємо обробник події для кнопки "Більше..." для програми ССІ
openModalButtonCCI.addEventListener('click', function() {
    modalCCI.style.display = 'block'; // Показуємо модальне вікно для програми ССІ
});

// Отримуємо кнопку закриття та додаємо обробник події для закриття модального вікна для програми ССІ
var closeButtonCCI = modalCCI.querySelector('.close');
closeButtonCCI.addEventListener('click', function() {
    modalCCI.style.display = 'none'; // Закриваємо модальне вікно для програми ССІ
});

// Додаємо обробник події для закриття модального вікна при кліку поза ним для програми ССІ
window.addEventListener('click', function(event) {
    if (event.target === modalCCI) {
        modalCCI.style.display = 'none';
    }
});

// Отримуємо кнопку "Більше..." та модальне вікно для програми ERASMUS за їхніми ідентифікаторами
var openModalButtonErasmus = document.getElementById('open-modal-erasmus');
var modalErasmus = document.getElementById('modal-erasmus');

// Додаємо обробник події для кнопки "Більше..." для програми ERASMUS
openModalButtonErasmus.addEventListener('click', function() {
    modalErasmus.style.display = 'block'; // Показуємо модальне вікно для програми ERASMUS
});

// Отримуємо кнопку закриття та додаємо обробник події для закриття модального вікна для програми ERASMUS
var closeButtonErasmus = modalErasmus.querySelector('.close');
closeButtonErasmus.addEventListener('click', function() {
    modalErasmus.style.display = 'none'; // Закриваємо модальне вікно для програми ERASMUS
});

// Додаємо обробник події для закриття модального вікна при кліку поза ним для програми ERASMUS
window.addEventListener('click', function(event) {
    if (event.target === modalErasmus) {
        modalErasmus.style.display = 'none';
    }
});
