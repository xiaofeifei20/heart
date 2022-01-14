// pages/sound/sound.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        showLetter: "",
        loveLetterArray: [
        "Dear J，爱当然不能当饭吃，但如果是和心爱的人一起的话，饭一定会变得格外的好吃。爱不是食物，但爱和饥饿一样，是这世上最好的调味品。",
        "Dear J，时光正巧妙地对我们形成合围之势，或早或晚我们总要向其投降的。但我唯一心存奢望的胜利是——即便到了最后，我们都还能一起携手投降。",
        "Dear J，你不知现在的我是多么幸运。因为我曾想过，甚至不必与你同在，知道你是存在的于我便足够了。甚至你不必知道我的存在，只要你曾有一次视线掠过我的面庞时有过一阵似有若无的存疑——是的，只要你曾有过这一刹那的恍惚，于我便已经足够了。",
        "Dear J，我想靠着你，不靠时间的允许我们也能走向永恒。我想抱着你、不抱任何的目的。",
        "Dear J，我当然不是最好的，但为了你，我已经做到了最好的我。",
        "Dear J，我想这个冬天唯一的缺陷，大概是你如此温暖的笑容，又把这个世界的温室效应加重了一点点。",
        "Dear J，我想冬天应该是最温暖的季节了，因为寒冷为我们创造了更多感受温暖的机会。天气每下降一度，我们的身体便靠紧一点。",
        "Dear J，只要天空还在老地方，猫还喜欢吃鱼，你还能对着我发脾气，那这世界就还没什么大不了的。",
        "Dear J，简约不是少，而是没有多余。足够也不是多，而是刚好你在。",
        "Dear J，如果生命是一场寻宝之旅，最终我就会把你拖到上帝面前说，我找到了这个。"
    ]
    },
    loadLetter: function() {
        var index = Math.floor(Math.random() * this.data.loveLetterArray.length) 
        this.setData({
            showLetter: this.data.loveLetterArray[index]
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadLetter()
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
        this.loadLetter()
        setTimeout(() => {
            wx.hideNavigationBarLoading() //隐藏标题栏显示加载状态
            wx.stopPullDownRefresh() //结束刷新
          }, 500); //设置执行时间
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

    }
})