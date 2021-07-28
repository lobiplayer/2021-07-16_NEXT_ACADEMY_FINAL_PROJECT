import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Header } from 'react-native';
import RewardLoad from '../components/RewardLoad';
import RewardPrevious from '../components/RewardPrevious';
import RewardTotal from '../components/RewardTotal';
import { LoginContext } from '../LoginContext';
import { useFocusEffect } from '@react-navigation/native';


const Rewards = () => {

    const [token, setToken] = useContext(LoginContext)

    const [previouslist, setPreviouslist] = useState([[{ points: 100, state: "Seedling", task_completed: "Testing", user_id: 1 }]])

    useFocusEffect(
        React.useCallback(() => {
            fetch("https://whispering-wildwood-06588.herokuapp.com/rewardslist", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: token,

                })
            }).then(response => response.json().then(data => {

                console.log(data);
                setPreviouslist(data.rewardslist);

            }));
            return () => { };

        }, []));

    const [totalPoints, setTotalpoints] = useState(0)

    useFocusEffect(
        React.useCallback(() => {
            fetch("https://whispering-wildwood-06588.herokuapp.com/rewardslist_totalpoints", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: token,

            })
        }).then(response => response.json().then(data => {

            console.log(data);
            setTotalpoints(data.total_points);

        }));
            return () => { };

        }, []));




    const maxPoints = 500
    const pointsToBloom = maxPoints - (totalPoints % maxPoints);

    // const [points, setPoints] = useState({
    //     message: rewardInfo.rewardMessage, pointsToBloom: pointsToBloom, rewardImage: rewardInfo.rewardImage
    // });

    const [rewardInfo, setRewardinfo] = useState({ rewardImage: require('../assets/PacketofSeeds.png'), rewardMessage: 'Plant your first flower by completing a task.' });

    // Function to determine which state of flower to present  

    function rewardOutput(state) {

        const output = []

        if (state == "Seedling") {

            output.push(data[0][0].image)
            output.push(data[0][0].message)
        }


        else if (state == "Germination") {
            output.push(data[1][0].image)
            output.push(data[1][0].message)
        }

        else if (state == "Shoots") {
            output.push(data[2][0].image)
            output.push(data[2][0].message)
        }

        else if (state == "Budding") {
            output.push(data[3][0].image)
            output.push(data[3][0].message)
        }

        else if (state == "Blooming") {
            output.push(data[4][0].image)
            output.push(data[4][0].message)
        }

        else {
            output.push(data[5][0].image)
            output.push(data[5][0].message)

        }

        return output
    }


    let data = [
        [{ image: require('../assets/Seedling.png'), message: "You have just planted a new seed. Complete another task and watch your plant grow." }],
        [{ image: require('../assets/Germination.png'), message: "Your plant is growing well. Keep going!" }],
        [{ image: require('../assets/Shoots.png'), message: "Look at those green leaves." }],
        [{ image: require('../assets/Budding.png'), message: "One more task and your flower will bloom!" }],
        [{ image: require('../assets/Blooming.png'), message: "Congratulations! You have harvested a new flower. When you're ready, complete another task to plant a new seed!" }],
        [{ image: require('../assets/PacketofSeeds.png'), message: 'Plant your first flower by completing a task or a Pomodoro timer.' }],
    ]


    // const currentstate = previouslist[0][0]
    console.log(previouslist)

    return (

        <ScrollView contentContainerStyle={styles.layout}>
            <Text style={styles.header}>REWARDS</Text>
            <RewardTotal totalPoints={totalPoints} />
            <RewardLoad rewardOutput={rewardOutput} previouslist={previouslist} totalPoints={totalPoints} maxPoints={maxPoints} />
            <RewardPrevious previouslist={previouslist} rewardOutput={rewardOutput} />


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

    header: {
        height: 30,
        width: '100%',
        paddingHorizontal: 20,
        fontSize: 25,
        fontWeight: '500',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: '5%',
    },
});





// import { StatusBar } from 'expo-status-bar';
// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Header } from 'react-native';
// import RewardLoad from '../components/RewardLoad';
// import RewardPrevious from '../components/RewardPrevious';
// import RewardTotal from '../components/RewardTotal';

// const Rewards = () => {


//     const [previouslist, setPreviouslist] = useState([])

//     useEffect(() => {
//         return fetch("http://192.168.1.120:5000/rewardslist").then(response => response.json().then(data => {

//             console.log(data);
//             setPreviouslist(data.rewardslist);

//         }));
//     }, []);


//     const maxPoints = 500
//     const [newPoints, setNewpoints] = useState(0)
//     let pointsToBloom = maxPoints - newPoints;
//     const [totalPoints, setTotalpoints] = useState(0)
//     const [rewardInfo, setRewardinfo] = useState({ rewardImage: require('../assets/PacketofSeeds.png'), rewardMessage: 'Plant your first flower by completing a task or a Pomodoro timer.' });

//     const [points, setPoints] = useState({
//         currentPoints: newPoints, message: rewardInfo.rewardMessage,
//         pointsToBloom: pointsToBloom, rewardImage: rewardInfo.rewardImage
//     });

//     const [previousRewards, setpreviousRewards] = useState([])


//     // Function to determine add points  

//     function addPoints(e) {

//         e.preventDefault()

//         setpreviousRewards([...previousRewards,
//         [points.currentPoints, points.message, points.pointsToBloom, points.rewardImage]
//         ])

//         const revisedPoints = newPoints + 100
//         const revisedTotalPoints = totalPoints + 100

//         if (newPoints < maxPoints) {
//             setNewpoints(revisedPoints);
//             setTotalpoints(revisedTotalPoints)
//         }

//         else {
//             setNewpoints(100)
//             setTotalpoints(revisedTotalPoints)
//         }

//     }


//     function updateOutput(e) {

//         e.preventDefault()

//         const pointsToBloom = maxPoints - newPoints;

//         setPoints({
//             currentPoints: newPoints, message: rewardInfo.rewardMessage,
//             pointsToBloom: pointsToBloom, rewardImage: rewardInfo.rewardImage
//         });
//     }


//     // Function to determine which state of flower to present  

//     function rewardOutput(newPoints) {

//         if (newPoints == 500) {
//             setRewardinfo({
//                 rewardImage: data[0][0].image,
//                 rewardMessage: data[0][0].message
//             });
//         }

//         else if (newPoints == 100) {
//             setRewardinfo({
//                 rewardImage: data[1][0].image,
//                 rewardMessage: data[1][0].message
//             });
//         }

//         else if (newPoints == 200) {
//             setRewardinfo({
//                 rewardImage: data[2][0].image,
//                 rewardMessage: data[2][0].message
//             });
//         }

//         else if (newPoints == 300) {
//             setRewardinfo({
//                 rewardImage: data[3][0].image,
//                 rewardMessage: data[3][0].message
//             });
//         }

//         else if (newPoints == 400) {
//             setRewardinfo({
//                 rewardImage: data[4][0].image,
//                 rewardMessage: data[4][0].message
//             });
//         }

//         else {
//             setRewardinfo({
//                 rewardImage: data[0][0].image,
//                 rewardMessage: data[0][0].message
//             })
//         }
//     }


//     let data = [
//         [{ image: require('../assets/Seedling.png'), message: "You have just planted a new seed. Complete another task and watch your plant grow." }],
//         [{ image: require('../assets/Germination.png'), message: "Your plant is growing well. Keep going!" }],
//         [{ image: require('../assets/Shoots.png'), message: "Look at those green leaves." }],
//         [{ image: require('../assets/Budding.png'), message: "One more task and your flower will bloom!" }],
//         [{ image: require('../assets/Blooming.png'), message: "Congratulations! You have harvested a new flower. When you're ready, complete another task to plant a new seed!" }],
//     ]




//     return (

//         <ScrollView contentContainerStyle={styles.layout}>
//             <RewardTotal totalPoints={totalPoints} />
//             <RewardLoad
//                 addPoints={addPoints} rewardOutput={rewardOutput} updateOutput={updateOutput}
//                 points={points} totalPoints={totalPoints} newPoints={newPoints} />
//             <RewardPrevious previousRewards={previousRewards} previouslist = {previouslist}/>


//         </ScrollView>

//     )
// }





// export default Rewards;


// // Styles

// const styles = StyleSheet.create({
//     layout: {
//         flexGrow: 3,
//         marginTop: "15%",
//         margin: "5%",
//     },


// });

