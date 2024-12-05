import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpances from './secreen/ManageExpances';
import RecentExpances from './secreen/RecentExpances';
import AllExpances from './secreen/AllExpances';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from './comps/Button';
import ExpensesContextProvider from './store/Expense-context';
function ExpancsesOverView(){
  return (
  <Tab.Navigator screenOptions={({navigation})=>({
    headerStyle:{backgroundColor:'#5721d4',},
    headerTintColor:'white',
    tabBarStyle:{backgroundColor:'#5721d4'},
    tabBarActiveTintColor:'#ffa8d9',
    tabBarInactiveTintColor:'#f0edf6'
    ,headerRight:() => 
      {return (
      <PrimaryButton cliked={()=> navigation.navigate('ManageExpances')}>
        <View>
          <Ionicons  name="add" size={30} color='white'  />
        </View>
      </PrimaryButton>)}
  })}
  >
    <Tab.Screen name='RecentExpances' component={RecentExpances}
      options={{title:'Recent Expances',
      tabBarIcon:({color})=><Entypo name="hour-glass" size={31} color={color}/>,
      tabBarLabel:'Recent'
      }}
    />
    <Tab.Screen name='All Expances' component={AllExpances}
      options={{tabBarIcon:({color})=><Ionicons  name="wallet" size={31} color={color} />,
      tabBarLabel:'All Expances'
      }}
    />
  </Tab.Navigator>)
}
export default function App() {
  return (
    <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:'#3e04c3'},
          headerTintColor:'white'
        }}>
          <Stack.Screen name='ExpancsesOverView' component={ExpancsesOverView} options={{headerShown:false}}/>
          <Stack.Screen name='ManageExpances' component={ManageExpances} options={{
            presentation:'modal'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ExpensesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
