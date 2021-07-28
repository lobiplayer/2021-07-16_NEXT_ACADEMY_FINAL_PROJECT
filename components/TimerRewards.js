
import React, { useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";


const PomodoroRewards = () => {

useEffect(() => {
    fetch("https://whispering-wildwood-06588.herokuapp.com/add_rewardslist", {
        method: 'POST',
        body: JSON.stringify({
            points: '100',
            user_id: '2',
            task_completed: 'Pomodoro Timer on' + Date(),
        }),

    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    })
}, []);


return ({

})

}

export default PomodoroRewards;