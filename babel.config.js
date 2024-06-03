module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          '@app': './src/app',
          '@screens': './src/app/screens',
          '@atomic': './src/atomic',
          '@atoms': './src/atomic/atoms',
          '@molecules': './src/atomic/molecules',
          '@organisms': './src/atomic/organisms',
          '@templates': './src/atomic/templates',
          '@assets': './src/assets',
          '@icons': './src/assets/icons',
          '@mock': './src/mock',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
