let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
}



// PASSWORD VISIBILITY
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password_input");
    var passwordToggle = document.querySelector(".password-toggle");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.innerHTML = '<i class="fa-sharp fa-regular fa-eye text-blue-500"></i>';
    } else {
        passwordInput.type = "password";
        passwordToggle.innerHTML = '<i class="fa-sharp fa-regular fa-eye-slash"></i>';
    }
}

function togglePasswordRepeatVisibility() {
    var passwordRepeatInput = document.getElementById("password_repeat_input");
    var passwordRepeatToggle = document.querySelector(".password-repeat-toggle");

    if (passwordRepeatInput.type === "password") {
        passwordRepeatInput.type = "text";
        passwordRepeatToggle.innerHTML = '<i class="fa-sharp fa-regular fa-eye text-blue-500"></i>';
    } else {
        passwordRepeatInput.type = "password";
        passwordRepeatToggle.innerHTML = '<i class="fa-sharp fa-regular fa-eye-slash"></i>';
    }
}

function validateAccount(event) {
    event.preventDefault();

    // get the values of all inputs in form account
    const email = document.getElementById('email_input');
    const password = document.getElementById('password_input');
    var passwordAlert = document.querySelector(".password-alert");
    const emailValue = email.value
    const passValue = password.value


    if (emailValue == 'aldi@gmail.com') {
        if (passValue == 'password123') {
            window.location.href = "/index.html"
        } else {
            password.classList.add('border-red-500')
            passwordAlert.innerHTML = '<p class="text-red-600 mt-1 ml-3 bg-red-200 px-5 py-1 rounded-lg">Password Salah</p>';
        }
    } else {
        email.classList.add('border-red-500')
        passwordAlert.innerHTML = '<p class="text-red-600 mt-1 ml-3 bg-red-200 px-5 py-1 rounded-lg">Email atau Password Salah</p>';
    }
}

// TAB PROFILE
function openTabs(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block", "";
    evt.currentTarget.className += "active", "";

}

window.addEventListener("load", function () {
    var defaultTabs = document.getElementsByClassName("defaultTab");
    for (var i = 0; i < defaultTabs.length; i++) {
        defaultTabs[i].click();
    }
});

// nav
const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});