// pages/subject/subject.js
Page({

  /**
   * Page initial data
   */
  data: {
    subjectList: [{
      type: '动作',
      image: '/assets/image/dongzuo.png'
    }, {
      type: '爱情',
      image: '/assets/image/aiqing.png'
    }, {
      type: '动画',
      image: '/assets/image/donghua.png'
    }, {
      type: '科幻',
      image: '/assets/image/kehuan.png'
    }, {
      type: '喜剧',
      image: '/assets/image/xiju.png'
    }]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },
  tap(event) {
    // event.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/subject-list/subject-list?type=' + event.currentTarget.dataset.type
    })
  }
})