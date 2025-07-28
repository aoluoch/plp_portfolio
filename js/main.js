// ===== NAVIGATION FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlighting
    function updateActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage === 'index.html' && linkHref === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    // Update active link on page load
    updateActiveNavLink();

    // Animation on scroll (for elements with fade-in classes)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Form validation (for contact forms)
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const formFields = {};
            
            // Collect form data
            for (let [key, value] of formData.entries()) {
                formFields[key] = value;
            }
            
            // Basic validation
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Email validation
            const emailFields = form.querySelectorAll('input[type="email"]');
            emailFields.forEach(field => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (field.value && !emailRegex.test(field.value)) {
                    isValid = false;
                    field.classList.add('error');
                }
            });
            
            if (isValid) {
                // Here you would typically send the form data to a server
                console.log('Form submitted:', formFields);
                
                // Show success message
                showMessage('Thank you! Your message has been sent.', 'success');
                form.reset();
            } else {
                showMessage('Please fill in all required fields correctly.', 'error');
            }
        });
    });

    // Show message function
    function showMessage(message, type) {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.form-message');
        existingMessages.forEach(msg => msg.remove());
        
        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        // Style the message
        messageDiv.style.cssText = `
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 0.5rem;
            font-weight: 500;
            ${type === 'success' ? 
                'background-color: #d1fae5; color: #065f46; border: 1px solid #a7f3d0;' : 
                'background-color: #fee2e2; color: #991b1b; border: 1px solid #fca5a5;'
            }
        `;
        
        // Insert message after the form
        const form = document.querySelector('form');
        if (form) {
            form.parentNode.insertBefore(messageDiv, form.nextSibling);
            
            // Remove message after 5 seconds
            setTimeout(() => {
                messageDiv.remove();
            }, 5000);
        }
    }

    // Add error styles for form validation
    const style = document.createElement('style');
    style.textContent = `
        .error {
            border-color: #ef4444 !important;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
        }
    `;
    document.head.appendChild(style);

    // ===== MOBILE ENHANCEMENTS =====

    // Detect touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
        document.body.classList.add('touch-device');

        // Add touch-specific styles
        const touchStyle = document.createElement('style');
        touchStyle.textContent = `
            .touch-device .btn:hover {
                transform: none;
            }

            .touch-device .btn:active {
                transform: scale(0.98);
                transition: transform 0.1s ease;
            }

            .touch-device .card:hover {
                transform: none;
                box-shadow: var(--shadow-light);
            }

            .touch-device .card:active {
                transform: scale(0.98);
                transition: transform 0.1s ease;
            }
        `;
        document.head.appendChild(touchStyle);
    }

    // Improve scroll performance on mobile
    let ticking = false;

    function updateScrollPosition() {
        // Throttle scroll events for better performance
        if (!ticking) {
            requestAnimationFrame(() => {
                // Navbar scroll effect (already implemented above)
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', updateScrollPosition, { passive: true });

    // Prevent double-tap zoom on buttons
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Add swipe gesture support for mobile navigation
    let touchStartX = 0;
    let touchEndX = 0;

    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0 && navMenu.classList.contains('active')) {
                // Swipe right - close menu
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            } else if (swipeDistance < 0 && !navMenu.classList.contains('active')) {
                // Swipe left - open menu (optional)
                // navToggle.classList.add('active');
                // navMenu.classList.add('active');
            }
        }
    }

    if (navMenu) {
        navMenu.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        navMenu.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }

    // Optimize images for different screen sizes
    function optimizeImages() {
        const images = document.querySelectorAll('img[data-src]');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            });
        }
    }

    optimizeImages();

    // Add viewport meta tag if missing (for better mobile experience)
    if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
        document.head.appendChild(viewport);
    }

    // Improve focus management for keyboard navigation
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }

            if (e.key === 'Escape') {
                // Close mobile menu on escape
                if (navMenu && navMenu.classList.contains('active')) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    navToggle.focus();
                }
            }
        });
    }

    // Apply focus trap to mobile navigation
    if (navMenu) {
        trapFocus(navMenu);
    }
});
