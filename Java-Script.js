function dropdownFunction() {
    document.getElementById("portfolio-item-dropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.portfolios-button')) {
        var dropdowns = document.getElementsByClassName("portfolio-items");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}