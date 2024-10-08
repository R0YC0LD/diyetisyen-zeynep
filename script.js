document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    
    const options = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Mesajınız gönderildi!");
        this.reset(); // Formu sıfırla
    });
});

