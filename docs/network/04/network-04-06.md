# 4.6 IP 地址的分类及其表示

本节中“IP 地址”均指**IPv4 地址**。

## 4.6.1 IP 地址机器表示方法（P123 4.2.2）

IP 地址现由**互联网名字和数字分配机构 ICANN（Internet Corporation for Assigned Names and Numbers）** 进行分配。

IP 地址使用**点分十进制记法（Dotted Decimal Notation）** 书写。例如：$128.11.3.31$。

IP 地址在整个互联网上是唯一的。

IP 地址由两部分组成：网络号、主机号，即：
$$
IP 地址 ::= \{<网络号,n位>,<主机号,(32-n)位>\}
$$

## 4.6.2 分类的 IP 地址（P123 4.2.2）

早期互联网采用的是分类的 IP 地址。即：

+ A 类地址：网络号占 **8 位**，且规定第一位为 0。为**单播地址**。
+ B 类地址：网络号占 **16 位**，且规定前两位为 10。为**单播地址**。
+ C 类地址：网络号占 **24 位**，且规定前三位为 110。为**单播地址**。
+ D 类地址：规定前四位为 1110。为**多播地址**。
+ E 类地址：规定前四位为 1111。保留以后使用。

分辨地址属于哪一类时，只需要从开头开始数有多少个连续的 1，若有 0 个连续的 1 则为 A 类地址，1 个则为 B 类，4 个及以上则为 E 类。

主机号全为 0（即 0）的地址称为**网络地址**，主机号全为 1（即 255）的地址称为**广播地址**，网络地址和广播地址**不可用于分配给主机或路由器端口**。

IP 的分类不受其用途影响，例如 $255.255.255.255$ 虽然用于广播，不可用于分配给主机或路由器端口，但其属于 E 类地址。

当一个组织申请 IP 时，ICANN 会根据其规模分配一个完整的网络号。例如，假设一个拥有 200 台计算机的公司向 ICANN 申请 IP 地址，ICANN 会分配其一个 C 类地址的网络号，比如 $203.0.113.0/24$，然后由公司自行分配主机号。但由于一个 C 类地址网络号可分配 254 个地址（除去广播地址和网络地址，即 $256-2=254$），这就造成了 IP 地址的浪费。