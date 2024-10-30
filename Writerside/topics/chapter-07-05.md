# 7.5 公开密钥加密算法：RSA

RSA 是现代互联网中使用最广泛的非对称加密算法之一。

RSA 的安全性基于对大数分解的难度。

RSA 支持**公钥加密私钥解密**，公钥加密的数据只能由私钥解密；由于 RSA 加密和解密计算公式相同，只是代入的数值不同，因此 RAS 也支持**私钥加密公钥解密**，私钥加密的数据只能由公钥解密。

## 7.5.1 密钥生成

RSA 密钥对的生成遵循以下步骤：

1. 挑选两个非常大的质数 $p$ 和 $q$。
2. 计算 $n=p \times q$。
3. 计算 $\phi(n)=(p-1)(q-1)$。
4. 挑选公钥指数 $e$ 满足 $1 < e < \phi(n)$ 且 $e$ 与 $\phi(n)$ 互质。常用值为 65537。
5. 计算私钥指数 $d$ 满足 $(d \times e) \mod \phi(n)=1$。
6. 最终得出公钥为 $(e, n)$，私钥为 $(d, n)$。

其中：

+ 密钥长度例如 2048 位、4096 位，是指模数 $n$ 的位数。
+ $\phi(n)$ 为欧拉函数，指小于等于 $n$ 的正整数中与 $n$ 互质的个数。
+ RSA 利用私钥可计算出公钥。

## 7.5.2 加密和解密

由于实践中 RSA 加密解密过程十分复杂，此处仅简要描述重点部分。

首先将待加密数据按规定的规则转为整数 $m$，满足 $0 \leq m < n$：

+ 使用公钥加密时，将整数 $m$ 代入公式 $c=m^e \mod n$，$c$ 即为密文。使用私钥加密时只需要将 $e$ 替换为 $d$。
+ 使用私钥解密时，将密文 $c$ 代入公式 $m=c^d \mod n$，即可还原明文 $m$。使用公钥解密时只需要将 $d$ 替换为 $e$。