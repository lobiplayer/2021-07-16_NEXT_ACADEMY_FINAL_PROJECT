import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const ModalAdddeadline = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    return (
        <View>
            <Button title="Add Deadline" onPress={toggleModal} />
            <Modal
                isVisible={isModalVisible}>
                <View style={styles.container}>
                    {/* <LoginForm /> */}
                    <View>
                        <Button title="Hide modal" onPress={toggleModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6FA',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default ModalAdddeadline;