import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Home} from './pages/home'
import {Passwords} from './pages/passwords'
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    title: "Home",
                    headerStyle:{
                        backgroundColor:"#392DE9"
                    },
                    headerTitleStyle:{
                        color: "#FFFFFF",
                        fontWeight: "bold"
                    },
                    tabBarIcon: ({focused,size,color}) =>{
                        if(focused){
                            return <Ionicons size={size} color={color} name="home" />
                        }

                        return <Ionicons size={size} color={color} name="home-outline" />
                    }
                }}
            />

            <Tab.Screen
                name="passwords"
                component={Passwords}
                options={{
                    title: "Passwords",
                    headerShown:false,
                    tabBarIcon: ({focused,size,color}) =>{
                        if(focused){
                            return <Ionicons size={size} color={color} name="lock-closed" />
                        }

                        return <Ionicons size={size} color={color} name="lock-closed-outline" />
                    }
                }}
            />
        </Tab.Navigator>
    )
}