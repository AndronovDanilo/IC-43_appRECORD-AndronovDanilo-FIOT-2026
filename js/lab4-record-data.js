/**
 * Дані та HTML-рендерер для вкладки «Лабораторна робота №4» у звітному порталі appRECORD
 * (IC-43_appRECORD-AndronovDanilo-FIOT-2026)
 *
 * Студент: Андронов Данило Юрійович, група ІС-43, №1 у списку (Варіант 1)
 */

'use strict';

const LAB4_RECORD_DATA = {
  labNumber: 4,
  title: 'Лабораторна робота №4',
  topic:
    'ОСНОВИ JAVASCRIPT У HTML-ДОКУМЕНТІ. ШАБЛОНІ РЯДКИ. КЕРУВАННЯ ПОРЯДКОМ ОБЧИСЛЕНЬ. МАСИВИ. МЕТОДИ МАСИВІВ. ФУНКЦІЇ',
  goal:
    'Придбати практичні навички роботи з конструкціями мови JavaScript, шаблонними рядками, масивами, функціями та валідацією HTML-форм, а також створити вікно авторизації у власному вебзастосунку.',
  variantInfo: 'Студент групи ІС-43 Андронов Данило, номер у списку: 1 (непарні номери для завдань 1–6, 8; Варіант 1 для завдань 7, 9).',
  links: [
    {
      group: '1. Власний WEB-застосунок («MandryStay»)',
      repoLabel: 'Репозиторій на GitHub (appWEB)',
      repoUrl: 'https://github.com/AndronovDanilo/IC-43_appWEB-AndronovDanilo-FIOT-2026',
      liveLabel: 'Жива сторінка на GitHub Pages (appWEB)',
      liveUrl: 'https://andronovdanilo.github.io/IC-43_appWEB-AndronovDanilo-FIOT-2026/'
    },
    {
      group: '2. Звітний HTML-документ (appRECORD)',
      repoLabel: 'Репозиторій на GitHub (appRECORD)',
      repoUrl: 'https://github.com/AndronovDanilo/IC-43_appRECORD-AndronovDanilo-FIOT-2026',
      liveLabel: 'Жива сторінка на GitHub Pages (appRECORD)',
      liveUrl: 'https://andronovdanilo.github.io/IC-43_appRECORD-AndronovDanilo-FIOT-2026/'
    },
    {
      group: '3. WEB-застосунок із JS-завданнями (LR_IC-43_Andronov)',
      repoLabel: 'Репозиторій на GitHub (LR_IC-43_Andronov)',
      repoUrl: 'https://github.com/AndronovDanilo/LR_IC-43_Andronov',
      liveLabel: 'Жива сторінка на GitHub Pages (LR_IC-43_Andronov)',
      liveUrl: 'https://andronovdanilo.github.io/LR_IC-43_Andronov/'
    }
  ],
  subtabs: [
    { target: 'lab4-topic', label: 'Тема, мета, місце розташування сайту, звіту' },
    { target: 'lab4-task1', label: 'ЗАВДАННЯ №1 (prompt, alert, Console)' },
    { target: 'lab4-task2', label: 'ЗАВДАННЯ №2 (switch-case)' },
    { target: 'lab4-task3', label: 'ЗАВДАННЯ №3 (Ідентифікація Admin/User)' },
    { target: 'lab4-task4', label: 'ЗАВДАННЯ №4 (makeTransaction)' },
    { target: 'lab4-task5', label: 'ЗАВДАННЯ №5 (checkForSpam)' },
    { target: 'lab4-task6', label: 'ЗАВДАННЯ №6 (filterArray)' },
    { target: 'lab4-task7', label: 'ЗАВДАННЯ №7 (Масив та Insertion Sort)' },
    { target: 'lab4-task8', label: 'ЗАВДАННЯ №8 (2D-масив чисел)' },
    { target: 'lab4-task9', label: 'ЗАВДАННЯ №9 (Валідація форми реєстрації)' },
    { target: 'lab4-task10', label: 'ЗАВДАННЯ №10 (Авторизація у MandryStay)' },
    { target: 'lab4-conclusions', label: 'ВИСНОВКИ до ЛР №4' },
    { target: 'lab4-questions', label: 'Контрольні запитання (28)' }
  ],
  tasks: [
    {
      id: 'lab4-task1',
      number: 1,
      heading: 'ЗАВДАННЯ №1 (Непарні номери): класифікація числа через prompt() і alert()',
      description:
        'Користувач вводить значення через prompt(), воно зберігається у змінну value та виводиться у консоль шаблонним рядком. Функція classifyNumber перевіряє скасування (null), порожній рядок, нечисловий ввід і знак числа, після чого виводить повідомлення через alert().',
      code: `/*
Умова:
Збережіть введене значення (використати метод prompt()) у змінну value.
Вивести це значення у Console, використовуючи шаблонний рядок.
Перевірити: введене значення від’ємне? Додатнє? Дорівнює нулю?
Відповідь вивести за допомогою alert().
Наприклад: при введенні 80 виведе «Число додатнє».
Підказка: При введенні значень не забудьте зробити ряд перевірок.
*/
function classifyNumber(rawValue) {
  if (rawValue === null) {
    return 'Введення скасовано';
  }
  const trimmed = typeof rawValue === 'string' ? rawValue.trim() : String(rawValue).trim();
  if (rawValue === undefined || trimmed === '') {
    return 'Помилка: введіть коректне число';
  }
  const numericValue = Number(trimmed);
  if (!Number.isFinite(numericValue)) {
    return 'Помилка: введіть коректне число';
  }
  if (numericValue > 0) {
    return 'Число додатнє';
  }
  if (numericValue < 0) {
    return 'Число від’ємне';
  }
  return 'Число дорівнює нулю';
}

function runTask1(
  promptFn = (msg) => globalThis.prompt(msg),
  alertFn = (msg) => globalThis.alert(msg),
  logFn = console.log
) {
  const value = promptFn('Завдання 1: Введіть число:');
  logFn(\`Завдання 1 — введене значення: \${value}\`);
  const message = classifyNumber(value);
  logFn(\`Завдання 1 — результат: \${message}\`);
  alertFn(message);
  return { value, message };
}`,
      consoleOutput: [
        'Завдання 1 — введене значення: 80',
        'Завдання 1 — результат: Число додатнє',
        'Завдання 1 — введене значення: -15',
        'Завдання 1 — результат: Число від’ємне',
        'Завдання 1 — введене значення: 0',
        'Завдання 1 — результат: Число дорівнює нулю',
        'Завдання 1 — введене значення: ',
        'Завдання 1 — результат: Помилка: введіть коректне число'
      ].join('\n'),
      screenshots: [
        {
          src: 'images/lab4/task1-console.png',
          alt: 'Результат виконання Завдання №1 у консолі браузера',
          caption: 'Рис. 1.1. Вивід у консоль результатів перевірки чисел для Завдання №1'
        }
      ]
    },
    {
      id: 'lab4-task2',
      number: 2,
      heading: 'ЗАВДАННЯ №2 (Непарні номери): визначення пори року через switch-case',
      description:
        "Значення змінної number ('1', '2', '3' або '4') зчитується через prompt() і передається у конструкцію switch-case для запису назви пори року в змінну result. Для будь-яких інших значень спрацьовує гілка default.",
      code: `/*
Умова:
Змінна number може набувати 4 значення: '1', '2', '3' або '4' (запитуй це значення
у користувача через prompt). Якщо вона має значення '1', то у змінну result
запишіть 'зима', якщо має значення '2' - 'весна' і так далі.
Розв'яжіть завдання через switch-case. Не забудьте про дефолтне значення, на випадок,
якщо користувач введе в prompt щось інше. Значення змінної result виведіть в консоль.
*/
function getSeason(number) {
  const normalized = typeof number === 'string' ? number.trim() : number;
  let result;
  switch (normalized) {
    case '1':
      result = 'зима';
      break;
    case '2':
      result = 'весна';
      break;
    case '3':
      result = 'літо';
      break;
    case '4':
      result = 'осінь';
      break;
    default:
      result = 'Невірне значення. Введіть 1, 2, 3 або 4.';
      break;
  }
  return result;
}

function runTask2(
  promptFn = (msg) => globalThis.prompt(msg),
  logFn = console.log,
  alertFn = (msg) => globalThis.alert(msg)
) {
  const number = promptFn("Завдання 2: Введіть значення number ('1', '2', '3' або '4'):");
  const result = getSeason(number);
  logFn(\`Завдання 2 — number=\${number} → result: \${result}\`);
  if (typeof alertFn === 'function') {
    alertFn(\`Пора року: \${result}\`);
  }
  return { number, result };
}`,
      consoleOutput: [
        'Завдання 2 — number=1 → result: зима',
        'Завдання 2 — number=2 → result: весна',
        'Завдання 2 — number=3 → result: літо',
        'Завдання 2 — number=4 → result: осінь',
        'Завдання 2 — number=9 → result: Невірне значення. Введіть 1, 2, 3 або 4.'
      ].join('\n'),
      screenshots: [
        {
          src: 'images/lab4/task2-console.png',
          alt: 'Результат виконання Завдання №2 у консолі браузера',
          caption: 'Рис. 2.1. Перевірка всіх чотирьох гілок switch-case і гілки default'
        }
      ]
    },
    {
      id: 'lab4-task3',
      number: 3,
      heading: 'ЗАВДАННЯ №3 (Непарні номери): ідентифікація користувачів Admin та User',
      description:
        'Для облікових записів Admin (пароль admin123) та User (пароль user123) виконується запит логіна через prompt(), вивід логіна в консоль шаблонним рядком і перевірка пароля або вивід повідомлень Cancelled, Wrong password чи I don\'t know you через alert().',
      code: `/*
Умова:
Є Admin та User, з відповідними паролями. (Об’явити, проініцілізувати)
Написати програмний код, який запитуватиме у користувача логін (використати prompt)
і виводить результат в консоль браузера, використовуючи шаблонний рядок.
Після цього додайте перевірку введеного користувачем значення: якщо відвідувач вводить
"Admin", то prompt запитує пароль. У випадку вдалої ідентифікації в alert вивести
«Hello, Admin»; якщо нічого не ввели або натиснули Cancel, то вивести в alert рядок
"Cancelled"; в іншому випадку вивести в alert рядок "I don't know you".
Теж саме виконати з User.
*/
// Навчальні демонстраційні константи (без реальних секретів)
const DEMO_USERS = Object.freeze({
  Admin: 'admin123',
  User: 'user123'
});

function authenticateUser(login, password) {
  if (login === null || login === undefined) {
    return { status: 'cancelled', message: 'Cancelled', askPassword: false };
  }
  const normalizedLogin = String(login).trim();
  if (normalizedLogin === '') {
    return { status: 'cancelled', message: 'Cancelled', askPassword: false };
  }
  if (!Object.hasOwn(DEMO_USERS, normalizedLogin)) {
    return { status: 'unknown', message: "I don't know you", askPassword: false };
  }
  if (password === undefined) {
    return { status: 'need_password', user: normalizedLogin, askPassword: true };
  }
  if (password === null || String(password).trim() === '') {
    return { status: 'cancelled', message: 'Cancelled', askPassword: false };
  }
  if (String(password) === DEMO_USERS[normalizedLogin]) {
    return { status: 'authenticated', message: \`Hello, \${normalizedLogin}\`, askPassword: false };
  }
  return { status: 'wrong_password', message: 'Wrong password', askPassword: false };
}

function runTask3(
  promptFn = (msg) => globalThis.prompt(msg),
  alertFn = (msg) => globalThis.alert(msg),
  logFn = console.log
) {
  const rawLogin = promptFn('Завдання 3: Введіть логін (Admin або User):');
  logFn(\`Завдання 3 — введений логін: \${rawLogin}\`);
  const loginCheck = authenticateUser(rawLogin);
  if (!loginCheck.askPassword) {
    logFn(\`Завдання 3 — результат: \${loginCheck.message}\`);
    alertFn(loginCheck.message);
    return loginCheck;
  }
  const password = promptFn(\`Введіть пароль для \${loginCheck.user}:\`);
  const authResult = authenticateUser(rawLogin, password);
  logFn(\`Завдання 3 — результат для \${loginCheck.user}: \${authResult.message}\`);
  alertFn(authResult.message);
  return authResult;
}`,
      consoleOutput: [
        'Завдання 3 — введений логін: Admin',
        'Завдання 3 — результат для Admin: Hello, Admin',
        'Завдання 3 — введений логін: User',
        'Завдання 3 — результат для User: Hello, User',
        'Завдання 3 — введений логін: Guest',
        "Завдання 3 — результат: I don't know you",
        'Завдання 3 — введений логін: null',
        'Завдання 3 — результат: Cancelled'
      ].join('\n'),
      screenshots: [
        {
          src: 'images/lab4/task3-console.png',
          alt: 'Результат виконання Завдання №3 у консолі браузера',
          caption: 'Рис. 3.1. Вивід результатів перевірки логіна Admin, User, невідомого логіна та скасування'
        }
      ]
    },
    {
      id: 'lab4-task4',
      number: 4,
      heading: 'ЗАВДАННЯ №4 (Непарні номери): функція makeTransaction(quantity, pricePerDroid)',
      description:
        'Функція приймає кількість дроїдів і ціну одного дроїда, обчислює загальну вартість замовлення totalPrice та повертає шаблонний рядок із підсумком покупки.',
      code: `/*
Умова:
Станція з продажу ремонтних дроїдів. Оголоси функцію makeTransaction, яка очікує
два параметри, значення яких будуть задаватися під час її виклику:
• quantity — перший параметр, число, що містить кількість замовлених дроїдів
• pricePerDroid — другий параметр, число, що містить вартість одного дроїда
Напиши код функції так, щоб вона повертала рядок з повідомленням про покупку
ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", де:
• <quantity> — це кількість замовлених дроїдів
• <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів.
*/
function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return \`You ordered \${quantity} droids worth \${totalPrice} credits!\`;
}`,
      consoleOutput: [
        '=== Завдання 4: makeTransaction(quantity, pricePerDroid) ===',
        'makeTransaction(5, 3000)  -> "You ordered 5 droids worth 15000 credits!"',
        'makeTransaction(3, 1000)  -> "You ordered 3 droids worth 3000 credits!"',
        'makeTransaction(10, 500)  -> "You ordered 10 droids worth 5000 credits!"'
      ].join('\n'),
      screenshots: [
        {
          src: 'images/lab4/task4-console.png',
          alt: 'Результат виконання Завдання №4 у консолі браузера',
          caption: 'Рис. 4.1. Тестові виклики функції makeTransaction у консолі'
        }
      ]
    },
    {
      id: 'lab4-task5',
      number: 5,
      heading: 'ЗАВДАННЯ №5 (Непарні номери): функція checkForSpam(message)',
      description:
        'Функція приводить вхідний рядок до нижнього регістру методом toLowerCase() і методом includes() перевіряє наявність заборонених слів spam або sale незалежно від регістру.',
      code: `/*
Умова:
Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на
вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку
параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.
Доповни код функції таким чином, що:
Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true.
Якщо в рядку відсутні заборонені слова, функція повертає буль false.
*/
function checkForSpam(message) {
  const normalizedMessage = String(message).toLowerCase();
  return normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
}`,
      consoleOutput: [
        '=== Завдання 5: checkForSpam(message) ===',
        'checkForSpam("Latest technology news") -> false',
        'checkForSpam("JavaScript weekly newsletter") -> false',
        'checkForSpam("Get best sale offers now!") -> true',
        'checkForSpam("Amazing SalE, only tonight!") -> true',
        'checkForSpam("Trust me, this is not a spam message") -> true',
        'checkForSpam("Get rid of sPaM emails. Our book in on sale!") -> true',
        'checkForSpam("[SPAM] How to earn fast money?") -> true'
      ].join('\n'),
      screenshots: [
        {
          src: 'images/lab4/task5-console.png',
          alt: 'Результат виконання Завдання №5 у консолі браузера',
          caption: 'Рис. 5.1. Перевірка рядків на наявність слів spam та sale у різному регістрі'
        }
      ]
    },
    {
      id: 'lab4-task6',
      number: 6,
      heading: 'ЗАВДАННЯ №6 (Непарні номери): функція filterArray(numbers, value)',
      description:
        'Функція створює порожній масив filteredNumbers, перебирає елементи вхідного масиву циклом for і додає методом push() лише ті числа, які строго більші за поріг value.',
      code: `/*
Умова:
Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та
значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел
із масиву numbers, які більші за значення value.
Усередині функції:
• Створи порожній масив, у який будеш додавати підходящі числа.
• Використай цикл для ітерації кожного елемента масиву numbers.
• Використовуй умовний оператор if усередині циклу для перевірки кожного елемента
  і додавання до свого масиву.
• Поверни свій новий масив з підходящими числами як результат.
*/
function filterArray(numbers, value) {
  const filteredNumbers = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }
  return filteredNumbers;
}`,
      consoleOutput: [
        '=== Завдання 6: filterArray(numbers, value) ===',
        'filterArray([1,2,3,4,5], 3) -> [4,5]',
        'filterArray([1,2,3,4,5], 4) -> [5]',
        'filterArray([1,2,3,4,5], 5) -> []',
        'filterArray([12,24,8,41,76], 38) -> [41,76]',
        'filterArray([12,24,8,41,76], 20) -> [24,41,76]'
      ].join('\n'),
      screenshots: [
        {
          src: 'images/lab4/task6-console.png',
          alt: 'Результат виконання Завдання №6 у консолі браузера',
          caption: 'Рис. 6.1. Фільтрація масивів чисел функцією filterArray'
        }
      ]
    },
    {
      id: 'lab4-task7',
      number: 7,
      heading: 'ЗАВДАННЯ №7 (Варіант 1): обмін елементів масиву та сортування методом вставки',
      description:
        'Програма запитує довжину масиву n (перевірка n >= 2), генерує випадкові цілі числа з [-20, 50], окремими функціями знаходить максимальний серед парних елементів і мінімальний серед елементів із парними індексами (0, 2, 4, ...), міняє їх місцями та сортує вихідний масив за зростанням методом вставки (Insertion Sort).',
      code: `/*
Умова:
1. Створити одновимірний масив, кількість елементів якого задана користувачем.
Знайти максимальний серед парних елементів та мінімальний серед елементів з парними
індексами. В масиві поміняти місцями знайдені максимальний та мінімальний елементи,
надрукувати вхідний та вихідний масиви. Застосувати функції.
2. Виконати сортування вихідного масиву за зростанням методом вставки. Застосувати функції.
*/
function generateRandomArray(length, min = -20, max = 50, rng = Math.random) {
  if (!Number.isInteger(length) || length < 2) {
    throw new RangeError('Кількість елементів масиву має бути цілим числом >= 2.');
  }
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(Math.floor(rng() * (max - min + 1)) + min);
  }
  return result;
}

function findMaxEvenIndex(arr) {
  let maxIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (Number.isInteger(arr[i]) && arr[i] % 2 === 0) {
      if (maxIndex === -1 || arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }
  }
  return maxIndex;
}

function findMinAtEvenIndex(arr) {
  if (arr.length === 0) {
    return -1;
  }
  let minIndex = 0;
  for (let i = 2; i < arr.length; i += 2) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}

function swapMaxEvenAndMinAtEvenIndex(arr) {
  const inputArray = [...arr];
  const outputArray = [...arr];
  const maxEvenIndex = findMaxEvenIndex(inputArray);
  const minAtEvenIndex = findMinAtEvenIndex(inputArray);

  if (maxEvenIndex === -1) {
    return {
      inputArray,
      outputArray,
      maxEvenIndex: -1,
      maxEvenValue: null,
      minAtEvenIndex,
      minAtEvenIndexValue: minAtEvenIndex !== -1 ? inputArray[minAtEvenIndex] : null,
      swapped: false,
      warning: 'У масиві відсутні парні елементи, обмін не виконано.'
    };
  }

  const temp = outputArray[maxEvenIndex];
  outputArray[maxEvenIndex] = outputArray[minAtEvenIndex];
  outputArray[minAtEvenIndex] = temp;

  return {
    inputArray,
    outputArray,
    maxEvenIndex,
    maxEvenValue: inputArray[maxEvenIndex],
    minAtEvenIndex,
    minAtEvenIndexValue: inputArray[minAtEvenIndex],
    swapped: true,
    warning: null
  };
}

function insertionSort(arr) {
  const sorted = [...arr];
  for (let i = 1; i < sorted.length; i += 1) {
    const key = sorted[i];
    let j = i - 1;
    while (j >= 0 && sorted[j] > key) {
      sorted[j + 1] = sorted[j];
      j -= 1;
    }
    sorted[j + 1] = key;
  }
  return sorted;
}`,
      consoleOutput: [
        '=== Завдання 7 (Варіант 1) ===',
        'Вхідний масив (n=8): [18,-19,1,-15,2,-20,27,-5]',
        'Макс. парний елемент: 18 (індекс 0); Мін. на парному індексі: 1 (індекс 2)',
        'Вихідний масив після обміну: [1,-19,18,-15,2,-20,27,-5]',
        'Відсортований масив (Insertion Sort): [-20,-19,-15,-5,1,2,18,27]'
      ].join('\n'),
      screenshots: [
        {
          src: 'images/lab4/task7-console.png',
          alt: 'Результат виконання Завдання №7 у консолі браузера',
          caption: 'Рис. 7.1. Вхідний масив (n=8), обмін знайдених елементів і сортування методом вставки'
        }
      ]
    },
    {
      id: 'lab4-task8',
      number: 8,
      heading: 'ЗАВДАННЯ №8 (Непарні номери): двовимірний масив, поділ за знаком і заміна 3-го додатного',
      description:
        'Генерується матриця 4×4 із ненульових цілих чисел з інтервалу [-50, 50] (із гарантією наявності щонайменше 3 додатних чисел). Матриця розбивається на два одновимірні масиви (додатних та від’ємних чисел), а 3-й елемент додатного масиву (індекс 2) замінюється на строго від’ємне значення, введене через prompt().',
      code: `/*
Умова:
Є двовимірний масив додатніх і від’ємних чисел. (об’явити, проініціалізувати
генератором випадкових чисел). Вивести у Console браузера.
Створити два масива: масив додатніх чисел і масив від’ємних чисел.
Третій елемент у додатньому масиві заміни на від’ємне значення, яке буде введено
за допомогою prompt. Вивести у Console браузера.
*/
function generateRandomMatrix(rows = 4, cols = 4, min = -50, max = 50, rng = Math.random) {
  const matrix = [];
  let positiveCount = 0;

  for (let r = 0; r < rows; r += 1) {
    const row = [];
    for (let c = 0; c < cols; c += 1) {
      let val = Math.floor(rng() * (max - min + 1)) + min;
      if (val === 0) {
        val = max >= 1 ? 1 : -1;
      }
      if (val > 0) {
        positiveCount += 1;
      }
      row.push(val);
    }
    matrix.push(row);
  }

  // Гарантуємо щонайменше 3 додатних елементи для можливості заміни 3-го елемента
  for (let r = 0; r < rows && positiveCount < 3; r += 1) {
    for (let c = 0; c < cols && positiveCount < 3; c += 1) {
      if (matrix[r][c] < 0) {
        matrix[r][c] = Math.abs(matrix[r][c]);
        positiveCount += 1;
      }
    }
  }

  return matrix;
}

function splitMatrixAndReplaceThirdPositive(matrix, replacementValue) {
  const positive = [];
  const negative = [];

  for (const row of matrix) {
    for (const value of row) {
      if (value > 0) {
        positive.push(value);
      } else if (value < 0) {
        negative.push(value);
      }
    }
  }

  if (positive.length < 3) {
    return {
      ok: false,
      error: 'У масиві додатних чисел менше 3 елементів.',
      positive,
      negative,
      updatedPositive: null
    };
  }

  if (typeof replacementValue !== 'number' || !Number.isFinite(replacementValue) || replacementValue >= 0) {
    return {
      ok: false,
      error: 'Значення для заміни має бути суворо від’ємним числом (< 0).',
      positive,
      negative,
      updatedPositive: null
    };
  }

  const updatedPositive = [...positive];
  const replacedValue = updatedPositive[2];
  updatedPositive[2] = replacementValue;

  return {
    ok: true,
    positive,
    negative,
    updatedPositive,
    replacedValue,
    replacementValue,
    error: null
  };
}`,
      consoleOutput: [
        '=== Завдання 8 (2D-масив 4×4) ===',
        'Початковий двовимірний масив:',
        '  [38, -17, -39, -34]',
        '  [49, -15, 22, -34]',
        '  [17, -23, -29, -11]',
        '  [-4, -48, -38, 18]',
        'Масив додатних чисел (до заміни): [38,49,22,17,18]',
        'Масив від’ємних чисел: [-17,-39,-34,-15,-34,-23,-29,-11,-4,-48,-38]',
        'Замінено 3-й елемент (22) на -25',
        'Оновлений масив додатних чисел: [38,49,-25,17,18]',
        'Масив від’ємних чисел: [-17,-39,-34,-15,-34,-23,-29,-11,-4,-48,-38]'
      ].join('\n'),
      screenshots: [
        {
          src: 'images/lab4/task8-console.png',
          alt: 'Результат виконання Завдання №8 у консолі браузера',
          caption: 'Рис. 8.1. Генерація матриці 4×4, поділ за знаком і заміна 3-го додатного елемента на -25'
        }
      ]
    },
    {
      id: 'lab4-task9',
      number: 9,
      heading: 'ЗАВДАННЯ №9 (Варіант 1): валідація HTML-форми реєстрації користувача',
      description:
        'HTML-форма містить поля логіна (*), віку (*, ціле число), бюджету (дійсне число без *), дати (DD.MM.YYYY * з календарною перевіркою високосних років і кількості днів у місяці), пароля (*) та підтвердження пароля (*). Функція validateRegistrationForm повертає помилки по кожному полю і підсвічує їх у DOM.',
      code: `/*
Умова:
Валідація HTML-форми реєстрації користувача:
Забезпечити перевірку елементів HTML-форми таких видів: ціле число, дійсне число,
дата у форматі DD.MM.YYYY, однаковість даних у полях введення паролю (основне та
перевірочне). Крім того, забезпечити перевірку введення обов’язкових полів,
помічених (*).
*/
function isIntegerString(rawValue) {
  return /^[+-]?\\d+$/.test(String(rawValue).trim());
}

function isRealNumberString(rawValue) {
  return /^[+-]?(\\d+(\\.\\d+)?|\\.\\d+)$/.test(String(rawValue).trim());
}

function isValidDateDDMMYYYY(rawDate) {
  const trimmed = String(rawDate ?? '').trim();
  const match = /^(\\d{2})\\.(\\d{2})\\.(\\d{4})$/.exec(trimmed);
  if (!match) {
    return false;
  }
  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  if (year < 1 || month < 1 || month > 12 || day < 1) {
    return false;
  }
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day <= daysInMonth[month - 1];
}

function validateRegistrationForm(fields = {}) {
  const errors = {};
  const username = String(fields.username ?? '').trim();
  const age = String(fields.age ?? '').trim();
  const budget = String(fields.budget ?? '').trim();
  const birthDate = String(fields.birthDate ?? '').trim();
  const password = String(fields.password ?? '');
  const confirmPassword = String(fields.confirmPassword ?? '');

  if (username === '') {
    errors.username = 'Обов’язкове поле (*): введіть логін користувача.';
  }

  if (age === '') {
    errors.age = 'Обов’язкове поле (*): введіть ціле число.';
  } else if (!isIntegerString(age)) {
    errors.age = 'Введіть коректне ціле число (наприклад: 19).';
  }

  if (budget !== '' && !isRealNumberString(budget)) {
    errors.budget = 'Введіть коректне дійсне число (наприклад: 4500.50).';
  }

  if (birthDate === '') {
    errors.birthDate = 'Обов’язкове поле (*): введіть дату у форматі DD.MM.YYYY.';
  } else if (!isValidDateDDMMYYYY(birthDate)) {
    errors.birthDate = 'Некоректна дата. Використовуйте дійсну календарну дату DD.MM.YYYY.';
  }

  if (password.trim() === '') {
    errors.password = 'Обов’язкове поле (*): введіть пароль.';
  }

  if (confirmPassword.trim() === '') {
    errors.confirmPassword = 'Обов’язкове поле (*): підтвердьте пароль.';
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Паролі не співпадають.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}`,
      consoleOutput: [
        '=== Завдання 9: Помилки валідації === {"username":"Обов’язкове поле (*): введіть логін користувача.","age":"Введіть коректне ціле число (наприклад: 19).","budget":"Введіть коректне дійсне число (наприклад: 4500.50).","birthDate":"Некоректна дата. Використовуйте дійсну календарну дату DD.MM.YYYY.","confirmPassword":"Паролі не співпадають."}',
        '=== Завдання 9: Валідація успішна === Користувач: danilo_ic43, дата: 29.02.2024'
      ].join('\n'),
      screenshots: [
        {
          src: 'images/lab4/task9-validation-error.png',
          alt: 'Форма реєстрації з повідомленнями про помилки валідації',
          caption: 'Рис. 9.1. Перевірка порожніх обов’язкових полів (*), нецілого/недійсного числа, неіснуючої дати 31.02.2026 та незбігу паролів'
        },
        {
          src: 'images/lab4/task9-validation-success.png',
          alt: 'Форма реєстрації після проходження валідації',
          caption: 'Рис. 9.2. Успішне проходження валідації (зокрема високосної дати 29.02.2024)'
        }
      ]
    },
    {
      id: 'lab4-task10',
      number: 10,
      heading: 'ЗАВДАННЯ №10: вікно авторизації у власному вебзастосунку «MandryStay»',
      description:
        'У шапці платформи «MandryStay» додано кнопку «Увійти», яка відкриває модальне вікно авторизації у палітрі застосунку (#1E3A8A, #0284C7, #0F172A). Перевіряються обов’язкові поля, формат email або довжина логіна (від 3 символів без пробілів) і довжина пароля (від 6 символів). Підтримується закриття кнопкою «×», кліком по затемненому фону та клавішею Escape.',
      code: `/**
 * Модальне вікно авторизації для вебзастосунку «MandryStay»
 * Лабораторна робота №4 — Завдання №10 (Андронов Д. Ю., ІС-43)
 */

'use strict';

// Навчальні демонстраційні дані для перевірки авторизації (без реальних секретів)
const DEMO_AUTH_ACCOUNT = Object.freeze({
  identifier: 'demo@mandrystay.ua',
  password: 'mandry2026'
});

function validateAuthForm(fields = {}) {
  const errors = {};
  const normalizedIdentifier = String(fields.identifier ?? '').trim();
  const password = String(fields.password ?? '');

  if (normalizedIdentifier === '') {
    errors.identifier = 'Введіть email або логін.';
  } else if (normalizedIdentifier.includes('@')) {
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/;
    if (!emailPattern.test(normalizedIdentifier)) {
      errors.identifier = 'Некоректний формат email (приклад: name@mandrystay.ua).';
    }
  } else if (/\\s/.test(normalizedIdentifier)) {
    errors.identifier = 'Логін не повинен містити пробілів.';
  } else if (normalizedIdentifier.length < 3) {
    errors.identifier = 'Логін має містити щонайменше 3 символи.';
  }

  if (password.trim() === '') {
    errors.password = 'Введіть пароль.';
  } else if (password.length < 6) {
    errors.password = 'Пароль має містити щонайменше 6 символів.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    normalizedIdentifier
  };
}

function initAuthModal() {
  if (typeof document === 'undefined') {
    return;
  }

  const openBtn = document.getElementById('open-auth-modal-btn');
  const overlay = document.getElementById('auth-modal-overlay');
  const closeBtn = document.getElementById('auth-modal-close');
  const form = document.getElementById('auth-modal-form');
  const identifierInput = document.getElementById('auth-identifier');
  const passwordInput = document.getElementById('auth-password');
  const identifierError = document.getElementById('auth-err-identifier');
  const passwordError = document.getElementById('auth-err-password');
  const statusBanner = document.getElementById('auth-modal-status');
  const togglePassBtn = document.getElementById('auth-toggle-password');
  const fillDemoBtn = document.getElementById('auth-fill-demo-btn');

  if (!openBtn || !overlay || !form) {
    return;
  }

  const clearErrors = () => {
    [identifierInput, passwordInput].forEach((input) => {
      if (input) input.classList.remove('is-invalid', 'is-valid');
    });
    if (identifierError) identifierError.textContent = '';
    if (passwordError) passwordError.textContent = '';
    if (statusBanner) {
      statusBanner.className = 'auth-modal-status';
      statusBanner.textContent = '';
    }
  };

  const openModal = () => {
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    if (identifierInput) identifierInput.focus();
  };

  const closeModal = () => {
    overlay.hidden = true;
    document.body.style.overflow = '';
    openBtn.focus();
  };

  openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !overlay.hidden) closeModal();
  });

  if (togglePassBtn && passwordInput) {
    togglePassBtn.addEventListener('click', () => {
      const isHidden = passwordInput.type === 'password';
      passwordInput.type = isHidden ? 'text' : 'password';
      togglePassBtn.textContent = isHidden ? 'Сховати' : 'Показати';
    });
  }

  if (fillDemoBtn && identifierInput && passwordInput) {
    fillDemoBtn.addEventListener('click', () => {
      clearErrors();
      identifierInput.value = DEMO_AUTH_ACCOUNT.identifier;
      passwordInput.value = DEMO_AUTH_ACCOUNT.password;
      identifierInput.focus();
    });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrors();
    const identifier = identifierInput ? identifierInput.value : '';
    const password = passwordInput ? passwordInput.value : '';
    const result = validateAuthForm({ identifier, password });

    if (result.errors.identifier) {
      if (identifierInput) identifierInput.classList.add('is-invalid');
      if (identifierError) identifierError.textContent = result.errors.identifier;
    } else if (identifierInput) {
      identifierInput.classList.add('is-valid');
    }

    if (result.errors.password) {
      if (passwordInput) passwordInput.classList.add('is-invalid');
      if (passwordError) passwordError.textContent = result.errors.password;
    } else if (passwordInput) {
      passwordInput.classList.add('is-valid');
    }

    if (!result.isValid) {
      if (statusBanner) {
        statusBanner.className = 'auth-modal-status is-visible is-error';
        statusBanner.textContent = 'Перевірте коректність введених даних авторизації.';
      }
      console.log('MandryStay Auth — помилка валідації:', result.errors);
      return;
    }

    if (statusBanner) {
      statusBanner.className = 'auth-modal-status is-visible is-success';
      statusBanner.textContent = \`Вітаємо, \${result.normalizedIdentifier}! Авторизацію в MandryStay успішно виконано.\`;
    }
    openBtn.textContent = \`Гість: \${result.normalizedIdentifier}\`;
    openBtn.classList.add('is-authenticated');
    console.log(\`MandryStay Auth — успішний вхід користувача: \${result.normalizedIdentifier}\`);
  });
}`,
      consoleOutput: [
        'MandryStay Auth — помилка валідації: {"identifier":"Некоректний формат email (приклад: name@mandrystay.ua).","password":"Пароль має містити щонайменше 6 символів."}',
        'MandryStay Auth — успішний вхід користувача: demo@mandrystay.ua'
      ].join('\n'),
      screenshots: [
        {
          src: 'images/lab4/task10-auth-error.png',
          alt: 'Вікно авторизації MandryStay із помилками валідації',
          caption: 'Рис. 10.1. Відображення помилок валідації email та довжини пароля у модальному вікні «MandryStay»'
        },
        {
          src: 'images/lab4/task10-auth-success.png',
          alt: 'Успішна авторизація у модальному вікні MandryStay',
          caption: 'Рис. 10.2. Успішний вхід під демо-профілем demo@mandrystay.ua'
        }
      ]
    }
  ],
  conclusions: [
    'У цій лабораторній роботі ми реалізували десять практичних завдань засобами JavaScript, поєднавши базову алгоритмічну логіку, роботу з масивами та інтерактивну взаємодію з HTML-документом.',
    'У першій групі сценаріїв (завдання 1–3) застосовано діалогові вікна prompt() і alert(), шаблонні рядки для логування у Console, умовні розгалуження з перевіркою на null і некоректні рядки, а також конструкцію switch-case із гілкою default. Для демонстрації функцій і циклів у завданнях 4–6 створено чисті функції makeTransaction, checkForSpam (незалежний від регістру пошук слів spam і sale) та filterArray, які не змінюють вхідні масиви.',
    'У завданнях 7 та 8 за Варіантом 1 виконано обмін максимального парного елемента та мінімального елемента з парним індексом у згенерованому масиві з 8 елементів і відсортовано масив за зростанням методом вставки від -20 до 27, а також розбито матрицю 4×4 (5 додатних і 11 від’ємних ненульових чисел) із заміною третього додатного елемента на введене від’ємне значення -25.',
    'У завданнях 9 та 10 створено JS-валідацію HTML-форми реєстрації з перевіркою обов’язкових полів (*), цілого числа, дійсного числа, календарної коректності дати DD.MM.YYYY (включно з високосною датою 29.02.2024 і відхиленням 31.02.2026) та збігу паролів, а також модальне вікно авторизації для платформи «MandryStay» із закриттям через кнопку, фон і клавішу Escape. Загальна коректність усіх модулів підтверджена 23 модульними тестами в Node.js та перевіркою сценаріїв у браузері Chrome.',
    'Отже, завдання лабораторної роботи №4 виконано в повному обсязі: код ізольований у чисті функції з коментарями умов та протестований у браузері й тестовому середовищі.'
  ],
  controlQuestions: [
    {
      q: '1. Які основні способи підключення JavaScript до HTML-документа?',
      a: 'JavaScript підключають двома основними способами: внутрішнім (вбудований код безпосередньо між відкривальним і закривальним тегами <script>...</script> у HTML-документі) та зовнішнім (окремий файл .js через атрибут src: <script defer src="js/lesson-4.js"></script>). Для складних проєктів обирають зовнішні файли, оскільки браузер кешує їх і повторно використовує на різних сторінках.'
    },
    {
      q: '2. Для чого використовується тег <script> в HTML?',
      a: 'Тег <script> призначений для вставлення виконуваного JavaScript-коду або підключення зовнішнього файлу скрипту до HTML-сторінки. За допомогою атрибутів defer або async можна керувати завантаженням і моментом виконання зовнішнього скрипту відносно побудови DOM-дерева.'
    },
    {
      q: '3. Які типи даних підтримує JavaScript?',
      a: 'JavaScript підтримує 7 примітивних типів даних (number, bigint, string, boolean, undefined, null, symbol) і 1 складний посилальний тип object (до якого належать звичайні об’єкти, масиви та функції). Оператор typeof null історично повертає "object", хоча null є окремим примітивним значенням.'
    },
    {
      q: '4. Що таке змінна та які ключові слова використовуються для її оголошення?',
      a: 'Змінна є іменованим сховищем для збереження даних у пам’яті програми. Для оголошення використовуються ключові слова const (константа з блочною областю видимості, посилання якої не можна переприсвоїти), let (змінна з блочною областю видимості, значення якої можна змінювати) та застаріле var (має функціональну область видимості і підлягає підняттю hoisting).'
    },
    {
      q: '5. Що таке шаблонні рядки (Template Literals) і як вони створюються?',
      a: 'Шаблонні рядки (Template Literals) є сучасним способом створення рядків у стандарті ES6, який підтримує багаторядковість та інтерполяцію виразів. Вони створюються шляхом обгортання тексту у зворотні лапки (`...`) замість одинарних або подвійних.'
    },
    {
      q: '6. Для чого використовуються зворотні лапки (`) у шаблонних рядках?',
      a: 'Зворотні лапки (`) позначають початок і кінець шаблонного рядка, дозволяючи зберігати переноси рядків без символів \\n та розпізнавати конструкції підстановки ${...} всередині тексту.'
    },
    {
      q: '7. Як здійснюється підстановка значень змінних і виразів у шаблонні рядки?',
      a: 'Підстановка (інтерполяція) виконується через синтаксис ${вираз} усередині зворотних лапок, наприклад: `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`. Усередині фігурних дужок можна вказувати змінні, виклики функцій або довільні арифметичні чи тернарні вирази.'
    },
    {
      q: '8. Що таке оператори в JavaScript та які їх основні категорії?',
      a: 'Оператори є спеціальними символами або ключовими словами, які виконують операції над операндами і повертають результат. Основні категорії: арифметичні (+, -, *, /, %, **), присвоєння (=, +=, -=), порівняння (===, !==, >, <, >=, <=), логічні (&&, ||, !), унарні (typeof, ++, --, !) та тернарний оператор (умова ? а : б).'
    },
    {
      q: '9. Який пріоритет виконання арифметичних операторів у JavaScript?',
      a: 'Арифметичні оператори виконуються у порядку зменшення пріоритету: спочатку унарні оператори та піднесення до степеня (**), далі множення (*), ділення (/) і остача від ділення (%) зліва направо, і наприкінці додавання (+) та віднімання (-) зліва направо.'
    },
    {
      q: '10. Для чого використовуються круглі дужки у виразах і як вони впливають на порядок обчислень?',
      a: 'Круглі дужки групування (...) мають найвищий пріоритет виконання в JavaScript. Вони примусово змінюють стандартний порядок обчислень, змушуючи інтерпретатор спочатку обчислити вираз усередині дужок, і підвищують читабельність складних формул або логічних умов.'
    },
    {
      q: '11. Що таке масив у JavaScript і як його оголосити?',
      a: 'Масив є впорядкованою колекцією елементів довільних типів, які зберігаються під спільним іменем. Найчастіше масив оголошують за допомогою квадратних дужок (літералу масиву), наприклад: const numbers = [1, 2, 3]; або порожній масив const items = []; (рідше через конструктор new Array()).'
    },
    {
      q: '12. Як отримати доступ до окремого елемента масиву за його індексом?',
      a: 'Для доступу до елемента після імені масиву в квадратних дужках зазначають його числовий індекс: array[index]. Якщо індекс виходить за межі масиву (наприклад, від’ємний або >= array.length), вираз поверне undefined.'
    },
    {
      q: '13. З якого числа починається індексація елементів масиву?',
      a: 'Індексація елементів масиву в JavaScript завжди починається з нуля (0). Перший елемент має індекс 0, другий має індекс 1, а останній елемент розташований за індексом array.length - 1.'
    },
    {
      q: '14. Як визначити кількість елементів масиву?',
      a: 'Кількість елементів масиву визначається через вбудовану властивість length: array.length. Для порожнього масиву значення length дорівнює 0, і ця властивість автоматично оновлюється при додаванні чи видаленні елементів.'
    },
    {
      q: '15. Які способи додавання та видалення елементів масиву ви знаєте?',
      a: 'Для додавання та видалення елементів з кінця використовують push() та pop(), з початку використовують unshift() та shift(), а для довільної позиції (вставки, заміни або видалення за індексом) застосовують метод splice(). Для створення нового зміненого масиву без мутації оригіналу застосовують spread-синтаксис [...arr, item], slice(), filter() або concat().'
    },
    {
      q: '16. Для чого використовуються методи push() і pop()?',
      a: 'Метод push(item1, ...) додає один або кілька елементів у кінець масиву і повертає нову довжину масиву. Метод pop() видаляє останній елемент масиву і повертає саме видалений елемент (або undefined, якщо масив порожній).'
    },
    {
      q: '17. У чому полягає відмінність між методами shift() і unshift()?',
      a: 'Метод shift() видаляє перший елемент на початку масиву, зсуває решту індексів вліво і повертає видалений елемент. Метод unshift(item1, ...) додає один або кілька елементів на початок масиву, зсуває наявні елементи вправо і повертає нову довжину масиву.'
    },
    {
      q: '18. Яке призначення методів slice() і splice() та чим вони відрізняються?',
      a: 'Метод slice(start, end) не змінює вихідний масив, а повертає його поверхневу копію від індексу start до end (не включно). Метод splice(start, deleteCount, ...items) мутує вихідний масив, видаляючи deleteCount елементів з позиції start і вставляючи замість них нові елементи, та повертає масив видалених елементів.'
    },
    {
      q: '19. Для чого використовуються методи indexOf() і includes()?',
      a: 'Обидва методи перевіряють наявність значення в масиві або рядку. Метод indexOf(value) повертає перший індекс знайденого елемента або -1, якщо елемент не знайдено, а метод includes(value) повертає булеве значення true або false (і на відміну від indexOf коректно знаходить NaN).'
    },
    {
      q: '20. Що таке функція в JavaScript і яке її призначення?',
      a: 'Функція є іменованим або анонімним фрагментом програмного коду, до якого можна звертатися багаторазово з різних частин програми. Вона дозволяє усунути дублювання коду, розбити складне завдання на логічні кроки та ізолювати локальні змінні.'
    },
    {
      q: '21. Які способи оголошення функцій існують у JavaScript?',
      a: 'Основні способи оголошення функцій: оголошення функції (Function Declaration: function name() {}), функціональний вираз (Function Expression: const fn = function() {}) та стрілкова функція (Arrow Function: const fn = () => {}). Також функції можуть оголошуватися як методи об’єкта або класу.'
    },
    {
      q: '22. Що таке параметри та аргументи функції?',
      a: 'Параметри є локальними змінними, переліченими в круглих дужках під час оголошення функції для опису очікуваних вхідних даних. Аргументи є конкретними значеннями або виразами, які передаються функції під час її виклику.'
    },
    {
      q: '23. Для чого використовується оператор return?',
      a: 'Оператор return завершує виконання функції та повертає вказане значення у місце виклику функції. Код у тілі функції після return не виконується; якщо оператор return відсутній або викликаний без значення, функція повертає undefined.'
    },
    {
      q: '24. Що таке стрілкова функція (Arrow Function) і які особливості її синтаксису?',
      a: 'Стрілкова функція є скороченим синтаксисом ES6 із використанням стрілки => замість слова function. Якщо тіло складається з одного виразу без фігурних дужок, відбувається неявне повернення значення (implicit return); для одного параметра дужки можна опускати. Стрілкові функції не мають власного контексту this і псевдомасиву arguments.'
    },
    {
      q: '25. Що таке область видимості змінних у JavaScript?',
      a: 'Область видимості (Scope) визначає частину програмного коду, у межах якої оголошений ідентифікатор (змінна, константа або функція) доступний для використання. Розрізняють глобальну область видимості (доступну всюди у скрипті) та локальну: функціональну (для var і параметрів функції) та блочну (для let і const усередині фігурних дужок { ... }).'
    },
    {
      q: '26. У чому полягає різниця між функціональним виразом і Function Declaration?',
      a: 'Function Declaration оголошується через function name() {} як окрема інструкція і підлягає підняттю (hoisting), тож таку функцію можна викликати в коді ще до рядка її оголошення. Function Expression створюється як вираз і присвоюється у змінну (const fn = function() {}), не піднімається і доступна для виклику лише після рядка ініціалізації.'
    },
    {
      q: '27. Що таке callback-функція та в яких випадках вона використовується?',
      a: 'Callback-функція (функція зворотного виклику) передається іншій функції (функції вищого порядку) як аргумент і викликається всередині неї. Колбеки використовують для обробки подій DOM (addEventListener), перебираючих методів масивів (forEach, map, filter), таймерів (setTimeout) і асинхронних операцій.'
    },
    {
      q: '28. Які переваги використання функцій і методів масивів під час розроблення програм?',
      a: 'Використання функцій та методів масивів робить код модульним, декларативним і читабельним, спрощує повторне використання логіки та тестування окремих частин програми. Чисті функції та вбудовані методи (filter, map, slice, includes) зменшують кількість ручних циклів і помилок через небажані мутації даних.'
    }
  ]
};

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderLab4SubtabsHTML() {
  return [
    '<div id="lab4-subtabs" class="subtabs-group" style="display: none;">',
    ...LAB4_RECORD_DATA.subtabs.map((tab, index) => {
      const activeClass = index === 0 ? ' active' : '';
      return `    <button class="subtab-pill${activeClass}" data-target="${escapeHtml(tab.target)}">${escapeHtml(tab.label)}</button>`;
    }),
    '</div>'
  ].join('\n');
}

function renderLab4SectionsHTML() {
  const linksHtml = LAB4_RECORD_DATA.links
    .map(
      (item) => `        <li>
            <strong>${escapeHtml(item.group)}:</strong><br>
            &bull; ${escapeHtml(item.repoLabel)}: <a href="${escapeHtml(item.repoUrl)}" target="_blank">${escapeHtml(item.repoUrl)}</a><br>
            &bull; ${escapeHtml(item.liveLabel)}: <a href="${escapeHtml(item.liveUrl)}" target="_blank">${escapeHtml(item.liveUrl)}</a>
        </li>`
    )
    .join('\n');

  const topicSection = `<section id="lab4-topic" class="tab-content">
    <h2>${escapeHtml(LAB4_RECORD_DATA.title)}</h2>
    <div class="info-card">
        <p><strong>Тема:</strong> ${escapeHtml(LAB4_RECORD_DATA.topic)}</p>
        <p><strong>Мета:</strong> ${escapeHtml(LAB4_RECORD_DATA.goal)}</p>
        <p><strong>Варіант:</strong> ${escapeHtml(LAB4_RECORD_DATA.variantInfo)}</p>
    </div>

    <h3>Місце розташування проєктів та живих сторінок:</h3>
    <div class="links-card">
        <ul>
${linksHtml}
        </ul>
    </div>
</section>`;

  const taskSections = LAB4_RECORD_DATA.tasks
    .map((task) => {
      const figures = task.screenshots
        .map(
          (shot) => `    <figure style="margin: 15px 0; text-align: center;">
        <img src="${escapeHtml(shot.src)}" alt="${escapeHtml(shot.alt)}" style="max-width: 100%; height: auto; border: 1px solid #cbd5e1; border-radius: 8px;">
        <figcaption style="font-size: 13px; color: #64748b; margin-top: 6px;">${escapeHtml(shot.caption)}</figcaption>
    </figure>`
        )
        .join('\n');

      return `<section id="${escapeHtml(task.id)}" class="tab-content">
    <h2>${escapeHtml(task.heading)}</h2>
    <div class="info-card">
        <p>${escapeHtml(task.description)}</p>
    </div>

    <h3>Програмний код:</h3>
    <div class="code-container">
<pre>${escapeHtml(task.code)}</pre>
    </div>

    <h3>Результат виконання (Console / DOM):</h3>
    <div class="code-container">
<pre>${escapeHtml(task.consoleOutput)}</pre>
    </div>
${figures}
</section>`;
    })
    .join('\n\n');

  const conclusionsHtml = `<section id="lab4-conclusions" class="tab-content">
    <h2>Висновки до Лабораторної роботи №4</h2>
    <div class="info-card">
${LAB4_RECORD_DATA.conclusions.map((p) => `        <p>${escapeHtml(p)}</p>`).join('\n')}
    </div>
</section>`;

  const questionsHtml = `<section id="lab4-questions" class="tab-content">
    <h2>Контрольні запитання до Лабораторної роботи №4</h2>
${LAB4_RECORD_DATA.controlQuestions
    .map(
      (item) => `    <div style="margin-bottom: 18px;">
        <h3>${escapeHtml(item.q)}</h3>
        <p>${escapeHtml(item.a)}</p>
    </div>`
    )
    .join('\n')}
</section>`;

  return [topicSection, taskSections, conclusionsHtml, questionsHtml].join('\n\n');
}

if (typeof window !== 'undefined') {
  window.LAB4_RECORD_DATA = LAB4_RECORD_DATA;
  window.renderLab4SubtabsHTML = renderLab4SubtabsHTML;
  window.renderLab4SectionsHTML = renderLab4SectionsHTML;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    LAB4_RECORD_DATA,
    escapeHtml,
    renderLab4SubtabsHTML,
    renderLab4SectionsHTML
  };
}
