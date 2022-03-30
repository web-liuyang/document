# DTO

DTO（Data Transfer Object）数据传输对象

数据传输对象 DTO (Data Transfer Object)，是一种设计模式之间传输数据的软件应用系统。

数据传输目标往往是数据访问对象从数据库中检索数据。

数据传输对象与数据交互对象或数据访问对象之间的差异是一个以不具有任何行为除了存储和检索的数据（访问和存取器）。

简单理解: 前端往后端传输数据的对象。可视为 DTO

```java
  // 控制层
  public class OrderController {
    public void createOrder(OrderDTO orderDTO){}
  }

  // DTO层
  public class OrderDTO {
    private String id;
    private String orderId;
    // ...
  }
```
