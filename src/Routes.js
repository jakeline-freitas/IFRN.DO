import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'

import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

export function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}  options={{ headerShown: false  }}  />
            <Stack.Screen name="Home" component={Home}  options={{ headerShown: false  }}  />
        </Stack.Navigator>
    )
}