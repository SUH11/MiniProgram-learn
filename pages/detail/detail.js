// pages/detail/detail.js
Page({

  /**
   * Page initial data
   */
  data: {
    detail: {},
    isLoading: true
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options);
    wx.showLoading({
      title: '正在加载...'
    })
    wx.request({
      url: `https://data.miaov.com/h5-view/v/movie/detail/?id=${options.id}`,
      success: (res) => {
        const { data } = res;
        this.setData({
          detail: data,
          isLoading: false
        });
        wx.hideLoading();
        wx.setNavigationBarTitle({
          title: data.title
        });
      }
    })
  },
})