import React from "react";
import {View, Text} from 'react-native';

import { 
    Container, 
    Title,
    Input,
    Description,
    ButtonArea,
    ButtonText,

} from "./styled";

function SignUp(){
    return(
        <Container>
            <Title>What’s your email?</Title>

            <Input
            placeholder="Your email"
            />

            <Description>You’ll be asked to confirm this later.</Description>

            <ButtonArea>
                <ButtonText>Continue</ButtonText>
            </ButtonArea>

        </Container>
    )
}

export default SignUp;