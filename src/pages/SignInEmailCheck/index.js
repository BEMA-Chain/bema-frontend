import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";

import { 
    Container, 
    Description,
    ButtonArea,
    ButtonText,
    HeaderRegister,
    ArrowBack,
    ArrowBackIcon,
    AreaHeaderTitle,
    HeaderTitle,
    ButtonView
} from "./styles";

function SignInEmailCheck(){
    const navigation = useNavigation();
    

    function handleEmail(data){
        console.log(data);
        navigation.navigate('Home')
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
                    <HeaderTitle>Check your email</HeaderTitle>
                </AreaHeaderTitle>
            </HeaderRegister>


            <Description>
                We sent you an email with a link 
                that will log you into your account.
            </Description>

            <ButtonArea
            onPress={ handleEmail } 
            activeOpacity={0.6}
            >
                <ButtonText>Open email app</ButtonText>
            </ButtonArea>

        </Container>
    )
}

export default SignInEmailCheck;