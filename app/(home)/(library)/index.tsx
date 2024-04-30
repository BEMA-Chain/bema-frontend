import { Help, History, Logout, Settings, Wallet } from '@/assets/icons'
import { avatar } from '@/assets/images'
import RecentlyPlayed from '@/components/songs/RecentlyPlayed'
import SongCard from '@/components/songs/SongCard'
import SongPlaying from '@/components/songs/SongPlaying'
import Back from '@/components/utils/Back'
import { Link } from 'expo-router'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const Index = (props: Props) => {
    return (
        <SafeAreaView className="flex-1 bg-primary">
            <ScrollView className=' flex-1 px-6 py-10'>
                <View className='flex-row '>
                    <Back />
                    <Text className='pl-4 text-xl text-secondary'>Profile</Text>
                </View>

                <View className='flex-row pt-10'>
                    <View className='pb-2'>
                        <Image className='w-[56] h-[56]' source={avatar} />
                    </View>
                    <View className='pl-4'>
                        <Text className='text-xl text-blackText pb-2'>Jane Foster</Text>
                        <Text className='text-grayText'>Janefoster@gmail.com</Text>
                    </View>
                </View>
                <View className='pt-10'>

                    <Link asChild className=' pb-8' href={'/(home)/(library)/wallet'}>
                        <TouchableOpacity className=' flex-row '>
                            <View className=''>
                                <Wallet />
                            </View>
                            <Text className=' text-blackText text-base  border-white ml-4'>Wallet</Text>
                        </TouchableOpacity>
                    </Link>

                    <Link asChild className=' pb-8' href={'/(home)/(library)/history'}>
                        <TouchableOpacity className=' flex-row '>
                            <View className=''>
                                <History />
                            </View>
                            <Text className=' text-blackText text-base  border-white ml-4'>History</Text>
                        </TouchableOpacity>
                    </Link>

                    <Link asChild className=' pb-8' href={'/(home)/(library)/help'}>
                        <TouchableOpacity className=' flex-row '>
                            <View className=''>
                                <Help />
                            </View>
                            <Text className=' text-blackText text-base  border-white ml-4'>Help</Text>
                        </TouchableOpacity>
                    </Link>

                    <Link asChild className=' pb-8' href={'/(home)/(library)/settings'}>
                        <TouchableOpacity className=' flex-row '>
                            <View className=''>
                                <Settings />
                            </View>
                            <Text className=' text-blackText text-base  border-white ml-4'>Settings</Text>
                        </TouchableOpacity>
                    </Link>

                    <TouchableOpacity className='pb-8 flex-row '>
                        <Logout />
                        <Link className='ml-4' href={'/'}>
                            <Text className='text-blackText text-base ='>Logout</Text>
                        </Link>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Index