import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Tabs } from './tabs'
import { Drawer } from './drawer'

const Stack = createNativeStackNavigator()

export const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Main' 
                component={Drawer}
                options={{
                    headerShown: false
                }} 
            />
        </Stack.Navigator>
    )
}