import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity } from "react-native";
import { Stack , useRouter,} from "expo-router";
export default function Page() {
  const router = useRouter();
  const handlePress = () => {
    router.push("/hi");
  };
  return (
    <SafeAreaView style={{backgroundColor:'#f5f5f5', flex:1}}>
        <Stack.Screen options={{
          
          headerStyle: {
            backgroundColor: 'red',
            color:'black'
          },
          headerTitle:'',
          headerLeft: ()=>(<TouchableOpacity onPress={handlePress} style={{backgroundColor:'yellow' , padding: 2 , borderRadius:12}}>
            <Text>Left</Text>
          </TouchableOpacity>)}}>
        </Stack.Screen>
        <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Hello World</Text>
          <Text style={styles.subtitle}>This is the first page of your app.</Text>
        </View>
      </View>
        
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
