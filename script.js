// Smooth scrolling Funktion
function smoothScrollTo(endY, duration) {
    const startY = window.scrollY;
    const distanceY = endY - startY;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startY, distanceY, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.querySelector('#about');
    const scrollArrow = document.getElementById('scrollArrow');
    const navItems = document.querySelectorAll('.vertical-nav ul li');
    const links = document.querySelectorAll('nav a');
    const targets = document.querySelectorAll('section, #home');

    // Scroll-Pfeil
    if (scrollArrow) {
        scrollArrow.addEventListener('click', function () {
            if (aboutSection) {
                smoothScrollTo(aboutSection.offsetTop, 1000);
            }
        });
    }

    // Navigation-Links mit smooth scroll
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Verhindere Standardverhalten
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                smoothScrollTo(targetElement.offsetTop, 1000);
            }
        });
    });

    // Navigation-Klick (für vertikale Navigation)
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            const targetSelector = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetSelector);

            if (targetElement) {
                smoothScrollTo(targetElement.offsetTop, 1000);
            }
        });
    });

    // Initialisiere sichtbare Abschnitte
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (window.scrollY + window.innerHeight > section.offsetTop + 100) {
            section.classList.add('visible');
        }
    });
});

// Scroll-Events
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + window.innerHeight;
    const sections = document.querySelectorAll('section');
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const scrollArrow = document.getElementById('scrollArrow');
    const homeSection = document.querySelector('#home');
    const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;

    // Sichtbarkeit der Abschnitte
    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + 100) {
            section.classList.add('visible');
        }
    });

    // "Nach oben"-Button
    if (scrollToTopBtn) {
        scrollToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
    }

    // "Scroll-Arrow" nur im Home-Bereich sichtbar
    if (scrollArrow) {
        if (window.scrollY < 100) {
            scrollArrow.style.display = 'block'; // Einblenden in Home
        } else {
            scrollArrow.style.display = 'none'; // Ausblenden außerhalb von Home
        }
    }
});

// "Nach oben"-Button
document.getElementById("scrollToTopBtn").addEventListener("click", function () {
    smoothScrollTo(0, 1000);
});

// Navigation-Aktivität bei Scroll
window.addEventListener('scroll', function () {
    const navItems = document.querySelectorAll('.vertical-nav ul li');
    const targets = document.querySelectorAll('section, #home');
    let currentSection = '';

    targets.forEach(target => {
        const targetTop = target.offsetTop;
        const targetHeight = target.offsetHeight;

        if (
            window.scrollY >= targetTop - targetHeight / 3 &&
            window.scrollY < targetTop + targetHeight - targetHeight / 3
        ) {
            currentSection = target.getAttribute('id');
        }
    });

    // Entferne und füge `active`-Klasse hinzu
    navItems.forEach(item => {
        const targetId = item.getAttribute('data-target').substring(1);
        if (targetId === currentSection) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const homeSection = document.querySelector('#home');

    window.addEventListener('scroll', function () {
        if (window.scrollY < homeSection.offsetHeight) {
            navbar.classList.remove('hidden'); // Navbar anzeigen
        } else {
            navbar.classList.add('hidden'); // Navbar ausblenden
        }
    });
});

document.querySelectorAll('[data-bs-toggle="modal"]').forEach(item => {
    item.addEventListener('click', event => {
        const src = item.getAttribute('data-bs-src'); // Holt die Bildquelle
        const modalImage = document.getElementById('modalImage');
        modalImage.setAttribute('src', src); // Setzt die Quelle im Modal
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".see-korrektorat").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Verhindert das normale Linkverhalten
            const tab = document.querySelector('#korrektorat-tab'); // Wählt den Korrektorat-Tab aus
            const tabInstance = new bootstrap.Tab(tab); // Erstellt eine Bootstrap-Tab-Instanz
            tabInstance.show(); // Aktiviert den Tab
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.link-to-contact').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Verhindert Standardverhalten
            const modal = document.querySelector('.modal.show'); // Aktuell sichtbares Modal
            const targetId = this.getAttribute('href').substring(1); // Ziel-Element ID
            const targetElement = document.getElementById(targetId);

            if (modal) {
                const bootstrapModal = bootstrap.Modal.getInstance(modal);
                bootstrapModal.hide(); // Schließt das Modal
            }

            // Wartezeit für Smooth Scrolling, bis das Modal geschlossen ist
            setTimeout(() => {
                if (targetElement) {
                    smoothScrollTo(targetElement.offsetTop, 1000); // Scrollt flüssig
                }
            }, 300); // Zeit, die das Modal benötigt, um zu schließen
        });
    });
});

document.querySelectorAll('.scroll-to-tab').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Ziel-Tab ermitteln
        const targetTab = this.getAttribute('data-target');

        // Scrollen zur Sektion "Leistungen"
        const leistungenSection = document.querySelector('#leistungen');
        leistungenSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Beobachten, wann die Sektion vollständig sichtbar ist
        const observer = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                // Tab aktivieren
                const tabLink = document.querySelector(`button[data-bs-target="${targetTab}"]`);
                if (tabLink) {
                    tabLink.click();
                }
                observer.disconnect(); // Beobachtung beenden
            }
        });

        // Beobachtung starten
        observer.observe(leistungenSection);
    });
});