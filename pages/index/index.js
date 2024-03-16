// index.js
// 获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    vtabs:null,
    vtabsContent:null,
    goodlist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadGoods();
    
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
  loadGoods:function(){
    this.getgoodlist();
    var Myvtabs=["清爽冰饮",'甜美奶茶','美味小菜','健康主食']
    Myvtabs=Myvtabs.map(item=>({title: item }))
    this.setData({
      vtabs:Myvtabs
    })
    let that=this;
    const vtabsContent=[{
        name:'清爽冰饮',
        goodlist:[
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          },
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          },
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          },
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          }
        ]
      },
      {
        name:'甜美奶茶',
        goodlist:[
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          },
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          },
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          },
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          }
        ]
      },{
        name:'美味小菜',
        goodlist:[
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          },
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          },
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          }     
        ]
      },{
        name:'健康主食',
        goodlist:
        [
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          },
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          },
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          },
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          },
          {
            name:'清爽可乐',
            num:'1000',
            price:'¥4',
            img:'/static/good.jpg'
          },
        ],
    }
    ]
    this.setData({
      vtabsContent:vtabsContent
    })
  },
  getgoodlist(){
    wx.cloud.database().collection('good').get()
    .then(res=>{
      this.setData({
        goodlist:res.data
      })
    })
  }
})