module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      mainDark: "#0b0d17",
      mainTurquoise: "#d0d6f9",
      mainLight: "#ffffff",
    },
    fontFamily: {
      barlow: ["Barlow"],
      barlowCondensed: ["Barlow Condensed"],
      bellefair: ["Bellefair"],
    },
    extend: {
      backgroundImage: {
        "home-bg": "url('../public/assets/home/background-home-desktop.jpg')",
        "home-md": "url('../public/assets/home/background-home-tablet.jpg')",
        "home-sm": "url('../public/assets/home/background-home-mobile.jpg')",
        "crew-bg": "url('../public/assets/crew/background-crew-desktop.jpg')",
        "crew-md": "url('../public/assets/crew/background-crew-tablet.jpg')",
        "crew-sm": "url('../public/assets/crew/background-crew-mobile.jpg')",
        "dest-bg":
          "url('../public/assets/destination/background-destination-desktop.jpg')",
        "dest-md":
          "url('../public/assets/destination/background-destination-tablet.jpg')",
        "dest-sm":
          "url('../public/assets/destination/background-destination-mobile.jpg')",
      },
      letterSpacing: {
        widest02: ".2em",
      },
    },
  },
  plugins: [],
};
