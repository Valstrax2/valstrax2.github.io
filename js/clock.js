function myTime(){
  const time = new Date();
  const hh = time.getHours();
  const mm = time.getMinutes();//没有补全烦死了
  const ss = time.getSeconds();
    //这里用const可以不用去判断作用域,比用let和var的性能要好
  // 而且也没必要用变量嘛,上个视频不应该用let的

  document.getElementById('clock').innerText = Math.floor(hh / 10) + (hh % 10 + ':') + Math.floor(mm / 10) + mm % 10 + ':' + Math.floor(ss / 10) + ss % 10;
    //因为js的/不是整除而是会求出浮点数
  //所以这里我们要用Math.floor()方法来向下取整
}//知道是为什么吗?~可以打在弹幕里哦~
myTime();
setInterval(myTime, 1000);

  function displayCurrentDate() {
              // 创建一个Date对象以获取当前日期
              var currentDate = new Date();
  
              // 获取年、月、日
              var year = currentDate.getFullYear();
              var month = currentDate.getMonth() + 1; // 月份从0开始，需要加1
              var day = currentDate.getDate();
  
              // 获取星期
              var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
              var dayOfWeek = daysOfWeek[currentDate.getDay()];
  
              // 格式化日期
              var formattedDate = year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;
  
              // 将结果显示在页面上
              document.getElementById("current-date").innerHTML =  formattedDate;
              document.getElementById("current-day").innerHTML =  dayOfWeek;
          }
  
          // 调用函数以初始化日期显示
          window.onload = displayCurrentDate;