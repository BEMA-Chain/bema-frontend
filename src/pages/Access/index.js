import React from "react";
import { useNavigation } from "@react-navigation/native";

import { 
    Container,
    Title,
    DescriptionText,
    ButtonArea,
    ButtonText,
    LinkLogin,
    LinkLoginText,
    ImagePlay,
    ImageMelody,
} from "./styles";

function Access(){
    const navigation = useNavigation();

    return(
        <Container>
            <ImagePlay source={require('../../assets/PlayIcons.png')} />

            <Title>Non euismod senectus vitae</Title>

            <DescriptionText>
                Tincidunt sed consequat non velit adipiscing elementum. 
                Quam quis iaculis tristique quis
            </DescriptionText>

            <ButtonArea onPress={() => navigation.navigate('SignUp') } >
                <ButtonText>Register</ButtonText>
            </ButtonArea>

            <LinkLogin onPress={() => navigation.navigate('SignIn') } >
                <LinkLoginText>Log in</LinkLoginText>
            </LinkLogin>

            <ImageMelody source={require('../../assets/MelodyIcons.png')} />
        </Container>
    )
}

export default Access;