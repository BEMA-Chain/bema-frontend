import Email from '@/assets/icons/email'
import Back from '@/components/utils/Back'
import { Link } from 'expo-router'
import { View, Text, TextInput, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const Screen = (props: Props) => {
    return (
        <SafeAreaView className='h-full bg-primary  py-10'>
            <ScrollView className='px-6'>
                <Text className='text-2xl text-secondary'>Choose 3 or more artists you like</Text>
                <View className='py-10 flex-row flex-wrap justify-between gap-x-8 gap-y-16'>

                    <View>
                        <Image className='' source={require('../../assets/images/artist.png')} />
                        <Text className='text-secondary text-center'>Wizkid</Text>
                    </View>
                    <View>
                        <Image className='' source={require('../../assets/images/artist.png')} />
                        <Text className='text-secondary text-center'>Wizkid</Text>
                    </View>
                    <View>
                        <Image className='' source={require('../../assets/images/artist.png')} />
                        <Text className='text-secondary text-center'>Wizkid</Text>
                    </View>
                    <View>
                        <Image className='' source={require('../../assets/images/artist.png')} />
                        <Text className='text-secondary text-center'>Wizkid</Text>
                    </View>
                    <View>
                        <Image className='' source={require('../../assets/images/artist.png')} />
                        <Text className='text-secondary text-center'>Wizkid</Text>
                    </View>
                    <View>
                        <Image className='' source={require('../../assets/images/artist.png')} />
                        <Text className='text-secondary text-center'>Wizkid</Text>
                    </View>
                    <View>
                        <Image className='' source={require('../../assets/images/artist.png')} />
                        <Text className='text-secondary text-center'>Wizkid</Text>
                    </View>
                    <View>
                        <Image className='' source={require('../../assets/images/artist.png')} />
                        <Text className='text-secondary text-center'>Wizkid</Text>
                    </View>
                    <View>
                        <Image className='' source={require('../../assets/images/artist.png')} />
                        <Text className='text-secondary text-center'>Wizkid</Text>
                    </View>
                    <View>
                        <Image className='' source={require('../../assets/images/artist.png')} />
                        <Text className='text-secondary text-center'>Wizkid</Text>
                    </View>
                    <View>
                        <Image className='' source={require('../../assets/images/artist.png')} />
                        <Text className='text-secondary text-center'>Wizkid</Text>
                    </View>
                    <View>
                        <Image className='' source={require('../../assets/images/artist.png')} />
                        <Text className='text-secondary text-center'>Wizkid</Text>
                    </View>
                </View>

            </ScrollView>
            <Link className="absolute left-[8%]  bottom-10 w-full bg-secondary  justify-center items-center text-base py-3 rounded-xl text-center max-w-[320px]" href={'/(home)/'}>Continue</Link>
        </SafeAreaView>
    )
}
export default Screen