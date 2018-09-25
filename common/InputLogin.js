import React from 'react';
import {TextInput, View, Image} from 'react-native';
import AppStyleSheet from './AppStyleSheet';
import Dimensions from 'Dimensions';
export class InputLogin extends React.Component {
    props: {
        placeholder: string,
        leftIcon: Object,
        textSize: number,
        onTextChange: (text) => void,
        onTextSubmit: (text) => void,
        marginTop: number,
        marginHorizontal: number,
        secureTextEntry: bool
    }
    render () {
        let widthInput = WIDTH_DEVICE - this.props.marginHorizontal*2 - 35;
        return(
            <View style={[styles.container,{marginTop: this.props.marginTop},
                {marginHorizontal: this.props.marginHorizontal},
                {width:WIDTH_DEVICE - this.props.marginHorizontal*2},
                ]}>
                <Image source = {this.props.leftIcon} style={styles.styleImage}/>
                <TextInput 
                    style = {[styles.input, { fontSize: this.props.textSize }, {width:widthInput}]}
                    placeholder = {this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    onChangeText = { (text) => this.props.onTextChange(text) } 
                    onSubmitEditing = { (text) => this.props.onTextSubmit(text) }/>
            </View>
        )
    }
}
const WIDTH_DEVICE = Dimensions.get('window').width;
const HEIGHT_DEVICE = Dimensions.get('window').height;
const styles = AppStyleSheet.create({
    input: {
        color: '#fff',
        height: '100%',
        padding: 10,
        width: WIDTH_DEVICE - 75,
    },
    container: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    styleImage: {
        width: 22,
        height: 22,
        marginLeft: 10,
    }
})
