<template>
  <div class="absolute z-0 w-full h-full flex flex-col flex-nowrap shadow-[0_0_8px_0_#F1F2F3]">
    <div class="video-area relative flex-1 overflow-hidden bg-black">
      <div class="video-perch cursor-none flex w-full h-full justify-center relative">
        <div class="block w-full h-full box-border">
          <video @timeupdate="handleTimeUpdate" @ended="isPaused = false" ref="video" crossorigin="anonymous" preload="auto" class="block w-full h-full m-auto" :src="props.options.url"></video>
        </div>
      </div>
      <div class="video-poster"></div>
      <div class="row-dm-wrap"></div>
      <div class="cmd-dm-wrap"></div>
      <div class="ending-wrap"></div>
      <div class="subtitle-wrap"></div>
      <div class="top-wrap"></div>
      <div class="state-wrap"></div>
      <div class="loading-panel"></div>
      <div class="totast-wrap"></div>
      <div class="control-wrap absolute left-0 bottom-0 w-full z-[75]">
        <div></div>
        <div>
          <!-- 进度条 -->
          <div class="px-3 absolute bottom-[44px] left-0 right-0 transition-opacity duration-200 ease-out">
            <div class="relative">
              <div class="pointer-events-none"></div>
              <div @mousedown="handleProgressDown" class="items-end cursor-pointer flex h-2.5 pb-1.5">
                <div class="h-1 items-center flex relative w-full">
                  <div class="w-full h-full absolute">
                    <div class="bg-control-time-seek rounded-[1.5px] overflow-hidden absolute inset-0">
                      <div class="bg-progress-schedule-buffer absolute inset-0 origin-top-left"></div>
                      <div :style="{transform: `scaleX(${currentTime / options.duration})`}" class="bg-theme-color absolute inset-0 origin-top-left"></div>
                    </div>
                  </div>
                  <div class="w-full h-full absolute left-0 top-0 pointer-events-none"></div>
                  <div class="w-5 h-5 pointer-events-none">

                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <!-- 控制栏 -->
          <div class="flex w-full h-[35px] justify-between leading-[22px] mt-5 px-3 transition-all duration-200 ease-out">
            <div class="inline-flex flex-none">
              <div @click="handlePlaypause" class="fill-white text-control-color text-[0px] h-[22px] leading-[22px] outline-0 relative text-center w-9 z-[2] hover:text-white">
                <div class="w-full cursor-pointer">
                  <span class="h-[22px] opacity-90 hover:opacity-100 align-middle inline-flex w-full select-none">
                    <svg v-if="!isPaused" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_282"><rect width="28" height="28" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_282)"><g transform="matrix(0.27459999918937683,0,0,0.27459999918937683,20.91397476196289,14.090675354003906)" opacity="0.019324449454012724" style="display: none;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"></path></g></g><g transform="matrix(0.7175794243812561,0,0,0.7175794243812561,22.742429733276367,14)" opacity="0.06183682604273557" style="display: none;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"></path></g></g><g style="display: block;" transform="matrix(1,0,0,1,14,14)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d="M0 0"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d="M0 0"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-7.031000137329102,-10.875 C-7.031000137329102,-10.875 -8.32800006866455,-11.25 -9.42199993133545,-10.468999862670898 C-10.109999656677246,-9.906999588012695 -10,-7.992000102996826 -10,-7.992000102996826 C-10,-7.992000102996826 -10,8.015999794006348 -10,8.015999794006348 C-10,8.015999794006348 -10.125,10.241999626159668 -9,10.991999626159668 C-7.875,11.741999626159668 -5,10.031000137329102 -5,10.031000137329102 C-5,10.031000137329102 7.968999862670898,1.875 7.968999862670898,1.875 C7.968999862670898,1.875 9,1.062000036239624 9,0 C9,-1.062000036239624 7.968999862670898,-1.937999963760376 7.968999862670898,-1.937999963760376 C7.968999862670898,-1.937999963760376 -7.031000137329102,-10.875 -7.031000137329102,-10.875z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d=" M-7.031000137329102,-10.875 C-7.031000137329102,-10.875 -8.32800006866455,-11.25 -9.42199993133545,-10.468999862670898 C-10.109999656677246,-9.906999588012695 -10,-7.992000102996826 -10,-7.992000102996826 C-10,-7.992000102996826 -10,8.015999794006348 -10,8.015999794006348 C-10,8.015999794006348 -10.125,10.241999626159668 -9,10.991999626159668 C-7.875,11.741999626159668 -5,10.031000137329102 -5,10.031000137329102 C-5,10.031000137329102 7.968999862670898,1.875 7.968999862670898,1.875 C7.968999862670898,1.875 9,1.062000036239624 9,0 C9,-1.062000036239624 7.968999862670898,-1.937999963760376 7.968999862670898,-1.937999963760376 C7.968999862670898,-1.937999963760376 -7.031000137329102,-10.875 -7.031000137329102,-10.875z"></path></g></g></g></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_83"><rect width="28" height="28" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_83)"><g transform="matrix(1,0,0,1,14,14)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"></path></g></g><g transform="matrix(1,0,0,1,24.812000274658203,14)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"></path></g></g><g transform="matrix(1,0,0,1,14.600000381469727,14)" opacity="1" style="display: none;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d="M0 0"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d="M0 0"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-7.031000137329102,-10.875 C-7.031000137329102,-10.875 -8.32800006866455,-11.25 -9.42199993133545,-10.468999862670898 C-10.109999656677246,-9.906999588012695 -10,-7.992000102996826 -10,-7.992000102996826 C-10,-7.992000102996826 -10,8.015999794006348 -10,8.015999794006348 C-10,8.015999794006348 -10.125,10.241999626159668 -9,10.991999626159668 C-7.875,11.741999626159668 -5,10.031000137329102 -5,10.031000137329102 C-5,10.031000137329102 7.968999862670898,1.875 7.968999862670898,1.875 C7.968999862670898,1.875 9,1.062000036239624 9,0 C9,-1.062000036239624 7.968999862670898,-1.937999963760376 7.968999862670898,-1.937999963760376 C7.968999862670898,-1.937999963760376 -7.031000137329102,-10.875 -7.031000137329102,-10.875z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d=" M-7.031000137329102,-10.875 C-7.031000137329102,-10.875 -8.32800006866455,-11.25 -9.42199993133545,-10.468999862670898 C-10.109999656677246,-9.906999588012695 -10,-7.992000102996826 -10,-7.992000102996826 C-10,-7.992000102996826 -10,8.015999794006348 -10,8.015999794006348 C-10,8.015999794006348 -10.125,10.241999626159668 -9,10.991999626159668 C-7.875,11.741999626159668 -5,10.031000137329102 -5,10.031000137329102 C-5,10.031000137329102 7.968999862670898,1.875 7.968999862670898,1.875 C7.968999862670898,1.875 9,1.062000036239624 9,0 C9,-1.062000036239624 7.968999862670898,-1.937999963760376 7.968999862670898,-1.937999963760376 C7.968999862670898,-1.937999963760376 -7.031000137329102,-10.875 -7.031000137329102,-10.875z"></path></g></g></g></svg>
                  </span>
                </div>
              </div>
              <div class="text-[12px] mr-2.5 min-w-[90px] fill-white text-control-color h-[22px] leading-[22px] outline-0  relative text-center w-9 z-[2] hover:text-white font-harmony-font">
                <input ref="timeSeekInp" @blur="handleTimeSeekBlur" value="00:00" :class="{ hidden: !timeSeekFlag }" class="outline-0 no-underline bg-control-time-seek border border-solid border-transparent text-inherit text-[12px] absolute top-0 left-1.5 w-[60px] h-5 leading-5 text-center px-[5px]" />
                <div @click="handleTimeSeekClick" :class="{ hidden: timeSeekFlag }" class="h-full absolute text-center whitespace-nowrap w-full">
                  <span class="leading-[22px]">{{getVideoTime(currentTime)}}</span>
                  <span class="px-0.5 leading-[22px]">
                    /
                  </span>
                  <span class="leading-[22px]">{{getVideoTime(options.duration)}}</span>
                </div>
              </div>
            </div>
            <div></div>
            <div class="flex justify-end text-white">
              <!-- 清晰度 -->
              <div @mouseenter="handleControlHover" @mouseleave="handleControlLeave" class="flex-none text-[12px] mr-3 w-auto fill-white text-control-color h-[22px] leading-[22px] outline-0 relative text-center z-[2] hover:text-white hover:pt-2.5 hover:mt-[-10px] box-content">
                <div class="cursor-pointer text-[14px] font-semibold">1080P 高清</div>
                <div class="bg-quality-menu-wrap rounded-sm bottom-[41px] cursor-pointer left-1/2 m-0 max-h-[580px] overflow-hidden p-0 absolute translate-x-[-50%]">
                  <ul @click="handleSwitchQuality" class="quality-menu hidden outline-0 m-0 p-0">
                    <li data-value="80" class="flex items-center w-[145px] h-9 py-0 px-3 whitespace-nowrap hover:bg-quality-menu-item text-theme-color">
                      <span class="pointer-events-none">1080P 高清</span>
                    </li>
                    <li data-value="64" class="flex items-center w-[145px] h-9 py-0 px-3 whitespace-nowrap hover:bg-quality-menu-item">
                      <span class="pointer-events-none">720P 高清</span>
                    </li>
                    <li data-value="32" class="flex items-center w-[145px] h-9 py-0 px-3 whitespace-nowrap hover:bg-quality-menu-item">
                      <span class="pointer-events-none">480P 清晰</span>
                    </li>
                    <li data-value="16" class="flex items-center w-[145px] h-9 py-0 px-3 whitespace-nowrap hover:bg-quality-menu-item">
                      <span class="pointer-events-none">360P 流畅</span>
                    </li>
                  </ul>
                </div>
                <div class="hidden bottom-[50px] absolute"></div>
              </div>
              <!-- 倍速 -->
              <div @mouseenter="handleControlHover" @mouseleave="handleControlLeave" class="text-[14px] mr-3 w-[50px] fill-white text-control-color h-[22px] leading-[22px] outline-0 relative text-center z-[2] hover:text-white hover:pt-2.5 hover:mt-[-10px] box-content">
                <div class="cursor-pointer font-semibold w-full">
                  倍速
                </div>
                <ul class="playbackrate-menu outline-0 bg-quality-menu-wrap rounded-sm bottom-[41px] hidden left-1/2 m-0 p-0 absolute text-center translate-x-[-50%] w-[70px]">
                  <li class="cursor-pointer h-9 leading-9 relative hover:bg-quality-menu-item" data-value="2">2.0x</li>
                  <li class="cursor-pointer h-9 leading-9 relative hover:bg-quality-menu-item" data-value="1.5">1.5x</li>
                  <li class="cursor-pointer h-9 leading-9 relative hover:bg-quality-menu-item" data-value="1.25">1.25x</li>
                  <li class="cursor-pointer h-9 leading-9 relative hover:bg-quality-menu-item text-theme-color" data-value="1">1.0x</li>
                  <li class="cursor-pointer h-9 leading-9 relative hover:bg-quality-menu-item" data-value="0.75">0.75x</li>
                  <li class="cursor-pointer h-9 leading-9 relative hover:bg-quality-menu-item" data-value="0.5">0.5x</li>
                </ul>
              </div>
              <!-- 字幕 -->
              <div></div>
              <!-- 音量 -->
              <div></div>
              <!-- 设置 -->
              <div></div>
              <!-- 画中画 -->
              <div></div>
              <!-- 宽屏 -->
              <div></div>
              <!-- 网页全屏 -->
              <div></div>
              <!-- 全屏 -->
              <div></div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="dialog-wrap"></div>
      <div class="music-wrap"></div>
      <div class="business-wrap"></div>
    </div>
    <div class="sending-area h-[56px] relative flex items-center py-0 px-3 bg-white">

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps, nextTick  } from 'vue'
import { getVideoTime } from '@/utils/getVideoInfo.js'


const props = defineProps({
  options: {
    type: Object,
    default(rawProps) {
      return {}
    }
  }
})

const timeSeekFlag = ref(false)
const timeSeekInp = ref()
const handleTimeSeekClick = async () => {
  timeSeekFlag.value = true
  await nextTick()
  timeSeekInp.value.focus()
}
const handleTimeSeekBlur = () => {
  timeSeekFlag.value = false
}


const timer = ref(null)
const handleControlHover = (event) => {
  clearTimeout(timer.value)
  const { target } = event
  timer.value = setTimeout(() => {
    target.classList.add('state-show')
  }, 500);
}

const handleControlLeave = (event) => {
  const { target } = event
  timer.value = setTimeout(() => {
    target.classList.remove('state-show')
  }, 500);
}


const handleSwitchQuality = (event) => {
  clearTimeout(timer.value)
  const { target } = event
  target.parentNode.parentNode.parentNode.classList.remove('state-show')
  console.log(target.dataset.value);
}


const video = ref()
const isPaused = ref(false)

const handlePlaypause = () => {
  if(video.value.paused || video.value.ended) {
    isPaused.value = true
    video.value.play()
  }else {
    isPaused.value = false
    video.value.pause()
  }
}

const currentTime = ref(0)
const handleTimeUpdate = () => {
  currentTime.value = video.value.currentTime
}

const handleProgressDown = (event) => {
  console.log(getVideoTime(event.offsetX / event.target.clientWidth * props.options.duration));
  video.value.currentTime = event.offsetX / event.target.clientWidth * props.options.duration
}

const danmus = ref([
  '我居然看完了', 
  '来了', 
  '我太可啦', 
  '这是什么片子啊，中国的吗',
  '亚瑟，哈哈哈',
  '来了',
  '再来亿遍',
  '来了来了',
  '刚从佟掌柜那里过来',
  '来了来了',
  '我来了，我来了。',
  '。',
  '我看了预告片真觉得神力老娘们更带感啊哈哈哈',
  '来了',
  '寡姐！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！',
  '来来来',
  '杜兰特',
  '夸父一号准备就绪！',
  'im Durant',
  '我来了',
  '预告解析呢',
  '满脸痘痘',
  '杜兰特宣布承包此视频',
  '来了',
  '自我牺牲，成就大我',
  '回来了！',
  '来了来了',
  '除了瓦坎达',
  '哇我的宝贝啊  寡姐！！！！！！！！！！！！！！',
  '缪斯forever',
  '必须看',
  '有毒↑',
  '刚从佟掌柜那来',
  '瓦坎达除外',
  '你们有毒，哈哈哈哈哈哈',
  '鸡皮疙瘩起来了',
  '！！！',
  '瓦坎达！',
  '瓦坎达的是魔鬼吧',
  '瓦坎达forever',
  '罗斯将军',
  '罗斯将军',
  '瓦坎达的是魔鬼吗',
  '太喜欢了',
  '瓦坎达',
  '寡姐牛逼。',
  '瞎建',
  '这音乐也太棒了吧',
  '娜塔莎 你得支愣起来呀',
  '赛博配乐',
  '比我白！！！！！！！！！！！',
  '我爱！！！！',
  '瓦坎达',
  '赶紧洗澡  杜兰特等着呢',
  '！！',
  '碟中谍7',
  '我预判了你的预判',
  '妹妹登场',
  '我预判你预判了我预判了你预判的预判',
  '战 术 换 枪',
  '战 术 换 枪',
  '战 术 换 枪',
  '爱了爱了',
  '我预判你预判了我预判了你预判的预判',
  '都别动，我的！',
  '红寡妇',
  '我预判了你的预判',
  '动作都是一致的',
  '谢了兄弟',
  '...',
  'Faker',
  '也是从武林寡妇来的',
  "It's good to see u too,sis.",
  '白鳏夫',
  '这是伊莲娜，有点东西呀',
  '我预判了你预判我的预判',
  '这个看着好像红雀那个场景',
  '初次见面 我是你姐夫',
  '为了苏维埃',
  '寡姐的技能到底是啥，，，，',
  '这里有点像惊队',
  '我喜欢妹妹',
  '白鳏夫',
  '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
  '哇，这套衣服好看',
  '武林寡妇过来的。',
  '啊啊啊啊啊啊啊啊',
  '帅帅帅',
  '嗷嗷嗷嗷嗷嗷嗷嗷嗷',
  '模仿大师',
  '模仿大师',
  '模仿大师',
  '模仿大师',
  '模仿大师！',
  '模仿大师',
  '鸡皮疙瘩起来了',
  '宝马打钱',
  '帅！',
  '妹妹也很好康',
  '我爱了',
  '是你！红星二锅头队长',
  '是你！红星二锅头队长！',
  '红星二锅头',
  'Still fits',
  '是你！警长！',
  '啊啊啊啊啊啊啊啊啊啊啊啊',
  '哈哈哈哈哈哈哈哈哈',
  '帅啊啊啊啊啊啊啊，我i了！！！！！',
  '乌拉',
  '苏联队长（滑稽',
  '期待',
  '你的瓦西里去克里帝国了',
  '兄弟们，你们说我娶寡姐可好?',
  '蕾切尔',
  '霍普警长！！！',
  '怪奇物语里面的霍铂警长！！！',
  '奥拉夫是北欧的',
  '可萌可萌的寡姐诶',
  '地上有盾牌!',
  '米8直升机',
  '我C，Red Guardian!！！！！！',
  '怪奇物语警长',
  '苏维埃队长',
  '霍普警长！！！！！！',
  '太像崔佛了',
  '怪奇物语的警长唉～～～',
  '玩正当防卫的你',
  'rotk',
  '是的',
  '苏    联    空    降    单    兵',
  '瓦坎达队长',
  '警长好评',
  '太对了',
  '帅帅帅',
  '卧槽，酷啊',
  '牛牛牛',
  '太帅了吧',
  '寡姐老了',
  '太帅',
  '啊啊啊啊啊啊啊啊',
  '这音乐带劲啊',
  '爱',
  '碟中谍',
  '我靠',
  '表白总攻大人'
])
</script>

<style scoped>
.state-show .quality-menu {
  display: block;
}
.state-show .playbackrate-menu {
  display: block;
}

</style>