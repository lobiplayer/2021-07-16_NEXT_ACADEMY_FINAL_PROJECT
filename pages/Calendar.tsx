import { addDays, format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';
import ModalAdddeadline from '../components/ModalAdddeadline';

type Item = {
    name: string;
    subject: string;
};

const Calendar: React.FC = () => {

    const [request, setRequest] = useState([])

    // useEffect(() => {
    //     fetch("http://192.168.0.152:5000/deadlines").then(response => response.json().then(data => {
    //         setItems(data.deadlines);
    //     })
    //     );
    // }, []);

    const [items, setItems] = useState < { [key: string]: Item[]} > (
        {
        '2021-07-27' : [{name: 'test 1', subject: 'english'}]
    });

       useEffect(() => {
        fetch("/deadlines").then(response => response.json().then(data => {
            console.log(data.deadlines)
            const newObject = {}
            data.deadlines.map( deadline => {
                console.log(deadline.date)
                newObject[deadline.deadline_date] = [{ name: deadline.description, subject: deadline.subject}]
            })
            console.log("safdsafadsf", newObject)
            setItems(newObject);
        })
        );
    }, []);

    const renderItem = (item: Item) => {
        return (
            <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
                <Card style={{ backgroundColor: '#fdb913' }}>
                    <Card.Content>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <Text>{item.name}</Text>
                            <Text>{item.subject}</Text>
                            <Avatar.Icon size={40} icon="math-compass" color='#fdb913' backgroundColor='#0000c8' />
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.safe}>
            <Agenda
            items={items}
            renderItem={renderItem}
                theme={{
                    agendaTodayColor: '#0000c8',
                    agendaDayTextColor: 'gray',
                    agendaDayNumColor: 'gray',
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#0000c8',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#fdb913',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#0000c8',
                    dayTextColor: '#0000c8',
                    textDisabledColor: '#0000c8',
                    dotColor: '#fdb913',
                    selectedDotColor: '#ffffff',
                    arrowColor: 'orange',
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: '#0000c8',
                    indicatorColor: '#0000c8',
                    textDayFontFamily: 'monospace',
                    textMonthFontFamily: 'monospace',
                    textDayHeaderFontFamily: 'monospace',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16,
                }}
            />
            <ModalAdddeadline />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    itemContainer: {
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

export default Calendar;