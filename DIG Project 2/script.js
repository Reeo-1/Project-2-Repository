let items = document.querySelectorAll(".menu li");
let description = document.getElementById("description");

let button = document.getElementById("selectBtn");
let title = document.getElementById("title");

items.forEach(function(item) {

    item.addEventListener("mouseenter", function() {

        items.forEach(function(menuItem) {
            menuItem.classList.remove("active");
        });

        item.classList.add("active");

        description.textContent = item.dataset.info;

    });

});

button.addEventListener("click", function() {

    title.style.fontSize = "60px";

});