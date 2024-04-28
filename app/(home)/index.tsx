import RecentlyPlayed from '@/components/songs/RecentlyPlayed'
import SongCard from '@/components/songs/SongCard'
import SongPlaying from '@/components/songs/SongPlaying'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const index = (props: Props) => {
    return (
        <SafeAreaView className="flex-1 bg-primary">
            <ScrollView className=' flex-1 px-6 py-10'>
                <View className='flex-row justify-between'>
                    <Text className='text-[22px] text-secondary font-medium'>Good evening</Text>
                    <View className='h-8 w-8 rounded-full bg-secondary'></View>
                </View>
                <Text className='pt-6 text-xl text-secondary'>Recommendations</Text>
                <View className='pt-[22px]'>
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                </View>
                <Text className='pt-6 text-xl text-secondary'>Recently played</Text>
                <View className='pt-[22px] flex-row justify-between pb-10 flex-wrap '>
                    <RecentlyPlayed />
                    <RecentlyPlayed />
                    <RecentlyPlayed />
                </View>
            </ScrollView>
            <SongPlaying />
        </SafeAreaView>
    )
}
export default index