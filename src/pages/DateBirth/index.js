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

} from "./styles";


function DateBirth(){
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
                    <Feather 
                    name='calendar' 
                    size={16} 
                    color='#fff' 
                    style={styles.Icon} />
                    <HeaderDoc source={require('../../assets/Ellipse1.png')} />
                </AreaHeaderDoc>
            </HeaderRegister>

            
            
            <Title>Date of birth.</Title>

            <Input
            onChangeText={setEmailRegister}
            value={emailRegister}
            placeholder="DD/MM/YY"
            keyboardType="numeric"
            />
    
            <ButtonArea
            onPress={() => navigation.navigate('SetProfile') }
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

export default DateBirth;