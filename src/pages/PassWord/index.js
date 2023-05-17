import React, {useState} from "react";
import {View, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Feather from 'react-native-vector-icons/Feather';

import { 
    Container, 
    Title,
    Input,
    Description,
    ButtonArea,
    ButtonText,
    HeaderRegister,
    HeaderDoc,
    ArrowBack,
    ArrowBackIcon,
    AreaHeaderDoc,
    AreaInput,
    AreaIcon,

} from "./styles";


function PassWord(){
    const navigation = useNavigation();
    const [PassRegister, setPassRegister] = useState('');
    const [ConfirmPass, setConfirmPass] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const [hidePassConfirm, setHidePassConfirm] = useState(true);

    return(
        <Container>
            <HeaderRegister>
                <ArrowBack 
                onPress={() => { navigation.goBack() }} 
                activeOpacity={0.6}
                >
                    <ArrowBackIcon source={require('../../assets/ArrowBack.png')} />
                </ArrowBack>
                <AreaHeaderDoc>
                    <HeaderDoc 
                    source={require('../../assets/Ellipse1.png')} 
                    style={{tintColor: '#FFD345'}}
                    />
                    <Feather 
                    name='lock' 
                    size={16} 
                    color='#fff' 
                    style={styles.Icon} />
                    <HeaderDoc source={require('../../assets/Ellipse1.png')} />
                    <HeaderDoc source={require('../../assets/Ellipse1.png')} />
                </AreaHeaderDoc>
            </HeaderRegister>

            <Title>Set a password.</Title>

            <AreaInput>

            <Input
            placeholder="Password"
            value={PassRegister}
            onChangeText={setPassRegister}
            secureTextEntry={hidePass}
            />
            <AreaIcon 
            onPress={() => setHidePass(!hidePass)}
            activeOpacity={0.6} 
            > 
                {hidePass ?
                    <Feather name='eye-off' size={18} color='#0d0d0d' />
                    :
                    <Feather name='eye' size={18} color='#0d0d0d' />
                }
            </AreaIcon>

            </AreaInput>

            <Description>Must be at least 8 characters.</Description>

            <AreaInput>

                <Input
                placeholder="Confirm Password"
                value={ConfirmPass}
                onChangeText={setConfirmPass}
                secureTextEntry={hidePassConfirm}
                />
                <AreaIcon 
                onPress={() => setHidePassConfirm(!hidePassConfirm)}
                activeOpacity={0.6}
                >
                    {hidePassConfirm ?
                        <Feather name='eye-off' size={18} color='#0d0d0d' />
                        :
                        <Feather name='eye' size={18} color='#0d0d0d' />
                    }
                    
                </AreaIcon>

            </AreaInput>

            <Description>Both passwords must match.</Description>

            
            <ButtonArea
            onPress={() => navigation.navigate('DateBirth') }
            activeOpacity={0.6}
            >
                <ButtonText>Continue</ButtonText>
            </ButtonArea>

        </Container>
    )
}

const styles = StyleSheet.create({
    Icon:{
        color: '#FFD345',
        marginLeft: 14,
    }
})

export default PassWord;