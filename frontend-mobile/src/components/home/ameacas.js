import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

// import ListAmeacas from '../../screens/ListAmeacas'

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ameaças</Text>
            <Text style={styles.subTitle}>
                O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. 
                O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.15,
        marginTop: 35,
        alignItems: 'flex-start',
    },
    title: {
        color: '#3D72DE',
        fontSize: 30,
        fontWeight: 'bold',
    },
    subTitle: {
        textAlign: 'justify',
    }
})