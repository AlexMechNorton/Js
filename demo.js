// 4. За допомогою цикла for додайте всі парні числа від min до max


// const numberMin = 0;
// const numberMax = 100;
// let total = 0;
// for (let i = numberMin; i <= numberMax; i += 1){
//     console.log(total)
//     if (i % 2 !== 0) {
//         continue
//     }
//     total += i;
// }
// =================================
// 5. При завантаженні сторінки користувачу
//     пропонується у prompt ввести число.
//     Те, що вводить користувач, додається до значення
//     змінної total.
// Операція вводу числа триває до тих пір, поки
// користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив вводити числа і
// натиснув на кнопку Cancel,
//     показувати alert з рядком "Загальна сума введених
// чисел дорівнює[число]."
// Робити перевірку, що користувач ввів саме число, а не
// довільні символи, не потрібно.
// let question = prompt("Введите число, или нажмите Сansel");
// let total = 0;
// let end = false;
// do {
//     // if (question !== undefined)
//     if (question )
//     {
//         total += Number(question);
//         // end = true;
//         // console.log(question, total);
//         question = prompt("Введите число, или нажмите Сansel");
//     } else {
//         console.log(total);
//     }
// }while(question)
// =========================================

// 6. Напиши код, який буде запитувати логін за допомогою prompt та логувати результат у консоль браузера.
// Якщо користувач вводить "Адмін", то promt запитує пароль.Якщо нічого не введено або натиснута клавіша Esc,
//     вивести рядок "Відмінено"
//     У іншому випадку вивести рядок "Я вас не знаю!"

// Пароль перевіряти так:
// якщо введено пароль "Я головний", то вивести "Вітаю!",
//     у іншому випадку виводити рядок "Невірний пароль!".

// ========================
// 8. У змінній  min лежить число від 0 до 59.
// Потрібно визначити, в яку чтверть години потрапить це число(в першу, другу, третю або четверту)

// const min = 24;
// if (min >= 0 && min <= 14) {
//     console.log('Перша чверть');
    
// } else if (min >= 15 && min <= 29) {
//     console.log('Друга чверть');
// }
//  else if (min >= 30 && min <= 44) {
//     console.log('Третя чверть');
// }
//  else if (min >= 45 && min <= 59) {
//     console.log('Чверта чверть');
// }
// ======================================================================
// 9. Дано рядок, який складається із символів.Наприклад, 'abcde'.
//     Перевірте, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ні"

// const string = 'adcje'
// function checkLetter(string) {
//     if (str[0]==='a') {
//         console.log("Так")
        
//     }else{console.log("Hi");}
// }
// console.log(string[0]);
// checkLetter();
// // checkLetter(string2);

