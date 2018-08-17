document.addEventListener("keydown", e=> {
    console.log(e.keyCode)
    if(e.keyCode===74) {
        left()
    }
    if(e.keyCode===73) {
        up()
    }
    if(e.keyCode===76) {
        right()
    }
    if(e.keyCode===75) {
        down()
    }
})
let pOne= document.querySelector("#playerone")
let pTwo = document.querySelector("#playertwo")
let ball=document.querySelector("#ball")
console.log(ball.object3D)
// ball.setAttribute("velocity", "5 0 0")
function left() {
    pTwo.setAttribute("velocity", "-5 0 0")
    console.log("Running")
}
function right() {
    pTwo.innerHTML=`<a-animation ></a-animation>`
    // let x = (pTwo.object3D.position.x+.3);
    // let y= pTwo.object3D.position.y;
    // let z= pTwo.object3D.position.z;
    // pTwo.object3D.position.set(x, y, z);
}
function up() {
    let x = (pTwo.object3D.position.x);
    let y= (pTwo.object3D.position.y);
    let z= (pTwo.object3D.position.z-.3);
    pTwo.object3D.position.set(x, y, z);
}
function down() {
    let x = pTwo.object3D.position.x;
    let y= pTwo.object3D.position.y;
    let z= (pTwo.object3D.position.z+.3);
    pTwo.object3D.position.set(x, y, z);
}
// left()