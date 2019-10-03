type Dragging = boolean;
type Pixel = HTMLDivElement;
type X = string;
type Y = string;
enum Messages {
    Welcome = 'Welcome To UtahJS!',
    Goodbye = 'Thanks for Coming!',
}

const body = document.querySelector('body');

const createPixel = (x: X, y: Y): Pixel => {
    const pixel = document.createElement('div');
    pixel.style.backgroundColor = 'black';
    pixel.style.height = '3px';
    pixel.style.width = '3px';
    pixel.style.position = 'absolute';
    pixel.style.left = x;
    pixel.style.top = y;
    return pixel;
};

const appendPixel = (px: Pixel) => {
    body.appendChild(px);
};

let dragging: Dragging = false;

const handleMouseMove: EventListener = (e: MouseEvent) => {
    e.preventDefault();
    if (dragging) {
        appendPixel(createPixel(e.clientX + 'px', e.clientY + 'px'));
    }
};

const handleMouseDown: EventListener = (e: MouseEvent) => {
    dragging = true;
};

const handleMouseUp = (e: MouseEvent) => {
    dragging = false;
};

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);

const createWelcomeMessage = (message: Messages) => {
    const header = document.createElement('h3');
    header.innerText = message;
    header.style.opacity = '.5';
    header.style.color = 'maroon';
    header.style.position = 'absolute';
    header.style.fontSize = '10rem';
    header.style.textAlign = 'center';
    return header;
};

body.appendChild(createWelcomeMessage(Messages.Welcome));
