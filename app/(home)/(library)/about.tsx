import { Chevron } from '@/assets/icons'
import Back from '@/components/utils/Back'
import { Link } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const About = (props: Props) => {
    return (
        <SafeAreaView className="flex-1 bg-primary">

            <View className='flex-row px-6 pt-10 pb-2'>
                <Back />
                <Text className='pl-4 text-xl text-secondary'>About BEMA</Text>
            </View>
            <View className=' flex-1 px-6  '>

                {/* Push notifications */}

                <View className='pt-6 '>
                    <Text className='text-blackText text-base pb-1'>BEMA Terms and condition</Text>
                    <Text className='text-[#B0B2B5] text-xs'>Get notifications about the latest uploads</Text>
                </View>

                <View className='pt-4 '>
                    <Text className='text-blackText text-base pb-1'>Privacy policy</Text>
                    <Text className='text-[#B0B2B5] text-xs'>Software that helped us</Text>
                </View>
                <View className='pt-4 '>
                    <Text className='text-blackText text-base pb-1'>Third-party software</Text>
                    <Text className='text-[#B0B2B5] text-xs'>Software that helped us</Text>
                </View>
                <View className='pt-4 '>
                    <Text className='text-blackText text-base pb-1'>Version</Text>
                    <Text className='text-[#B0B2B5] text-xs'>8.33.234</Text>
                </View>

            </View>
        </SafeAreaView>
    )
}
export default About