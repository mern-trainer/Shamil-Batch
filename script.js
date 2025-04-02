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

function handleForm() {

    // const name = document.getElementById("name").value
    // const username = document.getElementById("username").value
    // const email = document.getElementById("email").value
    // const password = document.getElementById("password").value
    // const confirm_password = document.getElementById("confirm_password").value

    // or

    const name = document.signup.name.value
    const username = document.signup.username.value
    const email = document.signup.email.value
    const password = document.signup.password.value
    const confirm_password = document.signup.confirm_password.value

    if (name == "" || username == "" || email == "" || password == "" || confirm_password == "") {
        alert("Please fill all the fields")
        return false
    }
    if (name.length < 4 || name.length > 16) {
        alert("Name must be between 4 to 16 characters")
        return false
    }
    if(username.length < 4 || username.length > 16) {
        alert("Username must be between 4 to 16 characters")
        return false
    }
    if (!email.includes("@gmail.com")) {
        alert("Please enter a valid email")
        return false
    }
    if(password.length < 8 || password.length > 16) {
        alert("Password must be between 8 to 16 characters")
        return false        
    }
    if (password != confirm_password) {
        alert("Password does not match")
        return false
    }
    // logic to create account
    alert("Account created successfully")
    return false;
}