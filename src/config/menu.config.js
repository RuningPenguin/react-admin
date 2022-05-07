/**
 * icon:菜单项图标
 * // roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    "id": 10909,
    "pid": 0,
    "title": "首页",
    "url": "",
    "icon": "icon-liuliangyunpingtaitubiao02",
    "path": "/home",
    "status": 0,
    "level": 1,
    "key": 10909,

  },
  {
    "id": 10909,
    "pid": 0,
    "title": "概况",
    "url": "",
    "icon": "icon-liuliangyunpingtaitubiao02",
    "path": "survey",
    "status": 0,
    "level": 1,
    "key": 10909,
    "children": [
      {
        "id": 10910,
        "pid": 10909,
        "title": "工作台",
        "url": "/survey/workbench",
        "icon": "",
        "path": "/survey/workbench",
        "status": 0,
        "level": 2,
        "key": 10910
      }
    ]
  },
  {
    "id": 10396,
    "pid": 0,
    "title": "会员",
    "url": "",
    "icon": "icon-huiyuan",
    "path": "user",
    "status": 0,
    "level": 1,
    "key": 10396,
    "children": [
      {
        "id": 10397,
        "pid": 10396,
        "title": "会员列表",
        "url": "/user/list",
        "icon": "",
        "path": "/user/list",
        "status": 0,
        "level": 2,
        "key": 10397
      }
    ]
  },
  {
    "id": 11166,
    "pid": 0,
    "title": "本地",
    "url": "",
    "icon": "icon-bendishenghuo",
    "path": "localLife",
    "status": 0,
    "level": 1,
    "key": 11166,
    "children": [
      {
        "id": 11167,
        "pid": 11166,
        "title": "商家管理",
        "url": "/localLife/business",
        "icon": "",
        "path": "/localLife/business",
        "status": 0,
        "level": 2,
        "key": 11167
      },
      {
        "id": 11169,
        "pid": 11166,
        "title": "门店管理",
        "url": "/localLife/store/list",
        "icon": "",
        "path": "/localLife/store/list",
        "status": 0,
        "level": 2,
        "key": 11169
      },
      {
        "id": 11171,
        "pid": 11166,
        "title": "核销收入",
        "url": "/localLife/writeOffIncome",
        "icon": "",
        "path": "/localLife/writeOffIncome",
        "status": 0,
        "level": 2,
        "key": 11171
      },
      {
        "id": 11173,
        "pid": 11166,
        "title": "核销记录",
        "url": "/localLife/write_off_record",
        "icon": "",
        "path": "/localLife/write_off_record",
        "status": 0,
        "level": 2,
        "key": 11173
      }
    ]
  },
  {
    "id": 10585,
    "pid": 0,
    "title": "营销",
    "url": "",
    "icon": "icon-marketing",
    "path": "marketing",
    "status": 0,
    "level": 1,
    "key": 10585,
    "children": [
      {
        "id": 10940,
        "pid": 10585,
        "title": "红包抽奖",
        "url": "/marketing/lottery_configuration",
        "icon": "",
        "path": "/marketing/lottery_configuration",
        "status": 0,
        "level": 2,
        "key": 10940
      },
      {
        "id": 10942,
        "pid": 10585,
        "title": "限时抢购",
        "url": "/marketing/flash_sale",
        "icon": "",
        "path": "/marketing/flash_sale",
        "status": 0,
        "level": 2,
        "key": 10942
      },
      {
        "id": 11106,
        "pid": 10585,
        "title": "app签到",
        "url": "/marketing/app_sign",
        "icon": "",
        "path": "/marketing/app_sign",
        "status": 0,
        "level": 2,
        "key": 11106
      },
      {
        "id": 11249,
        "pid": 10585,
        "title": "app逛街",
        "url": "/marketing/app_goshopping",
        "icon": "",
        "path": "/marketing/app_goshopping",
        "status": 0,
        "level": 2,
        "key": 11249
      }
    ]
  },
  {
    "id": 10387,
    "pid": 0,
    "title": "运营",
    "url": "",
    "icon": "icon-OperateOutline",
    "path": "operate",
    "status": 0,
    "level": 1,
    "key": 10387,
    "children": [
      {
        "id": 10553,
        "pid": 10387,
        "title": "APP广告",
        "url": "/operate/banner",
        "icon": "",
        "path": "/operate/banner",
        "status": 0,
        "level": 2,
        "key": 10553
      },
      {
        "id": 11359,
        "pid": 10387,
        "title": "小程序广告",
        "url": "/operate/applet_banner",
        "icon": "",
        "path": "/operate/applet_banner",
        "status": 0,
        "level": 2,
        "key": 11359
      },
      {
        "id": 10927,
        "pid": 10387,
        "title": "APP板块",
        "url": "/operate/app",
        "icon": "",
        "path": "/operate/app",
        "status": 0,
        "level": 2,
        "key": 10927
      },
      {
        "id": 10822,
        "pid": 10387,
        "title": "消息列表",
        "url": "/operate/notice",
        "icon": "",
        "path": "/operate/notice",
        "status": 0,
        "level": 2,
        "key": 10822
      }
    ]
  },
  {
    "id": 10693,
    "pid": 0,
    "title": "商品",
    "url": "",
    "icon": "icon-shangpin",
    "path": "good",
    "status": 0,
    "level": 1,
    "key": 10693,
    "children": [
      {
        "id": 10431,
        "pid": 10693,
        "title": "红包商品分类",
        "url": "category",
        "icon": "",
        "path": "/good/category",
        "status": 0,
        "level": 2,
        "key": 10431
      },
      {
        "id": 10758,
        "pid": 10693,
        "title": "红包商品列表",
        "url": "/good/get_water_drop_good_list",
        "icon": "",
        "path": "/good/list_water/noone",
        "status": 0,
        "level": 2,
        "key": 10758
      },
      {
        "id": 10925,
        "pid": 10693,
        "title": "淘客商品分类",
        "url": "TKcategory",
        "icon": "",
        "path": "/good/TKcategory",
        "status": 0,
        "level": 2,
        "key": 10925
      },
      {
        "id": 10963,
        "pid": 10693,
        "title": "选品库",
        "url": "/good/selection_library",
        "icon": "",
        "path": "/good/selection_library",
        "status": 0,
        "level": 2,
        "key": 10963
      },
      {
        "id": 11161,
        "pid": 10693,
        "title": "生活分类",
        "url": "/good/life_category",
        "icon": "",
        "path": "/good/life_category",
        "status": 0,
        "level": 2,
        "key": 11161
      },
      {
        "id": 11175,
        "pid": 10693,
        "title": "生活商品",
        "url": "/good/localLife_good",
        "icon": "",
        "path": "/good/localLife_good",
        "status": 0,
        "level": 2,
        "key": 11175
      },
      {
        "id": 11163,
        "pid": 10693,
        "title": "拼多多分类",
        "url": "/good/pdd_category",
        "icon": "",
        "path": "/good/pdd_category",
        "status": 0,
        "level": 2,
        "key": 11163
      },
      {
        "id": 11340,
        "pid": 10693,
        "title": "线下店铺分类",
        "url": "/good/offlineStore_category",
        "icon": "",
        "path": "/good/offlineStore_category",
        "status": 0,
        "level": 2,
        "key": 11340
      }
    ]
  },
  {
    "id": 10522,
    "pid": 0,
    "title": "订单",
    "url": "",
    "icon": "icon-order",
    "path": "order",
    "status": 0,
    "level": 1,
    "key": 10522,
    "children": [
      {
        "id": 10882,
        "pid": 10522,
        "title": "淘宝订单",
        "url": "/order/tk_order",
        "icon": "",
        "path": "/order/tk_order",
        "status": 0,
        "level": 2,
        "key": 10882
      },
      {
        "id": 10888,
        "pid": 10522,
        "title": "红包订单",
        "url": "/order/red_order",
        "icon": "",
        "path": "/order/red_order",
        "status": 0,
        "level": 2,
        "key": 10888
      },
      {
        "id": 11089,
        "pid": 10522,
        "title": "活动订单",
        "url": "/order/prizecCollection",
        "icon": "",
        "path": "/order/prizecCollection",
        "status": 0,
        "level": 2,
        "key": 11089
      },
      {
        "id": 11158,
        "pid": 10522,
        "title": "钻石商品订单",
        "url": "/order/integral_order",
        "icon": "",
        "path": "/order/integral_order",
        "status": 0,
        "level": 2,
        "key": 11158
      },
      {
        "id": 11179,
        "pid": 10522,
        "title": "生活订单",
        "url": "/order/localLife_order",
        "icon": "",
        "path": "/order/localLife_order",
        "status": 0,
        "level": 2,
        "key": 11179
      },
      {
        "id": 11254,
        "pid": 10522,
        "title": "拼多多订单",
        "url": "/order/pdd_order",
        "icon": "",
        "path": "/order/pdd_order",
        "status": 0,
        "level": 2,
        "key": 11254
      },
      {
        "id": 11315,
        "pid": 10522,
        "title": "话费订单",
        "url": "/order/telephoneCharges_order",
        "icon": "",
        "path": "/order/telephoneCharges_order",
        "status": 0,
        "level": 2,
        "key": 11315
      },
      {
        "id": 11317,
        "pid": 10522,
        "title": "加油订单",
        "url": "/order/oil_order",
        "icon": "",
        "path": "/order/oil_order",
        "status": 0,
        "level": 2,
        "key": 11317
      },
      {
        "id": 11333,
        "pid": 10522,
        "title": "股权订单",
        "url": "/order/equity",
        "icon": "",
        "path": "/order/equity",
        "status": 0,
        "level": 2,
        "key": 11333
      },
      {
        "id": 11342,
        "pid": 10522,
        "title": "店铺订单",
        "url": "/order/store_order",
        "icon": "",
        "path": "/order/store_order",
        "status": 0,
        "level": 2,
        "key": 11342
      }
    ]
  },
  {
    "id": 10694,
    "pid": 0,
    "title": "财务",
    "url": "",
    "icon": "icon-caiwu",
    "path": "finance",
    "status": 0,
    "level": 1,
    "key": 10694,
    "children": [
      {
        "id": 10504,
        "pid": 10694,
        "title": "提现列表",
        "url": "/finance/withdraw_list",
        "icon": "",
        "path": "/finance/withdraw",
        "status": 0,
        "level": 2,
        "key": 10504
      },
      {
        "id": 11032,
        "pid": 10694,
        "title": "资金记录",
        "url": "/finance/revenue_record",
        "icon": "",
        "path": "/finance/revenue_record",
        "status": 0,
        "level": 2,
        "key": 11032
      },
      {
        "id": 11094,
        "pid": 10694,
        "title": "货款明细",
        "url": "/finance/settlement",
        "icon": "",
        "path": "/finance/settlement",
        "status": 0,
        "level": 2,
        "key": 11094
      },
      {
        "id": 11319,
        "pid": 10694,
        "title": "商家提现",
        "url": "/finance/business_withdraw",
        "icon": "",
        "path": "/finance/business_withdraw",
        "status": 0,
        "level": 2,
        "key": 11319
      },
      {
        "id": 11346,
        "pid": 10694,
        "title": "店铺提现",
        "url": "/finance/store_withdraw",
        "icon": "",
        "path": "/finance/store_withdraw",
        "status": 0,
        "level": 2,
        "key": 11346
      }
    ]
  },
  {
    "id": 10915,
    "pid": 0,
    "title": "代理",
    "url": "",
    "icon": "icon-dailishang",
    "path": "agent",
    "status": 0,
    "level": 1,
    "key": 10915,
    "children": [
      {
        "id": 10920,
        "pid": 10915,
        "title": "区县代理审核",
        "url": "/agent/agentExamine",
        "icon": "",
        "path": "/agent/agentExamine",
        "status": 0,
        "level": 2,
        "key": 10920
      },
      {
        "id": 11177,
        "pid": 10915,
        "title": "乡镇代理审核",
        "url": "/agent/townshipExamine",
        "icon": "",
        "path": "/agent/townshipExamine",
        "status": 0,
        "level": 2,
        "key": 11177
      },
      {
        "id": 10922,
        "pid": 10915,
        "title": "购买记录",
        "url": "/agent/purchaseRecord",
        "icon": "",
        "path": "/agent/purchaseRecord",
        "status": 0,
        "level": 2,
        "key": 10922
      }
    ]
  },
  {
    "id": 10912,
    "pid": 0,
    "title": "商家",
    "url": "",
    "icon": "icon-shangjia",
    "path": "merchant",
    "status": 0,
    "level": 1,
    "key": 10912,
    "children": [
      {
        "id": 10913,
        "pid": 10912,
        "title": "商家审核",
        "url": "/merchant/merchant_audit",
        "icon": "",
        "path": "/merchant/merchant_audit",
        "status": 0,
        "level": 2,
        "key": 10913
      },
      {
        "id": 11165,
        "pid": 10912,
        "title": "线下商家",
        "url": "/merchant/store",
        "icon": "",
        "path": "/merchant/store",
        "status": 0,
        "level": 2,
        "key": 11165
      },
      {
        "id": 11206,
        "pid": 10912,
        "title": "商家资料",
        "url": "/merchant/Promoter",
        "icon": "",
        "path": "/merchant/Promoter",
        "status": 0,
        "level": 2,
        "key": 11206
      },
      {
        "id": 11344,
        "pid": 10912,
        "title": "线下店铺",
        "url": "/merchant/offline_store",
        "icon": "",
        "path": "/merchant/offline_store",
        "status": 0,
        "level": 2,
        "key": 11344
      }
    ]
  },
  {
    "id": 11126,
    "pid": 0,
    "title": "华夏",
    "url": "",
    "icon": "icon-guquanchuzhi",
    "path": "huaxia",
    "status": 0,
    "level": 1,
    "key": 11126,
    "children": [
      {
        "id": 11127,
        "pid": 11126,
        "title": "华夏股权",
        "url": "/huaxia/stock_right",
        "icon": "",
        "path": "/huaxia/stock_right",
        "status": 0,
        "level": 2,
        "key": 11127
      }
    ]
  },
  {
    "id": 10691,
    "pid": 0,
    "title": "厂商",
    "url": "",
    "icon": "icon-icon_caigou",
    "path": "purchase",
    "status": 0,
    "level": 1,
    "key": 10691,
    "children": [
      {
        "id": 11147,
        "pid": 10691,
        "title": "物流管理",
        "url": "/purchase/logistics",
        "icon": "",
        "path": "/purchase/logistics",
        "status": 0,
        "level": 2,
        "key": 11147
      },
      {
        "id": 10708,
        "pid": 10691,
        "title": "品牌管理",
        "url": "/purchase/brand",
        "icon": "",
        "path": "/purchase/brand",
        "status": 0,
        "level": 2,
        "key": 10708
      },
      {
        "id": 10703,
        "pid": 10691,
        "title": "采购人员列表",
        "url": "buyer",
        "icon": "",
        "path": "/purchase/buyer",
        "status": 0,
        "level": 2,
        "key": 10703
      },
      {
        "id": 10437,
        "pid": 10691,
        "title": "供应链列表",
        "url": "supply_chain",
        "icon": "",
        "path": "/purchase/supply_chain",
        "status": 0,
        "level": 2,
        "key": 10437
      }
    ]
  },
  {
    "id": 10696,
    "pid": 0,
    "title": "数据",
    "url": "",
    "icon": "icon-data",
    "path": "charts",
    "status": 0,
    "level": 1,
    "key": 10696,
    "children": [
      {
        "id": 10535,
        "pid": 10696,
        "title": "净值趋势",
        "url": "record_integral_worth",
        "icon": "",
        "path": "/charts/integral_worth",
        "status": 0,
        "level": 2,
        "key": 10535
      },
      {
        "id": 10681,
        "pid": 10696,
        "title": "分润报表",
        "url": "report/get_total_divide_to_chart",
        "icon": "",
        "path": "/charts/divide",
        "status": 0,
        "level": 2,
        "key": 10681
      },
      {
        "id": 11256,
        "pid": 10696,
        "title": "搜索偏好",
        "url": "/charts/search_preferences",
        "icon": "",
        "path": "/charts/search_preferences",
        "status": 0,
        "level": 2,
        "key": 11256
      },
      {
        "id": 11258,
        "pid": 10696,
        "title": "属性数据",
        "url": "/charts/attribute",
        "icon": "",
        "path": "/charts/attribute",
        "status": 0,
        "level": 2,
        "key": 11258
      },
      {
        "id": 11260,
        "pid": 10696,
        "title": "商品数据",
        "url": "/charts/good",
        "icon": "",
        "path": "/charts/good",
        "status": 0,
        "level": 2,
        "key": 11260
      },
      {
        "id": 11055,
        "pid": 10696,
        "title": "订单数据",
        "url": "/charts/order",
        "icon": "",
        "path": "/charts/order",
        "status": 0,
        "level": 2,
        "key": 11055
      },
      {
        "id": 11059,
        "pid": 10696,
        "title": "警告列表",
        "url": "/charts/get_warn_lists",
        "icon": "",
        "path": "/charts/get_warn_lists",
        "status": 0,
        "level": 2,
        "key": 11059
      },
      {
        "id": 11262,
        "pid": 10696,
        "title": "板块数据",
        "url": "/charts/plate",
        "icon": "",
        "path": "/charts/plate",
        "status": 0,
        "level": 2,
        "key": 11262
      },
      {
        "id": 11264,
        "pid": 10696,
        "title": "广告数据",
        "url": "/charts/advertisement",
        "icon": "",
        "path": "/charts/advertisement",
        "status": 0,
        "level": 2,
        "key": 11264
      },
      {
        "id": 11268,
        "pid": 10696,
        "title": "用户分析",
        "url": "/charts/user",
        "icon": "",
        "path": "/charts/user",
        "status": 0,
        "level": 2,
        "key": 11268
      },
      {
        "id": 11266,
        "pid": 10696,
        "title": "访客数据",
        "url": "/charts/visitor",
        "icon": "",
        "path": "/charts/visitor",
        "status": 0,
        "level": 2,
        "key": 11266
      },
      {
        "id": 11322,
        "pid": 10696,
        "title": "分享数据",
        "url": "/charts/share",
        "icon": "",
        "path": "/charts/share",
        "status": 0,
        "level": 2,
        "key": 11322
      },
      {
        "id": 11355,
        "pid": 10696,
        "title": "店铺数据",
        "url": "/charts/store",
        "icon": "",
        "path": "/charts/store",
        "status": 0,
        "level": 2,
        "key": 11355
      },
      {
        "id": 11357,
        "pid": 10696,
        "title": "商家数据",
        "url": "/charts/business",
        "icon": "",
        "path": "/charts/business",
        "status": 0,
        "level": 2,
        "key": 11357
      }
    ]
  },
  {
    "id": 10699,
    "pid": 0,
    "title": "设置",
    "url": "",
    "icon": "icon-xitong",
    "path": "config",
    "status": 0,
    "level": 1,
    "key": 10699,
    "children": [
      {
        "id": 10957,
        "pid": 10699,
        "title": "淘客配置",
        "url": "/config/red_config",
        "icon": "",
        "path": "/config/red_config",
        "status": 0,
        "level": 2,
        "key": 10957
      },
      {
        "id": 10771,
        "pid": 10699,
        "title": "APP配置",
        "url": "app_config",
        "icon": "",
        "path": "/config/app_config",
        "status": 0,
        "level": 2,
        "key": 10771
      },
      {
        "id": 10772,
        "pid": 10699,
        "title": "通用配置",
        "url": "general_config",
        "icon": "",
        "path": "/config/general_config",
        "status": 0,
        "level": 2,
        "key": 10772
      },
      {
        "id": 10959,
        "pid": 10699,
        "title": "会员配置",
        "url": "/config/user_config",
        "icon": "",
        "path": "/config/user_config",
        "status": 0,
        "level": 2,
        "key": 10959
      },
      {
        "id": 10961,
        "pid": 10699,
        "title": "属性配置",
        "url": "/config/attribute_config",
        "icon": "",
        "path": "/config/attribute_config",
        "status": 0,
        "level": 2,
        "key": 10961
      },
      {
        "id": 11062,
        "pid": 10699,
        "title": "短信记录",
        "url": "/config/message",
        "icon": "",
        "path": "/config/message",
        "status": 0,
        "level": 2,
        "key": 11062
      },
      {
        "id": 11064,
        "pid": 10699,
        "title": "卡密配置",
        "url": "/config/car_my",
        "icon": "",
        "path": "/config/car_my",
        "status": 0,
        "level": 2,
        "key": 11064
      }
    ]
  },
  {
    "id": 11109,
    "pid": 0,
    "title": "意见",
    "url": "",
    "icon": "icon-yijian",
    "path": "advise",
    "status": 0,
    "level": 1,
    "key": 11109,
    "children": [
      {
        "id": 11110,
        "pid": 11109,
        "title": "意见反馈",
        "url": "/operate/feedback",
        "icon": "",
        "path": "/operate/feedback",
        "status": 0,
        "level": 2,
        "key": 11110
      }
    ]
  },
  {
    "id": 11241,
    "pid": 0,
    "title": "官网",
    "url": "",
    "icon": "icon-guanwangfangwen",
    "path": "officialWebsite",
    "status": 0,
    "level": 1,
    "key": 11241,
    "children": [
      {
        "id": 11242,
        "pid": 11241,
        "title": "新闻配置",
        "url": "/officialWebsite/Journalism",
        "icon": "",
        "path": "/officialWebsite/Journalism",
        "status": 0,
        "level": 2,
        "key": 11242
      }
    ]
  },
  {
    "id": 1,
    "pid": 0,
    "title": "权限",
    "url": "",
    "icon": "icon-Group-",
    "path": "setting",
    "status": 0,
    "level": 1,
    "key": 1,
    "children": [
      {
        "id": 10003,
        "pid": 1,
        "title": "功能列表",
        "url": "FunctionManage",
        "icon": "",
        "path": "/setting/function",
        "status": 0,
        "level": 2,
        "key": 10003
      },
      {
        "id": 10002,
        "pid": 1,
        "title": "角色列表",
        "url": "RoleManage",
        "icon": "",
        "path": "/setting/role",
        "status": 0,
        "level": 2,
        "key": 10002
      },
      {
        "id": 10000,
        "pid": 1,
        "title": "管理员列表",
        "url": "AdminManage",
        "icon": "",
        "path": "/setting/admin",
        "status": 0,
        "level": 2,
        "key": 10000
      }
    ]
  },
  {
    "id": 10587,
    "pid": 0,
    "title": "日志",
    "url": "",
    "icon": "icon-log",
    "path": "log",
    "status": 0,
    "level": 1,
    "key": 10587,
    "children": [
      {
        "id": 10588,
        "pid": 10587,
        "title": "日志列表",
        "url": "log",
        "icon": "",
        "path": "/log/list",
        "status": 0,
        "level": 2,
        "key": 10588
      }
    ]
  },
  {
    "id": 100,
    "pid": 0,
    "title": "配置信息(隐藏信息,有图片上传功能必须有此权限)",
    "url": null,
    "icon": "confighidden",
    "path": "confighidden",
    "status": 0,
    "level": 1,
    "key": 100,
    "children": [
      {
        "id": 10451,
        "pid": 100,
        "title": "配置信息",
        "url": "get_oss_conf",
        "icon": "1",
        "path": "confighiddens",
        "status": 0,
        "level": 2,
        "key": 10451
      }
    ]
  }
];
export default menuList;
