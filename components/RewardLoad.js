import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text } from 'react-native';
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
                <Button title='Complete task' type='outline' onPress={(e) => { addPoints(e); rewardOutput(newPoints); updateOutput(e) }} />
                <Text>{points.message}</Text>
                <Text>{points.currentPoints}</Text>
                <Image source={points.rewardImage} style={styles.rewardBox} />
            </View>
            <View style={styles.previousRewards}>
                <Text>Completed tasks</Text>
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
        margin: 50,
    },

    // Style of the box holding the reward
    rewardBox: {
        borderWidth: 1,
        height: 300,
        width: 300,
    },

    previousRewards: {
        borderWidth: 1,
        height: 50,
        marginTop: 90,
        flex: 1,
    },
});


