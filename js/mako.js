let opeBtn = document.getElementById('linked')
let modalContainer = document.getElementById('modal-container')
let closebtn = document.getElementById('close-btn')

// event listeners 

opeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'block'
})

closebtn.addEventListener('click', function() {
    modalContainer.style.display = 'none'
})
window.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none'
    }
})

const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
// const userlist = document.querySelector('#users')

myform.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }

}


// const button = document.getElementById('button').addEventListener('click', buttonClick)

// function buttonClick(e) {

//     // IS FROM THE BROWSER THE WINDOW 

//     console.log('button clicked');


// }