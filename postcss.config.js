module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 75, // 此设计稿尺寸为750px //1rem = 75px
      propList: ["*"],
    },
  },
};
