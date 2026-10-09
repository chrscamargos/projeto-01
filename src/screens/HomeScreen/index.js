import { Image, Text, View } from "react-native"
import logo from "../../assets/images/logo.png"
import { styles } from "./style"
import {useFonts} from 'expo-font'
import { fonts } from "../../themes/fonts"
import { OurOffers } from "../../components/OurOffers"

export const HomeScreen = () => {
    useFonts ({
        Oswald: require('../../assets/fonts/Oswald-VariableFont_wght.ttf')
    })

    return(
        <View style={styles.containerHomeScreen}>
            <Image source={logo} style={styles.logoHome}/>
            <OurOffers/>
        </View>
    )
}