let emptyElement = document.querySelector('.empty')
let figureElements = document.querySelectorAll('figure');


window.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
    emptyElement.style.flexBasis = event.clientX + 'px';
}