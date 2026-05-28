

let titleProject = 'Оценка стоимости';
let screensValue = 'шаблонные, с уникальным дизайном, с анимациями';
const screenPrice = 1700; 
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

fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - (fullPrice * percentage / 100);  // убрал дубль
servicePercentPrice = Math.round(servicePercentPrice * 100) / 100;

console.log("Итоговая сумма за вычетом процента подрядчика:", servicePercentPrice);
if (fullPrice < 0) {
    console.log("Что-то пошло не так");
} else if (fullPrice > 50000) {
    console.log("Сумма больше 50000. Сделаем скидку 10%");
} else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log("Сумма от 20000 до 50000. Сделаем скидку 5%");
} else if (fullPrice > 0 && fullPrice <= 20000) {
    console.log("Сумма меньше или равна 20000. Скидка не предусмотрена");
} else if (fullPrice === 0) {
    console.log("Сумма равна нулю. Проверьте введенные данные.");
}
