const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            console.log(entry);
        }
    });
});

const righthiddenelements = document.querySelectorAll('.hidden-right');
righthiddenelements.forEach((el) => observer.observe(el));


const lefthiddenelements = document.querySelectorAll('.hidden-left');
lefthiddenelements.forEach((el) => observer.observe(el));


const actuallyhiddenelements = document.querySelectorAll('.obscure');
actuallyhiddenelements.forEach((el) => observer.observe(el));


const reallyhiddenelements = document.querySelectorAll('.obscure-card');
reallyhiddenelements.forEach((el) => observer.observe(el));


document.querySelectorAll('.toggle-text-btn').forEach(button => {
    button.addEventListener('click', function() {
        let reviewTextContainer = button.closest('.review-text-container');
        reviewTextContainer.classList.toggle('expanded');
        
        // Optionally change button text when toggled
        if (reviewTextContainer.classList.contains('expanded')) {
            button.textContent = 'Read less';
        } else {
            button.textContent = 'Read more';
        }
    });
});