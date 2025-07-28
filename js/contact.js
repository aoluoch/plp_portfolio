// ===== CONTACT PAGE FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const formGroups = document.querySelectorAll('.form-group');
    
    // Form validation
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset previous validation states
        clearValidationStates();
        
        // Validate form
        const isValid = validateForm();
        
        if (isValid) {
            submitForm();
        }
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Clear error state on input
            const formGroup = this.closest('.form-group');
            formGroup.classList.remove('error');
            removeErrorMessage(formGroup);
        });
    });
    
    function validateForm() {
        let isValid = true;
        
        // Validate required fields
        const requiredFields = contactForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    function validateField(field) {
        const formGroup = field.closest('.form-group');
        const value = field.value.trim();
        let isValid = true;
        
        // Clear previous states
        formGroup.classList.remove('error', 'success');
        removeErrorMessage(formGroup);
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            showFieldError(formGroup, 'This field is required');
            isValid = false;
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(formGroup, 'Please enter a valid email address');
                isValid = false;
            }
        }
        
        // Message length validation
        if (field.name === 'message' && value && value.length < 10) {
            showFieldError(formGroup, 'Message must be at least 10 characters long');
            isValid = false;
        }
        
        // Show success state for valid fields
        if (isValid && value) {
            formGroup.classList.add('success');
        }
        
        return isValid;
    }
    
    function showFieldError(formGroup, message) {
        formGroup.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        formGroup.appendChild(errorElement);
    }
    
    function removeErrorMessage(formGroup) {
        const errorMessage = formGroup.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
    
    function clearValidationStates() {
        formGroups.forEach(group => {
            group.classList.remove('error', 'success');
            removeErrorMessage(group);
        });
    }
    
    function submitForm() {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        // Show loading state
        btnText.classList.add('hidden');
        btnLoading.classList.remove('hidden');
        btnLoading.classList.add('spinning');
        submitBtn.disabled = true;
        
        // Collect form data
        const formData = new FormData(contactForm);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            console.log('Form submitted:', data);
            
            // Reset loading state
            btnText.classList.remove('hidden');
            btnLoading.classList.add('hidden');
            btnLoading.classList.remove('spinning');
            submitBtn.disabled = false;
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
            clearValidationStates();
            
        }, 2000);
    }
    
    function showSuccessMessage() {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.form-message');
        existingMessages.forEach(msg => msg.remove());
        
        // Create success message
        const messageDiv = document.createElement('div');
        messageDiv.className = 'form-message success';
        messageDiv.innerHTML = `
            <h4>Message Sent Successfully! 🎉</h4>
            <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
        `;
        
        // Style the message
        messageDiv.style.cssText = `
            padding: 1.5rem;
            margin: 1.5rem 0;
            border-radius: 0.5rem;
            background-color: #d1fae5;
            color: #065f46;
            border: 1px solid #a7f3d0;
            text-align: center;
        `;
        
        // Insert message after the form
        contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);
        
        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Remove message after 8 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 8000);
    }
    
    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Social links tracking
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const platform = this.classList[1]; // Get the platform class
            console.log(`Social link clicked: ${platform}`);
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Contact info item animations
    const contactInfoItems = document.querySelectorAll('.contact-info-item');
    
    const contactObserver = new IntersectionObserver(function(entries) {
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
    
    // Set initial state and observe contact items
    contactInfoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        contactObserver.observe(item);
    });
    
    // Copy contact info to clipboard
    const contactLinks = document.querySelectorAll('.contact-link[href^="mailto:"], .contact-link[href^="tel:"]');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                
                const text = this.href.replace('mailto:', '').replace('tel:', '');
                
                navigator.clipboard.writeText(text).then(() => {
                    // Show copied message
                    const originalText = this.textContent;
                    this.textContent = 'Copied!';
                    this.style.color = 'var(--secondary-color)';
                    
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.color = '';
                    }, 2000);
                }).catch(() => {
                    console.log('Failed to copy to clipboard');
                });
            }
        });
    });
    
    // Form field focus effects
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            const formGroup = this.closest('.form-group');
            formGroup.style.transform = 'translateY(-2px)';
            formGroup.style.boxShadow = 'var(--shadow-light)';
        });
        
        input.addEventListener('blur', function() {
            const formGroup = this.closest('.form-group');
            formGroup.style.transform = '';
            formGroup.style.boxShadow = '';
        });
    });
    
    // Character counter for message field
    const messageField = document.getElementById('message');
    if (messageField) {
        const maxLength = 1000;
        
        // Create character counter
        const counter = document.createElement('div');
        counter.className = 'character-counter';
        counter.style.cssText = `
            font-size: 0.875rem;
            color: var(--text-light);
            text-align: right;
            margin-top: 0.25rem;
        `;
        
        messageField.parentNode.appendChild(counter);
        
        function updateCounter() {
            const length = messageField.value.length;
            counter.textContent = `${length}/${maxLength}`;
            
            if (length > maxLength * 0.9) {
                counter.style.color = 'var(--accent-color)';
            } else {
                counter.style.color = 'var(--text-light)';
            }
        }
        
        messageField.addEventListener('input', updateCounter);
        updateCounter(); // Initial count
    }
    
    // Add keyboard navigation for FAQ
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowDown' && index < faqItems.length - 1) {
                faqItems[index + 1].querySelector('.faq-question').focus();
            } else if (e.key === 'ArrowUp' && index > 0) {
                faqItems[index - 1].querySelector('.faq-question').focus();
            }
        });
    });
});
