
let htturl = '';//测试
const log = require('../log.js')
// let htturl = 'https://device.jsxsjk.com/device_jk/';//正式
// let htturl = 'https://tool.bjywyz.com/device_jk/';//正式
let api = (url, data, type,head,timeout=5000) =>{
  var p = new Promise((success, fail) => {
    log.info('接口地址http：'+url+';接口参数：'+JSON.stringify(data))
    console.log(1123)
    success('1111')
    // wx.request({
    //   url: htturl + url,
    //   method: type,
    //   data: data,
    //   header: head,
    //   timeout:timeout,
    //   //接口请求到了
    //   success: res => {
    //     success(res)
    //   },
    //   //请求地址出问题
    //   fail: res => {
    //     wx.showToast({
    //       title: '网络异常请重试',
    //       icon: 'none'
    //     })
    //   }
    // })
  }).catch((e) => { })
  return p;
}


 //判断用户是否登录
 let islogin = () => {
  var p = new Promise(function (resolve, reject) {
     //检测是否登录
     var userId = wx.getStorageSync('userId')
     //已登录
     if(userId){
       wx.hideLoading()
     }else{
      wx.hideLoading()
       //未登录
       wx.redirectTo({
         url: '../index/index'
       })
     }
    
  }).catch((e) => { })
  return p;
}

module.exports = {
  api,
  islogin
}