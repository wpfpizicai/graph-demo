
var chartDom = document.getElementById("main");
var myChart = echarts.init(chartDom);
var option;

// 中心节点固定
graph.nodes[0].fixed = true;
graph.nodes[0].x = myChart.getWidth() / 2;
graph.nodes[0].y = myChart.getHeight() / 2;
graph.nodes[0].label = {
  backgroundColor: 'transparent'
}

option = {
  title: {},
  tooltip: {},
  legend: [
    {
      data: graph.categories.map(function (a) {
        return a.name;
      }),
    },
  ],
  draggable: true,
  series: [
    {
      type: "graph",
      layout: "force",
      data: graph.nodes,
      links: graph.links,
      categories: graph.categories,
      roam: true,
      symbol: "rect",
      symbolSize: 200,
      label: {
        position: "inside",
        show: true,
        fontSize: 14,
        backgroundColor: "inherit",
        fontFamily: "Microsoft YaHei",
        padding: 6,
        color: "#FFFFFF",
      },
      selectedMode: true,
      force: {
        repulsion: 400,
        gravity: 0.1,
      },
      lineStyle: {
        color: "source",
        curveness: 0.05,
      },
    },
  ],
};
myChart.setOption(option);

option && myChart.setOption(option);
