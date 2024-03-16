// pages/good/good.js
const db=wx.cloud.database()
var myDate = new Date();
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    userId:'',
    good:{

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this. getGood();
    this.getUserID();
  },
  getGood(){
    wx.cloud.database().collection('good').get().then(res=>{
      this.setData({
        good:res.data
      })
    })
  },
  getUserID(){
    let user=wx.getStorageSync('user');
    this.setData({
      userId:user._id
    })
  },
  addCart(res){
    console.log(res.currentTarget.id);
    const _=wx.cloud.database().command
    wx.cloud.database().collection('good').doc(res.currentTarget.id).update({
      data:{
        num:_.inc(-1)
      }
    })
    this.getGood();
    wx.cloud.database().collection('order').add({
      data:{
        userid:this.data.userId,
        sp:res.currentTarget.id,
        _createTime: Date.parse(new Date()),
        time: myDate.toLocaleString(),
        xd:0,
        qccg:0,
      }
    }).then(res=>{
      wx.showToast({
        icon:'success',
        title: '添加成功',
        duration:1000,
      })
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