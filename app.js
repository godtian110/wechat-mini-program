App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    if(!wx.cloud){
            console.error('请使用2.2.3或以上基础库')
    }else{
            wx.cloud.init({
              env:"code-0gdf7d0184e6f0da",
              traceUser: true
            })
            wx.cloud.callFunction({
              name:"openid",
              success:res=>{
                console.log(res)
                wx.setStorageSync('openid', res.result.openid)
              }
            })
    }
    this.globalData={}; 
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
