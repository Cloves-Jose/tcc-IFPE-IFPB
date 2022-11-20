import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ListItem, Avatar } from '@rneui/themed'
import TextApp from "../components/TextApp";
import TitleApp from "../components/TitleApp";
import textos from "../../mocks/textos";
import listItens from "../../mocks/listItens";
import globalStyles from '../../styles/GlobalStyles'

import axios from 'axios'

import { server, showSuccess, showError } from '../common'

export default props => {

    /**
     * Alterando o estado para exibição das informações
     */
    const [ menace, setMenace ] = useState([])

    /**
     * Essa função só é executada após a renderização 
     * do componente.
     */
    useEffect(() => {
        axios.get(`${server}/getMenace`)
        .then((res) => {
            setMenace(res.data)
        })
        .catch(() => {
            showError()
        })
    }, [])

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
                        <ListItem.Subtitle style={styles.listSubtitle}>{item.description}</ListItem.Subtitle>
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
            <View style={{backgroundColor: "#fff", flex: 1}}>
                <View style={styles.container}>
                    <TitleApp title={textos.ameaca}/>
                </View>
                <View style={styles.container}>
                    <TextApp text={textos.subTitle}/>
                </View>
                <View style={styles.container}>
                    {_flatList(menace)}
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