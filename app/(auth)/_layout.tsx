import { Stack } from "expo-router"

type Props = {}
const _layout = (props: Props) => {
    return <Stack
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="index" />
        <Stack.Screen name="email" />
        {/* <Stack.Screen name="register" /> */}
    </Stack>

}
export default _layout