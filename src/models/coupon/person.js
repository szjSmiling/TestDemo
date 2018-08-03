
export default class Person {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.num = 0;
    this.bindName = this.bindName.bind(this);
  }

  strToUpperCase(){
    return "Hi,"+this.x.substring(0,1).toUpperCase()+this.x.substring(1)+","+this.y.toLowerCase();
  }

  getName() {
    priName();
  }

  bindName() {
    return this.name();
  }

  name(){
    this.num ++ ;
    if(this.num == 1) console.log("我是王二麻子 1");
    if(this.num == 2) console.log("我是王二麻子 2");
  }

  static staticFn(){
    console.log("Person类的静态方法");
  }
}

function priName(){// 移除模块的私有方法,这样就对外不可见了.
  console.log('私有方法测试');
}