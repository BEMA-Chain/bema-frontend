import React from "react";

import { ButtonArea, ButtonText } from "./styles";


export default function Button({title, onPress}){
    return(
        <ButtonArea>
            <ButtonText>{ title }</ButtonText>
        </ButtonArea>
    )
}