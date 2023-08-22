import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'

export async function registerForPushNotificationsAsync() {
    if (!Device.isDevice) {
      alert('Must use physical device for Push Notifications')
  
      return
    }
  
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()

      if (status !== 'granted') {
        alert('Failed to get push token for push notification!')
    
        return
      }
    }
  
    const token = (await Notifications.getExpoPushTokenAsync()).data

    console.log(token)
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C'
      })
    }
  
    return token
}