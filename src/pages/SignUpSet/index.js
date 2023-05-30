import React, {useState} from "react";
import {View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Feather from 'react-native-vector-icons/Feather';

import AsyncStorage from "@react-native-async-storage/async-storage";

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
    TextError,

} from "./styles";

function SignUpSet(){
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [firstEmail, setFirstEmail] = useState('');
    const [firstEmailCheck, setFirstEmailCheck] = useState(false);


    async function handleEmailSet(){
        const getEmail = await AsyncStorage.getItem('@setEmail')

        if(getEmail){
            setFirstEmail(JSON.parse(getEmail))
        }
        setFirstEmailCheck(true)

        console.log(firstEmailCheck)
        console.log(firstEmail)
        console.log(email)
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
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Your email"
                />
            
                
                 <TextError></TextError>

                <Description>
                    By signing up, you agree to our Terms and conditions 
                    and Privacy policies.
                </Description>

                
                <ButtonArea
                onPress={handleEmailSet}
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