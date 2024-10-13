<template lang="pug">
  v-row
    v-col(cols="0" md="3")
    v-col(cols="12" md="3")
      //v-img(src="/img/invitation.png" style="background-color: rgba(255, 255, 255, 0.4);")
      v-card.mt-2(style="background-color: rgba(255, 255, 255, 0.4); min-width: 400px")
        v-card-text
          h1.align-center(style="color: #f56c6c;") Trân Trọng Kính Mời
          h3.pa-4.align-center {{name}}
          p.align-center Tới dự bữa cơm thân mật và
          p.align-center chung vui cùng gia đình chúng tôi
          h3.pa-4.align-center vào 10h00 phút
          h2.pa-4.align-center Ngày 21 tháng 01 năm 2024
          p.align-center tức ngày 11 tháng 12 năm Quý Mão
          h2.pa-4.align-center Tại Gia Đình Nhà {{isGirl ? 'Gái' : 'Trai'}}
          h3.pa-4.align-center {{ isGirl ? 'Tổ dân phố số 2, Yên Định' : 'Xóm Quang Bắc, Hải Quang' }}, Hải Hậu, Nam Định
          p.align-center(style="font-family: 'Great Vibes', cursive; font-size: 22px") Sự hiện diện của quý vị
          p.align-center(style="font-family: 'Great Vibes', cursive; font-size: 22px") là niền vinh hạnh cho gia đình chúng tôi
    v-col(cols="0" md="3")
</template>

<script>
import {defineComponent, getCurrentInstance, onMounted} from "vue";

export default defineComponent({
  setup() {
    const instance = getCurrentInstance().proxy
    const {$route} = instance

    const name = $route.query?.name
    const isGirl = $route.query?.is_girl === 'true'

    return {
      name, isGirl
    }
  }
})
</script>

<style scoped>
.align-center {
  text-align: center;
}
</style>