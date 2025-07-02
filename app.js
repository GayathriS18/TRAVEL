// Function to handle clockwise rotation of images on hover
const placeImages = document.querySelectorAll('.place-img');

placeImages.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.style.transition = 'transform 1s ease';
        img.style.transform = 'rotate(360deg)';
    });

    img.addEventListener('mouseout', () => {
        img.style.transition = 'transform 1s ease';
        img.style.transform = 'rotate(0deg)';
    });
});

// Function to handle smooth scroll for "View More" buttons
const viewMoreButtons = document.querySelectorAll('.view-more');

viewMoreButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const destination = button.getAttribute('onclick').match(/'(.*)'/)[1]; // Get the URL from the onclick attribute

        // Scroll to the top of the page for a smooth transition to the detailed page
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        // After smooth scroll, redirect to the detailed page after 1 second (you can adjust timing)
        setTimeout(() => {
            window.location.href = destination;
        }, 1000);
    });
});
