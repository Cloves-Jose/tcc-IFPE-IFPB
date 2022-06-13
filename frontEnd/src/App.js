import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Ameacas from "./screens/Ameacas";
import Informacao from "./screens/Informacao";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Ameacas"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen 
                    name="Ameacas"
                    component={Ameacas} 
                    options={{
                        title: 'Ameaças'
                    }}
                    
                />
                <Stack.Screen 
                    name="Informacao" 
                    component={Informacao} 
                    options={{
                    title: 'Informções'
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
