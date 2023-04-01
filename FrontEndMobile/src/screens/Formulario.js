import React, { useState, useEffect } from 'react'
import { LogBox } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    PermissionsAndroid,
    Modal,
} from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import { Button } from "@rneui/themed"
import { Icon } from '@rneui/themed';
import { Input, CheckBox } from "@rneui/themed"
import globalStyles from '../../styles/GlobalStyles'
import textos from '../../mocks/textos'
import axios from 'axios'
import { server, showError, showSuccess } from '../common'

export default props => {

    const date = new Date()

    /**
     * Formulário
     */
    const [checkbox, setCheck] = useState(false)
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [age, setAge] = useState('')
    const [sex, setSex] = useState('')
    const [description, setDescription] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)
    const [ageError, setAgeError] = useState('')
    const [created_at] = useState(date.toISOString())

    /**
     * Dropdown
     */
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {id: '1', label: 'Feminino', value: 'F'},
        {id: '2', label: 'Masculino', value: 'M'},
        {id: '3', label: 'Outros', value: 'NB'},
    ])
    
    /**
     * Ignora o log de erro das listas
     */
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    })

    /**
     * Enviando requisição para a API
     */
    const submit = async () => {
        try{
            await axios.post(`${server}/registerMenace`, {
                age: age,
                sex: sex,
                reside_menace: checkbox,
                description: description,
                image: "image",
                latitude: latitude,
                longitude: longitude,
                created_at: created_at,
                menace_id: props.route.params.id
            })
            showSuccess(`Ameaça cadastrada com sucesso!`)
        } catch(e) {
            showError(`Não foi possível cadastrar a ameaça ${e}`)
        }
    }

    /**
     * Realizar a validação dos campos antes do envio para API
     */
    const handleSubmit = () => {
        let ageValidation = false

        if(age.length == 0) {
            setAgeError("Idade é um campo obrigatório")
        }
        else if(age.indexOf(' ') >= 0) {
            setAgeError("Idade é um campo obrigatório")
        }
        else {
            setAgeError("")
            ageValidation = true
            
            submit()
            props.navigation.navigate("Ameaca")
        }
    }

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
                        setLatitude(position.coords.latitude)
                        setLongitude(position.coords.longitude)
                    },
                    error => {
                        /**
                         * Exibe os erros caso ocorram
                         */
                        setLocation(error)
                    },
                    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
                )
            }
        })
        return {latitude: latitude, longitude: longitude}
    }
    
    return (
        /**
         * Pega a posição do usuário
         */
        getLocation(),

        /**
         * Formulário
         */
        <>  
            {/* Modal de descrição */}
            <View style={styles.modal}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible)
                    }}
                >
                    <View style={styles.centeredModal}>
                        <View style={styles.modalView}>
                            <Input
                                style={styles.input}
                                inputContainerStyle={inputStyle}
                                placeholder='Digite uma descrição'
                                maxLength={100}
                                onChangeText={description => setDescription(description)}
                            />
                            <Button
                                title={'Ok'}
                                containerStyle={button.bottomButton}
                                onPress={() => setModalVisible(!modalVisible)}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
            
            {/* Formulário de cadastro de ameaça */}
            <View style={{backgroundColor: "#fff", flex: 1}}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={globalStyles.container}>
                        <View>
                            <Text style={globalStyles.title}>{textos.registraAmeaca}</Text>
                            <Text style={globalStyles.subTitle}>{textos.subTitle}</Text>
                        </View>
                        <View style={styles.typeContainer}>
                            <Text style={styles.typeSubtitle}>{textos.tipoDeAmeaca}</Text>
                            <Text style={globalStyles.subTitle}>{props.route.params.name}</Text>
                        </View>
                        <View style={styles.lineContainer}>
                            <View style={styles.line}></View>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.subTitle}>{textos.informacoesPessoais}</Text>
                        </View>
                        <View>
                        <View style={styles.inputContainer}>
                            <View style={styles.inputTitle}>
                                <View style={styles.label}>
                                    <Text style={styles.titleLabel}>{textos.idade}</Text>
                                </View>
                                <Input
                                    style={styles.input}
                                    inputContainerStyle={inputStyle}
                                    placeholder='Digite a idade'
                                    keyboardType={'numeric'}
                                    errorMessage={ageError}
                                    errorStyle={styles.inputError}
                                    maxLength={2}
                                    onChangeText={age => setAge(age)}
                                />
                            </View>
                            <View>
                                <View>
                                    <Text style={styles.titleLabel}>{textos.sexo}</Text>
                                </View>
                                <DropDownPicker
                                    style={[styles.input, inputStyle]}
                                    containerStyle={{
                                        width: "96%",
                                        marginLeft: "2%",
                                    }}
                                    labelStyle={{
                                        color: ""
                                    }}
                                    placeholder={textos.selecioneGenero}
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    onSelectItem={(item) => {
                                        setSex(item.value)
                                    }}
                                />
                            </View>
                        </View>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.subTitle}>{textos.sobreAmeaca}</Text>
                        </View>
                        <View>
                            <CheckBox
                                title={textos.voceReside}
                                checkedIcon={"dot-circle-o"}
                                uncheckedIcon="circle-o"
                                checked={checkbox}
                                onPress={() => setCheck(!checkbox)}
                            />
                            <View>
                                <Text style={[styles.titleLabel, {marginBottom: "2%"}]}>Faça uma descrição sobre a ameaça</Text>
                            </View>
                            <View style={{alignItems: "center"}}>
                                <Button
                                    containerStyle={button.bottomButton}
                                    title={'Descrição'}
                                    onPress ={() => {
                                        setModalVisible(true)
                                    }}
                                />
                            </View>
                            <View style={{marginTop: "3%"}}>
                                <Text style={styles.titleLabel}>{textos.anexarImagem}</Text>
                            </View>
                            <View>
                                <View style={styles.photo}>
                                    <TouchableHighlight>
                                        <View style={styles.touchable}>
                                            <View>
                                                <Icon name='add-a-photo' />
                                            </View>
                                        </View>
                                    </TouchableHighlight>
                                    <View>
                                        <Text style={styles.legendPhoto}>{textos.cliqueIconeCamera}</Text>
                                        <Text style={styles.legendPhoto}>{textos.adicionaFoto}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{alignItems: "center", marginTop: "2%", marginBottom: "2%"}}>
                            <Button 
                                containerStyle={button.bottomButton}
                                color="#40DE3D"
                                title='Enviar'
                                onPress={() => {
                                    handleSubmit()
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
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
    },
    touchable: {
        height: 70,
        width: 70,
        backgroundColor: '#DCDCDC',
        justifyContent: 'center',
        marginTop: '1.5%',
        marginBottom: '2%',
        marginLeft: '7%',
        borderRadius: 10,
    },
    photo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    legendPhoto: {
        fontSize: 14,
        fontWeight: "600",
        color: "#DCDCDC"
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        flexDirection: "row",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%"
    },
    inputError: {
        color: "red"
    }
})

const inputStyle = {
    borderBottomColor: "transparent"
}

const button = {
    bottomButton: {
        width: '90%',
        borderRadius: 10
    }
}



