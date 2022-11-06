import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ListItem, Avatar } from '@rneui/themed'
import TextApp from "../components/TextApp";
import TitleApp from "../components/TitleApp";
import textos from "../../mocks/textos";
import listItens from "../../mocks/listItens";
import globalStyles from '../../styles/GlobalStyles'

export default props => {

    /**
     * Renderização dos itens e definindo a rota 
     * para a tela Info, já passando os parâmetros
     */
    _renderItem = (item) => {
        return(
            <>
                <ListItem 
                    key={item.id} 
                    bottomDivider
                    onPress={() => props.navigation.navigate("Info", item)}
                    >
                    <Avatar source={{uri: item.avatar_url}}/>
                    <ListItem.Content>
                        <ListItem.Title style={styles.listTitle}>{item.name}</ListItem.Title>
                        <ListItem.Subtitle style={styles.listSubtitle}>{item.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
            </>
        )
    }

    /**
     * Renderização da lista
     */
    _flatList = (listItens) => {
        return (
            <View style={globalStyles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={listItens}
                    renderItem={({item}) => _renderItem(item)}
                />
            </View>
        )
    }
    
    return (
        <>
            <View>
                <View style={styles.container}>
                    <TitleApp title={textos.ameaca}/>
                </View>
                <View style={styles.container}>
                    <TextApp text={textos.subTitle}/>
                </View>
                <View style={styles.container}>
                    {_flatList(listItens)}
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: '1.5%'
    },
    listTitle: {
        fontWeight: "bold",
        color: "#3d72de"
    },
    listSubtitle: {
        fontSize: 12,
        fontWeight: "bold",
        color: "A4A4A4"
    }
})