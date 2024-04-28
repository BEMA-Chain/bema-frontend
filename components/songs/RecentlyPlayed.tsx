import { recentlyPlayed } from '@/assets/images'
import { View, Text, Image } from 'react-native'
type Props = {}
const RecentlyPlayed = (props: Props) => {
    return (
        <View className=' mb-6'>
            <Image source={recentlyPlayed} />
            <Text className='text-blackText text-center pt-4'>RecentlyPlayed</Text>
            <Text className='pt-2 text-center text-[#B0B2B5]'>Artiste</Text>
        </View>
    )
}

export default RecentlyPlayed