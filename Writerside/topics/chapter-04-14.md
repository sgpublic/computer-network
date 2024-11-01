# 4.14 路由器的优缺点

通常的，路由器不会转发**本地回环地址**（例如 127.0.0.1）、**本地网络地址**（例如形如 192.168.x.x 的仅在当前网络中有效的地址）、**广播包**（例如 255.255.255.255）。

优点：

1. **网络连接**：路由器可以连接多个网络，支持不同的网络协议，并根据 IP 地址进行智能数据转发，隔离了冲突域。
2. **安全性**：路由器能提供防火墙、网络地址转换 NAT 等安全功能。
3. **流量管理**：路由器能提供 QoS 等功能，优化网络性能。

缺点：

1. **成本**：高性能的路由器往往价格高昂。
2. **配置复杂**：路由器的设置和管理需要一定的技术知识。
3. **延迟**：存储转发技术会引入延迟。

## 4.14.1 地址解析协议 ARP（P133 4.2.4）

**地址解析协议 ARP（Address Resolve Protocol）** 用于在局域网中将 IPv4 地址解析为 MAC 地址。

当局域网中一台主机需要获取另一个 IPv4 地址的主机的 MAC 地址时：

+ 该主机广播 ARP 请求，即将请求数据包 MAC 帧目的地址置为 `FF:FF:FF:FF:FF:FF`，意图为“请问哪一台主机的 IPv4 地址是 xxx.xxx.xxx.xxx，请告诉我你的 MAC 地址”。
+ 当网络内 IPv4 地址匹配的主机收到 ARP 请求后，则直接向源 MAC 地址发送 ARP 响应。

注意：

+ 路由器不转发 ARP 协议数据包。
+ 交换机会将 ARP 请求发送给所有端口，但仅将 ARP 响应发送给对应端口。

## 4.14.2 默认网关（Gateway）

当设备接入网络时，除了要获取或设置 IP 地址及子网掩码，通常还需要获取或设置默认网关地址，当与目的 IP 地址不在同一个网络中时，则将数据报转发给默认网关。

当主机需要发送一个 IP 数据报时，首先使用子网掩码计算目的 IP 是否在同一个网络：若在同一个网络，则使用 ARP 直接解析目的 IP 地址的 MAC 地址；若不在同一个网络，则使用 ARP 解析默认网关的 MAC 地址。最后向解析结果的 MAC 地址发送数据报。
