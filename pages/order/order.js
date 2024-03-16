// pages/order/order.js
const db = wx.cloud.database()
var myDate = new Date();
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
    let user=wx.getStorageSync('user');
    wx.showModal({
      title: '提示',
      content: '是否确认取消订单，会影响你的诚信度哦！',
      success(res) {
        if (res.confirm) {
          console.log('确定')
          console.log(e.currentTarget.id)
          db.collection('order').doc(e.currentTarget.id).remove({
            success: function (res) {
            
            }
          })
          wx.cloud.callFunction({
            name: 'lookup',
            data: {
              userid:user._id
            },
            complete: res => {
              console.log(res.result.list)
              this.setData({
                rmb: res.result.list
              })
            }
          })
        } else if (res.cancel) {
          console.log('取消')
        }
      }
    })

  },
  binxd: function (e) {
    let user=wx.getStorageSync('user');
    wx.showModal({
      title: '取餐',
      content: '取餐号为' + e.currentTarget.id,
      success(res) {
        if (res.confirm) {
          db.collection('order').doc(e.currentTarget.id).update({
            // data 传入需要局部更新的数据
            data: {
              // 表示将 done 字段置为 true
              qccg: 1,
              qcsj: myDate.toLocaleString(),
            },
            success: res => {
              wx.showToast({
                title: '取餐成功',
                icon: 'success',
                duration: 2000
              })
            },
          
          })
          wx.cloud.callFunction({
            name: 'lookup',
            data: {
              userid:user._id
            },
            complete: res => {
              console.log(res.result.list)
              this.setData({
                rmb: res.result.list
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  dis(res){
    console.log(res.currentTarget.id);
    wx.setStorageSync('orderid',res.currentTarget.id)
    wx.navigateTo({
      url: '/pages/dis/dis',
    })
  }
})