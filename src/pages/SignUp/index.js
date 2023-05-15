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

} from "./styled";


function SignUp(){
    const navigation = useNavigation();
    const [emailRegister, setEmailRegister] = useState('');

    return(
        <Container>
            <HeaderRegister>
                <ArrowBack onPress={() => { navigation.goBack() }} >
                    <ArrowBackIcon source={require('../../assets/ArrowBack.png')} />
                </ArrowBack>
                <AreaHeaderDoc>
                    <Feather 
                    name='mail' 
                    size={18} 
                    color='#fff' 
                    style={{color: '#FFD345'}} />
                    <HeaderDoc source={require('../../assets/Ellipse1.png')} />
                    <HeaderDoc source={require('../../assets/Ellipse1.png')} />
                    <HeaderDoc source={require('../../assets/Ellipse1.png')} />
                </AreaHeaderDoc>
            </HeaderRegister>
            
            <Title>What’s your email?</Title>

            <Input
            placeholder="Your email"
            onChangeText={(text) => setEmailRegister(text)}
            />

            <Description>You’ll be asked to confirm this later.</Description>

            <ButtonArea>
                <ButtonText>Continue</ButtonText>
            </ButtonArea>

        </Container>
    )
}

export default SignUp;