// pages/login/login.js
Page({
  data: {
    phone: '',
    psw: ''
  },
  //注册
  register() {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  //获取电话号码
  getPhone(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  //获取密码
  getPsw(e) {
    this.setData({
      psw: e.detail.value
    })
  },
  //登录
  login() {
    let phone = this.data.phone
    let psw = this.data.psw
    if (!phone) {
      wx.showToast({
        icon: 'error',
        title: '请输入手机号',
      })
      return
    }
    if (!psw) {
      wx.showToast({
        icon: 'error',
        title: '请输入密码',
      })
      return
    }

    wx.cloud.database().collection('user')
      .where({
        phone: phone,
        psw: psw
      }).get().then(res => {
        console.log('登陆结果', res);
        if (res.data && res.data.length > 0) {
          wx.setStorageSync('user', res.data[0])
          wx.showToast({
            title: '登陆成功',
          })
          setTimeout(() => {
            wx.navigateBack({
              delta: 0,
            })
          }, 1000);
        } else {
          wx.showToast({
            icon: 'error',
            title: '账号或密码错误',
          })
        }
      })
  }
})