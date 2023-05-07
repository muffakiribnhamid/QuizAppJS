const questions = [
    {
        que: "Which of the following is a markup language?",
        a: "HTML",
        b: "CSS",
        c: "JavaScript",
        d: "PHP",
        correct: "a",
    },
    {
        que: 'Which programming language is known as the "mother of all languages"?',
        a: "C",
        b: "Fortran",
        c: "Java",
        d: "Assembly",
        correct: "d",
    },
    {
        que: "Which programming language is used to build Android applications?",
        a: "Java",
        b: "C#",
        c: "Python",
        d: "Ruby",
        correct: "a",
    },
    {
        que: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Computer Style Sheets",
        c: "Creative Style Sheets",
        d: "Colorful Style Sheets",
        correct: "a",
    },
    {
        que: "Which of the following is NOT an object-oriented programming language?",
        a: "Java",
        b: "Python",
        c: "C++",
        d: "PHP",
        correct: "d",
    },
    {
        que: "What is the file extension for a Python source code file?",
        a: ".py",
        b: ".js",
        c: ".html",
        d: ".css",
        correct: "a",
    },
    {
        que: "What does SQL stand for?",
        a: "Structured Query Language",
        b: "Simple Query Language",
        c: "Standard Query Language",
        d: "Sequential Query Language",
        correct: "a",
    },
    {
        que: "Which programming language is used for web development?",
        a: "Java",
        b: "Ruby",
        c: "PHP",
        d: "All of the above",
        correct: "d",
    },
    {
        que: "What is the primary function of JavaScript?",
        a: "Styling web pages",
        b: "Handling server-side operations",
        c: "Creating interactive web elements",
        d: "Performing mathematical calculations",
        correct: "c",
    },
    {
        que: "What does API stand for?",
        a: "Application Programming Interface",
        b: "Automated Programming Interface",
        c: "Application Processing Interface",
        d: "Automated Processing Interface",
        correct: "a",
    },
];

let index = 0;
let total = questions.length;
let correct = 0 ,
 wrong = 0

const quesBox = document.getElementById("quesBox");
const optionsInput = document.querySelectorAll(".options");
const loadQuestion = () => {
    if(index === total) {
        return endQuiz();
     }
    
    reset()

    const data = questions[index];

    quesBox.textContent = `${index + 1}) ${data.que}`;
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;
};




const submitQuiz = () => {
    const data = questions[index];

    const ans = getAnswer();
    if(ans === data.correct) {
        correct++
    }
    else {
        wrong++
    }
    index++
    loadQuestion()
    return;

};


const getAnswer = () => {
    let answer ;
    optionsInput.forEach((input) => {
        if (input.checked) {
            answer =  input.value;
        }
        

    }
    )
    return answer;
    
}


const reset = () => {
    optionsInput.forEach((input) => {
        input.checked = false;
        
        

    }
    )
}


const  endQuiz = () => {
    document.getElementById('box').innerHTML = 
    `<h3>Thanks For Playing</h3>
     <h2>${correct} are correct out of ${total}</h2>

    `
}
loadQuestion();
