

gameBotFunction = function () {

    function randomGenerate (min, max) {
         return Math.floor(Math.random() * (max - min + 1)) + min;
         }

    let mysteryNumber = randomGenerate (1,100)
    let answerNum = ''
    let tries = 2

    console.log(mysteryNumber);


 function checkIsNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number)
 }


    const getResult = function () {
        answerNum = prompt('Угадайте число от 1 до 100');

        if (answerNum === null) {
            alert('Вы завершили игру');
            return
            
        }

       
        while (!checkIsNumber(answerNum) || answerNum.trim() === '') {
              alert('Вы ввели строку');
              answerNum = prompt('Угадайте число от 1 до 100');
        }

        answerNum = Number(answerNum);

        if (mysteryNumber > answerNum) {
            alert("Загаданное число больше, чем" + answerNum + ". Осталось попыток:" + tries);
        } else if (mysteryNumber < answerNum) {
            alert("Загаданное число меньше, чем" + answerNum + ". Осталось попыток:" + tries);
        } else {
            const playAgain = confirm('Поздравляю! Вы угадали число! Хотите начать заново?');
            
            if (playAgain) {
                tries = 2;
                mysteryNumber = randomGenerate(1, 100);
                getResult();
                return;
            } else {
                tries = 0;
                alert('Вы завершили игру');
                return;
            }
        }

       
        if (tries > 0) {
            tries--;
            getResult();
        } else {
            const tryAgain = confirm('У вас закончились попытки! Хотите попробовать снова?');
            if (tryAgain) {
                tries = 2;
                mysteryNumber = randomGenerate(1, 100);
                getResult();
            } else {
                alert('Вы завершили игру');
                return;
            }
        }
    };
 
    getResult()

}
gameBotFunction();




