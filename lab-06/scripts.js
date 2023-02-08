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
  if(text.value) {          //check there is actually data
    addItem(text.value);   
    text.value = null;      //clear the input
    text.focus();           //give it the focus
  }
});

text.addEventListener('keydown', ev => {
  if(ev.key == "Enter") {
    add.click();
  }
});

function clearList() {
  while(todo.firstChild) {
    todo.removeChild(todo.firstChild);
  }
}

clear.addEventListener('click', ev => {
  clearList();
});

function saveToStorage() {
	const elements = Array.from(todo.querySelectorAll('li'));
	const data = elements.map(el => {
		 return {
       text: el.querySelector('label').textContent,
			 done: el.querySelector('input').checked
		 }
	});
	localStorage.setItem(todo.id, JSON.stringify(data));
}

function loadFromStorage() {
	clearList();
	const data = JSON.parse(localStorage.getItem(todo.id));
	for (const item of data) {
		addItem(item.text, item.done);
	}
}

loadFromStorage();
