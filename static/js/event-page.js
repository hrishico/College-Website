
//Toggle Buttom
function toggleMini(el) {
    el.classList.toggle("active");
}

function showContent(key) {
    const dataDiv = document.getElementById("event-data").querySelector("#" + key);
    const content = document.getElementById("content");

    if (!dataDiv) {
    content.innerHTML = "<p>Details coming soon.</p>";
    return;
    }

    const heading = dataDiv.querySelector("h3").textContent;
    const rest = dataDiv.innerHTML.replace(/<h3.*?<\/h3>/, "");

    content.innerHTML = `<h3 id="typed-heading"></h3>${rest}`;

    const target = document.getElementById("typed-heading");
    let i = 0;
    target.style.color = "#00e5ff";

    function typeHeading() {
    if (i < heading.length) {
        target.textContent += heading.charAt(i);
        i++;
        setTimeout(typeHeading, 60);
    }
    }

    typeHeading();
}

function toggleEventList() {
    const eventList = document.getElementById('eventList');
    eventList.classList.toggle('collapsed');
}


//typewriter
const typedText = "Welcome to Kalavishkar";
const target = document.getElementById("typed-text");
let j = 0;

function typeIntro() {
    if (j < typedText.length) {
    target.textContent += typedText.charAt(j);
    j++;
    setTimeout(typeIntro, 70);
    }
}

typeIntro();

//Auto Change
const images = document.querySelectorAll('#memorySlideshow img');
let index = 0;

function showImage(i) {
images.forEach((img, idx) => {
    img.style.opacity = idx === i ? 1 : 0;
});
}

function startSlideshow() {
showImage(index);
index = (index + 1) % images.length;
}

setInterval(startSlideshow, 3000); 
window.onload = () => showImage(index);

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});
 // Back to Top Button
        window.addEventListener('scroll', function() {
            var backToTop = document.getElementById('backToTop');
            if (window.pageYOffset > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });