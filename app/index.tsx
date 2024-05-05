import { Link } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {}
const Index = (props: Props) => {

    return (
        <SafeAreaView className="flex-1 bg-primary">
            <View className="bg-black flex-1">
                <View className="h-[65%]">

                    <Image className=" w-full h-full" source={require('../assets/images/onboard/onboard.png')} />
                </View>
                <View className="h-[40px] bg-[#0D0D0DF5]">

                </View>

                <View className="px-6 bg-[#0d0d0dfb] flex-1">

                    <Text className="text-center text-2xl text-goldText pb-6">Non euismod senectus vitae</Text>
                    <Text className="text-center text-base text-blackText pb-10">Tincidunt sed consequat non velit adipiscing elementum. Quam quis iaculis tristique quis pellentesque gravida ac.</Text>
                    <Link className="bg-secondary text-base py-3 rounded-xl text-center" href={'/(auth)'}>Get started</Link>
                </View>


                <StatusBar style="auto" />
            </View>
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

export default Index