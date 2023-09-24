<template>
  <div class="flex justify-center items-center w-screen h-screen fixed top-0 left-0 z-10010 bg-black/50 text-[14px]">
    <div class="w-[820px] min-h-[430px] relative flex justify-center bg-white rounded-lg pt-[52px] pr-[65px] pb-[29px] pl-[92px]">
      <!-- 关闭图标 -->
      <div @click="$emit('close')" class="w-8 h-8 absolute top-5 right-5 bg-close-icon bg-no-repeat cursor-pointer">
      </div>

      <!-- 二维码 -->
      <div class="flex flex-col items-center text-[#505050]">
        <div class="mb-[26px] font-medium text-lg leading-4">
          扫描二维码登录
        </div>

        <div class="flex justify-center items-center w-[173px] h-[173px] rounded-lg border border-solid border-[#e3e5e7]">
          <div class="w-40 h-40">
            <img src="data:image/png;base64,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" alt="">
          </div>
        </div>

        <div class="mt-[18px] font-normal leading-[19px] text-[13px] text-center">
          <p> 
            请使用 
            <a href="#" class="text-theme-color">噼哩噼哩客户端</a>
          </p>
          <p>扫码登录或扫码下载APP</p>
        </div>
      </div>

      <!-- 分割线 -->
      <div class="w-px flex-none h-[228px] bg-[#e3e5e7] rounded-lg mt-[43px] mr-[44px] ml-[45px] scale-x-50">
      </div>

      <!-- 表单 -->
      <div class="w-[400px] flex flex-col items-center">
        <div class="flex justify-center mb-6">
          <div class="font-medium text-theme-color leading-5 text-[18px] cursor-pointer">
            密码登录
          </div>
          <div class="w-px h-5 bg-[#e3e5e7] rounded-lg ml-[21px] mr-[21px]">
          </div>
          <div class="font-medium text-[#505050] leading-5 text-[18px] cursor-pointer">
            短信登录
          </div>
        </div>

        <form class="w-[400px] h-[90px] rounded-lg border border-solid border-[#e3e5e7] leading-5 text-[#212121]">
          <div class="w-full h-11 relative flex justify-start items-center py-3 px-5">
            <div>账号</div>
            <input type="text" placeholder="请输入账号" class="ml-5 flex-1 outline-0">
          </div>
          <div class="w-full h-0 border-b border-solid border-[#e3e5e7]"></div>
          <div class="w-full h-11 relative flex justify-start items-center py-3 px-5">
            <div>密码</div>
            <input type="text" placeholder="请输入密码" class="ml-5 flex-1 outline-0">
          </div>
        </form>

        <div class="w-[400px] flex justify-between items-center mt-5 leading-10 text-center">
          <div class="w-[194px] h-10 text-[#18191c] rounded-lg cursor-pointer border border-solid border-[#e3e5e7]">注册</div>
          <div class="w-[194px] h-10 bg-theme-color text-white rounded-lg cursor-pointer border border-solid border-[#e3e5e7]">登录</div>
        </div>

        <div class="mt-6 flex flex-col justify-center items-center">
          <div class="text-[13px] text-center text-[#9499a0] leading-4">
            其他方式登录
          </div>
          <div class="mt-3 flex items-center justify-center">
            <div class="mr-[30px] flex items-center cursor-pointer">
              <img class="w-7 h-7 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAgVBMVEUAAABXu0BYt0BQt0BXu0BWu0BXu0BXu0BXu0BWukBWukBXvEBXu0BXvEBXvEBYukBVukBXu0BWt0BXukBXuEBXu0D////1+/Pq9+fV7s/A5rer3aBsw1jg89uBzHBiwEy14auL0Xug2ZOW1YeBzG93yGSW1YjL6sO14azL6cN2yGP3XpzOAAAAFXRSTlMA3yAQ78+/r5+AUI9w74BgYEBAkHDBb56KAAACF0lEQVRIx52W6XKDIBRGwT3GZmsRUXFP0vb9H7AKGS8aiCXnR0TCmU/gOoh0uJck8jEZwUGYXND/cOPggyz4CE//0HZgKeDIsdSA3Qs1Bk2XejLF7ckGe1fnOT7ZBDsaDxNiZ4Jna4Jnb7rgbeKrK7QnFuzBOxIrYrsJAth9iIdl/9CwLE0pv/elqfoegWpfXdAUYINW9GRkRIBWakBemiOVGRbpE1lpijwaPDANCxvCc8qBbcVF47vq5EQ1YjCK3nyXiXE3QqrpSseeu+jptc96XgWmHSGDEGtCmDHygpK5nUuRdr2MvvfNdMvzXCN+KVNk6RO0qOpr37fXJzFCwdzmT9532THZovmqFHxlF3/WcdWQGUsBI2g3K/G3WG3o4oEVsVqOK4RHaTpfaKkXCVsWzPTL65pPN7X4kxnEX6qIXS4mJqfOH5tVKSJWzJsiXqlcklxe5AI0yuL4RDUpiKkGphRrRFRK+lLk88AQSg4KXVC9TvwSRQ4MU5m1xZ2xlmnEm1LkrqeKTVbU5rcaNtJDCAWqCOutq90CpjiKMTFQZuuah/9Oo+h6ZtPkYTSxI0YKReWLtxFBpJ5bzjOasWYsoBp6HQSRW5R5tz4C4HS0PltjO/H05sH6iQDXtz0d3/94ANPes/9Asjd9572PwE8X6Tm+DPViZMQ5mLUDxGnVCFtqwDH0VlYQS22bcxIGIhn7UXLWWn+10s6FZo+4YQAAAABJRU5ErkJggg==" alt="">
              <span class="text-center text-[13px] leading-4 text-[#9499a0]">微信登录</span>
            </div>
            <div class="mr-[30px] flex items-center cursor-pointer">
              <img class="w-7 h-7 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAh1BMVEUAAADXQDjTQDzaQzfcRTfbRDfcRDbcQzbbRDbbRDfcQzbaQzbbRDbbRDbaRDfcQzbbRDfaQjjaQjXcQzfYRDfbRDTbRDf////gW1D99PPtoZvyubT76Ob20M3pioLdT0Tvrajkc2n20c3rlo7mfnb0xcD43NrrlY7kcmniZ1343driZ1z0xMEgvW1iAAAAFnRSTlMAIBDf34Dv78+/n1BAj7CvcGBgkHBwDUc+aAAAAmpJREFUSMeVlueCqjAQRgOI0qy7m0YVsN297/98OwEdCUQ05w8WDt/MkIjEhJv8RIFHAS/c/CTkM9w4XFKN5ebwgeaDNWURObYa4s+oMWrG1MOruDV9w9o1eU5A37JwDN6CUksTPWsTPXvTRe89wXBCa2rB+ukd6By3K6ca8WcNVoyxLB26i0ex/mxgzRTiMlx990A6C09PZ6XKwXbpIyP6Fn4C8zKONHVYFrJ4tJWfoUMJ5k2PPBi0igHZrX8j4HVLITPXB7udeK1gHem9ziJjouTwQYmnhCCuxh5UhSJO9qKmWwxrTcZeyh5UpcyFyOH0Bi5SaYNNyG7qYeK95CttWUWlJn6PW5RsSgVtlyqxoEhEQs1rNEPrldf5cI8Qb+hxYRKlaVsSY4NZKqU81aynpQY0kTNF3pS4fsDFvTESx4Gi0b4vMqWKdl4UcHWukmSeZXnRV9Gb5VgcDucIJ3B11JbckSmKyXAC7V7I52hxI2WmyYYk0m7+Dbd8JR7boTYlbshOE9WBsYb+MglBZ6r4p8TxXL+Hi7zov2dCnY1N8v7ViIS4z21V9q3U7Ap9YkzOulnrLAkZLtYTA4f+CpYLHEjFgCMdtwhiTBGedT+D/NwtIHU2V3li4tE9iO5qaILQwvF4LNUtTLsr8InnTX6Pebfq8qopmup/V29W0CkRIaNISDmxJwLqNeEYHwG8repzltVpA/Ua8UmP61ErPHy2xnbiniBflg9WxA0sCnXJAMezadDSRM/aRM/eDMCb4n7Z/glE9rOhq5i8xPFfaz7GmdXIs9aw4O1qZIUxam9IdtuwS/aCaJcYrT+uh9kYccQkXQAAAABJRU5ErkJggg==" alt="">
              <span class="text-center text-[13px] leading-4 text-[#9499a0]">微博登录</span>
            </div>
            <div class="mr-[30px] flex items-center cursor-pointer">
              <img class="w-7 h-7 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAb1BMVEUAAABMouVIn+NEn99MouVMouVMo+ZMouVKouRKouJMn+NMouZLouRLo+VMoeNMouZLoeVLoeVNn+RMouX///+83Pal0PL0+v6x1vRireiay/FXqOfS6Pl5uevH4vePxe+Ev+1utOrp9Pzp8/yEv+7XzqLPAAAAE3RSTlMA3yAQ74C/n2BQQK9wz5CPz7BwJ8NfpgAAAbNJREFUSMe1lutygjAQhTeEOyi2AQIC3t//GcvYqk3OYsh0+v1yMN+czc4mQBwyL5ONUDMiLsqc1iGzOFQGYZGu0KLZQkQSrNSQ6I2aGRqkpktxlXJQSc4LNsqJCBhPOCQwwXOa6PmbErxlNpJeVMqD6uWliqOfprPiyN5tcOp0PaObntnmo9hIAV39pFNA9BOogKb+RQN/h9+RCfzR1gbtQqSArtQmemAjUy4QI7GxBTy92qKGJfEshlgp0DO15srmhuIRFuX0Cc/2KO5hUUkF1xt3dxKKuUS3uCPBjA0w4rySwqYyDLCM+EqxVrd45UTtFm81ywlEuzkHXhyhOfY1DArfntg+jRMY/PB80CeODaLhHigpt7fYNSgeuvpgD7k0j9V4Gfbc6RjN7oRE1rCeejVo27vMD4/WFokynB33qUpnUYb+t5zg7+OhNYrVxx5PIzGRJ9ijniwxIC7y3DV3urZ9/DrDfQxvR793a+YnpvRk6+Nt6YXceRQq//rxgKb/h87/fVrtAmKQW2c/JfGkb0PDjBYJomUtMuJQTcRKDUmL0LLiDDWevCzie7LYJGXOWl/BnLhvbq/sWgAAAABJRU5ErkJggg==" alt="">
              <span class="text-center text-[13px] leading-4 text-[#9499a0]">QQ登录</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部文字 -->
      <div class="w-[351px] absolute left-1/2 bottom-[29px] translate-x-2/-4 text-center text-[13px] text-[#999]">
        <p>未注册过哔哩哔哩的手机号，我们将自动帮你注册账号</p>
        <p>
          登录或完成注册即代表你同意
          <span class="text-theme-color cursor-pointer"> 用户协议 </span>和<span class="text-theme-color cursor-pointer"> 隐私政策 </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>