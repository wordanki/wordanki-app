const { getDefaultConfig } = require("expo/metro-config")

module.exports = (async () => {
  const { 
    resolver: { sourceExts, assetExts } 
  } = getDefaultConfig(__dirname)

  assetExts.push("cjs")
  assetExts.push("db")
  
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  }
})()