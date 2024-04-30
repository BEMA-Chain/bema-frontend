import { Chevron } from '@/assets/icons'
import Back from '@/components/utils/Back'
import { Link } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const Settings = (props: Props) => {
    return (
        <SafeAreaView className="flex-1 bg-primary">

            <View className='flex-row px-6 pt-10 pb-2'>
                <Back />
                <Text className='pl-4 text-xl text-secondary'>Settings</Text>
            </View>
            <View className=' flex-1 px-6  '>

                {/* Push notifications */}

                <View className='pt-6 pb-10'>
                    <Text className='text-blackText text-xl pb-4'>Today</Text>
                    <Text className='text-blackText text-xs pb-4'>Get notifications about the latest uploads</Text>


                </View>
                <View className='flex-row justify-between pb-10'>
                    <Text className='text-blackText text-base'>Language</Text>
                    <TouchableOpacity className='flex-row items-center gap-x-2'>
                        <Text className='text-[#888C90] text-xs'>English</Text>
                        <Chevron />
                    </TouchableOpacity>
                </View>
                <Link className='text-blackText text-xl' href={'/(home)/(library)/about'}>About Us</Link>


            </View>
        </SafeAreaView>
    )
}
export default Settings