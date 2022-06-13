import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { ListItem, Avatar } from '@rneui/themed'

import ameacas from '../data/ameacas'

export default props => {

    //Pega os dados mockados
    function getAmeacaItem({item: ameaca}) {
        return (
            <ListItem
                key={ameaca.id}
                bottomDivider
                onPress={() => props.navigation.navigate('Informacao', ameaca)}
            >
                <Avatar source={{uri: ameaca.avatarUrl}}/>
                <ListItem.Content>
                    <ListItem.Title style={styles.listTitle}>{ameaca.title}</ListItem.Title>
                    <ListItem.Subtitle style={styles.listSubtitle}>{ameaca.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Ameaças</Text>
                <Text style={styles.subTitle}>
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. 
                    O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500.
                </Text>
            </View>
            <View style={styles.listStyle}>
                <FlatList
                    keyExtractor={ameaca => ameaca.id.toString()}
                    data={ameacas}
                    renderItem={getAmeacaItem}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        color: '#fff',
        flex: 1.3
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: '#3d72de'
    },
    subTitle: {
        fontSize: 13,
        textAlign: 'justify',
        color: '#a4a4a4'
    },
    listStyle: {
        marginLeft: 5,
        marginRight: 5,
        flex: 8
    },
    listTitle: {
        fontSize: 19,
        color: '#3d72de'
    },
    listSubtitle: {
        fontSize: 13,
        color: '#a4a4a4',
        textAlign: 'justify'
    }
})

