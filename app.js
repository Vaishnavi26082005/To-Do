let inp = document.getElementById("input");
let text = document.querySelector(".text ul");

function Add(event) {
    event.preventDefault();
    if (inp.value === '') {
        alert("Please enter a task!");
    } else {
        let newEle = document.createElement("li");
        newEle.innerHTML = `<div><input type="checkbox" class="task-checkbox"><div class="input">${inp.value}</div></div>`;

        newEle.querySelector('.task-checkbox').addEventListener('change', function() {
            newEle.querySelector('span').classList.toggle('task-completed');
        });

        text.appendChild(newEle);

        inp.value = "";
    }
}

document.querySelector('button').addEventListener('click', Add); // Attach the Add function to the button click
