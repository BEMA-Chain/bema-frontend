import Email from '@/assets/icons/email'
import Back from '@/components/utils/Back'
import { Link } from 'expo-router'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const Screen = (props: Props) => {
    return (
        <SafeAreaView className='h-full bg-primary px-6 py-10'>
            <View className='flex-row '>
                <Back />
                <View className='justify-center  w-full items-center flex-row gap-x-3 '>
                    <Text className='text-secondary pt-2 text-base -ml-7'>Check your email</Text>
                </View>
            </View>

            <Text className='text-blackText pt-4 text-base'>We sent you an email with a link that will log you into your account.</Text>

            <Link className="bg-secondary text-base py-3 rounded-xl text-center mt-40" href={'/(auth)/email'}>Open email app</Link>


        </SafeAreaView>
    )
}
export default Screen