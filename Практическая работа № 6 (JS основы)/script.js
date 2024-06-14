document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");
    if (username) {
        document.getElementById("username").innerText = username;
    }
});

function askName() {
    const name = prompt("Как вас зовут?");
    if (name) {
        localStorage.setItem("username", name);
        document.getElementById("username").innerText = name;
    }
}

function calculateTriangleArea() {
    const base = prompt("Введите основание треугольника:");
    const height = prompt("Введите высоту треугольника:");
    if (base && height) {
        const area = (base * height) / 2;
        alert(`Площадь треугольника: ${area}`);
    } else {
        alert("Пожалуйста, введите оба значения.");
    }
}

function compareStrings() {
    const str1 = prompt("Введите первую строку:");
    const str2 = prompt("Введите вторую строку:");
    if (str1 && str2) {
        const result = str1.length === str2.length;
        alert(`Результат сравнения: ${result}`);
    } else {
        alert("Пожалуйста, введите обе строки.");
    }
}

function processArray() {
    const input = prompt("Введите массив из 5 элементов через запятую:");
    if (input) {
        const array = input.split(",").map(item => item.trim());
        if (array.length === 5) {
            const min = Math.min(...array);
            const max = Math.max(...array);
            alert(`Минимальное значение: ${min}, Максимальное значение: ${max}`);
        } else {
            alert("Пожалуйста, введите ровно 5 элементов.");
        }
    } else {
        alert("Пожалуйста, введите массив.");
    }
}

let timerStart = null;
function startTimer() {
    if (!timerStart) {
        timerStart = new Date();
        alert("Таймер запущен!");
    } else {
        const timerEnd = new Date();
        const elapsed = (timerEnd - timerStart) / 1000;
        alert(`Прошло времени: ${elapsed} секунд.`);
        timerStart = null;
    }
}

function takeQuiz() {
    const questions = [
        { question: "Что такое JavaScript?", correctAnswer: "язык программирования" },
        { question: "Для чего используется JavaScript?", correctAnswer: "интерактивные веб-страницы" },
        { question: "Что такое переменные в JavaScript и как мы можем их использовать для хранения информации?", correctAnswer: "это способ хранения данных, которые могут быть использованы и изменены в программе." },
        { question: "Что такое цикл в JavaScript?", correctAnswer: "это конструкция, позволяющая повторять набор инструкций до тех пор, пока не будет выполнено определенное условие." },
        { question: "Что такое DOM?", correctAnswer: "это прикладной программный интерфейс (API) для работы с HTML и XML документами" },
        { question: "Как с помощью JavaScript можно изменить цвет текста на веб-странице?", correctAnswer: "использовать свойство style элемента DOM" },
        { question: "Что такое классы (Classes)?", correctAnswer: "это относительно новый способ написания функций-конструкторов в JS" },
        { question: "Что такое объект Set?", correctAnswer: "объект Set позволяет хранить уникальные значения, примитивы и ссылки на объекты" },
        


    ];
    let correctAnswers = 0;
    questions.forEach(({ question, correctAnswer }) => {
        const answer = prompt(question);
        if (answer === correctAnswer) {
            correctAnswers++;
            alert("Верно!");
        } else {
            alert(`Неверно. Правильный ответ: ${correctAnswer}`);
        }
    });
    alert(`Вы ответили правильно на ${correctAnswers} из ${questions.length} вопросов.`);
}

function showSplashScreen() {
    const username = localStorage.getItem("username") || "гость";
    const date = new Date().toLocaleDateString();
    const splash = document.createElement("div");
    splash.id = "splash-screen";
    splash.innerHTML = `
        <div class="splash-content">
            <h1>Привет, ${username}!</h1>
            <p>Сегодня: ${date}</p>
        </div>
    `;
    document.body.appendChild(splash);

    // Добавляем обработчик события для скрытия заставки при клике
    splash.addEventListener("click", () => {
        splash.remove();
    });

    // Опционально: удаляем заставку через 5 секунд, если пользователь не кликнул
    setTimeout(() => {
        splash.remove();
    }, 5000);
}

// Стили для заставки
const style = document.createElement('style');
style.innerHTML = `
    #splash-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .splash-content {
        text-align: center;
    }
`;
document.head.appendChild(style);

