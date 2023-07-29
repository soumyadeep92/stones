function moveDown(margTop) {
    if (margTop == "") {
        margTop = "86px";
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
        margTop = "86px";
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