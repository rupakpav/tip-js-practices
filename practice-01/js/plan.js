"use strict";

const totalTasks = 9;
const completedTasks = 9;
const dailyLimit = 3;

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
    console.log("Ошибка: выполненных задач больше, чем существует.");
} 

else if (typeof dailyLimit === "string") {
    console.log("Ошибка: дневная норма задана строкой.");
}
else if (isNaN(dailyLimit)) {
    console.log("Ошибка: недопустимое числовое значение нормы.");
}
else if (!Number.isInteger(dailyLimit)) {
    console.log("Ошибка: дробной дневной нормы быть не должно.");
}
else if (dailyLimit < 1) {
    console.log("Ошибка: цикл не запускается.");
}
else if (dailyLimit > 1000) {
    console.log("Ошибка: превышена верхняя граница нормы.");
}

else {
    let remainingTasks = totalTasks - completedTasks;
    console.log(`Осталось задач: ${remainingTasks}`);

    if (remainingTasks === 0) {
        console.log("Потребуется дней: 0");
    } else {
        let day = 0;

        while (remainingTasks > 0) {
            day++;
            let tasksDoneToday = Math.min(dailyLimit, remainingTasks);
            remainingTasks -= tasksDoneToday;
            
            console.log(`День ${day}: выполнено ${tasksDoneToday}, осталось ${remainingTasks}`);
        }

        console.log(`Потребуется дней: ${day}`);
    }
}
