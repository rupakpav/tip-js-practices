"use strict";

const totalTasks = 9;
const completedTasks = 9;

if (typeof totalTasks === "string" || typeof completedTasks === "string") {
    console.log("Ошибка: вместо числа передана строка.");
} 
else if (isNaN(totalTasks) || isNaN(completedTasks)) {
    console.log("Ошибка: недопустимое числовое значение.");
} 
else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
    console.log("Ошибка: дробное количество.");
} 
else if (totalTasks < 0 || completedTasks < 0) {
    console.log("Ошибка: отрицательное количество.");
} 
else if (totalTasks > 1000) {
    console.log("Ошибка: превышена верхняя граница.");
} 
else if (completedTasks > totalTasks) {
    console.log("Ошибка: выполнено больше, чем существует.");
} 
else if (totalTasks === 0 && completedTasks === 0) {
    console.log("Задач пока нет.");
} 
else {
    const remainingTasks = totalTasks - completedTasks;
    const progress = Number(((completedTasks / totalTasks) * 100).toFixed(1));
    
    let status = "";
    if (progress === 0.0) {
        status = "«Не начато»";
    } else if (progress === 100.0) {
        status = "«Завершено»";
    } else {
        status = "«В работе»";
    }

    console.log(`Осталось ${remainingTasks}; прогресс ${progress}%; статус ${status}.`);
}
