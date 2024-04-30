import Options from '@/assets/icons/options'
import { avatarTwo } from '@/assets/images'
import { View, Text, Image, TouchableOpacity } from 'react-native'
type Props = {}
const HistoryCard = (props: Props) => {
    return (
        <View className='flex-row mb-6 items-center'>
            <Image className='h-[56] w-[56] ' source={avatarTwo} />
            <View className='ml-4'>
                <Text className='text-blackText font-medium text-base '>HistoryCard</Text>
                <Text className='text-blackText text-sm'>HistoryCard</Text>
            </View>

            <TouchableOpacity className=' ml-auto'>
                <Options />
            </TouchableOpacity>
        </View>
    )
}
export default HistoryCard