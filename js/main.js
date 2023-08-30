const icons = document.querySelectorAll(".header .links .icon");

icons.forEach(function (icon) {

    icon.onclick = function () {

        const menu = icon.nextElementSibling;

        if (menu.style.display === "block") {

            menu.style.display = "none"

        } else {

            menu.style.display = "block"
        }
    };

});
