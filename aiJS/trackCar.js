var objImage = null;
function init() {
    objImage = document.getElementById("car");
    objImage.style.position = "relative";
    objImage.style.left = "0px";
    objImage.style.top = "0px";
}
function getKeyAndMove(e) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;
    }
}
function moveLeft() {
    objImage.style.left = parseInt(objImage.style.left) - 5 + "px";
}
function moveUp() {
    let searchdeg = objImage.style.top.search("px");
    let degFrompx = objImage.style.top.substring(0, searchdeg);
    let coordUp = parseInt(degFrompx) - 5 + "deg";
    objImage.style.transform = `rotate(${coordUp})`;
    let searchcoord = coordUp.search("deg");
    let pxFromdeg = coordUp.substring(0, searchcoord);
    objImage.style.top = pxFromdeg + "px";
}
function moveRight() {
    objImage.style.left = parseInt(objImage.style.left) + 5 + "px";
}
function moveDown() {
    let searchdeg = objImage.style.top.search("px");
    let degFrompx = objImage.style.top.substring(0, searchdeg);
    let coordDown = parseInt(degFrompx) + 5 + "deg";
    objImage.style.transform = `rotate(${coordDown})`;
    let searchcoord = coordDown.search("deg");
    let pxFromdeg = coordDown.substring(0, searchcoord);
    objImage.style.top = pxFromdeg + "px";
}
window.onload = init;