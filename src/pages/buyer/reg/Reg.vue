<template>
  <div>
    <reg-header></reg-header>
    <reg-center></reg-center>
  </div>
</template>

<script>
import RegHeader from '@/pages/buyer/reg/components/Header'
import RegCenter from '@/pages/buyer/reg/components/Center'
export default {
  name: 'Reg',
  components: {
    RegHeader,
    RegCenter
  }
}
</script>

<style scoped>

</style>
