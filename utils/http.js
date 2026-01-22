import axios from "axios";

const backendUrl = "https://rn-expense-app-95159-default-rtdb.firebaseio.com";

export function storeExpense(expenseData) {
  axios.post(`${backendUrl}/expenses.json`, expenseData);
}

export async function fetchExpenses() {
  const response = await axios.get(`${backendUrl}/expenses.json`);
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      data: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}
