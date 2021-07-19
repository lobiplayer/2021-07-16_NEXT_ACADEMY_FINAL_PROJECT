import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Header } from 'react-native';
import RewardLoad from '../components/RewardLoad';
import RewardPrevious from '../components/RewardPrevious';
import RewardTotal from '../components/RewardTotal';

const Rewards = () => {


    const maxPoints = 300
    const [newPoints, setNewpoints] = useState(0)
    let pointsToBloom = maxPoints - newPoints;
    const [totalPoints, setTotalpoints] = useState(0)


    const [rewardInfo, setRewardinfo] = useState({ rewardImage: require('../assets/Seed.png'), rewardMessage: 'Plant your first flower by completing a task or a Pomodoro timer.' });

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
        const revisedTotalPoints = totalPoints + 100

        if (newPoints < maxPoints) {
            setNewpoints(revisedPoints);
            setTotalpoints(revisedTotalPoints)
        }

        else {
            setNewpoints(100)
            setTotalpoints(revisedTotalPoints)
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


    let data = [
        [{ image: require('../assets/Seed.png'), message: "You have just planted a new seed. Complete another task and watch your plant grow." }],
        [{ image: require('../assets/Structure.png'), message: "One more task and your flower will bloom!" }],
        [{ image: require('../assets/Flower.png'), message: "Congratulations! You have harvested a new flower. Smell the roses and then complete another task to plant a new seed!" }],
    ]



    return (

        <ScrollView contentContainerStyle={styles.layout}>
            <RewardTotal totalPoints={totalPoints} />
            <RewardLoad 
            addPoints={addPoints} rewardOutput={rewardOutput} updateOutput={updateOutput} 
            points = {points} totalPoints = {totalPoints} newPoints = {newPoints}/>
            <RewardPrevious previousRewards={previousRewards} />


        </ScrollView>

    )
}





export default Rewards;


// Styles

const styles = StyleSheet.create({
    layout: {
        flexGrow: 3,
        marginTop: "15%",
        margin: "5%",
    },


});
