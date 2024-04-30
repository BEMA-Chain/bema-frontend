import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
type Props = {}
const layout = (props: Props) => {
    return <Stack
        screenOptions={{
            headerShown: false,
        }}
    />
}
export default layout