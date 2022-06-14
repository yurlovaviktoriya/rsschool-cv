const pythonBtn = document.querySelector('.header__program-lang_python');
const pythonPopup = document.querySelector('.popup_lang_python');
const pythonPopupCloseBtn = pythonPopup.querySelector('.popup__btn-close');
const pythonTaskBtn = pythonPopup.querySelector('.popup__nav-item_task');
const pythonCodeBtn = pythonPopup.querySelector('.popup__nav-item_code');
const pythonTask = pythonPopup.querySelector('.popup__task');
const pythonCode = pythonPopup.querySelector('.popup__code');

const jsBtn = document.querySelector('.header__program-lang_js');
const jsPopup = document.querySelector('.popup_lang_js');
const jsPopupCloseBtn = jsPopup.querySelector('.popup__btn-close');
const jsTaskBtn = jsPopup.querySelector('.popup__nav-item_task');
const jsCodeBtn = jsPopup.querySelector('.popup__nav-item_code');
const jsTask = jsPopup.querySelector('.popup__task');
const jsCode = jsPopup.querySelector('.popup__code');


pythonBtn.addEventListener('click', () => {
    pythonPopup.classList.add('popup_opened');
});

pythonPopupCloseBtn.addEventListener('click', () => {
    pythonPopup.classList.remove('popup_opened');
    pythonCodeBtn.classList.remove('popup__nav-item_active');
    pythonTaskBtn.classList.add('popup__nav-item_active');
    pythonCode.classList.remove('popup_example-code_opened');
    pythonTask.classList.add('popup_example-code_opened');
});

pythonTaskBtn.addEventListener('click', ()=> {
    pythonCodeBtn.classList.remove('popup__nav-item_active');
    pythonTaskBtn.classList.add('popup__nav-item_active');
    pythonCode.classList.remove('popup_example-code_opened');
    pythonTask.classList.add('popup_example-code_opened');
});

pythonCodeBtn.addEventListener('click', ()=> {
    pythonTaskBtn.classList.remove('popup__nav-item_active');
    pythonCodeBtn.classList.add('popup__nav-item_active');
    pythonTask.classList.remove('popup_example-code_opened');
    pythonCode.classList.add('popup_example-code_opened');
});




jsBtn.addEventListener('click', () => {
    jsPopup.classList.add('popup_opened');
});

jsPopupCloseBtn.addEventListener('click', () => {
    jsPopup.classList.remove('popup_opened');
    jsCodeBtn.classList.remove('popup__nav-item_active');
    jsTaskBtn.classList.add('popup__nav-item_active');
    jsCode.classList.remove('popup_example-code_opened');
    jsTask.classList.add('popup_example-code_opened');
});

jsTaskBtn.addEventListener('click', ()=> {
    jsCodeBtn.classList.remove('popup__nav-item_active');
    jsTaskBtn.classList.add('popup__nav-item_active');
    jsCode.classList.remove('popup_example-code_opened');
    jsTask.classList.add('popup_example-code_opened');
});

jsCodeBtn.addEventListener('click', ()=> {
    jsTaskBtn.classList.remove('popup__nav-item_active');
    jsCodeBtn.classList.add('popup__nav-item_active');
    jsTask.classList.remove('popup_example-code_opened');
    jsCode.classList.add('popup_example-code_opened');
});