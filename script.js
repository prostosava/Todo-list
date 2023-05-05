const button = document.querySelector(".input-container button");
const input = document.querySelector(".input-container input");
const list = document.querySelector(".todo-list");

const arr = [];

button.addEventListener("click", () => {
    // створили рядочок
    const li = document.createElement("li");
    li.className ='todo-list-item';

    // підготував кнопку
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
    })

    
    // підготував текст
    const paragraph = document.createElement("div");
    paragraph.innerHTML = input.value;
    input.value = "";

    // використовуєм то все
    li.appendChild(paragraph);
    li.appendChild(deleteBtn);

    list.appendChild(li);

});


// Додати кнопку Дан, (світло)зеленого кольору
// коли ти на неї тиснеш то текст стає сірим і закресленим
// кнопка дан зникає
