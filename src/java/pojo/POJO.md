# POJO

POJO（ Plain Ordinary Java Object）纯普通 Java 对象

总的来说 POJO 包含 DO、DTO、BO、VO，这些本质上都是一个简单的 java 对象，实际就是普通 JavaBeans，是为了避免和 EJB 混淆所创造的简称

使用 POJO 名称是为了避免和 EJB 混淆起来, 而且简称比较直接。

其中有一些属性及其 getter setter 方法的类,没有业务逻辑，有时可以作为 VO(value -object)或 dto(Data Transform Object)来使用。

当然，这里特意说明纯普通 Java 对象，如果你有一个简单的运算属性也是可以的,但不允许有业务方法,也不能携带有 connection 之类的方法。
