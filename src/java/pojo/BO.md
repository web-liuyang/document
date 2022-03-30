# BO

BO（ Business Object）业务对象

业务对象(Business Object，BO)是对数据进行检索和处理的组件。

主要作用是把业务逻辑封装为一个对象,这个对象可以包括一个或多个其它的对象。形象描述为一个对象的形为和动作，当然也有涉及到基它对象的一些形为和动作。

一般用在包含业务功能模块 的具体实例上，比如我们写了一个 Controller、一个 Service、一个 DAO、一个工具类等等这一系列实例组合后能实现一些功能，这些一系列实例组合为一个组件，这个组件就是 BO。

简单解释： 一个处理业务逻辑的工具对象，可视为 BO

```java
  //  BO层
  public class OrderBO {
    // 创建订单
    public Object createOrder(){};
    // 移除订单
    public Object removeOrder(){};
    // 查找订单
    public Object findOrder(){};
    // 移除订单
    public Object updateOrder(){};
  }
```
