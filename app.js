// NAVABAR
const navbar = document.querySelector('.navbar');

    window.onscroll = () => {
        if (window.scrollY > 800) {
            navbar.classList.add('nav-active');
        } else {
            navbar.classList.remove('nav-active');
        }
    }

    function showModal() {
        document.getElementById("pageContent").style.opacity = "0.5";
    }


