const t = document.querySelector('.title')
const inf = document.querySelector('.info')
const p = document.querySelector('.play')
const h = document.querySelector('.help')
const s = document.querySelector('.source')
const tw = document.querySelector('.Typed')
const twt = document.querySelector('.TypedTwo')



//Literally the entire game...
p.addEventListener('click', function() {
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = 'black'
    t.style.display = 'none'
    inf.style.display = 'none'
    p.style.display = 'none'
    h.style.display = 'none'
    s.style.display = 'none'
    tw.style.display = 'inline'

    var typed = new Typed('.Typed', {
        strings: ['Welcome Player...', 'You Are Lost', 'You Have No Cell Service', 'You Are...', 'Alone.'],
        typeSpeed: 150,
        cursorChar: '|'

    })
    setTimeout(function() {
        tw.style.backgroundColor = 'black'
        twt.style.display = 'inline'
        setTimeout(function() {
            twt.style.backgroundColor = 'white'
            var typed = new Typed('.TypedTwo', {
                strings: ['You Stand Still<br>Wondering How You Ended Up Here.<br>Whats Your Next Move?'],
                typeSpeed: 75,
                cursorChar: '|'

            })
            setTimeout(function() {
                alert('idk...')
            }, 5550)
        }, 1000)
    }, 17000)
})

h.addEventListener('click', function() {
    alert('hai')
})

s.addEventListener('click', function() {
    window.location.href = "https://github.com/I-make-gamez/LOST/"
})