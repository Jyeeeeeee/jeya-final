let roll = document.getElementById('roll');
let rollChild = roll.getElementsByTagName("span");
let rollFullWidth = 0;
let rollNow = window.outerWidth;
let speed = 0.5;

let rfw = setInterval(() => {
    rollFullWidth = 0;
    for (i = 0; i < roll.getElementsByTagName("span").length; i++){
        rollFullWidth += roll.getElementsByTagName("span")[i].offsetWidth;
    }
    console.log(`rollFullWidth : ${rollFullWidth}`);
}, 1000)

let letsroll = setInterval(() => {
    for (i = 0; i < rollChild.length; i++){
        rollChild[i].style.left = rollNow + "px";
        rollNow -= speed;
        if(rollNow < (rollFullWidth)*(-1)) rollNow = window.outerWidth;
    }
}, 10)

roll.addEventListener('mouseenter', (e) => {
    speed = 0.1;
})

roll.addEventListener('mouseleave', (e) => {
    speed = 0.5;
})

function printPage() {
    const np = document.getElementsByClassName("np");

    for(i = 0; i < np.length; i++){
        np[i].classList.add("hide");
    }

    window.print();

    for(i = 0; i < np.length; i++){
        np[i].classList.remove("hide");
    }
}
