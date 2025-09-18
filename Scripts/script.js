// Hamburger menu toggle
// Navbar functionality for mobile view

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close menu when link is clicked (mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
});





// Projects carousel functionality
// Sample project data
const projects = [
    {
        title: "Loan Meter",
        desc: "AI-driven loan approval system with 84% accuracy.",
        img: "images/project 1.jpg",
        url: "https://your-loan-meter-link.com"
    },
    {
        title: "FAA Bird Strike Analytics",
        desc: "Dashboard for analyzing 100K+ bird strike records.",
        img: "images/project 2.jpg",
        url: "https://your-faa-bird-strike-link.com"
    },
    {
        title: "Amazon Sales Performance",
        desc: "Advanced analytics on 5 years of Amazon sales data.",
        img: "images/project 3.jpeg",
        url: "https://your-amazon-sales-link.com"
    },
    // Add more projects here as needed
];


let currentStart = 0; // Tracks the current starting index
const visibleCount = 3; // Number of visible projects
const autoRotateInterval = 7000; // Auto-rotate every 7 seconds
let autoRotateTimer; // Timer for auto-rotation

function renderProjects() {
    const imagesContainer = document.getElementById('images-container');
    const detailsContainer = document.getElementById('details-container');
    imagesContainer.innerHTML = '';
    detailsContainer.innerHTML = '';

    for (let i = 0; i < visibleCount; i++) {
        const projIdx = (currentStart + i) % projects.length;
        const project = projects[projIdx];

        // Render images
        const imageCard = document.createElement('div');
        imageCard.className = 'project-card';
        if (i === 1) imageCard.classList.add('middle'); // Add 'middle' class to the center project
        imageCard.innerHTML = `<img src="${project.img}" alt="${project.title}" class="${i === 1 ? 'middle' : ''}" />`;

        // Add event listeners to the middle image
        if (i === 1) {
            const middleImage = imageCard.querySelector('img.middle');
            middleImage.addEventListener('mouseover', () => clearInterval(autoRotateTimer)); // Stop rotation on hover
            middleImage.addEventListener('mouseout', () => startAutoRotate()); // Resume rotation on mouse out
        }

        imageCard.addEventListener('click', () => {
            if (i === 0) {
                currentStart = (currentStart - 1 + projects.length) % projects.length;
            } else if (i === 2) {
                currentStart = (currentStart + 1) % projects.length;
            }
            renderProjects();
        });
        imagesContainer.appendChild(imageCard);

        // Render details for the middle project
        if (i === 1) {
            const detailCard = document.createElement('div');
            detailCard.className = 'project-details';
            detailCard.innerHTML = `
                <div class="project-title">${project.title}</div>
                <div class="project-desc">${project.desc}</div>
                <a class="view-project-btn" href="${project.url}" target="_blank" rel="noopener">VIEW PROJECT</a>
            `;
            detailsContainer.appendChild(detailCard);
        }
    }
}

// Select the left and right arrow buttons
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// Add event listeners for the arrow buttons
leftArrow.addEventListener('click', () => {
    currentStart = (currentStart - 1 + projects.length) % projects.length; // Move to the previous project
    renderProjects(); // Re-render the carousel
});

rightArrow.addEventListener('click', () => {
    currentStart = (currentStart + 1) % projects.length; // Move to the next project
    renderProjects(); // Re-render the carousel
});

// Auto-rotate functionality
function autoRotate() {
    currentStart = (currentStart + 1) % projects.length; // Move to the next project
    renderProjects();
}

// Start auto-rotation
function startAutoRotate() {
    autoRotateTimer = setInterval(autoRotate, autoRotateInterval);
}

// Initial render and start auto-rotation
if (document.getElementById('images-container')) {
    renderProjects();
    startAutoRotate();
}