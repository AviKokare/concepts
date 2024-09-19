const cards = document.querySelectorAll('.card');

const intersectionObserver = new IntersectionObserver(entries => {
    entries[0].target.classList.add('showColor');

    if (!entries[0].isIntersecting) {
        entries[0].target.classList.remove('showColor');
    }
});

intersectionObserver.observe(cards[1]);