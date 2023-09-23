import React from 'react';
import { View } from 'react-native';

import AuthRoutes from './auth.routes';
import BottomTabNavigator from './app.routes';

function Routes(){
    const loading = false;
    const signed = true;

    return(
        <AuthRoutes />
        // signed ? <BottomTabNavigator /> : <AuthRoutes/>
    )
}

export default Routes;