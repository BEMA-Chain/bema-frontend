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
    Body,

} from "./styles";


function SignUpSet(){
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
                    <HeaderDoc 
                    source={require('../../assets/Ellipse1.png')} 
                    style={{tintColor: '#FFD345'}}
                    />
                    <HeaderDoc 
                    source={require('../../assets/Ellipse1.png')} 
                    style={{tintColor: '#FFD345'}}
                    />
                    <HeaderDoc 
                    source={require('../../assets/Ellipse1.png')} 
                    style={{tintColor: '#FFD345'}}
                    />
                    <Feather 
                    name='user' 
                    size={16} 
                    color='#fff' 
                    style={styles.Icon} />
                </AreaHeaderDoc>
            </HeaderRegister>

            <Body>
            
                <Title>Set up your profile.</Title>

                <Input
                onChangeText={setEmailRegister}
                value={emailRegister}
                placeholder="Your email"
                />

                <Description>
                    By signing up, you agree to our Terms and conditions 
                    and Privacy policies.
                </Description>
        
                <ButtonArea
                onPress={() => navigation.navigate('Started') }
                activeOpacity={0.6}
                >
                    <ButtonText>Continue</ButtonText>
                </ButtonArea>

            </Body>

        </Container>
    )
}

const styles = StyleSheet.create({
    Icon:{
        color: '#FFD345',
        marginLeft: 14,
    }
})

export default SignUpSet;