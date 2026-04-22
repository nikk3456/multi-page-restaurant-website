const mainTitle = document.getElementById('main-title');
const mainText = document.getElementById('main-text');
const mainPhoto = document.getElementById('main-photo');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

const dataGallery = [
    {
        img: 'assets/gallery/gallery_about.png',
        title: 'О нас',
        text: 'Ресторан «Эклектика» — это место, где сочетаются утонченный вкус и теплая атмосфера. Наши шеф-повара тщательно подбирают ингредиенты и создают блюда с любовью к каждому клиенту.<br><br>«Эклектика» предлагает уютные залы для семейных ужинов, романтических свиданий и деловых обедов. Мы ценим ваше время и комфорт, поэтому обеспечиваем высокий уровень сервиса.<br><br>Добро пожаловать в мир великолепных вкусов и неповторимых воспоминаний.'
    },
    {
        img: 'assets/gallery/contact.png',
        title: 'Наши ценности',
        text: '«Эклектика» — это уютное место, где каждый гость становится частью нашей семьи. Мы гордимся тем, что создали атмосферу, в которой сочетается элегантность и теплота, а меню предлагает богатство вкусов, подчеркивая лучшие кулинарные традиции мира.<br><br>Ресторан «Эклектика» — это не просто еще одно место для обеда. Это место, где сливаются воедино стиль, вкус и теплота, создавая неповторимый опыт для тех, кто ценит настоящую гастрономию.'
    }
];

let index = 0;
function updateContent(index, dataGallery){
    let currentData = dataGallery[index];
    mainPhoto.src = currentData.img;
    mainTitle.innerHTML = currentData.title;
    mainText.innerHTML = currentData.text;
}

rightArrow.onclick = function(){
    index++;
    if (index == dataGallery.length){
        index = 0; 
    }
    updateContent(index, dataGallery);
}

leftArrow.onclick = function(){
    index--;
    if (index < 0){
        index = dataGallery.length-1; 
    }
    updateContent(index, dataGallery);
}
