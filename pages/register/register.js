// pages/register/register.js
Page({
  //注册
  register(e){
    let item=e.detail.value
    if(!item.phone){
      wx.showToast({
        icon:'error',
        title: '请输入手机号',
      })
      return
    }
    if(!item.psw){
      wx.showToast({
        icon:'error',
        title: '请输入密码',
      })
      return
    }
    if(!item.name){
      wx.showToast({
        icon:'error',
        title: '请输入姓名',
      })
      return
    }
    wx.cloud.database().collection('user').add({
      data:{
        _id:item.phone,
        phone:item.phone,
        psw:item.psw,
        name:item.name,
        avataUrl:'/static/touxiang.png'
      }
    }).then(res=>{
      wx.showToast({
        icon:'success',
        title: '注册成功',
      })
      setTimeout(() => {
        wx.navigateBack({
          delta:0,
        })
      }, 1000);
    }).catch(res=>{
      wx.showToast({
        icon:'error',
        title: '该手机号已被注册',
      })
    })
  }
})