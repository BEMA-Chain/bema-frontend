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
    AreaHeaderDoc,
    AreaInput,
    AreaIcon,
    LinkLogin,
    LinkLoginText

} from "./styles";

function SignIn(){
    const navigation = useNavigation();
    const [hidePass, setHidePass] = useState(true);

    function handlePassWord(data){
        console.log(data);
        navigation.navigate('SignUpBirth')
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
                <AreaHeaderDoc>
                    <HeaderTitle>Welcome back</HeaderTitle>
                </AreaHeaderDoc>
            </HeaderRegister>

            <Title>Email</Title>

            <AreaInput>

            <Email
                placeholder="Email"
            />

            </AreaInput>

            <Title>Password</Title>

            <AreaInput>

                <Input
                    placeholder="Password"
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
            onPress={() => navigation.navigate('SignIn') } 
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