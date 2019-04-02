<template>
  <div>
    <detail-header @goBack="handleGoBack"></detail-header>
    <!--<detail-banner :imgSrc="detailGoods[0].imgSrc"></detail-banner>-->
    <detail-banner :detailGoods="detailGoods"></detail-banner>
    <detail-notice :detailGoods="detailGoods"></detail-notice>
    <detail-score :detailGoods="detailGoods"></detail-score>
    <detail-price :detailGoods="detailGoods"></detail-price>
    <detail-desc :detailGoods="detailGoods"></detail-desc>
    <detail-footer></detail-footer>
  </div>
</template>

<script>
import DetailHeader from '@/pages/buyer/detail/components/Header'
import DetailBanner from '@/pages/buyer/detail/components/Banner'
import DetailNotice from '@/pages/buyer/detail/components/Notice'
import DetailScore from '@/pages/buyer/detail/components/Score'
import DetailPrice from '@/pages/buyer/detail/components/Price'
import DetailDesc from '@/pages/buyer/detail/components/Desc'
import DetailFooter from '@/pages/buyer/detail/components/Footer'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner,
    DetailNotice,
    DetailScore,
    DetailPrice,
    DetailDesc,
    DetailFooter
  },
  data () {
    return {
      detailGoods: [
        {
          id: '0001',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g',
          imgSrc: 'https://img12.360buyimg.com/n7/jfs/t24637/296/923948809/749862/6eb9a861/5b82b3c0N779a24cc.png',
          price: 58.1,
          sale: 12212,
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '注意：02.01~02.28 [08:00~22:00]内前来购买，可享受买一赠一活动的；数量有限，售完为止。',
          score: 4.9
        }
      ]
    }
  },
  methods: {
    // 1.后退一步
    handleGoBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
