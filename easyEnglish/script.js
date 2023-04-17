// озвучка iron мужчина
var div = document.getElementById('circle');
let $start = document.querySelector('#start')
let $startFrame = document.querySelector('.start')
let $part1 = document.querySelector('.part1')
let $game = document.querySelector('.game')
let $table = document.querySelector('#table')
let $chair = document.querySelector('#table1')
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
    let tablex = $table.getBoundingClientRect().x
    let tabley = $table.getBoundingClientRect().y
    if (Math.abs(divx - tablex) <= 80 && Math.abs(divy - tabley) <= 50) {
        audio = new Audio(`audio/great.mp3`);
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
    // audio.play();
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
    [["book","table"], ["pen","table"],["ball","chair"],["ball","pen","book","table","chair"],["ball","pen","book"],["ball","book","pen"]],
    [["pen","chair"], ["ball","table"],["book","chair"],["pen","book","ball","chair","table"],["ball","book","pen"],["book","pen","ball"]],
    [["ball","table"], ["book","table"],["pen","table"],["book","pen","ball","table","chair"],["book","pen","ball"], ["ball","pen","book"]],
    [["book","table"], ["ball","table"],["pen","chair"],["ball","pen","book","table","chair"],["ball","pen","book"],["ball","book","pen"]],
    [["pen","chair"], ["book","table"],["ball","chair"],["pen","book","ball","chair","table"],["ball","book","pen"],["book","pen","ball"]],
    [["ball","table"], ["pen","table"],["ball","table"],["book","pen","ball","table","chair"],["book","pen","ball"], ["ball","pen","book"]],
]   
function levels(level) {
    console.log('yes')
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
            place = "table"
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
            icon = array[number4-1][3][0]
            icon1 = array[number4-1][3][1]
            icon2 = array[number4-1][3][2]
            place = array[number4-1][3][3]
            place1 = array[number4-1][3][4]
            break
        case 5:
            icon = array[number3-1][4][0]
            icon1 = array[number3-1][4][1]
            icon2 = array[number3-1][4][3]
            break
        case 6:
            icon = array[number5-1][5][0]
            icon1 = array[number5-1][5][1]
            icon2 = array[number5-1][5][2]
            break
        case 7:
            color = "red"
            place = "red-table"
            place1 = "blue-table"
            break
        case 8:
            color = "green"
            place = "green-table"
            place1 = "blue-table"
            break
        case 9:
            color = "blue"
            place = "blue-table"
            place1 = "green-table"
            break
        case 10:
            color = "blue"
            place = "green-chair"
            place1 = "blue-chair"
            place2 = "red-chair"
            break  

    }
    if (level <= 3) {
        audio = new Audio(`audio/${icon}-${place}.mp3`);
        audio.play()
        $description.innerHTML = ""
        $description.insertAdjacentHTML('beforeend', `
            <p>put the ${icon} on the ${place}</p>
        `)
        $chair.classList.remove('hide')
        $circle1.classList.remove('hide')
        $circle.style.backgroundImage = `url(./icon/${icon}.png)`
        $table.style.backgroundImage = `url(./icon/${place}.png)`
    }else if (level > 3 && level <= 6) {
        audio = new Audio(`audio/${icon}-${place}.mp3`);
        audio.play()
        $description.innerHTML = ""
        $description.insertAdjacentHTML('beforeend', `
            <p>put the ${icon} on the ${place}</p>
        `)
        $circle1.classList.remove('hide')
        $circle2.classList.remove('hide')
        
        $circle.style.backgroundImage = `url(./icon/${icon}.png)`
        $circle1.style.backgroundImage = `url(./icon/${icon1}.png)`
        $circle2.style.backgroundImage = `url(./icon/${icon2}.png)`
        $table.style.backgroundImage = `url(./icon/${place}.png)`
        $chair.style.backgroundImage = `url(./icon/${place1}.png)`
    } else if (level > 6 && level < 10) {
        $circle1.classList.add('hide')
        $circle2.classList.add('hide')
        console.log(level)
        console.log(color)
        audio = new Audio(`audio/${color}ball-${color}table.mp3`);
        audio.play()
        $description.innerHTML = ""
        $description.insertAdjacentHTML('beforeend', `
            <p>put the ${color} ball on the ${color} table</p>
        `)
        $table.style.color = "black"
        $circle.style.backgroundImage = `url(./ball${level}.png)`
        $table.style.backgroundImage = `url(./icon/${place}.png)`
        $chair.style.backgroundImage = `url(./icon/${place1}.png)`
    } else if (level >= 10) {
        $circle1.classList.add('hide');
        $circle2.classList.add('hide');
        audio = new Audio(`audio/blueball-greentable.mp3`);
        audio.play()
        $description.innerHTML = ""
        $description.insertAdjacentHTML('beforeend', `
            <p>put the ${color} ball on the green chair</p>
        `)
        $table.style.color = "black"
        $chair2.classList.remove('hide')
        $circle.style.backgroundImage = `url(./ball${9}.png)`
        $table.style.backgroundImage = `url(./icon/${place}.png)`
        $chair.style.backgroundImage = `url(./icon/${place1}.png)`
        $chair2.style.backgroundImage = `url(./icon/${place2}.png)`
    }
}


$mainPage.addEventListener('click', function () {
    $game.classList.add('hide')
    $tasks.classList.remove('hide')
})