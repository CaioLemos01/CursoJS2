const elements = [
    {tag: 'p', text: 'Phrase 1'},
    {tag: 'div', text: 'Phrase 2'},
    {tag: 'section', text: 'Phrase 3'},
    {tag: 'footer', text: 'Phrase 4'}
];

const display = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i ++) {
    let {tag, text} = elements[i];
    let newTag = document.createElement(tag);
    let createdText = document.createTextNode(text);
    newTag.appendChild(createdText);
    div.appendChild(newTag);
}

display.appendChild(div);