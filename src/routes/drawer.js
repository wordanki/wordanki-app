
import { createDrawerNavigator } from "@react-navigation/drawer";

import { NavBar } from '../components/NavBar'

import { Tabs } from "./tabs";

const { Navigator, Screen } = createDrawerNavigator();

export const Drawer = () => {
  return (
    <Navigator>
      <Screen 
        name="Home" 
        component={Tabs} 
        options={{
          headerShown: false
        }}
      />
    </Navigator>
  );
}