import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../pages/Home'
import Favourite from '../screens/Favourite'
import Profile from '../screens/Profile'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            {/* <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Favourite" component={Favourite} />
          <Tab.Screen name="Profile" component={Profile} />a
        </Tab.Navigator>
      </NavigationContainer> */}
            <Tab.Navigator
                tabBarOptions={{
                    style: {
                        height: 65,
                        justifyContent: "center",
                        paddingVertical: 15,
                        backgroundColor: "#eff4f0",
                        elevation: 2
                    }
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: "",
                        // tabBarIcon:({color, size}) => (
                        //     <Image
                        //         source={require("../images/8.png")}
                        //         style={{ height:20, width:20 }}
                        //     />
                        // )
                    }}
                />

                <Tab.Screen
                    name="Favourite"
                    component={Favourite}
                    options={{
                        tabBarLabel: "",
                        // tabBarIcon:({color, size}) => (
                        //     <Image
                        //         source={require("../images/9.png")}
                        //         style={{ height:20, width:20 }}
                        //     />
                        // )
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: "",
                        // tabBarIcon:({color, size}) => (
                        //     <Image
                        //         source={require("../images/10.png")}
                        //         style={{ height:20, width:20 }}
                        //     />
                        // )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabNavigator;