import { View, Text , SafeAreaView , S } from "react-native";
import { Stack } from "expo-router";
const Hi = () => {
    return (
<SafeAreaView >
    <Stack.Screen options={{
        title: '',
        headerStyle: {
          backgroundColor: 'red',
          color:'black'
        },
    }} />

</SafeAreaView>
    );
  }
  export default Hi;