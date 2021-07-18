import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Pressable, Dimensions } from 'react-native';
import RewardPrevious from './RewardPrevious';

const RewardLoad = () => {


    const maxPoints = 300
    const [newPoints, setNewpoints] = useState(100)
    let pointsToBloom = maxPoints - newPoints;



    const [rewardInfo, setRewardinfo] = useState({ rewardImage: require('../assets/Seed.png'), rewardMessage: 'You have just planted a new seed. Complete your first task to grow your plant' });

    const [points, setPoints] = useState({
        currentPoints: newPoints, message: rewardInfo.rewardMessage,
        pointsToBloom: pointsToBloom, rewardImage: rewardInfo.rewardImage
    });

    const [previousRewards, setpreviousRewards] = useState([
        // [100, 'Welcome!', 200, require('../assets/Seed.png')],
        // [100, 'Welcome!', 200, require('../assets/Seed.png')],
    ])


    console.log(previousRewards)
    // Function to determine add points  

    function addPoints(e) {

        e.preventDefault()

        setpreviousRewards([...previousRewards,
        [points.currentPoints, points.message, points.pointsToBloom, points.rewardImage]
        ])

        const revisedPoints = newPoints + 100

        if (newPoints < maxPoints) {
            setNewpoints(revisedPoints);
        }

        else {
            setNewpoints(100)
        }

        // rewardOutput(newPoints);
    }


    function updateOutput(e) {

        e.preventDefault()

        const pointsToBloom = maxPoints - newPoints;

        setPoints({
            currentPoints: newPoints, message: rewardInfo.rewardMessage,
            pointsToBloom: pointsToBloom, rewardImage: rewardInfo.rewardImage
        });
    }


    // Function to determine which state of flower to present  

    function rewardOutput(newPoints) {

        if (newPoints == 300) {
            setRewardinfo({
                rewardImage: data[0][0].image,
                rewardMessage: data[0][0].message
            });
        }

        else if (newPoints == 100) {
            setRewardinfo({
                rewardImage: data[1][0].image,
                rewardMessage: data[1][0].message
            });
        }

        else if (newPoints == 200) {
            setRewardinfo({
                rewardImage: data[2][0].image,
                rewardMessage: data[2][0].message
            });
        }

        else {
            setRewardinfo({
                rewardImage: data[0][0].image,
                rewardMessage: data[0][0].message
            })
        }
    }



    return (

        < View style={styles.layout} >
            <View style={styles.rewardBox}>
                <Pressable onPress={(e) => { addPoints(e); rewardOutput(newPoints); updateOutput(e) }} style={styles.button}>
                    <Text>Complete Task </Text>
                    </Pressable>
                <Text>Current points</Text>
                <Text style={styles.currentPointsDisplay}> {points.currentPoints} </Text>
                <Text style={styles.messageRewardsDisplay}>{points.message}</Text>
                <Image source={points.rewardImage} style={styles.rewardPic} />
            </View>
            <View style={styles.previousRewards}>
                <Text style={styles.pageTitle}>COLLECTION OF REWARDS</Text>
                <RewardPrevious previousRewards={previousRewards} />
            </View>

        </View >

    )
};


// Mock dataset 

let data = [
    [{ image: require('../assets/Seed.png'), message: "You have just planted a new seed. Complete your first task to water your plant." }],
    [{ image: require('../assets/Structure.png'), message: "One more task and your flower will bloom!" }],
    [{ image: require('../assets/Flower.png'), message: "Congratulations! You have harvested a new flower. Smell the roses and then complete another task to plant a new seed!" }],
]


export default RewardLoad;


// Styles

const styles = StyleSheet.create({



    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    // Style of the box holding the reward
    rewardBox: {
        height: 300,
        width: 300,
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    rewardPic: {
        marginTop: 50,
        height: 250,
        width: 250,

    },

    previousRewards: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 15,
        height: 20,
        width: Dimensions.get('window').width,
        marginTop: 60,
        flex: 1,
        borderColor: '#F4A460',
        backgroundColor: '#FFDAB9',
    },

    currentPointsDisplay: {
        fontSize: 30,   
        color: '#D2691E',
    }, 

    messageRewardsDisplay: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
    },

    button: {
        backgroundColor: 'lightgray',
        height: 50,
        width: 200,
        color: 'white',
        margin: 10, 
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    pageTitle: {
        fontSize: 16,
        color: '#D2691E',

    }
});


