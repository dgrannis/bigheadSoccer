let pOne= document.querySelector("#playerone")
let pTwo = document.querySelector("#playertwo")
let ball=document.querySelector("#ball")
let ballent= document.querySelector("#ballent")
let goals = document.querySelectorAll(".goal")
let scoreent = document.querySelector("#scoreent")
let north= false
let east = false
let south = false
let west = false
let twopoints = 0
let onepoints = 0

let x = 0
let z = 0
let xt= 0
let zt = 0


window.addEventListener("keydown", e=> {
    console.log(e.keyCode);
    if(e.keyCode===68) {
        east=true
        x=40
        // pOne.removeAttribute("static-body")
        // pOne.setAttribute("dynamic-body", "")
        // pOne.setAttribute("mass", "10")
        pOne.setAttribute("velocity", `${x} 0 ${z}`)
    }
    if(e.keyCode===87) {
        north=true
        z=-40
        // pOne.removeAttribute("static-body")
        // pOne.setAttribute("dynamic-body", "")
        // pOne.setAttribute("mass", "10")
        pOne.setAttribute("velocity", `${x} 0 ${z}`)
    }
    if(e.keyCode===65) {
        west=true
        x=-40
        // pOne.removeAttribute("static-body")
        // pOne.setAttribute("dynamic-body", "")
        // pOne.setAttribute("mass", "10")
        pOne.setAttribute("velocity", `${x} 0 ${z}`)
    }
    if(e.keyCode===83) {
        south=true
        z=40
        // pOne.removeAttribute("static-body")
        // pOne.setAttribute("dynamic-body", "")
        // pOne.setAttribute("mass", "10")
        pOne.setAttribute("velocity", `${x} 0 ${z}`)
    }
    if(e.keyCode===76) {
        xt=40
        // pTwo.removeAttribute("static-body")
        // pTwo.setAttribute("kinematic-body", "")
        pTwo.setAttribute("velocity", `${xt} 0 ${zt}`)
    }
    if(e.keyCode===73) {
        zt=-40
        // pTwo.removeAttribute("static-body")
        // pTwo.setAttribute("kinematic-body", "")
        pTwo.setAttribute("velocity", `${xt} 0 ${zt}`)
    }
    if(e.keyCode===74) {
        xt=-40
        // pTwo.removeAttribute("static-body")
        // pTwo.setAttribute("kinematic-body", "")
        pTwo.setAttribute("velocity",`${xt} 0 ${zt}` )
    }
    if(e.keyCode===75) {
        zt=40
        // pTwo.removeAttribute("static-body")
        // pTwo.setAttribute("kinematic-body", "")
        pTwo.setAttribute("velocity", `${xt} 0 ${zt}`)
    }
    console.log(ball.object3D.position)
})


window.addEventListener("keyup", e=> {
    if(e.keyCode===74) {
        xt=0
        // pTwo.removeAttribute("kinematic-body")
        // pTwo.setAttribute("static-body", "")
        pTwo.setAttribute("velocity", `${xt} 0 ${zt}`)
    }
    if(e.keyCode===73) {
        zt=0
        // pTwo.removeAttribute("kinematic-body")
        // pTwo.setAttribute("static-body", "")
        pTwo.setAttribute("velocity", `${xt} 0 ${zt}`)
    }
    if(e.keyCode===76) {
        xt=0
        // pTwo.removeAttribute("kinematic-body")
        // pTwo.setAttribute("static-body", "")
        pTwo.setAttribute("velocity", `${xt} 0 ${zt}`)
    }
    if(e.keyCode===75) {
        zt=0
        // pTwo.removeAttribute("kinematic-body")
        // pTwo.setAttribute("static", "")
        pTwo.setAttribute("velocity", `${xt} 0 ${zt}`)
    }
    
    
    if(e.keyCode===65) {
        x=0
        // pOne.removeAttribute("dynamic-body")
        // pOne.removeAttribute("mass")
        // pOne.setAttribute("static-body", "")
        pOne.setAttribute("velocity", `${x} 0 ${z}`)
    }
    if(e.keyCode===87) {
        z=0
        // pOne.removeAttribute("dynamic-body")
        // pOne.removeAttribute("mass")
        // pOne.setAttribute("static-body", "")
        pOne.setAttribute("velocity", `${x} 0 ${z}`)
    }
    if(e.keyCode===83) {
        z=0
        // pOne.removeAttribute("dynamic-body")
        // pOne.removeAttribute("mass")
        // pOne.setAttribute("static-body", "")
        pOne.setAttribute("velocity", `${x} 0 ${z}`)
    }
    if(e.keyCode===68) {
        x=0
        // pOne.removeAttribute("dynamic-body")
        // pOne.removeAttribute("mass")
        // pOne.setAttribute("static", "")
        pOne.setAttribute("velocity", `${x} 0 ${z}`)
    }
})

goals.forEach(goal => {
    goal.addEventListener("collide", e=> {
        if(goal.id==="goaltwo") {
            ball.removeAttribute("dynamic-body")
            ball.setAttribute("static-body", "")
            ball.object3D.position.set(0, 7, 0)
            ball.removeAttribute("static-body")
            ball.setAttribute("dynamic-body", "")
            twopoints++
            scoreent.innerHTML=`<a-text id="score" value="Score: ${twopoints} - ${onepoints}" color="turquoise" position= "60 0 0" scale="30 30 30" rotation="-90 0 0"></a-text>`
        }
        if(goal.id==="goalone") {
            ball.removeAttribute("dynamic-body")
            ball.setAttribute("static-body", "")
            ball.object3D.position.set(0, 7, 0)
            ball.removeAttribute("static-body")
            ball.setAttribute("dynamic-body", "")
            onepoints++
            scoreent.innerHTML=`<a-text id="score" value="Score: ${twopoints} - ${onepoints}" color="turquoise" position= "60 0 0" scale="30 30 30" rotation="-90 0 0"></a-text>`
        }
    })
        scoreent.innerHTML=`<a-text id="score" value="Score: Orange wins" color="turquoise" position= "60 0 0" scale="30 30 30" rotation="-90 0 0"></a-text>`
})
