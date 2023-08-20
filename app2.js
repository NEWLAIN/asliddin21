// const parol = 'password@123'

// if (parol.length >= 12 && parol.includes('@')) {
//     console.log('Sizning parolingiz juda uzun !');
// } else if  (parol.length >= 8 || (parol.includes('@') && parol.length >= 5)) {
//     console.log('Sizning parolingiz ytarliccha kuchli !');
// }else {
//     console.log('Sizning parolingiz yetarlicha kuchli emas !');
// }

// let user = false
// if (!user) {
//     console.log("hech qanday foydalanuvchi yoq");
// }

                                        // 28-d
// let age = 24
// console.log(age)

                                        // 29-d
/* Argument & Parameters */

// const sayHello = function (name, day = 'kech') {
//   console.log(`Hayrili ${day} ${name}`)
// }

// sayHello('Behruz', 'tong')

// const calcArea = function (radius) {
//     return 3.14 * radius ** 2
// }

// const a = calcArea(5)

                                        // 32-d
// function sharbatTayyorlovchi(olma, apelsin) {
//     const sharbat = `Bu sharbat ${olma} ta va ${apelsin} ta apelsin dan iborat.`
//     return sharbat
// }

// const sharbat = sharbatTayyorlovchi(3, 7)

// console.log(sharbat)

                                            // 35-d
// const names = ['ahror', 'sardor', 'doniyor', 'avaz', 'islom']
// const namesNew = []

// names.forEach(function (name, i) {
//     let boshi = name.charAt().toUpperCase()
//     let davomi = name.slice(1).toLowerCase()
//     let nameNew = boshi + davomi + 'bek'
//     namesNew.push(nameNew, i)
// })

// console.log(namesNew)

                                            // 36-d

// const ismlar = ['ahror', 'sardor', 'doniyor', 'farxod']
// const newIsmlar = []

// ismlar.forEach(function (ism) {
//     const newIsm = ism.charAt().toUpperCase() + ism.slice(1).toLowerCase() + 'bek'
//     newIsmlar.push(newIsm)
// })

// console.log(newIsmlar)

// for (let i = 0; i < ismlar.length; i++) {
//   console.log(ismlar[i])
// }

                                            // 37-d

// const user = {
//     name: 'Ahror',
//     age: 24,
//     email: 'akhrorteacher@gmail.com',
//     location: "Farg'ona",
//     lang: ['uzbek', 'russian', 'english'],
//     }
    
//     console.log(user)
//     console.log(user.email)
    
//     user.age = 25
//     console.log(user.age)
    
//     console.log(user['location'])
//     user['name'] = 'Doniyor'
//     console.log(user['name'])

// console.log(typeof user)

                                            // 38-d

// const user = {
//     name: 'Ahror',
//     age: 24,
//     email: 'akhrorteacher@gmail.com',
//     location: "Farg'ona",
//     langs: ['uzbek', 'russian', 'english'],
//     login: function () {
//         console.log('Siz bu saytdagi sahifangiznga kirdingiz.')
//     },
//     logout: function () {
//         console.log('Siz bu saytdagi sahifangizni tark etdingiz.')
//     },
//     speak: function () {},
//     }

                                            // 39-d

// const user = {
//     name: 'Ahror',
//     age: 24,
//     email: 'akhrorteacher@gmail.com',
//     location: "Farg'ona",
//     langs: ['uzbek', 'russian', 'english'],
//     login: function () {
//         console.log('Siz bu saytdagi sahifangiznga kirdingiz.')
//     },
//     logout: function () {
//         console.log('Siz bu saytdagi sahifangizni tark etdingiz.')
//     },
//     speak: function () {
//         console.log(this)
//         console.log('I can speak:')
//         this.langs.forEach((lang) => {
//         console.log(lang)
//         })
//     },
//     }
    
//     user.speak()

                                            // 40-d

// { name: 'Harry Potter', likes: 484 },
// { name: 'Titanic', likes: 987 },
// { name: 'Sitve Jobs', likes: 156 },
// { name: 'Sherlock', likes: 574 },

// const user = {
//     name: 'Ahror',
//     age: 24,
//     email: 'akhrorteacher@gmail.com',
//     location: "Farg'ona",
//     langs: ['uzbek', 'russian', 'english'],
//     login: function () {
//         console.log('Siz bu saytdagi sahifangiznga kirdingiz.')
//     },
//     logout: function () {
//         console.log('Siz bu saytdagi sahifangizni tark etdingiz.')
//     },
//     speak: function () {
//         console.log(this)
//         console.log('I can speak:')
//         this.langs.forEach((lang) => {
//         console.log(lang)
//         })
//     },
//     movies: [
//         { name: 'Avatar', likes: 456 },
//         { name: 'Harry Potter', likes: 484 },
//         { name: 'Titanic', likes: 987 },
//         { name: 'Sitve Jobs', likes: 156 },
//         { name: 'Sherlock', likes: 574 },
//     ],
//     }
    
//   // objectlar arrayda
    
//     const movies = [
//     { name: 'Avatar', likes: 456 },
//     { name: 'Harry Potter', likes: 484 },
//     { name: 'Titanic', likes: 987 },
//     { name: 'Sitve Jobs', likes: 156 },
//     { name: 'Sherlock', likes: 574 },
//     ]
    
//     movies.forEach((movie) => {
//     // console.log(movie.name)
//     // console.log(movie.likes)
//     const result = `Kino nomi: ${movie.name}🎥, Likes: ${movie.likes}💖`
//     console.log(result)
//     })
//     user.moviesWatch()

                                            // 41-d

// Math, Math.PI, Math.E
// console.log(Math)
// console.log(Math.E)
// console.log(Math.PI)

// const area = 7.9

// sonning eng yaqin butun qismga yaxlitlaydi
// Math.round()
// console.log(Math.round(area))

// eng yaqin kichik butun qisma qarab yaxlitlaydi
// Math.floor()
// console.log(Math.floor(area))

// eng yaqin kattasiga butun qisma qarab yaxlitlaydi
// Math.ceil()
// console.log(Math.ceil(area))

// sonning faqat butun qismini qaytaradi
// Math.trunc()
// console.log(Math.trunc(area))

// 0 va 1 oralig'ida ixtiyoriy raqamlarni qaytaradi
// Math.random()
// const randomNumber = Math.trunc(Math.random() * 10) + 1
// console.log(randomNumber)

const body = document.querySelector('body')
const container = document.querySelector('.container')
const colorText = document.querySelector('.color-text')
const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
]

// random color function
function getGradient() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length)
    color += values[randomNumber]
    }

    return color
}

// set color to body
function setGradient() {
    const color1 = getGradient()
    const color2 = getGradient()
    const randomDeg = Math.trunc(Math.random() * 360)
    const bgColor = `linear-gradient(
        ${randomDeg}deg,
        ${color1},
        ${color2}
    )`
    body.style.background = bgColor
    colorText.textContent = bgColor
}

setGradient()

container.addEventListener('click', setGradient)