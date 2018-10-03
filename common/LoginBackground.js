import React, {Component} from 'react';
import { StyleSheet ,ImageBackground, TouchableWithoutFeedback, Keyboard, View} from 'react-native';
import bgSrc from '../assets/images/wallpaper.png';

export class LoginBackground extends Component {
    render () {
        return(
            <ImageBackground source={bgSrc} style={styles.container} resizeMode = 'cover'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                            {this.props.children}
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    }
})