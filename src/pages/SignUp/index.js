import React, {useState} from "react";
import {View, Text, } from 'react-native';
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

} from "./styles";


function SignUp(){
    const navigation = useNavigation();
    const [emailRegister, setEmailRegister] = useState('');

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
                    <Feather 
                    name='mail' 
                    size={16} 
                    color='#fff' 
                    style={{color: '#FFD345'}} />
                    <HeaderDoc source={require('../../assets/Ellipse1.png')} />
                    <HeaderDoc source={require('../../assets/Ellipse1.png')} />
                    <HeaderDoc source={require('../../assets/Ellipse1.png')} />
                </AreaHeaderDoc>
            </HeaderRegister>

            
            
            <Title>What’s your email?</Title>

            <Input
            onChangeText={setEmailRegister}
            value={emailRegister}
            placeholder="Your email"
            />

            <Description>You’ll be asked to confirm this later.</Description>

            
            <ButtonArea
            onPress={() => navigation.navigate('PassWord') }
            activeOpacity={0.6}
            >
                <ButtonText>Continue</ButtonText>
            </ButtonArea>

        </Container>
    )
}

export default SignUp;