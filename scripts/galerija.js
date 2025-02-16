document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll('.lazy-load');

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.add('loaded');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback za stare preglednike
        lazyImages.forEach(function(image) {
            image.src = image.dataset.src;
            image.classList.add('loaded');
        });
    }
});