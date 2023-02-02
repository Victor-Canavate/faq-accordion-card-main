let questions = document.querySelectorAll('.question-p')
console.log(questions);

let arrows = document.querySelectorAll('.arrow')

let answers = document.querySelectorAll('.answer')


questions.forEach(elemento => {
    elemento.addEventListener('click', event => {
        let target = event.target
        let targetId = target.id
        console.log(targetId);

        showAnswerOrHide(targetId)
    })
})

arrows.forEach(elemento => {
    elemento.addEventListener('click', event => {
        let target = event.target
        let targetId = target.id
        console.log(targetId);

        showAnswerOrHide(targetId)
    })
})

function showAnswerOrHide(id) {
    if(answers[id].classList[1] == 'visible' && questions[id].classList[0] == 'active') {
        questions[id].classList.remove('active')
        questions[id].classList.add('question-p')
        answers[id].classList.remove('visible')
    } else {
        questions[id].classList.remove('question-p')
        questions[id].classList.add('active')
        answers[id].classList.add('visible');
    }
}

