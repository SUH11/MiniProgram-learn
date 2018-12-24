// pages/subject-list/subject-list.js
Page({

  /**
   * Page initial data
   */
  data: {
    list: [],
    start: 30,
    isLoading: false,
    type: ''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const { type } = options;
    this.setData({
      type
    });
    this.loadData();
    wx.setNavigationBarTitle({
      title: type
    });
  },
  loadData() {
    let { start, list, type } = this.data;
    wx.showLoading({
      title: '正在拼命加载....',
      mask: true
    });
    this.setData({
      isLoading: true
    });
    wx.request({
      url: `https://data.miaov.com/h5-view/v/movie/list/?start=${start}&type=${type}`,
      success: (res) => {
        start += 10;
        this.setData({
          list: list.concat(res.data.subjects),
          start,
          isLoading: false
        });
        wx.hideLoading();
      }
    });
  },
  lower() {
    if (!this.data.isLoading) {
      this.loadData();
    }
  },
  tap(event) {
    wx.navigateTo({
      url: `/pages/detail/detail?id=${event.currentTarget.dataset.id}`,
    })
  }
})