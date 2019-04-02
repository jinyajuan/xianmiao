<template>
  <div>
    <me-header></me-header>
    <me-login-entry></me-login-entry>
    <me-items @goSwitch="handleGoSwitch"></me-items>
    <me-switch :switchPanel="switchPanel" @closeSwitchPanel="handleCloseSwitchPanel"></me-switch>
    <home-footer></home-footer>
  </div>
</template>

<script>
import MeHeader from '@/pages/buyer/me/components/Header'
import MeLoginEntry from '@/pages/buyer/me/components/LoginEntry'
import MeItems from '@/pages/buyer/me/components/Items'
import HomeFooter from '@/pages/buyer/home/components/Footer'
import MeSwitch from '@/pages/buyer/me/components/Switch'
export default {
  name: 'BuyerMe',
  components: {
    MeHeader,
    MeLoginEntry,
    MeItems,
    HomeFooter,
    MeSwitch
  },
  data () {
    return {
      switchPanel: true
    }
  },
  methods: {
    handleGoSwitch () {
      this.switchPanel = false
    },
    handleCloseSwitchPanel () {
      this.switchPanel = true
    }
  }
}
</script>

<style scoped>

</style>
