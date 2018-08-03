import {XUser} from './models/user.js'
import {XShop} from './models/shop.js'
import Vuex from 'vuex'
import Vue from 'vue'

//config vuex 
Vue.use(Vuex)

export const store = new Vuex.Store({
	modules:{
		user:XUser,
		shop:XShop,
	}
})

export {mutaionNames}