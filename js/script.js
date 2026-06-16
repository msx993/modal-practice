/*
    1) Відкрити та закрити за допомогою кнопки
    2) Закрити за кліком у бекдроп: onBackDropClick
    3) Закрити за допомогою ESC: onEscapeKeypress
У CSS є клас show-modal, який необхідно додати до body при відкритті модалки 
 */

const modalOpenButton = document.querySelector('[data-action = "open-modal"]')
const modalCloseButton = document.querySelector('[data-action = "close-modal"]')
const modalBackdrop = document.querySelector(".js-backdrop")
// console.log(modalOpenButton ,modalCloseButton);

const onOpenModal = function(){
document.body.classList.add("show-modal")
}

const onCloseModal = function(){
    document.body.classList.remove("show-modal")
}

const onBackDropClick = function(){
    console.log(event.target);
    console.log(event.currentTarget);
    if (event.target === event.currentTarget) {
        document.body.classList.remove("show-modal")
    }
}

// const onEscapeKeypress = function(){
//     document.body.classList.remove("show-modal")
// }


modalOpenButton.addEventListener("click", onOpenModal)
modalCloseButton.addEventListener("click", onCloseModal)
modalBackdrop.addEventListener("click", onBackDropClick) 
