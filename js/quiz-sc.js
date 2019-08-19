var currentQuestion = 0;
var score1 = 0;
var score2 = 0;
var score3 = 0;
var totQuestions = questions.length;
let resposta = document.getElementById('resposta');

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

var cont1 = 0;
var cont2 = 0;
var cont3 = 0;

function loadQuestion (questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = [questionIndex +1] + '. ' + q.question;
    opt1.textContent = q.opcao1;
    opt2.textContent = q.opcao2;
    opt3.textContent = q.opcao3;
}

function loadNextQuestion () {
    var selectOption = document.querySelector('input[type=radio]:checked');
    if(!selectOption){
        alert('Por favor selecione sua resposta!');
        return;
    }
    var answer1 = selectOption.value;
    var answer2 = selectOption.value;
    var answer3 = selectOption.value;

    if(questions[currentQuestion].answer1 == answer1){
        score1 += 1;
    }
    if(questions[currentQuestion].answer2 == answer2){
        score2 += 1;
    }
    if(questions[currentQuestion].answer3 == answer3){
        score3 += 1;
    }

    selectOption.cheked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions -1){
        nextButton.textContent = 'Fim';
    }
    if(currentQuestion == totQuestions){
        container.style.display =  'none';
        resultCont.style.display = '';
        // resultCont.textContent = 'Seu placar: ' + score;
        return;
    }
    if(score1>score2>score3){
        resultCont.textContent = 'Embora em algumas situações esteja mais ansioso(a) do que o normal, sua resposta frente a situações de ansiedade apresentam alguns indícios deste problema. Para ter um controle de ansiedade é importante reconhecer quando aumentam nossos níveis de estímulos, ter uma vida saudável e aprender a priorizar as coisas importantes da vida. Para uma avaliação profissional, encontrará a seguir uma oportunidade de confirmar se estes indícios de ansiedade são reais.';
    }else if(score2>score1<score3){
        resultCont.textContent = 'Até que ta sussa';
    }else if(score2>score3<score1){
        resultCont.textContent = 'Sem neurose';
    }else if(score3>score2>score1){
        resultCont.textContent = 'A coisa ta feia bro';
        resposta.style.display = block;
    }else if(score3>score1>score2){
        resultCont.textContent = 'A coisa ta feia bro';
        resposta.style.display = block;
    }





    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
