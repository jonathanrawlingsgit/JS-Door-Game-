let doorImage1 = document.getElementById('door1')
let doorImage2 = document.getElementById('door2')
let doorImage3 = document.getElementById('door3')


let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'
doorImage1.onclick = () => {
    doorImage1.src = botDoorPath;
}

let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'
doorImage2.onclick = () => {
    doorImage2.src = beachDoorPath;
}

let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg'
doorImage3.onclick = () => {
   doorImage3.src = spaceDoorPath;
}