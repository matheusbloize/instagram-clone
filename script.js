// ICONS

const iconHome = document.querySelectorAll('.icon')[0]
const iconMsg = document.querySelectorAll('.icon')[1]
const iconAdd = document.querySelectorAll('.icon')[2]
const iconCompass = document.querySelectorAll('.icon')[3]
const iconHeart = document.querySelectorAll('.icon')[4]
const iconProfile = document.querySelector('.profile')

// STORIES

const stories = document.querySelector('.stories')
const storiesSliders = document.querySelector('.storiesSliders')
const nextStory = document.querySelector('.nextStory')
const previousStory = document.querySelector('.previousStory')
const lastStory = document.querySelector('.story.last')
stories.addEventListener('click', (e) => {
    if (e.target === nextStory.querySelector('i')) {
        storiesSliders.style.marginLeft = '-470px'
        setTimeout(() => {
            previousStory.style.display = 'block'
            nextStory.style.display = 'none'
        }, 500)
    } else if (e.target === previousStory.querySelector('i')) {
        storiesSliders.style.marginLeft = ''
        setTimeout(() => {
            previousStory.style.display = 'none'
            nextStory.style.display = 'block'
        }, 500)
    }
})

// HEADER BUTTONS

const main = document.querySelector('.main')
const aside = document.querySelector('.aside')
let currentIcon = iconHome
let arr = []

Array.from(document.querySelectorAll('.icon')).forEach(icon => {
    arr.push(icon)
    icon.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target === iconMsg.querySelector('i')) {
            classLoop()
            render(e.target)
        } else if (e.target === iconHome.querySelector('i')) {
            classLoop()
            render(e.target)
        } else if (e.target === document.querySelector('.border')) {
            classLoop()
            document.querySelector('.heart').style.display = 'none'
            document.querySelector('header').style.zIndex = '9999'
            iconHome.querySelector('i').style.pointerEvents = 'none'
            iconMsg.querySelector('i').style.pointerEvents = 'none'
            iconCompass.querySelector('i').style.pointerEvents = 'none'
            iconHeart.querySelector('i').style.pointerEvents = 'none'
            if (document.querySelector('.add').style.display === 'flex') {
                document.querySelector('.add').style.display = 'none'
                document.querySelector('.opacity').style.display = 'none'
                document.body.style.overflowY = 'scroll'
                if (document.querySelector('.main').style.display === 'flex') {
                    iconHome.classList.add('show')
                } else if (document.querySelector('.dm').style.display === 'flex') {
                    iconMsg.classList.add('show')
                } else if (document.querySelector('.compass').style.display === 'flex') {
                    iconCompass.classList.add('show')
                }
            } else {
                resizeAdd()
                render(e.target)
            }
        } else if (e.target === iconCompass.querySelector('i')) {
            classLoop()
            render(e.target)
        } else if (e.target === iconHeart.querySelector('i')) {
            classLoop()
            if (document.querySelector('.heart').style.display === 'flex') {
                document.querySelector('.heart').style.display = 'none'
                document.querySelector('header').style.zIndex = '9999'
                if (document.querySelector('.main').style.display === 'flex' && document.querySelector('main').style.height === '100vh') {
                    iconHome.classList.add('show')
                } else if (document.querySelector('.dm').style.display === 'flex') {
                    iconMsg.classList.add('show')
                } else if (document.querySelector('.compass').style.display === 'flex') {
                    iconCompass.classList.add('show')
                }
            } else {
                render(e.target)
                document.querySelector('header').style.zIndex = '0'
            }

        }
    })
})

function classLoop() {
    for (i = 0; i < 6; i++) {
        if (arr[i].classList.contains('show')) {
            arr[i].classList.remove('show')
            document.querySelector('.border').style.border = '1px solid rgb(54, 54, 54)'
        }
    }
}

function render(info) {
    if (info === iconMsg.querySelector('i')) {
        iconMsg.classList.add('show')
        main.style.display = 'none'
        aside.style.display = 'none'
        document.querySelector('main').style.height = '80vh'
        document.querySelector('.dm').style.display = 'flex'
        document.querySelector('.compass').style.display = 'none'
    } else if (info === iconHome.querySelector('i')) {
        iconHome.classList.add('show')
        main.style.display = 'flex'
        aside.style.display = 'flex'
        document.querySelector('main').style.height = '100vh'
        document.querySelector('.dm').style.display = 'none'
        document.querySelector('.compass').style.display = 'none'
    } else if (info === iconHeart.querySelector('i')) {
        iconHeart.classList.add('show')
        document.querySelector('.heart').style.display = 'flex'
        if (document.querySelector('main').style.height === '80vh') {
            document.querySelector('.heart').style.marginTop = '-345px'
        } else if (document.querySelector('main').style.height === '100vh') {
            document.querySelector('.heart').style.marginTop = '-525px'
        }
    } else if (info === document.querySelector('.border')) {
        iconAdd.classList.add('show')
        document.querySelector('.border').style.border = '1px solid #fff'
        document.querySelector('.add').style.display = 'flex'
        document.querySelector('.opacity').style.display = 'flex'
        if (document.querySelector('.opacity').style.display === 'flex') {
            document.querySelector('.opacity').style.zIndex = 9999
        }
    } else if (info === iconCompass.querySelector('i')) {
        iconCompass.classList.add('show')
        main.style.display = 'none'
        aside.style.display = 'none'
        document.querySelector('.dm').style.display = 'none'
        document.querySelector('.compass').style.display = 'flex'
    }
}

document.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.logo img')) {
        classLoop()
        iconHome.classList.add('show')
        render(iconHome.querySelector('i'))
    }
})

function resizeAdd() {
    document.querySelector('.add').style.marginTop = parseInt(scrollY) * 1.95 + 'px'
}

// MESSAGE AREA

const leftMessages = document.querySelector('.left-messages')
const messageScroll = document.querySelector('.dm .scroll')
const scrollPointer = document.querySelector('.dm .scrollPointer')
leftMessages.addEventListener('scroll', (e) => {
    let currentScroll = parseInt(e.target.scrollTop)
    if (currentScroll < 210) {
        messageScroll.style.top = (parseInt(currentScroll) * 2.8) + 'px'
        messageScroll.style.marginTop = '80px'
        if (currentScroll < 10) {
            scrollPointer.style.borderBottom = '5px solid #686868'
        } else {
            scrollPointer.style.borderBottom = '5px solid #fff'
        }
    } else if (currentScroll > 200) {
        messageScroll.style.top = '601px'
    }
})

