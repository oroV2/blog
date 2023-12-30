import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const id = navigation.getParam('id');

    const blogPost = state.find(blogPost => blogPost.id === id);

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <Text style={styles.label}>Edit Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={text => setTitle(text)} />
            <Text style={styles.label}>Edit Content:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={text => setContent(text)} />
            <Button
                title='Add Blog Post'
                onPress={() => {
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index');
                    })
                }} />
        </View>
    )
}

export default EditScreen

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        marginBottom: 15,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    }
})