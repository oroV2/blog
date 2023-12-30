import { StyleSheet, Text, View } from 'react-native'
import React, { useReducer, useState } from 'react'
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogPost':
            const { title, content } = action.payload
            return [...state,
            {
                id: Math.floor(Math.random() * 9999),
                title: title,
                content: content
            }
            ]

        case 'delete_blogPost':
            return state.filter(blogPost => blogPost.id !== action.payload);
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        console.log(title, content)
        dispatch({ type: 'add_blogPost', payload: { title, content } });
        callback();
    }
};

const deleteBlogPost = dispatch => {
    return id => {
        dispatch({ type: 'delete_blogPost', payload: id });
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    [{ title: 'Test Post', content: 'Test Content', id: 1 }]
);
