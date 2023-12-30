import { View, Text } from 'react-native'
import React, { useReducer } from 'react'

const createDataContext = () => {
    return (
        <View>
            <Text>createDataContext</Text>
        </View>
    )
}

export default (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const boundAction = {};
        for (let key in actions) {
            boundAction[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundAction }}>
                {children}
            </Context.Provider>);
    };

    return { Context, Provider };
}