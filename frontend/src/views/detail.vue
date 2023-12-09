<template>
  <div class="h-16 w-full relative my-0 mx-auto">
    <Header :isIndex="false" />
  </div>
  <div class="max-w-[2540px] min-w-[1080px] w-auto my-0 mx-auto py-0 px-2.5 flex justify-center relative box-content">
    <div class="sticky h-fit z-[1] w-[1068px] 3xl:w-[1694px]">
      <div class="h-[108px] pt-[22px] box-border">
        <h1 class=" text-[22px] leading-[34px]">
          {{videoDetail.title}}
        </h1>
        <div class="relative flex items-center h-6 leading-[18px] text-[13px] text-[#9499A0] overflow-hidden">
          <div class="flex items-center overflow-hidden box-border">
            <span class="inline-flex items-center shrink-0 mr-3 overflow-hidden">
              <svg class="view-icon mr-1" style="width:20px;height:20px;" data-v-3b903b56="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" width="20" height="20"><path d="M10 4.040041666666666C7.897383333333334 4.040041666666666 6.061606666666667 4.147 4.765636666666667 4.252088333333334C3.806826666666667 4.32984 3.061106666666667 5.0637316666666665 2.9755000000000003 6.015921666666667C2.8803183333333333 7.074671666666667 2.791666666666667 8.471183333333332 2.791666666666667 9.998333333333333C2.791666666666667 11.525566666666668 2.8803183333333333 12.922083333333333 2.9755000000000003 13.9808C3.061106666666667 14.932983333333334 3.806826666666667 15.666916666666667 4.765636666666667 15.744683333333336C6.061611666666668 15.849716666666666 7.897383333333334 15.956666666666667 10 15.956666666666667C12.10285 15.956666666666667 13.93871666666667 15.849716666666666 15.234766666666667 15.74461666666667C16.193416666666668 15.66685 16.939000000000004 14.933216666666667 17.024583333333336 13.981216666666668C17.11975 12.922916666666667 17.208333333333332 11.526666666666666 17.208333333333332 9.998333333333333C17.208333333333332 8.470083333333333 17.11975 7.073818333333334 17.024583333333336 6.015513333333334C16.939000000000004 5.063538333333333 16.193416666666668 4.329865000000001 15.234766666666667 4.252118333333334C13.93871666666667 4.147016666666667 12.10285 4.040041666666666 10 4.040041666666666zM4.684808333333334 3.255365C6.001155 3.14862 7.864583333333334 3.0400416666666668 10 3.0400416666666668C12.13565 3.0400416666666668 13.999199999999998 3.148636666666667 15.315566666666667 3.2553900000000002C16.753416666666666 3.3720016666666672 17.890833333333333 4.483195 18.020583333333335 5.925965000000001C18.11766666666667 7.005906666666667 18.208333333333336 8.433 18.208333333333336 9.998333333333333C18.208333333333336 11.56375 18.11766666666667 12.990833333333335 18.020583333333335 14.0708C17.890833333333333 15.513533333333331 16.753416666666666 16.624733333333335 15.315566666666667 16.74138333333333C13.999199999999998 16.848116666666666 12.13565 16.95666666666667 10 16.95666666666667C7.864583333333334 16.95666666666667 6.001155 16.848116666666666 4.684808333333334 16.7414C3.2467266666666665 16.624750000000002 2.1092383333333338 15.513266666666667 1.9795200000000002 14.070383333333334C1.8823900000000002 12.990000000000002 1.7916666666666667 11.562683333333334 1.7916666666666667 9.998333333333333C1.7916666666666667 8.434066666666666 1.8823900000000002 7.00672 1.9795200000000002 5.926381666666667C2.1092383333333338 4.483463333333334 3.2467266666666665 3.371976666666667 4.684808333333334 3.255365z" fill="currentColor"></path><path d="M12.23275 9.1962C12.851516666666667 9.553483333333332 12.851516666666667 10.44665 12.232683333333332 10.803866666666666L9.57975 12.335600000000001C8.960983333333335 12.692816666666667 8.1875 12.246250000000002 8.187503333333334 11.531733333333333L8.187503333333334 8.4684C8.187503333333334 7.753871666666667 8.960983333333335 7.307296666666667 9.57975 7.66456L12.23275 9.1962z" fill="currentColor"></path></svg>
              10.3万 
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
      <div class="relative h-[657px] 3xl:h-[1009px]">
        <div class="absolute z-0 w-full h-full flex flex-col flex-nowrap shadow-[0_0_8px_0_#F1F2F3]">
          <div class="relative flex-1 overflow-hidden bg-black">
            <Plyr v-if="plyrOptions" :options="plyrOptions" class="w-full h-full"></Plyr>
          </div>
          <div class="h-[56px] relative flex items-center py-0 px-3 bg-white">

          </div>
        </div>
      </div>
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
                            <img v-if="item.user.cover" :src="`${picUrl}/${item.user.cover}`" class="rounded-full  w-full h-full block object-cover" />
                          </div>
                        </div>
                      </div>
                      <div class="relative">
                        <div class="flex items-center mb-1 text[14px]">
                          <div class="font-medium mr-[5px] text-[#61666D] cursor-pointer">
                            {{item.user.username}}
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
    <div class="relative w-[411px] ml-[30px] flex-none pointer-events-none bg-rose-500">

    </div>    
  </div>
</template>

<script setup>
import Header from '@/components/header.vue'
import userGetGlobalProperties from '@/utils/userGetGlobalProperties'
import { useRoute } from 'vue-router'
import { onMounted, ref, onBeforeUnmount, computed } from 'vue'
import { useStore } from "vuex"
import Plyr from '@/components/plyr.vue'

const { $request } = userGetGlobalProperties()
const vuexStore = useStore()
const user = computed(() => vuexStore.state.user)

const route = useRoute()
const videoDetail = ref({})


const plyrOptions = ref(null)
const getVideoDetail = () => {
  // $request({
  //   url: `/api/v1/video/video/${route.query.videoId}`
  // }).then(res => {
  //   videoDetail.value = res.data

  //   plyrOptions.value = {
  //     ...res.data,
  //     source: res.data.vod.PlayInfoList.PlayInfo[0]['PlayURL'],
  //     poster: res.data.cover
  //   }
  // })
  plyrOptions.value = {
    source: route.query.url,
    poster: route.query.cover
  }
}

const isFocus = ref(false)
const content = ref('')
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
const commentList = ref([])
const commentCount = ref(0)
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

onMounted(() => {
  getVideoDetail()
  getCommentList()
})

onBeforeUnmount(() => {

})
</script>