# 6.12 SNMP 的基本元素

**简单网络管理协议 SNMP（Simple Network Management Protocol）** 是广泛应用于 TCP/IP 网络的网络管理标准协议，支持通过网络管理系统，以监测连接到网络上的设备是否有任何引起管理上关注的情况。

SNMP 的基本元素包括：

1. **管理站（Manager）**：网络管理系统，负责发起 SNMP 请求，收集和处理来自代理的信息。
2. **代理（Agent）**：运行在被管理设备上的软件，负责响应管理站的请求，提供设备的状态和性能数据。
3. **管理信息库（MIB）**：定义了可以管理的对象及其属性的数据库，使用 OID（对象标识符）来唯一标识每个对象。
4. **协议（Protocol）**：SNMP 使用的通信协议，定义了管理站和代理之间的消息格式和交换方式。
5. **消息类型**：SNMP 定义了多种消息类型，包括：
    - **GET**：请求代理返回指定对象的值。
    - **SET**：请求代理修改指定对象的值。
    - **GETNEXT**：获取下一个对象的值，通常用于遍历 MIB。
    - **TRAP**：代理主动向管理站发送的告警消息，用于报告事件或状态变化。

这些基本元素共同工作，实现了网络设备的监控和管理。