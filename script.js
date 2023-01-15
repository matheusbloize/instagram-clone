let interval = setInterval(() => {
    if (scrollY !== 0) {
        scrollTo(0, 0)
    }
}, 100)
setTimeout(() => {
    document.body.style.overflowY = 'scroll'
    document.querySelector('.load').style.display = 'none'
    clearInterval(interval)
}, 3500)



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
    if (screen.availWidth > 820) {
        if (e.target === nextStory.querySelector('i')) {
            storiesSliders.style.marginLeft = '-470px'
            setTimeout(() => {
                previousStory.style.display = 'flex'
                nextStory.style.display = 'none'
            }, 500)
        } else if (e.target === previousStory.querySelector('i')) {
            storiesSliders.style.marginLeft = ''
            setTimeout(() => {
                previousStory.style.display = 'none'
                nextStory.style.display = 'flex'
            }, 500)
        }
    } else if (screen.availWidth <= 820) {
        if (e.target === nextStory.querySelector('i')) {
            storiesSliders.style.marginLeft = '-88%'
            setTimeout(() => {
                previousStory.style.display = 'flex'
                nextStory.style.display = 'none'
            }, 500)
        } else if (e.target === previousStory.querySelector('i')) {
            storiesSliders.style.marginLeft = ''
            setTimeout(() => {
                previousStory.style.display = 'none'
                nextStory.style.display = 'flex'
            }, 500)
        }
    }
})

// START

document.querySelector('.main').style.display = 'flex'
document.querySelector('main').style.height = '100vh'

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
            document.querySelector('header').style.zIndex = '99'
            iconHome.querySelector('i').style.pointerEvents = 'none'
            iconMsg.querySelector('i').style.pointerEvents = 'none'
            iconCompass.querySelector('i').style.pointerEvents = 'none'
            iconHeart.querySelector('i').style.pointerEvents = 'none'
            document.body.style.overflowY = 'hidden'
            document.body.style.marginRight = '15px'
            if (document.querySelector('.add').style.display === 'flex') {
                borderAddRemove()
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
                heartRemove()
            } else {
                render(e.target)
                document.querySelector('header').style.zIndex = '99'
            }
        } else if (e.target === iconProfile.querySelector('img')) {
            classLoop()
            if (document.querySelector('.profileShow').style.display === 'flex') {
                profileRemove()
            } else {
                render(e.target)
                document.querySelector('header').style.zIndex = '99'
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
        document.querySelector('.profileShow').style.display = 'none'
        iconProfile.querySelector('img').style.border = '1px solid transparent'
        if (document.querySelector('main').style.height === '80vh') {
            if (screen.availWidth < 1595 && screen.availWidth > 1088) {
                document.querySelector('.heart').style.marginTop = '-20%'
            } else {
                document.querySelector('.heart').style.marginTop = '-345px'
            }
        } else if (document.querySelector('main').style.height === '100vh') {
            if (screen.availWidth > 820 && screen.availWidth < 1088) {
                document.querySelector('.heart').style.marginTop = '-525px'
            } else if (screen.availWidth <= 820) {
                document.querySelector('.heart').style.marginTop = '-90%'
            } else if (screen.availWidth < 1595 && screen.availWidth > 1088) {
                document.querySelector('.heart').style.marginTop = '-31%'
            }
        }
    } else if (info === document.querySelector('.border')) {
        iconAdd.classList.add('show')
        document.querySelector('.border').style.border = '1px solid #fff'
        document.querySelector('.add').style.display = 'flex'
        document.querySelector('.opacity').style.display = 'flex'
        document.querySelector('.addIn').style.display = 'flex'
        document.querySelector('body .scrollPointer').style.display = 'flex'
        document.querySelector('body .scroll').style.display = 'flex'
        if (document.querySelector('.opacity').style.display === 'flex') {
            document.querySelector('.opacity').style.zIndex = 9999
        }
    } else if (info === iconCompass.querySelector('i')) {
        iconCompass.classList.add('show')
        main.style.display = 'none'
        aside.style.display = 'none'
        document.querySelector('.dm').style.display = 'none'
        document.querySelector('.compass').style.display = 'flex'
        document.querySelector('main').style.height = '100vh'
    } else if (info === iconProfile.querySelector('img')) {
        iconProfile.querySelector('img').style.border = '1px solid #fff'
        if (document.querySelector('.main').style.display === 'flex' && document.querySelector('main').style.height === '100vh' || document.querySelector('.compass').style.display === 'flex') {
            document.querySelector('.profileShow').style.display = 'flex'
            if(screen.availWidth < 1595 && screen.availWidth > 1088) {
                document.querySelector('.profileShow').style.marginTop = '-40%'
            } else {
                document.querySelector('.profileShow').style.marginTop = '-660px'
            }
        } else if (document.querySelector('main').style.height === '80vh') {
            document.querySelector('.profileShow').style.display = 'flex'
            if (screen.availWidth < 1595 && screen.availWidth > 1088) {
                document.querySelector('.profileShow').style.marginTop = '-29%'
            } else {
                document.querySelector('.profileShow').style.marginTop = '-482px'
            }
        }
    }
}

function borderAddRemove() {
    document.querySelector('.add').style.display = 'none'
    document.querySelector('.opacity').style.display = 'none'
    document.body.style.overflowY = 'scroll'
    iconHome.querySelector('i').style.pointerEvents = 'auto'
    iconMsg.querySelector('i').style.pointerEvents = 'auto'
    iconCompass.querySelector('i').style.pointerEvents = 'auto'
    iconHeart.querySelector('i').style.pointerEvents = 'auto'
    document.querySelector('.addIn').style.display = 'none'
    document.querySelector('body .scrollPointer').style.display = 'none'
    document.querySelector('body .scroll').style.display = 'none'
    document.body.style.marginRight = '0px'
    iconAdd.classList.remove('show')
    document.querySelector('.border').style.border = '1px solid rgb(54, 54, 54)'
    if (document.querySelector('.main').style.display === 'flex') {
        iconHome.classList.add('show')
    } else if (document.querySelector('.dm').style.display === 'flex') {
        iconMsg.classList.add('show')
    } else if (document.querySelector('.compass').style.display === 'flex') {
        iconCompass.classList.add('show')
    }
    document.querySelector('.addBorder').style.zIndex = '0'
}

function heartRemove() {
    document.querySelector('.heart').style.display = 'none'
    if (document.querySelector('.profileShow').style.display === 'flex') {
        document.querySelector('header').style.zIndex = '99'
    } else {
        document.querySelector('header').style.zIndex = '9999'
    }
    iconHeart.classList.remove('show')
    if (document.querySelector('.profileShow').style.display === 'flex') {
        iconProfile.querySelector('img').style.border = '1px solid #fff'
    } else if (document.querySelector('.main').style.display === 'flex' && document.querySelector('main').style.height === '100vh') {
        iconHome.classList.add('show')
    } else if (document.querySelector('.dm').style.display === 'flex') {
        iconMsg.classList.add('show')
    } else if (document.querySelector('.compass').style.display === 'flex') {
        iconCompass.classList.add('show')
    }
}

function profileRemove() {
    iconProfile.querySelector('img').style.border = '1px solid transparent'
    document.querySelector('header').style.zIndex = '9999'
    document.querySelector('.profileShow').style.display = 'none'
    if (document.querySelector('.main').style.display === 'flex') {
        iconHome.classList.add('show')
    } else if (document.querySelector('.dm').style.display === 'flex') {
        iconMsg.classList.add('show')
    } else if (document.querySelector('.compass').style.display === 'flex') {
        iconCompass.classList.add('show')
    }
}

let links = Array.from(document.querySelectorAll('.otherProfile a'))

let RD = '🎈🎈🎈'
const addArchive = document.querySelector('.addArchive')
const btn = document.querySelector('#upload button')
let archive = document.querySelector('#archive')
let file = ''
let img = document.createElement('img')

archive.addEventListener('change', (e) => {
    let file = archive.files[0]
    if (file) {
        const reader = new FileReader()

        reader.addEventListener('load', (e) => {
            img.src = e.target.result

            addArchive.appendChild(img)
        })

        reader.readAsDataURL(file)
    }
})


document.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.logo img')) {
        classLoop()
        iconHome.classList.add('show')
        render(iconHome.querySelector('i'))
    } else if (e.target === document.querySelector('.fa-arrow-left')) {
        document.querySelector('main').style.height = '100vh'
        document.querySelector('.main').style.display = 'flex'
        document.querySelector('.dm').style.display = 'none'
        document.querySelector('header').style.display = 'flex'
        document.querySelector('.border-bottom-icons').style.opacity = '1'
        classLoop()
    } else if (e.target === document.querySelector('.opacity')) {
        borderAddRemove()
        if (addArchive.children[0] === img) {
            addArchive.querySelector('img').style.zoom = 0
            addArchive.removeChild(img)
        }
    } else if (document.querySelector('.heart').style.display === 'flex') {
        if (e.target !== document.querySelector('.heart') &&
            e.target !== iconHeart.querySelector('i') &&
            e.target !== document.querySelector('.heart-content') &&
            e.target !== document.querySelectorAll('.heart--content')[0] &&
            e.target !== document.querySelectorAll('.heart--content')[0].querySelector('img') &&
            e.target !== document.querySelectorAll('.heart--content')[0].querySelector('h3') &&
            e.target !== document.querySelectorAll('.heart--content')[0].querySelector('p') &&
            e.target !== document.querySelectorAll('.heart--content')[0].querySelector('h6') &&
            e.target !== document.querySelectorAll('.heart--content')[0].querySelector('button') &&
            e.target !== document.querySelectorAll('.heart--content')[1] &&
            e.target !== document.querySelectorAll('.heart--content')[1].querySelector('img') &&
            e.target !== document.querySelectorAll('.heart--content')[1].querySelector('h3') &&
            e.target !== document.querySelectorAll('.heart--content')[1].querySelector('p') &&
            e.target !== document.querySelectorAll('.heart--content')[1].querySelector('h6') &&
            e.target !== document.querySelectorAll('.heart--content')[1].querySelector('button') &&
            e.target !== document.querySelectorAll('.heart--content')[2] &&
            e.target !== document.querySelectorAll('.heart--content')[2].querySelector('img') &&
            e.target !== document.querySelectorAll('.heart--content')[2].querySelector('h3') &&
            e.target !== document.querySelectorAll('.heart--content')[2].querySelector('p') &&
            e.target !== document.querySelectorAll('.heart--content')[2].querySelector('h6') &&
            e.target !== document.querySelectorAll('.heart--content')[2].querySelector('button') &&
            e.target !== document.querySelectorAll('.heart--content')[3] &&
            e.target !== document.querySelectorAll('.heart--content')[3].querySelector('img') &&
            e.target !== document.querySelectorAll('.heart--content')[3].querySelector('h3') &&
            e.target !== document.querySelectorAll('.heart--content')[3].querySelector('p') &&
            e.target !== document.querySelectorAll('.heart--content')[3].querySelector('h6') &&
            e.target !== document.querySelectorAll('.heart--content')[3].querySelector('button') &&
            e.target !== document.querySelectorAll('.heart--content')[4] &&
            e.target !== document.querySelectorAll('.heart--content')[4].querySelector('img') &&
            e.target !== document.querySelectorAll('.heart--content')[4].querySelector('h3') &&
            e.target !== document.querySelectorAll('.heart--content')[4].querySelector('p') &&
            e.target !== document.querySelectorAll('.heart--content')[4].querySelector('h6') &&
            e.target !== document.querySelectorAll('.heart--content')[4].querySelector('button') &&
            e.target !== document.querySelectorAll('.heart--content')[5] &&
            e.target !== document.querySelectorAll('.heart--content')[5].querySelector('img') &&
            e.target !== document.querySelectorAll('.heart--content')[5].querySelector('h3') &&
            e.target !== document.querySelectorAll('.heart--content')[5].querySelector('p') &&
            e.target !== document.querySelectorAll('.heart--content')[5].querySelector('h6') &&
            e.target !== document.querySelectorAll('.heart--content')[5].querySelector('button') &&
            e.target !== document.querySelectorAll('.heart--content')[6] &&
            e.target !== document.querySelectorAll('.heart--content')[6].querySelector('img') &&
            e.target !== document.querySelectorAll('.heart--content')[6].querySelector('h3') &&
            e.target !== document.querySelectorAll('.heart--content')[6].querySelector('p') &&
            e.target !== document.querySelectorAll('.heart--content')[6].querySelector('h6') &&
            e.target !== document.querySelectorAll('.heart--content')[6].querySelector('button') &&
            e.target !== document.querySelectorAll('.heart--content')[7] &&
            e.target !== document.querySelectorAll('.heart--content')[7].querySelector('img') &&
            e.target !== document.querySelectorAll('.heart--content')[7].querySelector('h3') &&
            e.target !== document.querySelectorAll('.heart--content')[7].querySelector('p') &&
            e.target !== document.querySelectorAll('.heart--content')[7].querySelector('h6') &&
            e.target !== document.querySelectorAll('.heart--content')[7].querySelector('button') &&
            e.target !== document.querySelectorAll('h5')[0] &&
            e.target !== document.querySelectorAll('h5')[1]
        ) {
            heartRemove()
            navigator.clipboard.writeText(RD)
        }
    } else if (document.querySelector('.profileShow').style.display === 'flex') {
        if (e.target !== document.querySelector('.profileShow') &&
            e.target !== document.querySelectorAll('.profileShow-content')[0] &&
            e.target !== document.querySelectorAll('.profileShow-content')[1] &&
            e.target !== document.querySelectorAll('.profileShow-content')[2] &&
            e.target !== document.querySelectorAll('.profileShow-content')[3] &&
            e.target !== document.querySelectorAll('.profileShow-content')[4] &&
            e.target !== document.querySelectorAll('.profileShow-content')[5] &&
            e.target !== document.querySelectorAll('.profileShow-content p')[0] &&
            e.target !== document.querySelectorAll('.profileShow-content p')[1] &&
            e.target !== document.querySelectorAll('.profileShow-content p')[2] &&
            e.target !== document.querySelectorAll('.profileShow-content p')[3] &&
            e.target !== document.querySelectorAll('.profileShow-content p')[4] &&
            e.target !== document.querySelectorAll('.profileShow-content p')[5] &&
            e.target !== document.querySelectorAll('.profileShow-content i')[0] &&
            e.target !== document.querySelectorAll('.profileShow-content i')[1] &&
            e.target !== document.querySelectorAll('.profileShow-content i')[2] &&
            e.target !== document.querySelectorAll('.profileShow-content i')[3] &&
            e.target !== document.querySelectorAll('.profileShow-content i')[4] &&
            e.target !== document.querySelector('.icon img')
        ) {
            profileRemove()
            navigator.clipboard.writeText(RD)
        }
    } else if (e.target === archive) {
        archive.style.display = 'flex'
    } else if (e.target === addArchive.querySelector('img')) {
        addArchive.querySelector('img').style.zoom += .479
        addArchive.querySelector('img').style.marginTop = '1px'
        document.querySelector('.addBorder').style.zIndex = '999'
    } else if (e.target.getAttribute('img-key')) {
        scrollTo(0, 0)
        e.target.style.position = 'absolute'
        e.target.style.width = '51vw'
        e.target.style.height = '80vh'
        e.target.style.top = '120px'
        e.target.style.left = '446px'
        e.target.style.zIndex = '999999'
        setTimeout(() => {
            e.target.style.position = 'static'
            e.target.style.width = ''
            e.target.style.height = ''
            e.target.style.top = ''
            e.target.style.left = ''
            e.target.style.zIndex = ''
        }, 500)
    } else if (
        e.target === document.querySelector('.firstProfile img') ||
        e.target === document.querySelector('.firstProfile-info h2') ||
        e.target === document.querySelector('.firstProfile-info p')
    ) {
        scrollTo(0, 0)
        document.querySelector('.rd').style.display = 'flex'
        document.querySelector('body').style.overflow = 'hidden'
        iconHome.querySelector('i').style.pointerEvents = 'none'
        document.querySelector('.logo img').style.pointerEvents = 'none'
        iconMsg.querySelector('i').style.pointerEvents = 'none'
        document.querySelector('.border').style.pointerEvents = 'none'
        iconCompass.querySelector('i').style.pointerEvents = 'none'
        iconHeart.querySelector('i').style.pointerEvents = 'none'
        iconProfile.querySelector('img').style.pointerEvents = 'none'
    } else if (
        e.target === document.querySelectorAll('.otherProfile a')[0] ||
        e.target === document.querySelectorAll('.otherProfile a')[1] ||
        e.target === document.querySelectorAll('.otherProfile a')[2] ||
        e.target === document.querySelectorAll('.otherProfile a')[3] ||
        e.target === document.querySelectorAll('.otherProfile a')[4] ||
        e.target === document.querySelector('.firstProfile a') ||
        e.target === document.querySelectorAll('#posts')[0].querySelectorAll('.postIcons i')[0] ||
        e.target === document.querySelectorAll('#posts')[0].querySelectorAll('.postIcons i')[1] ||
        e.target === document.querySelectorAll('#posts')[0].querySelectorAll('.postIcons i')[2] ||
        e.target === document.querySelectorAll('#posts')[0].querySelectorAll('.postIcons i')[3] ||
        e.target === document.querySelectorAll('#posts')[1].querySelectorAll('.postIcons i')[0] ||
        e.target === document.querySelectorAll('#posts')[1].querySelectorAll('.postIcons i')[1] ||
        e.target === document.querySelectorAll('#posts')[1].querySelectorAll('.postIcons i')[2] ||
        e.target === document.querySelectorAll('#posts')[1].querySelectorAll('.postIcons i')[3] ||
        e.target === document.querySelectorAll('#posts')[2].querySelectorAll('.postIcons i')[0] ||
        e.target === document.querySelectorAll('#posts')[2].querySelectorAll('.postIcons i')[1] ||
        e.target === document.querySelectorAll('#posts')[2].querySelectorAll('.postIcons i')[2] ||
        e.target === document.querySelectorAll('#posts')[2].querySelectorAll('.postIcons i')[3] ||
        e.target === document.querySelectorAll('#posts')[3].querySelectorAll('.postIcons i')[0] ||
        e.target === document.querySelectorAll('#posts')[3].querySelectorAll('.postIcons i')[1] ||
        e.target === document.querySelectorAll('#posts')[3].querySelectorAll('.postIcons i')[2] ||
        e.target === document.querySelectorAll('#posts')[3].querySelectorAll('.postIcons i')[3] ||
        e.target === document.querySelectorAll('#posts')[0].querySelector('.commentItens a') ||
        e.target === document.querySelectorAll('#posts')[1].querySelector('.commentItens a') ||
        e.target === document.querySelectorAll('#posts')[2].querySelector('.commentItens a') ||
        e.target === document.querySelectorAll('#posts')[3].querySelector('.commentItens a')
    ) {
        e.preventDefault()
        navigator.clipboard.writeText(RD)
    } else if (e.target) {
        navigator.clipboard.writeText(RD)
    }
})

function resizeAdd() {
    if (document.querySelector('main').style.height === '80vh') {
        document.querySelector('.add').style.marginTop = '40px'
        document.querySelector('.addIn').style.top = '83px'
    } else if (document.querySelector('main').style.height === '100vh') {
        document.querySelector('.add').style.position = 'fixed'
        document.querySelector('.add').style.marginTop = '-135px'
        document.querySelector('.addIn').style.position = 'fixed'
        document.querySelector('.addIn').style.top = '85px'
    }
}

// MESSAGE AREA

const leftMessages = document.querySelector('.left-messages')
const messageScroll = document.querySelector('.dm .scroll')
const scrollPointer = document.querySelector('.dm .scrollPointer')
if (screen.availWidth > 820) {
    messageScroll.style.display = 'flex'
    scrollPointer.style.display = 'flex'
}
leftMessages.addEventListener('scroll', (e) => {
    document.querySelector('body .scrollPointer').style.display = 'none'
    document.querySelector('body .scroll').style.display = 'none'
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

// ACTIVATED JS / RANDOM NUMBERS

for (i = 0; i < 12; i++) {
    document.querySelectorAll('.compass-content-img img')[i].src = `assets/images/discover/discover${i + 1}.jpg`
}
for (i = 0; i < 7; i++) {
    document.querySelectorAll('.heart--content img')[i].src = `assets/images/users/user${i + 1}.jpg`
    document.querySelectorAll('.heart--content h3')[i].textContent = `${userName[i].toLowerCase()}`
    document.querySelectorAll('.contact img')[i].src = `assets/images/users/user${i + 1}.jpg`
    document.querySelectorAll('.contact-info h4')[i].textContent = `${userName[i].toLowerCase()}`
}
for (i = 0; i < 7; i++) {
    document.querySelectorAll('.story img:nth-child(2)')[i].src = `assets/images/users/user${i}.jpg`
    let arr4 = []
    arr4.push(...userName[i])
    arr4.splice(-5)
    if(i <= 5) {
        document.querySelectorAll('.story h2')[i + 1].textContent = `${arr4.join('').toLowerCase()}...`
    } else {
        document.querySelectorAll('.story h2')[i + 1].textContent = `instaUser`
    }
}
for (i = 0; i < 5; i++) {
    document.querySelectorAll('.otherProfile img')[i].src = `assets/images/users/user${i + 8}.jpg`
    document.querySelectorAll('.otherProfile-info h2')[i].textContent = `${userName[i + 7].toLowerCase()}`
}
for (i = 0; i < 4; i++) {
    let randomLikeFirstNumber = parseInt(Math.random() * 9)
    let randomLikeNumbers = parseInt(Math.random() * (999 - 100 + 1) + 100)
    if (randomLikeNumbers && randomLikeFirstNumber !== 0) {
        randomLikeNumbers = `${randomLikeFirstNumber}.${randomLikeNumbers}`
    }
    document.querySelectorAll('.likes')[i].textContent = `${randomLikeNumbers} curtidas`

    let randomPostComments = parseInt(Math.random() * 100)
    document.querySelectorAll('.postComments span')[i].textContent = randomPostComments

    let randomHour = parseInt(Math.random() * 13)
    if (randomHour <= 2 && randomHour >= 1) {
        document.querySelectorAll('.postInfo span')[i].textContent = `Há ${randomHour === 1 ? `${randomHour} dia` : `${randomHour} dias`}`
    } else if (randomHour !== 0) {
        document.querySelectorAll('.postInfo span')[i].textContent = `Há ${randomHour} horas`
    }
}

// ACTIVATED JS / SELECTED INFO

document.querySelectorAll('.post img')[0].src = `assets/images/discover/discover5.jpg`
document.querySelectorAll('.postHead-info img:nth-child(2)')[0].src = `assets/images/users/user4.jpg`
document.querySelectorAll('.postHead-info .name h2')[0].textContent = `${userName[3].toLowerCase()}`
document.querySelectorAll('.postMessage h2')[0].textContent = `${userName[3].toLowerCase()}`
document.querySelectorAll('.postMessage p')[0].textContent = `Japan Street Photography`
document.querySelectorAll('.post img')[1].src = `assets/images/discover/discover11.jpg`
document.querySelectorAll('.postHead-info img:nth-child(2)')[1].src = `assets/images/users/user6.jpg`
document.querySelectorAll('.postHead-info .name h2')[1].textContent = `${userName[5].toLowerCase()}`
document.querySelectorAll('.postMessage h2')[1].textContent = `${userName[5].toLowerCase()}`
document.querySelectorAll('.postMessage p')[1].textContent = `📸👩‍👧❤️`
document.querySelectorAll('.post img')[2].src = `assets/images/discover/discover10.jpg`
document.querySelectorAll('.postHead-info img:nth-child(2)')[2].src = `assets/images/users/user5.jpg`
document.querySelectorAll('.postHead-info .name h2')[2].textContent = `${userName[4].toLowerCase()}`
document.querySelectorAll('.postMessage h2')[2].textContent = `${userName[4].toLowerCase()}`
document.querySelectorAll('.postMessage p')[2].textContent = `We go GYM!!!! 🔱`
document.querySelectorAll('.post img')[3].src = `assets/images/discover/discover12.jpg`
document.querySelectorAll('.postHead-info img:nth-child(2)')[3].src = `assets/images/users/user2.jpg`
document.querySelectorAll('.postHead-info .name h2')[3].textContent = `${userName[1].toLowerCase()}`
document.querySelectorAll('.postMessage h2')[3].textContent = `${userName[1].toLowerCase()}`
document.querySelectorAll('.postMessage p')[3].textContent = `Barbecue!!! 🍖🌶️🔥`

// RD

const rdInput = document.querySelector('#rd_input')
document.querySelector('.rd_button').addEventListener('click', (e) => {
    e.preventDefault()
    if (rdInput.value === '🎈🎈🎈') {
        document.querySelector('.rd').innerHTML = `
        Parabéns!
        <br>
        😎😎😎
        `
        setTimeout(() => {
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            location.reload()
        }, 2000)
    } else {
        document.querySelector('.rd').innerHTML = `
        Não foi dessa vez!
        <br>
        😭😭😭😭😭😭
        <br>
        <br>
        Recarregando...
        `
        setTimeout(() => {
            location.reload()
        }, 2000)
    }
})

// Responsive 

const scrollStyle = document.createElement('style')
scrollStyle.innerHTML = `
.left-messages {
    overflow-y: scroll;
    height: 100%;
}

.left-messages::-webkit-scrollbar {
    display: none;
}
`
setInterval(() => {
    if (document.querySelector('.dm').style.display === 'flex' && screen.availWidth <= 820) {
        document.querySelector('header').style.display = 'none'
        document.querySelector('.dm').style.height = '142%'
        if(document.querySelector('.dm').children[0] === document.querySelector('.dm .scrollPointer') && document.querySelector('.dm').children[1] === document.querySelector('.dm .scroll')){
            document.querySelector('.dm .scrollPointer').style.display = 'none'
            document.querySelector('.dm .scroll').style.display = 'none'
        }
        document.querySelector('.border-bottom-icons').style.opacity = '0'
        document.querySelector('.mobile-back').style.display = 'flex'
    } 
    else {
        document.querySelector('.dm .scrollPointer').style.display = 'flex'
        document.querySelector('.dm .scroll').style.display = 'flex'
    }
    if(screen.availWidth > 820 && screen.availWidth < 1087) {
        document.querySelector('header').style.display = 'flex'
        document.querySelector('.dm').style.height = '126%'
    }
}, 1000)

document.querySelector('.story.mobile').querySelectorAll('img')[1].src = 'assets/images/users/me.jpg'
document.querySelector('.story.mobile').querySelector('h2').textContent = 'Seu story'