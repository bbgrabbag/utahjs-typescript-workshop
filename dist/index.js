var Messages;
(function (Messages) {
    Messages["Welcome"] = "Welcome To UtahJS!";
    Messages["Goodbye"] = "Thanks for Coming!";
})(Messages || (Messages = {}));
var body = document.querySelector('body');
var createPixel = function (x, y) {
    var pixel = document.createElement('div');
    pixel.style.backgroundColor = 'black';
    pixel.style.height = '3px';
    pixel.style.width = '3px';
    pixel.style.position = 'absolute';
    pixel.style.left = x;
    pixel.style.top = y;
    return pixel;
};
var appendPixel = function (px) {
    body.appendChild(px);
};
var dragging = false;
var handleMouseMove = function (e) {
    e.preventDefault();
    if (dragging) {
        appendPixel(createPixel(e.clientX + 'px', e.clientY + 'px'));
    }
};
var handleMouseDown = function (e) {
    dragging = true;
};
var handleMouseUp = function (e) {
    dragging = false;
};
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);
var createWelcomeMessage = function (message) {
    var header = document.createElement('h3');
    header.innerText = message;
    header.style.opacity = '.5';
    header.style.color = 'maroon';
    header.style.position = 'absolute';
    header.style.fontSize = '10rem';
    header.style.textAlign = 'center';
    return header;
};
body.appendChild(createWelcomeMessage(Messages.Welcome));
//# sourceMappingURL=index.js.map