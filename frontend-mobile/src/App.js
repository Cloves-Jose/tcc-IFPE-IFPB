import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import ListAmeacas from './screens/ListAmeacas'

export default props => {
    return(
        <SafeAreaView style={styles.container}>
            <ListAmeacas/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
    }
})