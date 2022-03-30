# DAO

DAO(Data Access Object) 数据访问对象

是一个数据访问接口，主要是与数据库交互。

简单理解: mapper 接口

```java
  // DAO层/mapper层
  public interface OrderMapper {
    createOrder(OrderAO orderAO)
  }
```
