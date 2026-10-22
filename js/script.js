document.addEventListener('DOMContentLoaded', () => {
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

                pill.classList.add('active');
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                    // Плавний скрол вгору робочої області
                    const displayArea = document.querySelector('.content-display-area');
                    if (displayArea) {
                        displayArea.scrollTop = 0;
                    }
                }
            };
        });
    }

    setupSubtabPills();

    // Перемикання лабораторних у горизонтальному ряду (№1 .. №9)
    labTabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const labNum = btn.getAttribute('data-lab');

            // Активуємо обрану кнопку лаби
            labTabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Приховуємо всі групи сайдбару та контент
            subtabsGroups.forEach(g => g.style.display = 'none');
            tabContents.forEach(c => c.classList.remove('active'));

            const targetGroup = document.getElementById(`lab${labNum}-subtabs`);
            const otherContainer = document.getElementById('other-labs-container');

            if (targetGroup) {
                targetGroup.style.display = 'flex';
                // Активуємо першу доступну кнопку в цій групі
                const firstPill = targetGroup.querySelector('.subtab-pill');
                if (firstPill) {
                    firstPill.click();
                }
            } else {
                // Для лаб 4-9
                if (otherContainer) {
                    otherContainer.classList.add('active');
                    document.getElementById('other-lab-title').textContent = `Лабораторна робота №${labNum}`;
                    document.getElementById('other-lab-desc').textContent = `Матеріали та звітність для Лабораторної роботи №${labNum} будуть додані згідно з навчальним планом семестру.`;
                }
            }
        });
    });
});
