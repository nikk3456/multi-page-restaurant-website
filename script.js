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

function updateContent(index, dataGallery) {
    mainPhoto.classList.add('hidden');
    mainTitle.classList.add('hidden');
    mainText.classList.add('hidden');

    setTimeout(() => {
        let currentData = dataGallery[index];
        mainPhoto.src = currentData.img;
        mainTitle.innerHTML = currentData.title;
        mainText.innerHTML = currentData.text;

        mainPhoto.classList.remove('hidden');
        mainTitle.classList.remove('hidden');
        mainText.classList.remove('hidden');
    }, 500);
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


const reviewsTitle = document.getElementById('reviews-title');
const reviewsTitle2 = document.getElementById('reviews-title-2');
const reviewsText = document.getElementById('reviews-text');
const reviewsText2 = document.getElementById('reviews-text-2');
const reviewsAvatar = document.getElementById('reviews-avatar');
const reviewsAvatar2 = document.getElementById('reviews-avatar-2');
const reviewsLeftArrow = document.getElementById('left-arrow-reviews');
const reviewsRightArrow = document.getElementById('right-arrow-reviews');



const dataReviews = [
    {
        img: 'assets/reviews/reviewNatalya.png',
        title: 'Наталья Иванова',
        text: 'Посетили семейный ресторан вместе с мужем и детьми — отличное место для семейного ужина! Обстановка очень уютная, а обслуживание выше всяких похвал. Наши дети в восторге от детского меню, которое оказалось не только вкусным, но и заботливо подготовленным с учетом детских предпочтений. Будем рекомендовать всем друзьям и обязательно вернемся.'
    },
    {
        img: 'assets/reviews/reviewAleksandr.png',
        title: 'Александр Петров',
        text: '«Этот ресторан — настоящая находка! Проводил здесь деловой ужин с партнерами, и все остались в восторге. Обслуживание на высшем уровне, персонал внимателен к каждой детали. Кухня порадовала своим разнообразием. Отличное место для деловых встреч и ужинов в уютной обстановке. Рекомендую!'
    },
    {
        img: 'assets/reviews/reviewIgor.png',
        title: 'Игорь Ковалев',
        text: '«Провели здесь день рождения — атмосфера просто великолепная. Персонал веселый и отзывчивый, кухня порадовала. Особенно понравились закуски к пиву! Обязательно будем возвращаться, чтобы попробовать все блюда из меню.'
    },
    {
        img: 'assets/reviews/reviewMarina.png',
        title: 'Марина Соколова',
        text: '«Посетили семейный ресторан с подругами на девичнике, и это был наш лучший выбор! У нас был волшебный вечер — вкусная еда, отличные коктейли и веселая атмосфера. Обязательно вернемся сюда с мужьями! Очень рекомендую для дружеских посиделок и праздников.'
    }
];

let reviewsIndex = 0;

function reviewsUpdateContent(reviewsIndex, dataReviews) {
    reviewsAvatar.classList.add('hidden');
    reviewsAvatar2.classList.add('hidden');
    reviewsTitle.classList.add('hidden');
    reviewsTitle2.classList.add('hidden');
    reviewsText.classList.add('hidden');
    reviewsText2.classList.add('hidden');

    setTimeout(() => {
        let currentData = dataReviews[reviewsIndex];
        let nextIndex = (reviewsIndex + 1) % dataReviews.length;
        let pastData = dataReviews[nextIndex];
        reviewsAvatar.src = currentData.img;
        reviewsAvatar2.src = pastData.img;
        reviewsTitle.innerHTML = currentData.title;
        reviewsTitle2.innerHTML = pastData.title;
        reviewsText.innerHTML = currentData.text;
        reviewsText2.innerHTML = pastData.text;

        reviewsAvatar.classList.remove('hidden');
        reviewsAvatar2.classList.remove('hidden');
        reviewsTitle.classList.remove('hidden');
        reviewsTitle2.classList.remove('hidden');
        reviewsText.classList.remove('hidden');
        reviewsText2.classList.remove('hidden');
    }, 500);
}

reviewsRightArrow.onclick = function(){
    reviewsIndex++;
    if (reviewsIndex >= dataReviews.length){
        reviewsIndex = 0; 
    }
    reviewsUpdateContent(reviewsIndex, dataReviews);
}

reviewsLeftArrow.onclick = function(){
    reviewsIndex--;
    if (reviewsIndex < 0){
        reviewsIndex = dataReviews.length-1; 
    }
    reviewsUpdateContent(reviewsIndex, dataReviews);
}