
let titleProject = 'Оценка стоимости';
let screensValue = 'шаблонные, с уникальным дизайном, с анимациями';
const screenPrice = 20000;    
const percentage = 15;    
let fullPrice = 120000; 
let responsive = true; 

titleProject = prompt('Название проекта?');
screensValue = prompt('Типы экранов (шаблонные, с уникальным дизайном, с анимациями)?');
let responsiveAnswer = prompt('Нужен ли респонсивный сайт? (да/нет)');
responsive = (responsiveAnswer === "да");

let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');

let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');


const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
};
let allServicePrices = getAllServicePrices();

function getFullPrice() {
    return allServicePrices + screenPrice;
}

fullPrice = getFullPrice();

function getTitle() {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
}
titleProject = getTitle();
console.log(titleProject);

function getServicePercentPrices() {
    return fullPrice - (fullPrice * percentage / 100);
}
let servicePercentPrice = getServicePercentPrices(fullPrice);
console.log('Итоговая сумма за вычетом процента подрядчика:', servicePercentPrice);

function getRollbackMessage(totalPrice) {
    if (totalPrice < 0) {
        console.log('Что-то пошло не так');
    } else if (totalPrice > 50000) {
        console.log('Сумма больше 50000. Сделаем скидку 10%');
    } else if (totalPrice >= 20000 && totalPrice <= 50000) {
        console.log('Сумма от 20000 до 50000. Сделаем скидку 5%');
    } else if (totalPrice > 0 && totalPrice < 20000) {
        console.log('Сумма меньше 20000. Скидка не предусмотрена');
    } else if (totalPrice === 0) {
        console.log('Сумма равна нулю. Проверьте введенные данные.');
    }
}
getRollbackMessage(fullPrice);