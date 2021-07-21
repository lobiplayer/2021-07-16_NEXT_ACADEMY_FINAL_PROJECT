import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import Adddeadline from '../components/Adddeadline';
import ModalAdddeadline from '../components/ModalAdddeadline';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';
import moment from 'moment';


const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

const thisDay = moment().format("YYYY-MM-DD");


export default function Calendar() {
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Mathematics',
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach(key => {
                newItems[key] = items[key];
            });
            setItems(newItems)
        }, 1000);
    };

    const renderItem = (item) => {
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
                            <Avatar.Icon size={40} icon="math-compass" color='#fdb913' backgroundColor='#0000c8' />
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={thisDay}
                renderItem={renderItem}
                theme={{
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
                    textDayHeaderFontSize: 16
                }}

            />
            <ModalAdddeadline />


        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 }
});
