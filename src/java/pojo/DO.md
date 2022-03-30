# DO

DO （Domain Object）领域对象

领域对象 DO 是从现实世界中抽象出来的有形或无形的业务实体。

在与数据有关的操作中数据存在数据库使用 DAO 访问被取出来时，一般会将这些数据规范化的定义成类，而这个类就是 DO，用来接收数据库对应的实体，它是一种抽象化的数据状态，介于数据库与业务逻辑之间。

一般在 业务逻辑层（Service） 对 数据库（SQL） 的 访问时 接收数据 使用。

另外：DO 与 Entity 概念上浅显的相同，他们在实际应用中是一个东西。稍微的不同点就是 DO 是与数据库存在着某种映射关系的 Entity，总的来说 DO 是 Entity 的一种。

xxxDO，xxx 即为数据表名

简单理解: 数据库中的所有字段，所组成的实体类。可视为 DO

```java
  // DO层
  public class OrderDO {
    private String id;
    private String orderId;
    // ...
  }
```
