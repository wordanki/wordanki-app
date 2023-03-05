
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Drawer as CustomDrawer } from '../components/Drawer';
import { COLORS } from "../theme";

import { Tabs } from "./tabs";

const { Navigator, Screen } = createDrawerNavigator();

export const Drawer = () => {
  return (
    <Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.TRANSPARENT,
        drawerActiveTintColor: COLORS.WHITE,
        drawerInactiveTintColor: '#333'
      }}>
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