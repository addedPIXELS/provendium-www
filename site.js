/*
 * Provendium: the small interactive parts of the pages.
 * Everything here is progressive enhancement. The diary, the role panels
 * and the invitation are plain HTML and read fine without it; nav.js
 * removes the "no-js" class that keeps them all visible.
 */
(function () {
    var doc = document;

    // Diary filter pills: narrow the illustrative diary by type.
    doc.querySelectorAll('[data-diary-scope]').forEach(function (scope) {
        var count = scope.querySelector('[data-diary-count]');
        scope.addEventListener('click', function (e) {
            var btn = e.target.closest('[data-diary-filter]');
            if (!btn) return;
            var f = btn.getAttribute('data-diary-filter');
            scope.querySelectorAll('[data-diary-filter]').forEach(function (b) {
                b.setAttribute('aria-pressed', String(b === btn));
            });
            scope.querySelectorAll('[data-kind]').forEach(function (n) {
                n.hidden = !(f === 'all' || n.getAttribute('data-kind') === f);
            });
            if (count) {
                var all = scope.querySelectorAll('.cal-list li');
                var shown = scope.querySelectorAll('.cal-list li:not([hidden])');
                count.textContent = 'Showing ' + shown.length + ' of ' + all.length + ' meetings';
            }
        });
    });

    // Role tabs, with arrow-key movement between them.
    var tabs = Array.prototype.slice.call(doc.querySelectorAll('[role="tab"]'));
    function select(tab, focus) {
        tabs.forEach(function (t) {
            var on = t === tab;
            t.setAttribute('aria-selected', String(on));
            t.tabIndex = on ? 0 : -1;
            doc.getElementById(t.getAttribute('aria-controls')).hidden = !on;
        });
        if (focus) tab.focus();
    }
    tabs.forEach(function (tab, i) {
        tab.addEventListener('click', function () { select(tab, false); });
        tab.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
            if (e.key === 'ArrowLeft') select(tabs[(i + tabs.length - 1) % tabs.length], true);
        });
    });

    // The member's one-click reply (illustrative; nothing is sent anywhere).
    var invite = doc.getElementById('invite');
    var state = doc.getElementById('reply-state');
    if (invite && state) {
        var answers = { attend: null, dine: null };
        invite.addEventListener('click', function (e) {
            var btn = e.target.closest('[data-q]');
            if (!btn) return;
            var q = btn.getAttribute('data-q'), a = btn.getAttribute('data-a');
            answers[q] = answers[q] === a ? null : a;
            if (q === 'attend' && answers.attend === 'no') answers.dine = 'no';
            if (q === 'dine' && answers.dine === 'yes') answers.attend = 'yes';
            invite.querySelectorAll('[data-q]').forEach(function (b) {
                b.setAttribute('aria-pressed', String(answers[b.getAttribute('data-q')] === b.getAttribute('data-a')));
            });
            state.textContent = answers.attend === 'yes'
                ? (answers.dine === 'yes' ? 'Reply saved: attending and dining. The DC team now has 47 attending and 42 dining.'
                    : 'Reply saved: attending' + (answers.dine === 'no' ? ', not dining' : '') + '. The DC team now has 47 attending.')
                : answers.attend === 'no' ? 'Reply saved: apologies sent to the Secretary.' : 'Illustrative. Try answering it.';
        });
    }
})();
