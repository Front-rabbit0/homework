const button = document.querySelector('.btn')
let btnIsGreen = false

button.addEventListener('click', () => {
    if(btnIsGreen) {
        button.style.backgroundColor = 'blue'
        btnIsGreen = false
    } else {
        button.style.backgroundColor = 'green'
        btnIsGreen = true
    }
})

function scrolling() {
    console.log('scroll')
}

document.addEventListener('scroll', scrolling)