let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let expenses1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let expenses2 = prompt("Во сколько обойдется?", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        expenses1: expenses2,
    },
    optionalExpenses: {},
    income: [],
    saving: false
};

appData.expenses.expenses1 = expenses2;

alert(appData.budget / 30);
