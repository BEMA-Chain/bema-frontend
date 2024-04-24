import Email from '@/assets/icons/email'
import Person from '@/assets/icons/Person'
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
                    <View className='h-2 w-2 bg-white rounded-full'>
                    </View>
                    <View className='h-2 w-2 bg-white rounded-full'>
                    </View>
                    <View className='h-2 w-2 bg-white rounded-full mr-2'>
                    </View>
                    <Person />

                </View>
            </View>
            <View className='py-6'>
                <Text className='text-secondary text-2xl'>Set up your profile</Text>
            </View>
            <TextInput
                // style={styles.poppinsRegular}
                placeholderTextColor="#151515"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                selectionColor="white"
                maxLength={32}
                className='  bg-[#F5F5F5]  p-5 rounded-xl text-base '
            />
            <Text className='text-blackText pt-1'>By signing up, you agree to our Terms and conditions and Privacy policies. </Text>
            <Link className="bg-secondary text-base py-3 rounded-xl text-center mt-40" href={'/(auth)/email'}>Sign up</Link>


        </SafeAreaView>
    )
}
export default Screen