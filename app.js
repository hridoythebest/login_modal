const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('Btn-login');
const closeBtn = document.getElementById('close-btn');

loginBtn.addEventListener('click',()=>{
    loginModal.classList.remove("hidden")
})

closeBtn.addEventListener('click',()=>{
    loginModal.classList.add("hidden")
})