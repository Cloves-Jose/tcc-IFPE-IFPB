import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ameaca from './screens/Ameaca';
import Info from './screens/Info';

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Ameaca'
                    screenOptions={screenOptions}
                    >
                    <Stack.Screen name="Ameaca" component={Ameaca}/>
                    <Stack.Screen name="Info" component={Info}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

const screenOptions = {
    headerShown: false,
}