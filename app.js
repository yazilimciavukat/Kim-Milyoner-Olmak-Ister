const quizData=[
    {
        question: 'Avrupa Parlementosu tarafından verilen LUX film ödülü aşağıdaki Türk yönetmenlerden hangisine verilmiştir?',
        a: 'Ertem Eğilmez',
        b: 'Deniz Gamze Ergüven' ,
        c: 'Emin Alper' ,
        d: 'Çağan Irmak' ,
        e: 'Türkan Şoray' ,
        correct: 'b',
    },

    {
        question: '2015 Cumhurbaşkanlığı Kültür Sanat ödülüne tarih alanında layık görülen bilim adamı aşağıdakilerden hangisidir?',
        a: 'İlber Ortaylı',
        b: 'Halil İnalcık' ,
        c: 'Mehmet Genç' ,
        d: 'Yavuz Bahadıroğlu',
        e: 'İbrahim Yılmazçelik' ,
        correct: 'c',
    },

    {
        question: 'İlk antibiyotik, penisilin aşağıdaki bilim adamlarından hangisi tarafından bulunmuştur?',
        a: 'Alexandar Fleming',
        b: 'Chates Darvin' ,
        c: 'Gregor Menden' ,
        d: 'Louıs Pasteur' ,
        e: 'Ronald Ross' ,
        correct: 'a',
    },

    {
        question: 'Fatih Sultan Mehmet’in babası kimdir?',
        a: 'I. Mehmet',
        b: 'II. Murat' ,
        c: 'Yıldırım Beyazıt' ,
        d: 'Osman Bey' ,
        e: 'I.Murat' ,
        correct: 'b',
    },
    {
        question: 'Magna Carta hangi ülkenin kralıyla yapılmış bir sözleşmedir?',
        a: 'İspanya',
        b: 'Fransa' ,
        c: 'Rusya' ,
        d: 'İngiltere' ,
        e: 'Almanya' ,
        correct: 'd',
    }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question') 
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]

    deseletedAnswers()
    
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deseletedAnswers(){
  answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected(){
    let answer

    answerEls.forEach(answerEls => {
        if(answerEls.checked){
            answer = answerEls.id
        }
    })
    return answer
}

 submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if  (answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        
        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2> Test Tamamlandı, ${score * 20} puan aldınız 🥳 </h2> 
            <button class="submit" onClick="location.reload()"> Tekrar Dene 😣</button>
            `
        }
    }


 })