<template>
  <div>
    <change-header></change-header>
    <change-personal-info></change-personal-info>
  </div>
</template>

<script>
import ChangeHeader from '@/pages/buyer/change/components/Header'
import ChangePersonalInfo from '@/pages/buyer/change/components/personalInfo'
export default {
  name: 'BuyerInfoChange',
  components: {
    ChangeHeader,
    ChangePersonalInfo
  }
}
</script>

<style scoped>

</style>
