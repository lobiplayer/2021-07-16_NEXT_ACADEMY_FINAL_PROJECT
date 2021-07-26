import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Pressable, Dimensions } from 'react-native';


const RewardLoad = ({ previouslist, totalPoints, rewardOutput, maxPoints }) => {

    console.log(previouslist)

    const lastitem = previouslist.length - 1

    const points_required = maxPoints - (totalPoints % maxPoints)
 
    return (
        <View style={styles.layout}>
            <Text style={styles.title}> STATUS OF NEXT REWARD </Text>
            <View style={styles.layoutcenter}>
                <Text style={styles.currentPointsTitle}>Remaining points required to claim reward</Text>
                <Text style={styles.currentPointsDisplay}> {points_required} </Text>
                <Image source={rewardOutput(previouslist[lastitem][0].state)[0]} style={styles.rewardPic} />
                <Text style={styles.messageRewardsDisplay}>{rewardOutput(previouslist[lastitem][0].state)[1]}</Text>
                {/* <Pressable onPress={(e) => { addPoints(e); rewardOutput(newPoints); updateOutput(e) }} style={styles.button}> */}
                    {/* <Text>Complete Task </Text>
                </Pressable> */}
            </View>
        </View>

    )
};


export default RewardLoad;

    // #fdb913
    // #0000c8
// Styles

const styles = StyleSheet.create({

    layout: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },

    title: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
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
        height: 270,
        width: 270,
        justifyContent: 'center',
        alignItems: 'center',

    },

    currentPointsDisplay: {
        fontSize: 33,
        color: '#0000c8',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '600',
    },

    messageRewardsDisplay: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        color: '#0000c8',
    },

    currentPointsTitle: {
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



// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, View, ScrollView, TextInput, Button, Image, Text, Pressable, Dimensions } from 'react-native';
// import RewardPrevious from './RewardPrevious';

// const RewardLoad = ({ addPoints, rewardOutput, updateOutput, points, newPoints }) => {


//     return (
//         <View style={styles.layout}>
//             <Text style={styles.title}> STATUS OF NEXT REWARD </Text>
//             <View style={styles.layoutcenter}>
//                 <Text style={styles.currentPointsTitle}>Remaining points required to claim reward</Text>
//                 <Text style={styles.currentPointsDisplay}> {points.pointsToBloom} </Text>
//                 <Image source={points.rewardImage} style={styles.rewardPic} />
//                 <Text style={styles.messageRewardsDisplay}>{points.message}</Text>
//                 <Pressable onPress={(e) => { addPoints(e); rewardOutput(newPoints); updateOutput(e) }} style={styles.button}>
//                     <Text>Complete Task </Text>
//                 </Pressable>
//             </View>
//         </View>

//     )
// };


// export default RewardLoad;

// // #fdb913
// // #0000c8
// // Styles

// const styles = StyleSheet.create({

//     layout: {
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 15,
//         marginTop: 10,
//     },

//     title: {
//         fontSize: 16,
//         color: 'black',
//         fontWeight: '500',
//     },

//     layoutcenter: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: "5%",

//     },

//     // Style of the box holding the reward
//     rewardBox: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//     rewardPic: {
//         height: 270,
//         width: 270,
//         justifyContent: 'center',
//         alignItems: 'center',

//     },

//     currentPointsDisplay: {
//         fontSize: 33,
//         color: '#0000c8',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontWeight: '600',
//     },

//     messageRewardsDisplay: {
//         fontSize: 16,
//         paddingTop: 10,
//         paddingBottom: 10,
//         textAlign: 'center',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 100,
//         color: '#0000c8',
//     },

//     currentPointsTitle: {
//         fontSize: 16,
//         paddingTop: 10,
//         paddingBottom: 10,
//         textAlign: 'center',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//     button: {
//         backgroundColor: 'lightgray',
//         height: 50,
//         width: 200,
//         color: 'white',
//         margin: 10,
//         borderRadius: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//     pageTitle: {
//         fontSize: 16,
//         color: '#D2691E',

//     },


// });


