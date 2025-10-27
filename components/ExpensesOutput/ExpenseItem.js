import { Pressable, Text, View } from "react-native";

function ExpenseItem({ description, amount, date }) {
  return;
  <Pressable>
    <View>
      <View>
        <Text>{description}</Text>
        <Text>{date}</Text>
      </View>
      <View>{amount}</View>
    </View>
  </Pressable>;
}

export default ExpenseItem;
