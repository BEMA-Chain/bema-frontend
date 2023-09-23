import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Started from "../pages/Started";
import Access from "../pages/Access";
import SignIn from "../pages/SignIn";
import SignInEmail from "../pages/SignInEmail";
import SignInEmailCheck from "../pages/SignInEmailCheck";
import SignUp from "../pages/SignUp";
import SignUpPass from "../pages/SignUpPass";
import SignUpBirth from "../pages/SignUpBirth";
import SignUpSet from "../pages/SignUpSet";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import History from "../pages/History";
import Settings from "../pages/Settings";
import Aboutus from "../pages/Aboutus";
import Help from "../pages/Help";
import HelpDetails from "../pages/HelpDetails";

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <>
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

                <AuthStack.Screen
                    name="SignInEmail"
                    component={SignInEmail}
                    options={{
                        headerShown: false
                    }}
                />

                <AuthStack.Screen
                    name="SignInEmailCheck"
                    component={SignInEmailCheck}
                    options={{
                        headerShown: false
                    }}
                />

                <AuthStack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />

                <AuthStack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false
                    }}
                />

                <AuthStack.Screen
                    name="History"
                    component={History}
                    options={{
                        headerShown: false
                    }}
                />


                <AuthStack.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        headerShown: false
                    }}
                />

                <AuthStack.Screen
                    name="Aboutus"
                    component={Aboutus}
                    options={{
                        headerShown: false
                    }}
                />

                <AuthStack.Screen
                    name="Help"
                    component={Help}
                    options={{
                        headerShown: false
                    }}
                />

                <AuthStack.Screen
                    name="HelpDetails"
                    component={HelpDetails}
                    options={{
                        headerShown: false
                    }}
                />

            </AuthStack.Navigator>
            {/* <AppRoutesNavigator /> */}
        </>
    )
}

export default AuthRoutes;