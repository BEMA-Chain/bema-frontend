import { Dollar, Info, Send } from '@/assets/icons'
import Email from '@/assets/icons/email'
import Back from '@/components/utils/Back'
import { Link } from 'expo-router'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const Screen = (props: Props) => {
    return (
        <SafeAreaView className='h-full bg-primary px-6 py-10'>
            <View className=' flex-row items-center'>
                <Back />
                <View className='  items-center  w-full '>
                    <TouchableOpacity className='bg-secondary px-6 py-3 rounded-xl -ml-8'>
                        <Text className='text-base text-black'>Connect wallet</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View className=' pt-4 items-center'>
                <TouchableOpacity>
                    <Text className='text-white'>Main Wallet</Text>
                </TouchableOpacity>
                <View className='flex-row gap-x-10 pt-4'>
                    <TouchableOpacity>
                        <Send />
                        <Text className='text-white pt-2'>Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Dollar />
                        <Text className='text-white pt-2'>Withraw</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className='flex-row items-center pt-9 px-6'>
                <TouchableOpacity>
                    <Info />
                </TouchableOpacity>
                <Text className='absolute rounded-xl -bottom-14 p-2 bg-white z-10 w-full border border-white'>Points acquired during the beta phase are not redeemable! </Text>
                <Text className='text-white pl-1 text-base'>Points: 1,500 bemas</Text>
                <TouchableOpacity className='ml-4 border border-secondary px-6 py-3 rounded-xl'>
                    <Text className='text-white'>Redeem</Text>
                </TouchableOpacity>
            </View>

            <View className='pt-8'>
                <Text className='text-secondary text-base'>Transaction History</Text>
                <View className=' pt-6 flex-row'>
                    <Send />
                    <View className='pl-4'>
                        <Text className='text-white pb-1'>Send</Text>
                        <Text className='text-white'>To: 0x7274dh...75GD3A</Text>
                    </View>
                    <Text className='text-white ml-auto'>0.005ETH</Text>
                </View>

                <View className=' pt-6 flex-row'>
                    <Dollar />
                    <View className='pl-4'>
                        <Text className='text-white pb-1'>Withdraw</Text>
                        <Text className='text-white'>To: 0x7274dh...75GD3A</Text>
                    </View>
                    <Text className='text-white ml-auto'>0.005ETH</Text>
                </View>
                <View className=' pt-6 flex-row'>
                    <Dollar />
                    <View className='pl-4'>
                        <Text className='text-white pb-1'>Withdraw</Text>
                        <Text className='text-white'>To: 0x7274dh...75GD3A</Text>
                    </View>
                    <Text className='text-white ml-auto'>0.005ETH</Text>
                </View>

            </View>




        </SafeAreaView>
    )
}
export default Screen