<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from '@/pages/buyer/city/components/Header'
import CitySearch from '@/pages/buyer/city/components/Search'
import CityList from '@/pages/buyer/city/components/List'
import CityAlphabet from '@/pages/buyer/city/components/Alphabet'
export default {
  name: 'BuyerCity',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('http://localhost:8080/static/mock/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
      console.log(res)
    },
    handleLetterChange (letter) {
      this.letter = letter
      console.log(letter)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped>
</style>
