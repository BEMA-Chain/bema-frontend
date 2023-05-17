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
} from "./styles";

function Started(){
    const navigation = useNavigation();

    return(
        <Container>
            
            <Image 
            source={require('../../assets/PhotoStarted.png')} 
            style={{resizeMode: 'cover'}}
            /> 
        
            <AreaText>
                   
                <Title>Non euismod senectus vitae</Title>

                <DescriptionText>
                    Tincidunt sed consequat non velit adipiscing elementum. 
                    Quam quis iaculis tristique quis pellentesque gravida ac.
                </DescriptionText>

                <ButtonArea 
                onPress={() => navigation.navigate('Access') }
                activeOpacity={0.6}
                >
                    <ButtonText>Get started</ButtonText>
                </ButtonArea>
                    
            </AreaText>  

        </Container>
    )
}

export default Started;