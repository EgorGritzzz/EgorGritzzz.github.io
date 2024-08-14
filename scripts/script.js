// Скрипт на кнопку бургер

let burgerBtn = document.querySelector('.header__burger-btn');
let navList = document.querySelector('.navlist_hidden');

burgerBtn.addEventListener('click', ()=>{
    navList.style.display = navList.style.display==='none'?'block':'none';
})


// Обновление заголовка

fetch("https://baconipsum.com/api/?type=lucky")
.then(res => res.json())
.then(response => {
    console.log(response);
    const text = document.querySelector('.description_comment p');
    text.innerText = response;
})
.catch(err => {
    console.log("error" + err.message);
});
