

// pages/dis/dis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderid:'',
    info:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let order=wx.getStorageSync('orderid');
    this.setData({
      orderid:order
    })
    console.log('11',order)
    wx.setStorageSync('orderid', null)
  },
  getinfo(e){
    console.log(e.detail.value);
   this.setData({
     info:e.detail.value
   })
  },
  sub(){
    let id=this.data.orderid;
    let info=this.data.info;
    console.log(id);
    if(!info){
      wx.showToast({
        icon:'error',
        title: '请输入评论',
      })
      return
    }
    wx.cloud.database().collection('order').where({
      _id:id
    }).update({
      // data 传入需要局部更新的数据
      data: {
        dis:info
      },
      success: function(res) {
        console.log('更新啦',res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})