import { Link } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
// import Checkbox from 'expo-checkbox';
import { useState } from "react";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import CustomCheckBox from "@/components/utils/CustomCheckBox";
// import CheckBox from "@/components/utils/CustomCheckBox";
// import Eye from "@/assets/icons/Eye";

type Props = {}
const index = (props: Props) => {
    const [isChecked, setChecked] = useState(false)
    const [showError, setShowError] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <SafeAreaView>
            <Text className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint distinctio, mollitia odio nobis reiciendis soluta? Blanditiis magni praesentium eum dolore ad, numquam nulla, non est commodi, repellat saepe molestias vitae.</Text>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    poppinsRegular: {
        fontFamily: 'PoppinsRegular',
    },
    poppinsSemiBold: {
        fontFamily: 'PoppinsSemiBold',
    },

    flexContainer: {
        flex: 1,
    },

})

export default index