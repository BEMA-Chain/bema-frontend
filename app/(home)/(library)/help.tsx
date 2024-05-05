import { Chevron, Library, Search } from '@/assets/icons'
import Back from '@/components/utils/Back'
import { Link, useNavigation } from 'expo-router'
import { View, Text, TouchableOpacity, TextInput, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const Help = (props: Props) => {
    const navigate = useNavigation()
    return (
        <SafeAreaView className="flex-1 bg-primary">
            <View className='flex-row px-6 pt-10 pb-2'>
                <Back />
                <Text className='pl-4 text-xl text-secondary'>Help</Text>
            </View>
            <View className=' flex-1 px-6  '>
                <View className='pt-6 '>
                    <View className='p-4 border-secondary border rounded-xl flex-row items-center'>
                        <Search color={'#FFD345'} />
                        <TextInput
                            className='flex-1 ml-2'
                            placeholder='Search help'
                            placeholderTextColor={'#FFD345'}
                        />

                    </View>
                </View>
                <Text className='text-secondary text-xl pb-4 pt-4'>Popular help resources</Text>

                <View className='pt-10'>
                    <Link asChild href={'/(home)/(library)/helpText'} >
                        <TouchableOpacity className='flex-row'>
                            <Library />
                            <Text className='text-blackText text-base ml-4'>How to Sign Up on BEMA lo</Text>
                        </TouchableOpacity>
                    </Link>
                </View>



                <View className='pt-[22]'>
                    <Link asChild href={'/(home)/(library)/helpText'} >
                        <TouchableOpacity className='flex-row'>
                            <Library />
                            <Text className='text-blackText text-base ml-4 '>Forgot your Password</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
                <View className='pt-[22]'>
                    <Link asChild href={'/(home)/(library)/helpText'} >
                        <TouchableOpacity className='flex-row'>
                            <Library />
                            <Text className='text-blackText text-base ml-4 '>Forgot Login Details</Text>
                        </TouchableOpacity>
                    </Link>
                </View>

                <View className='pt-[22]'>
                    <Link asChild href={'/(home)/(library)/helpText'} >
                        <TouchableOpacity className='flex-row'>
                            <Library />
                            <Text className='text-blackText text-base ml-4 w-[222]'>How to link social media to BEMA account</Text>
                        </TouchableOpacity>
                    </Link>
                </View>


            </View>
        </SafeAreaView>
    )
}
export default Help