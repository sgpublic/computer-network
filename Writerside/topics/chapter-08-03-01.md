# 8.3.1 无线局域网 WLAN

**无线局域网 WLAN（Wireless Local Area Network）** 可分为两大类，即有基础设施和无基础设施。

由 IEEE 802.11 所定义的、有基础设施的无线局域网，通常又称为 Wi-Fi。

无线局域网的中心称为**接入点 AP（Access Point）**。

每个 AP 都应分配一个不超过 32 字节的**服务集标识符 SSID（Service Set IDentifer）**。（就是 Wi-Fi 名字）

同有线网卡一样，每个 AP 在出厂时就分配了一个唯一的 MAC 地址，又称为**基本服务集标识符 BSSID（Basic Service Set IDentifer）**。

Wi-Fi 的 MAC 层使用 CSMA/CA 协议。

相关词条：

+ **Wi-Fi 频段**

  Wi-Fi 频段包括 2.4GHz、5GHz、6GHz 等。

  2.4GHz 能提供更广的覆盖范围，但容易被蓝牙等干扰；5GHz 能提供相比 2.4GHz 更高的传输速度，但覆盖范围有一定减小；6GHz 则在 5GHz 上更进一步，提供了相比 5GHz 更高的传输速度，但覆盖范围进一步减小。

  同一个无线路由器不同频段的信号通常视为不同的 AP，但它们通常视为同一个节点。例如：同一个路由器 2.4GHz 信号和 5GHz 信号通常视为两个不同的 AP，但它们通常视为同一个节点。

  _注意：这些频段通常简称为 2.4G、5G、6G，但这与移动通信的 5G、6G 不是一个概念。_
+ **无线漫游**

  指设备在移动到两个 AP 覆盖范围的临界区域时，与新的 AP 进行关联，并与旧的 AP 断开关联，并且在此过程中保持不间断的网络连接。

  无线漫游标准通常包括以下几个：

    + 802.11r（快速漫游）：允许设备在切换 AP 时快速建立连接，减少连接延迟。
    + 802.11k（无线网络测量）：提供了网络质量和信息交换的机制，使设备能更好的了解周围的 AP，从而优化漫游选择。
    + 802.11v（无线局域网管理）：允许 AP 和设备之间进行管理信息的交换，帮助设备决定合适和如何进行漫游。

  也就是说，无线漫游：

    + 可以是主动的，即设备主动从旧的 AP 切换到新的 AP，当无线路由器支持 802.11r 和 802.11k 时即可实现。
    + 也可以是被动的，即由 AP 主动通知设备切换到另一个 AP，当无线路由器支持上述全部三个标准时即可实现。

+ **网状网络 Mesh**

  指通过多个互联的节点形成一个统一的网络，当需要在不同的节点实现无线漫游时，则需要将不同的节点通过 Mesh 连接起来。