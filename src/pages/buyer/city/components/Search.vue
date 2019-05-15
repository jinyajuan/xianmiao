<template>
  <div>
    <div class="search">
      <input type="text" class="search-input" placeholder="请输入汉字或者拼音" v-model="keyword">
    </div>
    <div class="search-content" ref="search" v-if="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of this.list" :key="item.id">{{item.name}}</li>
        <li class="search-item has-no border-bottom" v-if="this.list.length === 0">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      timer: null,
      list: []
    }
  },
  watch: {
    keyword () {
      if (this.keyword === '') {
        this.list = []
        return this.list
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style scoped>
  .search{
    position: fixed;
    z-index: 99;
    top: .86rem;
    left: 0;
    right: 0;
    height: .6rem;
    padding: .1rem;
    background-color: red;
  }
  .search-input{
    box-sizing: border-box;
    width: 100%;
    height: .52rem;
    line-height: .62rem;
    text-align: center;
    border-radius: .06rem;
    color: #666;
    padding: 0 .1rem;
  }
  .search-content {
    z-index: 1;
    position: absolute;
    top: 1.68rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #cccccc;
  }
  .search-item{
    line-height: .62rem;
    padding-left: .2rem;
    color: #666;
    background-color: #ffffff;
  }
  .has-no{
    text-align: center;
  }
</style>
