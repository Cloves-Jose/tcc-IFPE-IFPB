import { Button } from "@rneui/themed";
import { Icon } from '@rneui/themed';
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import globalStyles from '../../styles/GlobalStyles'

export default props => {

    /**
     * Renderizando informações na tela
     */
    _infos = (info) => {
        return(
            <View style={globalStyles.container}>
                <Text style={globalStyles.title}>{info.route.params.name}</Text>
                <Text style={globalStyles.subTitle}>{info.route.params.subtitle}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={{uri: props.route.params.avatar_url}}
                resizeMode="cover"
                style={styles.image}
            >   
            <Button
                containerStyle={button.container}
                buttonStyle={button.buttonStyle}
                onPress={() => props.navigation.navigate("Ameaca")}
                icon={<Icon name="arrow-back" color="#3d72de"/>}
            />
                <View style={styles.bottomSheet}>
                    <View style={globalStyles.container}>
                        <Text style={globalStyles.title}>
                            {props.route.params.name}
                        </Text>
                        <View style={styles.textSpace}>
                            <Text style={globalStyles.subTitle}>
                                {props.route.params.subtitle}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.bottomButton}>
                        <Button
                            title={'Registrar ameaça'}
                            containerStyle={button.bottomButton}
                            onPress={() => props.navigation.navigate("Formulario", props.route.params)}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    bottomSheet: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        marginTop: '50%'
    },
    button: {
        backgroundColor: '#fff',
    },
    bottomButton: {
        alignItems: "center"
    },
    textSpace: {
        height: "75%",
        justifyContent: "center"
    }
})

/**
 * Configurações de estilo do botão
 */
const button = {
    container: {
        marginTop:'2%',
        marginLeft:'2%',
        width: '10%',
    },
    buttonStyle: {
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    bottomButton: {
        width: '90%',
        borderRadius: 10
    }
}