'use strict';

/**
 * Модуль інтеграції звіту ЛР №5 у портал IC-43_appRECORD-AndronovDanilo-FIOT-2026.
 * Структура даних і CSS-класи узгоджені з index.html та js/script.js (ЛР №1–№3).
 *
 * Виконавець: Андронов Данило Юрійович, група ІС-43 (№1 у списку, Варіант №1).
 */

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderCodeBlock(rawCode) {
  return `<div class="code-container"><pre>${escapeHtml(rawCode)}</pre></div>`;
}

function renderScreenshotFigure(filename, caption) {
  return `<figure style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; text-align: center; margin: 16px 0;">
    <img src="images/lab5/${escapeHtml(filename)}" alt="${escapeHtml(caption)}" style="max-width: 100%; height: auto; border: 1px solid #cbd5e1; border-radius: 4px;">
    <figcaption style="font-size: 12px; color: #64748b; margin-top: 8px; font-weight: 600;">${escapeHtml(caption)}</figcaption>
</figure>`;
}

const LAB5_LINKS = [
  {
    group: '1. Власний WEB-застосунок («MandryStay»)',
    repoLabel: 'Репозиторій на GitHub',
    repoUrl: 'https://github.com/AndronovDanilo/IC-43_appWEB-AndronovDanilo-FIOT-2026',
    liveLabel: 'Жива сторінка (GitHub Pages)',
    liveUrl: 'https://andronovdanilo.github.io/IC-43_appWEB-AndronovDanilo-FIOT-2026/',
  },
  {
    group: '2. Звітний HTML-документ (appRECORD)',
    repoLabel: 'Репозиторій на GitHub',
    repoUrl: 'https://github.com/AndronovDanilo/IC-43_appRECORD-AndronovDanilo-FIOT-2026',
    liveLabel: 'Жива сторінка (GitHub Pages)',
    liveUrl: 'https://andronovdanilo.github.io/IC-43_appRECORD-AndronovDanilo-FIOT-2026/',
  },
  {
    group: '3. WEB-застосунок із практичними завданнями (LR_IC-43_Andronov)',
    repoLabel: 'Репозиторій на GitHub',
    repoUrl: 'https://github.com/AndronovDanilo/LR_IC-43_Andronov',
    liveLabel: 'Жива сторінка (GitHub Pages)',
    liveUrl: 'https://andronovdanilo.github.io/LR_IC-43_Andronov/',
  },
];

const THEORETICAL_QUESTIONS = [
  {
    q: 'Що таке об’єкт у JavaScript? Яке його призначення?',
    a: 'Об’єкт (Object) — це посилальна структура даних для зберігання інформації у вигляді пар «ключ — значення», що використовується для моделювання реальних сутностей (студент, товар, користувач тощо).',
  },
  {
    q: 'Як створити об’єкт за допомогою літерала об’єкта?',
    a: 'За допомогою фігурних дужок <code>{}</code>, усередині яких через кому перелічуються властивості у форматі <code>ключ: значення</code>, наприклад: <code>const student = { firstName: "Данило", course: 2 };</code>.',
  },
  {
    q: 'Що таке властивості об’єкта? Які типи даних можуть бути їхніми значеннями?',
    a: 'Властивість — це іменоване поле об’єкта (ключ + значення). Значенням може бути будь-який тип даних JS: рядок, число, булеве значення, <code>null</code>, <code>undefined</code>, масив, інший об’єкт або функція (метод).',
  },
  {
    q: 'Якими способами можна отримати доступ до властивостей об’єкта?',
    a: 'Через крапку (<code>obj.prop</code> — коли ім’я ключа відоме заздалегідь і є валідним ідентифікатором) або через квадратні дужки (<code>obj["prop"]</code> або <code>obj[keyVar]</code> — для динамічних ключів чи ключів із пробілами/дефісами).',
  },
  {
    q: 'Як додати, змінити та видалити властивість об’єкта?',
    a: 'Додавання та зміна виконуються через оператор присвоєння (<code>obj.email = "...";</code>, <code>obj.age = 20;</code>), а видалення — оператором <code>delete obj.prop;</code>.',
  },
  {
    q: 'Що таке метод об’єкта? Чим метод відрізняється від звичайної властивості?',
    a: 'Метод — це функція, збережена у властивості об’єкта. На відміну від звичайної властивості (даних), метод описує дію або поведінку об’єкта та може бути викликаний за допомогою <code>()</code>.',
  },
  {
    q: 'Для чого використовується ключове слово this у методах об’єкта?',
    a: '<code>this</code> всередині звичайного методу посилається на об’єкт, у контексті якого викликано цей метод, дозволяючи звертатися до його власних властивостей та інших методів.',
  },
  {
    q: 'Що таке масив об’єктів? У яких випадках доцільно використовувати таку структуру даних?',
    a: 'Масив об’єктів — це впорядкована колекція однотипних об’єктів (<code>[{...}, {...}]</code>). Доцільна для списків товарів, користувачів, студентів, замовлень чи табличних даних із API.',
  },
  {
    q: 'Як отримати доступ до властивості певного об’єкта, що міститься в масиві?',
    a: 'Спочатку вказують індекс елемента масиву в квадратних дужках, а потім звертаються до властивості об’єкта через крапку або дужки: <code>students[0].name</code>.',
  },
  {
    q: 'Якими способами можна додавати та видаляти об’єкти з масиву?',
    a: 'Додавання: <code>push()</code> (у кінець), <code>unshift()</code> (на початок), <code>splice()</code> (у довільну позицію). Видалення: <code>pop()</code> (з кінця), <code>shift()</code> (з початку), <code>splice(index, 1)</code> (за індексом), <code>filter()</code> (створення нового масиву без елемента).',
  },
  {
    q: 'Що таке деструктуризація об’єктів? Які переваги її використання?',
    a: 'Деструктуризація — синтаксис розпакування властивостей об’єкта в окремі змінні (<code>const { name, age } = student;</code>). Зменшує дублювання коду, підвищує читабельність і дозволяє задавати значення за замовчуванням прямо при оголошенні.',
  },
  {
    q: 'Як отримати декілька властивостей об’єкта за допомогою деструктуризації?',
    a: 'Перелічити потрібні ключі через кому у фігурних дужках ліворуч від знака присвоєння: <code>const { name, age, group, course } = student;</code>.',
  },
  {
    q: 'Як виконати перейменування змінної під час деструктуризації?',
    a: 'Вказати нове ім’я змінної після двокрапки: <code>const { name: userName, email: userEmail } = user;</code>.',
  },
  {
    q: 'Для чого використовуються значення за замовчуванням під час деструктуризації?',
    a: 'Щоб уникнути <code>undefined</code>, якщо властивість відсутня в об’єкті або дорівнює <code>undefined</code>: <code>const { role = "user" } = options;</code>.',
  },
  {
    q: 'Що таке callback-функція? Який принцип її роботи?',
    a: 'Callback (функція зворотного виклику) — це функція, передана аргументом в іншу функцію (функцію вищого порядку), яка викликає її в потрібний момент для виконання конкретної дії чи обробки результату.',
  },
  {
    q: 'Як передати функцію як аргумент іншої функції?',
    a: 'Передати посилання на іменовану функцію без круглих дужок (<code>processValue(7, multiplyByTwo)</code>) або передати анонімний/стрілочний функціональний вираз безпосередньо в місці виклику.',
  },
  {
    q: 'Чим відрізняються синхронні та асинхронні callback-функції?',
    a: 'Синхронний callback виконується негайно під час виконання зовнішньої функції (наприклад, у <code>map()</code> або <code>processValue()</code>), а асинхронний — після настання події або завершення відкладеної операції (<code>setTimeout()</code>, <code>addEventListener()</code>, <code>Promise.then()</code>).',
  },
  {
    q: 'Що таке стрілочна функція? Який оператор використовується для її оголошення?',
    a: 'Стрілочна функція (Arrow Function) — компактний функціональний вираз зі стандарту ES6, що оголошується за допомогою стрілкового оператора <code>=&gt;</code>: <code>const fn = (a, b) =&gt; a + b;</code>.',
  },
  {
    q: 'Які особливості синтаксису стрілочних функцій?',
    a: 'Один параметр можна писати без дужок (<code>x =&gt; x * 2</code>); за відсутності або наявності кількох параметрів дужки обов’язкові (<code>() =&gt; ...</code>, <code>(a, b) =&gt; ...</code>); при одному виразі фігурні дужки та <code>return</code> можна опустити; повернення об’єкта в неявному записі огортається круглими дужками <code>({ a })</code>.',
  },
  {
    q: 'Чим відрізняється оголошення звичайної функції від стрілочної?',
    a: 'Стрілочні функції завжди є функціональними виразами (не мають підняття/hoisting як <code>function declaration</code>), не мають власного <code>this</code>, не мають псевдомасиву <code>arguments</code> і не можуть викликатися через оператор <code>new</code>.',
  },
  {
    q: 'Що таке неявне повернення результату стрілочною функцією?',
    a: 'Коли тіло стрілочної функції складається з одного виразу без фігурних дужок <code>{}</code>, значення цього виразу повертається автоматично без ключового слова <code>return</code> (наприклад, <code>(n) =&gt; n * 5</code>).',
  },
  {
    q: 'Які особливості використання this у стрілочних функціях?',
    a: 'Стрілочна функція не створює власного <code>this</code> під час виклику — вона лексично захоплює значення <code>this</code> із зовнішньої області видимості, де була оголошена. Тому її не варто використовувати як метод об’єкта.',
  },
  {
    q: 'Як використовуються стрілочні функції як callback-функції?',
    a: 'Їх передають безпосередньо в аргументи функцій, обробників подій, таймерів, промісів та перебираючих методів масиву (<code>arr.reduce((sum, item) =&gt; sum + item.price, 0)</code>), що робить код лаконічним і без зайвих обгорток.',
  },
  {
    q: 'Що таке перебираючі методи масивів? Для чого вони використовуються?',
    a: 'Це вбудовані методи <code>Array.prototype</code> (<code>forEach</code>, <code>map</code>, <code>filter</code>, <code>find</code>, <code>findIndex</code>, <code>some</code>, <code>every</code>, <code>reduce</code>, <code>flatMap</code>), що приймають callback і декларативно опрацьовують елементи масиву без ручних лічильників циклу.',
  },
  {
    q: 'Для чого призначений метод forEach()? Чи повертає він новий масив?',
    a: '<code>forEach()</code> виконує callback-функцію один раз для кожного елемента масиву (наприклад, для виводу в консоль або побічних ефектів). Він завжди повертає <code>undefined</code> і не створює нового масиву.',
  },
  {
    q: 'Яке призначення методу map()? Чим він відрізняється від forEach()?',
    a: '<code>map()</code> трансформує кожен елемент і повертає <strong>новий масив</strong> такої ж довжини, не змінюючи початковий. На відміну від нього, <code>forEach()</code> повертає <code>undefined</code>.',
  },
  {
    q: 'Як працює метод filter()? Який результат він повертає?',
    a: '<code>filter()</code> перевіряє кожен елемент предикатом (callback, що повертає boolean) і формує <strong>новий масив</strong> лише з тих елементів, для яких callback повернув істинне значення (або <code>[]</code>, якщо збігів немає).',
  },
  {
    q: 'Для чого використовується метод find()? Що він повертає, якщо елемент не знайдено?',
    a: '<code>find()</code> шукає та повертає <strong>перший елемент</strong> масиву, для якого callback повернув <code>true</code> (і зупиняє перебір). Якщо нічого не знайдено — повертає <code>undefined</code>.',
  },
  {
    q: 'Чим відрізняються методи find() та findIndex()?',
    a: '<code>find()</code> повертає сам знайдений елемент (або <code>undefined</code>), тоді як <code>findIndex()</code> повертає його числовий індекс у масиві (або <code>-1</code>, якщо елемент не знайдено).',
  },
  {
    q: 'Яке призначення методів some() та every()? Чим вони відрізняються?',
    a: 'Обидва повертають логічне значення: <code>some()</code> повертає <code>true</code>, якщо умові задовольняє <strong>хоча б один</strong> елемент, а <code>every()</code> — лише якщо умові задовольняють <strong>усі</strong> елементи масиву.',
  },
  {
    q: 'Які методи масивів повертають новий масив, а які — логічне значення?',
    a: 'Новий масив повертають <code>map()</code>, <code>filter()</code>, <code>flatMap()</code>. Логічне значення (<code>true</code>/<code>false</code>) повертають <code>some()</code> та <code>every()</code>.',
  },
  {
    q: 'Як використовувати стрілочні функції разом із перебираючими методами масивів?',
    a: 'Передавати стрілочну функцію першим аргументом у метод: <code>students.forEach((student) =&gt; console.log(student.name))</code> або <code>products.reduce((acc, p) =&gt; acc + p.price * p.quantity, 0)</code>.',
  },
  {
    q: 'Як за допомогою filter() здійснити відбір об’єктів за значенням певної властивості?',
    a: 'Повернути у callback умову порівняння потрібної властивості: <code>const honors = students.filter((s) =&gt; s.grade &gt;= 80);</code>.',
  },
  {
    q: 'Як за допомогою map() отримати новий масив, що містить лише окрему властивість об’єктів?',
    a: 'Повернути значення цієї властивості з callback (часто з деструктуризацією параметра): <code>const names = students.map(({ name }) =&gt; name);</code>.',
  },
  {
    q: 'У чому переваги використання перебираючих методів під час опрацювання масивів об’єктів?',
    a: 'Декларативний і компактний код без громіздких індексних циклів <code>for</code>, імутабельність початкових даних (для <code>map</code>/<code>filter</code>), менше помилок «на одиницю» та зрозумілий намір операції з назви методу.',
  },
];

const PRACTICAL_CONTROL_TASKS = [
  {
    title: '1. Створити об’єкт book із властивостями title, author, year, price. Вивести значення всіх властивостей у консоль.',
    code: `const book = { title: 'Кобзар', author: 'Тарас Шевченко', year: 1840, price: 450 };
console.log(book.title, book.author, book.year, book.price);`,
  },
  {
    title: '2. Додати до об’єкта метод, який формує та повертає інформаційний рядок про книгу.',
    code: `book.getSummary = function () {
  return \`"\${this.title}" (\${this.author}, \${this.year}) — \${this.price} грн\`;
};
console.log(book.getSummary());`,
  },
  {
    title: '3. Створити масив із п’яти об’єктів student, кожен з яких містить ім’я, вік та середній бал.',
    code: `const students = [
  { name: 'Данило', age: 19, avgGrade: 95 },
  { name: 'Олена', age: 18, avgGrade: 88 },
  { name: 'Максим', age: 19, avgGrade: 74 },
  { name: 'Ірина', age: 20, avgGrade: 100 },
  { name: 'Тарас', age: 19, avgGrade: 62 },
];`,
  },
  {
    title: '4. Використати деструктуризацію для отримання імені та середнього бала студента.',
    code: `const { name, avgGrade } = students[0];
console.log(\`Студент: \${name}, середній бал: \${avgGrade}\`);`,
  },
  {
    title: '5. Створити функцію, яка приймає два числа та callback-функцію для виконання арифметичної операції.',
    code: `const calc = (a, b, op) => op(a, b);
console.log(calc(12, 4, (x, y) => x + y));`,
  },
  {
    title: '6. Переписати звичайну функцію обчислення добутку двох чисел у вигляді стрілочної функції.',
    code: `// Було: function multiply(a, b) { return a * b; }
const multiply = (a, b) => a * b;
console.log(multiply(6, 7)); // 42`,
  },
  {
    title: '7. За допомогою forEach() вивести імена всіх студентів із масиву.',
    code: `students.forEach((student) => console.log(student.name));`,
  },
  {
    title: '8. За допомогою map() створити новий масив, який містить лише імена студентів.',
    code: `const studentNames = students.map((student) => student.name);
console.log(studentNames);`,
  },
  {
    title: '9. За допомогою filter() відібрати студентів, середній бал яких більший за 80.',
    code: `const highAchievers = students.filter((student) => student.avgGrade > 80);
console.log(highAchievers);`,
  },
  {
    title: '10. За допомогою find() знайти студента за заданим ім’ям.',
    code: `const targetStudent = students.find((student) => student.name === 'Олена');
console.log(targetStudent);`,
  },
  {
    title: '11. За допомогою some() перевірити, чи є в масиві студент із середнім балом 100.',
    code: `const hasPerfectScore = students.some((student) => student.avgGrade === 100);
console.log(hasPerfectScore); // true`,
  },
  {
    title: '12. За допомогою every() перевірити, чи всі студенти мають середній бал не нижче 60.',
    code: `const allPassed = students.every((student) => student.avgGrade >= 60);
console.log(allPassed); // true`,
  },
];

const CODE_SUBTOPIC_1 = `/*
 * Підтема 1 «Об'єкт» — Завдання 1. Створення об'єкта студента
 * Створіть об'єкт student, який містить такі властивості: firstName, lastName,
 * age, specialty, course. Заповніть властивості відповідними значеннями.
 * Виведіть об'єкт у консоль.
 */
function task1_1(
  student = {
    firstName: 'Данило',
    lastName: 'Андронов',
    age: 19,
    specialty: '126 Інформаційні системи та технології',
    course: 2,
  }
) {
  console.log('[1.1] Об\\'єкт student:', student);
  return student;
}

/*
 * Підтема 1 «Об'єкт» — Завдання 9. Вкладені об'єкти
 * Створіть об'єкт user, який містить інформацію про користувача: ім'я,
 * прізвище, вік та вкладений об'єкт address. Об'єкт address повинен містити
 * місто, вулицю, номер будинку та поштовий індекс. Виведіть у консоль місто
 * та вулицю проживання користувача.
 */
function task1_9(
  user = {
    firstName: 'Данило',
    lastName: 'Андронов',
    age: 19,
    address: {
      city: 'Київ',
      street: 'Політехнічна',
      house: '14В',
      postalCode: '03056',
    },
  }
) {
  console.log(\`[1.9] Місто проживання: \${user.address.city}, вулиця: \${user.address.street}\`);
  return {
    user,
    city: user.address.city,
    street: user.address.street,
  };
}`;

const CODE_SUBTOPIC_2 = `/*
 * Підтема 2 «Методи об'єкта» — Завдання 1. Отримання ключів об'єкта
 * Створіть об'єкт student із властивостями name, age, specialty, course, group.
 * Використовуючи метод Object.keys(), отримайте масив назв усіх властивостей
 * об'єкта. Виведіть отриманий масив у консоль.
 */
function task2_1(
  student = {
    name: 'Данило Андронов',
    age: 19,
    specialty: 'Інформаційні системи та технології',
    course: 2,
    group: 'ІС-43',
  }
) {
  const keys = Object.keys(student);
  console.log('[2.1] Ключі об\\'єкта student:', keys);
  return keys;
}

/*
 * Підтема 2 «Методи об'єкта» — Завдання 8. Створення копії об'єкта
 * Створіть об'єкт product із властивостями name, price, category. Створіть
 * його поверхневу копію за допомогою Object.assign(). Змініть значення
 * властивості price у копії. Перевірте, чи змінився початковий об'єкт.
 */
function task2_8(
  product = {
    name: 'Готельний тур «Карпатський вікенд»',
    price: 4500,
    category: 'Туризм та готелі',
  },
  newCopyPrice = 3990
) {
  const originalPrice = product.price;
  const productCopy = Object.assign({}, product);
  productCopy.price = newCopyPrice;

  const isOriginalChanged = product.price !== originalPrice;
  console.log('[2.8] Початковий об\\'єкт product:', product);
  console.log('[2.8] Поверхнева копія productCopy:', productCopy);
  console.log(
    \`[2.8] Чи змінився початковий об'єкт? \${isOriginalChanged ? 'Так' : \`Ні (price залишилась \${product.price})\`}\`
  );

  return {
    product,
    productCopy,
    isOriginalChanged,
  };
}`;

const CODE_SUBTOPIC_3 = `/*
 * Підтема 3 «Масив об'єктів» — Завдання 1. Створення масиву студентів
 * Створіть масив students, який містить три об'єкти студентів. Кожен об'єкт
 * повинен мати властивості id, name, age, group. Виведіть увесь масив у консоль.
 */
function task3_1(
  students = [
    { id: 1, name: 'Данило Андронов', age: 19, group: 'ІС-43' },
    { id: 2, name: 'Олена Коваленко', age: 18, group: 'ІС-43' },
    { id: 3, name: 'Максим Шевченко', age: 19, group: 'ІС-43' },
  ]
) {
  console.log('[3.1] Масив студентів:', students);
  return students;
}

/*
 * Підтема 3 «Масив об'єктів» — Завдання 7. Видалення об'єкта за ідентифікатором
 * Створіть масив товарів із властивостями id, name, price. За допомогою циклу
 * знайдіть індекс товару з указаним id. Видаліть відповідний об'єкт за
 * допомогою методу splice(). Виведіть оновлений масив.
 */
function task3_7(
  productsInput = [
    { id: 101, name: 'Номер Standard', price: 1800 },
    { id: 102, name: 'Номер Deluxe Panorama', price: 3200 },
    { id: 103, name: 'Шале у Буковелі', price: 5400 },
  ],
  targetId = 102
) {
  const products = productsInput.slice();

  let indexToDelete = -1;
  for (let i = 0; i < products.length; i += 1) {
    if (products[i].id === targetId) {
      indexToDelete = i;
      break;
    }
  }

  let removedItem = null;
  if (indexToDelete !== -1) {
    [removedItem] = products.splice(indexToDelete, 1);
    console.log(\`[3.7] Видалено товар з id=\${targetId} (індекс \${indexToDelete}):\`, removedItem);
  } else {
    console.log(\`[3.7] Товар з id=\${targetId} не знайдено, масив без змін.\`);
  }

  console.log('[3.7] Оновлений масив товарів:', products);
  return {
    products,
    removedIndex: indexToDelete,
    removedItem,
  };
}`;

const CODE_SUBTOPIC_4 = `/*
 * Підтема 4 «Деструктуризація об'єктів» — Завдання 1. Базова деструктуризація об'єкта
 * Створіть об'єкт student із властивостями name, age, group, course.
 * Використовуючи деструктуризацію, створіть окремі змінні для отримання
 * значень цих властивостей. Виведіть змінні в консоль.
 */
function task4_1(
  student = {
    name: 'Данило Андронов',
    age: 19,
    group: 'ІС-43',
    course: 2,
  }
) {
  const { name, age, group, course } = student;
  console.log(\`[4.1] Деструктуризація: ім'я=\${name}, вік=\${age}, група=\${group}, курс=\${course}\`);
  return { name, age, group, course };
}

/*
 * Підтема 4 «Деструктуризація об'єктів» — Завдання 5. Отримання решти властивостей об'єкта
 * Створіть об'єкт student із властивостями name, age, group, email, phone, course.
 * За допомогою деструктуризації отримайте значення name та group, а оператор
 * rest (...) використайте для збереження решти властивостей в окремий об'єкт.
 * Виведіть усі результати.
 */
function task4_5(
  student = {
    name: 'Данило Андронов',
    age: 19,
    group: 'ІС-43',
    email: 'andronov.danylo@kpi.ua',
    phone: '+380671234567',
    course: 2,
  }
) {
  const { name, group, ...rest } = student;
  console.log(\`[4.5] Ім'я: \${name}, Група: \${group}\`);
  console.log('[4.5] Решта властивостей (...rest):', rest);
  return { name, group, rest };
}

/*
 * Підтема 4 «Деструктуризація об'єктів» — Завдання 10. Опрацювання об'єкта відповіді сервера
 * Створіть об'єкт response, який імітує відповідь сервера та містить вкладені
 * дані користувача: data.user.name, data.user.email, data.user.address.city,
 * а також властивість status. Використовуючи вкладену деструктуризацію та
 * перейменування властивостей, отримайте ім'я, електронну пошту, місто та
 * статус відповіді.
 */
function task4_10(
  response = {
    status: 200,
    data: {
      user: {
        name: 'Данило Андронов',
        email: 'danylo.andronov@mandrystay.ua',
        address: {
          city: 'Київ',
        },
      },
    },
  }
) {
  const {
    status: responseStatus,
    data: {
      user: {
        name: userName,
        email: userEmail,
        address: { city: userCity },
      },
    },
  } = response;

  console.log(
    \`[4.10] Відповідь сервера -> статус: \${responseStatus}, користувач: \${userName}, email: \${userEmail}, місто: \${userCity}\`
  );

  return {
    userName,
    userEmail,
    userCity,
    responseStatus,
  };
}`;

const CODE_SUBTOPIC_5 = `/*
 * Підтема 5 «Callback (функції зворотного виклику)» — Завдання 1. Функція як аргумент іншої функції
 * Створіть функцію processValue(), яка приймає два параметри: числове значення
 * та функцію зворотного виклику. Усередині processValue() передайте отримане
 * число у функцію зворотного виклику. Створіть окрему функцію, яка множить
 * число на 2, та передайте її як аргумент.
 */
function processValue(value, callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('callback у processValue() має бути функцією');
  }
  return callback(value);
}

function multiplyByTwo(num) {
  return num * 2;
}

function task5_1(value = 7, callback = multiplyByTwo) {
  const result = processValue(value, callback);
  console.log(\`[5.1] processValue(\${value}, \${callback.name || 'callback'}) = \${result}\`);
  return result;
}

/*
 * Підтема 5 «Callback (функції зворотного виклику)» — Завдання 7. Відкладене виконання повідомлення
 * Створіть функцію showMessage(), яка приймає текст повідомлення та функцію
 * зворотного виклику. Використовуючи setTimeout(), організуйте виклик callback
 * через 3 секунди. Передайте функцію, яка виводить повідомлення в консоль.
 */
function logDelayedMessage(message) {
  console.log(\`[5.7] Відкладене повідомлення (через 3 секунди): "\${message}"\`);
}

function showMessage(message, callback, delayMs = 3000) {
  if (typeof callback !== 'function') {
    throw new TypeError('callback у showMessage() має бути функцією');
  }
  return setTimeout(() => {
    callback(message);
  }, delayMs);
}

function task5_7(
  message = 'Дані бронювання MandryStay успішно синхронізовано!',
  callback = logDelayedMessage,
  delayMs = 3000
) {
  console.log(\`[5.7] Заплановано відкладене повідомлення (затримка \${delayMs} мс)...\`);
  return showMessage(message, callback, delayMs);
}`;

const CODE_SUBTOPIC_6 = `/*
 * Підтема 6 «Стрілочні функції» — Завдання 1. Перетворення звичайної функції на стрілочну
 * Створіть звичайну функцію greeting(), яка приймає ім'я користувача та повертає
 * привітання. Перепишіть цю функцію у вигляді стрілочної функції. Порівняйте
 * обидва варіанти та перевірте результат.
 */
function greeting(name) {
  return \`Вітаємо, \${name}!\`;
}

const greetingArrow = (name) => \`Вітаємо, \${name}!\`;

function task6_1(name = 'Данило') {
  const regularResult = greeting(name);
  const arrowResult = greetingArrow(name);
  const areEqual = regularResult === arrowResult;

  console.log(\`[6.1] greeting("\${name}"): "\${regularResult}"\`);
  console.log(\`[6.1] greetingArrow("\${name}"): "\${arrowResult}" (однакові: \${areEqual})\`);

  return {
    regularResult,
    arrowResult,
    areEqual,
  };
}

/*
 * Підтема 6 «Стрілочні функції» — Завдання 10. Стрілочні функції та контекст this
 * Створіть об'єкт car із властивістю brand та методом getInfo(), оголошеним за
 * допомогою звичайного синтаксису методу об'єкта. Метод повинен повертати
 * значення this.brand. Додатково створіть стрілочну функцію showBrand, яка
 * отримує марку автомобіля через параметр і повертає повідомлення з нею.
 * Порівняйте результати та з'ясуйте, чому стрілочна функція не має власного
 * контексту this.
 */
const showBrand = (brand) => \`Марка автомобіля: \${brand}\`;

function task6_10(brand = 'Toyota') {
  const car = {
    brand,
    getInfo() {
      return this.brand;
    },
    // Стрілочна функція лексично успадковує this зовнішньої області (undefined у strict mode)
    getInfoArrow: () => this?.brand,
  };

  const methodBrand = car.getInfo();
  const arrowThisBrand = car.getInfoArrow();
  const arrowMessage = showBrand(car.brand);
  const explanation =
    'Стрілочна функція не має власного this і бере його з зовнішньої області видимості; ' +
    'тому для методів об\\'єкта використовують звичайні методи, а стрілочній функції дані передають через параметр.';

  console.log(\`[6.10] car.getInfo() (this.brand): "\${methodBrand}"\`);
  console.log(\`[6.10] car.getInfoArrow() (лексичний this.brand): \${String(arrowThisBrand)}\`);
  console.log(\`[6.10] showBrand(car.brand): "\${arrowMessage}"\`);
  console.log(\`[6.10] Пояснення: \${explanation}\`);

  return {
    car,
    methodBrand,
    arrowThisBrand,
    arrowMessage,
    explanation,
  };
}`;

const CODE_SUBTOPIC_7 = `/*
 * Підтема 7 «Стрілочні функції як колбеки» — Завдання 1. Стрілочна функція як callback
 * Створіть функцію processNumber(), яка приймає число та функцію зворотного
 * виклику. Викличте processNumber(), передавши стрілочну функцію, яка множить
 * отримане число на 5. Виведіть результат у консоль.
 */
function processNumber(num, callback) {
  if (typeof callback !== 'function') {
    throw new TypeError('callback у processNumber() має бути функцією');
  }
  return callback(num);
}

function task7_1(num = 8) {
  const result = processNumber(num, (n) => n * 5);
  console.log(\`[7.1] processNumber(\${num}, (n) => n * 5) = \${result}\`);
  return result;
}

/*
 * Підтема 7 «Стрілочні функції як колбеки» — Завдання 6. Отримання значення з поля введення
 * Створіть HTML-сторінку з текстовим полем input та кнопкою. За допомогою
 * addEventListener() додайте обробник події введення тексту (input).
 * Використайте стрілочну функцію як callback, щоб отримувати та виводити
 * поточне значення поля введення.
 */
function initTask7_6(doc = typeof document !== 'undefined' ? document : null) {
  if (!doc) return null;

  const inputEl = doc.getElementById('task-7-6-input');
  const outputEl = doc.getElementById('task-7-6-output');
  const buttonEl = doc.getElementById('task-7-6-button');
  const clearBtnEl = doc.getElementById('task-7-6-clear');
  const statusEl = doc.getElementById('task-7-6-status');
  const formEl = doc.getElementById('task-7-6-form');

  if (!inputEl) return null;

  const renderValue = (value) => {
    if (outputEl) {
      outputEl.textContent = value.length > 0 ? value : '(порожньо)';
    }
  };

  if (formEl) {
    formEl.addEventListener('submit', (event) => event.preventDefault());
  }

  // Стрілочний callback на подію input
  inputEl.addEventListener('input', (event) => {
    const currentValue = event.target.value;
    renderValue(currentValue);
    console.log(\`[7.6] Подія input -> поточне значення: "\${currentValue}"\`);
  });

  if (buttonEl) {
    buttonEl.addEventListener('click', () => {
      const currentValue = inputEl.value;
      renderValue(currentValue);
      const statusText =
        currentValue.trim().length > 0
          ? \`Підтверджено значення: "\${currentValue}"\`
          : 'Поле введення наразі порожнє.';
      if (statusEl) statusEl.textContent = statusText;
      console.log(\`[7.6] Натиснуто кнопку -> \${statusText}\`);
    });
  }

  if (clearBtnEl) {
    clearBtnEl.addEventListener('click', () => {
      inputEl.value = '';
      renderValue('');
      if (statusEl) statusEl.textContent = 'Поле очищено.';
      console.log('[7.6] Поле введення очищено.');
    });
  }

  return { inputEl, outputEl, buttonEl, clearBtnEl, statusEl };
}

/*
 * Підтема 7 «Стрілочні функції як колбеки» — Завдання 9. Використання стрілочної функції з Promise
 * Створіть об'єкт Promise, який повертає повідомлення "Дані успішно завантажено".
 * За допомогою методу .then() та стрілочної функції отримайте результат виконання
 * Promise і виведіть його в консоль. Додайте обробку помилки за допомогою .catch().
 */
function loadData(shouldFail = false) {
  return new Promise((resolve, reject) => {
    if (shouldFail) {
      reject(new Error('Не вдалося завантажити дані із сервера'));
      return;
    }
    resolve('Дані успішно завантажено');
  });
}

function task7_9(shouldFail = false) {
  return loadData(shouldFail)
    .then((message) => {
      console.log(\`[7.9] Promise .then(): "\${message}"\`);
      return { ok: true, message };
    })
    .catch((error) => {
      console.log(\`[7.9] Promise .catch(): "\${error.message}"\`);
      return { ok: false, error: error.message };
    });
}`;

const HTML_TASK_7_6 = `<form id="task-7-6-form">
    <div class="form-group">
        <label for="task-7-6-input">Текстове поле введення:</label>
        <div class="input-row">
            <input
                type="text"
                id="task-7-6-input"
                name="liveText"
                placeholder="Введіть текст (наприклад: MandryStay ІС-43)..."
                autocomplete="off"
            >
            <button type="button" id="task-7-6-button" class="btn btn-primary">
                Вивести значення
            </button>
            <button type="button" id="task-7-6-clear" class="btn btn-secondary">
                Очистити
            </button>
        </div>
    </div>
</form>

<div class="live-output-box">
    Поточне значення поля: <output id="task-7-6-output" for="task-7-6-input">(порожньо)</output>
</div>
<p id="task-7-6-status" class="status-note" aria-live="polite"></p>`;

const CODE_SUBTOPIC_8 = `/*
 * Підтема 8 «Перебираючі методи масиву» — Завдання 1. Перебір масиву за допомогою forEach()
 * Створіть масив об'єктів students, кожен із яких містить властивості name, age,
 * group. Використовуючи метод forEach() та стрілочну функцію, виведіть
 * інформацію про кожного студента в консоль.
 */
function task8_1(
  students = [
    { name: 'Данило Андронов', age: 19, group: 'ІС-43' },
    { name: 'Олена Коваленко', age: 18, group: 'ІС-43' },
    { name: 'Максим Шевченко', age: 19, group: 'ІС-43' },
  ]
) {
  const formattedLines = [];
  students.forEach((student, index) => {
    const info = \`[8.1] Студент №\${index + 1}: \${student.name}, вік: \${student.age}, група: \${student.group}\`;
    formattedLines.push(info);
    console.log(info);
  });
  return formattedLines;
}

/*
 * Підтема 8 «Перебираючі методи масиву» — Завдання 5. Пошук індексу елемента за допомогою findIndex()
 * Створіть масив об'єктів товарів із властивостями id, name, price.
 * Використовуючи метод findIndex(), знайдіть індекс товару з визначеним
 * ідентифікатором. Виведіть індекс у консоль. Якщо товар не знайдено, виведіть
 * повідомлення.
 */
function task8_5(
  products = [
    { id: 201, name: 'Тур у Яремче (2 ночі)', price: 4200 },
    { id: 202, name: 'Готель Буковель SPA', price: 6800 },
    { id: 203, name: 'Вікенд у Львові', price: 3100 },
  ],
  targetId = 202
) {
  const foundIndex = products.findIndex((item) => item.id === targetId);
  const message =
    foundIndex !== -1
      ? \`[8.5] Товар з id=\${targetId} знайдено за індексом \${foundIndex} (\${products[foundIndex].name})\`
      : \`[8.5] Товар з id=\${targetId} не знайдено (індекс -1)\`;

  console.log(message);
  return {
    index: foundIndex,
    found: foundIndex !== -1,
    message,
  };
}

/*
 * Підтема 8 «Перебираючі методи масиву» — Завдання 8. Обчислення суми за допомогою reduce()
 * Створіть масив об'єктів products, кожен із яких містить властивості name,
 * price, quantity. Використовуючи метод reduce(), обчисліть загальну вартість
 * усіх товарів на складі. Результат виведіть у консоль.
 */
function task8_8(
  products = [
    { name: 'Клавіатура механічна', price: 2500, quantity: 4 },
    { name: 'Миша бездротова', price: 1400, quantity: 6 },
    { name: 'Монітор 27"', price: 9800, quantity: 2 },
  ]
) {
  const totalCost = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  console.log(\`[8.8] Загальна вартість товарів на складі: \${totalCost} грн\`);
  return totalCost;
}`;

const LAB5_SUBTABS = [
  {
    id: 'lab5-topic',
    pillLabel: 'Тема. Мета. Місце розташування сайтів, звіту',
    title: 'Лабораторна робота №5',
    html: `<h2>Лабораторна робота №5</h2>
<div class="info-card">
    <p><strong>Тема:</strong> ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ. ПЕРЕБИРАЮЧІ МЕТОДИ МАСИВУ.</p>
    <p><strong>Мета:</strong> Придбати практичні навички роботи з об'єктами, методами об'єктів, масивами об'єктів, деструктуризацією об'єктів, callback-функціями, стрілочними функціями, стрілочними функціями як колбеками та перебираючими методами масиву (<code>forEach()</code>, <code>findIndex()</code>, <code>reduce()</code> тощо).</p>
    <p><strong>Виконавець:</strong> Андронов Данило Юрійович, група <strong>ІС-43</strong> (№1 у списку групи → <strong>Варіант №1</strong>: 19 практичних завдань у 8 підтемах).</p>
</div>

<h3>Місце розташування проєктів та живих сторінок (6 обов'язкових посилань):</h3>
<div class="links-card">
    <ul>
${LAB5_LINKS.map(
  (link) => `        <li>
            <strong>${escapeHtml(link.group)}:</strong><br>
            &bull; ${escapeHtml(link.repoLabel)}: <a href="${escapeHtml(link.repoUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.repoUrl)}</a><br>
            &bull; ${escapeHtml(link.liveLabel)}: <a href="${escapeHtml(link.liveUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.liveUrl)}</a>
        </li>`
).join('\n')}
    </ul>
</div>`,
  },
  {
    id: 'lab5-1-1',
    pillLabel: 'ЗАВДАННЯ 1  1.1 Об\'єкт',
    title: 'Підтема 1.1 «Об\'єкт» (Варіант №1: завдання 1, 9)',
    html: `<h2>Завдання №1 — Підтема 1.1 «Об'єкт» (Варіант №1: завдання 1, 9)</h2>
<div class="info-card">
    <p>Реалізовано створення об'єкта <code>student</code> із п'ятьма властивостями (<code>firstName</code>, <code>lastName</code>, <code>age</code>, <code>specialty</code>, <code>course</code>) та об'єкта <code>user</code> із вкладеним об'єктом <code>address</code> (місто, вулиця, номер будинку, поштовий індекс) і виведенням у консоль.</p>
</div>
<h3>1. Програмний код (<code>js/lesson-5.js</code>) з умовами у коментарях:</h3>
${renderCodeBlock(CODE_SUBTOPIC_1)}
<h3>2. Результат виконання у Console:</h3>
${renderCodeBlock(`[1.1] Об'єкт student: {
  firstName: 'Данило',
  lastName: 'Андронов',
  age: 19,
  specialty: '126 Інформаційні системи та технології',
  course: 2
}
[1.9] Місто проживання: Київ, вулиця: Політехнічна`)}
${renderScreenshotFigure('lab5-console-subtopics-1-2.png', 'Рис. 1.1–1.2: Вивід у Console для підтем «Об’єкт» (1.1, 1.9) та «Методи об’єкта» (2.1, 2.8)')}`,
  },
  {
    id: 'lab5-1-2',
    pillLabel: '1.2 Методи об\'єкта',
    title: 'Підтема 1.2 «Методи об\'єкта» (Варіант №1: завдання 1, 8)',
    html: `<h2>Завдання №1 — Підтема 1.2 «Методи об'єкта» (Варіант №1: завдання 1, 8)</h2>
<div class="info-card">
    <p>Використано метод <code>Object.keys(student)</code> для отримання масиву назв властивостей та <code>Object.assign({}, product)</code> для створення поверхневої копії з перевіркою незмінності початкового об'єкта після зміни <code>price</code> у копії.</p>
</div>
<h3>1. Програмний код (<code>js/lesson-5.js</code>) з умовами у коментарях:</h3>
${renderCodeBlock(CODE_SUBTOPIC_2)}
<h3>2. Результат виконання у Console:</h3>
${renderCodeBlock(`[2.1] Ключі об'єкта student: [ 'name', 'age', 'specialty', 'course', 'group' ]
[2.8] Початковий об'єкт product: { name: 'Готельний тур «Карпатський вікенд»', price: 4500, category: 'Туризм та готелі' }
[2.8] Поверхнева копія productCopy: { name: 'Готельний тур «Карпатський вікенд»', price: 3990, category: 'Туризм та готелі' }
[2.8] Чи змінився початковий об'єкт? Ні (price залишилась 4500)`)}
${renderScreenshotFigure('lab5-console-subtopics-1-2.png', 'Рис. 1.2: Результати виконання Object.keys() та Object.assign() у Console')}`,
  },
  {
    id: 'lab5-1-3',
    pillLabel: '1.3 Масив об\'єктів',
    title: 'Підтема 1.3 «Масив об\'єктів» (Варіант №1: завдання 1, 7)',
    html: `<h2>Завдання №1 — Підтема 1.3 «Масив об'єктів» (Варіант №1: завдання 1, 7)</h2>
<div class="info-card">
    <p>Створено масив <code>students</code> із трьох об'єктів та реалізовано пошук індексу товару за <code>id</code> у циклі з видаленням через <code>splice()</code>. Програму перевірено як на існуючому <code>id = 102</code>, так і на відсутньому <code>id = 999</code>.</p>
</div>
<h3>1. Програмний код (<code>js/lesson-5.js</code>) з умовами у коментарях:</h3>
${renderCodeBlock(CODE_SUBTOPIC_3)}
<h3>2. Результат виконання у Console:</h3>
${renderCodeBlock(`[3.1] Масив студентів: [
  { id: 1, name: 'Данило Андронов', age: 19, group: 'ІС-43' },
  { id: 2, name: 'Олена Коваленко', age: 18, group: 'ІС-43' },
  { id: 3, name: 'Максим Шевченко', age: 19, group: 'ІС-43' }
]
[3.7] Видалено товар з id=102 (індекс 1): { id: 102, name: 'Номер Deluxe Panorama', price: 3200 }
[3.7] Оновлений масив товарів: [
  { id: 101, name: 'Номер Standard', price: 1800 },
  { id: 103, name: 'Шале у Буковелі', price: 5400 }
]
[3.7] Товар з id=999 не знайдено, масив без змін.
[3.7] Оновлений масив товарів: [
  { id: 101, name: 'Номер Standard', price: 1800 },
  { id: 102, name: 'Номер Deluxe Panorama', price: 3200 },
  { id: 103, name: 'Шале у Буковелі', price: 5400 }
]`)}
${renderScreenshotFigure('lab5-console-subtopic-3.png', 'Рис. 1.3: Вивід у Console для підтеми «Масив об’єктів» (3.1, 3.7)')}`,
  },
  {
    id: 'lab5-1-4',
    pillLabel: '1.4 Деструктуризація',
    title: 'Підтема 1.4 «Деструктуризація об\'єктів» (Варіант №1: завдання 1, 5, 10)',
    html: `<h2>Завдання №1 — Підтема 1.4 «Деструктуризація об'єктів» (Варіант №1: завдання 1, 5, 10)</h2>
<div class="info-card">
    <p>Продемонстровано базову деструктуризацію об'єкта <code>student</code>, виділення решти властивостей за допомогою оператора <code>...rest</code> та вкладену деструктуризацію відповіді сервера <code>response</code> з перейменуванням змінних.</p>
</div>
<h3>1. Програмний код (<code>js/lesson-5.js</code>) з умовами у коментарях:</h3>
${renderCodeBlock(CODE_SUBTOPIC_4)}
<h3>2. Результат виконання у Console:</h3>
${renderCodeBlock(`[4.1] Деструктуризація: ім'я=Данило Андронов, вік=19, група=ІС-43, курс=2
[4.5] Ім'я: Данило Андронов, Група: ІС-43
[4.5] Решта властивостей (...rest): {
  age: 19,
  email: 'andronov.danylo@kpi.ua',
  phone: '+380671234567',
  course: 2
}
[4.10] Відповідь сервера -> статус: 200, користувач: Данило Андронов, email: danylo.andronov@mandrystay.ua, місто: Київ`)}
${renderScreenshotFigure('lab5-console-subtopic-4.png', 'Рис. 1.4: Результати базової, rest- та вкладеної деструктуризації у Console')}`,
  },
  {
    id: 'lab5-1-5',
    pillLabel: '1.5 Callback-функції',
    title: 'Підтема 1.5 «Callback-функції» (Варіант №1: завдання 1, 7)',
    html: `<h2>Завдання №1 — Підтема 1.5 «Callback-функції» (Варіант №1: завдання 1, 7)</h2>
<div class="info-card">
    <p>Реалізовано функцію вищого порядку <code>processValue(value, callback)</code> із передачею окремої функції <code>multiplyByTwo</code> та асинхронну функцію <code>showMessage(message, callback, 3000)</code> із відкладеним викликом через <code>setTimeout()</code> рівно за 3 секунди.</p>
</div>
<h3>1. Програмний код (<code>js/lesson-5.js</code>) з умовами у коментарях:</h3>
${renderCodeBlock(CODE_SUBTOPIC_5)}
<h3>2. Результат виконання у Console:</h3>
${renderCodeBlock(`[5.1] processValue(7, multiplyByTwo) = 14
[5.1] processValue(12.5, multiplyByTwo) = 25
[5.7] Заплановано відкладене повідомлення (затримка 3000 мс)...
[5.7] Відкладене повідомлення (через 3 секунди): "Дані бронювання MandryStay успішно синхронізовано!"`)}
${renderScreenshotFigure('lab5-console-subtopics-5-6.png', 'Рис. 1.5–1.6: Виконання callback-функцій і стрілочних функцій у Console')}`,
  },
  {
    id: 'lab5-1-6',
    pillLabel: '1.6 Стрілочні функції',
    title: 'Підтема 1.6 «Стрілочні функції» (Варіант №1: завдання 1, 10)',
    html: `<h2>Завдання №1 — Підтема 1.6 «Стрілочні функції» (Варіант №1: завдання 1, 10)</h2>
<div class="info-card">
    <p>Виконано перетворення звичайної функції <code>greeting()</code> на стрілочну <code>greetingArrow</code> з порівнянням результатів, а також досліджено різницю контексту <code>this</code> у звичайному методі об'єкта <code>car.getInfo()</code> та стрілочній функції <code>showBrand(brand)</code>.</p>
</div>
<h3>1. Програмний код (<code>js/lesson-5.js</code>) з умовами у коментарях:</h3>
${renderCodeBlock(CODE_SUBTOPIC_6)}
<h3>2. Результат виконання у Console:</h3>
${renderCodeBlock(`[6.1] greeting("Данило"): "Вітаємо, Данило!"
[6.1] greetingArrow("Данило"): "Вітаємо, Данило!" (однакові: true)
[6.1] greeting("Олена"): "Вітаємо, Олена!"
[6.1] greetingArrow("Олена"): "Вітаємо, Олена!" (однакові: true)
[6.10] car.getInfo() (this.brand): "Toyota"
[6.10] car.getInfoArrow() (лексичний this.brand): undefined
[6.10] showBrand(car.brand): "Марка автомобіля: Toyota"
[6.10] Пояснення: Стрілочна функція не має власного this і бере його з зовнішньої області видимості; тому для методів об'єкта використовують звичайні методи, а стрілочній функції дані передають через параметр.
[6.10] car.getInfo() (this.brand): "Volkswagen"
[6.10] car.getInfoArrow() (лексичний this.brand): undefined
[6.10] showBrand(car.brand): "Марка автомобіля: Volkswagen"`)}
${renderScreenshotFigure('lab5-console-subtopics-5-6.png', 'Рис. 1.6: Порівняння звичайних і стрілочних функцій та контексту this у Console')}`,
  },
  {
    id: 'lab5-1-7',
    pillLabel: '1.7 Стрілочні функції як колбеки',
    title: 'Підтема 1.7 «Стрілочні функції як колбеки» (Варіант №1: завдання 1, 6, 9)',
    html: `<h2>Завдання №1 — Підтема 1.7 «Стрілочні функції як колбеки» (Варіант №1: завдання 1, 6, 9)</h2>
<div class="info-card">
    <p>Передано стрілочний callback <code>(n) =&gt; n * 5</code> у функцію <code>processNumber()</code>, підключено обробник події <code>addEventListener('input', (event) =&gt; ...)</code> на HTML-сторінці (Завдання 7.6) та оброблено <code>Promise</code> через <code>.then()</code> і <code>.catch()</code> зі стрілочними колбеками (Завдання 7.9).</p>
</div>
<h3>1. HTML-розмітка поля введення та кнопки (<code>index.html</code>, Завдання 7.6):</h3>
${renderCodeBlock(HTML_TASK_7_6)}
<h3>2. Програмний код (<code>js/lesson-5.js</code>) з умовами у коментарях:</h3>
${renderCodeBlock(CODE_SUBTOPIC_7)}
<h3>3. Результат у браузері та Console:</h3>
${renderCodeBlock(`[7.1] processNumber(8, (n) => n * 5) = 40
[7.1] processNumber(-3, (n) => n * 5) = -15
[7.6] Подія input -> поточне значення: "MandryStay ІС-43"
[7.6] Натиснуто кнопку -> Підтверджено значення: "MandryStay ІС-43"
[7.9] Promise .then(): "Дані успішно завантажено"
[7.9] Promise .catch(): "Не вдалося завантажити дані із сервера"`)}
${renderScreenshotFigure('lab5-task-7-6-ui.png', 'Рис. 1.7а: Інтерактивна форма Завдання 7.6 (подія input і кнопка підтвердження у браузері)')}
${renderScreenshotFigure('lab5-console-subtopics-7-8.png', 'Рис. 1.7б: Виконання стрілочних колбеків (7.1, 7.6, 7.9) та перебираючих методів (8.1, 8.5, 8.8) у Console')}`,
  },
  {
    id: 'lab5-1-8',
    pillLabel: '1.8 Перебираючі методи',
    title: 'Підтема 1.8 «Перебираючі методи масиву» (Варіант №1: завдання 1, 5, 8)',
    html: `<h2>Завдання №1 — Підтема 1.8 «Перебираючі методи масиву» (Варіант №1: завдання 1, 5, 8)</h2>
<div class="info-card">
    <p>Застосовано перебираючі методи масивів зі стрілочними функціями: <code>forEach()</code> для виведення інформації про студентів, <code>findIndex()</code> для пошуку індексу товару за <code>id</code> (з обробкою <code>-1</code>) та <code>reduce()</code> для обчислення загальної вартості товарів на складі з перевіркою на двох наборах даних.</p>
</div>
<h3>1. Програмний код (<code>js/lesson-5.js</code>) з умовами у коментарях:</h3>
${renderCodeBlock(CODE_SUBTOPIC_8)}
<h3>2. Результат виконання у Console:</h3>
${renderCodeBlock(`[8.1] Студент №1: Данило Андронов, вік: 19, група: ІС-43
[8.1] Студент №2: Олена Коваленко, вік: 18, група: ІС-43
[8.1] Студент №3: Максим Шевченко, вік: 19, група: ІС-43
[8.5] Товар з id=202 знайдено за індексом 1 (Готель Буковель SPA)
[8.5] Товар з id=999 не знайдено (індекс -1)
[8.8] Загальна вартість товарів на складі: 38000 грн
[8.8] Загальна вартість товарів на складі: 8350 грн`)}
${renderScreenshotFigure('lab5-console-subtopics-7-8.png', 'Рис. 1.8: Результати виконання forEach(), findIndex() та reduce() у Console')}`,
  },
  {
    id: 'lab5-task2',
    pillLabel: 'ЗАВДАННЯ № 2',
    title: 'Практичне завдання №2 (примітка щодо методичних вказівок)',
    html: `<h2>Практичне завдання №2</h2>
<div class="links-card">
    <p><strong>Примітка:</strong> Вкладка «ЗАВДАННЯ № 2» збережена в структурі звіту відповідно до орієнтовного макету лабораторної роботи №5.</p>
    <p>У вихідному документі методичних вказівок викладача (<code>ЛР №5 new Об_єкт. Методи об_єкта. Масив об_єктів. Дестр.docx</code>) після заголовка <strong>«ПРАКТИЧНЕ ЗАВДАННЯ №2»</strong> текст окремого завдання відсутній — одразу наведено розділ «ОРІЄНТОВНИЙ МАКЕТ ДО ЛАБОРАТОРНОЇ РОБОТИ №5».</p>
    <p>Усі практичні вимоги ЛР №5 (19 завдань Варіанта №1 у 8 підтемах, включаючи DOM-взаємодію через <code>addEventListener('input', ...)</code> у завданні 7.6, асинхронні <code>setTimeout()</code> у 5.7 та <code>Promise</code> у 7.9) повністю реалізовані в межах файлу <a href="https://github.com/AndronovDanilo/LR_IC-43_Andronov" target="_blank" rel="noopener noreferrer"><code>js/lesson-5.js</code></a> і висвітлені у вкладках <strong>1.1–1.8</strong>.</p>
</div>`,
  },
  {
    id: 'lab5-conclusions',
    pillLabel: 'ВИСНОВКИ',
    title: 'Висновки до Лабораторної роботи №5',
    html: `<h2>Висновки до Лабораторної роботи №5</h2>
<div class="info-card">
    <p>Під час виконання лабораторної роботи №5 за Варіантом №1 було практично опрацьовано та закріплено ключові механізми роботи з об'єктами та функціями в сучасному JavaScript (ES6+):</p>
    <ol>
        <li><strong>Об'єкти та їх методи:</strong> Створено прості та вкладені об'єкти (<code>student</code>, <code>user.address</code>), використано <code>Object.keys()</code> для інспектування ключів та <code>Object.assign()</code> для поверхневого копіювання без мутації оригіналу.</li>
        <li><strong>Масиви об'єктів та деструктуризація:</strong> Відпрацьовано ітерацію та пошукове видалення об'єктів за <code>id</code> методом <code>splice()</code>, базову деструктуризацію, збір решти полів через оператор <code>...rest</code> та вкладену деструктуризацію з перейменуванням змінних.</li>
        <li><strong>Callback-функції та стрілочні функції:</strong> Реалізовано передачу синхронних і відкладених (<code>setTimeout</code> 3000 мс) callback-функцій, перевірено поведінку контексту <code>this</code> у методах об'єкта на противагу лексичному <code>this</code> у стрілочних функціях, підключено обробник події <code>input</code> та ланцюжок <code>Promise</code> (<code>.then()</code> / <code>.catch()</code>).</li>
        <li><strong>Перебираючі методи масивів та тестування:</strong> Застосовано <code>forEach()</code>, <code>findIndex()</code> і <code>reduce()</code> зі стрілочними функціями на кількох наборах даних; коректність усіх 19 завдань підтверджено 10 автотестами <code>node --test</code> та перевіркою в headless Chrome (0 винятків у консолі).</li>
    </ol>
</div>`,
  },
];

const LAB5_RECORD_DATA = {
  labNumber: 5,
  tabLabel: 'Лабораторна №5',
  tabFullLabel: 'Лабораторна робота №5',
  activeByDefault: true,
  variant: 1,
  student: 'Андронов Данило Юрійович',
  group: 'ІС-43',
  links: LAB5_LINKS,
  subtabs: LAB5_SUBTABS,
  theoreticalQuestions: THEORETICAL_QUESTIONS,
  practicalTasks: PRACTICAL_CONTROL_TASKS,
};

function renderLab5SidebarPills() {
  const buttonsHtml = LAB5_SUBTABS.map(
    (tab, index) =>
      `                <button class="subtab-pill${index === 0 ? ' active' : ''}" data-target="${escapeHtml(tab.id)}">${escapeHtml(tab.pillLabel)}</button>`
  ).join('\n');

  return `            <!-- Підвкладки для Лабораторної роботи №5 (згідно з макетом викладача) -->
            <div id="lab5-subtabs" class="subtabs-group">
${buttonsHtml}
            </div>`;
}

function renderLab5Sections() {
  return LAB5_SUBTABS.map(
    (tab, index) =>
      `            <section id="${escapeHtml(tab.id)}" class="tab-content${index === 0 ? ' active' : ''}">
                ${tab.html}
            </section>`
  ).join('\n\n');
}

function mountLab5Report(doc = typeof document !== 'undefined' ? document : null) {
  if (!doc) return false;

  const sidebar = doc.querySelector('.subtabs-sidebar');
  const displayArea = doc.getElementById('info-display-area') || doc.querySelector('.content-display-area');
  if (!sidebar || !displayArea) return false;

  if (!doc.getElementById('lab5-subtabs')) {
    sidebar.insertAdjacentHTML('beforeend', renderLab5SidebarPills());
  }

  const placeholder = doc.getElementById('other-labs-container');
  const existingFirstSection = doc.getElementById(LAB5_SUBTABS[0].id);
  if (!existingFirstSection) {
    if (placeholder) {
      placeholder.insertAdjacentHTML('beforebegin', renderLab5Sections());
    } else {
      displayArea.insertAdjacentHTML('beforeend', renderLab5Sections());
    }
  }

  return true;
}

if (typeof window !== 'undefined') {
  window.LAB5_RECORD_DATA = LAB5_RECORD_DATA;
  window.renderLab5SidebarPills = renderLab5SidebarPills;
  window.renderLab5Sections = renderLab5Sections;
  window.mountLab5Report = mountLab5Report;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    LAB5_RECORD_DATA,
    LAB5_LINKS,
    LAB5_SUBTABS,
    THEORETICAL_QUESTIONS,
    PRACTICAL_CONTROL_TASKS,
    escapeHtml,
    renderCodeBlock,
    renderScreenshotFigure,
    renderLab5SidebarPills,
    renderLab5Sections,
    mountLab5Report,
  };
}
