var posts=["2024/05/16/FLIP动画实现拖拽排序/","2024/05/29/3D轮播图实现/","2024/05/30/py文件加密/","2023/11/24/几种卡片校验算法/","2024/01/07/实现material文本框效果/","2024/08/30/vue快速上手/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};