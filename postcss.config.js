module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-font-smoothing": {},
    "postcss-font-magician": {
      variants: {
        'Roboto': {
          '400': [],
          '500': []
        }
      },
      foundries: ['google']
    },
    "postcss-easing-gradients": {},
    "postcss-nested": {},
    "postcss-preset-env": {
      stage: 0,
      preserve: false //Удалять свойства недоступные для данной настройки **Только для stage 0**
    },
    cssnano: {}
  }
};
