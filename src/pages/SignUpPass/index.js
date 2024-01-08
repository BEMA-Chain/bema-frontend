import React, {useState} from "react";
import {View, Text, StyleSheet } from 'react-native';
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
    AreaInput,
    AreaIcon,
    TextError

} from "./styles";

const schema = yup.object({
    password: yup.string().min(8, 'password must be 8 digits').required('Inform your password'),
    confirmpassword: yup.string().required('Confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match')
})


function SignUpPass(){
    const navigation = useNavigation();
    const [hidePass, setHidePass] = useState(true);
    const [hidePassConfirm, setHidePassConfirm] = useState(true);
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

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

                <Controller
                    control={control}
                    name="password"
                    render={({ field: {onChange, onBlur, value} }) => (
                        <Input
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Password"
                            secureTextEntry={hidePass}
                        />
                    )}
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

            {errors.password && <TextError>{errors.password?.message}</TextError>}

            <Description>Must be at least 8 characters.</Description>

            <AreaInput>

                <Controller
                control={control}
                name="confirmpassword"
                render={({ field: {onChange, onBlur, value} }) => (
                    <Input
                        style={[{
                            borderWidth: errors.email && 1, 
                            borderColor: errors.email && '#ff375b'
                        }]}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="Confirm Password"
                        secureTextEntry={hidePassConfirm}
                    />
                )}
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

            {errors.confirmpassword && <TextError>{errors.confirmpassword?.message}</TextError>}

            <Description>Both passwords must match.</Description>

            
            <ButtonArea
            onPress={ handleSubmit(handlePassWord) }
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

export default SignUpPass;