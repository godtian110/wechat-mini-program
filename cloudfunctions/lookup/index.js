// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: 'code-0gdf7d0184e6f0da'}
)
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
    var text= event.userid
        return await db.collection('order').aggregate().match({
            userid:text
          })
        .lookup({
            from: 'good',
            localField: 'sp',
            foreignField: '_id',
            as: 'bookList', 
        })
        .end()
}