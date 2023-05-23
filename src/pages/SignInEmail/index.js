import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import Feather from 'react-native-vector-icons/Feather';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { 
    Container, 
    Title,
    Input,
    Description,
    ButtonArea,
    ButtonText,
    HeaderRegister,
    ArrowBack,
    ArrowBackIcon,
    AreaHeaderTitle,
    HeaderTitle,
    TextError
} from "./styles";

const schema = yup.object({
    email: yup.string().email('Email Inválido').required('Informe seu email')
})

function SignInEmail(){
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function handleEmail(data){
        console.log(data);
        navigation.navigate('SignInEmailCheck')
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
                    <HeaderTitle>Log in without password</HeaderTitle>
                </AreaHeaderTitle>
            </HeaderRegister>

            
            
            <Title>Email</Title>

            <Controller
            control={control}
            name="email"
            render={({ field: {onChange, onBlur, value} }) => (
                <Input
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Email"
                />
            )}
            />

            {errors.email && <TextError>{errors.email?.message}</TextError>}

            <Description>We’ll send you an email with a link that will log you in.</Description>

            
            <ButtonArea
            onPress={ handleSubmit(handleEmail) } 
            activeOpacity={0.6}
            >
                <ButtonText>Continue</ButtonText>
            </ButtonArea>

        </Container>
    )
}

export default SignInEmail;