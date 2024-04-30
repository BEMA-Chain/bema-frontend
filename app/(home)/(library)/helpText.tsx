import { Chevron } from '@/assets/icons'
import Back from '@/components/utils/Back'
import { Link } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const Help = (props: Props) => {
    return (
        <SafeAreaView className="flex-1 bg-primary">

            <View className='flex-row px-6 pt-10 pb-2'>
                <Back />
                <Text className='pl-4 text-xl text-secondary'>Help</Text>
            </View>
            <View className=' flex-1 px-6  '>
                <Text className='text-secondary text-xl pb-4 pt-6'>How to Sign Up on BEMA</Text>

                <View className='pt-4 '>
                    <Text className='text-blackText text-base pb-6'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</Text>
                    <Text className='text-blackText text-base'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco </Text>
                </View>

                <View className='pt-10'>
                    <Text className='text-secondary text-lg text-center'>Was this helpful?</Text>
                    <View className='pt-4 justify-center flex-row gap-2'>
                        <TouchableOpacity className='border-secondary border py-4 w-[84] rounded-xl'>
                            <Text className='text-secondary text-center'>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='border-secondary border py-4 w-[84] rounded-xl'>
                            <Text className='text-secondary text-center'>No</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}
export default Help