// pages/api/api.js
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    v: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
  },
  location(){
    
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
    })


  },
  //输入弹幕
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  //发送弹幕
  bindSendDanmu: function () {
    
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })

    //用ajax把数据存到数据库
  },
  //获取视频
  bindButtonTap: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          v: res.tempFilePath
        })
      }
    })
  },
  //viewImage 放大图片
  viewImage(){
    wx.previewImage({
      current: 'http://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3b292df5e0fe99257d8c844b34a85edf8db1712d.jpg', // 当前显示图片的http链接
      urls: ['http://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3b292df5e0fe99257d8c844b34a85edf8db1712d.jpg', 'http://image2.sina.com.cn/ent/d/2006-03-15/U92P28T3D1017087F326DT20060315234652.jpg','http://file02.16sucai.com/d/file/2014/1124/68d1ffe81ad8f4fc84d580be7b556521.jpg'] // 需要预览的图片http链接列表
    })
  },

  //storage 缓存
  storage(){
    wx.setStorage({
      key: "key",
      data: "hahaha"
    })
    wx.getStorage({
      key: 'key',
      success(res) {
        console.log('res',res)
      }
    })
  },


  //showToast 方法
  show1(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 1000
    })
  },
  show2() {
    wx.showLoading({
      title: '加载中',
      mask:true
    }),

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  show3() {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    }),
    wx.showNavigationBarLoading()
    setTimeout(function(){
      wx.hideNavigationBarLoading()
    },1000)
    wx.setNavigationBarTitle({
      title: '当前页面'
    })
  },
  show4(){
    wx.startPullDownRefresh({
      
    })
  },

  //request 请求
  request(){
    //本地json x 不支持  //import j from  './a/xx/xx.json'
    //读取本地的mock接口
    //本地后端接口 node php
    //远端后端接口 node php
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters', // 豆瓣接口  仅为示例，并非真实的接口地址 
      data: {
        start:0,
        count:1
      },

      //一定要设置默认请求头
      header: {
        'content-type': 'json' // 默认值 
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('读数据')
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },3000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})