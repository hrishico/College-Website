// Mobile sidebar toggle
document.getElementById('sidebarToggle').addEventListener('click', function() {
    const sidebar = document.getElementById('eventList');
    sidebar.classList.toggle('collapsed');
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Event parent items toggle
document.querySelectorAll('.event-parent').forEach(item => {
    item.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.toggle('active');
            const miniEvents = this.querySelector('.mini-events');
            miniEvents.style.display = this.classList.contains('active') ? 'block' : 'none';
        }
    });
});

// Event category selection
document.getElementById('eventCategory').addEventListener('change', function() {
    const specificEvent = document.getElementById('specificEvent');
    specificEvent.disabled = false;
    specificEvent.innerHTML = '<option value="" selected disabled>Select event...</option>';
    
    // Simulate events based on category
    if (this.value === 'technical') {
        const events = ['Hackathon', 'Coding Challenge', 'Robo Wars', 'Tech Quiz'];
        events.forEach(event => {
            const option = document.createElement('option');
            option.value = event.toLowerCase().replace(' ', '-');
            option.textContent = event;
            specificEvent.appendChild(option);
        });
    } else if (this.value === 'cultural') {
        const events = ['Dance Competition', 'Singing Contest', 'Drama', 'Art Exhibition'];
        events.forEach(event => {
            const option = document.createElement('option');
            option.value = event.toLowerCase().replace(' ', '-');
            option.textContent = event;
            specificEvent.appendChild(option);
        });
    } else if (this.value === 'sports') {
        const events = ['Football', 'Cricket', 'Chess', 'Volleyball'];
        events.forEach(event => {
            const option = document.createElement('option');
            option.value = event.toLowerCase().replace(' ', '-');
            option.textContent = event;
            specificEvent.appendChild(option);
        });
    }
});

// Form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration successful! We will contact you with further details.');
    this.reset();
    document.getElementById('specificEvent').disabled = true;
    document.getElementById('cardDetails').style.display = 'none';
});

// Initialize sidebar for mobile
function initMobileSidebar() {
    const sidebar = document.getElementById('eventList');
    if (window.innerWidth <= 992) {
        sidebar.classList.add('collapsed');
        document.querySelectorAll('.mini-events').forEach(el => {
            el.style.display = 'none';
        });
    } else {
        sidebar.classList.remove('collapsed');
        document.querySelectorAll('.mini-events').forEach(el => {
            el.style.display = 'block';
        });
    }
}

// Run on load and resize
window.addEventListener('load', initMobileSidebar);
window.addEventListener('resize', initMobileSidebar);