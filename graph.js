
var chartDom = document.getElementById("main");
var myChart = echarts.init(chartDom, "chalk");
var option;

// 中心节点固定
graph.nodes[0].x = myChart.getWidth() / 2;
graph.nodes[0].y = myChart.getHeight() / 2;


option = {
  title: {},
  tooltip: {},
  legend: [
    {
      data: graph.categories.map(function (a) {
        return a.name;
      }),
      orient: 'vertical',
      right: 10,
      top: 'center'
    }
  ],
 
  series: [
    {
      type: "graph",
      layout: "force",
      draggable: true,
      data: graph.nodes,
      links: graph.links,
      categories: graph.categories,
      roam: true,
      symbol: "roundRect",
      // symbolSize: 100,
      left: 20,
      right: 20,
      label: {
        position: "inside",
        show: true,
        fontSize: 24,
        backgroundColor: "inherit",
        fontFamily: "Microsoft YaHei",
        padding: 6,
        color: "#000",
      },
      selectedMode: true,
      force: {
        repulsion: 700,
        edgeLength: 90,
        gravity: 0.2
      },
      lineStyle: {
        color: "source",
        width: 12,
        curveness: 0.05
      }
    },
  ],
};
myChart.setOption(option);
