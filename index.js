var btn = document.getElementById("button");
btn.addEventListener("click", addingTask);
var closebtn = document.getElementsByClassName("cross");

function addingTask() {
    var inputfield = document.getElementById('inputtext');
    if (inputfield.value == 0) {
        alert('You need to write something!')
    } else {
        console.log("active")
        var newli = document.createElement('li');
        var span = document.createElement('span')
        newli.className += "licss";
        newli.innerHTML = inputfield.value;
        span.innerHTML = "&times;"
        span.className += "cross";
        newli.appendChild(span);
        document.getElementById('mytasks').appendChild(newli);
        // console.log(closebtn.length)
        inputfield.value = "";

        // delete button functionality
        for (var i = 0; i < closebtn.length; i++) {
            closebtn[i].onclick = function () {
                var btncontainer = this.parentElement;
                btncontainer.style.display = "none";
            }
        }
    }
};

// toggling on task complete
document.getElementById("mytasks").addEventListener("click", function (e) {
    if (e.target && e.target.matches("li")) {
        e.target.classList.toggle("checked");
    }
});
for (var i = 0; i < closebtn.length; i++) {
    closebtn[i].onclick = function () {
        var btncontainer = this.parentElement;
        btncontainer.style.display = "none";
    }
}