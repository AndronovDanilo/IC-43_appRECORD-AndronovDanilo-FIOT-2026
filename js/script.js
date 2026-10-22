document.addEventListener('DOMContentLoaded', () => {
    const labButtons = document.querySelectorAll('.lab-btn');
    const subtabButtons = document.querySelectorAll('.subtab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Перемикання вкладок у межах поточної лабораторної
    subtabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');

            subtabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Перемикання лабораторних у боковому меню
    labButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const labNum = btn.getAttribute('data-lab');
            labButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (labNum === '1') {
                document.getElementById('lab1-subtabs').style.display = 'flex';
                document.getElementById('other-labs-container').style.display = 'none';
                // Відкриваємо першу вкладку ЛР1
                document.querySelector('.subtab-btn[data-target="lab1-topic"]').click();
            } else {
                document.getElementById('lab1-subtabs').style.display = 'none';
                tabContents.forEach(c => c.classList.remove('active'));
                
                const otherContainer = document.getElementById('other-labs-container');
                otherContainer.style.display = 'block';
                document.getElementById('other-lab-title').textContent = `Лабораторна робота №${labNum}`;
                document.getElementById('other-lab-desc').textContent = `Матеріали та звітність для Лабораторної роботи №${labNum} будуть додані згідно з навчальним планом.`;
            }
        });
    });
});
