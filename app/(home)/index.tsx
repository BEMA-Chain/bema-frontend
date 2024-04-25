import SongCard from '@/components/songs/SongCard'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
type Props = {}
const index = (props: Props) => {
    return (
        <SafeAreaView className="flex-1 bg-primary">
            <View className=' flex-1 px-6 py-10'>
                <View className='flex-row justify-between'>
                    <Text className='text-[22px] text-secondary font-medium'>Good evening</Text>
                    <View className='h-8 w-8 rounded-full bg-secondary'></View>
                </View>
                <Text className='pt-6 text-xl text-secondary'>Recommendations</Text>
                <View>
                    <SongCard />
                </View>

                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima laudantium necessitatibus veniam ex saepe a illo eos? Reprehenderit obcaecati eligendi placeat corrupti, voluptatum dolores! Temporibus voluptates nam cum consequuntur aut?</Text>
            </View>
        </SafeAreaView>
    )
}
export default index