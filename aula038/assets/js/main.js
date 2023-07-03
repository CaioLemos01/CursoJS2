const paragraph = document.querySelector('.container');
const text = paragraph.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);
const backgroundColor = stylesBody.backgroundColor;

for (let i of text) {
    i.style.backgroundColor = backgroundColor;
    i.style.color = '#fff';
}