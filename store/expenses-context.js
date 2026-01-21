import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "a pair of shoes",
    amount: 44.53,
    date: new Date("2025-10-01"),
  },
  {
    id: "e2",
    description: "winter coat",
    amount: 70.44,
    date: new Date("2025-10-02"),
  },
  {
    id: "e3",
    description: "glovesses",
    amount: 20.53,
    date: new Date("2025-10-10"),
  },
  {
    id: "e4",
    description: "fruit",
    amount: 10.53,
    date: new Date("2025-10-11"),
  },
  {
    id: "e5",
    description: "ring",
    amount: 200.1,
    date: new Date("2025-10-20"),
  },
  {
    id: "e6",
    description: "winter coat",
    amount: 70.44,
    date: new Date("2025-10-02"),
  },
  {
    id: "e7",
    description: "glovesses",
    amount: 20.53,
    date: new Date("2025-10-10"),
  },
  {
    id: "e8",
    description: "fruit",
    amount: 10.53,
    date: new Date("2025-10-11"),
  },
  {
    id: "e9",
    description: "ring",
    amount: 200.1,
    date: new Date("2025-10-20"),
  },
  {
    id: "e10",
    description: "fruit",
    amount: 10.53,
    date: new Date("2025-10-11"),
  },
  {
    id: "e11",
    description: "ring",
    amount: 200.1,
    date: new Date("2025-10-20"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => { },
  deleteExpense: (id) => { },
  updateExpense: (id, { description, amount, date }) => { },
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
