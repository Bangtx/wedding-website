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
        span Nguyễn Hồng Đăng &nbsp;
        v-icon(color="#f56c6c" ) mdi-cards-heart
        span &nbsp; Mai Thục Anh

      div.hidden-md-and-up(style="max-width: 400px; margin: 0 auto")
        v-img.align-center(src="/img/birth.png"  max-width="150" style="margin: 0 auto")
        v-divider
        h1.align-center.navbar-brand Welcome to our wedding
        v-divider
      h2.align-center.pt-5.hidden-md-and-up(style="font-family: 'Great Vibes', cursive; font-size: 20px; color: #f56c6c")
        span Nguyễn Hồng Đăng &nbsp;
        v-icon(color="#f56c6c" ) mdi-cards-heart
        span &nbsp; Mai Thục Anh
      //h2.align-center Hai Hau - Nam Dinh

      .max-width-content.pt-16
        v-row
          v-col.bg-txt-content.pa-0.max-width-600(cols="12" md="6")
            .pa-10
              h1.hidden-md-and-up(style="font-family: 'Great Vibes', cursive; font-size: 40px; color: #f56c6c") Nguyễn Hồng Đăng
              h1.hidden-sm-and-down(style="font-family: 'Great Vibes', cursive; font-size: 45px; color: #f56c6c") Nguyễn Hồng Đăng
              .ml-3
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
              ul.pl-8.pt-3
                li Date of birth: 19/03/1998
                //li Company: Otani U.P
                li Contact: 097 622 4057
          v-col.pa-0.max-width-600(cols="12" md="6")
            v-img(src="/img/content_1.png")
          v-col.pa-0.max-width-600.hidden-sm-and-down(cols="12" md="6")
            v-img(src="/img/content_2.png")
          v-col.bg-txt-content.pa-0.max-width-600(cols="12" md="6")
            .pa-10
              h1.hidden-md-and-up(style="font-family: 'Great Vibes', cursive; font-size: 40px; color: #f56c6c") Mai Thục Anh
              h1.hidden-sm-and-down(style="font-family: 'Great Vibes', cursive; font-size: 45px; color: #f56c6c") Mai Thục Anh
              .ml-3
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
                v-icon(color="#9ec2bb" ) mdi-cards-heart
              ul.pl-8.pt-3
                li Date of birth: 05/06/1998
                //li Company: Phuong Minh JSC
                li Contact: 035 562 2020
          v-col.pa-0.max-width-600.hidden-md-and-up(cols="12" md="6")
            v-img(src="/img/content_2.png")
    div(style="height: 100px")

    v-img.hidden-sm-and-down(src="/img/content_3.png" width="100%" )
      count-down
    v-img.hidden-md-and-up(src="/img/content_5.png" width="100%" )
      count-down

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
          span(style="color: #9ec2bb").pl-3.pt-1 Tổ dân phố số 2, Yên Định, Hải Hậu, Nam Định
          br
          v-icon(color="#9ec2bb" size="small") mdi-watch
          span(style="color: #9ec2bb").pl-3.pt-1 1:20PM - 26/10/2024
          //p when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

        v-col(cols="4" md="2")
          v-img(src="/img/tiec_nu.png")
        v-col(cols="8" md="4")
          h3.hidden-md-and-up TIỆC CƯỚI NHÀ NỮ
          h3.pt-10.hidden-sm-and-down TIỆC CƯỚI NHÀ NỮ
          v-icon(color="#9ec2bb" ) mdi-google-maps
          span(style="color: #9ec2bb").pl-3.pt-1 Tổ dân phố số 2, Yên Định, Hải Hậu, Nam Định
          br
          v-icon(color="#9ec2bb" size="small") mdi-watch
          span(style="color: #9ec2bb").pl-3.pt-1 10:00AM - 27/10/2024

      v-row
        v-col(cols="4" md="2")
          v-img(src="/img/tan_hon.png")
        v-col(cols="8" md="4")
          h3.hidden-md-and-up LỄ TÂN HÔN
          h3.pt-10.hidden-sm-and-down LỄ TÂN HÔN
          v-icon(color="#9ec2bb" size="small") mdi-google-maps
          span(style="color: #9ec2bb").pl-3.pt-1 Xóm Quang Bắc, Hải Quang, Hải Hậu, Nam Định
          br
          v-icon(color="#9ec2bb" size="small") mdi-watch
          span(style="color: #9ec2bb").pl-3.pt-1 2:00PM - 27/10/2024
          //p when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

        v-col(cols="4" md="2")
          v-img(src="/img/tic_nam.png")
        v-col(cols="8" md="4")
          h3.hidden-md-and-up TIỆC CƯỚI NHÀ NAM
          h3.pt-10.hidden-sm-and-down TIỆC CƯỚI NHÀ NAM
          v-icon(color="#9ec2bb" ) mdi-google-maps
          span(style="color: #9ec2bb").pl-3.pt-1 Xóm Quang Bắc, Hải Quang, Hải Hậu, Nam Định
          br
          v-icon(color="#9ec2bb" size="small") mdi-watch
          span(style="color: #9ec2bb").pl-3.pt-1 10:00AM - 27/10/2024

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
                p.align-center.pt-4(style="font-size: 20px") Ngân hàng: Techcombank
                p.align-center.pt-4(style="font-size: 20px") Tên tài khoản: Nguyễn Hồng Đăng
                p.align-center.pt-4(style="font-size: 20px") Số tài khoản: 19037063295010
        v-col(cols="12" md="6")
          v-row
            v-col(cols="12" md="8")
              div.custom-card
                h1.align-center(style="font-size: 25px; color: red")
                  i Mừng cô dâu
                v-img.mt-4(src="/qr/co_dau.png" max-width="200" style="margin: 0 auto")
                p.align-center.pt-4(style="font-size: 20px") Ngân hàng: Techcombank
                p.align-center.pt-4(style="font-size: 20px") Tên tài khoản: Mai Thục Anh
                p.align-center.pt-4(style="font-size: 20px") Số tài khoản: 19037023413010
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
      title: 'Đăng - Thục Anh',
      meta: [
        {name: 'description', content: 'Đăng - Thục Anh'}
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
    const images = Array.from({ length: 24 }, (_, index) => index + 1).map(e => `/anh_nho/${e}.jpg`);
    const targetDate = new Date('2024-01-21T14:00:00');
    const isPlayAudio = ref(false)

    const updateCountdown = () => {
      // Get the current date and time
      const currentDate = new Date();

      // Calculate the difference in milliseconds
      const difference = targetDate - currentDate;

      // Calculate days, hours, minutes, and seconds
      time.value.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      time.value.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      time.value.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      time.value. seconds = Math.floor((difference % (1000 * 60)) / 1000);
    }

    const openYoutube = () => {
      window.open('https://www.youtube.com/watch?v=sKdpM_aNeXE&ab_channel=L%E1%BA%ADptr%C3%ACnhIoT');
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    // Initial update
    updateCountdown();

    setTimeout(() => {
      isPlayAudio.value = true
    }, 1000)

    return {
      curImg, images, openYoutube, time, isPlayAudio
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