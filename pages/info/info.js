Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:"",
      psw:"",
      phone:"",
      img:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let user=wx.getStorageSync('user')
    console.log(user);
    this.setData({
      img:user.avataUrl,
      phone:user.phone,
      psw:user.psw,
      name:user.name
    })
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
  onShareAppMessage: function () {
    
  },
  onChooseAvatar:function(res){
    this.setData({
      img:res.detail.avatarUrl,
    })
  },
  resubmit:function(){
    //重新上传图片
    let that =this;
    let user1=wx.getStorageSync('user')
    if(this.data.img!=user1.avataUrl){
      //上传图片到后台
      wx.cloud.uploadFile({
        cloudPath:this.data.phone+this.data.img.substring(this.data.img.lastIndexOf(".")),
        filePath:this.data.img,
        success:res=>{
          that.updateUser(res.fileID,that.data.name,that.data.psw);
        },
        fail:err=>{

        }
      })

    }else{
      //更新数据库
      that.updateUser(user1.avataUrl,user1.name,user1.psw);
    }
  },
  updateUser(imgId,upName,upPsw){
    let user1=wx.getStorageSync('user')
    wx.cloud.database().collection('user').doc('user1._id').update({
      // data 传入需要局部更新的数据
      data: {
        avataUrl:imgId,
        name:upName,
        psw:upPsw
      },
      success: function(res) {
        console.log('更新啦',user1.avataUrl,imgId)
      }
    })
  }
})