document.addEventListener('DOMContentLoaded', () => {
    const labButtons = document.querySelectorAll('.lab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Перемикання вкладок у межах поточної лабораторної
    function setupSubtabs() {
        document.querySelectorAll('.subtab-btn').forEach(btn => {
            btn.onclick = () => {
                const targetId = btn.getAttribute('data-target');
                const parentNav = btn.parentElement;

                parentNav.querySelectorAll('.subtab-btn').forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                btn.classList.add('active');
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            };
        });
    }

    setupSubtabs();

    // Перемикання лабораторних у боковому меню
    labButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const labNum = btn.getAttribute('data-lab');
            labButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const lab1Subtabs = document.getElementById('lab1-subtabs');
            const lab2Subtabs = document.getElementById('lab2-subtabs');
            const lab3Subtabs = document.getElementById('lab3-subtabs');
            const otherContainer = document.getElementById('other-labs-container');

            tabContents.forEach(c => c.classList.remove('active'));

            if (lab1Subtabs) lab1Subtabs.style.display = 'none';
            if (lab2Subtabs) lab2Subtabs.style.display = 'none';
            if (lab3Subtabs) lab3Subtabs.style.display = 'none';
            if (otherContainer) otherContainer.style.display = 'none';

            if (labNum === '1') {
                lab1Subtabs.style.display = 'flex';
                document.querySelector('.subtab-btn[data-target="lab1-topic"]').click();
            } else if (labNum === '2') {
                lab2Subtabs.style.display = 'flex';
                document.querySelector('.subtab-btn[data-target="lab2-topic"]').click();
            } else if (labNum === '3') {
                lab3Subtabs.style.display = 'flex';
                document.querySelector('.subtab-btn[data-target="lab3-topic"]').click();
            } else {
                otherContainer.style.display = 'block';
                document.getElementById('other-lab-title').textContent = `Лабораторна робота №${labNum}`;
                document.getElementById('other-lab-desc').textContent = `Матеріали та звітність для Лабораторної роботи №${labNum} будуть додані згідно з навчальним планом.`;
            }
        });
    });
});
