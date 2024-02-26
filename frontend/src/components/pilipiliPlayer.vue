<template>
  <div class="absolute z-0 w-full h-full flex flex-col flex-nowrap shadow-[0_0_8px_0_#F1F2F3]">
    <div class="video-area relative flex-1 overflow-hidden bg-black">
      <div class="video-perch cursor-none flex w-full h-full justify-center relative">
        <div class="block w-full h-full box-border">
          <video
            @timeupdate="handleTimeUpdate"
            @ended="isPaused = false" 
            muted="muted" 
            ref="video" 
            autoplay 
            crossorigin="anonymous" 
            preload="auto" 
            class="block w-full h-full m-auto" 
            :src="props.options.url">
          </video>
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
              <div ref="progressArea" @mousedown="handleProgressDown" class="items-end cursor-pointer flex h-2.5 pb-1.5">
                <div class="h-1 items-center flex relative w-full">
                  <div class="w-full h-full absolute">
                    <div class="bg-control-time-seek rounded-[1.5px] overflow-hidden absolute inset-0">
                      <div class="bg-progress-schedule-buffer absolute inset-0 origin-top-left"></div>
                      <div :style="{transform: `scaleX(${currentTime / options.duration})`}" class="bg-theme-color absolute inset-0 origin-top-left"></div>
                    </div>
                  </div>
                  <div class="w-full h-full absolute left-0 top-0 pointer-events-none"></div>
                  <div :style="{transform: `translateX(${thumbOffsetX}px)`}" class="w-5 h-5 pointer-events-none">
                    <div class="h-full leading-3 scale-100 transition-all duration-200 w-full">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_55"><rect width="18" height="18" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_55)"><g transform="matrix(0.9883429408073425,-0.7275781631469727,0.6775955557823181,0.920446515083313,7.3224687576293945,-0.7606706619262695)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(0.9937776327133179,-0.11138220876455307,0.11138220876455307,0.9937776327133179,-2.5239999294281006,1.3849999904632568)"><path fill="rgb(51,51,51)" fill-opacity="1" d=" M0.75,-1.25 C0.75,-1.25 0.75,1.25 0.75,1.25 C0.75,1.663925051689148 0.4139249920845032,2 0,2 C0,2 0,2 0,2 C-0.4139249920845032,2 -0.75,1.663925051689148 -0.75,1.25 C-0.75,1.25 -0.75,-1.25 -0.75,-1.25 C-0.75,-1.663925051689148 -0.4139249920845032,-2 0,-2 C0,-2 0,-2 0,-2 C0.4139249920845032,-2 0.75,-1.663925051689148 0.75,-1.25z"></path></g></g><g transform="matrix(1.1436611413955688,0.7535901665687561,-0.6317168474197388,0.9587040543556213,16.0070743560791,2.902894973754883)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(0.992861807346344,0.1192704513669014,-0.1192704513669014,0.992861807346344,-2.5239999294281006,1.3849999904632568)"><path fill="rgb(51,51,51)" fill-opacity="1" d=" M0.75,-1.25 C0.75,-1.25 0.75,1.25 0.75,1.25 C0.75,1.663925051689148 0.4139249920845032,2 0,2 C0,2 0,2 0,2 C-0.4139249920845032,2 -0.75,1.663925051689148 -0.75,1.25 C-0.75,1.25 -0.75,-1.25 -0.75,-1.25 C-0.75,-1.663925051689148 -0.4139249920845032,-2 0,-2 C0,-2 0,-2 0,-2 C0.4139249920845032,-2 0.75,-1.663925051689148 0.75,-1.25z"></path></g></g><g transform="matrix(1,0,0,1,8.890999794006348,8.406000137329102)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0.09099999815225601,1.1009999513626099)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M7,-3 C7,-3 7,3 7,3 C7,4.379749774932861 5.879749774932861,5.5 4.5,5.5 C4.5,5.5 -4.5,5.5 -4.5,5.5 C-5.879749774932861,5.5 -7,4.379749774932861 -7,3 C-7,3 -7,-3 -7,-3 C-7,-4.379749774932861 -5.879749774932861,-5.5 -4.5,-5.5 C-4.5,-5.5 4.5,-5.5 4.5,-5.5 C5.879749774932861,-5.5 7,-4.379749774932861 7,-3z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(51,51,51)" stroke-opacity="1" stroke-width="1.5" d=" M7,-3 C7,-3 7,3 7,3 C7,4.379749774932861 5.879749774932861,5.5 4.5,5.5 C4.5,5.5 -4.5,5.5 -4.5,5.5 C-5.879749774932861,5.5 -7,4.379749774932861 -7,3 C-7,3 -7,-3 -7,-3 C-7,-4.379749774932861 -5.879749774932861,-5.5 -4.5,-5.5 C-4.5,-5.5 4.5,-5.5 4.5,-5.5 C5.879749774932861,-5.5 7,-4.379749774932861 7,-3z"></path></g></g><g transform="matrix(1,0,0,1,8.89900016784668,8.083999633789062)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,-2.5239999294281006,1.3849999904632568)"><path fill="rgb(51,51,51)" fill-opacity="1" d=" M0.875,-1.125 C0.875,-1.125 0.875,1.125 0.875,1.125 C0.875,1.607912540435791 0.48291251063346863,2 0,2 C0,2 0,2 0,2 C-0.48291251063346863,2 -0.875,1.607912540435791 -0.875,1.125 C-0.875,1.125 -0.875,-1.125 -0.875,-1.125 C-0.875,-1.607912540435791 -0.48291251063346863,-2 0,-2 C0,-2 0,-2 0,-2 C0.48291251063346863,-2 0.875,-1.607912540435791 0.875,-1.125z"></path></g></g><g transform="matrix(1,0,0,1,14.008999824523926,8.083999633789062)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,-2.5239999294281006,1.3849999904632568)"><path fill="rgb(51,51,51)" fill-opacity="1" d=" M0.8999999761581421,-1.100000023841858 C0.8999999761581421,-1.100000023841858 0.8999999761581421,1.100000023841858 0.8999999761581421,1.100000023841858 C0.8999999761581421,1.596709966659546 0.4967099726200104,2 0,2 C0,2 0,2 0,2 C-0.4967099726200104,2 -0.8999999761581421,1.596709966659546 -0.8999999761581421,1.100000023841858 C-0.8999999761581421,1.100000023841858 -0.8999999761581421,-1.100000023841858 -0.8999999761581421,-1.100000023841858 C-0.8999999761581421,-1.596709966659546 -0.4967099726200104,-2 0,-2 C0,-2 0,-2 0,-2 C0.4967099726200104,-2 0.8999999761581421,-1.596709966659546 0.8999999761581421,-1.100000023841858z"></path></g></g></g></svg>
                      </div>
                    </div>
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
              <div @mouseenter="handleControlHover(1, $event)" @mouseleave="handleControlLeave(1, $event)" class="flex-none text-[12px] mr-3 w-auto fill-white text-control-color h-[22px] leading-[22px] outline-0 relative text-center z-[2] hover:text-white hover:pt-2.5 hover:mt-[-10px] box-content">
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
              <div @mouseenter="handleControlHover(2, $event)" @mouseleave="handleControlLeave(2, $event)" class="text-[14px] mr-3 w-[50px] fill-white text-control-color h-[22px] leading-[22px] outline-0 relative text-center z-[2] hover:text-white hover:pt-2.5 hover:mt-[-10px] box-content">
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
              <div @mouseenter="handleControlHover(4, $event)" @mouseleave="handleControlLeave(4, $event)" class="fill-white text-control-color w-9 h-[22px] leading-[22px] outline-0 relative text-[0px] text-center z-[2] hover:text-white hover:pt-2.5 hover:mt-[-10px] box-content">
                <div @click="switchMuted" v-if="!isMuted" class="cursor-pointer w-full">
                  <span class="h-[22px] opacity-90 hover:opacity-100 align-middle inline-flex w-full select-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_94"><rect width="88" height="88" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_96"><path d="M0,0 L88,0 L88,88 L0,88z"></path></clipPath></defs><g clip-path="url(#__lottie_element_94)"><g clip-path="url(#__lottie_element_96)" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g transform="matrix(1,0,0,1,28,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M15.5600004196167,-25.089000701904297 C15.850000381469727,-24.729000091552734 16,-24.288999557495117 16,-23.839000701904297 C16,-23.839000701904297 16,23.840999603271484 16,23.840999603271484 C16,24.94099998474121 15.100000381469727,25.840999603271484 14,25.840999603271484 C13.550000190734863,25.840999603271484 13.109999656677246,25.680999755859375 12.75,25.400999069213867 C12.75,25.400999069213867 -4,12.00100040435791 -4,12.00100040435791 C-4,12.00100040435791 -8,12.00100040435791 -8,12.00100040435791 C-12.420000076293945,12.00100040435791 -16,8.420999526977539 -16,4.000999927520752 C-16,4.000999927520752 -16,-3.999000072479248 -16,-3.999000072479248 C-16,-8.418999671936035 -12.420000076293945,-11.99899959564209 -8,-11.99899959564209 C-8,-11.99899959564209 -4,-11.99899959564209 -4,-11.99899959564209 C-4,-11.99899959564209 12.75,-25.39900016784668 12.75,-25.39900016784668 C13.609999656677246,-26.089000701904297 14.869999885559082,-25.948999404907227 15.5600004196167,-25.089000701904297z"></path></g></g><g style="display: none;" transform="matrix(1.0056756734848022,0,0,1.0056756734848022,56.0084342956543,44.0004997253418)" opacity="0.03304187001999623"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-4,-13.859000205993652 C0.7799999713897705,-11.08899974822998 4,-5.919000148773193 4,0.0010000000474974513 C4,5.921000003814697 0.7799999713897705,11.090999603271484 -4,13.861000061035156 C-4,13.861000061035156 -4,-13.859000205993652 -4,-13.859000205993652z"></path></g></g><g style="display: none;" transform="matrix(1.012651801109314,0,0,1.012651801109314,64.37825012207031,44.0057487487793)" opacity="0.013781692947698473"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-6.236000061035156,-28.895999908447266 C4.803999900817871,-23.615999221801758 11.984000205993652,-12.456000328063965 11.984000205993652,-0.006000000052154064 C11.984000205993652,12.454000473022461 4.794000148773193,23.624000549316406 -6.265999794006348,28.893999099731445 C-8.255999565124512,29.8439998626709 -10.645999908447266,29.003999710083008 -11.595999717712402,27.003999710083008 C-12.545999526977539,25.013999938964844 -11.696000099182129,22.624000549316406 -9.706000328063965,21.673999786376953 C-1.406000018119812,17.724000930786133 3.9839999675750732,9.343999862670898 3.9839999675750732,-0.006000000052154064 C3.9839999675750732,-9.345999717712402 -1.3960000276565552,-17.715999603271484 -9.675999641418457,-21.676000595092773 C-11.675999641418457,-22.625999450683594 -12.515999794006348,-25.016000747680664 -11.565999984741211,-27.006000518798828 C-10.616000175476074,-29.006000518798828 -8.22599983215332,-29.84600067138672 -6.236000061035156,-28.895999908447266z"></path></g></g><g style="display: none;" transform="matrix(1.0002110004425049,0,0,1.0002110004425049,56.00299835205078,44)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-4,-13.859000205993652 C0.7799999713897705,-11.08899974822998 4,-5.919000148773193 4,0.0010000000474974513 C4,5.921000003814697 0.7799999713897705,11.090999603271484 -4,13.861000061035156 C-4,13.861000061035156 -4,-13.859000205993652 -4,-13.859000205993652z"></path></g></g><g style="display: none;" transform="matrix(1.000206708908081,0,0,1.000206708908081,64.00399780273438,44.00699996948242)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-6.236000061035156,-28.895999908447266 C4.803999900817871,-23.615999221801758 11.984000205993652,-12.456000328063965 11.984000205993652,-0.006000000052154064 C11.984000205993652,12.454000473022461 4.794000148773193,23.624000549316406 -6.265999794006348,28.893999099731445 C-8.255999565124512,29.8439998626709 -10.645999908447266,29.003999710083008 -11.595999717712402,27.003999710083008 C-12.545999526977539,25.013999938964844 -11.696000099182129,22.624000549316406 -9.706000328063965,21.673999786376953 C-1.406000018119812,17.724000930786133 3.9839999675750732,9.343999862670898 3.9839999675750732,-0.006000000052154064 C3.9839999675750732,-9.345999717712402 -1.3960000276565552,-17.715999603271484 -9.675999641418457,-21.676000595092773 C-11.675999641418457,-22.625999450683594 -12.515999794006348,-25.016000747680664 -11.565999984741211,-27.006000518798828 C-10.616000175476074,-29.006000518798828 -8.22599983215332,-29.84600067138672 -6.236000061035156,-28.895999908447266z"></path></g></g><g transform="matrix(1,0,0,1,56,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-4,-13.859000205993652 C0.7799999713897705,-11.08899974822998 4,-5.919000148773193 4,0.0010000000474974513 C4,5.921000003814697 0.7799999713897705,11.090999603271484 -4,13.861000061035156 C-4,13.861000061035156 -4,-13.859000205993652 -4,-13.859000205993652z"></path></g></g><g transform="matrix(1,0,0,1,64.01399993896484,44.00699996948242)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-6.236000061035156,-28.895999908447266 C4.803999900817871,-23.615999221801758 11.984000205993652,-12.456000328063965 11.984000205993652,-0.006000000052154064 C11.984000205993652,12.454000473022461 4.794000148773193,23.624000549316406 -6.265999794006348,28.893999099731445 C-8.255999565124512,29.8439998626709 -10.645999908447266,29.003999710083008 -11.595999717712402,27.003999710083008 C-12.545999526977539,25.013999938964844 -11.696000099182129,22.624000549316406 -9.706000328063965,21.673999786376953 C-1.406000018119812,17.724000930786133 3.9839999675750732,9.343999862670898 3.9839999675750732,-0.006000000052154064 C3.9839999675750732,-9.345999717712402 -1.3960000276565552,-17.715999603271484 -9.675999641418457,-21.676000595092773 C-11.675999641418457,-22.625999450683594 -12.515999794006348,-25.016000747680664 -11.565999984741211,-27.006000518798828 C-10.616000175476074,-29.006000518798828 -8.22599983215332,-29.84600067138672 -6.236000061035156,-28.895999908447266z"></path></g></g></g></g></svg>
                  </span>
                </div>
                <div @click="switchMuted" v-else class="cursor-pointer w-full">
                  <span class="h-[22px] opacity-90 hover:opacity-100 align-middle inline-flex w-full select-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="88" height="88" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_745"><rect width="88" height="88" x="0" y="0"></rect></clipPath><filter id="__lottie_element_750" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feComponentTransfer in="SourceGraphic"><feFuncA type="table" tableValues="1.0 0.0"></feFuncA></feComponentTransfer></filter><mask id="__lottie_element_749" mask-type="alpha"><g filter="url(#__lottie_element_750)"><rect width="88" height="88" x="0" y="0" fill="#ffffff" opacity="0"></rect><g transform="matrix(1,0,0,1,47.422000885009766,41.702999114990234)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-33.94157409667969,-28.281574249267578 C-35.50258255004883,-29.84258270263672 -35.50258255004883,-32.377418518066406 -33.94157409667969,-33.93842697143555 C-33.94157409667969,-33.93842697143555 -33.93842697143555,-33.94157409667969 -33.93842697143555,-33.94157409667969 C-32.377418518066406,-35.50258255004883 -29.84258270263672,-35.50258255004883 -28.281574249267578,-33.94157409667969 C-28.281574249267578,-33.94157409667969 33.94157409667969,28.281574249267578 33.94157409667969,28.281574249267578 C35.50258255004883,29.84258270263672 35.50258255004883,32.377418518066406 33.94157409667969,33.93842697143555 C33.94157409667969,33.93842697143555 33.93842697143555,33.94157409667969 33.93842697143555,33.94157409667969 C32.377418518066406,35.50258255004883 29.84258270263672,35.50258255004883 28.281574249267578,33.94157409667969 C28.281574249267578,33.94157409667969 -33.94157409667969,-28.281574249267578 -33.94157409667969,-28.281574249267578z"></path></g></g></g></mask></defs><g clip-path="url(#__lottie_element_745)"><g mask="url(#__lottie_element_749)" style="display: block;"><g transform="matrix(1,0,0,1,44,44)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-0.4399999976158142,-25.09600067138672 C-0.15000000596046448,-24.736000061035156 0,-24.29599952697754 0,-23.84600067138672 C0,-23.84600067138672 0,23.833999633789062 0,23.833999633789062 C0,24.93400001525879 -0.8999999761581421,25.833999633789062 -2,25.833999633789062 C-2.450000047683716,25.833999633789062 -2.890000104904175,25.673999786376953 -3.25,25.393999099731445 C-3.25,25.393999099731445 -20,11.994000434875488 -20,11.994000434875488 C-20,11.994000434875488 -24,11.994000434875488 -24,11.994000434875488 C-28.420000076293945,11.994000434875488 -32,8.413999557495117 -32,3.99399995803833 C-32,3.99399995803833 -32,-4.00600004196167 -32,-4.00600004196167 C-32,-8.425999641418457 -28.420000076293945,-12.005999565124512 -24,-12.005999565124512 C-24,-12.005999565124512 -20,-12.005999565124512 -20,-12.005999565124512 C-20,-12.005999565124512 -3.25,-25.4060001373291 -3.25,-25.4060001373291 C-2.390000104904175,-26.09600067138672 -1.1299999952316284,-25.95599937438965 -0.4399999976158142,-25.09600067138672z M13.777999877929688,-28.895999908447266 C24.81800079345703,-23.615999221801758 31.99799919128418,-12.456000328063965 31.99799919128418,-0.006000000052154064 C31.99799919128418,12.454000473022461 24.808000564575195,23.624000549316406 13.748000144958496,28.893999099731445 C11.758000373840332,29.8439998626709 9.368000030517578,29.003999710083008 8.418000221252441,27.003999710083008 C7.4679999351501465,25.013999938964844 8.317999839782715,22.624000549316406 10.307999610900879,21.673999786376953 C18.607999801635742,17.724000930786133 23.99799919128418,9.343999862670898 23.99799919128418,-0.006000000052154064 C23.99799919128418,-9.345999717712402 18.618000030517578,-17.715999603271484 10.338000297546387,-21.676000595092773 C8.338000297546387,-22.625999450683594 7.498000144958496,-25.016000747680664 8.447999954223633,-27.006000518798828 C9.39799976348877,-29.006000518798828 11.788000106811523,-29.84600067138672 13.777999877929688,-28.895999908447266z M8,-13.866000175476074 C12.779999732971191,-11.095999717712402 16,-5.926000118255615 16,-0.006000000052154064 C16,5.914000034332275 12.779999732971191,11.083999633789062 8,13.854000091552734 C8,13.854000091552734 8,-13.866000175476074 8,-13.866000175476074z"></path></g></g></g><g transform="matrix(1,0,0,1,41.172000885009766,46.827999114990234)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-33.94157409667969,-28.281574249267578 C-35.50258255004883,-29.84258270263672 -35.50258255004883,-32.377418518066406 -33.94157409667969,-33.93842697143555 C-33.94157409667969,-33.93842697143555 -33.93842697143555,-33.94157409667969 -33.93842697143555,-33.94157409667969 C-32.377418518066406,-35.50258255004883 -29.84258270263672,-35.50258255004883 -28.281574249267578,-33.94157409667969 C-28.281574249267578,-33.94157409667969 33.94157409667969,28.281574249267578 33.94157409667969,28.281574249267578 C35.50258255004883,29.84258270263672 35.50258255004883,32.377418518066406 33.94157409667969,33.93842697143555 C33.94157409667969,33.93842697143555 33.93842697143555,33.94157409667969 33.93842697143555,33.94157409667969 C32.377418518066406,35.50258255004883 29.84258270263672,35.50258255004883 28.281574249267578,33.94157409667969 C28.281574249267578,33.94157409667969 -33.94157409667969,-28.281574249267578 -33.94157409667969,-28.281574249267578z"></path></g></g></g></svg>
                  </span>
                </div>
                <div class="volume-box bg-quality-menu-wrap rounded-sm bottom-[41px] hidden h-[100px] left-1/2 ml-[-16px] absolute w-8">
                  <div class="text-[#e5e9ef] text-[12px] h-7 leading-7 mb-0.5 text-center w-full">{{Math.floor(volume * 100)}}</div>
                  <div class="h-[60px] my-0 mx-auto cursor-pointer items-center flex justify-start align-middle">
                    <div ref="volumeArea" @mousedown="handleZoomVolume" class="flex items-center justify-center h-full select-none align-middle w-full">
                      <div class="items-end h-full w-0.5 flex relative">
                        <div class="bg-[#e7e7e7] rounded-[1.5px] inset-0 absolute overflow-hidden">
                          <div :style="{transform: `scaleY(${volume})`}" class="bg-theme-color inset-0 absolute origin-bottom-left"></div>
                        </div>
                        <div :style="{transform: `translateY(${-volume * 48}px)`}" class="left-[-5px] bottom-0 relative top-auto cursor-pointer">
                          <div class="items-center bg-theme-color rounded-full flex h-3 transition-all duration-200 align-middle w-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
import { ref, onMounted, onBeforeUnmount, defineProps, nextTick, computed  } from 'vue'
import { getVideoTime } from '@/utils/getVideoInfo.js'


const volume = ref(1)
const video = ref()

onMounted(() => {
  if(!localStorage.getItem("controlSetting")) {
    const setting = {
      volume: 1
    }
    localStorage.setItem("controlSetting", JSON.stringify(setting))
  }else {
    const setting = JSON.parse(localStorage.getItem("controlSetting"))
    volume.value = setting.volume
    video.value.volume = setting.volume
  }

})

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
const handleTimeSeekBlur = (event) => {
  const result = event.target.value.split(':')
  let currentTime = 0
  if(result.length > 1) {
    currentTime = result[result.length - 1] * 1 + result[result.length - 2] * 60 + (result[result.length - 3] || 0) * 3600
  }else {
    if(!Number.isNaN(result[0])) {
      currentTime = Number(result[0])
    }
  }
  video.value.currentTime = currentTime
  timeSeekFlag.value = false
}


const timer = ref(null)
const timer2 = ref(null)
const timer4 = ref(null)
const handleControlHover = (type, event) => {
  const { target } = event
  if(type == 1) {
    clearTimeout(timer.value)
    timer.value = timerControl('add', target)
  }else if(type == 2) {
    clearTimeout(timer2.value)
    timer2.value = timerControl('add', target)
  }else if(type == 4) {
    clearTimeout(timer4.value)
    timer4.value = timerControl('add', target)
  }
}

const handleControlLeave = (type, event) => {
  const { target } = event
  if(type == 1) {
    timer.value = timerControl('remove', target)
  }else if(type == 2) {
    timer2.value = timerControl('remove', target)
  }else if(type == 4) {
    timer4.value = timerControl('remove', target)
  }
}

const timerControl = (type, target) => {
  return setTimeout(() => {
    type == 'add' ? target.classList.add('state-show') : target.classList.remove('state-show')
  }, 500)
}


const handleSwitchQuality = (event) => {
  clearTimeout(timer.value)
  const { target } = event
  target.parentNode.parentNode.parentNode.classList.remove('state-show')
  console.log(target.dataset.value);
}


const isPaused = ref(true)

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
const progressArea = ref()
const progressPressDown = ref(false)
const thumbOffsetX = ref(0)
const handleTimeUpdate = (event) => {
  if(!progressPressDown.value) {
    const rect = progressArea.value.getBoundingClientRect()
    thumbOffsetX.value = video.value.currentTime / props.options.duration * rect.width - 10
    console.log();
    currentTime.value = video.value.currentTime
  }else {
    return
  }
}


const handleProgressDown = (event) => {
  progressPressDown.value = true
  event.preventDefault()
  window.addEventListener("mousemove", progressMove)
  window.addEventListener("mouseup", progressUp)
  const rect = progressArea.value.getBoundingClientRect()
  const offsetX = event.clientX - rect.left
  thumbOffsetX.value = offsetX - 10
  console.log(thumbOffsetX.value);
  currentTime.value = offsetX / progressArea.value.clientWidth * props.options.duration
}

const progressMove = (event) => {
  const rect = progressArea.value.getBoundingClientRect()
  const offsetX = event.clientX - rect.left
  thumbOffsetX.value = offsetX - 10
  const progressRate = offsetX / progressArea.value.clientWidth
  if(progressRate < 0) {
    currentTime.value = 0
  }else if(progressRate > 1) {
    currentTime.value = props.options.duration
  }else {
    currentTime.value = progressRate * props.options.duration
  }
}

const progressUp = (event) => {
  video.value.currentTime = currentTime.value
  isPaused.value = true
  video.value.play()
  window.removeEventListener("mousemove", progressMove)
  window.removeEventListener("mouseup", progressUp)
  progressPressDown.value = false
}

const isMuted = computed(() => {
  return volume.value == 0
})
const volumeArea = ref()
const switchMuted = () => {
  video.value.muted = !video.value.muted
  if(video.value.muted) {
    volume.value = 0
  }else {
    const setting = JSON.parse(localStorage.getItem("controlSetting"))
    volume.value = setting.volume
  }
}
const handleZoomVolume = (event) => {
  event.preventDefault()
  window.addEventListener("mousemove", volumeMouseMove)
  window.addEventListener("mouseup", volumeMouseUp)
  const rect = volumeArea.value.getBoundingClientRect()
  const offsetY = rect.bottom - event.clientY
  const calVolume = Math.floor(offsetY / volumeArea.value.clientHeight * 100) / 100
  volume.value = calVolume
  video.value.volume = calVolume
}
const volumeMouseMove = (event) => {
  const rect = volumeArea.value.getBoundingClientRect()
  const offsetY = rect.bottom - event.clientY
  let calVolume = Math.floor(offsetY / volumeArea.value.clientHeight * 100) / 100
  if(calVolume > 1) {
    calVolume = 1
  }else if(calVolume < 0) {
    calVolume = 0
  }
  volume.value = calVolume
  video.value.volume = calVolume
}
const volumeMouseUp = (event) => {
  const setting = JSON.parse(localStorage.getItem("controlSetting"))
  setting.volume = volume.value
  localStorage.setItem("controlSetting", JSON.stringify(setting))
  window.removeEventListener("mousemove", volumeMouseMove)
  window.removeEventListener("mouseup", volumeMouseUp)
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
.state-show .volume-box {
  display: block;
}
</style>