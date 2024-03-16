// pages/cart/cart.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgList: "",
    userid: '',
    username: "",
    openid: '',
    rmb: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getUserID();
  },
   // 下拉刷新
   onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载图标
      setTimeout(() => {
        this.getUserID();
        wx.hideNavigationBarLoading(); //完成停止加载
        wx.stopPullDownRefresh(); //得到数据后停止下拉刷新
      }, 400)
    },
  getUserID(){
    let user=wx.getStorageSync('user');
    this.setData({
      openid:user._id
    })
    wx.cloud.callFunction({
      name:'lookup',
      data:{
        userid:user._id
      },
      complete:res=>{
        console.log(res.result.list);
        this.setData({
          rmb:res.result.list
        })
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

  },
  binqc: function (e) {
    console.log(e.currentTarget.id)
    db.collection('order').doc(e.currentTarget.id).remove({
      success: function (res) {
        wx.showToast({
          title: '清除成功',
          icon: 'success',
          duration: 2000
        })
        wx.navigateTo({
          url: '/pages/cart/cart',
        })
      }
    })
  },
  binxd: function (e) {
    db.collection('order').doc(e.currentTarget.id).update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        xd: 1 
      },
      success: function(res) {
        wx.showToast({
          title: '下单成功',
          icon: 'success',
          duration: 2000
      })
      }
    })
  },
})