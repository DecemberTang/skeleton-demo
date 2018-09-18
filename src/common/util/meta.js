export default {
    indicator: {
        1: {
            impressions: {
                name: '展现数',
                format: 'number_0'
            },
            clicks: {
                name: '点击数',
                format: 'number_0'
            },
            ctr: {
                name: '点击率',
                format: 'percent_2'
            },
            cost: {
                name: '消费金额(元)',
                format: 'number_2'
            },
            totalOrderCnt: {
                name: '订单行',
                format: 'number_0'
            },
            totalOrderSum: {
                name: '订单金额(元)',
                format: 'number_2'
            }
        },
        2: {
            impressions: {
                name: '展现数',
                format: 'number_0'
            },
            clicks: {
                name: '点击数',
                format: 'number_0'
            },
            ctr: {
                name: '点击率',
                format: 'percent_2'
            },
            cost: {
                name: '消费金额(元)',
                format: 'number_2'
            },
            totalOrderCnt: {
                name: '订单行',
                format: 'number_0'
            },
            totalOrderSum: {
                name: '订单金额(元)',
                format: 'number_2'
            }
        },
        256: {
            viewCount: {
                name: '展现数',
                format: 'number_0'
            },
            clickCount: {
                name: '点击数',
                format: 'number_0'
            },
            clickRate: {
                name: '点击率',
                format: 'percent_2_0_0_1'
            },
            cost: {
                name: '消费金额(元)',
                format: 'number_2_0_0_1'
            },
            orderCount: {
                name: '订单行',
                format: 'number_0'
            },
            orderMoney: {
                name: '订单金额(元)',
                format: 'number_2_0_0_1'
            }
        }
    },
    dateType: {
        1: '今/昨日',
        2: '近7日',
        3: '近15日'
    },
    productType: {
        1: '品牌聚效',
        2: '京东快车',
        256: '京东直投'
    },
    defaultConfig: {
        productType: '2',
        dateType: '1',
        indicator: 'impressions'
    },
    filterConfig: {
        kuaiche: {
            global: [
                {
                    name: '计划类型',
                    key: 'putType,campaignType',
                    list: [
                        {
                            label: '全部',
                            value: null,
                            selected: true
                        },
                        {
                            label: '商品',
                            value: '3,2',
                            selected: false
                        },
                        {
                            label: '活动',
                            value: '4,2',
                            selected: false
                        },
                        {
                            label: '店铺',
                            value: '4,18',
                            selected: false
                        }
                    ]
                },
                {
                    name: '转化周期',
                    key: 'clickOrOrderDay',
                    list: [
                        {
                            label: '当天',
                            value: 0,
                            selected: false
                        },
                        {
                            label: '1天',
                            value: 1,
                            selected: false
                        },
                        {
                            label: '15天',
                            value: 15,
                            selected: true
                        }
                    ]
                },
                {
                    name: '点击/下单口径',
                    key: 'clickOrOrderCaliber',
                    list: [
                        {
                            label: '下单',
                            value: 1,
                            selected: true
                        },
                        {
                            label: '点击',
                            value: 0,
                            selected: false
                        }
                    ]
                },
                {
                    name: '订单口径',
                    key: 'orderStatusCategory',
                    list: [
                        {
                            label: '全部订单',
                            value: null,
                            selected: true
                        },
                        {
                            label: '成交订单',
                            value: 1,
                            selected: false
                        }
                    ]
                }
            ],
            hierarchy: {
                campaign: [
                    {
                        name: '状态',
                        key: 'status',
                        list: [
                            {
                                label: '全部',
                                value: null,
                                selected: true
                            },
                            {
                                label: '暂停中',
                                value: 1,
                                selected: false
                            },
                            {
                                label: '有效',
                                value: 2,
                                selected: false
                            },
                            {
                                label: '预算已用完',
                                value: 3,
                                selected: false
                            },
                            {
                                label: '不在投放时段',
                                value: 4,
                                selected: false
                            }
                        ]
                    },
                    {
                        name: '推广设备',
                        key: 'platform',
                        list: [
                            {
                                label: '全部',
                                value: null,
                                selected: true
                            },
                            {
                                label: 'PC',
                                value: 0,
                                selected: false
                            },
                            {
                                label: '无线',
                                value: 1,
                                selected: false
                            }
                        ]
                    }
                ],
                adgroup: [
                    {
                        name: '状态',
                        key: 'status',
                        list: [
                            {
                                label: '全部',
                                value: null,
                                selected: true
                            },
                            {
                                label: '暂停中',
                                value: 1,
                                selected: false
                            },
                            {
                                label: '有效',
                                value: 2,
                                selected: false
                            }
                        ]
                    },
                    {
                        name: '推广设备',
                        key: 'platform',
                        list: [
                            {
                                label: '全部',
                                value: null,
                                selected: true
                            },
                            {
                                label: 'PC',
                                value: 0,
                                selected: false
                            },
                            {
                                label: '无线',
                                value: 1,
                                selected: false
                            }
                        ]
                    },
                    {
                        name: '投放类型',
                        key: 'deliveryType',
                        list: [
                            {
                                label: '汇总',
                                value: 'retrievalType0',
                                selected: true
                            },
                            {
                                label: '推荐',
                                value: 'retrievalType1',
                                selected: false
                            },
                            {
                                label: '搜索',
                                value: 'retrievalType2',
                                selected: false
                            }
                        ]
                    }
                ],
                ad: [
                    {
                        name: '状态',
                        key: 'status',
                        list: [
                            {
                                label: '全部',
                                value: null,
                                selected: true
                            },
                            {
                                label: '审核中',
                                value: 0,
                                selected: false
                            },
                            {
                                label: '暂停',
                                value: 1,
                                selected: false
                            },
                            {
                                label: '有效',
                                value: 2,
                                selected: false
                            },
                            {
                                label: '审核不通过',
                                value: -2,
                                selected: false
                            },
                            {
                                label: '活动已结束',
                                value: 8,
                                selected: false
                            },
                            {
                                label: '活动未开始',
                                value: 7,
                                selected: false
                            },
                            {
                                label: '创意下线',
                                value: 9,
                                selected: false
                            }
                        ]
                    },
                    {
                        name: '推广设备',
                        key: 'platform',
                        list: [
                            {
                                label: '全部',
                                value: null,
                                selected: true
                            },
                            {
                                label: 'PC',
                                value: 0,
                                selected: false
                            },
                            {
                                label: '无线',
                                value: 1,
                                selected: false
                            }
                        ]
                    },
                    {
                        name: '投放类型',
                        key: 'deliveryType',
                        list: [
                            {
                                label: '汇总',
                                value: 'retrievalType0',
                                selected: true
                            },
                            {
                                label: '推荐',
                                value: 'retrievalType1',
                                selected: false
                            },
                            {
                                label: '搜索',
                                value: 'retrievalType2',
                                selected: false
                            }
                        ]
                    }
                ]
            }
        },
        featured: {
            global: [
                {
                    name: '计划类型',
                    key: 'campaignType',
                    list: [
                        {
                            label: '全部',
                            value: null,
                            selected: true
                        },
                        {
                            label: '普通图片CPM',
                            value: '1',
                            selected: false
                        },
                        {
                            label: '普通图片CPC',
                            value: '6',
                            selected: false
                        },
                        {
                            label: '京选店铺',
                            value: '12',
                            selected: false
                        }
                    ]
                },
                {
                    name: '转化周期',
                    key: 'clickOrOrderDay',
                    list: [
                        {
                            label: '当天',
                            value: 0,
                            selected: false
                        },
                        {
                            label: '15天',
                            value: 15,
                            selected: true
                        }
                    ]
                },
                {
                    name: '点击/下单口径',
                    key: 'clickOrOrderCaliber',
                    list: [
                        {
                            label: '下单',
                            value: 1,
                            selected: true
                        },
                        {
                            label: '点击',
                            value: 0,
                            selected: false
                        }
                    ]
                },
                {
                    name: '订单口径',
                    key: 'orderStatusCategory',
                    list: [
                        {
                            label: '全部订单',
                            value: null,
                            selected: true
                        },
                        {
                            label: '成交订单',
                            value: 1,
                            selected: false
                        }
                    ]
                }
            ],
            hierarchy: {
                campaign: [
                    {
                        name: '状态',
                        key: 'status',
                        list: [
                            {
                                label: '全部',
                                value: null,
                                selected: true
                            },
                            {
                                label: '暂停',
                                value: 1,
                                selected: false
                            },
                            {
                                label: '有效',
                                value: 2,
                                selected: false
                            },
                            {
                                label: '预算已用完',
                                value: 3,
                                selected: false
                            },
                            {
                                label: '不在投放时段',
                                value: 4,
                                selected: false
                            },
                            {
                                label: '下线',
                                value: 9,
                                selected: false
                            }
                        ]
                    }
                ],
                adgroup: [
                    {
                        name: '状态',
                        key: 'status',
                        list: [
                            {
                                label: '全部',
                                value: null,
                                selected: true
                            },
                            {
                                label: '暂停中',
                                value: 1,
                                selected: false
                            },
                            {
                                label: '有效',
                                value: 2,
                                selected: false
                            }
                        ]
                    },
                    {
                        name: '推广设备',
                        key: 'platform',
                        list: [
                            {
                                label: '全部',
                                value: null,
                                selected: true
                            },
                            {
                                label: 'PC',
                                value: 0,
                                selected: false
                            },
                            {
                                label: '无线',
                                value: 1,
                                selected: false
                            }
                        ]
                    }
                ],
                ad: [
                    {
                        name: '状态',
                        key: 'status',
                        list: [
                            {
                                label: '全部',
                                value: null,
                                selected: true
                            },
                            {
                                label: '审核中',
                                value: 0,
                                selected: false
                            },
                            {
                                label: '暂停',
                                value: 1,
                                selected: false
                            },
                            {
                                label: '有效',
                                value: 2,
                                selected: false
                            },
                            {
                                label: '审核不通过',
                                value: -2,
                                selected: false
                            },
                            {
                                label: '下线',
                                value: -3,
                                selected: false
                            },
                            {
                                label: '活动未开始',
                                value: 7,
                                selected: false,
                                hide: true
                            },
                            {
                                label: '活动已结束',
                                value: 8,
                                selected: false,
                                hide: true
                            },
                            {
                                label: '创意下线',
                                value: 9,
                                selected: false
                            }
                        ]
                    }
                ]
            }
        },
        direct: {
            global: [
                {
                    name: '媒体类型',
                    key: 'mediatype',
                    list: [
                        {
                            label: '腾讯资源',
                            value: '1',
                            selected: true
                        },
                        {
                            label: '头条资源',
                            value: '2',
                            selected: false
                        },
                        {
                            label: '百度资源',
                            value: '4',
                            selected: false
                        },
                        {
                            label: '京X资源',
                            value: '5',
                            selected: false
                        }
                    ]
                },
                {
                    name: '转化周期',
                    key: 'totaltimetype',
                    list: [
                        {
                            label: '当天',
                            value: 1,
                            selected: false
                        },
                        {
                            label: '15天',
                            value: 2,
                            selected: true
                        }
                    ]
                },
                {
                    name: '点击/下单口径',
                    key: 'totaltimetype',
                    list: [
                        {
                            label: '点击',
                            value: 2,
                            selected: false
                        },
                        {
                            label: '下单',
                            value: 1,
                            selected: true
                        }
                    ]
                },
                {
                    name: '订单口径',
                    key: 'orderstatus',
                    list: [
                        {
                            label: '全部订单',
                            value: 1,
                            selected: true
                        },
                        {
                            label: '成交订单',
                            value: 2,
                            selected: false
                        }
                    ]
                }
            ],
            hierarchy: {
                campaign: {
                    1: [ //腾讯资源
                        {
                            name: '计划类型',
                            key: 'playplatform',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: 'PC推广',
                                    value: '8',
                                    selected: false
                                },
                                {
                                    label: '无线推广',
                                    value: '16',
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: '出价方式',
                            key: 'bidtype',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: 'CPC',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: 'CPM',
                                    value: '2',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '16',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '8',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'tCPA',
                                    value: '64',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'CPT',
                                    value: '4',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'JDTCPA',
                                    value: '32',
                                    selected: false,
                                    hide: true
                                }
                            ]
                        }
                    ],
                    2: [ //头条
                        {
                            name: '计划类型',
                            key: 'playplatform',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: '京东定向',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: '头条定向',
                                    value: '2',
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: '出价方式',
                            key: 'bidtype',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: 'CPC',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: 'CPM',
                                    value: '2',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '16',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '8',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'tCPA',
                                    value: '64',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'CPT',
                                    value: '4',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'JDTCPA',
                                    value: '32',
                                    selected: false,
                                    hide: true
                                }
                            ]
                        },
                        {
                            name: '状态',
                            key: 'planstate',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: '启动中',
                                    value: '2',
                                    selected: false
                                },
                                {
                                    label: '暂停中',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: '预算用完',
                                    value: '3',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: '不在投放时间段',
                                    value: '4',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: '余额不足，调高预算冻结失败',
                                    value: '5',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: '预设预算小于当前实时日消耗',
                                    value: '6',
                                    selected: false,
                                    hide: true
                                }
                            ]
                        }
                    ],
                    4: [ //百度
                        {
                            name: '计划类型',
                            key: 'playplatform',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: '京东标签',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: '百度标签',
                                    value: '4',
                                    selected: false
                                },
                                {
                                    label: '京东定向',
                                    value: '64',
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: '出价方式',
                            key: 'bidtype',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: 'CPC',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: 'CPM',
                                    value: '2',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '16',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '8',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'tCPA',
                                    value: '64',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'CPT',
                                    value: '4',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'JDTCPA',
                                    value: '32',
                                    selected: false,
                                    hide: true
                                }
                            ]
                        },
                        {
                            name: '状态',
                            key: 'planstate',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: '启动中',
                                    value: '2',
                                    selected: false
                                },
                                {
                                    label: '暂停中',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: '预算用完',
                                    value: '3',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: '不在投放时间段',
                                    value: '4',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: '余额不足，调高预算冻结失败',
                                    value: '5',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: '预设预算小于当前实时日消耗',
                                    value: '6',
                                    selected: false,
                                    hide: true
                                }
                            ]
                        }
                    ],
                    5: [ //京X计划
                        {
                            name: '计划类型',
                            key: 'playplatform',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: '京X推广',
                                    value: '1',
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: '出价方式',
                            key: 'bidtype',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: 'CPC',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: 'CPM',
                                    value: '2',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '16',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '8',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'tCPA',
                                    value: '64',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'CPT',
                                    value: '4',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'JDTCPA',
                                    value: '32',
                                    selected: false,
                                    hide: true
                                }
                            ]
                        },
                        {
                            name: '状态',
                            key: 'planstate',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: '启动中',
                                    value: '2',
                                    selected: false
                                },
                                {
                                    label: '暂停中',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: '预算用完',
                                    value: '3',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: '不在投放时间段',
                                    value: '4',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: '余额不足，调高预算冻结失败',
                                    value: '5',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: '预设预算小于当前实时日消耗',
                                    value: '6',
                                    selected: false,
                                    hide: true
                                }
                            ]
                        }
                    ]
                },
                ad: {
                    1: [
                        {
                            name: '启动状态',
                            key: 'adstate',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: '启用中',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: '暂停中',
                                    value: '2',
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: '审核状态',
                            key: 'auditstate',
                            list: [
                                {
                                    label: '全部',
                                    value: '',
                                    selected: true
                                },
                                {
                                    label: '待审核',
                                    value: '0',
                                    selected: false
                                },
                                {
                                    label: '审核通过',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: '审核不通过',
                                    value: '2',
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: '出价方式',
                            key: 'bidtype',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: 'CPC',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: 'CPM',
                                    value: '2',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '16',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '8',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'tCPA',
                                    value: '64',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'CPT',
                                    value: '4',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'JDTCPA',
                                    value: '32',
                                    selected: false,
                                    hide: true
                                }
                            ]
                        },
                        {
                            name: '计划类型',
                            key: 'playplatform',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: 'PC推广',
                                    value: '8',
                                    selected: false
                                },
                                {
                                    label: '无线推广',
                                    value: '16',
                                    selected: false
                                },
                                {
                                    label: '朋友圈推广',
                                    value: '32',
                                    selected: false
                                }
                            ]
                        }
                    ],
                    2: [
                        {
                            name: '启动状态',
                            key: 'adstate',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: '启用中',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: '暂停中',
                                    value: '2',
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: '审核状态',
                            key: 'auditstate',
                            list: [
                                {
                                    label: '全部',
                                    value: '',
                                    selected: true
                                },
                                {
                                    label: '待审核',
                                    value: '0',
                                    selected: false
                                },
                                {
                                    label: '审核通过',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: '审核不通过',
                                    value: '2',
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: '出价方式',
                            key: 'bidtype',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: 'CPC',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: 'CPM',
                                    value: '2',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '16',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '8',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'tCPA',
                                    value: '64',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'CPT',
                                    value: '4',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'JDTCPA',
                                    value: '32',
                                    selected: false,
                                    hide: true
                                }
                            ]
                        },
                        {
                            name: '计划类型',
                            key: 'playplatform',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: '京东定向',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: '头条定向',
                                    value: '2',
                                    selected: false
                                }
                            ]
                        }
                    ],
                    4: [
                        {
                            name: '启动状态',
                            key: 'adstate',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: '启用中',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: '暂停中',
                                    value: '2',
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: '审核状态',
                            key: 'auditstate',
                            list: [
                                {
                                    label: '全部',
                                    value: '',
                                    selected: true
                                },
                                {
                                    label: '待审核',
                                    value: '0',
                                    selected: false
                                },
                                {
                                    label: '审核通过',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: '审核不通过',
                                    value: '2',
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: '出价方式',
                            key: 'bidtype',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: 'CPC',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: 'CPM',
                                    value: '2',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '16',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '8',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'tCPA',
                                    value: '64',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'CPT',
                                    value: '4',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'JDTCPA',
                                    value: '32',
                                    selected: false,
                                    hide: true
                                }
                            ]
                        },
                        {
                            name: '计划类型',
                            key: 'playplatform',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: '京东标签',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: '百度标签',
                                    value: '4',
                                    selected: false
                                },
                                {
                                    label: '京东定向',
                                    value: '64',
                                    selected: false
                                }
                            ]
                        }
                    ],
                    5: [
                        {
                            name: '启动状态',
                            key: 'adstate',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: '启用中',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: '暂停中',
                                    value: '2',
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: '审核状态',
                            key: 'auditstate',
                            list: [
                                {
                                    label: '全部',
                                    value: '',
                                    selected: true
                                },
                                {
                                    label: '待审核',
                                    value: '0',
                                    selected: false
                                },
                                {
                                    label: '审核通过',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: '审核不通过',
                                    value: '2',
                                    selected: false
                                }
                            ]
                        },
                        {
                            name: '出价方式',
                            key: 'bidtype',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: 'CPC',
                                    value: '1',
                                    selected: false
                                },
                                {
                                    label: 'CPM',
                                    value: '2',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '16',
                                    selected: false
                                },
                                {
                                    label: 'tCPA',
                                    value: '8',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'tCPA',
                                    value: '64',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'CPT',
                                    value: '4',
                                    selected: false,
                                    hide: true
                                },
                                {
                                    label: 'JDTCPA',
                                    value: '32',
                                    selected: false,
                                    hide: true
                                }
                            ]
                        },
                        {
                            name: '计划类型',
                            key: 'playplatform',
                            list: [
                                {
                                    label: '全部',
                                    value: '0',
                                    selected: true
                                },
                                {
                                    label: '京X推广',
                                    value: '1',
                                    selected: false
                                }
                            ]
                        }
                    ]
                }
            }
        }
    },
    custom: {
        kuaiche: [
            {
                name: '基础数据',
                list: [
                    {
                        label: '全部',
                        value: 'all',
                        selected: true
                    },
                    {
                        label: '展现数',
                        value: 'Impressions',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '点击数',
                        value: 'Clicks',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '点击率(%)',
                        value: 'CTR',
                        selected: true,
                        format: 'percent_2'
                    },
                    {
                        label: '总费用',
                        value: 'Cost',
                        selected: true,
                        format: 'number_2'
                    },
                    {
                        label: '千次展现成本',
                        value: 'CPM',
                        selected: true,
                        format: 'number_2'
                    },
                    {
                        label: '平均点击成本',
                        value: 'CPC',
                        selected: true,
                        format: 'number_2'
                    }
                ]
            },
            {
                name: '转化数据',
                list: [
                    {
                        label: '全部',
                        value: 'all',
                        selected: true
                    },
                    {
                        label: '直接订单行',
                        value: 'DirectOrderCnt',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '直接订单金额',
                        value: 'DirectOrderSum',
                        selected: true,
                        format: 'number_2'
                    },
                    {
                        label: '间接订单行',
                        value: 'IndirectOrderCnt',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '间接订单金额',
                        value: 'IndirectOrderSum',
                        selected: true,
                        format: 'number_2'
                    },
                    {
                        label: '总订单行',
                        value: 'TotalOrderCnt',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '总订单金额',
                        value: 'TotalOrderSum',
                        selected: true,
                        format: 'number_2'
                    },
                    {
                        label: '直接加购数',
                        value: 'DirectCartCnt',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '间接加购数',
                        value: 'IndirectCartCnt',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '总加购数',
                        value: 'TotalCartCnt',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '转化率(%)',
                        value: 'TotalOrderCVS',
                        selected: true,
                        format: 'percent_2'
                    },
                    {
                        label: 'ROI',
                        value: 'TotalOrderROI',
                        selected: true,
                        format: 'number_2'
                    }
                ]
            },
        ],
        featured: [
            {
                name: '基础数据',
                list: [
                    {
                        label: '全部',
                        value: 'all',
                        selected: true
                    },
                    {
                        label: '展现数',
                        value: 'Impressions',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '点击数',
                        value: 'Clicks',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '点击率(%)',
                        value: 'CTR',
                        selected: true,
                        format: 'percent_2'
                    },
                    {
                        label: '总费用',
                        value: 'Cost',
                        selected: true,
                        format: 'number_2'
                    },
                    {
                        label: '千次展现成本',
                        value: 'CPM',
                        selected: true,
                        format: 'number_2'
                    },
                    {
                        label: '平均点击成本',
                        value: 'CPC',
                        selected: true,
                        format: 'number_2'
                    }
                ]
            },
            {
                name: '转化数据',
                list: [
                    {
                        label: '全部',
                        value: 'all',
                        selected: true
                    },
                    {
                        label: '直接订单行',
                        value: 'DirectOrderCnt',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '直接订单金额',
                        value: 'DirectOrderSum',
                        selected: true,
                        format: 'number_2'
                    },
                    {
                        label: '间接订单行',
                        value: 'IndirectOrderCnt',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '间接订单金额',
                        value: 'IndirectOrderSum',
                        selected: true,
                        format: 'number_2'
                    },
                    {
                        label: '总订单行',
                        value: 'TotalOrderCnt',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '总订单金额',
                        value: 'TotalOrderSum',
                        selected: true,
                        format: 'number_2'
                    },
                    {
                        label: '直接加购数',
                        value: 'DirectCartCnt',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '间接加购数',
                        value: 'IndirectCartCnt',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '总加购数',
                        value: 'TotalCartCnt',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '转化率(%)',
                        value: 'TotalOrderCVS',
                        selected: true,
                        format: 'percent_2'
                    },
                    {
                        label: 'ROI',
                        value: 'TotalOrderROI',
                        selected: true,
                        format: 'number_2'
                    }
                ]
            },
        ],
        direct: [
            {
                name: '基础数据',
                list: [
                    {
                        label: '全部',
                        value: 'all',
                        selected: true,
                    },
                    {
                        label: '消耗',
                        value: 'cost',
                        selected: true,
                        format: 'number_2_0_0_1'
                    },
                    {
                        label: '展现量',
                        value: 'viewcount',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '点击量',
                        value: 'clickcount',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '点击率(%)',
                        value: 'ctr',
                        selected: true,
                        format: 'percent_2_0_0_1'
                    },
                    {
                        label: '点击单价',
                        value: 'cpc',
                        selected: true,
                        format: 'number_2_0_0_1'
                    },
                    {
                        label: 'ECPM',
                        value: 'ECPM',
                        selected: true,
                        format: 'number_2_0_0_1'
                    }
                ]
            },
            {
                name: '转化数据',
                list: [
                    {
                        label: '全部',
                        value: 'all',
                        selected: true
                    },
                    {
                        label: '订单行',
                        value: 'ordercount',
                        selected: true,
                        format: 'number_0'
                    },
                    {
                        label: '订单金额',
                        value: 'ordermoney',
                        selected: true,
                        format: 'number_2_0_0_1'
                    }
                ]
            },
        ]
    }
}