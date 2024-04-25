import { View, Text } from 'react-native'
type Props = {}
const SongCard = (props: Props) => {
    return (
        <View className='flex-row mb-6'>
            <View className='h-[56] w-[56] bg-secondary rounded-full'></View>
            <View className='ml-4'>

                <Text className='text-blackText font-medium text-base pb-2'>SongCard</Text>
                <Text className='text-blackText text-sm'>SongCard</Text>
            </View>
            <Text className='text-blackText ml-auto'>options</Text>
        </View>
    )
}
export default SongCard