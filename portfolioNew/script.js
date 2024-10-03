// header toggle

// let MenuBtn = document.getElementById('MenuBtn')
// MenuBtn.addEventListener('click',Function(e) {
//     document.querySelector('body').classList.toggle('mobile-nav-active');
//     this.classList.toggle('fa-xmark')
// })

// Get the menu button element
let menuBtn = document.getElementById('MenuBtn');

// Add click event listener to the menu button
menuBtn.addEventListener('click', function() {
    // Toggle 'mobile-nav-active' class on the body
    document.querySelector('body').classList.toggle('mobile-nav-active');

    // Toggle 'fa-xmark' class on the menu button to indicate the menu state
    this.classList.toggle('fa-xmark');
});
