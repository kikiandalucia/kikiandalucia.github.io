//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号

var backimg =[

    "url(https://www.z4a.net/images/2024/04/13/wallhaven-d6dvdl.png)",
  
    "url(https://www.z4a.net/images/2024/04/14/wallhaven-exwgmr.png)",
    
    "url(https://www.z4a.net/images/2024/04/15/Lain-Iwakura-Serial-Experiments-Lain-1385665-wallhere.com.png)",
    "url(https://www.z4a.net/images/2024/04/15/anime-girls-Lycoris-Recoil-profile-hands-in-pockets-2241876-wallhere.come52ece649a6a0414.jpg)",
    "url(https://www.z4a.net/images/2024/04/15/anime-2288760-wallhere.com.jpg)",
    "url(https://www.z4a.net/images/2024/04/15/sky-anime-2300384-wallhere.com.png)",
    "url(https://www.z4a.net/images/2024/04/15/anime-anime-girls-Gracile-landscape-blurred-city-lights-2301208-wallhere.com.jpg)",
    "url(https://www.z4a.net/images/2024/04/15/anime-girls-Lycoris-Recoil-hands-in-pockets-2241878-wallhere.com387ede3a2d27ca41.jpg)",
    "url(https://www.z4a.net/images/2024/04/15/anime-girls-fireworks-sky-anime-sky-clouds-2271428-wallhere.com.jpg)",
    "url(https://www.z4a.net/images/2024/04/15/anime-girls-anime-nimbus-gun-birds-animals-2200469-wallhere.com.jpg)",
    "url(https://www.z4a.net/images/2024/04/15/Pixiv-anime-2249634-wallhere.com.jpg)",
    "url(https://www.z4a.net/images/2024/04/15/anime-anime-girls-2298976-wallhere.com.jpg)",
    "url(https://www.z4a.net/images/2024/04/15/anime-anime-girls-2299014-wallhere.com.jpg)",
    "url(https://www.z4a.net/images/2024/04/15/photo-manipulation-city-cityscape-night-Moon-women-2262610-wallhere.com.jpg)",
  
  ];
  
  //获取背景图片总数，生成随机数
  
  var bgindex =Math.floor(Math.random() * (backimg.length));
  
  //重设背景图片
  
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];

