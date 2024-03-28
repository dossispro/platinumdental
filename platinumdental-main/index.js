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