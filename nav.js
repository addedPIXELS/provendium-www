/*
 * Provendium — mobile navigation.
 * Progressive enhancement: the page ships with class="no-js" on <html>, which
 * keeps the nav links visible if this script never runs. Removing it (before
 * first paint, since this loads in <head>) switches on the hamburger behaviour.
 * Clicks are handled by delegation, so the header need not be parsed yet.
 */
(function () {
    var doc = document;
    doc.documentElement.classList.remove('no-js');

    function panelFor(btn) {
        return doc.getElementById(btn.getAttribute('aria-controls'));
    }

    doc.addEventListener('click', function (e) {
        var btn = e.target.closest && e.target.closest('.nav-toggle');
        if (!btn) return;
        var nav = panelFor(btn);
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        if (nav) nav.classList.toggle('open', !open);
    });

    doc.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        var btn = doc.querySelector('.nav-toggle[aria-expanded="true"]');
        if (!btn) return;
        var nav = panelFor(btn);
        btn.setAttribute('aria-expanded', 'false');
        if (nav) nav.classList.remove('open');
        btn.focus();
    });
})();
