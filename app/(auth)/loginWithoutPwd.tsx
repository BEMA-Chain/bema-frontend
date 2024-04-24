import Email from '@/assets/icons/email'
import Back from '@/components/utils/Back'
import { Link } from 'expo-router'
import { View, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const Screen = (props: Props) => {
    return (
        <SafeAreaView className='h-full bg-primary px-6 py-10'>
            <View className='flex-row '>
                <Back />
                <View className='justify-center  w-full items-center flex-row gap-x-3 -ml-4 '>
                    <Text className='text-base text-secondary'>Log in without password</Text>
                </View>
            </View>
            <View className='py-6'>
                <Text className='text-blackText text-xl pb-4'>Email</Text>
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
                <Text className='text-blackText pt-2 text-xs'>We'll send you an email with a link that will log you in.</Text>

                <Link className="bg-secondary text-base py-3 rounded-xl text-center mt-40" href={'/checkEmail'}>Get link</Link>
            </View>



        </SafeAreaView>
    )
}
export default Screen