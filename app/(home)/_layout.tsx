import { Stack } from "expo-router"

type Props = {}
const Layout = (props: Props) => {
    return <Stack
        screenOptions={{
            headerShown: false
        }}
    />


}
export default Layout