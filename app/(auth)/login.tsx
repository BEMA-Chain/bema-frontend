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
                <View className='justify-center  w-full items-center flex-row -ml-4 '>
                    <Text className='text-base text-secondary'>Welcome back</Text>
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
                <Text className='py-5 text-blackText text-xl'>Password</Text>
                <TextInput
                    // style={styles.poppinsRegular}
                    placeholderTextColor="#151515"
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    selectionColor="white"
                    maxLength={32}
                    className='  bg-[#F5F5F5]  p-5 rounded-xl text-base '
                />
                <Link className="bg-secondary text-base py-3 rounded-xl text-center mt-20" href={'/(home)'}>Log in</Link>
                <Link className=" text-base text-blackText pt-4 text-center " href={'/loginWithoutPwd'}>Log in without password</Link>
            </View>



        </SafeAreaView>
    )
}
export default Screen