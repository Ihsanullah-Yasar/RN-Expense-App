import { Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput() {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
