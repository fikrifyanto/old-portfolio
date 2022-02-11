module.exports = {
  content: ["./src/*.html"],
  theme: {
    fontFamily: {
      'inter': [ 'Inter', 'sans-serif']
    },
    extend: {
      animation: {
        blob: "blob 4s infinite",
        color: "color 8s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        color: {
          "0%": {
            backgroundColor: '#FFFFFF',
          },
          "50%": {
            backgroundColor: '#f0f9ff',
          },
          "100%": {
            backgroundColor: '#FFFFFF',
          },
        },
      },
    },
  },
  plugins: [],
}
