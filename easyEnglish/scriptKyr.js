var div = document.getElementById('circle');
let $start = document.querySelector('#start')
let $startFrame = document.querySelector('.start')
let $part1 = document.querySelector('.part1')
let $game = document.querySelector('.game')
let $столдун = document.querySelector('#столдун')
let $отургучтун = document.querySelector('#table1')
let $chair2 = document.querySelector('#table2')
let $won = document.querySelector('.won')
let $resetBtn = document.querySelector('.reset')
let $nextBtn = document.querySelector('.next')
let $circle = document.querySelector("#circle")
let $circle1 = document.querySelector("#circle1")
let $circle2 = document.querySelector("#circle2")
let $tasks = document.querySelector('.tasks');
let $task = document.querySelectorAll('.task')
let $description = document.querySelector('.description')
let $mainPage = document.querySelector('#mainPage')
let $thank = document.querySelector('.thank')
let audio = new Audio("audio/welcome.mp3");
let level = 1
$task.forEach((t, e) => {
    // e.preventDefault();
    console.log(t);
    t.addEventListener('click', () => showTask(t.dataset.id))
})
function showTask(id) {
    level = id;
    levels(level)
    $tasks.classList.add('hide')
    $game.classList.remove('hide')
}

var listener = function (e) {
    div.style.left = e.pageX - 50 + "px";
    div.style.top = e.pageY - 120 + "px";
};
var listener1 = function (e) {
    $circle1.style.left = e.pageX - 50 + "px";
    $circle1.style.top = e.pageY - 120 + "px";
};
var listener2 = function (e) {
    $circle2.style.left = e.pageX - 50 + "px";
    $circle2.style.top = e.pageY - 120 + "px";
};

circle.addEventListener('mousedown', e => {
    document.addEventListener('mousemove', listener);
});
circle1.addEventListener('mousedown', e => {
    document.addEventListener('mousemove', listener1);
});
circle2.addEventListener('mousedown', e => {
    document.addEventListener('mousemove', listener2);
});
circle1.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', listener1);
})
circle2.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', listener2);
})

circle.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', listener);
    let divx = div.getBoundingClientRect().x
    let divy = div.getBoundingClientRect().y
    let tablex = $столдун.getBoundingClientRect().x
    let tabley = $столдун.getBoundingClientRect().y
    if (Math.abs(divx - tablex) <= 80 && Math.abs(divy - tabley) <= 50) {
        audio = new Audio(`audioKyr/great.mp3`);
        audio.play()
        won()
    }
});

function won() {
    if (level == 10){
        $thank.classList.remove('hide')
    }else{
        $won.classList.remove('hide')
    }
    $game.style.pointerEvents = 'none'
}

$resetBtn.addEventListener('click', function () {
    $won.classList.add('hide')
    levels(level)
    $game.style.pointerEvents = 'auto'
})

$nextBtn.addEventListener('click', function () {
    $won.classList.add('hide')
    level++
    levels(level)
    $game.style.pointerEvents = 'auto'
})

$start.addEventListener('click', function () {
    //audio.play();
    // $tasks.style.visibility = "visible;
    $game.classList.remove('hide')
    $startFrame.classList.add('hide')
    levels(level)
})

const number = Math.ceil(Math.random() * 6)
const number1 = Math.ceil(Math.random() * 3)
const number2 = Math.ceil(Math.random() * 3)
const number3 = Math.ceil(Math.random() * 3)
const number4 = Math.ceil(Math.random() * 3)
const number5 = Math.ceil(Math.random() * 3)

const array = [
    [["китепти","столдун"], ["калемди","столдун"],["топту","отургучтун"],["топту","калемди","китепти","столдун","отургучтун"],["топту","калемди","китепти"],["топту","китепти","калемди"]],
    [["калемди","отургучтун"], ["топту","столдун"],["китепти","отургучтун"],["калемди","китепти","топту","отургучтун","столдун"],["топту","китепти","калемди"],["китепти","калемди","топту"]],
    [["топту","столдун"], ["китепти","столдун"],["калемди","столдун"],["китепти","калемди","топту","столдун","отургучтун"],["китепти","калемди","топту"], ["топту","калемди","китепти"]],
    [["китепти","столдун"], ["топту","столдун"],["калемди","отургучтун"],["топту","калемди","китепти","столдун","отургучтун"],["топту","калемди","китепти"],["топту","китепти","калемди"]],
    [["калемди","отургучтун"], ["китепти","столдун"],["топту","отургучтун"],["калемди","китепти","топту","отургучтун","столдун"],["топту","китепти","калемди"],["китепти","калемди","топту"]],
    [["топту","столдун"], ["калемди","столдун"],["топту","столдун"],["китепти","калемди","топту","столдун","отургучтун"],["китепти","калемди","топту"], ["топту","калемди","китепти"]],
]   


function levels(level) {
    level = Number(level)
    $tasks.classList.add('hide')
    $game.classList.remove('hide')
    $circle.style.top = 0
    $circle.style.left = 0
    $circle1.style.top = 200
    $circle1.style.left = 0
    $circle2.style.top = 400
    $circle2.style.left = 0
    let color = ""
    let icon = ""
    let icon1 = ""
    let icon2 = ""
    switch (level) {
        case 1:
            icon = array[number-1][0][0]
            place = "столдун"
            break
        case 2:
            icon = array[number-1][1][0]
            place = array[number-1][1][1]
            break
        case 3:
            icon = array[number-1][2][0]
            place = array[number-1][2][1]
            break
        case 4:
            icon = "китепти"
            icon1 = "калемди"
            icon2 = "топту"
            place = "отургучтун"
            place1 = "столдун"
            break
        case 5:
            icon = "калемди"
            icon1 = "топту"
            icon2 = "китепти"
            break
        case 6:
            icon = "китепти"
            icon1 = "топту"
            icon2 = "калемди"
            break
        case 7:
            color = "кызыл"
            place = "кызыл-столго"
            place1 = "көк-столго"
            break
        case 8:
            color = "жашыл"
            place = "жашыл-столго"
            place1 = "көк-столго"
            break
        case 9:
            color = "көк"
            place = "көк-столго"
            place1 = "жашыл-столго"
            break
        case 10:
            color = "көк"
            place = "жашыл-отургучка"
            place1 = "көк-отургучка"
            place2 = "кызыл-отургучка"
            break  
    }
    if (level <= 3) {
        $description.innerHTML = ""
        audio = new Audio(`audioKyr/${icon}-${place}.mp3`);
        audio.play()
        $description.insertAdjacentHTML('beforeend', `
            <p>${icon} ${place} устуно кой</p>
        `)
        $отургучтун.classList.remove('hide')
        $circle1.classList.remove('hide')
        $circle.style.backgroundImage = `url(./icon/${icon}.png)`
        $столдун.style.backgroundImage = `url(./icon/${place}.png)`
    } else if (level > 3 && level <= 6) {
        audio = new Audio(`audioKyr/${icon}-${place}.mp3`);
        audio.play()
        $description.innerHTML = ""
        $description.insertAdjacentHTML('beforeend', `
            <p>${icon} ${place} устуно кой</p>
        `)
        $circle1.classList.remove('hide')
        $circle2.classList.remove('hide')
        
        $circle.style.backgroundImage = `url(./icon/${icon}.png)`
        $circle1.style.backgroundImage = `url(./icon/${icon1}.png)`
        $circle2.style.backgroundImage = `url(./icon/${icon2}.png)`
        $столдун.style.backgroundImage = `url(./icon/${place}.png)`
        $отургучтун.style.backgroundImage = `url(./icon/${place1}.png)`
    } else if (level > 6 && level < 10) {
        $circle1.classList.add('hide')
        $circle2.classList.add('hide')
        console.log(level)
        console.log(color)
        audio = new Audio(`audioKyr/${color}топту-${color}столдун.mp3`);
        audio.play()
        $description.innerHTML = ""
        $description.insertAdjacentHTML('beforeend', `
            <p>${color} топту  ${color} столдун устуно кой</p>
        `)
      
        $столдун.style.color = "black"
        $circle.style.backgroundImage = `url(./топту${level}.png)`
        $столдун.style.backgroundImage = `url(./icon/${place}.png)`
        $отургучтун.style.backgroundImage = `url(./icon/${place1}.png)`
    } else if (level >= 10) {
        $circle1.classList.add('hide');
        $circle2.classList.add('hide');
        audio = new Audio(`audioKyr/10.mp3`);
        audio.play()
        $description.innerHTML = ""
        $description.insertAdjacentHTML('beforeend', `
            <p>${color} топту жашыл отургучтун устуно кой</p>
        `)
        $столдун.style.color = "black"
        $chair2.classList.remove('hide')
        $circle.style.backgroundImage = `url(./топту${9}.png)`
        $столдун.style.backgroundImage = `url(./icon/${place}.png)`
        $отургучтун.style.backgroundImage = `url(./icon/${place1}.png)`
        $chair2.style.backgroundImage = `url(./icon/${place2}.png)`
    }
}


$mainPage.addEventListener('click', function () {
    $game.classList.add('hide')
    $tasks.classList.remove('hide')
})