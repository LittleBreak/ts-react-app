class Foo {
  constructor(msg) {
    // 如果Foo的静态属性singleton已存在，代表已经实例化，直接返回实例化的对象
    if (Foo.singleton) {
      // 返回的是第一次实例化的对象引用
      return Foo.singleton;
    }

    this.msg = msg;
    // 第一次实例化对象指向类的静态属性singleton
    Foo.singleton = this;
    // 返回第一次实例化的对象
    return Foo.singleton;
  }
}

// 闭包，立即执行函数
let Foo1 = (() => {
  let instance;
  return function (objParams) {
    if (!instance) {
      instance = new Object(objParams);
    }
    return instance;
  };
})();
export default Foo;
