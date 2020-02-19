//logs.js
//common.js 导入
// const util = require('../../utils/util.js')
import util from "../../utils/util.js"
Page({
  data: {
    logs: []
  },
  onLoad: function (opts) {
    console.log('onload接收路由参数',opts)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
