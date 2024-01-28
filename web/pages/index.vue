<template lang="pug">
  div
    header-bar(ref="header")
    vuetify-audio(v-if="isPlayAudio" ref="audio" file="/mp3/NgayDauTien.mp3" type="audio/mp3" auto-play="true")
    //audio(id="player" ref="player" v-on:canplay="" src="http://localhost:1000/mp3/NgayDauTien.mp3")
    // this is wellcome
    v-container
      //h1.align-center(style="color: #9ec2bb; font-size: 45px; font-family: 'Great Vibes', cursive;") Welcome to our wedding
      div.hidden-sm-and-down(style="max-width: 400px; margin: 0 auto")
        v-img.align-center(src="/img/birth.png"  max-width="150" style="margin: 0 auto")
        v-divider
        h1.align-center.navbar-brand Welcome to our wedding
        v-divider
      h2.align-center.pt-5.hidden-sm-and-down(style="font-family: 'Great Vibes', cursive; font-size: 30px; color: #f56c6c")
        span Nguyễn Minh Đức &nbsp;
        v-icon(color="#f56c6c" ) mdi-cards-heart
        span &nbsp; Nguyễn Thị Thu Hằng

      div.hidden-md-and-up(style="max-width: 400px; margin: 0 auto")
        v-img.align-center(src="/img/birth.png"  max-width="150" style="margin: 0 auto")
        v-divider
        h1.align-center.navbar-brand Welcome to our wedding
        v-divider
      h2.align-center.pt-5.hidden-md-and-up(style="font-family: 'Great Vibes', cursive; font-size: 20px; color: #f56c6c")
        span Nguyễn Minh Đức &nbsp;
        v-icon(color="#f56c6c" ) mdi-cards-heart
        span &nbsp; Nguyễn Thị Thu Hằng
      //h2.align-center Hai Hau - Nam Dinh

      .max-width-content.pt-16
        v-row
          v-col.bg-txt-content.pa-0.max-width-600(cols="12" md="6")
            .pa-10
              h1.hidden-md-and-up(style="font-family: 'Great Vibes', cursive; font-size: 40px; color: #f56c6c") Nguyễn Minh Đức
              h1.hidden-sm-and-down(style="font-family: 'Great Vibes', cursive; font-size: 45px; color: #f56c6c") Nguyễn Minh Đức
              .ml-3
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
              ul.pl-8.pt-3
                li Date of birth: 18/9/1998
                li Contact: 0357 690 820
          v-col.pa-0.max-width-600(cols="12" md="6")
            v-img(src="/img/content_1.png")
          v-col.pa-0.max-width-600.hidden-sm-and-down(cols="12" md="6")
            v-img(src="/img/content_2.png")
          v-col.bg-txt-content.pa-0.max-width-600(cols="12" md="6")
            .pa-10
              h1.hidden-md-and-up(style="font-family: 'Great Vibes', cursive; font-size: 33px; color: #f56c6c") Nguyễn Thị Thu Hằng
              h1.hidden-sm-and-down(style="font-family: 'Great Vibes', cursive; font-size: 45px; color: #f56c6c") Nguyễn Thị Thu Hằng
              .ml-3
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
              ul.pl-8.pt-3
                li Date of birth: 09/10/1998
                li Contact: 0355 249 922
          v-col.pa-0.max-width-600.hidden-md-and-up(cols="12" md="6")
            v-img(src="/img/content_2.png")
    div.hidden-sm-and-down(style="height: 100px")

    v-img.hidden-sm-and-down(src="/img/content_4.png" width="100%" )
      count-down
    v-img.hidden-md-and-up(src="/img/content_5.png" width="100%" )
      count-down

    div.mt-5(style="max-width: 400px; margin: 0 auto")
      v-img.align-center(src="/img/birth.png"  max-width="150" style="margin: 0 auto")
      v-divider
      h1.align-center.navbar-brand.hidden-md-and-up(style="font-size: 30px") Our Video
      h1.align-center.navbar-brand.hidden-sm-and-down Our Love Story
      v-divider

    v-container.max-width-content
      v-row
        v-col(cols="4" md="2")
          v-img(src="/img/vu_quy.png")
        v-col(cols="8" md="4")
          h3 Bạn Học Từ Thời Thơ Ấu
          p Câu chuyện tình yêu bắt đầu từ thời cấp 1, khi họ là bạn học cùng lớp. Trải qua những năm tháng đầu đời, họ chia sẻ những nụ cười, những kỷ niệm đáng nhớ và xây dựng nên một mối quan hệ thân thiết.

        v-col(cols="4" md="2")
          v-img(src="/img/tiec_nu.png")
        v-col(cols="8" md="4")
          h3 Xa Cách Ở Những Năm THCS
          p Tuy nhiên, khi bước vào cấp 2, số phận đưa họ ra xa nhau. Mặc dù cách xa, nhưng tình bạn của họ vẫn được giữ chặt, như những dòng sông nhỏ mà thời gian không làm mất đi.

        v-col(cols="4" md="2")
          v-img(src="/img/tan_hon.png")
        v-col(cols="8" md="4")
          h3 Là Bạn Cùng Lớp THPT
          p Những kí ức về những ngày thơ ấu cùng nhau luôn là nguồn động viên. Đến khi cùng nhau học cấp 3, sự gặp lại này mang theo nhiều cảm xúc khác nhau. Từ những người bạn học cùng lớp, họ bắt đầu cảm nhận những tình cảm mơ hồ và mới mẻ.

        v-col(cols="4" md="2")
          v-img(src="/img/tic_nam.png")
        v-col(cols="8" md="4")
          h3 Tiến Tới Hôn Nhân
          p Khi bước vào đại học, họ lại phải đối mặt với khoảng cách địa lý. Nhưng tình bạn của họ vẫn khăng khít. Những cuộc gọi video, và những khoảnh khắc kỷ niệm qua màn hình điện thoại giữ cho tình yêu của họ luôn ấm áp.


    div.mt-5(style="max-width: 400px; margin: 0 auto")
      v-img.align-center(src="/img/birth.png"  max-width="150" style="margin: 0 auto")
      v-divider
      h1.align-center.navbar-brand.hidden-md-and-up(style="font-size: 30px") Wedding Events
      h1.align-center.navbar-brand.hidden-sm-and-down Wedding Events
      v-divider

    v-container.max-width-content
      v-row
        v-col(cols="4" md="2")
          v-img(src="/img/vu_quy.png" )
        v-col(cols="8" md="4")
          h3.hidden-md-and-up LỄ VU QUY
          h3.pt-10.hidden-sm-and-down LỄ VU QUY
          v-icon(color="#9ec2bb" size="small") mdi-google-maps
          span(style="color: #9ec2bb").pl-3.pt-1 Hai Duong - Hai Hau - Nam Dinh
          br
          v-icon(color="#9ec2bb" size="small") mdi-watch
          span(style="color: #9ec2bb").pl-3.pt-1 1:00PM - 17/02/2024
          //p when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

        v-col(cols="4" md="2")
          v-img(src="/img/tiec_nu.png")
        v-col(cols="8" md="4")
          h3.hidden-md-and-up TIỆC CƯỚI NHÀ GÁI
          h3.pt-10.hidden-sm-and-down TIỆC CƯỚI NHÀ GÁI
          v-icon(color="#9ec2bb" ) mdi-google-maps
          span(style="color: #9ec2bb").pl-3.pt-1 Hai Duong - Hai Hau - Nam Dinh
          br
          v-icon(color="#9ec2bb" size="small") mdi-watch
          span(style="color: #9ec2bb").pl-3.pt-1 10:00AM - 18/02/2024

      v-row
        v-col(cols="4" md="2")
          v-img(src="/img/tan_hon.png")
        v-col(cols="8" md="4")
          h3.hidden-md-and-up LỄ TÂN HÔN
          h3.pt-10.hidden-sm-and-down LỄ TÂN HÔN
          v-icon(color="#9ec2bb" size="small") mdi-google-maps
          span(style="color: #9ec2bb").pl-3.pt-1 Hai Long - Hai Hau - Nam Dinh
          br
          v-icon(color="#9ec2bb" size="small") mdi-watch
          span(style="color: #9ec2bb").pl-3.pt-1 1:00PM - 18/02/2024
          //p when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

        v-col(cols="4" md="2")
          v-img(src="/img/tic_nam.png")
        v-col(cols="8" md="4")
          h3.hidden-md-and-up TIỆC CƯỚI NHÀ TRAI
          h3.pt-10.hidden-sm-and-down TIỆC CƯỚI NHÀ TRAI
          v-icon(color="#9ec2bb" ) mdi-google-maps
          span(style="color: #9ec2bb").pl-3.pt-1 Hai Long - Hai Hau - Nam Dinh
          br
          v-icon(color="#9ec2bb" size="small") mdi-watch
          span(style="color: #9ec2bb").pl-3.pt-1 10:00AM - 18/02/2024

    div.mt-5(style="max-width: 400px; margin: 0 auto")
      v-img.align-center(src="/img/birth.png"  max-width="150" style="margin: 0 auto")
      v-divider
      h1.align-center.navbar-brand.hidden-md-and-up(style="font-size: 30px") Our Gallery
      h1.align-center.navbar-brand.hidden-sm-and-down Our Gallery
      v-divider

    .mt-2.max-width-content
      v-container
        v-row
          v-col(cols="3" md="2" v-for="url in images" :key="url")
            v-img(:src="url" @click="curImg = url")
            //span hihi
        v-row
          v-col(cols="4" md="3" v-for="url in images2" :key="url")
            v-img(:src="url" @click="curImg = url")

    div.mt-5(style="max-width: 400px; margin: 0 auto")
      v-img.align-center(src="/img/birth.png"  max-width="150" style="margin: 0 auto")
      v-divider
      h1.align-center.navbar-brand.hidden-md-and-up(style="font-size: 30px") Our Video
      h1.align-center.navbar-brand.hidden-sm-and-down Our Video
      v-divider
    .mt-2
      div.our-video
        h1.align-center(style="font-family: 'Great Vibes', cursive; font-size: 60px; color: #f56c6c; padding-top: 80px") Xem video cưới của chúng tôi
        div.center-content
          v-icon.icon-btn(size="100" color="#f56c6c"  @click="openYoutube") mdi-motion-play-outline

    div.mt-5(style="max-width: 400px; margin: 0 auto")
      v-img.align-center(src="/img/birth.png"  max-width="150" style="margin: 0 auto")
      v-divider
      h1.align-center.navbar-brand.hidden-md-and-up(style="font-size: 30px") Box Of Happiness
      h1.align-center.navbar-brand.hidden-sm-and-down Box Of Happiness
      v-divider
    v-container
      v-row
        v-col(cols="12" md="6")
          v-row
            v-col(cols="0" md="4")
            v-col(cols="12" md="8")
              div.custom-card
                h1.align-center(style="font-size: 25px; color: red")
                  i Mừng chú rể
                v-img.mt-4(src="/qr/chu_re.png" max-width="200" style="margin: 0 auto")
                p.align-center.pt-4(style="font-size: 20px") Ngân hàng: Quân Đội MBB
                p.align-center.pt-4(style="font-size: 20px") Tên tài khoản: Nguyễn Minh Đức
                p.align-center.pt-4(style="font-size: 20px") Số tài khoản: 0610119986666

        v-col(cols="12" md="6")
          v-row
            v-col(cols="12" md="8")
              div.custom-card
                h1.align-center(style="font-size: 25px; color: red")
                  i Mừng cô dâu
                v-img.mt-4(src="/qr/co_dau.png" max-width="200" style="margin: 0 auto")
                p.align-center.pt-4(style="font-size: 20px") Ngân hàng: BIDV
                p.align-center.pt-4(style="font-size: 20px") Tên tài khoản: Nguyễn Thị Thu Hằng
                p.align-center.pt-4(style="font-size: 20px") Số tài khoản: 1600323147
            v-col(cols="0" md="4")

    div.thanks.mt-4
      .img-thanks
      h1.align-center.navbar-brand Thank you
    footer-bar

    v-dialog(v-model="curImg" max-width="600")
      v-card
        v-img(
          :src="curImg"
          style="cursor: zoom-in;"
        )

    //v-dialog(v-model="isPlayVideo")
    //  video-player(
    //    src="/video/video.mp4"
    //    controls
    //    :loop="true"
    //    :volume="0.6"
    //    width="400"
    //  )

</template>

<script>
import {defineComponent, getCurrentInstance} from "vue";
import { HeaderBar, FooterBar, CountDown } from '@/components'
import VuetifyAudio from 'vuetify-audio'
import {tr} from "vuetify/locale";

// const baseUrl = ' window.location.origin'

export default defineComponent({
  components: {
    HeaderBar, FooterBar, CountDown, VuetifyAudio
  },
  setup() {
    useHead({
      title: 'Đức - Hằng',
      meta: [
        {name: 'description', content: 'Đức - Hằng'}
      ]
    })

    const instance = getCurrentInstance().proxy
    const {$router} = instance
    const curImg = ref(null)
    const time = ref({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
    const images = Array.from({ length: 18 }, (_, index) => index + 1).map(e => `/anh_nho/${e}.jpg`);
    const images2 = Array.from({ length: 12 }, (_, index) => index + 19).map(e => `/anh_nho/${e}.jpg`);
    const isPlayAudio = ref(false)

    const openYoutube = () => {
      console.log('test')
      // window.open('https://www.youtube.com/watch?v=wDC8AYjdhZc');
    }

    setTimeout(() => {
      isPlayAudio.value = true
    }, 1000)

    return {
      curImg, images, openYoutube, time, isPlayAudio, images2
    }
  }
})
</script>

<style scoped>
.align-center {
  text-align: center;
}
.max-width-content {
  max-width: 1200px;
  margin: 0 auto;
}
.bg-txt-content {
  background-color: #f8f5f0;
}
.high-font {
  font-size: 40px;
}
.white--text {
  color: white;
}

.navbar-brand {
  font-family: "Great Vibes", cursive;
  font-size: 45px;
  color: #9ec2bb;
  text-transform: capitalize;
  letter-spacing: 4px;
}
.max-width-600 {
  max-width: 600px;
  margin: 0 auto;
}

.our-video {
  //max-width: 1500px;
  margin: 0 auto;
  background-image: url("https://png.pngtree.com/background/20210709/original/pngtree-simple-green-leaf-background-picture-picture-image_944676.jpg");
  height: 400px;
  background-position: center; /* Center the image */
  background-size: cover;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  .center-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.icon-btn:hover {
  cursor: pointer;
}

.custom-card {
  border: 2px solid #9ec2bb; /* Set the border color to red (#ff0000) */
  width: 350px;
  border-radius: 15px;
  margin: 0 auto;
}

.thanks {
  width: 100%;
  height: 500px;
}
.img-thanks {
  width: 300px;
  height: 300px;
  background-image: url("https://bongsinhnhat.vn/wp-content/uploads/2019/10/pngtree-hand-painted-western-style-pink-wedding-dress-wedding-png-image_435805.jpg");
  background-size: contain;
  border-radius: 100px;
  margin: 0 auto;
}
</style>