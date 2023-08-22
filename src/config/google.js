import Constants from 'expo-constants'

export const clientId = Constants.manifest.extra.googleClientId

const CLIENT_ID = "748645343982-evemj87csc5749m9e6d10s3g4okv4ioj.apps.googleusercontent.com"
const REDIRECT_URI = "https://auth.expo.io/@wordanki/wordanki-app"

const RESPONSE_TYPE = 'token'
const SCOPE = encodeURI('profile email')

export const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`