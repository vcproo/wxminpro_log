// index.js
// 获取应用实例
const app = getApp()
const log = require('../../log.js')
const http = require('../../utils/http.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    wx.login({
      success (res) {
        if (res.code) {
          console.log('步骤2获检查用户登录状态，获取用户电话号码！', res)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    log.info('打一些日志测试一下')
    log.setFilterMsg('filterkeyword')
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    
    this.getList()
  },
  getList:function(){
    
    http.api('getModel.php', {
      brand_id: 1,
      device_name_id:123
    }, 'get', '').then(reg => {
      console.log(reg)
    })
    var obj = [];
    obj.push({name:'张三',code:'123456',houseId:'1568'})
    obj.push({name:'张三1',code:'456789',houseId:'1258'})
    obj.push({name:'张三2',code:'789123',houseId:'7845'})
    obj.push({name:'张三3',code:'456123',houseId:'6954'})
    log.info('在getList打一些日志测试一下')
    log.info('参数11'+JSON.stringify(obj))
    log.info('接口地址index：getModel.php'+';接口参数：'+JSON.stringify({
      brand_id: 1,
      device_name_id:123
    }))
  },
  onHide: function () {
    log.info('在onHide打一些日志测试一下')
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onGetPhoneNumber(e) {
    
    var that = this;
    console.log(e)
    }
})
