<template lang="pug">
  div
    //.header-top.main-color

    v-container
      v-row.max-width
        v-col(cols="6" md="3")
          span.navbar-brand B
          v-icon(color="#9ec2bb" ) mdi-cards-heart
          span.navbar-brand A
        v-col.pc(cols="6" md="9")
          ul.pt-2.hidden-sm-and-down
            li Video
            li Gallery
            li Events
            li Times
            li Info
            li Home
          v-icon.hidden-md-and-up.pt-2(style="float: right" @click="onShowCategory") mdi-menu
      .center.hidden-md-and-up
        v-expand-transition
          v-card(
            v-show="isShowCategoryInMobile"
            class="mx-auto"
          )
            ul
              li.pa-2 Video
              li.pa-2 Gallery
              li.pa-2 Events
              li.pa-2 Times
              li.pa-2 Info
              li.pa-2 Home
        //v-col(cols="2")
        //  ul.pt-2
        //    li
        //      v-icon mdi-language-r
        //    li
        //      v-icon mdi-language-php

    //v-carousel(cycle='' hide-delimiter-background='' show-arrows='hover')
    //  v-carousel-item(src="/img/banner.jpg")
    //v-img.banner(src="/img/banner.jpg" height="100%" )
    //  invitation.hidden-sm-and-down
    //invitation.hidden-md-and-up
    v-img.banner.hidden-sm-and-down(src="/img/banner.jpg" width="100%" )
      invitation
    v-img.banner.hidden-sm.hidden-md-and-up(src="/img/banner_3.jpg" width="100%" )
      invitation
    v-img.banner.hidden-xs.hidden-md-and-up(src="/img/banner_2.jpg" width="100%" )
      invitation

</template>

<script>
import Invitation from '../Invitation'

const HeaderBar = {
  data() {
    return {
      isShowCategoryInMobile: false
    }
  },
  methods: {
    onShowCategory() {
      this.isShowCategoryInMobile = !this.isShowCategoryInMobile
    },
  }
}

export default HeaderBar
</script>

<style scoped>
/* Trong file CSS/SCSS của bạn */
.center {
  margin: 0 auto;
  text-align: center;
}
.max-width {
  max-width: 1300px;
  margin: 0 auto;
}
.main-color {
  background-color: #e8ca74;
}
.header-top {
  height: 30px;
  width: 100%;
}
.margin-bottom-1 {
  margin-bottom: 1px;
}

.pc ul li {
  list-style: none;
  float: right;
  padding-left: 2rem;
}
.navbar-brand {
  font-family: "Great Vibes", cursive;
  font-size: 35px;
  color: #9ec2bb;
}

@media only screen and (max-width: 1378px) {
  .banner {
    height: 450px;
  }
}

</style>