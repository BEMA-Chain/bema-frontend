import { Link } from 'expo-router'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const Screen = (props: Props) => {
    return (
        <SafeAreaView className='h-full bg-primary px-6'>
            <View className='justify-between flex-1 py-10'>
                <View className="">
                    <Image className=" w-32 h-32" source={require('../../assets/images/onboard/play.png')} />
                </View>
                <View className=" ">

                    <Text className="text-center text-2xl text-goldText pb-6">Non euismod senectus vitae</Text>
                    <Text className="text-center text-base text-blackText pb-10">Tincidunt sed consequat non velit adipiscing elementum. Quam quis iaculis tristique quis pellentesque gravida ac.</Text>
                    <Link className="bg-secondary text-base py-3 rounded-xl text-center mb-2" href={'/email'}>Register</Link>
                    <Link className="text-base text-secondary py-3 rounded-xl text-center" href={'/login'}>Log in</Link>
                </View>
                <View className="items-end">
                    <Image className=" w-32 h-32" source={require('../../assets/images/onboard/melody.png')} />
                </View>
            </View>

        </SafeAreaView>
    )
}
export default Screen