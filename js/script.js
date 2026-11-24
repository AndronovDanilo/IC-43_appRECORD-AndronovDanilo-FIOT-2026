document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.subtabs-sidebar');
    const displayArea = document.getElementById('info-display-area') || document.querySelector('.content-display-area');
    const otherContainer = document.getElementById('other-labs-container');

    // Монтування даних Лабораторної роботи №4 (з js/lab4-record-data.js)
    if (
        sidebar &&
        displayArea &&
        typeof window.renderLab4SubtabsHTML === 'function' &&
        typeof window.renderLab4SectionsHTML === 'function'
    ) {
        if (!document.getElementById('lab4-subtabs')) {
            sidebar.insertAdjacentHTML('beforeend', window.renderLab4SubtabsHTML());
        }
        if (!document.getElementById('lab4-topic')) {
            if (otherContainer) {
                otherContainer.insertAdjacentHTML('beforebegin', window.renderLab4SectionsHTML());
            } else {
                displayArea.insertAdjacentHTML('beforeend', window.renderLab4SectionsHTML());
            }
        }
    }

    // Монтування даних Лабораторної роботи №5 (з js/lab5-record-data.js)
    if (typeof window.mountLab5Report === 'function') {
        window.mountLab5Report(document);
    }

    const labTabButtons = document.querySelectorAll('.lab-tab-btn');
    const subtabsGroups = document.querySelectorAll('.subtabs-group');
    const tabContents = document.querySelectorAll('.tab-content');

    // Налаштування кліків по овальних пілюлях підвкладок у сайдбарі
    function setupSubtabPills() {
        document.querySelectorAll('.subtab-pill').forEach(pill => {
            pill.onclick = () => {
                const targetId = pill.getAttribute('data-target');
                const parentGroup = pill.closest('.subtabs-group');

                if (parentGroup) {
                    parentGroup.querySelectorAll('.subtab-pill').forEach(p => p.classList.remove('active'));
                }
                tabContents.forEach(c => c.classList.remove('active'));
                if (otherContainer) {
                    otherContainer.classList.remove('active');
                    otherContainer.style.display = 'none';
                }

                pill.classList.add('active');
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                    // Плавний скрол вгору робочої області
                    if (displayArea) {
                        displayArea.scrollTop = 0;
                    }
                }
            };
        });
    }

    function activateLab(labNum) {
        // Активуємо обрану кнопку лаби
        labTabButtons.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-lab') === String(labNum));
        });

        // Приховуємо всі групи сайдбару та контент
        subtabsGroups.forEach(g => {
            g.style.display = 'none';
        });
        tabContents.forEach(c => c.classList.remove('active'));

        const targetGroup = document.getElementById(`lab${labNum}-subtabs`);

        if (targetGroup) {
            if (otherContainer) {
                otherContainer.classList.remove('active');
                otherContainer.style.display = 'none';
            }
            targetGroup.style.display = 'flex';
            // Активуємо першу доступну кнопку в цій групі
            const firstPill = targetGroup.querySelector('.subtab-pill');
            if (firstPill) {
                firstPill.click();
            }
        } else if (otherContainer) {
            // Для незаповнених лабораторних робіт (ЛР6–ЛР9)
            otherContainer.style.display = 'block';
            otherContainer.classList.add('active');
            const otherTitle = document.getElementById('other-lab-title');
            const otherDesc = document.getElementById('other-lab-desc');
            if (otherTitle) {
                otherTitle.textContent = `Лабораторна робота №${labNum}`;
            }
            if (otherDesc) {
                otherDesc.textContent = `Матеріали та звітність для Лабораторної роботи №${labNum} будуть додані згідно з навчальним планом семестру.`;
            }
        }
    }

    setupSubtabPills();

    // Перемикання лабораторних у горизонтальному ряду (№1 .. №9)
    labTabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            activateLab(btn.getAttribute('data-lab'));
        });
    });

    // Початкова активація: за замовчуванням Лабораторна робота №5 (data-lab="5")
    const activeBtn =
        document.querySelector('.lab-tab-btn.active') ||
        document.querySelector('.lab-tab-btn[data-lab="5"]') ||
        labTabButtons[0];
    if (activeBtn) {
        activateLab(activeBtn.getAttribute('data-lab'));
    }
});
