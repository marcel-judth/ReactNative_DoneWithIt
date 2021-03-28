import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';


function WelcomeScreen() {
    return (
        <ImageBackground blurRadius={10} source={require('../assets/background.jpg')} style={styles.background}>

            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}
                />
                <Text style={styles.tagline} >here is a tagline</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" color="primary" onPress={() => console.log("tapped")} />
                <AppButton title="register" color="secondary" onPress={() => console.log("tapped")} />

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        padding: 20,
        width: '100%'
    },
    logo: {
        width: 100,
        height: 100,

    },
    logoContainer: {
        position: 'absolute',
        top: '10%',
        alignItems: 'center'
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    },
});

export default WelcomeScreen;