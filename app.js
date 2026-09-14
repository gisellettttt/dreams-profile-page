const toggleBtn = document.getElementById('dayNightToggle');
const main = document.querySelector('.main');
const greeting = document.getElementById('greeting');
const toggleIcon = document.getElementById('toggleIcon');

toggleBtn.addEventListener('click', () => {
    const isNight = main.classList.toggle('night');
    toggleBtn.classList.toggle('night', isNight);
    toggleBtn.setAttribute('aria-pressed', String(isNight));
    greeting.innerHTML = isNight ? 'Good <br> Night...' : 'Good <br> Morning...';
    toggleIcon.src = isNight ? './images/ridupfr.png' : './images/ekjgbtvs.png';
});

const menuBtns = document.querySelectorAll('.menu-btn');

menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.menu-item');
        const isOpen = btn.getAttribute('aria-expanded') === 'true';

        document.querySelectorAll('.menu-item').forEach(i => {
            i.classList.remove('open');
            i.querySelector('.menu-btn').setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
            item.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});