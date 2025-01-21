document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Aakriti's portfolio!");
});
// Display a welcome popup when the webpage is loaded
document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to Aakriti's portfolio! I hope you enjoy exploring my projects.");
});
// for projects

// Intersection Observer for Scroll Animations
const elements = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
    threshold: 0.5  // When 50% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);  // Stop observing once animated
        }
    });
}, observerOptions);

elements.forEach(element => {
    observer.observe(element);  // Start observing each element
});

// for skills
// Select all skill items
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach((item) => {
    // Extract data from the attributes
    const skillName = item.getAttribute('data-skill');
    const skillProgress = item.getAttribute('data-progress');
    const skillColor = item.getAttribute('data-color');

    // Create a label
    const skillLabel = document.createElement('div');
    skillLabel.classList.add('skill-label');
    skillLabel.innerHTML = `<span>${skillName}</span><span>${skillProgress}%</span>`;

    // Create the progress bar container
    const progressBar = document.createElement('div');
    progressBar.classList.add('skill-bar');

    // Create the progress indicator
    const progressIndicator = document.createElement('div');
    progressIndicator.classList.add('skill-progress');
    progressIndicator.style.width = '0%'; // Start at 0%
    progressIndicator.style.backgroundColor = skillColor;

    // Append elements
    progressBar.appendChild(progressIndicator);
    item.appendChild(skillLabel);
    item.appendChild(progressBar);

    // Animate the progress
    setTimeout(() => {
        progressIndicator.style.width = `${skillProgress}%`;
    }, 300);
});


