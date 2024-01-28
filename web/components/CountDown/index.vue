<template lang="pug">
  v-container.fill-height
    v-row.align-center.white--text.navbar-brand.pt-16
      v-col(cols="0" md="2")
      v-col(cols="12" md="8")
        h3.high-font.pl-10.hidden-sm-and-down(style="color: rgb(191 116 235); font-size: 30px") We are waiting for.....
        h3.high-font.pl-10.hidden-md-and-up(style="color: rgb(191 116 235); font-size: 20px") We are waiting for.....
        h2.high-font.pl-14.pt-5.hidden-sm-and-down(style="color: rgb(191 116 235); font-size: 55px") The wedding
        h2.high-font.pl-14.pt-5.hidden-md-and-up(style="color: rgb(191 116 235); font-size: 30px") The wedding
      v-col(cols="0" md="2")

      //v-row.align-center.white--text.navbar-brand.margin-30
      //v-col(cols="4")
      v-col(cols="0" md="2")
      v-col(cols="3" md="2")
        v-card
          v-card-text.bg-time(style="height: 70px")
            h1 {{time.days}}
            h2 days
      v-col(cols="3" md="2")
        v-card
          v-card-text.bg-time(style="height: 70px")
            h1 {{time.hours}}
            h2 hours
      v-col(cols="3" md="2")
        v-card
          v-card-text.bg-time(style="height: 70px")
            h1 {{time.minutes}}
            h2 mins
      v-col(cols="3" md="2")
        v-card
          v-card-text.bg-time(style="height: 70px")
            h1 {{time.seconds}}
            h2.hidden-sm-and-down seconds
            h2.hidden-md-and-up secs
      v-col(cols="0" md="2")
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  setup() {
    const time = ref({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })

    const targetDate = new Date('2024-02-18T14:00:00');

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

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    // Initial update
    updateCountdown();

    return {
      time
    }
  }
})
</script>

<style scoped>
.align-center {
  text-align: center;
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

.bg-time {
  background-color: #e8e0c8;
}

</style>