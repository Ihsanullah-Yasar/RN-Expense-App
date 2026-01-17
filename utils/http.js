import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://rn-expense-app-95159-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
