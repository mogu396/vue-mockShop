import {
  CHANGE_CART_COUNT,
  ADD_ITEM_TO_CARTLIST,
  ADD_ITEM_COUNT,
  SUB_ITEM_COUNT,
  ADD_CASH,
  SUB_CASH,
  SET_CASH,
  SET_CHOSEN,
  SET_ISCLICK_FALSE
} from './type'
const state = {
  // 购物车总数
  count: 0,
  cartList: [],
  // 购物车金额
  cash: 0
}


const mutations = {
  [CHANGE_CART_COUNT](state, count) {
    state.count += count
  },


  [ADD_ITEM_TO_CARTLIST](state, item) {
    let oldItem
    for (let temp of state.cartList) {
      if (temp.id === item.id && temp.color === item.color && temp.size === item.size) {
        oldItem = temp
      }
    }
    if (oldItem) {
      oldItem.itemCount += 1
      // console.log(oldItem);
      // console.log(item);
    } else {
      item.itemCount = 1
      state.cartList.push(item)
    }
    // console.log(state);
    state.count++
    // console.log(item);
  },

  [ADD_ITEM_COUNT](state, item) {
    // debugger
    const cartItemIndex = state.cartList.indexOf(item)
    // console.log(cartItemIndex);
    state.cartList[cartItemIndex].itemCount++
    state.count++
    // console.log(state.cartList[cartItemIndex]);
  },
  [SUB_ITEM_COUNT](state, item) {
    const cartItemIndex = state.cartList.indexOf(item)
    console.log(cartItemIndex);
    state.cartList[cartItemIndex].itemCount--
    state.count--
    if (state.cartList[cartItemIndex].itemCount <= 0) {
      state.cartList.splice(cartItemIndex, 1)
    }
  },
  [ADD_CASH](state, cash) {
    state.cash += cash
  },

  [SUB_CASH](state, cash) {
    state.cash -= cash
  },

  [SET_CASH](state) {
    state.cash = 0
  },
  [SET_CHOSEN](state, info) {
    state.cartList[info.itemIndex].isClick = info.isClick
    // console.log(state.cartList[info.itemIndex]);
  },
  [SET_ISCLICK_FALSE](state) {
    state.cartList.forEach((item) => {
      item.isClick = false
    })

  }
}
const getters = {
  getCartListCash(state) {
    let cartListCash = 0
    state.cartList.forEach((item) => {
      if (item.isClick === true) {
        console.log(item);
        console.log(item.price, 'price');
        console.log(item.itemCount, 'count');
        console.log(item.price + item.itemCount, 'plus');
        console.log(Number(item.price) * Number(item.itemCount));
        cartListCash += Number(item.price) * Number(item.itemCount)

      }
    })

    console.log(cartListCash);
    // console.log(cartListCash);
    return cartListCash
  }
}
// const actions={
//   addItemCount(context,item){
//     // 查找购物车中有没有这个商品
//     let oldItem=context.state.cartList.find(item=>item.id)
//     if(oldItem){
//       context.commit('ADD_ITEM_COUNT',oldItem)
//     }else{
//       item.itemCount=1
//       context.commit('ADD_ITEM_TO_CARTLIST',item)
//     }
//   }
// }



export default {
  state,
  mutations,
  getters
  // actions
}
