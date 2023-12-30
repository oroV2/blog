import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import { EvilIcon } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const id = navigation.getParam('id');

    const blogPost = state.find(blogPost => blogPost.id === id);
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
            <Button
                title='edit'
                onPress={() => navigation.navigate('Edit', { id: id })} />
        </View>
    )
}

// ShowScreen.navigationOptions = ({ navigation }) => {
//     return {
//         headerRight: () => (
//             <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
//                 <EvilIcon name='pencil' size={30} />
//             </TouchableOpacity>
//         ),
//     };
// }

const styles = StyleSheet.create({})

export default ShowScreen