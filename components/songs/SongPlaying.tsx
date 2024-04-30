import { Play, SkipNext } from '@/assets/icons'
import { recommended } from '@/assets/images'
import { View, Text, Image, TouchableOpacity } from 'react-native'
type Props = {}
const SongPlaying = (props: Props) => {
    return (
        <View className='px-6 py-2 flex-row'>
            <View>
                <Image className='h-[56] w-[56] ' source={recommended} />
            </View>
            <View className='ml-4'>
                <Text className='text-white text-base'>Song Playing</Text>
                <Text className='text-[#D0D0D0]'>Song Playing</Text>
            </View>
            <View className='flex-row ml-auto '>
                <TouchableOpacity className='pr-4'>
                    <Play />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SkipNext />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default SongPlaying