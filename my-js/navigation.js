document.addEventListener('click', function(event) {

  const checkUrl=function (url){
      return url?.includes('my-hexo-blog');
  };
  // Check if the clicked element is an <a> tag.
  if (event.target.tagName === 'A'|| event.target.parentNode.tagName === 'A') {
    event.preventDefault();
    if(checkUrl(event.target.href)||event.target.parentNode.href){
      const url=event.target.parentNode.href??event.target.href;
        
    // // 播放音效
    // var audio = new Audio('p5.mp3');
    // audio.play();
    // const fileNm=['joker.png','lavenza.png','twin1.png','twin2.png'];

    // // 显示图片
    // var popupImage = document.getElementById('popupImage');
    // popupImage.src=`./pic/${fileNm[Math.floor(Math.random() * fileNm.length)]}`
    // popupImage.style.display = 'block';
  
    // // 1 秒后跳转
    // setTimeout(function() {
    //   popupImage.style.display = 'none';
    //   window.location.href = 'target_page.html'; // 跳转到目标页面
    // }, 850);
      event.preventDefault();
    }

  }
});

