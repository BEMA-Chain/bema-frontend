import Calendar from '@/assets/icons/calendar'
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
                    <View className='h-2 w-2 bg-white rounded-full'>
                    </View>
                    <View className='h-2 w-2 bg-white rounded-full mr-2'>
                    </View>
                    <Calendar />
                    <View className='h-2 w-2 bg-white rounded-full'>
                    </View>

                </View>
            </View>
            <View className='py-6'>
                <Text className='text-secondary text-2xl'>Date of birth.</Text>
            </View>
            <TextInput
                // style={styles.poppinsRegular}
                placeholderTextColor="#151515"
                placeholder="DD/MM/YY"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                selectionColor="white"
                maxLength={32}
                className='  bg-[#F5F5F5]  p-5 rounded-xl text-base '
            />
            <Link className="bg-secondary text-base py-3 rounded-xl text-center mt-40" href={'/profile'}>Continue</Link>


        </SafeAreaView>
    )
}
export default Screen