export const throttle =function(func,delay){
  let timer
  return function(){
      if(!timer){
          timer=setTimeout(() => {
              func.apply(this,arguments)
              // 执行完毕，定时器要清零，否则监听事件只会执行一次
              timer=null
          }, delay);
      }
  }
}
export const 