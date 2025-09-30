// --- Testimonial Carousel (Customer Testimonials) ---
function startTestimonialCarousel() {
    const carousel = document.getElementById('testimonial-carousel');
    if (!carousel) return;

    // Yahan PDF ke points ke hisaab se testimonials hain
    const testimonials = [
        '“Best Channel Management service in the industry! Highly recommend.” - Artist A',
        '“My revenue tripled after joining the MCN. Excellent support.” - Creator B',
        '“Fastest music distribution, great support. True professionals.” - Label C'
    ];
    let currentIndex = 0;

    // Change testimonial every 6 seconds with a fade effect
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        carousel.style.opacity = 0; 
        
        // Wait for fade out, then change content and fade in
        setTimeout(() => {
            carousel.querySelector('.testimonial-text').textContent = testimonials[currentIndex];
            carousel.style.opacity = 1; 
        }, 500); // 0.5s fade time
    }, 6000);
}

// --- VFX-style Scroll Animation ---
function initScrollAnimations() {
    // Select elements to animate (e.g., service cards)
    const animatableElements = document.querySelectorAll('.service-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When element comes into view, apply 'animate-in' class (defined in style.css)
                entry.target.classList.add('animate-in');
            } else {
                 // For a repeated animation effect, remove the class when it leaves view
                // entry.target.classList.remove('animate-in');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of element is visible
    });

    animatableElements.forEach(element => {
        observer.observe(element);
    });
}

// Run functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startTestimonialCarousel();
    initScrollAnimations();
});
