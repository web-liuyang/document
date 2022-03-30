# VO

VO（View Object）视图模型

VO 是显示视图模型，视图对象，用于展示层，它的作用是把某个指定页面（或组件）的所有数据封装起来。

如果是一个 DTO 对应一个 VO，则 DTO=VO;但是如果一个 DTO 对应多个 VO，则展示层需要把 VO 转换为服务层对应方法所要求的 DTO，传送给服务层。从而达到服务层与展示层解耦的效果。

一般用在业务逻辑层（Service） 对 前端（Web） 的 视图模型效果控制的展示上，说白了就是后台向前端传输数据。

xxxVO，xxx 一般为网页名称。

简单理解: 后端返回给前端数据对象，可视为 VO 层

```java
  // 控制层
  public class OrderController {
    public OrderVO createOrder(){
      return new OrderVO();
    }
  }

  // VO层
  public class OrderVO {
    private String id;
    private String orderId;
    // ...
  }
```
