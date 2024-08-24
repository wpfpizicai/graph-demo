const graph = {
  type: "force",
  categories: [
    {
      name: "驻波",
    },
    {
      name: "未来发展",
    },
    {
      name: "技术应用",
    },
    {
      name: "章节联系",
    },
  ],
  nodes: [
    {
      name: "驻波",
      category: 0,
      value: 1,
      symbolSize: 40,
      symbol: "circle",
    },
    {
      name: "未来发展",
      value: 1,
      category: 1,
      symbolSize: 20,
    },
    {
      name: "航空航天",
      value: 1,
      category: 1,
      symbolSize: 10,
    },
    {
      name: "先进材料与制造",
      value: 1,
      category: 1,
      symbolSize: 10,
    },
    {
      name: "新能源",
      value: 1,
      category: 1,
      symbolSize: 10,
    },
    {
      name: "量子通信",
      value: 1,
      category: 1,
      symbolSize: 10,
    },
    {
      name: "结构振动分析",
      value: 1,
      category: 1,
      symbolSize: 10,
    },
    {
      name: "智能结构",
      value: 1,
      category: 1,
      symbolSize: 10,
    },
    {
      name: "自适应材料",
      value: 1,
      category: 1,
      symbolSize: 10,
    },
    {
      name: "能量转换",
      value: 1,
      category: 1,
      symbolSize: 10,
    },
    {
      name: "光学微腔",
      value: 1,
      category: 1,
      symbolSize: 10,
    },
    {
      name: "技术应用",
      value: 1,
      category: 2,
      symbolSize: 20,
    },
    {
      name: "无线电",
      value: 1,
      category: 2,
      symbolSize: 10,
    },
    {
      name: "光纤通信",
      value: 1,
      category: 2,
      symbolSize: 10,
    },
    {
      name: "微波工程",
      value: 1,
      category: 2,
      symbolSize: 10,
    },
    {
      name: "电磁场理论",
      value: 1,
      category: 2,
      symbolSize: 10,
    },
    {
      name: "激光原理",
      value: 1,
      category: 2,
      symbolSize: 10,
    },
    {
      name: "章节联系",
      value: 1,
      category: 3,
      symbolSize: 20,
    },
    {
      name: "量子力学",
      value: 1,
      category: 3,
      symbolSize: 10,
    },
    {
      name: "热学",
      value: 1,
      category: 3,
      symbolSize: 10,
    },
    {
      name: "光学",
      value: 1,
      category: 3,
      symbolSize: 10,
    },
    {
      name: "电磁学",
      value: 1,
      category: 3,
      symbolSize: 10,
    },
    {
      name: "力学",
      value: 1,
      category: 3,
      symbolSize: 10,
    },
    {
      name: "黑体辐射",
      value: 1,
      category: 3,
      symbolSize: 10,
    },
    {
      name: "量子围栏",
      value: 1,
      category: 3,
      symbolSize: 10,
    },
    {
      name: "热声效应",
      value: 1,
      category: 3,
      symbolSize: 10,
    },
    {
      name: "能量传输",
      value: 1,
      category: 3,
      symbolSize: 10,
    },
    {
      name: "衍射",
      value: 1,
      category: 3,
      symbolSize: 10,
    },
    {
      name: "干涉",
      value: 1,
      category: 3,
      symbolSize: 10,
    },
    {
      name: "传输线理论",
      value: 1,
      category: 3,
      symbolSize: 10,
    },
    {
      name: "天线设计",
      value: 1,
      category: 3,
      symbolSize: 10,
    },
    {
      name: "机械波",
      value: 1,
      category: 3,
      symbolSize: 10,
    },
  ],
  links: [
    {
      source: "驻波",
      target: "未来发展",
    },
    {
      source: "驻波",
      target: "技术应用",
    },
    {
      source: "未来发展",
      target: "航空航天",
    },
    {
      source: "未来发展",
      target: "先进材料与制造",
    },
    {
      source: "未来发展",
      target: "新能源",
    },
    {
      source: "未来发展",
      target: "量子通信",
    },
    {
      source: "航空航天",
      target: "结构振动分析",
    },
    {
      source: "先进材料与制造",
      target: "智能结构",
    },
    {
      source: "先进材料与制造",
      target: "自适应材料",
    },
    {
      source: "新能源",
      target: "能量转换",
    },
    {
      source: "量子通信",
      target: "光学微腔",
    },
    {
      source: "技术应用",
      target: "无线电",
    },
    {
      source: "技术应用",
      target: "光纤通信",
    },
    {
      source: "技术应用",
      target: "微波工程",
    },
    {
      source: "技术应用",
      target: "电磁场理论",
    },
    {
      source: "技术应用",
      target: "激光原理",
    },
    {
      source: "驻波",
      target: "章节联系",
    },
    {
      source: "章节联系",
      target: "量子力学",
    },
    {
      source: "章节联系",
      target: "热学",
    },
    {
      source: "章节联系",
      target: "光学",
    },
    {
      source: "章节联系",
      target: "电磁学",
    },
    {
      source: "章节联系",
      target: "力学",
    },
    {
      source: "量子力学",
      target: "黑体辐射",
    },
    {
      source: "量子力学",
      target: "量子围栏",
    },
    {
      source: "热学",
      target: "热声效应",
    },
    {
      source: "热学",
      target: "能量传输",
    },
    {
      source: "光学",
      target: "衍射",
    },
    {
      source: "光学",
      target: "干涉",
    },
    {
      source: "电磁学",
      target: "传输线理论",
    },
    {
      source: "电磁学",
      target: "天线设计",
    },
    {
      source: "力学",
      target: "机械波",
    },
  ],
};
