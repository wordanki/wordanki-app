
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Drawer as CustomDrawer } from '../components/Drawer';
import { COLORS } from "../theme";

import { NavBar } from '../components/NavBar'

import Home from '../screens/Home'

import { Tabs } from "./tabs";

const { Navigator, Screen } = createDrawerNavigator();

export const Drawer = () => {
  return (
    <Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        // headerShown: false,
        drawerActiveBackgroundColor: COLORS.TRANSPARENT,
        drawerActiveTintColor: COLORS.WHITE,
        drawerInactiveTintColor: '#333'
      }}>
      <Screen 
        name="Home" 
        component={Home}
        options={{
          header: () => <NavBar title="Início"></NavBar>
        }}
        // options={{
        //   headerShown: false
        // }}
      />
    </Navigator>
  );
}