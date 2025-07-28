// ===== PROJECTS PAGE FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add transition styles for filtering
    projectCards.forEach(card => {
        card.style.transition = 'all 0.3s ease-in-out';
    });
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            filterProjects(filter);
        });
    });
    
    function filterProjects(filter) {
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                // Show card
                card.classList.remove('hidden');
                card.classList.add('visible');
                card.style.display = 'block';
                
                // Animate in
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1) translateY(0)';
                }, 50);
            } else {
                // Hide card
                card.classList.add('hidden');
                card.classList.remove('visible');
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8) translateY(20px)';
                
                // Hide after animation
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
        
        // Update project count
        updateProjectCount(filter);
    }
    
    function updateProjectCount(filter) {
        const visibleProjects = document.querySelectorAll(`.project-card[data-category="${filter}"], .project-card`);
        const count = filter === 'all' ? projectCards.length : 
                     document.querySelectorAll(`.project-card[data-category="${filter}"]`).length;
        
        // You can add a project counter here if needed
        console.log(`Showing ${count} projects for filter: ${filter}`);
    }
    
    // Project card hover effects
    projectCards.forEach(card => {
        const overlay = card.querySelector('.project-overlay');
        const content = card.querySelector('.project-content');
        
        card.addEventListener('mouseenter', function() {
            // Add subtle animation to tech tags
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'translateY(-2px)';
                    tag.style.boxShadow = 'var(--shadow-light)';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset tech tags
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
                tag.style.transform = 'translateY(0)';
                tag.style.boxShadow = 'none';
            });
        });
    });
    
    // Animate project cards on scroll
    const projectObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe project cards for scroll animation
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        projectObserver.observe(card);
    });
    
    // Add click handlers for project links
    const projectLinks = document.querySelectorAll('.project-links a');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const linkText = this.textContent.trim();
            const projectTitle = this.closest('.project-card').querySelector('h3').textContent;
            
            // Add ripple effect
            createRippleEffect(this, e);
            
            // Simulate link action (replace with actual URLs)
            setTimeout(() => {
                console.log(`Opening ${linkText} for ${projectTitle}`);
                // window.open(this.href, '_blank');
            }, 200);
        });
    });
    
    // Create ripple effect for buttons
    function createRippleEffect(element, event) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .project-card.loading {
            opacity: 0.5;
            pointer-events: none;
        }
        
        .filter-btn {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
    
    // Search functionality (if you want to add a search bar later)
    function searchProjects(searchTerm) {
        const term = searchTerm.toLowerCase();
        
        projectCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.project-description').textContent.toLowerCase();
            const techTags = Array.from(card.querySelectorAll('.tech-tag'))
                                 .map(tag => tag.textContent.toLowerCase());
            
            const matches = title.includes(term) || 
                           description.includes(term) || 
                           techTags.some(tag => tag.includes(term));
            
            if (matches) {
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
            }
        });
    }
    
    // Lazy loading for project images (if you add real images later)
    function lazyLoadImages() {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Initialize lazy loading
    lazyLoadImages();
    
    // Add keyboard navigation for filters
    filterButtons.forEach((button, index) => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' && index > 0) {
                filterButtons[index - 1].focus();
            } else if (e.key === 'ArrowRight' && index < filterButtons.length - 1) {
                filterButtons[index + 1].focus();
            } else if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Performance optimization: debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            // Add any scroll-based animations here
        }, 16); // ~60fps
    });
});
