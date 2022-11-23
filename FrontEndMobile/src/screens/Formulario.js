import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Modal, 
    TextInput, 
    Button, 
    Alert, 
    PermissionsAndroid} from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import { Input, CheckBox } from "@rneui/themed"
import globalStyles from '../../styles/GlobalStyles'
import textos from '../../mocks/textos'

export default props => {
    // console.warn(props.route.params.id)

    const [checkbox, setCheck] = useState(false)
    const [location, setLocation] = useState(false)

    /**
     * Função para pegar a permissão de localização
     */
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Concede acesso para localização ?',
                    buttonNeutral: 'Me pergunte mais tarde',
                    buttonNegative: 'Cancelar',
                    buttonPositive: 'OK'
                },
            )
            console.warn('granted', granted)

            if(granted === 'granted') {
                return true
            } else {
                return false
            }
        } catch (err) {
            return false
        }
    }

    /**
     * Função para checar as permissões e pegar 
     * a localização atual
     */
    const getLocation = () => {
        const result = requestLocationPermission()

        result.then(res => {
            if( res ) {
                Geolocation.getCurrentPosition(
                    position => {
                        setLocation(position)
                    },
                    error => {
                        /**
                         * Exibe os erros caso ocorram
                         */
                        setLocation(false)
                    },
                    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
                )
            }
        })
        return location
    }

    
    _formThreat = () => {
        return (
            <>
                <View>
                    <CheckBox
                        title="Você reside na localização da ameaça?"
                        checkedIcon={"dot-circle-o"}
                        uncheckedIcon="circle-o"
                        checked={checkbox}
                        onPress={() => setCheck(!checkbox)}
                    />
                    <View>
                        <Text style={[styles.titleLabel, {marginBottom: "2%"}]}>Faça uma descrição sobre a ameaça</Text>
                    </View>
                    {/* <Button
                        title={'Descrição'}
                        onPress={() => setModalVisible(true)}
                    /> */}
                    <TextInput
                        style={styles.textInput}
                        multiline={true}
                        numberOfLines={5}
                    />
                    <View style={{marginTop: "3%"}}>
                        <Text style={styles.titleLabel}>Anexar uma imagem</Text>
                    </View>
                </View>
            </>
        )
    }
    
    _formUser = () => {
        return (
            <>  
                <View style={styles.inputContainer}>
                    <View style={styles.inputTitle}>
                        <View style={styles.label}>
                            <Text style={styles.titleLabel}>Idade</Text>
                        </View>
                        <Input
                            style={styles.input}
                            inputContainerStyle={inputStyle}
                            keyboardType={'numeric'}
                            maxLength={2}
                        />
                    </View>
                    <View>
                        <View>
                            <Text style={styles.titleLabel}>Sexo</Text>
                        </View>
                        <Input
                            style={styles.input}
                            inputContainerStyle={inputStyle}
                            onPressIn={() => setModalVisible(true)}
                            disabled={false}
                        />
                    </View>
                </View>
            </>
        )
    }
    
    return (
        console.warn(getLocation),
        <>
        <View style={{backgroundColor: "#fff", flex: 1}}>
            <View style={globalStyles.container}>
                <View>
                    <Text style={globalStyles.title}>{textos.registraAmeaca}</Text>
                    <Text style={globalStyles.subTitle}>{textos.subTitle}</Text>
                </View>
                <View style={styles.typeContainer}>
                    <Text style={styles.typeSubtitle}>Tipo de ameaça</Text>
                    <Text style={globalStyles.subTitle}>{props.route.params.name}</Text>
                </View>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.info}>
                    <Text style={styles.subTitle}>Informações pessoais</Text>
                </View>
                <View>
                    {_formUser()}
                </View>
                <View style={styles.info}>
                    <Text style={styles.subTitle}>Sobre a ameça</Text>
                </View>
                    {_formThreat()}
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    typeContainer: {
        marginTop: "2%",
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    typeSubtitle: {
        fontWeight: "bold",
        color: "black"
    },
    lineContainer: {
        alignItems: "center",
        marginTop: "2.5%",
        marginBottom: "2.5%"
    },
    line: {
        borderBottomColor: "#A9A9A9",
        borderWidth: 0.2,
        width: "98%"
    },
    info: {
        marginTop: "2%"
    },
    subTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: "#3d72de"
    },
    label: {
        marginTop: "2.5%",
        marginBottom: "0.5%"
    },
    titleLabel: {
        fontWeight: "700",
        marginLeft: '2.5%'
    },
    input: {
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
    },
    textInput: {
        backgroundColor: "#DCDCDC",
        borderRadius: 5
    }
})

const inputStyle = {
    borderBottomColor: "transparent"
}


