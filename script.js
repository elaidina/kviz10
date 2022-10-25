const quizData = [
    {
        question: "1. Nizozemsko",
        a: "Praha",
        b: "Amsterdam",
        
        correct: "b",
    },
    {
      question: "2. Slovensko",
      a: "New York",
      b: "Bratislava",
      
      correct: "b",
  },
  {
    question: "3. Velká Británie",
    a: "Madrid",
    b: "Londýn",
    
    correct: "b",
},
{
  question: "4. Španělsko",
  a: "Madrid",
  b: "Paříž",
  
  correct: "a",
},{
  question: "5. Německo",
  a: "Teherán",
  b: "Berlín",
  
  correct: "b",
},
{
question: "6. Bulharsko",
a: "Dublin",
b: "Sofia",

correct: "b",
},{
  question: "7. Švédsko",
  a: "Oslo",
  b: "Stockholm",
  
  correct: "b",
},
{
question: "8. Belgie",
a: "Brusel",
b: "Lisabon",

correct: "a",
},{
  question: "9. Rusko",
  a: "Kyjev",
  b: "Moskva",
  
  correct: "b",
},
{
question: "10. Maďarsko",
a: "Budapešť",
b: "Berlín",

correct: "a",
},{
  question: "11. Írsko",
  a: "Dublin",
  b: "Řím",
  
  correct: "a",
},
{
question: "12. Itálie",
a: "Řím",
b: "Washington",

correct: "a",
},{
  question: "13. Malta",
  a: "Valletta",
  b: "Praha",
  
  correct: "a",
},
{
question: "14. Austrálie",
a: "Canberra",
b: "Buenos Aires",

correct: "a",
},{
  question: "15. Argentina",
  a: "Buenos Aires",
  b: "Mexico City",
  
  correct: "a",
},
{
question: "16. Čína",
a: "Peking",
b: "Baku",

correct: "a",
},{
  question: "17. Indie",
  a: "Nové Dillí (New Delhi)",
  b: "Islamabád",
  
  correct: "a",
},
{
question: "18. Jihoafrická republika",
a: "Varšava",
b: "Pretorie",

correct: "b",
},{
  question: "19. Rakousko",
  a: "Vídeň",
  b: "Bern",
  
  correct: "a",
},
{
question: "20. Švícarsko",
a: "Bern",
b: "Bern",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })