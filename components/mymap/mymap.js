//index.js
//获取应用实例
const app = getApp()

Component({
  properties: {
    scale: {
      type: Number,
      value: 18
    },
    latitude: {
      type: String
    },
    longitude: {
      type: String
    },
    markers: {
      type: Array
    },
  },
});