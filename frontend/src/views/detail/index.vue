<template>
  <div class="h-16 w-full relative my-0 mx-auto">
    <Header :isIndex="false" />
  </div>
  <div class="max-w-[2540px] min-w-[1080px] w-auto my-0 mx-auto py-0 px-2.5 flex justify-center relative box-content">
    <div class="sticky h-fit z-[1] w-[1068px] 4xl:w-[1694px]">
      <div class="h-[108px] pt-[22px] box-border">
        <h1 class=" text-[22px] leading-[34px]">
          {{videoDetail.title}}
        </h1>
        <div class="relative flex items-center h-6 leading-[18px] text-[13px] text-[#9499A0] overflow-hidden">
          <div class="flex items-center overflow-hidden box-border">
            <span class="inline-flex items-center shrink-0 mr-3 overflow-hidden">
              <svg class="view-icon mr-1" style="width:20px;height:20px;" data-v-3b903b56="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" width="20" height="20"><path d="M10 4.040041666666666C7.897383333333334 4.040041666666666 6.061606666666667 4.147 4.765636666666667 4.252088333333334C3.806826666666667 4.32984 3.061106666666667 5.0637316666666665 2.9755000000000003 6.015921666666667C2.8803183333333333 7.074671666666667 2.791666666666667 8.471183333333332 2.791666666666667 9.998333333333333C2.791666666666667 11.525566666666668 2.8803183333333333 12.922083333333333 2.9755000000000003 13.9808C3.061106666666667 14.932983333333334 3.806826666666667 15.666916666666667 4.765636666666667 15.744683333333336C6.061611666666668 15.849716666666666 7.897383333333334 15.956666666666667 10 15.956666666666667C12.10285 15.956666666666667 13.93871666666667 15.849716666666666 15.234766666666667 15.74461666666667C16.193416666666668 15.66685 16.939000000000004 14.933216666666667 17.024583333333336 13.981216666666668C17.11975 12.922916666666667 17.208333333333332 11.526666666666666 17.208333333333332 9.998333333333333C17.208333333333332 8.470083333333333 17.11975 7.073818333333334 17.024583333333336 6.015513333333334C16.939000000000004 5.063538333333333 16.193416666666668 4.329865000000001 15.234766666666667 4.252118333333334C13.93871666666667 4.147016666666667 12.10285 4.040041666666666 10 4.040041666666666zM4.684808333333334 3.255365C6.001155 3.14862 7.864583333333334 3.0400416666666668 10 3.0400416666666668C12.13565 3.0400416666666668 13.999199999999998 3.148636666666667 15.315566666666667 3.2553900000000002C16.753416666666666 3.3720016666666672 17.890833333333333 4.483195 18.020583333333335 5.925965000000001C18.11766666666667 7.005906666666667 18.208333333333336 8.433 18.208333333333336 9.998333333333333C18.208333333333336 11.56375 18.11766666666667 12.990833333333335 18.020583333333335 14.0708C17.890833333333333 15.513533333333331 16.753416666666666 16.624733333333335 15.315566666666667 16.74138333333333C13.999199999999998 16.848116666666666 12.13565 16.95666666666667 10 16.95666666666667C7.864583333333334 16.95666666666667 6.001155 16.848116666666666 4.684808333333334 16.7414C3.2467266666666665 16.624750000000002 2.1092383333333338 15.513266666666667 1.9795200000000002 14.070383333333334C1.8823900000000002 12.990000000000002 1.7916666666666667 11.562683333333334 1.7916666666666667 9.998333333333333C1.7916666666666667 8.434066666666666 1.8823900000000002 7.00672 1.9795200000000002 5.926381666666667C2.1092383333333338 4.483463333333334 3.2467266666666665 3.371976666666667 4.684808333333334 3.255365z" fill="currentColor"></path><path d="M12.23275 9.1962C12.851516666666667 9.553483333333332 12.851516666666667 10.44665 12.232683333333332 10.803866666666666L9.57975 12.335600000000001C8.960983333333335 12.692816666666667 8.1875 12.246250000000002 8.187503333333334 11.531733333333333L8.187503333333334 8.4684C8.187503333333334 7.753871666666667 8.960983333333335 7.307296666666667 9.57975 7.66456L12.23275 9.1962z" fill="currentColor"></path></svg>
              {{videoDetail.playCount}}
            </span>
            <span class="inline-flex items-center shrink-0 mr-3 overflow-hidden">
              <svg class="dm-icon mr-1" style="width:20px;height:20px;" data-v-3b903b56="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" width="20" height="20"><path d="M10 4.040041666666666C7.897383333333334 4.040041666666666 6.061606666666667 4.147 4.765636666666667 4.252088333333334C3.806826666666667 4.32984 3.061106666666667 5.0637316666666665 2.9755000000000003 6.015921666666667C2.8803183333333333 7.074671666666667 2.791666666666667 8.471183333333332 2.791666666666667 9.998333333333333C2.791666666666667 11.525566666666668 2.8803183333333333 12.922083333333333 2.9755000000000003 13.9808C3.061106666666667 14.932983333333334 3.806826666666667 15.666916666666667 4.765636666666667 15.744683333333336C6.061611666666668 15.849716666666666 7.897383333333334 15.956666666666667 10 15.956666666666667C12.10285 15.956666666666667 13.93871666666667 15.849716666666666 15.234766666666667 15.74461666666667C16.193416666666668 15.66685 16.939000000000004 14.933216666666667 17.024583333333336 13.981216666666668C17.11975 12.922916666666667 17.208333333333332 11.526666666666666 17.208333333333332 9.998333333333333C17.208333333333332 8.470083333333333 17.11975 7.073818333333334 17.024583333333336 6.015513333333334C16.939000000000004 5.063538333333333 16.193416666666668 4.329865000000001 15.234766666666667 4.252118333333334C13.93871666666667 4.147016666666667 12.10285 4.040041666666666 10 4.040041666666666zM4.684808333333334 3.255365C6.001155 3.14862 7.864583333333334 3.0400416666666668 10 3.0400416666666668C12.13565 3.0400416666666668 13.999199999999998 3.148636666666667 15.315566666666667 3.2553900000000002C16.753416666666666 3.3720016666666672 17.890833333333333 4.483195 18.020583333333335 5.925965000000001C18.11766666666667 7.005906666666667 18.208333333333336 8.433 18.208333333333336 9.998333333333333C18.208333333333336 11.56375 18.11766666666667 12.990833333333335 18.020583333333335 14.0708C17.890833333333333 15.513533333333331 16.753416666666666 16.624733333333335 15.315566666666667 16.74138333333333C13.999199999999998 16.848116666666666 12.13565 16.95666666666667 10 16.95666666666667C7.864583333333334 16.95666666666667 6.001155 16.848116666666666 4.684808333333334 16.7414C3.2467266666666665 16.624750000000002 2.1092383333333338 15.513266666666667 1.9795200000000002 14.070383333333334C1.8823900000000002 12.990000000000002 1.7916666666666667 11.562683333333334 1.7916666666666667 9.998333333333333C1.7916666666666667 8.434066666666666 1.8823900000000002 7.00672 1.9795200000000002 5.926381666666667C2.1092383333333338 4.483463333333334 3.2467266666666665 3.371976666666667 4.684808333333334 3.255365z" fill="currentColor"></path><path d="M13.291666666666666 8.833333333333334L8.166666666666668 8.833333333333334C7.890526666666666 8.833333333333334 7.666666666666666 8.609449999999999 7.666666666666666 8.333333333333334C7.666666666666666 8.057193333333334 7.890526666666666 7.833333333333334 8.166666666666668 7.833333333333334L13.291666666666666 7.833333333333334C13.567783333333335 7.833333333333334 13.791666666666668 8.057193333333334 13.791666666666668 8.333333333333334C13.791666666666668 8.609449999999999 13.567783333333335 8.833333333333334 13.291666666666666 8.833333333333334z" fill="currentColor"></path><path d="M14.541666666666666 12.166666666666666L9.416666666666668 12.166666666666666C9.140550000000001 12.166666666666666 8.916666666666666 11.942783333333333 8.916666666666666 11.666666666666668C8.916666666666666 11.390550000000001 9.140550000000001 11.166666666666668 9.416666666666668 11.166666666666668L14.541666666666666 11.166666666666668C14.817783333333335 11.166666666666668 15.041666666666668 11.390550000000001 15.041666666666668 11.666666666666668C15.041666666666668 11.942783333333333 14.817783333333335 12.166666666666666 14.541666666666666 12.166666666666666z" fill="currentColor"></path><path d="M6.5 8.333333333333334C6.5 8.609449999999999 6.27614 8.833333333333334 6 8.833333333333334L5.458333333333333 8.833333333333334C5.182193333333334 8.833333333333334 4.958333333333334 8.609449999999999 4.958333333333334 8.333333333333334C4.958333333333334 8.057193333333334 5.182193333333334 7.833333333333334 5.458333333333333 7.833333333333334L6 7.833333333333334C6.27614 7.833333333333334 6.5 8.057193333333334 6.5 8.333333333333334z" fill="currentColor"></path><path d="M7.750000000000001 11.666666666666668C7.750000000000001 11.942783333333333 7.526140000000001 12.166666666666666 7.25 12.166666666666666L6.708333333333334 12.166666666666666C6.432193333333334 12.166666666666666 6.208333333333334 11.942783333333333 6.208333333333334 11.666666666666668C6.208333333333334 11.390550000000001 6.432193333333334 11.166666666666668 6.708333333333334 11.166666666666668L7.25 11.166666666666668C7.526140000000001 11.166666666666668 7.750000000000001 11.390550000000001 7.750000000000001 11.666666666666668z" fill="currentColor"></path></svg>
              {{videoDetail.commentCount}}
            </span>
            <span class="text-ellipsis overflow-hidden whitespace-nowrap leading-6 text-[0px] shrink-0 mr-3">
              <span class="text-[13px] h-full inline-block align-middle">
                {{$moment(videoDetail.updateAt).format('YYYY-MM-DD HH:mm:ss')}}
              </span>
            </span>
            <span class="inline-flex items-center shrink-0 mr-[0px] overflow-hidden">
              <span class="iconfont icon-jinzhi w-4 mr-0.5 text-[16px] text-[#fd676f]"></span>
              <span>未经作者授权，禁止转载</span>
            </span>
          </div>
        </div>
      </div>
      <div class="relative h-[657px] 4xl:h-[1009px]">
        <!-- <div class="absolute z-0 w-full h-full flex flex-col flex-nowrap shadow-[0_0_8px_0_#F1F2F3]">
          <div class="relative flex-1 overflow-hidden bg-black">
            <Plyr v-if="plyrOptions" :options="plyrOptions" class="w-full h-full"></Plyr>
          </div>
          <div class="h-[56px] relative flex items-center py-0 px-3 bg-white">

          </div>
        </div> -->
        <PilipiliPlayer v-if="plyrOptions" :options="plyrOptions"></PilipiliPlayer>
      </div>
      <!-- 点赞收藏 -->
      <div class="pt-4 flex items-center justify-between pb-3 leading-7 border-b border-solid border-[#E3E5E7]">
        <div class="relative flex items-center select-none">
          <div class="relative flex items-center select-none">
            <div class="relative mr-2">
              <div @click="likeVideo" :class="videoDetail.islike ? 'text-theme-color' : ''" class="relative flex items-center w-[92px] whitespace-nowrap transition-all duration-300 text-[13px] text-[#61666D] font-medium cursor-pointer hover:text-theme-color">
                <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" class="video-like-icon video-toolbar-item-icon mr-2 shrink-0"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.77234 30.8573V11.7471H7.54573C5.50932 11.7471 3.85742 13.3931 3.85742 15.425V27.1794C3.85742 29.2112 5.50932 30.8573 7.54573 30.8573H9.77234ZM11.9902 30.8573V11.7054C14.9897 10.627 16.6942 7.8853 17.1055 3.33591C17.2666 1.55463 18.9633 0.814421 20.5803 1.59505C22.1847 2.36964 23.243 4.32583 23.243 6.93947C23.243 8.50265 23.0478 10.1054 22.6582 11.7471H29.7324C31.7739 11.7471 33.4289 13.402 33.4289 15.4435C33.4289 15.7416 33.3928 16.0386 33.3215 16.328L30.9883 25.7957C30.2558 28.7683 27.5894 30.8573 24.528 30.8573H11.9911H11.9902Z" fill="currentColor"></path></svg>
                <span class="overflow-hidden text-ellipsis break-words whitespace-nowrap">{{videoDetail.likeCount}}</span>
              </div>
            </div>
            <div class="relative mr-2">
              <div class="relative flex items-center w-[92px] whitespace-nowrap transition-all duration-300 text-[13px] text-[#61666D] font-medium cursor-pointer hover:text-theme-color">
                <svg width="36" height="36" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" class="video-coin-icon video-toolbar-item-icon mr-2 shrink-0" data-v-3b3ce5ad=""><path fill-rule="evenodd" clip-rule="evenodd" d="M14.045 25.5454C7.69377 25.5454 2.54504 20.3967 2.54504 14.0454C2.54504 7.69413 7.69377 2.54541 14.045 2.54541C20.3963 2.54541 25.545 7.69413 25.545 14.0454C25.545 17.0954 24.3334 20.0205 22.1768 22.1771C20.0201 24.3338 17.095 25.5454 14.045 25.5454ZM9.66202 6.81624H18.2761C18.825 6.81624 19.27 7.22183 19.27 7.72216C19.27 8.22248 18.825 8.62807 18.2761 8.62807H14.95V10.2903C17.989 10.4444 20.3766 12.9487 20.3855 15.9916V17.1995C20.3854 17.6997 19.9799 18.1052 19.4796 18.1052C18.9793 18.1052 18.5738 17.6997 18.5737 17.1995V15.9916C18.5667 13.9478 16.9882 12.2535 14.95 12.1022V20.5574C14.95 21.0577 14.5444 21.4633 14.0441 21.4633C13.5437 21.4633 13.1382 21.0577 13.1382 20.5574V12.1022C11.1 12.2535 9.52148 13.9478 9.51448 15.9916V17.1995C9.5144 17.6997 9.10883 18.1052 8.60856 18.1052C8.1083 18.1052 7.70273 17.6997 7.70265 17.1995V15.9916C7.71158 12.9487 10.0992 10.4444 13.1382 10.2903V8.62807H9.66202C9.11309 8.62807 8.66809 8.22248 8.66809 7.72216C8.66809 7.22183 9.11309 6.81624 9.66202 6.81624Z" fill="currentColor"></path></svg>
                <span class="overflow-hidden text-ellipsis break-words whitespace-nowrap">0</span>
              </div>
            </div>
            <div class="relative mr-2">
              <div class="relative flex items-center w-[92px] whitespace-nowrap transition-all duration-300 text-[13px] text-[#61666D] font-medium cursor-pointer hover:text-theme-color">
                <svg width="36" height="36" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" class="video-fav-icon video-toolbar-item-icon mr-2 shrink-0" data-v-c9ebd4c8=""><path fill-rule="evenodd" clip-rule="evenodd" d="M19.8071 9.26152C18.7438 9.09915 17.7624 8.36846 17.3534 7.39421L15.4723 3.4972C14.8998 2.1982 13.1004 2.1982 12.4461 3.4972L10.6468 7.39421C10.1561 8.36846 9.25639 9.09915 8.19315 9.26152L3.94016 9.91102C2.63155 10.0734 2.05904 11.6972 3.04049 12.6714L6.23023 15.9189C6.96632 16.6496 7.29348 17.705 7.1299 18.7605L6.39381 23.307C6.14844 24.6872 7.62063 25.6614 8.84745 25.0119L12.4461 23.0634C13.4276 22.4951 14.6544 22.4951 15.6359 23.0634L19.2345 25.0119C20.4614 25.6614 21.8518 24.6872 21.6882 23.307L20.8703 18.7605C20.7051 17.705 21.0339 16.6496 21.77 15.9189L24.9597 12.6714C25.9412 11.6972 25.3687 10.0734 24.06 9.91102L19.8071 9.26152Z" fill="currentColor"></path></svg>
                <span class="overflow-hidden text-ellipsis break-words whitespace-nowrap">0</span>
              </div>
            </div>
            <div class="relative mr-2">
              <div class="relative flex items-center w-auto whitespace-nowrap transition-all duration-300 text-[13px] text-[#61666D] font-medium cursor-pointer hover:text-theme-color">
                <span>
                  <div class="flex items-center">
                    <svg data-v-75612277="" width="36" height="36" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" class="video-share-icon video-toolbar-item-icon"><path d="M12.6058 10.3326V5.44359C12.6058 4.64632 13.2718 4 14.0934 4C14.4423 4 14.78 4.11895 15.0476 4.33606L25.3847 12.7221C26.112 13.3121 26.2087 14.3626 25.6007 15.0684C25.5352 15.1443 25.463 15.2144 25.3847 15.2779L15.0476 23.6639C14.4173 24.1753 13.4791 24.094 12.9521 23.4823C12.7283 23.2226 12.6058 22.8949 12.6058 22.5564V18.053C7.59502 18.053 5.37116 19.9116 2.57197 23.5251C2.47607 23.6489 2.00031 23.7769 2.00031 23.2122C2.00031 16.2165 3.90102 10.3326 12.6058 10.3326Z" fill="currentColor"></path></svg>
                    <div class="relative w-[90px] h-7 leading-7 overflow-hidden text-ellipsis break-words whitespace-nowrap">
                      <span class="absolute">0</span>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div class="flex items-center select-none"></div>
      </div>
      <!-- 评论区 -->
      <div class="mt-6 z-0 relative">
        <div>
          <div class="bg-white">
            <div>
              <div class="mb-[22px]">
                <ul class="flex items-center">
                  <li class="flex items-center text-[24px]">
                    <span class="font-medium">评论</span>
                    <span class="text-[14px] mr-9 ml-[6px] font-normal text-[#9499A0]">
                      {{commentCount}}
                    </span>
                  </li>
                  <!-- <li></li> -->
                </ul>
              </div>
              <div class="relative">
                <!-- 发表评论 -->
                <div>
                  <div class="flex flex-col">
                    <div class="flex h-[50px] transition-all duration-200" :class="{ 'h-[65px]': isFocus }">
                      <div class="flex justify-center items-center w-20 h-[50px]">
                        <div class="w-12 h-12 block relative bg-cover bg-head-img rounded-full">
                          <img v-if="user.cover" :src="user.cover" class="rounded-full  w-full h-full block object-cover" />
                        </div>
                      </div>
                      <div class="relative flex-1">
                        <textarea v-model="content" @focus="isFocus = true" @blur="isFocus = false" placeholder="下面我简单喵两句" class="w-full h-full py-[5px] px-2.5 border border-solid border-[#F1F2F3] rounded-md bg-[#F1F2F3] leading-[38px] text-[#18191C] resize-none outline-none overflow-auto text-[12px] hover:bg-white hover:border-[#C9CCD0]" :class="{ 'focus-bg': isFocus }"></textarea>
                      </div>
                      <div @click="handleComment" class="flex justify-center items-center relative basis-[70px] ml-2.5 rounded cursor-pointer after:content-[''] after:absolute after:w-full after:h-full after:rounded after:bg-[#00AEEC] hover:after:opacity-100" :class="[content.length > 0 ? 'after:opacity-100' : 'after:opacity-50']">
                        <div class="absolute z-[1] text-[16px] text-white">发布</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 评论列表 -->
                <div v-if="commentList.length" class="mt-[14px] pb-[100px]">
                  <div class="relative" v-for="item in commentList" :key="item._id">
                    <div class="pt-[22px] pr-0 pb-0 pl-20">
                      <div class="flex justify-center absolute left-0 w-20 cursor-pointer">
                        <div>
                          <div class="w-12 h-12 block relative bg-head-img bg-cover rounded-full m-0 p-0">
                            <img v-if="item.user?.cover" :src="`${picUrl}/${item.user?.cover}`" class="rounded-full  w-full h-full block object-cover" />
                          </div>
                        </div>
                      </div>
                      <div class="relative">
                        <div class="flex items-center mb-1 text[14px]">
                          <div class="font-medium mr-[5px] text-[#61666D] cursor-pointer">
                            {{item.user?.username}}
                          </div>
                        </div>
                        <div class="relative py-0.5 px-0 text-[16px] leading-[26px]">
                          <span>{{item.content}}</span>
                          <div class="flex items-center relative mt-0.5 text-[13px] text-[#9499A0]">
                            <span class="mr-5">{{$moment(item.createAt).format("YYYY-MM-DD HH:mm:ss")}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="ml-20 mt-[14px] border border-solid border-[#E3E5E7]">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative w-[411px] ml-[30px] flex-none pointer-events-none">
      <!-- up主信息 -->
      <div class="pointer-events-auto">
        <div class="h-[108px] box-border flex items-center">
          <div>
            <div class="w-12 h-12 flex items-center justify-center">
              <a href="#" class="w-full h-full block rounded-full bg-[#C9CCD0]">
                <div class="w-12 h-12 translate-x-0 translate-y-0 block relative bg-cover rounded-full m-0 p-0 bg-head-img">
                  <img :src="videoDetail.user?.cover" class="rounded-full block object-cover absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-full h-full m-0 p-0" />
                  <span class="w-[18px] h-[18px] absolute bottom-[-1px] right-0"></span>
                </div>
              </a>
            </div>
          </div>
          <div class="ml-3 flex-1 overflow-auto">
            <div class="mb-[5px]">
              <div>
                <div class="flex items-center"> 
                  <a href="#" class="text-theme-color text-[16px] font-medium relative whitespace-nowrap text-ellipsis overflow-hidden mr-3 bg-transparent no-underline outline-none cursor-pointer">
                    {{videoDetail.user?.username}}
                  </a>
                  <a href="#" class="group text-[14px] text-[#61666D] shrink-0 hover:text-theme-color">
                    <span class="iconfont icon-email" style="font-size: 14px;"></span>
                    发消息
                  </a>
                </div>
                <div class="text-[14px] mt-0.5 leading-4 h-4 text-[#9499A0] truncate">
                  {{videoDetail.user?.description || '这个人很懒，什么都没有留下'}}
                </div>
              </div>
            </div>
            <div>
              <div class="flex mt-[5px] whitespace-nowrap clear-both">
                <div class="hover:bg-orange-100 transition-colors duration-300 bg-transparent border border-solid border-theme-color mr-3 shrink-0 w-[109px] text-theme-color box-border p-0 leading-[30px] h-[30px] rounded-md text-[14px] flex items-center justify-center cursor-pointer relative">
                  <div class="w-5 h-5 mr-1 flex">
                    <img src="@/assets/lightning.png" class="w-full h-full align-middle border-none" />
                  </div>
                  <span>充电</span>
                </div>
                <div class="hover:bg-[#FB9A4B] transition-colors duration-300 bg-theme-color text-white max-w-[230px] flex-auto box-border p-0 leading-[30px] h-[30px] rounded-md text-[14px] flex items-center justify-center cursor-pointer relative">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="follow-btn-icon w-4 h-4 mr-1" data-v-186e9fac=""><path fill-rule="evenodd" clip-rule="evenodd" d="M7.25098 8.75V13.25C7.25098 13.6642 7.58676 14 8.00098 14C8.41519 14 8.75098 13.6642 8.75098 13.25V8.75H13.251C13.6652 8.75 14.001 8.41421 14.001 8C14.001 7.58579 13.6652 7.25 13.251 7.25H8.75098V2.75C8.75098 2.33579 8.41519 2 8.00098 2C7.58676 2 7.25098 2.33579 7.25098 2.75V7.25H2.75098C2.33676 7.25 2.00098 7.58579 2.00098 8C2.00098 8.41421 2.33676 8.75 2.75098 8.75H7.25098Z" fill="currentColor"></path></svg>
                  关注 {{ videoDetail.user?.subscribeCount }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 视频列表 -->
      <div class="mt-5">
        <!-- 视频项 -->
        <div class="mb-4" v-for="(item, index) in videoList" :key="index">
          <div class="flex">
            <div class="w-[189px] h-[107px] relative rounded-md bg-[#C9CCD0] grow-0 shrink-0 basis-auto">
              <div class="relative overflow-hidden rounded-md w-full h-full">
                <img class="w-full h-full" :src="item.cover" />
                <div >

                </div>
                <!-- <span class="opacity-0 absolute top-0 left-0 w-full h-full"></span> -->
                <span class="text-[14px] text-white leading-[21px] h-[21px] absolute right-1.5 bottom-1.5 bg-duration-color rounded-sm py-0 px-1">{{ getVideoTime(item.duration) }}</span>
              </div>
            </div>
            <div class="text-[14px] leading-4 ml-2.5 flex-1">
              <a class="text-[#222] bg-transparent outline-none cursor-pointer">{{ item.title }}</a>
              <div class="my-1 mx-0 cursor-pointer h-5 text-[#9499A0]">
                <a class="w-full h-full text-[#9499A0] inline-flex items-center">
                  <svg style="width:18px;height:18px;" class="mr-1 text-[#9499A0]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18" width="18" height="18"><path d="M4.612500000000001 6.186037499999999C4.92315 6.186037499999999 5.175000000000001 6.437872500000001 5.175000000000001 6.748537499999999L5.175000000000001 9.580575C5.175000000000001 10.191075000000001 5.66991 10.686 6.280425000000001 10.686C6.8909325 10.686 7.38585 10.191075000000001 7.38585 9.580575L7.38585 6.748537499999999C7.38585 6.437872500000001 7.637700000000001 6.186037499999999 7.94835 6.186037499999999C8.259 6.186037499999999 8.51085 6.437872500000001 8.51085 6.748537499999999L8.51085 9.580575C8.51085 10.8124125 7.512262499999999 11.811 6.280425000000001 11.811C5.048595000000001 11.811 4.050000000000001 10.8124125 4.050000000000001 9.580575L4.050000000000001 6.748537499999999C4.050000000000001 6.437872500000001 4.3018350000000005 6.186037499999999 4.612500000000001 6.186037499999999z" fill="currentColor"></path><path d="M9.48915 6.748537499999999C9.48915 6.437872500000001 9.7409625 6.186037499999999 10.05165 6.186037499999999L11.79375 6.186037499999999C12.984637500000002 6.186037499999999 13.950000000000001 7.151415 13.950000000000001 8.34225C13.950000000000001 9.5331375 12.984637500000002 10.4985 11.79375 10.4985L10.61415 10.4985L10.61415 11.2485C10.61415 11.55915 10.3623 11.811 10.05165 11.811C9.7409625 11.811 9.48915 11.55915 9.48915 11.2485L9.48915 6.748537499999999zM10.61415 9.3735L11.79375 9.3735C12.3633 9.3735 12.825000000000001 8.9118 12.825000000000001 8.34225C12.825000000000001 7.7727375 12.3633 7.31103 11.79375 7.31103L10.61415 7.31103L10.61415 9.3735z" fill="currentColor"></path><path d="M9 3.7485375000000003C7.111335 3.7485375000000003 5.46225 3.84462 4.2981675 3.939015C3.4891575 4.0046175 2.8620825 4.6226400000000005 2.79 5.424405C2.7045525 6.37485 2.625 7.6282499999999995 2.625 8.9985C2.625 10.368825000000001 2.7045525 11.622225 2.79 12.5726625C2.8620825 13.374412500000002 3.4891575 13.992450000000002 4.2981675 14.058074999999999C5.46225 14.152425000000001 7.111335 14.2485 9 14.2485C10.888874999999999 14.2485 12.538050000000002 14.152425000000001 13.702200000000001 14.058037500000001C14.511074999999998 13.9924125 15.138000000000002 13.3746 15.210075 12.573037500000002C15.295499999999999 11.622975 15.375 10.3698375 15.375 8.9985C15.375 7.627237500000001 15.295499999999999 6.3740775 15.210075 5.4240375C15.138000000000002 4.622475 14.511074999999998 4.00464 13.702200000000001 3.9390374999999995C12.538050000000002 3.844635 10.888874999999999 3.7485375000000003 9 3.7485375000000003zM4.2072375 2.8176975C5.39424 2.7214425 7.074434999999999 2.6235375000000003 9 2.6235375000000003C10.925775 2.6235375000000003 12.606075 2.7214575 13.793099999999999 2.81772C15.141074999999999 2.92704 16.208849999999998 3.9695849999999995 16.330575 5.323297500000001C16.418174999999998 6.297675 16.5 7.585537500000001 16.5 8.9985C16.5 10.4115375 16.418174999999998 11.6994 16.330575 12.6738C16.208849999999998 14.027474999999999 15.141074999999999 15.0700125 13.793099999999999 15.1793625C12.606075 15.275625 10.925775 15.3735 9 15.3735C7.074434999999999 15.3735 5.39424 15.275625 4.2072375 15.179400000000001C2.859045 15.070049999999998 1.7912325 14.027212500000001 1.6695225000000002 12.673425C1.5818849999999998 11.69865 1.5 10.4106 1.5 8.9985C1.5 7.586475 1.5818849999999998 6.2984025 1.6695225000000002 5.3236725C1.7912325 3.96984 2.859045 2.9270175000000003 4.2072375 2.8176975z" fill="currentColor"></path></svg>
                  <span class="truncate line-clamp-1 break-normal">
                    {{ item.user?.username }}
                  </span>
                </a>
              </div>
              <div class="inline-flex items-center text-[#9499A0]">
                <svg class="play mr-1" style="width:18px;height:18px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18" width="18" height="18"><path d="M9 3.7485375000000003C7.111335 3.7485375000000003 5.46225 3.84462 4.2981675 3.939015C3.4891575 4.0046175 2.8620825 4.6226400000000005 2.79 5.424405C2.7045525 6.37485 2.625 7.6282499999999995 2.625 8.9985C2.625 10.368825000000001 2.7045525 11.622225 2.79 12.5726625C2.8620825 13.374412500000002 3.4891575 13.992450000000002 4.2981675 14.058074999999999C5.46225 14.152425000000001 7.111335 14.2485 9 14.2485C10.888874999999999 14.2485 12.538050000000002 14.152425000000001 13.702200000000001 14.058037500000001C14.511074999999998 13.9924125 15.138000000000002 13.3746 15.210075 12.573037500000002C15.295499999999999 11.622975 15.375 10.3698375 15.375 8.9985C15.375 7.627237500000001 15.295499999999999 6.3740775 15.210075 5.4240375C15.138000000000002 4.622475 14.511074999999998 4.00464 13.702200000000001 3.9390374999999995C12.538050000000002 3.844635 10.888874999999999 3.7485375000000003 9 3.7485375000000003zM4.2072375 2.8176975C5.39424 2.7214425 7.074434999999999 2.6235375000000003 9 2.6235375000000003C10.925775 2.6235375000000003 12.606075 2.7214575 13.793099999999999 2.81772C15.141074999999999 2.92704 16.208849999999998 3.9695849999999995 16.330575 5.323297500000001C16.418174999999998 6.297675 16.5 7.585537500000001 16.5 8.9985C16.5 10.4115375 16.418174999999998 11.6994 16.330575 12.6738C16.208849999999998 14.027474999999999 15.141074999999999 15.0700125 13.793099999999999 15.1793625C12.606075 15.275625 10.925775 15.3735 9 15.3735C7.074434999999999 15.3735 5.39424 15.275625 4.2072375 15.179400000000001C2.859045 15.070049999999998 1.7912325 14.027212500000001 1.6695225000000002 12.673425C1.5818849999999998 11.69865 1.5 10.4106 1.5 8.9985C1.5 7.586475 1.5818849999999998 6.2984025 1.6695225000000002 5.3236725C1.7912325 3.96984 2.859045 2.9270175000000003 4.2072375 2.8176975z" fill="currentColor"></path><path d="M11.035350000000001 8.2265625C11.6307375 8.570325 11.6307375 9.42975 11.0353125 9.773475L8.652149999999999 11.149425C8.0567625 11.49315 7.3125 11.063475 7.3125075 10.37595L7.3125075 7.624124999999999C7.3125075 6.936607500000001 8.0567625 6.5069025 8.652149999999999 6.850664999999999L11.035350000000001 8.2265625z" fill="currentColor"></path></svg>
                {{ item.playCount }}
                <svg class="dm ml-2 mr-1" style="width:18px;height:18px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18" width="18" height="18"><path d="M9 3.7485375000000003C7.111335 3.7485375000000003 5.46225 3.84462 4.2981675 3.939015C3.4891575 4.0046175 2.8620825 4.6226400000000005 2.79 5.424405C2.7045525 6.37485 2.625 7.6282499999999995 2.625 8.9985C2.625 10.368825000000001 2.7045525 11.622225 2.79 12.5726625C2.8620825 13.374412500000002 3.4891575 13.992450000000002 4.2981675 14.058074999999999C5.46225 14.152425000000001 7.111335 14.2485 9 14.2485C10.888874999999999 14.2485 12.538050000000002 14.152425000000001 13.702200000000001 14.058037500000001C14.511074999999998 13.9924125 15.138000000000002 13.3746 15.210075 12.573037500000002C15.295499999999999 11.622975 15.375 10.3698375 15.375 8.9985C15.375 7.627237500000001 15.295499999999999 6.3740775 15.210075 5.4240375C15.138000000000002 4.622475 14.511074999999998 4.00464 13.702200000000001 3.9390374999999995C12.538050000000002 3.844635 10.888874999999999 3.7485375000000003 9 3.7485375000000003zM4.2072375 2.8176975C5.39424 2.7214425 7.074434999999999 2.6235375000000003 9 2.6235375000000003C10.925775 2.6235375000000003 12.606075 2.7214575 13.793099999999999 2.81772C15.141074999999999 2.92704 16.208849999999998 3.9695849999999995 16.330575 5.323297500000001C16.418174999999998 6.297675 16.5 7.585537500000001 16.5 8.9985C16.5 10.4115375 16.418174999999998 11.6994 16.330575 12.6738C16.208849999999998 14.027474999999999 15.141074999999999 15.0700125 13.793099999999999 15.1793625C12.606075 15.275625 10.925775 15.3735 9 15.3735C7.074434999999999 15.3735 5.39424 15.275625 4.2072375 15.179400000000001C2.859045 15.070049999999998 1.7912325 14.027212500000001 1.6695225000000002 12.673425C1.5818849999999998 11.69865 1.5 10.4106 1.5 8.9985C1.5 7.586475 1.5818849999999998 6.2984025 1.6695225000000002 5.3236725C1.7912325 3.96984 2.859045 2.9270175000000003 4.2072375 2.8176975z" fill="currentColor"></path><path d="M11.90625 8.0625L7.40625 8.0625C7.0955924999999995 8.0625 6.84375 7.810649999999999 6.84375 7.5C6.84375 7.1893424999999995 7.0955924999999995 6.9375 7.40625 6.9375L11.90625 6.9375C12.2169 6.9375 12.46875 7.1893424999999995 12.46875 7.5C12.46875 7.810649999999999 12.2169 8.0625 11.90625 8.0625z" fill="currentColor"></path><path d="M13.03125 11.0625L8.53125 11.0625C8.220600000000001 11.0625 7.96875 10.810649999999999 7.96875 10.5C7.96875 10.189350000000001 8.220600000000001 9.9375 8.53125 9.9375L13.03125 9.9375C13.3419 9.9375 13.59375 10.189350000000001 13.59375 10.5C13.59375 10.810649999999999 13.3419 11.0625 13.03125 11.0625z" fill="currentColor"></path><path d="M5.90625 7.5C5.90625 7.810649999999999 5.6544075 8.0625 5.34375 8.0625L4.96875 8.0625C4.6580925 8.0625 4.40625 7.810649999999999 4.40625 7.5C4.40625 7.1893424999999995 4.6580925 6.9375 4.96875 6.9375L5.34375 6.9375C5.6544075 6.9375 5.90625 7.1893424999999995 5.90625 7.5z" fill="currentColor"></path><path d="M7.03125 10.5C7.03125 10.810649999999999 6.7794075000000005 11.0625 6.46875 11.0625L6.09375 11.0625C5.7830925 11.0625 5.53125 10.810649999999999 5.53125 10.5C5.53125 10.189350000000001 5.7830925 9.9375 6.09375 9.9375L6.46875 9.9375C6.7794075000000005 9.9375 7.03125 10.189350000000001 7.03125 10.5z" fill="currentColor"></path></svg>
                {{ item.commentCount }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import userGetGlobalProperties from '@/utils/userGetGlobalProperties'
import { useRoute } from 'vue-router'
import { onMounted, ref, computed } from 'vue'
import { useStore } from "vuex"
import PilipiliPlayer from '@/components/PilipiliPlayer.vue'
import { getVideoTime } from '@/utils/getVideoInfo.js'
import type { Ref } from 'vue' 


interface iVideoDetail {
  title?: string,
  playCount?: number,
  commentCount?: number,
  updateAt?: string,
  islike?: boolean,
  likeCount?: number,
  user?: {
    username: string,
    description: string,
    subscribeCount: number,
    cover: string
  }
}

interface iCommentList {
  _id?: string,
  content?: string,
  createAt?: string,
  user?: {
    cover: string,
    username: string
  }
}

interface iVideoList {
  cover?: string,
  duration?: number,
  title?: string,
  playCount?: number,
  commentCount?: number,
  user?: {
    username: string
  } 
}

const { $request, $moment } = userGetGlobalProperties()
const vuexStore = useStore()
const user = computed(() => vuexStore.state.user)

const route = useRoute()
const videoDetail: Ref<iVideoDetail> = ref({})


const plyrOptions = ref(null)
const getVideoDetail = () => {
  $request({
    url: `/api/v1/video/video/${route.query.videoId}`
  }).then(res => {
    videoDetail.value = {
      ...res.data,
      user: {
        ...res.data.user,
        cover: `${import.meta.env.VITE_APP_API_BASE}/${res.data.user.cover}`
      }
    }

    plyrOptions.value = {
      ...res.data,
      poster: res.data.cover
    }
  })
}

const isFocus: Ref<boolean> = ref(false)
const content: Ref<string> = ref('')
const handleComment = () => {
  $request({
    url: `/api/v1/video/comment/${route.query.videoId}`,
    method: 'post',
    data: {
      content: content.value
    }
  }).then(res => {
    getCommentList()
    content.value = ''
  })
}

const picUrl = ref(`${import.meta.env.VITE_APP_API_BASE}`)
const commentList: Ref<iCommentList[]> = ref([])
const commentCount: Ref<number> = ref(0)
const getCommentList = () => {
  $request({
    url: `/api/v1/video/commentlist/${route.query.videoId}`,
    params: {
      pageNum: 1,
      pageSize: 100
    }
  }).then(res => {
    commentList.value = res.data.commentlist || []
    commentCount.value = res.data.count
  })
}

const videoList: Ref<iVideoList[]> = ref([])

const getVideoList = (params = {}) => {
  $request({
    url: '/api/v1/video/videolist',
    params: {
      pageNum: 1,
      pageSize: 20,
      ...params
    }
  }).then(res => {
    videoList.value = res.data.videolist
  })
}

const likeVideo = () => {
  $request({
    url: `/api/v1/video/like/${route.query.videoId}`
  }).then(res => {
    videoDetail.value = {
      ...res.data,
      user: {
        ...res.data.user,
        cover: `${import.meta.env.VITE_APP_API_BASE}/${res.data.user.cover}`
      }
    }
  })
}

onMounted(() => {
  getVideoDetail()
  getCommentList()
  getVideoList()
})
</script>