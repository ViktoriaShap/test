
let titleProject = 'Оценка стоимости';
let screensValue = 'шаблонные, с уникальным дизайном, с анимациями';
let screenPrice;    
const percentage = 15;    
let fullPrice; 
let responsive = true; 
let allServicePrices;
let servicePercentPrice;
let responsiveAnswer;
let service1;
let service2;



function checkIsNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

const asking = function() {
titleProject = prompt('Название проекта?');
screensValue = prompt('Типы экранов (шаблонные, с уникальным дизайном, с анимациями)?');
responsiveAnswer = prompt('Нужен ли респонсивный сайт? (да/нет)');
responsive = (responsiveAnswer === "да");

 screenPrice = '';
 while (!checkIsNumber(screenPrice) || screenPrice === null || screenPrice.trim() === '') {
        screenPrice = prompt('Сколько это будет стоить?', 12000);
        }
screenPrice = Number(screenPrice) 
}




const getAllServicePrices = function() {
    let sum = 0
     
    for (let i = 0; i < 2; i++) {

        if (i === 0){
            service1 = prompt('Какой сервис нужен?', 'Услуга 1');
        } else if (i === 1) {
            service2 = prompt('Какой еще сервис тебе нужен?', 'Услуга 2');
        }
        
        let textFromPromt = '';
 while (!checkIsNumber(textFromPromt) || textFromPromt === null || textFromPromt.trim() === '') {
        textFromPromt = prompt('Сколько это будет стоить?');

 }
 sum += Number(textFromPromt)
    }
  return sum
}


function getFullPrice() {
    return allServicePrices + screenPrice;
}


function getTitle() {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
}


function getServicePercentPrices() {
    return fullPrice - (fullPrice * percentage / 100);
}


const getPresentageMassage = function(price) {

    if (price < 0) {
        return 'Что-то пошло не так'
    } else if (price > 50000) {
        return 'Сумма больше 50000. Сделаем скидку 10%'
    } else if (price >= 20000 && price <= 50000) {
        return 'Сумма от 20000 до 50000. Сделаем скидку 5%'
    } else if (price > 0 && price < 20000) {
        return 'Сумма меньше 20000. Скидка не предусмотрена'
    } else if (price === 0) 
        return 'Сумма равна нулю. Проверьте введенные данные.'
    }


    







asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();


titleProject = getTitle();


console.log(titleProject);
console.log('Итоговая сумма за вычетом процента подрядчика:', Math.ceil(servicePercentPrice))
console.log(getPresentageMassage(fullPrice))


