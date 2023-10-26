function openNav() {
    var nav = document.getElementsByTagName("nav")[0];
    var ul = nav.getElementsByTagName("ul")[0];
    
    if (ul.classList.contains("hidden")) {
        ul.classList.remove("hidden");
    } else if (!ul.classList.contains("hidden")) {
        ul.classList.add("hidden")
    }

}