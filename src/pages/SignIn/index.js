import React, {useState} from "react";
import {View, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Feather from 'react-native-vector-icons/Feather';

import { 
    Container, 
    Title,
    Input,
    Email,
    Description,
    ButtonArea,
    ButtonText,
    HeaderRegister,
    HeaderTitle,
    ArrowBack,
    ArrowBackIcon,
    AreaHeaderTitle,
    AreaInput,
    AreaIcon,
    LinkLogin,
    LinkLoginText

} from "./styles";

function SignIn(){
    const navigation = useNavigation();
    const [hidePass, setHidePass] = useState(true);
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');

    function handlePassWord(){
        console.log("email: ", email)
        console.log("PassWord: ", passWord)
    }

    return(
        <Container>
            <HeaderRegister>
                <ArrowBack 
                onPress={() => { navigation.goBack() }} 
                activeOpacity={0.6}
                >
                    <ArrowBackIcon source={require('../../assets/ArrowBack.png')} />
                </ArrowBack>
                <AreaHeaderTitle>
                    <HeaderTitle>Welcome back</HeaderTitle>
                </AreaHeaderTitle>
            </HeaderRegister>

            <Title>Email</Title>

            <AreaInput>

            <Email
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            </AreaInput>

            <Title>Password</Title>

            <AreaInput>

                <Input
                    placeholder="Password"
                    value={passWord}
                    onChangeText={setPassWord}
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
            
            <ButtonArea
            onPress={ handlePassWord }
            activeOpacity={0.6}
            >
                <ButtonText>Log in</ButtonText>
            </ButtonArea>

            <LinkLogin 
            onPress={() => navigation.navigate('SignInEmail') } 
            activeOpacity={0.6}
            >
                <LinkLoginText>Log in without password</LinkLoginText>
            </LinkLogin>

        </Container>
    )
}

const styles = StyleSheet.create({
    Icon:{
        color: '#FFD345',
        marginLeft: 14,
    }
})

export default SignIn;