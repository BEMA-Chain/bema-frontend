import React from "react";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

import { 
    Container, 
    AreaText, 
    Image,  
    Title, 
    DescriptionText,
    ButtonArea,
    ButtonText,
    Rectangle,
} from "./styles";

function Started(){
    const navigation = useNavigation();

    return(
        <Container>
            
            <Image 
            source={require('../../assets/Rectangle1.png')} 
            style={{resizeMode: 'cover'}}
            /> 
        
            <AreaText>
                   
                <Title>Non euismod senectus vitae</Title>

                <DescriptionText>
                    Tincidunt sed consequat non velit adipiscing elementum. 
                    Quam quis iaculis tristique quis pellentesque gravida ac.
                </DescriptionText>

                <ButtonArea onPress={() => navigation.navigate('Access') }>
                    <ButtonText>Get started</ButtonText>
                </ButtonArea>
                    
            </AreaText>  

        </Container>
    )
}

export default Started;