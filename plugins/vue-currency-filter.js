import Vue from 'vue'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.use(VueCurrencyFilter, {
  symbol: 'руб.',
  thousandsSeparator: ' ',
  fractionCount: 0,
  fractionSeparator: ',',
  symbolPosition: 'back',
  symbolSpacing: true,
  avoidEmptyDecimals: undefined
})
