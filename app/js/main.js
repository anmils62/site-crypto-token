document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('burger').addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('menu-active')
    });
});