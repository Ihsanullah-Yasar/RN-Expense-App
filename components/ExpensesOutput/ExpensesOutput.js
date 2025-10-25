import { StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
