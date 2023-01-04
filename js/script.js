// Computer choises



let myBills = 0;
let compBills = 0;


function playGame (playerInput) {
    clearMessages();
    const roundNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(roundNumber);

    function getMoveName(argMoveId){
        if (argMoveId === 1){
            return 'камінь';
        }
        else if (argMoveId === 2){
            return 'папір';
        }
        else if(argMoveId === 3){
            return 'ножиці';
        } 
        else(
            alert('Використовуй цифри')
        )
    }
    // Player
    const playerMove = getMoveName(Number(playerInput));

 
  
    const argPlayerMove = playerMove;
    const argComputerMove = computerMove;
    function displayResult (argComputerMove , argPlayerMove){
        printMessage('Компютер обрав ' + argComputerMove + ', а ти обрав ' + argPlayerMove);
            if( argComputerMove === 'камінь' && argPlayerMove === 'папір'){
                printMessage('Вітаю, ти переміг! Твої бали : ' + myBills+1);
            }
            else if( argComputerMove === 'ножиці' && argPlayerMove === 'камінь'){
                printMessage('Вітаю, ти переміг!Твої бали : '+ myBills+1);
            }
            else if( argComputerMove === 'папір' && argPlayerMove === 'ножиці'){
            printMessage('Вітаю, ти переміг!Твої бали :'+ myBills+1);
            }
            else if( argComputerMove === 'папір' && argPlayerMove === 'папір' || computerMove === 'ножиці' && playerMove === 'ножиці' || computerMove === 'камінь' && playerMove === 'камінь'){
            printMessage('Нечія,спробуйте ще раз.');
            }
            else{
            printMessage('Нажаль ти програв,спробуйте ще...Бали компютера : ' + compBills+1);
            }
        }
        displayResult (argComputerMove , argPlayerMove);
}


const playRock = document.querySelector('#play-rock');
const playPaper = document.querySelector('#play-paper');
const playScissors = document.querySelector('#play-scissors');

playRock?.addEventListener('click', function () {
    playGame (1) ;
});

playPaper?.addEventListener('click', function () {
    playGame(2);
});

playScissors?.addEventListener('click',function () {
    playGame (3)
});
