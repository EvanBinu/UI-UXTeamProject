let toggle = document.querySelector('.toggle');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let close = document.querySelector('.close');
let body = document.querySelector('body');
let searchBx = document.querySelector('.searchBx');
let searchOpen = document.querySelector('.searchOpen');
let searchClose = document.querySelector('.searchClose');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    left.classList.toggle('active');
    right.classList.toggle('overlay');
    body.style.overflow = 'hidden';
});
close.onclick = () => {
    toggle.classList.remove('active');
    left.classList.remove('active');
    right.classList.remove('overlay');
    body.style.overflow = '';
};
searchOpen.onclick = () => {
    searchBx.classList.add('active');
};
searchClose.onclick = () => {
    searchBx.classList.remove('active');
};
window.onclick = (e) => {
    if (e.target == right) {
        toggle.classList.remove('active');
        left.classList.remove('active');
        right.classList.remove('overlay');
        body.style.overflow = '';
    }
};
document.getElementById('checkbox').addEventListener('change', function() {
    if (this.checked) {
        window.location.href = "../Calender/calendar.html";
    }
});
function editMessage(button) {
    let messageContent = button.previousElementSibling;
    let editField = button.nextElementSibling;

    editField.value = messageContent.querySelector('span').innerText;
    editField.style.display = 'block';
    editField.focus();
    messageContent.style.display = 'none';
}

function saveMessage(input) {
    let messageContent = input.previousElementSibling.previousElementSibling;
    let newMessage = input.value;

    messageContent.querySelector('span').innerText = newMessage;
    messageContent.style.display = 'block';
    input.style.display = 'none';
}