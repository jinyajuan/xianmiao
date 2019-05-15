<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStart: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      // console.log(e.target.innerText)
    },
    handleTouchStart () {
      this.touchStart = true
    },
    handleTouchMove (e) {
      if (this.touchStart) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 1.如果确定触发事件，touchStart改为true
          // 2.获取当前状态下A的位置（startY）
          // 3.获取移动位置下手指距离顶部的位置，减去导航栏和搜索栏（touchY）
          // 4.touchY - startY为当前的手指距离A的长度
          // 5./20，是除以每个元素的高度，获取到现在是第几个，即下标（index）
          // 6.向外触发事件，自动跳转到对应的元素上面去
          const touchY = e.touches[0].clientY - 83
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
            // console.log(index)
          }
        }, 20)
      }
    },
    handleTouchEnd () {
      this.touchStart = false
    }
  }
}
</script>

<!--<style scoped>-->
<style scoped>
  .list{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 0;
    top: 1.58rem;
    bottom: 0;
    /*background-color: red;*/
    width: .4rem;
  }
  .item{
    line-height: .4rem;
    color: red;
  }
</style>
