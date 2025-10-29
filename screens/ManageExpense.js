import { useLayoutEffect } from "react";
import { StyleSheet, Text } from "react-native";

function ManageExpense({ route, navigation }) {
  const editingExpenseId = route.params?.expenseId;
  const isEditing = !!editingExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  return <Text>ManageExpense Screen</Text>;
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {},
});
