"use strict";

// function addItem(text) {
//   const item = document.createElement('li');
//   item.textContent = text;
//   todo.appendChild(item);
// }

function addItem(text, done) {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const button = document.createElement('button');
  label.textContent = text;
  button.textContent = "x";

  button.addEventListener('click', ev => {
    item.remove();
  });

  input.type = "checkbox";
  input.checked = done;
  input.id = `todo${todo.querySelectorAll('li').length + 1}`;
  label.htmlFor = input.id;
  item.appendChild(input);
  item.appendChild(label);
  item.appendChild(button);
  todo.appendChild(item);
}

add.addEventListener('click', ev => {
  addItem(text.value);
});