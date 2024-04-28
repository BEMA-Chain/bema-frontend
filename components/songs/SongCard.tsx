import Options from '@/assets/icons/options'
import { recommended } from '@/assets/images'
import { View, Text, Image, TouchableOpacity } from 'react-native'
type Props = {}
const SongCard = (props: Props) => {
    return (
        <View className='flex-row mb-6'>
            <Image className='h-[56] w-[56] ' source={recommended} />
            <View className='ml-4'>
                <Text className='text-blackText font-medium text-base pb-2'>SongCard</Text>
                <Text className='text-blackText text-sm'>SongCard</Text>
            </View>

            <TouchableOpacity className='rotate-90 ml-auto mr-6'>
                <Options />
            </TouchableOpacity>
        </View>
    )
}
export default SongCard