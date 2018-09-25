import React, {Component} from 'react';
import { StyleSheet ,ImageBackground } from 'react-native';
import bgSrc from '../assets/images/wallpaper.png';

export class LoginBackground extends Component {
    render () {
        return(
            <ImageBackground source={bgSrc} style={styles.container} resizeMode = 'cover'>
                {this.props.children}
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