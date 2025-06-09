const links = document.querySelectorAll('.nav-list a');

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('ativo');
    }
});
