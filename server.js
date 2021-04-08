let doorImage1 = document.getElementById('door1')
let doorImage2 = document.getElementById('door2')
let doorImage3 = document.getElementById('door3')

let numClosedDoors = 3;

let openDoor1 = botDoorPath
let openDoor2 = beachDoorPath
let openDoor3 = spaceDoorPath

randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors)
        if(choreDoor === 0) {
            openDoor1 = botDoorPath;
            openDoor2 = openDoor3;
            openDoor3 = openDoor2;
        } else if (choreDoor === 1) {
            openDoor2 = botDoorPath;
            openDoor1 = openDoor3;
            openDoor3 = openDoor1;
        } else if (choreDoor === 2) {
            openDoor3 = botDoorPath;
            openDoor2 = openDoor1;
            openDoor1 = openDoor2;
        }
}


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
