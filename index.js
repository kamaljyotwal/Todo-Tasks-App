var btn = document.getElementById("button");

btn.addEventListener("click", addingTask);

function addingTask() {
    var inputfield = document.getElementById('inputtext');
    if (inputfield.value == 0) {
        alert('You need to write something!')
    } else {
        var newli = document.createElement('li');
        newli.innerHTML = inputfield.value;
        document.getElementById('mytasks').appendChild(newli);
        inputfield.value = "";
    }


};