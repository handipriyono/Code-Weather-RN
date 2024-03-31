import HomePage from "../screens/Home/Home.screen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const NavigationList = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "#fff" } }}
      >
        <>
          <Stack.Screen
            name="HomePage"
            options={({ navigation, route }) => ({
              headerTitle: "",
              headerLeft: () => (
                <>
                  <TouchableOpacity onPress={() => {}}>
                    <Feather name="search" size={24} color="black" />
                  </TouchableOpacity>
                  <Text
                    style={{
                      paddingHorizontal: 6,
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    Jakarta, Indonesia
                  </Text>
                </>
              ),
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="options-outline" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
            component={HomePage}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationList;
