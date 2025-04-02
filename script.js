function handlePage(page) {
    const home = document.getElementById("home");
    const about = document.getElementById("about")
    const contact = document.getElementById("contact")

    if (page == "about") {
        home.style.display = "none"
        about.style.display = "block"
        contact.style.display = "none"
    }

    if(page == "contact") {
        home.style.display = "none"
        about.style.display = "none"
        contact.style.display = "block"
    }

    if(page == "home") {
        home.style.display = "block"
        about.style.display = "none"
        contact.style.display = "none"
    }
}