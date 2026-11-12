(function () {
    var header = document.querySelector('.site-header');
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('nav');
    var toTop = document.getElementById('to-top');

    function onScroll() {
        var y = window.pageYOffset || document.documentElement.scrollTop;
        header.classList.toggle('is-scrolled', y > 10);
        toTop.classList.toggle('show', y > 700);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        nav.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                nav.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Gallery lightbox
    var links = Array.prototype.slice.call(document.querySelectorAll('.gallery a'));
    var box = document.getElementById('lightbox');
    if (box && links.length && typeof box.showModal === 'function') {
        var img = box.querySelector('img');
        var idx = 0;
        function show(i) {
            idx = (i + links.length) % links.length;
            img.src = links[idx].getAttribute('href');
            img.alt = links[idx].querySelector('img').alt || '';
        }
        links.forEach(function (a, i) {
            a.addEventListener('click', function (e) {
                e.preventDefault();
                show(i);
                box.showModal();
            });
        });
        box.querySelector('.lightbox-close').addEventListener('click', function () { box.close(); });
        box.querySelector('.prev').addEventListener('click', function () { show(idx - 1); });
        box.querySelector('.next').addEventListener('click', function () { show(idx + 1); });
        box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
        box.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') show(idx - 1);
            if (e.key === 'ArrowRight') show(idx + 1);
        });
    }
})();
