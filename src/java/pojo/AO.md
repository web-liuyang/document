# AO

AO（Application Object）应用对象

AO 是一个较为笼统的概念，因为太过于常见而并没有刻意的去描绘它的细节。

举一个很简单的栗子：控制层（Controller） 在 业务逻辑层（Service） 查询一条或多条数据，这个数据的传输过程的运载就是 AO 完成。在正常的业务逻辑中一般都有很多种类型的数据，例如 整形、字符型、集合、类 等，我们把它统称为 AO。

在 控制层（Controller）与 业务逻辑层（Service）层之间抽象的复用对象模型，有时候极为贴近展示层，复用度不高。

简单解释： 控制层 与 业务逻辑层 两层之间的参数传递，可视为 AO

```java
  // 控制层
  public class OrderController {
    public void createOrder(){
      orderService.createOrder(OrderAO orderAO)
    }
  }

  // 业务逻辑层
  public class OrderService {
    public Object createOrder(OrderAO orderAO){}
  }

  // AO层
  public class OrderAO {
    private String id;
    private String orderId;
    // ...
  }
```
