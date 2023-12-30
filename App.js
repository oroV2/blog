import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "./src/context/BlogContext";
import EditScreen from "./src/screen/EditScreen";
import CreateScreen from "./src/screen/CreateScreen";
import IndexScreen from "./src/screen/IndexScreen";
import ShowScreen from "./src/screen/ShowScreen";


const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
},

);

const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
};
