import axios from "axios";

const backendUrl = "https://rn-expense-app-95159-default-rtdb.firebaseio.com";

export function storeExpense(expenseData) {
  axios.post(`${backendUrl}/expenses.json`, expenseData);
}
