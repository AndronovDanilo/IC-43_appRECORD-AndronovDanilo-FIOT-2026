/**
 * Дані та HTML-рендерер для вкладки «Лабораторна робота №4» у звітному порталі appRECORD
 * (IC-43_appRECORD-AndronovDanilo-FIOT-2026)
 *
 * Студент: Андронов Данило Юрійович, група ІС-43, №1 у списку (Варіант 1)
 */

'use strict';

const LAB4_RECORD_DATA = {
  "labNumber": 4,
  "title": "Лабораторна робота №4",
  "topic": "ОСНОВИ JAVASCRIPT У HTML-ДОКУМЕНТІ. ШАБЛОНІ РЯДКИ. КЕРУВАННЯ ПОРЯДКОМ ОБЧИСЛЕНЬ. МАСИВИ. МЕТОДИ МАСИВІВ. ФУНКЦІЇ",
  "goal": "Придбати практичні навички роботи з конструкціями мови JavaScript, шаблонними рядками, масивами, функціями та валідацією HTML-форм, а також створити вікно авторизації у власному вебзастосунку.",
  "variantInfo": "Студент групи ІС-43 Андронов Данило, номер у списку: 1 (непарні номери для завдань 1–6, 8; Варіант 1 для завдань 7, 9).",
  "links": [
    {
      "group": "1. Власний WEB-застосунок («MandryStay»)",
      "repoLabel": "Репозиторій на GitHub (appWEB)",
      "repoUrl": "https://github.com/AndronovDanilo/IC-43_appWEB-AndronovDanilo-FIOT-2026",
      "liveLabel": "Жива сторінка на GitHub Pages (appWEB)",
      "liveUrl": "https://andronovdanilo.github.io/IC-43_appWEB-AndronovDanilo-FIOT-2026/"
    },
    {
      "group": "2. Звітний HTML-документ (appRECORD)",
      "repoLabel": "Репозиторій на GitHub (appRECORD)",
      "repoUrl": "https://github.com/AndronovDanilo/IC-43_appRECORD-AndronovDanilo-FIOT-2026",
      "liveLabel": "Жива сторінка на GitHub Pages (appRECORD)",
      "liveUrl": "https://andronovdanilo.github.io/IC-43_appRECORD-AndronovDanilo-FIOT-2026/"
    },
    {
      "group": "3. WEB-застосунок із JS-завданнями (LR_IC-43_Andronov)",
      "repoLabel": "Репозиторій на GitHub (LR_IC-43_Andronov)",
      "repoUrl": "https://github.com/AndronovDanilo/LR_IC-43_Andronov",
      "liveLabel": "Жива сторінка на GitHub Pages (LR_IC-43_Andronov — lab4.html)",
      "liveUrl": "https://andronovdanilo.github.io/LR_IC-43_Andronov/lab4.html"
    }
  ],
  "subtabs": [
    {
      "target": "lab4-topic",
      "label": "Тема, мета, місце розташування сайту, звіту"
    },
    {
      "target": "lab4-task1",
      "label": "ЗАВДАННЯ №1 (prompt, alert, Console)"
    },
    {
      "target": "lab4-task2",
      "label": "ЗАВДАННЯ №2 (switch-case)"
    },
    {
      "target": "lab4-task3",
      "label": "ЗАВДАННЯ №3 (Ідентифікація Admin/User)"
    },
    {
      "target": "lab4-task4",
      "label": "ЗАВДАННЯ №4 (makeTransaction)"
    },
    {
      "target": "lab4-task5",
      "label": "ЗАВДАННЯ №5 (checkForSpam)"
    },
    {
      "target": "lab4-task6",
      "label": "ЗАВДАННЯ №6 (filterArray)"
    },
    {
      "target": "lab4-task7",
      "label": "ЗАВДАННЯ №7 (Масив та Insertion Sort)"
    },
    {
      "target": "lab4-task8",
      "label": "ЗАВДАННЯ №8 (2D-масив чисел)"
    },
    {
      "target": "lab4-task9",
      "label": "ЗАВДАННЯ №9 (Валідація форми реєстрації)"
    },
    {
      "target": "lab4-task10",
      "label": "ЗАВДАННЯ №10 (Авторизація у MandryStay)"
    },
    {
      "target": "lab4-conclusions",
      "label": "ВИСНОВКИ до ЛР №4"
    },
    {
      "target": "lab4-questions",
      "label": "Контрольні запитання (28)"
    }
  ],
  "tasks": [
    {
      "id": "lab4-task1",
      "number": 1,
      "heading": "ЗАВДАННЯ №1 (Непарні номери): класифікація числа через prompt() і alert()",
      "description": "На сторінці lab4.html користувач вводить значення через prompt(), воно зберігається у змінну value та виводиться у DevTools Console шаблонним рядком. Функція classifyNumber перевіряє скасування (null), порожній рядок, нечисловий ввід і знак числа, після чого виводить повідомлення через alert().",
      "code": "/*\nУмова:\nЗбережіть введене значення (використати метод prompt()) у змінну value.\nВивести це значення у Console, використовуючи шаблонний рядок.\nПеревірити: введене значення від’ємне? Додатнє? Дорівнює нулю?\nВідповідь вивести за допомогою alert().\nНаприклад: при введенні 80 виведе «Число додатнє».\nПідказка: При введенні значень не забудьте зробити ряд перевірок.\n*/\nfunction classifyNumber(rawValue) {\n  if (rawValue === null) {\n    return 'Введення скасовано';\n  }\n  const trimmed = String(rawValue ?? '').trim();\n  if (trimmed === '') {\n    return 'Помилка: введіть коректне число';\n  }\n  const numericValue = Number(trimmed);\n  if (!Number.isFinite(numericValue)) {\n    return 'Помилка: введіть коректне число';\n  }\n  if (numericValue > 0) return 'Число додатнє';\n  if (numericValue < 0) return 'Число від’ємне';\n  return 'Число дорівнює нулю';\n}\n\nfunction runTask1(\n  promptFn = (msg) => globalThis.prompt(msg),\n  alertFn = (msg) => globalThis.alert(msg)\n) {\n  const value = promptFn('Завдання 1: Введіть число:');\n  console.log(`Завдання 1 — введене значення: ${value}`);\n  const message = classifyNumber(value);\n  console.log(`Завдання 1 — результат: ${message}`);\n  alertFn(message);\n  return { value, message };\n}",
      "consoleOutput": "Завдання 1 — введене значення: 80\nЗавдання 1 — результат: Число додатнє\nЗавдання 1 — введене значення: -15\nЗавдання 1 — результат: Число від’ємне\nЗавдання 1 — введене значення: 0\nЗавдання 1 — результат: Число дорівнює нулю\nЗавдання 1 — введене значення: \nЗавдання 1 — результат: Помилка: введіть коректне число",
      "screenshots": [
        {
          "src": "images/lab4/task1-console.png",
          "alt": "Результат виконання Завдання №1 у консолі браузера",
          "caption": "Рис. 1.1. Вивід у консоль результатів перевірки чисел для Завдання №1"
        }
      ]
    },
    {
      "id": "lab4-task2",
      "number": 2,
      "heading": "ЗАВДАННЯ №2 (Непарні номери): визначення пори року через switch-case",
      "description": "Значення змінної number ('1', '2', '3' або '4') зчитується через prompt() і передається у конструкцію switch-case для запису назви пори року в змінну result. Для будь-яких інших значень спрацьовує гілка default.",
      "code": "/*\nУмова:\nЗмінна number може набувати 4 значення: '1', '2', '3' або '4' (запитуй це значення\nу користувача через prompt). Якщо вона має значення '1', то у змінну result\nзапишіть 'зима', якщо має значення '2' - 'весна' і так далі.\nРозв'яжіть завдання через switch-case. Не забудьте про дефолтне значення, на випадок,\nякщо користувач введе в prompt щось інше. Значення змінної result виведіть в консоль.\n*/\nfunction getSeason(number) {\n  const normalized = typeof number === 'string' ? number.trim() : number;\n  let result;\n  switch (normalized) {\n    case '1':\n      result = 'зима';\n      break;\n    case '2':\n      result = 'весна';\n      break;\n    case '3':\n      result = 'літо';\n      break;\n    case '4':\n      result = 'осінь';\n      break;\n    default:\n      result = 'Невірне значення. Введіть 1, 2, 3 або 4.';\n      break;\n  }\n  return result;\n}\n\nfunction runTask2(\n  promptFn = (msg) => globalThis.prompt(msg),\n  alertFn = (msg) => globalThis.alert(msg)\n) {\n  const number = promptFn(\"Завдання 2: Введіть значення number ('1', '2', '3' або '4'):\");\n  const result = getSeason(number);\n  console.log(`Завдання 2 — number=${number} → result: ${result}`);\n  if (typeof alertFn === 'function') {\n    alertFn(`Пора року: ${result}`);\n  }\n  return { number, result };\n}",
      "consoleOutput": "Завдання 2 — number=1 → result: зима\nЗавдання 2 — number=2 → result: весна\nЗавдання 2 — number=3 → result: літо\nЗавдання 2 — number=4 → result: осінь\nЗавдання 2 — number=9 → result: Невірне значення. Введіть 1, 2, 3 або 4.",
      "screenshots": [
        {
          "src": "images/lab4/task2-console.png",
          "alt": "Результат виконання Завдання №2 у консолі браузера",
          "caption": "Рис. 2.1. Перевірка всіх чотирьох гілок switch-case і гілки default"
        }
      ]
    },
    {
      "id": "lab4-task3",
      "number": 3,
      "heading": "ЗАВДАННЯ №3 (Непарні номери): ідентифікація користувачів Admin та User",
      "description": "Для облікових записів Admin (пароль admin123) та User (пароль user123) виконується запит логіна через prompt(), вивід логіна в консоль шаблонним рядком і перевірка пароля або вивід повідомлень Cancelled, Wrong password чи I don't know you через alert().",
      "code": "/*\nУмова:\nЄ Admin та User, з відповідними паролями. (Об’явити, проініцілізувати)\nНаписати програмний код, який запитуватиме у користувача логін (використати prompt)\nі виводить результат в консоль браузера, використовуючи шаблонний рядок.\nПісля цього додайте перевірку введеного користувачем значення: якщо відвідувач вводить\n\"Admin\", то prompt запитує пароль. У випадку вдалої ідентифікації в alert вивести\n«Hello, Admin»; якщо нічого не ввели або натиснули Cancel, то вивести в alert рядок\n\"Cancelled\"; в іншому випадку вивести в alert рядок \"I don't know you\".\nТеж саме виконати з User.\n*/\nconst DEMO_USERS = Object.freeze({\n  Admin: 'admin123',\n  User: 'user123'\n});\n\nfunction authenticateUser(login, password) {\n  const normalizedLogin = login == null ? '' : String(login).trim();\n  if (normalizedLogin === '') {\n    return 'Cancelled';\n  }\n  if (!Object.hasOwn(DEMO_USERS, normalizedLogin)) {\n    return \"I don't know you\";\n  }\n  if (password === undefined) {\n    return 'NEED_PASSWORD';\n  }\n  if (password === null || String(password).trim() === '') {\n    return 'Cancelled';\n  }\n  return String(password) === DEMO_USERS[normalizedLogin]\n    ? `Hello, ${normalizedLogin}`\n    : 'Wrong password';\n}\n\nfunction runTask3(\n  promptFn = (msg) => globalThis.prompt(msg),\n  alertFn = (msg) => globalThis.alert(msg)\n) {\n  const login = promptFn('Завдання 3: Введіть логін (Admin або User):');\n  console.log(`Завдання 3 — введений логін: ${login}`);\n\n  let message = authenticateUser(login);\n  if (message === 'NEED_PASSWORD') {\n    const password = promptFn(`Введіть пароль для ${String(login).trim()}:`);\n    message = authenticateUser(login, password);\n  }\n\n  console.log(`Завдання 3 — результат: ${message}`);\n  alertFn(message);\n  return { login, message };\n}",
      "consoleOutput": "Завдання 3 — введений логін: Admin\nЗавдання 3 — результат: Hello, Admin\nЗавдання 3 — введений логін: User\nЗавдання 3 — результат: Hello, User\nЗавдання 3 — введений логін: Guest\nЗавдання 3 — результат: I don't know you\nЗавдання 3 — введений логін: null\nЗавдання 3 — результат: Cancelled",
      "screenshots": [
        {
          "src": "images/lab4/task3-console.png",
          "alt": "Результат виконання Завдання №3 у консолі браузера",
          "caption": "Рис. 3.1. Вивід результатів перевірки логіна Admin, User, невідомого логіна та скасування"
        }
      ]
    },
    {
      "id": "lab4-task4",
      "number": 4,
      "heading": "ЗАВДАННЯ №4 (Непарні номери): функція makeTransaction(quantity, pricePerDroid)",
      "description": "Функція приймає кількість дроїдів і ціну одного дроїда, обчислює загальну вартість замовлення totalPrice та повертає шаблонний рядок із підсумком покупки.",
      "code": "/*\nУмова:\nСтанція з продажу ремонтних дроїдів. Оголоси функцію makeTransaction, яка очікує\nдва параметри, значення яких будуть задаватися під час її виклику:\n• quantity — перший параметр, число, що містить кількість замовлених дроїдів\n• pricePerDroid — другий параметр, число, що містить вартість одного дроїда\nНапиши код функції так, щоб вона повертала рядок з повідомленням про покупку\nремонтних дроїдів: \"You ordered <quantity> droids worth <totalPrice> credits!\", де:\n• <quantity> — це кількість замовлених дроїдів\n• <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів.\n*/\nfunction makeTransaction(quantity, pricePerDroid) {\n  const totalPrice = quantity * pricePerDroid;\n  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;\n}\n\nfunction demoTask4() {\n  console.log('=== Завдання 4: makeTransaction ===');\n  console.log('makeTransaction(5, 3000) ->', makeTransaction(5, 3000));\n  console.log('makeTransaction(3, 1000) ->', makeTransaction(3, 1000));\n  console.log('makeTransaction(10, 500) ->', makeTransaction(10, 500));\n}",
      "consoleOutput": "=== Завдання 4: makeTransaction ===\nmakeTransaction(5, 3000) -> You ordered 5 droids worth 15000 credits!\nmakeTransaction(3, 1000) -> You ordered 3 droids worth 3000 credits!\nmakeTransaction(10, 500) -> You ordered 10 droids worth 5000 credits!",
      "screenshots": [
        {
          "src": "images/lab4/task4-console.png",
          "alt": "Результат виконання Завдання №4 у консолі браузера",
          "caption": "Рис. 4.1. Тестові виклики функції makeTransaction у консолі"
        }
      ]
    },
    {
      "id": "lab4-task5",
      "number": 5,
      "heading": "ЗАВДАННЯ №5 (Непарні номери): функція checkForSpam(message)",
      "description": "Функція приводить вхідний рядок до нижнього регістру методом toLowerCase() і методом includes() перевіряє наявність заборонених слів spam або sale незалежно від регістру.",
      "code": "/*\nУмова:\nФункція checkForSpam(message) приймає рядок (параметр message), перевіряє його на\nвміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку\nпараметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.\nДоповни код функції таким чином, що:\nЯкщо знайдено заборонене слово (spam або sale), то функція повертає буль true.\nЯкщо в рядку відсутні заборонені слова, функція повертає буль false.\n*/\nfunction checkForSpam(message) {\n  const lower = String(message).toLowerCase();\n  return lower.includes('spam') || lower.includes('sale');\n}\n\nfunction demoTask5() {\n  console.log('=== Завдання 5: checkForSpam ===');\n  const samples = [\n    'Latest technology news',\n    'JavaScript weekly newsletter',\n    'Get best sale offers now!',\n    'Amazing SalE, only tonight!',\n    'Trust me, this is not a spam message',\n    'Get rid of sPaM emails. Our book in on sale!',\n    '[SPAM] How to earn fast money?'\n  ];\n  for (const text of samples) {\n    console.log(`\"${text}\" -> ${checkForSpam(text)}`);\n  }\n}",
      "consoleOutput": "=== Завдання 5: checkForSpam ===\n\"Latest technology news\" -> false\n\"JavaScript weekly newsletter\" -> false\n\"Get best sale offers now!\" -> true\n\"Amazing SalE, only tonight!\" -> true\n\"Trust me, this is not a spam message\" -> true\n\"Get rid of sPaM emails. Our book in on sale!\" -> true\n\"[SPAM] How to earn fast money?\" -> true",
      "screenshots": [
        {
          "src": "images/lab4/task5-console.png",
          "alt": "Результат виконання Завдання №5 у консолі браузера",
          "caption": "Рис. 5.1. Перевірка рядків на наявність слів spam та sale у різному регістрі"
        }
      ]
    },
    {
      "id": "lab4-task6",
      "number": 6,
      "heading": "ЗАВДАННЯ №6 (Непарні номери): функція filterArray(numbers, value)",
      "description": "Функція створює порожній масив filteredNumbers, перебирає елементи вхідного масиву циклом for і додає методом push() лише ті числа, які строго більші за поріг value.",
      "code": "/*\nУмова:\nНапиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та\nзначення (value) як параметри. Функція повинна повертати новий масив лише тих чисел\nіз масиву numbers, які більші за значення value.\nУсередині функції:\n• Створи порожній масив, у який будеш додавати підходящі числа.\n• Використай цикл для ітерації кожного елемента масиву numbers.\n• Використовуй умовний оператор if усередині циклу для перевірки кожного елемента\n  і додавання до свого масиву.\n• Поверни свій новий масив з підходящими числами як результат.\n*/\nfunction filterArray(numbers, value) {\n  const filteredNumbers = [];\n  for (let i = 0; i < numbers.length; i += 1) {\n    if (numbers[i] > value) {\n      filteredNumbers.push(numbers[i]);\n    }\n  }\n  return filteredNumbers;\n}\n\nfunction demoTask6() {\n  console.log('=== Завдання 6: filterArray ===');\n  const cases = [\n    [[1, 2, 3, 4, 5], 3],\n    [[1, 2, 3, 4, 5], 4],\n    [[1, 2, 3, 4, 5], 5],\n    [[12, 24, 8, 41, 76], 38],\n    [[12, 24, 8, 41, 76], 20]\n  ];\n  for (const [numbers, value] of cases) {\n    console.log(`filterArray(${JSON.stringify(numbers)}, ${value}) ->`, filterArray(numbers, value));\n  }\n}",
      "consoleOutput": "=== Завдання 6: filterArray ===\nfilterArray([1,2,3,4,5], 3) -> [4, 5]\nfilterArray([1,2,3,4,5], 4) -> [5]\nfilterArray([1,2,3,4,5], 5) -> []\nfilterArray([12,24,8,41,76], 38) -> [41, 76]\nfilterArray([12,24,8,41,76], 20) -> [24, 41, 76]",
      "screenshots": [
        {
          "src": "images/lab4/task6-console.png",
          "alt": "Результат виконання Завдання №6 у консолі браузера",
          "caption": "Рис. 6.1. Фільтрація масивів чисел функцією filterArray"
        }
      ]
    },
    {
      "id": "lab4-task7",
      "number": 7,
      "heading": "ЗАВДАННЯ №7 (Варіант 1): обмін елементів масиву та сортування методом вставки",
      "description": "Програма запитує довжину масиву n (перевірка n >= 2), генерує випадкові цілі числа з [-20, 50], окремими функціями знаходить максимальний серед парних елементів і мінімальний серед елементів із парними індексами (0, 2, 4, ...), міняє їх місцями та сортує вихідний масив за зростанням методом вставки (Insertion Sort).",
      "code": "/*\nУмова:\n1. Створити одновимірний масив, кількість елементів якого задана користувачем.\nЗнайти максимальний серед парних елементів та мінімальний серед елементів з парними\nіндексами. В масиві поміняти місцями знайдені максимальний та мінімальний елементи,\nнадрукувати вхідний та вихідний масиви. Застосувати функції.\n2. Виконати сортування вихідного масиву за зростанням методом вставки. Застосувати функції.\n*/\nfunction generateRandomArray(length, min = -20, max = 50, rng = Math.random) {\n  if (!Number.isInteger(length) || length < 2) {\n    throw new RangeError('Кількість елементів масиву має бути цілим числом >= 2.');\n  }\n  const result = [];\n  for (let i = 0; i < length; i += 1) {\n    result.push(Math.floor(rng() * (max - min + 1)) + min);\n  }\n  return result;\n}\n\nfunction findMaxEvenIndex(arr) {\n  let maxIndex = -1;\n  for (let i = 0; i < arr.length; i += 1) {\n    if (Number.isInteger(arr[i]) && arr[i] % 2 === 0) {\n      if (maxIndex === -1 || arr[i] > arr[maxIndex]) {\n        maxIndex = i;\n      }\n    }\n  }\n  return maxIndex;\n}\n\nfunction findMinAtEvenIndex(arr) {\n  if (arr.length === 0) return -1;\n  let minIndex = 0;\n  for (let i = 2; i < arr.length; i += 2) {\n    if (arr[i] < arr[minIndex]) {\n      minIndex = i;\n    }\n  }\n  return minIndex;\n}\n\nfunction swapMaxEvenAndMinAtEvenIndex(arr) {\n  const inputArray = [...arr];\n  const outputArray = [...arr];\n  const maxEvenIndex = findMaxEvenIndex(inputArray);\n  const minAtEvenIndex = findMinAtEvenIndex(inputArray);\n\n  if (maxEvenIndex === -1) {\n    return {\n      inputArray,\n      outputArray,\n      maxEvenIndex: -1,\n      minAtEvenIndex,\n      swapped: false,\n      warning: 'У масиві відсутні парні елементи, обмін не виконано.'\n    };\n  }\n\n  [outputArray[maxEvenIndex], outputArray[minAtEvenIndex]] = [\n    outputArray[minAtEvenIndex],\n    outputArray[maxEvenIndex]\n  ];\n\n  return {\n    inputArray,\n    outputArray,\n    maxEvenIndex,\n    minAtEvenIndex,\n    swapped: true,\n    warning: null\n  };\n}\n\nfunction insertionSort(arr) {\n  const sorted = [...arr];\n  for (let i = 1; i < sorted.length; i += 1) {\n    const key = sorted[i];\n    let j = i - 1;\n    while (j >= 0 && sorted[j] > key) {\n      sorted[j + 1] = sorted[j];\n      j -= 1;\n    }\n    sorted[j + 1] = key;\n  }\n  return sorted;\n}\n\nfunction runTask7(\n  promptFn = (msg, def) => globalThis.prompt(msg, def),\n  alertFn = (msg) => globalThis.alert(msg),\n  rng = Math.random\n) {\n  const rawLength = promptFn('Завдання 7: Введіть кількість елементів масиву (ціле число >= 2):', '8');\n  if (rawLength === null) {\n    console.log('Завдання 7 — введення скасовано користувачем.');\n    return null;\n  }\n  const trimmed = String(rawLength).trim();\n  if (!/^\\d+$/.test(trimmed) || Number(trimmed) < 2) {\n    const errMsg = 'Помилка: введіть ціле число >= 2.';\n    console.log(`Завдання 7 — ${errMsg}`);\n    alertFn(errMsg);\n    return null;\n  }\n\n  const length = Number(trimmed);\n  const generated = generateRandomArray(length, -20, 50, rng);\n  const swapRes = swapMaxEvenAndMinAtEvenIndex(generated);\n  const sortedArray = insertionSort(swapRes.outputArray);\n\n  console.log('=== Завдання 7 (Варіант 1) ===');\n  console.log(`Вхідний масив (n=${length}):`, swapRes.inputArray);\n  if (swapRes.warning) {\n    console.log(`Попередження: ${swapRes.warning}`);\n  } else {\n    console.log(\n      `Макс. парний елемент: ${swapRes.inputArray[swapRes.maxEvenIndex]} (індекс ${swapRes.maxEvenIndex}); ` +\n        `Мін. на парному індексі: ${swapRes.inputArray[swapRes.minAtEvenIndex]} (індекс ${swapRes.minAtEvenIndex})`\n    );\n  }\n  console.log('Вихідний масив після обміну:', swapRes.outputArray);\n  console.log('Відсортований масив (Insertion Sort):', sortedArray);\n\n  return { ...swapRes, sortedArray };\n}",
      "consoleOutput": "=== Завдання 7 (Варіант 1) ===\nВхідний масив (n=8): [11, 49, 1, 1, 4, -4, 36, 41]\nМакс. парний елемент: 36 (індекс 6); Мін. на парному індексі: 1 (індекс 2)\nВихідний масив після обміну: [11, 49, 36, 1, 4, -4, 1, 41]\nВідсортований масив (Insertion Sort): [-4, 1, 1, 4, 11, 36, 41, 49]",
      "screenshots": [
        {
          "src": "images/lab4/task7-console.png",
          "alt": "Результат виконання Завдання №7 у консолі браузера",
          "caption": "Рис. 7.1. Вхідний масив (n=8), обмін знайдених елементів і сортування методом вставки"
        }
      ]
    },
    {
      "id": "lab4-task8",
      "number": 8,
      "heading": "ЗАВДАННЯ №8 (Непарні номери): двовимірний масив, поділ за знаком і заміна 3-го додатного",
      "description": "Генерується матриця 4×4 із ненульових цілих чисел з інтервалу [-50, 50] (із гарантією наявності щонайменше 3 додатних чисел). Матриця розбивається на два одновимірні масиви (додатних та від’ємних чисел), а 3-й елемент додатного масиву (індекс 2) замінюється на строго від’ємне значення, введене через prompt().",
      "code": "/*\nУмова:\nЄ двовимірний масив додатніх і від’ємних чисел. (об’явити, проініціалізувати\nгенератором випадкових чисел). Вивести у Console браузера.\nСтворити два масива: масив додатніх чисел і масив від’ємних чисел.\nТретій елемент у додатньому масиві заміни на від’ємне значення, яке буде введено\nза допомогою prompt. Вивести у Console браузера.\n*/\nfunction generateRandomMatrix(rows = 4, cols = 4, min = -50, max = 50, rng = Math.random) {\n  const matrix = [];\n  let positiveCount = 0;\n\n  for (let r = 0; r < rows; r += 1) {\n    const row = [];\n    for (let c = 0; c < cols; c += 1) {\n      let val = Math.floor(rng() * (max - min + 1)) + min;\n      if (val === 0) val = max >= 1 ? 1 : -1;\n      if (val > 0) positiveCount += 1;\n      row.push(val);\n    }\n    matrix.push(row);\n  }\n\n  // Гарантуємо щонайменше 3 додатних числа для заміни 3-го елемента\n  for (let r = 0; r < rows && positiveCount < 3; r += 1) {\n    for (let c = 0; c < cols && positiveCount < 3; c += 1) {\n      if (matrix[r][c] < 0) {\n        matrix[r][c] = Math.abs(matrix[r][c]);\n        positiveCount += 1;\n      }\n    }\n  }\n\n  return matrix;\n}\n\nfunction splitMatrixBySign(matrix) {\n  const positive = [];\n  const negative = [];\n  for (const row of matrix) {\n    for (const value of row) {\n      if (value > 0) positive.push(value);\n      else if (value < 0) negative.push(value);\n    }\n  }\n  return { positive, negative };\n}\n\nfunction splitMatrixAndReplaceThirdPositive(matrix, replacementValue) {\n  const { positive, negative } = splitMatrixBySign(matrix);\n\n  if (positive.length < 3) {\n    return {\n      ok: false,\n      error: 'У масиві додатних чисел менше 3 елементів.',\n      positive,\n      negative,\n      updatedPositive: null\n    };\n  }\n\n  if (typeof replacementValue !== 'number' || !Number.isFinite(replacementValue) || replacementValue >= 0) {\n    return {\n      ok: false,\n      error: 'Значення для заміни має бути суворо від’ємним числом (< 0).',\n      positive,\n      negative,\n      updatedPositive: null\n    };\n  }\n\n  const updatedPositive = [...positive];\n  const replacedValue = updatedPositive[2];\n  updatedPositive[2] = replacementValue;\n\n  return {\n    ok: true,\n    positive,\n    negative,\n    updatedPositive,\n    replacedValue,\n    replacementValue,\n    error: null\n  };\n}\n\nfunction runTask8(\n  promptFn = (msg, def) => globalThis.prompt(msg, def),\n  alertFn = (msg) => globalThis.alert(msg),\n  rng = Math.random\n) {\n  const matrix = generateRandomMatrix(4, 4, -50, 50, rng);\n  const { positive, negative } = splitMatrixBySign(matrix);\n\n  console.log('=== Завдання 8 (2D-масив 4×4) ===');\n  console.log(`Початковий двовимірний масив:\\n${matrix.map((row) => `  [${row.join(', ')}]`).join('\\n')}`);\n  console.log('Масив додатних чисел (до заміни):', positive);\n  console.log('Масив від’ємних чисел:', negative);\n\n  const rawReplacement = promptFn(\n    'Завдання 8: Введіть від’ємне число (< 0) для заміни 3-го елемента додатного масиву:',\n    '-25'\n  );\n  if (rawReplacement === null) {\n    console.log('Завдання 8 — заміну скасовано користувачем.');\n    return null;\n  }\n\n  const trimmed = String(rawReplacement).trim();\n  const numericValue = trimmed === '' ? Number.NaN : Number(trimmed);\n  const result = splitMatrixAndReplaceThirdPositive(matrix, numericValue);\n\n  if (!result.ok) {\n    console.log(`Завдання 8 — помилка: ${result.error}`);\n    alertFn(result.error);\n    return result;\n  }\n\n  console.log(`Замінено 3-й елемент (${result.replacedValue}) на ${result.replacementValue}`);\n  console.log('Оновлений масив додатних чисел:', result.updatedPositive);\n  console.log('Масив від’ємних чисел:', result.negative);\n  return result;\n}",
      "consoleOutput": "=== Завдання 8 (2D-масив 4×4) ===\nПочатковий двовимірний масив:\n  [-4, 43, 15, 22]\n  [7, 22, 43, 11]\n  [19, -27, 4, 37]\n  [-21, -33, -26, -49]\nМасив додатних чисел (до заміни): [43, 15, 22, 7, 22, 43, 11, 19, 4, 37]\nМасив від’ємних чисел: [-4, -27, -21, -33, -26, -49]\nЗамінено 3-й елемент (22) на -25\nОновлений масив додатних чисел: [43, 15, -25, 7, 22, 43, 11, 19, 4, 37]\nМасив від’ємних чисел: [-4, -27, -21, -33, -26, -49]",
      "screenshots": [
        {
          "src": "images/lab4/task8-console.png",
          "alt": "Результат виконання Завдання №8 у консолі браузера",
          "caption": "Рис. 8.1. Генерація матриці 4×4, поділ за знаком і заміна 3-го додатного елемента на -25"
        }
      ]
    },
    {
      "id": "lab4-task9",
      "number": 9,
      "heading": "ЗАВДАННЯ №9 (Варіант 1): валідація HTML-форми реєстрації користувача",
      "description": "HTML-форма містить поля логіна (*), віку (*, ціле число), бюджету (дійсне число без *), дати (DD.MM.YYYY * з календарною перевіркою високосних років і кількості днів у місяці), пароля (*) та підтвердження пароля (*). Функція validateRegistrationForm повертає помилки по кожному полю і підсвічує їх у DOM.",
      "code": "<!-- HTML-форма реєстрації (lab4.html) -->\n<form id=\"registration-form\" class=\"reg-form\" novalidate>\n        <div class=\"form-group\">\n          <label for=\"reg-username\">Логін користувача <span class=\"required-mark\">*</span></label>\n          <input type=\"text\" id=\"reg-username\" name=\"username\" placeholder=\"Наприклад: danilo_ic43\" autocomplete=\"username\">\n          <span class=\"field-error\" id=\"err-username\" role=\"alert\"></span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"reg-age\">Вік (ціле число) <span class=\"required-mark\">*</span></label>\n          <input type=\"text\" id=\"reg-age\" name=\"age\" placeholder=\"Наприклад: 19\" inputmode=\"numeric\">\n          <span class=\"field-error\" id=\"err-age\" role=\"alert\"></span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"reg-budget\">Бюджет подорожі, грн (дійсне число)</label>\n          <input type=\"text\" id=\"reg-budget\" name=\"budget\" placeholder=\"Наприклад: 4500.50\" inputmode=\"decimal\">\n          <span class=\"field-error\" id=\"err-budget\" role=\"alert\"></span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"reg-birthdate\">Дата реєстрації / народження (DD.MM.YYYY) <span class=\"required-mark\">*</span></label>\n          <input type=\"text\" id=\"reg-birthdate\" name=\"birthDate\" placeholder=\"Наприклад: 29.02.2024\">\n          <span class=\"field-error\" id=\"err-birthDate\" role=\"alert\"></span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"reg-password\">Пароль <span class=\"required-mark\">*</span></label>\n          <input type=\"password\" id=\"reg-password\" name=\"password\" placeholder=\"Введіть пароль\" autocomplete=\"new-password\">\n          <span class=\"field-error\" id=\"err-password\" role=\"alert\"></span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"reg-confirm-password\">Підтвердження пароля <span class=\"required-mark\">*</span></label>\n          <input type=\"password\" id=\"reg-confirm-password\" name=\"confirmPassword\" placeholder=\"Повторіть пароль\" autocomplete=\"new-password\">\n          <span class=\"field-error\" id=\"err-confirmPassword\" role=\"alert\"></span>\n        </div>\n\n        <div class=\"form-actions\">\n          <button type=\"submit\" class=\"btn btn-primary\">Зареєструватися та перевірити</button>\n          <button type=\"reset\" class=\"btn btn-secondary\" id=\"btn-reset-reg\">Очистити форму</button>\n        </div>\n\n        <div id=\"reg-form-status\" class=\"form-status\" role=\"status\" aria-live=\"polite\"></div>\n      </form>\n\n/*\nУмова:\nВалідація HTML-форми реєстрації користувача:\nЗабезпечити перевірку елементів HTML-форми таких видів: ціле число, дійсне число,\nдата у форматі DD.MM.YYYY, однаковість даних у полях введення паролю (основне та\nперевірочне). Крім того, забезпечити перевірку введення обов’язкових полів,\nпомічених (*).\n*/\nfunction isIntegerString(rawValue) {\n  return /^[+-]?\\d+$/.test(String(rawValue).trim());\n}\n\nfunction isRealNumberString(rawValue) {\n  return /^[+-]?(\\d+(\\.\\d+)?|\\.\\d+)$/.test(String(rawValue).trim());\n}\n\nfunction isValidDateDDMMYYYY(rawDate) {\n  const match = /^(\\d{2})\\.(\\d{2})\\.(\\d{4})$/.exec(String(rawDate ?? '').trim());\n  if (!match) return false;\n\n  const day = Number(match[1]);\n  const month = Number(match[2]);\n  const year = Number(match[3]);\n  if (year < 1 || month < 1 || month > 12 || day < 1) return false;\n\n  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;\n  const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];\n  return day <= daysInMonth[month - 1];\n}\n\nfunction validateRegistrationForm(fields = {}) {\n  const errors = {};\n  const username = String(fields.username ?? '').trim();\n  const age = String(fields.age ?? '').trim();\n  const budget = String(fields.budget ?? '').trim();\n  const birthDate = String(fields.birthDate ?? '').trim();\n  const password = String(fields.password ?? '');\n  const confirmPassword = String(fields.confirmPassword ?? '');\n\n  if (username === '') {\n    errors.username = 'Обов’язкове поле (*): введіть логін користувача.';\n  }\n\n  if (age === '') {\n    errors.age = 'Обов’язкове поле (*): введіть ціле число.';\n  } else if (!isIntegerString(age)) {\n    errors.age = 'Введіть коректне ціле число (наприклад: 19).';\n  }\n\n  if (budget !== '' && !isRealNumberString(budget)) {\n    errors.budget = 'Введіть коректне дійсне число (наприклад: 4500.50).';\n  }\n\n  if (birthDate === '') {\n    errors.birthDate = 'Обов’язкове поле (*): введіть дату у форматі DD.MM.YYYY.';\n  } else if (!isValidDateDDMMYYYY(birthDate)) {\n    errors.birthDate = 'Некоректна дата. Використовуйте дійсну календарну дату DD.MM.YYYY.';\n  }\n\n  if (password.trim() === '') {\n    errors.password = 'Обов’язкове поле (*): введіть пароль.';\n  }\n\n  if (confirmPassword.trim() === '') {\n    errors.confirmPassword = 'Обов’язкове поле (*): підтвердьте пароль.';\n  } else if (confirmPassword !== password) {\n    errors.confirmPassword = 'Паролі не співпадають.';\n  }\n\n  return {\n    isValid: Object.keys(errors).length === 0,\n    errors\n  };\n}",
      "consoleOutput": "=== Завдання 9: Помилки валідації === { username: \"Обов’язкове поле (*): введіть логін користувача.\", age: \"Введіть коректне ціле число (наприклад: 19).\", budget: \"Введіть коректне дійсне число (наприклад: 4500.50).\", birthDate: \"Некоректна дата. Використовуйте дійсну календарну дату DD.MM.YYYY.\", confirmPassword: \"Паролі не співпадають.\" }\n=== Завдання 9: Валідація успішна === Користувач: danilo_ic43, дата: 29.02.2024",
      "screenshots": [
        {
          "src": "images/lab4/task9-validation-error.png",
          "alt": "Форма реєстрації з повідомленнями про помилки валідації",
          "caption": "Рис. 9.1. Перевірка порожніх обов’язкових полів (*), нецілого/недійсного числа, неіснуючої дати 31.02.2026 та незбігу паролів"
        },
        {
          "src": "images/lab4/task9-validation-success.png",
          "alt": "Форма реєстрації після проходження валідації",
          "caption": "Рис. 9.2. Успішне проходження валідації (зокрема високосної дати 29.02.2024)"
        }
      ]
    },
    {
      "id": "lab4-task10",
      "number": 10,
      "heading": "ЗАВДАННЯ №10: вікно авторизації у власному вебзастосунку «MandryStay»",
      "description": "У шапці платформи «MandryStay» додано кнопку «Увійти», яка відкриває модальне вікно авторизації у палітрі застосунку (#1E3A8A, #0284C7, #0F172A). Перевіряються обов’язкові поля, формат email або довжина логіна (від 3 символів без пробілів) і довжина пароля (від 6 символів). Підтримується закриття кнопкою «×», кліком по затемненому фону та клавішею Escape.",
      "code": "/**\n * Модальне вікно авторизації для вебзастосунку «MandryStay»\n * Лабораторна робота №4 — Завдання №10 (Андронов Д. Ю., ІС-43)\n */\n\n'use strict';\n\n// Навчальні демонстраційні дані для перевірки авторизації (без реальних секретів)\nconst DEMO_AUTH_ACCOUNT = Object.freeze({\n  identifier: 'demo@mandrystay.ua',\n  password: 'mandry2026'\n});\n\nfunction validateAuthForm(fields = {}) {\n  const errors = {};\n  const normalizedIdentifier = String(fields.identifier ?? '').trim();\n  const password = String(fields.password ?? '');\n\n  if (normalizedIdentifier === '') {\n    errors.identifier = 'Введіть email або логін.';\n  } else if (normalizedIdentifier.includes('@')) {\n    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/;\n    if (!emailPattern.test(normalizedIdentifier)) {\n      errors.identifier = 'Некоректний формат email (приклад: name@mandrystay.ua).';\n    }\n  } else if (/\\s/.test(normalizedIdentifier)) {\n    errors.identifier = 'Логін не повинен містити пробілів.';\n  } else if (normalizedIdentifier.length < 3) {\n    errors.identifier = 'Логін має містити щонайменше 3 символи.';\n  }\n\n  if (password.trim() === '') {\n    errors.password = 'Введіть пароль.';\n  } else if (password.length < 6) {\n    errors.password = 'Пароль має містити щонайменше 6 символів.';\n  }\n\n  return {\n    isValid: Object.keys(errors).length === 0,\n    errors,\n    normalizedIdentifier\n  };\n}\n\nfunction initAuthModal() {\n  if (typeof document === 'undefined') {\n    return;\n  }\n\n  const openBtn = document.getElementById('open-auth-modal-btn');\n  const overlay = document.getElementById('auth-modal-overlay');\n  const closeBtn = document.getElementById('auth-modal-close');\n  const form = document.getElementById('auth-modal-form');\n  const identifierInput = document.getElementById('auth-identifier');\n  const passwordInput = document.getElementById('auth-password');\n  const identifierError = document.getElementById('auth-err-identifier');\n  const passwordError = document.getElementById('auth-err-password');\n  const statusBanner = document.getElementById('auth-modal-status');\n  const togglePassBtn = document.getElementById('auth-toggle-password');\n  const fillDemoBtn = document.getElementById('auth-fill-demo-btn');\n\n  if (!openBtn || !overlay || !form) {\n    return;\n  }\n\n  const clearErrors = () => {\n    [identifierInput, passwordInput].forEach((input) => {\n      if (input) input.classList.remove('is-invalid', 'is-valid');\n    });\n    if (identifierError) identifierError.textContent = '';\n    if (passwordError) passwordError.textContent = '';\n    if (statusBanner) {\n      statusBanner.className = 'auth-modal-status';\n      statusBanner.textContent = '';\n    }\n  };\n\n  const openModal = () => {\n    overlay.hidden = false;\n    document.body.style.overflow = 'hidden';\n    if (identifierInput) {\n      identifierInput.focus();\n    }\n  };\n\n  const closeModal = () => {\n    overlay.hidden = true;\n    document.body.style.overflow = '';\n    openBtn.focus();\n  };\n\n  openBtn.addEventListener('click', openModal);\n\n  if (closeBtn) {\n    closeBtn.addEventListener('click', closeModal);\n  }\n\n  overlay.addEventListener('click', (event) => {\n    if (event.target === overlay) {\n      closeModal();\n    }\n  });\n\n  document.addEventListener('keydown', (event) => {\n    if (event.key === 'Escape' && !overlay.hidden) {\n      closeModal();\n    }\n  });\n\n  if (togglePassBtn && passwordInput) {\n    togglePassBtn.addEventListener('click', () => {\n      const isHidden = passwordInput.type === 'password';\n      passwordInput.type = isHidden ? 'text' : 'password';\n      togglePassBtn.textContent = isHidden ? 'Сховати' : 'Показати';\n    });\n  }\n\n  if (fillDemoBtn && identifierInput && passwordInput) {\n    fillDemoBtn.addEventListener('click', () => {\n      clearErrors();\n      identifierInput.value = DEMO_AUTH_ACCOUNT.identifier;\n      passwordInput.value = DEMO_AUTH_ACCOUNT.password;\n      identifierInput.focus();\n    });\n  }\n\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n    clearErrors();\n\n    const identifier = identifierInput ? identifierInput.value : '';\n    const password = passwordInput ? passwordInput.value : '';\n    const result = validateAuthForm({ identifier, password });\n\n    if (result.errors.identifier) {\n      if (identifierInput) identifierInput.classList.add('is-invalid');\n      if (identifierError) identifierError.textContent = result.errors.identifier;\n    } else if (identifierInput) {\n      identifierInput.classList.add('is-valid');\n    }\n\n    if (result.errors.password) {\n      if (passwordInput) passwordInput.classList.add('is-invalid');\n      if (passwordError) passwordError.textContent = result.errors.password;\n    } else if (passwordInput) {\n      passwordInput.classList.add('is-valid');\n    }\n\n    if (!result.isValid) {\n      if (statusBanner) {\n        statusBanner.className = 'auth-modal-status is-visible is-error';\n        statusBanner.textContent = 'Перевірте коректність введених даних авторизації.';\n      }\n      console.log('MandryStay Auth — помилка валідації:', result.errors);\n      return;\n    }\n\n    if (statusBanner) {\n      statusBanner.className = 'auth-modal-status is-visible is-success';\n      statusBanner.textContent = `Вітаємо, ${result.normalizedIdentifier}! Авторизацію в MandryStay успішно виконано.`;\n    }\n    openBtn.textContent = `Гість: ${result.normalizedIdentifier}`;\n    openBtn.classList.add('is-authenticated');\n    console.log(`MandryStay Auth — успішний вхід користувача: ${result.normalizedIdentifier}`);\n  });\n}",
      "consoleOutput": "MandryStay Auth — помилка валідації: {\"identifier\":\"Некоректний формат email (приклад: name@mandrystay.ua).\",\"password\":\"Пароль має містити щонайменше 6 символів.\"}\nMandryStay Auth — успішний вхід користувача: demo@mandrystay.ua",
      "screenshots": [
        {
          "src": "images/lab4/task10-auth-error.png",
          "alt": "Вікно авторизації MandryStay із помилками валідації",
          "caption": "Рис. 10.1. Відображення помилок валідації email та довжини пароля у модальному вікні «MandryStay»"
        },
        {
          "src": "images/lab4/task10-auth-success.png",
          "alt": "Успішна авторизація у модальному вікні MandryStay",
          "caption": "Рис. 10.2. Успішний вхід під демо-профілем demo@mandrystay.ua"
        }
      ]
    }
  ],
  "conclusions": [
    "У цій лабораторній роботі реалізовано десять практичних завдань засобами JavaScript: базову алгоритмічну логіку, роботу з масивами та інтерактивну взаємодію з HTML-документом (lab4.html та IC-43_appWEB-AndronovDanilo-FIOT-2026/index.html).",
    "У завданнях 1–3 застосовано діалогові вікна prompt() і alert(), шаблонні рядки для виводу у DevTools Console, перевірки на null і некоректні рядки, а також конструкцію switch-case із гілкою default. У завданнях 4–6 створено чисті функції makeTransaction, checkForSpam (незалежний від регістру пошук слів spam і sale) та filterArray.",
    "У завданнях 7 та 8 за Варіантом 1 виконано обмін максимального парного елемента (36) та мінімального елемента з парним індексом (1) у згенерованому масиві [11, 49, 1, 1, 4, -4, 36, 41] і відсортовано масив за зростанням методом вставки від -4 до 49, а також розбито матрицю 4×4 (10 додатних і 6 від’ємних ненульових чисел) із заміною третього додатного елемента (22) на введене від’ємне значення -25.",
    "У завданнях 9 та 10 створено JS-валідацію HTML-форми реєстрації з перевіркою обов’язкових полів (*), цілого числа, дійсного числа, календарної коректності дати DD.MM.YYYY (включно з високосною датою 29.02.2024 і відхиленням 31.02.2026) та збігу паролів, а також модальне вікно авторизації для платформи «MandryStay» із закриттям через кнопку, фон і клавішу Escape. Коректність усіх модулів підтверджена 25 модульними тестами в Node.js та перевіркою у браузері Chrome.",
    "Отже, завдання лабораторної роботи №4 виконано в повному обсязі: код ізольований у чисті функції з коментарями умов та протестований у DevTools Console й тестовому середовищі."
  ],
  "controlQuestions": [
    {
      "q": "1. Які основні способи підключення JavaScript до HTML-документа?",
      "a": "JavaScript підключають двома основними способами: внутрішнім (вбудований код безпосередньо між відкривальним і закривальним тегами <script>...</script> у HTML-документі) та зовнішнім (окремий файл .js через атрибут src: <script defer src=\"js/lesson-4.js\"></script>). Для складних проєктів обирають зовнішні файли, оскільки браузер кешує їх і повторно використовує на різних сторінках."
    },
    {
      "q": "2. Для чого використовується тег <script> в HTML?",
      "a": "Тег <script> призначений для вставлення виконуваного JavaScript-коду або підключення зовнішнього файлу скрипту до HTML-сторінки. За допомогою атрибутів defer або async можна керувати завантаженням і моментом виконання зовнішнього скрипту відносно побудови DOM-дерева."
    },
    {
      "q": "3. Які типи даних підтримує JavaScript?",
      "a": "JavaScript підтримує 7 примітивних типів даних (number, bigint, string, boolean, undefined, null, symbol) і 1 складний посилальний тип object (до якого належать звичайні об’єкти, масиви та функції). Оператор typeof null історично повертає \"object\", хоча null є окремим примітивним значенням."
    },
    {
      "q": "4. Що таке змінна та які ключові слова використовуються для її оголошення?",
      "a": "Змінна є іменованим сховищем для збереження даних у пам’яті програми. Для оголошення використовуються ключові слова const (константа з блочною областю видимості, посилання якої не можна переприсвоїти), let (змінна з блочною областю видимості, значення якої можна змінювати) та застаріле var (має функціональну область видимості і підлягає підняттю hoisting)."
    },
    {
      "q": "5. Що таке шаблонні рядки (Template Literals) і як вони створюються?",
      "a": "Шаблонні рядки (Template Literals) є сучасним способом створення рядків у стандарті ES6, який підтримує багаторядковість та інтерполяцію виразів. Вони створюються шляхом обгортання тексту у зворотні лапки (`...`) замість одинарних або подвійних."
    },
    {
      "q": "6. Для чого використовуються зворотні лапки (`) у шаблонних рядках?",
      "a": "Зворотні лапки (`) позначають початок і кінець шаблонного рядка, дозволяючи зберігати переноси рядків без символів \\n та розпізнавати конструкції підстановки ${...} всередині тексту."
    },
    {
      "q": "7. Як здійснюється підстановка значень змінних і виразів у шаблонні рядки?",
      "a": "Підстановка (інтерполяція) виконується через синтаксис ${вираз} усередині зворотних лапок, наприклад: `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`. Усередині фігурних дужок можна вказувати змінні, виклики функцій або довільні арифметичні чи тернарні вирази."
    },
    {
      "q": "8. Що таке оператори в JavaScript та які їх основні категорії?",
      "a": "Оператори є спеціальними символами або ключовими словами, які виконують операції над операндами і повертають результат. Основні категорії: арифметичні (+, -, *, /, %, **), присвоєння (=, +=, -=), порівняння (===, !==, >, <, >=, <=), логічні (&&, ||, !), унарні (typeof, ++, --, !) та тернарний оператор (умова ? а : б)."
    },
    {
      "q": "9. Який пріоритет виконання арифметичних операторів у JavaScript?",
      "a": "Арифметичні оператори виконуються у порядку зменшення пріоритету: спочатку унарні оператори та піднесення до степеня (**), далі множення (*), ділення (/) і остача від ділення (%) зліва направо, і наприкінці додавання (+) та віднімання (-) зліва направо."
    },
    {
      "q": "10. Для чого використовуються круглі дужки у виразах і як вони впливають на порядок обчислень?",
      "a": "Круглі дужки групування (...) мають найвищий пріоритет виконання в JavaScript. Вони примусово змінюють стандартний порядок обчислень, змушуючи інтерпретатор спочатку обчислити вираз усередині дужок, і підвищують читабельність складних формул або логічних умов."
    },
    {
      "q": "11. Що таке масив у JavaScript і як його оголосити?",
      "a": "Масив є впорядкованою колекцією елементів довільних типів, які зберігаються під спільним іменем. Найчастіше масив оголошують за допомогою квадратних дужок (літералу масиву), наприклад: const numbers = [1, 2, 3]; або порожній масив const items = []; (рідше через конструктор new Array())."
    },
    {
      "q": "12. Як отримати доступ до окремого елемента масиву за його індексом?",
      "a": "Для доступу до елемента після імені масиву в квадратних дужках зазначають його числовий індекс: array[index]. Якщо індекс виходить за межі масиву (наприклад, від’ємний або >= array.length), вираз поверне undefined."
    },
    {
      "q": "13. З якого числа починається індексація елементів масиву?",
      "a": "Індексація елементів масиву в JavaScript завжди починається з нуля (0). Перший елемент має індекс 0, другий має індекс 1, а останній елемент розташований за індексом array.length - 1."
    },
    {
      "q": "14. Як визначити кількість елементів масиву?",
      "a": "Кількість елементів масиву визначається через вбудовану властивість length: array.length. Для порожнього масиву значення length дорівнює 0, і ця властивість автоматично оновлюється при додаванні чи видаленні елементів."
    },
    {
      "q": "15. Які способи додавання та видалення елементів масиву ви знаєте?",
      "a": "Для додавання та видалення елементів з кінця використовують push() та pop(), з початку використовують unshift() та shift(), а для довільної позиції (вставки, заміни або видалення за індексом) застосовують метод splice(). Для створення нового зміненого масиву без мутації оригіналу застосовують spread-синтаксис [...arr, item], slice(), filter() або concat()."
    },
    {
      "q": "16. Для чого використовуються методи push() і pop()?",
      "a": "Метод push(item1, ...) додає один або кілька елементів у кінець масиву і повертає нову довжину масиву. Метод pop() видаляє останній елемент масиву і повертає саме видалений елемент (або undefined, якщо масив порожній)."
    },
    {
      "q": "17. У чому полягає відмінність між методами shift() і unshift()?",
      "a": "Метод shift() видаляє перший елемент на початку масиву, зсуває решту індексів вліво і повертає видалений елемент. Метод unshift(item1, ...) додає один або кілька елементів на початок масиву, зсуває наявні елементи вправо і повертає нову довжину масиву."
    },
    {
      "q": "18. Яке призначення методів slice() і splice() та чим вони відрізняються?",
      "a": "Метод slice(start, end) не змінює вихідний масив, а повертає його поверхневу копію від індексу start до end (не включно). Метод splice(start, deleteCount, ...items) мутує вихідний масив, видаляючи deleteCount елементів з позиції start і вставляючи замість них нові елементи, та повертає масив видалених елементів."
    },
    {
      "q": "19. Для чого використовуються методи indexOf() і includes()?",
      "a": "Обидва методи перевіряють наявність значення в масиві або рядку. Метод indexOf(value) повертає перший індекс знайденого елемента або -1, якщо елемент не знайдено, а метод includes(value) повертає булеве значення true або false (і на відміну від indexOf коректно знаходить NaN)."
    },
    {
      "q": "20. Що таке функція в JavaScript і яке її призначення?",
      "a": "Функція є іменованим або анонімним фрагментом програмного коду, до якого можна звертатися багаторазово з різних частин програми. Вона дозволяє усунути дублювання коду, розбити складне завдання на логічні кроки та ізолювати локальні змінні."
    },
    {
      "q": "21. Які способи оголошення функцій існують у JavaScript?",
      "a": "Основні способи оголошення функцій: оголошення функції (Function Declaration: function name() {}), функціональний вираз (Function Expression: const fn = function() {}) та стрілкова функція (Arrow Function: const fn = () => {}). Також функції можуть оголошуватися як методи об’єкта або класу."
    },
    {
      "q": "22. Що таке параметри та аргументи функції?",
      "a": "Параметри є локальними змінними, переліченими в круглих дужках під час оголошення функції для опису очікуваних вхідних даних. Аргументи є конкретними значеннями або виразами, які передаються функції під час її виклику."
    },
    {
      "q": "23. Для чого використовується оператор return?",
      "a": "Оператор return завершує виконання функції та повертає вказане значення у місце виклику функції. Код у тілі функції після return не виконується; якщо оператор return відсутній або викликаний без значення, функція повертає undefined."
    },
    {
      "q": "24. Що таке стрілкова функція (Arrow Function) і які особливості її синтаксису?",
      "a": "Стрілкова функція є скороченим синтаксисом ES6 із використанням стрілки => замість слова function. Якщо тіло складається з одного виразу без фігурних дужок, відбувається неявне повернення значення (implicit return); для одного параметра дужки можна опускати. Стрілкові функції не мають власного контексту this і псевдомасиву arguments."
    },
    {
      "q": "25. Що таке область видимості змінних у JavaScript?",
      "a": "Область видимості (Scope) визначає частину програмного коду, у межах якої оголошений ідентифікатор (змінна, константа або функція) доступний для використання. Розрізняють глобальну область видимості (доступну всюди у скрипті) та локальну: функціональну (для var і параметрів функції) та блочну (для let і const усередині фігурних дужок { ... })."
    },
    {
      "q": "26. У чому полягає різниця між функціональним виразом і Function Declaration?",
      "a": "Function Declaration оголошується через function name() {} як окрема інструкція і підлягає підняттю (hoisting), тож таку функцію можна викликати в коді ще до рядка її оголошення. Function Expression створюється як вираз і присвоюється у змінну (const fn = function() {}), не піднімається і доступна для виклику лише після рядка ініціалізації."
    },
    {
      "q": "27. Що таке callback-функція та в яких випадках вона використовується?",
      "a": "Callback-функція (функція зворотного виклику) передається іншій функції (функції вищого порядку) як аргумент і викликається всередині неї. Колбеки використовують для обробки подій DOM (addEventListener), перебираючих методів масивів (forEach, map, filter), таймерів (setTimeout) і асинхронних операцій."
    },
    {
      "q": "28. Які переваги використання функцій і методів масивів під час розроблення програм?",
      "a": "Використання функцій та методів масивів робить код модульним, декларативним і читабельним, спрощує повторне використання логіки та тестування окремих частин програми. Чисті функції та вбудовані методи (filter, map, slice, includes) зменшують кількість ручних циклів і помилок через небажані мутації даних."
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
