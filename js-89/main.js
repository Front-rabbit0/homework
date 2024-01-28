const btn = document.querySelector('.btn')
const text = document.querySelector('.text')

// btn.addEventListener('click', () => {
//     text.classList.toggle('move')
//     text.classList.remove('red')
// })
btn.addEventListener('click', () => {
    text.classList.toggle('move')
    if(text.classList.contains('move')) {
        text.textContent = 'Я двигаюсь'
    } else {
        text.innerText = 'текст'
    }
})

// console.log(text.classList)