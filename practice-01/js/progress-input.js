"use strict";

const totalTasksInput = "9"; 
const completedTasksInput = "3";

if (typeof totalTasksInput !== "string" || typeof completedTasksInput !== "string") {
    console.log("Ошибка: входные данные должны быть строками.");
} else {
    const trimmedTotal = totalTasksInput.trim();
    const trimmedCompleted = completedTasksInput.trim();

    if (trimmedTotal === "" || trimmedCompleted === "") {
        console.log("Ошибка: пустой ввод недопустим.");
    } else {
        const totalTasks = Number(trimmedTotal);
        const completedTasks = Number(trimmedCompleted);

        if (isNaN(totalTasks) || isNaN(completedTasks)) {
            console.log("Ошибка: недопустимое числовое значение.");
        } 
        else if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
            console.log("Ошибка: значение не должно быть бесконечностью.");
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
    }
}
