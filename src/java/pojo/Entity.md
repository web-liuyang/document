# Entity

Entity（应用程序域中的一个概念）实体

ADO .NET Entity Framework 应用程序域中的一个概念，数据类型在该域中定义。

在计算机网络中，实体这一较为抽象的名词表示任何可能发送或接受信息的硬件或软件进程。在许多情况下，实体就是一个特定的软件模块。

说白了 Entity 是一个未被持久化的对象，它是一个类，从现实抽象到代码的一个类。

简单理解: 排除 DO 层中不需要的字段后，所组成的实体类。可视为 Entity

```java
  // Entity层
  public class OrderEntity {
    private String id;
    // ...
  }
```
