import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Pressable, Dimensions } from 'react-native';
import RewardPrevious from './RewardPrevious';

const RewardLoad = ({ addPoints, rewardOutput, updateOutput, points, newPoints }) => {


    // const maxPoints = 300
    // const [newPoints, setNewpoints] = useState(0)
    // let pointsToBloom = maxPoints - newPoints;
    // const [totalPoints, setTotalpoints] = useState(0)


    // const [rewardInfo, setRewardinfo] = useState({ rewardImage: require('../assets/Seed.png'), rewardMessage: 'Plant your first flower by completing a task or a Pomodoro timer.' });

    // const [points, setPoints] = useState({
    //     currentPoints: newPoints, message: rewardInfo.rewardMessage,
    //     pointsToBloom: pointsToBloom, rewardImage: rewardInfo.rewardImage
    // });

    // const [previousRewards, setpreviousRewards] = useState([
    //     // [100, 'Welcome!', 200, require('../assets/Seed.png')],
    //     // [100, 'Welcome!', 200, require('../assets/Seed.png')],
    // ])


    // console.log(previousRewards)
    // // Function to determine add points  

    // function addPoints(e) {

    //     e.preventDefault()

    //     setpreviousRewards([...previousRewards,
    //     [points.currentPoints, points.message, points.pointsToBloom, points.rewardImage]
    //     ])

    //     const revisedPoints = newPoints + 100
    //     const revisedTotalPoints = totalPoints + 100

    //     if (newPoints < maxPoints) {
    //         setNewpoints(revisedPoints);
    //         setTotalpoints(revisedTotalPoints)
    //     }

    //     else {
    //         setNewpoints(100)
    //         setTotalpoints(revisedTotalPoints)
    //     }

    //     // rewardOutput(newPoints);
    // }


    // function updateOutput(e) {

    //     e.preventDefault()

    //     const pointsToBloom = maxPoints - newPoints;

    //     setPoints({
    //         currentPoints: newPoints, message: rewardInfo.rewardMessage,
    //         pointsToBloom: pointsToBloom, rewardImage: rewardInfo.rewardImage
    //     });
    // }


    // // Function to determine which state of flower to present  

    // function rewardOutput(newPoints) {

    //     if (newPoints == 300) {
    //         setRewardinfo({
    //             rewardImage: data[0][0].image,
    //             rewardMessage: data[0][0].message
    //         });
    //     }

    //     else if (newPoints == 100) {
    //         setRewardinfo({
    //             rewardImage: data[1][0].image,
    //             rewardMessage: data[1][0].message
    //         });
    //     }

    //     else if (newPoints == 200) {
    //         setRewardinfo({
    //             rewardImage: data[2][0].image,
    //             rewardMessage: data[2][0].message
    //         });
    //     }

    //     else {
    //         setRewardinfo({
    //             rewardImage: data[0][0].image,
    //             rewardMessage: data[0][0].message
    //         })
    //     }
    // }



    return (
        <View style={styles.layout}>
            <Text> STATUS OF NEXT REWARD </Text>

            <View style={styles.layoutcenter}>
                <Text>Points required to claim reward</Text>
                <Text style={styles.currentPointsDisplay}> {points.pointsToBloom} </Text>
                <Image source={points.rewardImage} style={styles.rewardPic} />
                <Text style={styles.messageRewardsDisplay}>{points.message}</Text>
                <Pressable onPress={(e) => { addPoints(e); rewardOutput(newPoints); updateOutput(e) }} style={styles.button}>
                    <Text>Complete Task </Text>
                </Pressable>
            </View>


        </View>

    )
};


// Mock dataset 

// let data = [
//     [{ image: require('../assets/Seed.png'), message: "You have just planted a new seed. Complete your first task to water your plant." }],
//     [{ image: require('../assets/Structure.png'), message: "One more task and your flower will bloom!" }],
//     [{ image: require('../assets/Flower.png'), message: "Congratulations! You have harvested a new flower. Smell the roses and then complete another task to plant a new seed!" }],
// ]


export default RewardLoad;


// Styles

const styles = StyleSheet.create({

    layout: {
        marginBottom: "7%",
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },

    layoutcenter: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "5%",
    },

    // Style of the box holding the reward
    rewardBox: {

        justifyContent: 'center',
        alignItems: 'center',
    },

    rewardPic: {
        marginTop: 50,
        height: 250,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',

    },



    currentPointsDisplay: {
        fontSize: 30,
        color: '#D2691E',
        justifyContent: 'center',
        alignItems: 'center',
    },

    messageRewardsDisplay: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
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

    },


});


