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
    HeaderDoc,
    ArrowBack,
    ArrowBackIcon,
    AreaHeaderDoc,
    TextError
} from "./styles";

const schema = yup.object({
    email: yup.string().email('Email Inválido').required('Informe seu email')
})

function SignUp(){
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function handleEmail(data){
        console.log(data);
        navigation.navigate('SignUpPass')
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

            <Controller
            control={control}
            name="email"
            render={({ field: {onChange, onBlur, value} }) => (
                <Input
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Your email"
                />
            )}
            />

            {errors.email && <TextError>{errors.email?.message}</TextError>}

            <Description>You’ll be asked to confirm this later.</Description>

            
            <ButtonArea
            onPress={ handleSubmit(handleEmail) } 
            activeOpacity={0.6}
            >
                <ButtonText>Continue</ButtonText>
            </ButtonArea>

        </Container>
    )
}

export default SignUp;