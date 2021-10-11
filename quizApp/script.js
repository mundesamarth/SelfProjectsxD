const quizDB = [

    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c:"HyperText Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Style sheep",
        c:"Cartoon Style Sheets",
        d:"Cascading Super Sheets",
        ans:"ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a:"Hypertext Transfer product",
        b:"Hypertext Test Protocol",
        c: "Hey transfer protocol",
        d: "Hypertext Transfer Protocol",
        ans:"ans4"
    },
    {
        question:"Q4:What is the full form of JS?",
        a:"JavaScript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JordanShoes",
        ans:"ans1"
    }
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit = document.querySelector('.submitButton')
const answers = document.querySelectorAll('.answer')
const scoreAreaDiv  = document.getElementById('scoreDiv');
let questionCount = 0;
let score = 0;

function loadQuestion()
{
    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d; 
}

loadQuestion();

const  getCheckAnswer = ()=>
{
    let answer;
    answers.forEach((curAnsEle) => {
        if(curAnsEle.checked){
            answer = curAnsEle.id;
        }
    });
    return answer;
}
submit.addEventListener('click',function(){
    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer === quizDB[questionCount].ans)
    {
        score++;
    }
    questionCount++;

    if(questionCount < quizDB.length)
    {
        loadQuestion();
    }
    else
    {
        scoreAreaDiv.innerHTML = `
        <h3>Your score is ${score}/${quizDB.length} ✌🏻 ✌🏻</h3>
        <button class="btn" onclick="location.reload()">Restart</button>
        `;
        scoreAreaDiv.classList.remove('.scoreArea')
    }});