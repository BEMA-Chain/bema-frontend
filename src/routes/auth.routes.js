import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Started from "../pages/Started";
import Access from "../pages/Access";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import SignUpPass from "../pages/SignUpPass";
import SignUpBirth from "../pages/SignUpBirth";
import SignUpSet from "../pages/SignUpSet";

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Started"
                component={Started}
                options={{
                    headerShown: false,
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
                options={{
                    headerShown: false
                }}
            /> 

            <AuthStack.Screen
                name="SignUpPass"
                component={SignUpPass}
                options={{
                    headerShown: false
                }}
            />    

            <AuthStack.Screen
                name="SignUpBirth"
                component={SignUpBirth}
                options={{
                    headerShown: false
                }}
            /> 

            <AuthStack.Screen
                name="SignUpSet"
                component={SignUpSet}
                options={{
                    headerShown: false
                }}
            /> 

            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false
                }}
            />

            
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;