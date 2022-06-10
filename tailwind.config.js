module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00ad6a',
        button: '#1fe374',
        bgPrimaryColor: '#eafaf1',
        bgPrimaryColorLight: '#fcfcfc',
        bgGray: '#d6dae5',
        textColor: '#080c16',
      },
      boxShadow: {
        fullShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
        button: '-6px 6px #00ad6a',
      },
    },
  },
  plugins: [],
}
