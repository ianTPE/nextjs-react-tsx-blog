// 閱讀進度條功能
document.addEventListener('DOMContentLoaded', function() {
  const progressBar = document.querySelector('.progress-bar-inner');
  
  if (progressBar) {
    window.addEventListener('scroll', function() {
      // 計算滾動進度
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight) * 100;
      
      // 更新進度條寬度
      progressBar.style.width = scrollPercent + '%';
    });
  }
});
