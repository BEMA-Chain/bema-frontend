import HistoryCard from '@/components/history/HistoryCard'
import SongCard from '@/components/songs/SongCard'
import Back from '@/components/utils/Back'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const History = (props: Props) => {
    return (
        <SafeAreaView className="flex-1 bg-primary">

            <View className='flex-row px-6 pt-10 pb-2'>
                <Back />
                <Text className='pl-4 text-xl text-secondary'>History</Text>
            </View>
            <ScrollView className=' flex-1 px-6  '>

                <View className='pt-6'>
                    <Text className='text-secondary text-xl pb-4'>Today</Text>
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                </View>

                <View className='pt-6 pb-16'>
                    <Text className='text-secondary text-xl pb-4'>Yesterday</Text>
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default History