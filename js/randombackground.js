//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号

var backimg =[

    "url(https://www.z4a.net/images/2024/04/13/wallhaven-d6dvdl.png)",
  
    "url(https://www.z4a.net/images/2024/04/14/wallhaven-exwgmr.png)",
  
  ];
  
  //获取背景图片总数，生成随机数
  
  var bgindex =Math.floor(Math.random() * (backimg.length));
  
  //重设背景图片
  
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];

