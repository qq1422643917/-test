// pages/component/component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3','demo-text-4'],
    array: ['美国', '中国', '巴西', '日本'],
    index: 0,
    result_1: [],
    result_2: [],
    sourceData_1: [
      {
        id: 'id-1',
        name: '1',
        sonValue: [
          {
            id: 'id-11',
            name: '1.1',
            sonValue: [
              { id: 'id-111', name: '1.1.1' },
              { id: 'id-112', name: '1.1.2' }
            ]
          },
          {
            id: 'id-12',
            name: '1.2',
            sonValue: [
              { id: 'id-121', name: '1.2.1' },
              { id: 'id-122', name: '1.2.2' }
            ]
          }
        ]
      },
      {
        id: 'id-2',
        name: '2',
        sonValue: [
          {
            id: 'id-21',
            name: '2.1',
            sonValue: [
              { id: 'id-211', name: '2.1.1' },
              { id: 'id-212', name: '2.1.2' }
            ]
          },
          {
            id: 'id-22',
            name: '2.2',
            sonValue: [
              { id: 'id-221', name: '2.2.1' },
              { id: 'id-222', name: '2.2.2' }
            ]
          }
        ]
      }
    ]
  },

  /**
     * Picker用户点击确认时触发
     *
     * @param {Object} e pickerChange的事件对象
     * @param {Object} e.detail.selectedIndex 用户选择的数据在数组中所在的下标
     * @param {Object} e.detail.selectedArray 用户选择的数据
     */
  pickerChange(e) {
    const { picker } = e.currentTarget.dataset
    const { selectedIndex, selectedArray } = e.detail
    const list = {
      picker_1: 'result_1',
      picker_2: 'result_2',
    }
    console.log('多级联动结果:', selectedIndex, selectedArray)
    const change = {}
    change[list[picker]] = selectedArray
    this.setData(change)
  },
  /**
   * Picker用户点击取消时触发
   *
   * @param {Object} e  pickerCancel的事件对象
   * @param {Object} e.detail  是原生Picker组件的bindcancel触发时的事件对象e
   */
  pickerCancel(e) {
    console.log(e)
  },
  /**
   * Picker用户滑动某一列的值改变时触发
   *
   * @param {Object} e pickerColumnchange的事件对象
   * @param {Object} e.detail  是原生Picker组件的bindcolumnchange触发时的事件对象e
   */
  pickerColumnchange(e) {
    console.log(e)
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  navigateTo(){
    wx.navigateTo({
      url:'/pages/logs/logs?a=1&b=2'
    })
  },
  bindgetuserinfo(res){
    console.log("返回的数据",res)
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    console.log('点击右上角分享')
     if (res.from === 'button') {
      // 来自页面内转发按钮
       console.log('来自页面内转发按钮',res.target)
    }
    return {
      title: '转发标题',
      path: '/page/user?id=123'
    }
  }
})