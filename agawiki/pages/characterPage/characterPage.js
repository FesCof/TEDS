// pages/characterPage/characterPage.js
var pic = null;
var picType="1";

var spico,sp2ico=null;
var a,b=null;

function fanyiCombo(combo) {
    combo = JSON.stringify(combo);
    combo = combo.replace(/murakumonoesu/g,"叢雲のエース");
    combo = combo.replace(/rinchantankentai/g,"リンちゃん探検隊");
    combo = combo.replace(/narugozakashozoku/g,"成子坂所属");
    combo = combo.replace(/kuizudepyompyon/g,"クイズでぴょんぴょん");
    combo = combo.replace(/shugeisuki/g,"手芸好き");
    combo = combo.replace(/oideyofudoutohrishoutengai/g,"おいでよ 不動通り商店街");
    combo = combo.replace(/seiamaruteajogakuin/g,"聖アマルテア女学院");
    combo = combo.replace(/shinseinarugozaka/g,"新生・成子坂");
    combo = combo.replace(/murakumonoesu/g,"叢雲のエース");
    combo = combo.replace(/toraisutera/g,"トライ★ステラ");
    combo = combo.replace(/nettodeyattemita/g,"ネットでやってみた");
    combo = combo.replace(/fuazabokujou/g,"ファザー牧場");
    combo = combo.replace(/fuigyufuesu/g,"フィギュフェス");
    combo = combo.replace(/komimatou/g,"コミマ冬");
    combo = combo.replace(/shujinkou/g,"主人公");
    combo = combo.replace(/hajimetenoABO/g,"はじめてのABO");
    combo = combo.replace(/bungakushoujo/g,"文学少女");
    combo = combo.replace(/yattetorai/g,"って★トライ");
    combo = combo.replace(/kurisutarukuesuto/g,"クリスタルクエスト");
    combo = combo.replace(/juukiaikouka/g,"銃器愛好家");
    combo = combo.replace(/nakanonohoshi/g,"中野の星");
    combo = combo.replace(/babena/g,"バーベナ");
    combo = combo.replace(/hajimetenoshinyuu/g,"はじめての親友");
    combo = combo.replace(/otonariosananajimi/g,"お隣幼馴染");
    combo = combo.replace(/otonanoenkai/g,"大人の宴会");
    combo = combo.replace(/hatagayafujinkai/g,"幡ヶ谷婦人会");
    combo = combo.replace(/aEGiSshukkouso/g,"AEGiS出向組");
    combo = combo.replace(/hogosha/g,"保護者");
    combo = combo.replace(/narugozakatourokuakutoresu/g,"成子坂登録アクトレス");
    combo = combo.replace(/raibaru/g,"ライバル？");
    combo = combo.replace(/torinokai/g,"鳥の会");
    combo = combo.replace(/supaiaikoukai/g,"スパイ愛好会");
    combo = combo.replace(/osananajimi/g,"幼馴染");
    combo = combo.replace(/amaruteaseitokai/g,"アマルテア生徒会");
    combo = combo.replace(/patona/g,"パートナー");
    combo = combo.replace(/meribani/g,"メリーバニー");
    combo = combo.replace(/matsutakesama/g,"松茸さま");
    combo = combo.replace(/beijin/g,"米人");
    combo = combo.replace(/kouhakumanjuu/g,"紅白まん獣");
    combo = combo.replace(/motonoburuhiruzu/g,"元ノーブルヒルズ");
    combo = combo.replace(/tsuingaruzu/g,"ツインガールズ");
    combo = combo.replace(/ryourinin/g,"料理人");
    combo = combo.replace(/modera/g,"モデラー");
    combo = JSON.parse(combo);
    delete combo.chrid;
    return combo;
}

var sleep = function(time) {
  var startTime = new Date().getTime() + parseInt(time, 10);
  while(new Date().getTime() < startTime) {}
};
//sleep(1000);  延时函数，单位ms 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    top:wx.getSystemInfoSync().statusBarHeight,
    url:"https://www.cofw.fun/agawiki",
    lv4class:"icoBorderShadow",
    view_info:"display:inline",
    info_button:"background-color:rgba(0,0,0,.25);",
    view_data:"display:none",
    view_equipment:"display:none",
    view_clothing:"display:none",
    view_ornament:"display:none",
    isShowFrom1: false,
    test1:{
      1:"a",2:"b"
    }
  },

  ico_click: function (e) {
    var characterId = e.currentTarget.dataset.characterId;
    wx.navigateTo({
      url: '../characterPage/characterPage',
      success: function(res){
        res.eventChannel.emit('acceptData',characterId)
      }
    })
  },

  //折叠combo
  showFrom(e){
    var param = e.currentTarget.dataset.param;
    let that = this
    if(this.data.currentId==param){
      this.setData({
        currentId:0
      })
    }else{
      this.setData({
        currentId:param,
        thiscombolist:""
     })
     wx.request({
      url: "https://www.cofw.fun/agawiki/manyChrIndex",
      data:{
        chrids:e.currentTarget.dataset.combofriends
      },
      method:'POST',
      header:{
        'content-Type':'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log("loadding")
        that.setData({
          thiscombolist:res.data
        })
      },
     })
    }
  },



  lv_click: function (e) {
    let that = this;
    var id = e.currentTarget.id;
    this.setData({
      lv1class:null,
      lv2class:null,
      lv3class:null,
      lv4class:null,
      lv5class:null,
    })
    if(id == "lv1"){
      this.setData({
        nowlv:that.data.level_1,
        lv1class:"icoBorderShadow"
      })
    }else if(id == "lv2"){
      this.setData({
        nowlv:that.data.level_2,
        lv2class:"icoBorderShadow"})
    }else if(id == "lv3"){
      this.setData({
        nowlv:that.data.level_3,
        lv3class:"icoBorderShadow"})
    }else if(id == "lv4"){
      this.setData({
        nowlv:that.data.level_4,
        lv4class:"icoBorderShadow"})
    }else if(id == "lv5"){
      this.setData({
        nowlv:that.data.level_5,
        lv5class:"icoBorderShadow"})
    }
    this.now_text_to_pic()
  },

  now_text_to_pic: function(e){
    var that=this
    if(that.data.nowlv.properties=="电击"){
      a="attr-thunder"
      b="./ico/thunder.png"
    }
    if(that.data.nowlv.properties=="烧夷"){
      a="attr-fire"
      b="./ico/fire.png"
    }
    if(that.data.nowlv.properties=="冷击"){
      a="attr-ice"
      b="./ico/ice.png"
    }
    if(that.data.nowlv.properties=="重力"){
      a="attr-gravity"
      b="./ico/gravity.png"
    }
    this.setData({
      now_properties:a,
      now_properties_pic:b
    })
    if(that.data.nowlv.sptype=="red"){
      spico="/img/skill/skl4_001_01.png";
    }
    if(that.data.nowlv.sp2type=="red"){
      sp2ico="/img/skill/skl4_001_01.png";
    }
    if(that.data.nowlv.sptype=="blue"){
      spico="/img/skill/skl4_002_01.png";
    }
    if(that.data.nowlv.sp2type=="blue"){
      sp2ico="/img/skill/skl4_002_01.png";
    }
    if(that.data.nowlv.sptype=="green"){
      spico="/img/skill/skl4_003_01.png";
    }
    if(that.data.nowlv.sp2type=="green"){
      sp2ico="/img/skill/skl4_003_01.png";
    }
    this.setData({
      spico:spico,
      sp2ico:sp2ico
    })

    if(that.data.nowlv.sp2name==null){
      this.setData({
        sp2:"display:none;"
      })
    }else{
      this.setData({
        sp2:""
      })
    }
  },
  pic_click:function(e){
    if(picType=="1"){
      this.setData({
        pic_change:"width: 6rem;height: 11.25rem;"
      })
      picType="0";
    }else{
      this.setData({
        pic_change:"width: 10rem;height: 18.75rem;"
      })
      picType="1";
    }
  },

  view_info_click:function(e){
    let that = this;
    that.setData({
      view_info:"display:inline;",
      view_data:"display:none",
      info_button:"background-color:rgba(0,0,0,.25);",
      data_button:"",
      equipment_button:"",
      clothing_button:"",
      ornament_button:"",
      view_equipment:"display:none",
      view_clothing:"display:none",
      view_ornament:"display:none",
    })
 },
  view_data_click:function(e){
    let that = this
    that.now_text_to_pic()
    that.setData({
      info_button:"",
      data_button:"background-color:rgba(0,0,0,.25);",
      equipment_button:"",
      clothing_button:"",
      ornament_button:"",
      view_info:"display:none",
      view_data:"display:inline",
      view_equipment:"display:none",
      view_clothing:"display:none",
      view_ornament:"display:none",
    })
 },
  view_equipment_click:function(e){
    let that = this;
    that.setData({
      info_button:"",
      data_button:"",
      equipment_button:"background-color:rgba(0,0,0,.25);",
      clothing_button:"",
      ornament_button:"",
      view_info:"display:none",
      view_data:"display:none",
      view_equipment:"display:inline",
      view_clothing:"display:none",
      view_ornament:"display:none",
    })
 },
  view_clothing_click:function(e){
    let that = this;
    that.setData({
      info_button:"",
      data_button:"",
      equipment_button:"",
      clothing_button:"background-color:rgba(0,0,0,.25);",
      ornament_button:"",
      view_info:"display:none",
      view_data:"display:none",
      view_equipment:"display:none",
      view_clothing:"display:inline",
      view_ornament:"display:none",
    })
 },
  view_ornament_click:function(e){
    let that = this;
    that.setData({
      info_button:"",
      data_button:"",
      equipment_button:"",
      clothing_button:"",
      ornament_button:"background-color:rgba(0,0,0,.25);",
      view_info:"display:none",
      view_data:"display:none",
      view_equipment:"display:none",
      view_clothing:"display:none",
      view_ornament:"display:inline",
    })
 },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var chrid
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptData',res=> {
      chrid = parseInt(res);
    })

    let that = this

    //读取数据库
    function request() {
      //chrinfo
      wx.request({
        url: "https://www.cofw.fun/agawiki/chrInfo",
        method:'POST',
        chr: {},
        data:{
          chrid:chrid
        },
        header:{
          'content-Type':'application/x-www-form-urlencoded'
        },
        success: function (res2) {
          that.setData({
            chr: res2.data[0],
            pic:res2.data[0].pic
          })
        },
      })
      //属性
      //level_1
      wx.request({
        url: "https://www.cofw.fun/agawiki/chrInfoSkill",
        level_1: {},
        data:{
          chrid:chrid,
          levelid:"1"
        },
        method:'POST',
        header:{
          'content-Type':'application/x-www-form-urlencoded'
        },
        success: function (res) {
          that.setData({
            level_1: res.data[0],
          })
        },
      })
      //level_2
      wx.request({
        url: "https://www.cofw.fun/agawiki/chrInfoSkill",
        skill_2: {},
        data:{
          chrid:chrid,
          levelid:"2"
        },
        method:'POST',
        header:{
          'content-Type':'application/x-www-form-urlencoded'
        },
        success: function (res) {
          that.setData({
            level_2: res.data[0],
          })
        },
      })
      //level_3
      wx.request({
        url: "https://www.cofw.fun/agawiki/chrInfoSkill",
        level_3: {},
        data:{
          chrid:chrid,
          levelid:"3"
        },
        method:'POST',
        header:{
          'content-Type':'application/x-www-form-urlencoded'
        },
        success: function (res) {
          that.setData({
            level_3: res.data[0]
          })
        },
      })
      //level_4
      wx.request({
        url: "https://www.cofw.fun/agawiki/chrInfoSkill",
        level_4: {},
        data:{
          chrid:chrid,
          levelid:"4"
        },
        method:'POST',
        header:{
          'content-Type':'application/x-www-form-urlencoded'
        },
        success: function (res) {
          that.setData({
            level_4: res.data[0],
            nowlv:res.data[0]
          })
        },
      })
      //level_5
      wx.request({
        url: "https://www.cofw.fun/agawiki/chrInfoSkill",
        level_5: {},
        data:{
          chrid:chrid,
          levelid:"5"
        },
        method:'POST',
        header:{
          'content-Type':'application/x-www-form-urlencoded'
        },
        success: function (res) {
          that.setData({
            level_5: res.data[0],
          })
        },
      })
      //combo数据库
      wx.request({
        url: "https://www.cofw.fun/agawiki/chrCombo",
        nowcombo:{},
        data:{
          chrid:chrid
        },
        method:'POST',
        header:{
          'content-Type':'application/x-www-form-urlencoded'
        },
        success: function (res) {
          var combodata = fanyiCombo(res.data);
          that.setData({
            combo:combodata
          })
        },
      })
    }
    setTimeout(request,500)
    

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

})