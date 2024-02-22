// 将视频时长(秒)转化为时分秒的形式
export function getVideoTime(seconds) {
  let secondTime = parseInt(seconds) // 秒
  let minuteTime = 0 // 分
  let hourTime = 0 // 时
  if(secondTime > 60) {
    // 如果秒数大于60，将秒数转换成整数
    // 获取分钟，除以60取整，得到整数分钟
    minuteTime = parseInt(secondTime / 60)
    // 获取秒数，秒数取余，得到整数秒数
    secondTime = parseInt(secondTime % 60)
    // 如果分钟大于60，将分钟转换成小时
    if(minuteTime > 60) {
      // 获取小时，获取分钟除以60，得到整数小时
      hourTime = parseInt(minuteTime / 60)
      // 获取小时后取余的分，获取分钟除以60取余的分
      minuteTime = parseInt(minuteTime % 60)
    }
  }
  // 若秒数是个位数，前面用0补齐
  secondTime = secondTime < 10 ? `0${secondTime}` : secondTime
  let result = secondTime
  if(minuteTime > 0) {
    // 若分钟数是个位数，前面用0补齐
    minuteTime = minuteTime < 10 ? `0${minuteTime}` : minuteTime 
    result = `${minuteTime}:${result}`
  }else {
    // 若分钟数为0，用"00"表示
    result = `00:${result}`
  }

  if(hourTime > 0) {
    // 若小时数是个位数，前面用0补齐
    hourTime = hourTime < 10 ? `0${hourTime}` : hourTime
    result = `${hourTime}:${result}`
  }
  return result
}

// videoFile: 要解析的视频文件资源， time: 获取视频某一时刻的画面
export function captureFrame(videoFile, time = 0) {
  return new Promise((resolve) => {
    // 因为dom节点没有渲染到浏览器，视频播放到指定的时间就会停止播放
    const videoElement = document.createElement('video');
    videoElement.currentTime = time; // 设置截取的帧时间
    // 自动播放存在兼容性问题，设置静音解决自动播放在不同浏览器的兼容性问题
    videoElement.muted = true; 
    videoElement.autoplay = true;
    videoElement.src = URL.createObjectURL(videoFile);
    videoElement.oncanplay = async function () {
      const flame = await drawVideoToCanvas(videoElement);
      resolve(flame); 
    };
  });
}

function drawVideoToCanvas(video) {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      const picName = `${Date.now()}.png`
      resolve({
        file: new File([blob], picName, {
          type: 'image/png'
        }), // 将封面提交到服务端
        url: URL.createObjectURL(blob), // 实现本地预览
        name: picName
      });
    }, 'image/png');
  });
}