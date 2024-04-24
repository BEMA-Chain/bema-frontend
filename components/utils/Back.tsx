import { View, Text, TouchableOpacity } from 'react-native'
import { Path, Rect, Svg } from 'react-native-svg'

type Props = {}
const Back = (props: Props) => {
    return (
        <TouchableOpacity>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                <Path d="M15 18L9 12L15 6" stroke="#FFD345" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </Svg>

        </TouchableOpacity>
    )
}
export default Back