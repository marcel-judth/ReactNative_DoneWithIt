import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen({ image, title, distance, }) {
    return (
        <View>
            <Image source={require('../assets/jacket.jpg')} style={styles.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Coding Session</AppText>
                <AppText style={styles.distance}>2km</AppText>
                <View style={styles.userContainer}>
                    <ListItem image={require('../assets/Marcel.jpg')} title='Marcel Judth' subTitle='5 Listings' />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    distance: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginTop: 40,
    }
})

export default ListingDetailsScreen;