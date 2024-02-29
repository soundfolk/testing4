let score = 0
let timer = 5000
let life = 5

let counts = 5
let part = 5

let timeok = 0

let pin = localStorage.getItem("name")
let age = localStorage.getItem("age")
document.getElementById("names").innerHTML = pin

function time() {
    timeok += 1
    document.getElementById("maintime").innerHTML = timeok
}
setInterval(time, 1000)

pps = Math.random()

function over() {
    ll = localStorage.setItem(pps, score)
    window.location.href = "indexof.html"
}


function evs() {
    if (part >= 0) {
        part -= 1
    }
    document.getElementById("count").innerHTML = part
    if (part == 0) {
        clearTimeout(vv)
        clearInterval(vvs)
        vv = setTimeout(randoms, 100)
        vvs = setInterval(randoms, timer)
        if (timeok > 60) {
            part = 3
        }
        else {
            part = 5
        }
    }

}

let num1;
let num2;

let ran = ["+", "-", "X"]

function randamisze() {
    if (timeok < 60) {
        num1 = Math.floor(Math.random() * 10)
        num2 = Math.floor(Math.random() * 10)
    }
    else if (120 > timeok > 60) {
        ran = ["+", "-"]
        part = 3
        timer = 3000
        num1 = Math.floor(Math.random() * 10)
        num2 = Math.floor(Math.random() * 10)
    }
    else if (240 > timeok < 120) {
        ran = ["+", "-"]
        part = 3
        timer = 3000
        num1 = Math.floor(Math.random() * 100)
        num2 = Math.floor(Math.random() * 100)
    }
    else if (1000 > timeok < 240) {
        ran = ["+", "-"]
        part = 5
        timer = 3000
        num1 = Math.floor(Math.random() * 1000)
        num2 = Math.floor(Math.random() * 1000)
    }
}

function randoms() {
    randamisze(num1, num2)
    points = document.getElementById("score").innerHTML = score
    let operators = Math.floor(Math.random() * ran.length)
    let operator = ran[operators]
    let int1 = document.getElementById("pip1").innerHTML = num1
    let oper = document.getElementById("plus").innerHTML = operator
    let int2 = document.getElementById("pip2").innerHTML = num2
    document.getElementById("Pin").onclick = function () {
        val = document.getElementById("text").value
        click(ran, num1, operator, num2, val, points)
    }
}

function click(ran, num1, operator, num2, val, points) {
    if (operator == ran[0]) {
        let int1 = document.getElementById("pip1").innerHTML = num1
        let oper = document.getElementById("plus").innerHTML = operator
        let int2 = document.getElementById("pip2").innerHTML = num2
        let vv = int1 + int2
        if (val == vv) {
            score += 1
            document.getElementById("feed").innerHTML = "Good"
            part = 5
            clearInterval(vs)
            clearTimeout(vv)
            clearInterval(vvs)
            vv = setTimeout(randoms, 10)
            vvs = setInterval(randoms, timer)
            vs = setInterval(evs, timer / 5)
        }
        else if (val == "") {
            document.getElementById("feed").innerHTML = "Enter something"
        }
        else {
            document.getElementById("feed").innerHTML = "Not Good"
            life -= 1
            document.getElementById("life").innerHTML = `Life ` + life
            part = 5
            clearInterval(vs)
            clearTimeout(vv)
            clearInterval(vvs)
            vv = setTimeout(randoms, 10)
            vvs = setInterval(randoms, timer)
            vs = setInterval(evs, timer / 5)

        }
        document.getElementById("ans").innerHTML = vv
    }
    if (operator == ran[1]) {
        let int1 = document.getElementById("pip1").innerHTML = num1
        let oper = document.getElementById("plus").innerHTML = operator
        let int2 = document.getElementById("pip2").innerHTML = num2
        let vv = int1 - int2
        if (val == vv) {
            score += 1
            document.getElementById("feed").innerHTML = "Good"
            part = 5
            clearInterval(vs)
            clearTimeout(vss)
            clearTimeout(vv)
            clearInterval(vvs)
            vv = setTimeout(randoms, 10)
            vvs = setInterval(randoms, timer)
            vs = setInterval(evs, timer / 5)
        }
        else if (val == "") {
            document.getElementById("feed").innerHTML = "Enter something"
        }
        else {
            document.getElementById("feed").innerHTML = "Not Good"
            life -= 1
            document.getElementById("life").innerHTML = `Life ` + life
            part = 5
            clearInterval(vs)
            clearTimeout(vv)
            clearInterval(vvs)
            vv = setTimeout(randoms, 10)
            vvs = setInterval(randoms, timer)
            vs = setInterval(evs, timer / 5)
        }
        document.getElementById("ans").innerHTML = vv

    }
    if (operator == ran[2]) {
        let int1 = document.getElementById("pip1").innerHTML = num1
        let oper = document.getElementById("plus").innerHTML = operator
        let int2 = document.getElementById("pip2").innerHTML = num2
        let vv = int1 * int2
        if (val == vv) {
            score += 1
            document.getElementById("feed").innerHTML = "Good"
            part = 5
            clearInterval(vs)
            clearTimeout(vv)
            clearTimeout(vss)

            clearInterval(vvs)
            vv = setTimeout(randoms, 10)
            vvs = setInterval(randoms, timer)
            vs = setInterval(evs, timer / 5)

        }
        else if (val == "") {
            document.getElementById("feed").innerHTML = "Enter something"
        }
        else {
            document.getElementById("feed").innerHTML = "Not Good"
            life -= 1
            document.getElementById("life").innerHTML = `Life ` + life
            part = 5
            clearInterval(vs)
            clearTimeout(vv)
            clearInterval(vvs)
            vv = setTimeout(randoms, 10)
            vvs = setInterval(randoms, timer)
            vs = setInterval(evs, timer / 5)

        }
        document.getElementById("ans").innerHTML = vv

    }
    if (life < 1) {  // This will get acrtivated when you guys lefty with no life int eh game dammintttt
        over()
    }
}

document.getElementById("powr").onclick = function () {
    let button = document.getElementById("powr")
    button.disabled = true
    clearTimeout(vv)
    clearTimeout(vss)
    clearInterval(vvs)
    clearInterval(vs)
    part = (timer + 10000) / 1000
    setTimeout(evs, 100)
    vs = setInterval(evs, 1000)
    setTimeout(() => {
        button.disabled = false
    }, 10000)
}
vv = setTimeout(randoms, 100)
vvs = setInterval(randoms, timer)
clearTimeout(vv)
clearInterval(vvs)
vss = setTimeout(evs, 100)
vs = setInterval(evs, timer / 5)

function stop() {
    clearInterval(vs)
}

document.getElementById("powers").onclick = function () {
    part = 0
    let fire = document.getElementById("powers")
    fire.disabled = true
    if (part == 0) {
        clearTimeout(vv)
        clearInterval(vvs)
        vv = setTimeout(randoms, 100)
        vvs = setInterval(randoms, timer)
        if (timeok > 60) {
            part = 3
        }
        else {
            part = 5
        }
    }
    setTimeout(() => {
        fire.disabled = false
    }, 10000)
}

document.getElementById("points").onclick = function () {
}

document.getElementById("lifes").onclick = function () {
    life += 1
    document.getElementById("life").innerHTML = `Life ` + life
}

function minus() {
    val = document.getElementById("text").value = "-"
}

let test = document.getElementById("text")
let buts = document.getElementById("Pin")
document.addEventListener("keyup", e => {
    if (e.keyCode === 13) {
        buts.click()
        val = document.getElementById("text").value = null

    }
}
)

val = document.getElementById("text")
val.disabled == true

window.addEventListener("keydown", numbers)

function numbers(event) {
    switch (event.key) {
        case "1":
            val = document.getElementById("text").value += 1
            break
        case "2":
            val = document.getElementById("text").value += 2
            break
        case "3":
            val = document.getElementById("text").value += 3
            break
        case "4":
            val = document.getElementById("text").value += 4
            break
        case "5":
            val = document.getElementById("text").value += 5
            break
        case "6":
            val = document.getElementById("text").value += 6
            break
        case "7":
            val = document.getElementById("text").value += 7
            break
        case "8":
            val = document.getElementById("text").value += 8
            break
        case "9":
            val = document.getElementById("text").value += 9
            break
        case "0":
            val = document.getElementById("text").value += 0
            break
        case "Backspace":
            val = document.getElementById("text").value = null
            break
        case "-":
            val = document.getElementById("text").value = "-"
            break
    }
}

function one() {
    val = document.getElementById("text").value += 1
}
function two() {
    val = document.getElementById("text").value += 2
}
function three() {
    val = document.getElementById("text").value += 3
}
function four() {
    val = document.getElementById("text").value += 4
}
function five() {
    val = document.getElementById("text").value += 5
}
function six() {
    val = document.getElementById("text").value += 6
}
function seven() {
    val = document.getElementById("text").value += 7
}
function eight() {
    val = document.getElementById("text").value += 8
}
function nine() {
    val = document.getElementById("text").value += 9
}
function zero() {
    val = document.getElementById("text").value += 0
}
function zero() {
    val = document.getElementById("text").value += 0
}

function backspace() {
    val = document.getElementById("text").value = null
}