function moveDown(margTop) {
    if (margTop == "") {
        margTop = "80px";
    }
    let marginT = margTop;
    let findInd = margTop.search("px");
    let marginAmount = parseInt(marginT.substring(0, findInd));
    marginAmount += 2;
    document.getElementsByClassName("car")[0].style.marginTop = marginAmount + "px";
    console.log(document.getElementsByClassName("car")[0].style.marginTop);
}
function moveUp(margTop) {
    if (margTop == "") {
        margTop = "80px";
    }
    let marginT = margTop;
    let findInd = margTop.search("px");
    let marginAmount = parseInt(marginT.substring(0, findInd));
    marginAmount -= 2;
    document.getElementsByClassName("car")[0].style.marginTop = marginAmount + "px";
    console.log(document.getElementsByClassName("car")[0].style.marginTop);
}

function moveBack(margHori) {
    if (margHori == "") {
        margHori = "200px";
    }
    let marginH = margHori;
    let findInd = margHori.search("px");
    let marginAmount = parseInt(marginH.substring(0, findInd));
    marginAmount -= 2;
    document.getElementsByClassName("car")[0].style.marginLeft = marginAmount + "px";
    console.log(document.getElementsByClassName("car")[0].style.marginLeft);
}
function moveFront(margHori) {
    if (margHori == "") {
        margHori = "200px";
    }
    let marginH = margHori;
    let findInd = margHori.search("px");
    let marginAmount = parseInt(marginH.substring(0, findInd));
    marginAmount += 2;
    document.getElementsByClassName("car")[0].style.marginLeft = marginAmount + "px";
    console.log(document.getElementsByClassName("car")[0].style.marginLeft);
}

let speedH = 40;
function speedRight() {
    let lineAnim = document.getElementsByClassName("lines")[0];
    let speed = setTimeout(() => {
        if (speedH < 25) {
            clearInterval(speed);
        }
        speedH -= 7;
        lineAnim.style.animationDuration = speedH + "s";
        console.log(lineAnim.style.animationDuration);
    }, 71);
}
function speedLeft() {
    let lineAnim = document.getElementsByClassName("lines")[0];
    let speed = setTimeout(() => {
        if (speedH > 50) {
            clearInterval(speed);
        }
        speedH += 4;
        lineAnim.style.animationDuration = speedH + "s";
        console.log(lineAnim.style.animationDuration);
    }, 71);
}

// let marginSpeed = 0;
// function speedRight(margHori) {
//     if (margHori == "") {
//         margHori = "200px";
//     }
//     let marginH = margHori;
//     let findInd = margHori.search("px");
//     let marginAmount = parseInt(marginH.substring(0, findInd));
//     marginSpeed = marginAmount
//     setInterval(() => {
//         if (marginSpeed < 500) {
//             marginSpeed += 1.2;
//         }
//         if(marginSpeed>=500) {
//             clearInterval();
//         }
//         document.getElementsByClassName("car")[0].style.marginLeft = marginSpeed + "px";
//         console.log(document.getElementsByClassName("car")[0].style.marginLeft);
//     }, 50)
// }
// function speedLeft(margHori) {
//     if (margHori == "") {
//         margHori = "200px";
//     }
//     let marginH = margHori;
//     let findInd = margHori.search("px");
//     let marginAmount = parseInt(marginH.substring(0, findInd));
//     marginSpeed = marginAmount
//     setInterval(() => {
//         if (marginSpeed < 500) {
//             marginSpeed -= 0.8;
//         }
//         if(marginSpeed>=500) {
//             clearInterval();
//         }
//         document.getElementsByClassName("car")[0].style.marginLeft = marginSpeed + "px";
//         console.log(document.getElementsByClassName("car")[0].style.marginLeft);
//     }, 500)
// }
// let marginSpeedN = 0;
// function speedDown(margTop) {
//     if (margTop == "") {
//         margTop = "80px";
//     }
//     let marginT = margTop;
//     let findInd = margTop.search("px");
//     let marginAmount = parseInt(marginT.substring(0, findInd));
//     marginSpeedN = marginAmount
//     setInterval(() => {
//         marginSpeedN += 1;
//         document.getElementsByClassName("car")[0].style.marginTop = marginSpeedN + "px";
//         console.log(document.getElementsByClassName("car")[0].style.marginTop);
//     }, 170)
// }
// function speedUp(margTop) {
//     if (margTop == "") {
//         margTop = "80px";
//     }
//     let marginT = margTop;
//     let findInd = margTop.search("px");
//     let marginAmount = parseInt(marginT.substring(0, findInd));
//     marginSpeedN = marginAmount
//     setInterval(() => {
//         marginSpeedN -= 1;
//         document.getElementsByClassName("car")[0].style.marginTop = marginSpeedN + "px";
//         console.log(document.getElementsByClassName("car")[0].style.marginTop);
//     }, 170)
// }