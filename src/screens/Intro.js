import React, { Component } from 'react';
import { View, Image, StyleSheet, Animated, Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window')
class SplashScreen extends Component {

    constructor(props){
        super(props);
    }

     static navigationOptions = {
        header: null,    
    }
    state = {
        logoOpacity: new Animated.Value(0),
        titleMarginTop: new Animated.Value(height / 2)
    }
    async componentDidMount() {
        //Add animations here
        Animated.sequence([
            //animations by sequence
            Animated.timing(this.state.logoOpacity,{
                toValue: 1,                  
                duration: 1700,              
            }),
            //Animate Text ?
            Animated.timing(this.state.titleMarginTop, {
                toValue: 10,
                duration: 1700, //1000 miliseconds = 1 second
            })
        ]).start(() => {
            //End of animations
            //How to navigate to Login ? => Use StackNavigation
            this.props.navigation.navigate("MainScreen")
        })
    }

        render() {
        return (
        <View style={styles.container}>
        <Image style={styles.image} 
        source={require('./src/assets/movie.gif')}/>
        </View>
        );
      }
    }



const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
    },
    image: {
    height: 300,
    width: 315
    }
});


export default SplashScreen;