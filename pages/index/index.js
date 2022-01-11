// index.js
// 获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    knowDay: 0,
    knowDate: "2021-11-22 00:00:00",
    meetDay: 0,
    meetDate: "2022-01-01 00:00:00",
  },
  onLoad() {
    this.setData({
      knowDay: util.getDayBetween(this.data.knowDate),
      meetDay: util.getDayBetween(this.data.meetDate)
    })
  }
})
