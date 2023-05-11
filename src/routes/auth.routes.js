import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Started from "../pages/Started";
import Access from "../pages/Access";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Started"
                component={Started}
                options={{
                    headerShown: false
                }}
            />

            <AuthStack.Screen
                name="Access"
                component={Access}
                options={{
                    headerShown: false
                }}
            />

            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
            />    

            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
            />

            
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;