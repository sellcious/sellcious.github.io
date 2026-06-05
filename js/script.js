document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.close-btn');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.add('active');
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileNav && !mobileNav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            mobileNav.classList.remove('active');
        }
    });
    
    // Mobile dropdown toggles
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('active');
        });
    });
});
