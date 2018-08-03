import * as types from '../type/type.js';
export const XShop = {
	state:{
		coupon:null,
		silver:null,
		gold:null
	},
	getters:{// es6 函数如果是这样,则默认是return state.coupon
    coupon:state=>state.coupon,
		silver:state=>state.silver,
		gold:state=>state.gold
	},
	mutations:{
		[types.GET_COUPON](state,coupon){
			state.coupon = coupon;
		},
		[types.GET_SILVER](state,silver){
			state.silver = silver;
		},
		[types.GET_GOLD](state,gold){
			state.gold = gold;
		}
	}
}