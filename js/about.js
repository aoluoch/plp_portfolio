// ===== ABOUT PAGE FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const targetWidth = skillBar.getAttribute('data-width');
                
                // Set the target width as a CSS custom property
                skillBar.style.setProperty('--target-width', targetWidth);
                
                // Animate the skill bar
                setTimeout(() => {
                    skillBar.style.width = targetWidth;
                }, 200);
                
                // Stop observing this element
                skillObserver.unobserve(skillBar);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all skill bars
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
    
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Set initial state and observe timeline items
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        timelineObserver.observe(item);
    });
    
    // Animate profile card stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElement = entry.target;
                const finalValue = statElement.textContent;
                
                // Extract number from text (e.g., "5+" -> 5)
                const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                const suffix = finalValue.replace(/\d/g, '');
                
                // Animate counter
                animateCounter(statElement, 0, numericValue, suffix, 1000);
                
                // Stop observing this element
                statsObserver.unobserve(statElement);
            }
        });
    }, {
        threshold: 0.5
    });
    
    // Observe stat numbers
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // Counter animation function
    function animateCounter(element, start, end, suffix, duration) {
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(start + (end - start) * easeOutQuart);
            
            element.textContent = currentValue + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = end + suffix;
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
    
    // Add hover effects to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--shadow-large)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-light)';
        });
    });
    
    // Add click effect to timeline items
    const timelineContents = document.querySelectorAll('.timeline-content');
    
    timelineContents.forEach(content => {
        content.addEventListener('click', function() {
            // Remove active class from all timeline items
            timelineContents.forEach(item => item.classList.remove('timeline-active'));
            
            // Add active class to clicked item
            this.classList.add('timeline-active');
        });
    });
    
    // Add CSS for timeline active state
    const style = document.createElement('style');
    style.textContent = `
        .timeline-active {
            background-color: var(--background-secondary) !important;
            border-left: 4px solid var(--primary-color) !important;
        }
        
        .skill-category {
            transition: all var(--transition-normal);
        }
        
        .timeline-content {
            cursor: pointer;
            transition: all var(--transition-normal);
        }
        
        .timeline-content:hover {
            background-color: var(--background-secondary);
        }
    `;
    document.head.appendChild(style);
    
    // Parallax effect for profile avatar
    const profileAvatar = document.querySelector('.profile-avatar');
    
    if (profileAvatar) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.1;
            
            profileAvatar.style.transform = `translateY(${parallax}px)`;
        });
    }
    
    // Add typing effect to hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < originalText.length) {
                heroSubtitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
});
