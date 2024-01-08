import React, {useState} from "react";
import {View, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Feather from 'react-native-vector-icons/Feather';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextInputMask } from "react-native-masked-text";


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
    TextError,

} from "./styles";

const schema = yup.object({
    date: yup.string().required('inform your birth')
})

function SignUpBirth(){
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function handleBirth(data){
        console.log(data);
        navigation.navigate('SignUpSet')
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
                    <HeaderDoc 
                    source={require('../../assets/Ellipse1.png')} 
                    style={{tintColor: '#FFD345'}}
                    />
                    <HeaderDoc 
                    source={require('../../assets/Ellipse1.png')} 
                    style={{tintColor: '#FFD345'}}
                    />
                    <Feather 
                    name='calendar' 
                    size={16} 
                    color='#fff' 
                    style={styles.Icon} />
                    <HeaderDoc source={require('../../assets/Ellipse1.png')} />
                </AreaHeaderDoc>
            </HeaderRegister>

            
            
            <Title>Date of birth.</Title>

            <Controller
            control={control}
            name="date"
            render={({ field: {onChange, onBlur, value} }) => (
                <TextInputMask
                style={styles.input}
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="DD/MM/YYYY"
                    keyboardType="numeric"
                     
                />
                
            )}
            />

            {errors.date && <TextError>{errors.date?.message}</TextError>}
    
            <ButtonArea
            onPress={ handleSubmit(handleBirth) }
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
    },
    input:{
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        padding: 16,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 18,
        color: '#2F2F2F',
    }
})

export default SignUpBirth;