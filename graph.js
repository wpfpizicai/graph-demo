const graph = new G6.Graph({
    fitView: true,
    fitViewPadding: [20, 40, 50, 20],
    container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
    width: 1000, // Number，必须，图的宽度
    height: 1000, // Number，必须，图的高度
    layout: {
      // Object，可选，布局的方法及其配置项，默认为 random 布局。
      type: 'force', // 指定为力导向布局
      preventOverlap: true, // 防止节点重叠
      linkDistance: 100, // 指定边距离为100
      nodeSize: 30        // 节点大小，用于算法中防止节点重叠时的碰撞检测。由于已经在上一节的元素配置中设置了每个节点的 size 属性，则不需要在此设置 nodeSize。
    },
  });
  
  graph.data(data); // 读取 Step 2 中的数据源到图上
  graph.render(); //