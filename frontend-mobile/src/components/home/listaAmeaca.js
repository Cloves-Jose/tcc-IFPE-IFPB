import React from 'react-native'
import { StyleSheet, View, Text, Dimensions, FlatList, Pressable } from 'react-native'

export default props => {
    return(
        <View style={styles.container}>
            <FlatList 
            data={[
                {key: 1, title: 'Lixo urbano'},
                {key: 2, title: 'Esgoto a céu aberto'},
                {key: 3, title: 'Lixo biológico'},
                {key: 4, title: 'Animais abandonados'},
                {key: 5, title: 'Canos estourados'},
                {key: 6, title: 'Quedas de arvores'},
                {key: 7, title: 'Coleta seletiva'},
                {key: 8, title: 'Resíduos de construção civil'},
                {key: 9, title: 'Falta de saneamento básico'},
                {key: 10, title: 'Falta de iluminação pública'},
                {key: 11, title: 'Vandalismo ao patrimônio público'}
            ]}
            renderItem={({item}) => <>
                <Pressable key={item.key} style={styles.containerList}>
                    <View style={styles.imageInfo}></View>
                    <Text style={styles.textInfo}>{item.title}</Text>
                </Pressable>
            </> 
            }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerList: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
    },
    imageInfo: {
        backgroundColor: 'red',
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        borderRadius: 10,
    },
    textInfo: {
        marginLeft: 5,
        color: '#3D72DE',
        fontWeight:'bold',
        fontSize: 15

    },


})