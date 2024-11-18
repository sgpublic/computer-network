"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[9239],{3354:(s,n,e)=>{e.r(n),e.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"network/05/network-05-05","title":"5.5 UDP \u548c TCP \u62a5\u6587\u6bb5\u62a5\u5934\u683c\u5f0f","description":"5.2.1 UDP \u62a5\u5934\u7684\u683c\u5f0f","source":"@site/docs/network/05/network-05-05.md","sourceDirName":"network/05","slug":"/network/05/network-05-05","permalink":"/pgee/network/05/network-05-05","draft":false,"unlisted":false,"editUrl":"https://github.com/sgpublic/pgee/tree/main/docs/network/05/network-05-05.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"5.4 UDP \u7684\u4f18\u70b9","permalink":"/pgee/network/05/network-05-04"},"next":{"title":"5.6 TCP \u7684\u6d41\u91cf\u63a7\u5236","permalink":"/pgee/network/05/network-05-06"}}');var i=e(4848),r=e(8453);const a={},c="5.5 UDP \u548c TCP \u62a5\u6587\u6bb5\u62a5\u5934\u683c\u5f0f",t={},h=[{value:"5.2.1 UDP \u62a5\u5934\u7684\u683c\u5f0f",id:"521-udp-\u62a5\u5934\u7684\u683c\u5f0f",level:4},{value:"5.5.2 TCP \u62a5\u5934\u683c\u5f0f",id:"552-tcp-\u62a5\u5934\u683c\u5f0f",level:4}];function d(s){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h4:"h4",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",mtext:"mtext",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"55-udp-\u548c-tcp-\u62a5\u6587\u6bb5\u62a5\u5934\u683c\u5f0f",children:"5.5 UDP \u548c TCP \u62a5\u6587\u6bb5\u62a5\u5934\u683c\u5f0f"})}),"\n",(0,i.jsx)(n.h4,{id:"521-udp-\u62a5\u5934\u7684\u683c\u5f0f",children:"5.2.1 UDP \u62a5\u5934\u7684\u683c\u5f0f"}),"\n",(0,i.jsxs)(n.p,{children:["\uff08",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc768",children:"RFC-768"}),"\uff09UDP \u9996\u90e8\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" 0      7 8     15 16    23 24    31\n+--------+--------+--------+--------+\n|     Source      |   Destination   |\n|      Port       |      Port       |\n+--------+--------+--------+--------+\n|                 |                 |\n|     Length      |    Checksum     |\n+--------+--------+--------+--------+\n|\n|          data octets ...\n+---------------- ...\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6e90\u7aef\u53e3\uff08Source Port\uff09\u3001\u76ee\u7684\u7aef\u53e3\uff08Destination Port\uff09"}),"\uff1a\u5404\u5360 2 \u5b57\u8282\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u957f\u5ea6\uff08Length\uff09"}),"\uff1a\u5373\u4e0d\u5305\u62ec\u4f2a\u9996\u90e8\u3001\u5b9e\u9645\u53d1\u9001\u7684 UDP \u62a5\u6587\u6bb5\u957f\u5ea6\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\u3002\u56e0\u6b64\u5176\u6700\u5c0f\u957f\u5ea6\u4e3a 8\uff08\u5373\u4ec5\u5305\u542b\u9996\u90e8\uff09\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6821\u9a8c\u548c\uff08Checksum\uff09"}),"\uff1a\u5bf9\u6574\u4e2a\u6570\u636e\u62a5\uff08\u5373\u4f2a\u9996\u90e8+\u9996\u90e8+\u6570\u636e\uff09\u8fdb\u884c\u6821\u9a8c\u548c\u3002\u6821\u9a8c\u65b9\u5f0f\u4e0e TCP \u5b8c\u5168\u4e00\u81f4\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"UDP \u9996\u90e8\u56fa\u5b9a\u90e8\u5206\u957f\u5ea6 8 \u5b57\u8282\u3002"})}),"\n",(0,i.jsx)(n.h4,{id:"552-tcp-\u62a5\u5934\u683c\u5f0f",children:"5.5.2 TCP \u62a5\u5934\u683c\u5f0f"}),"\n",(0,i.jsxs)(n.p,{children:["\uff08",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc1072#section-3.1",children:"RFC-9293 3.1"}),"\uff09TCP \u62a5\u5934\u683c\u5f0f\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|          Source Port          |       Destination Port        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                        Sequence Number                        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                    Acknowledgment Number                      |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|  Data |       |C|E|U|A|P|R|S|F|                               |\n| Offset| Rsrvd |W|C|R|C|S|S|Y|I|            Window             |\n|       |       |R|E|G|K|H|T|N|N|                               |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|           Checksum            |         Urgent Pointer        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           [Options]                           |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                                                               :\n:                             Data                              :\n:                                                               |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n\n       Note that one tick mark represents one bit position.\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6e90\u7aef\u53e3\uff08Source Port\uff09\u3001\u76ee\u7684\u7aef\u53e3\uff08Destination Port\uff09"}),"\uff1a\u5404\u5360 16 \u4f4d\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u5e8f\u53f7\uff08Sequence Number\uff09"}),"\uff1a\u5360 4 \u5b57\u8282\uff0c\u5373 ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mo,{stretchy:"false",children:"["}),(0,i.jsx)(n.mn,{children:"0"}),(0,i.jsx)(n.mo,{separator:"true",children:","}),(0,i.jsx)(n.mtext,{children:"\xa0"}),(0,i.jsxs)(n.msup,{children:[(0,i.jsx)(n.mn,{children:"2"}),(0,i.jsx)(n.mn,{children:"32"})]}),(0,i.jsx)(n.mo,{children:"\u2212"}),(0,i.jsx)(n.mn,{children:"1"}),(0,i.jsx)(n.mo,{stretchy:"false",children:"]"})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"[0,\\ 2^{32}-1]"})]})})}),(0,i.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,i.jsx)(n.span,{className:"mopen",children:"["}),(0,i.jsx)(n.span,{className:"mord",children:"0"}),(0,i.jsx)(n.span,{className:"mpunct",children:","}),(0,i.jsx)(n.span,{className:"mspace",children:"\xa0"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsxs)(n.span,{className:"mord",children:[(0,i.jsx)(n.span,{className:"mord",children:"2"}),(0,i.jsx)(n.span,{className:"msupsub",children:(0,i.jsx)(n.span,{className:"vlist-t",children:(0,i.jsx)(n.span,{className:"vlist-r",children:(0,i.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(n.span,{className:"mord mtight",children:(0,i.jsx)(n.span,{className:"mord mtight",children:"32"})})})]})})})})})]}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(n.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(n.span,{className:"mord",children:"1"}),(0,i.jsx)(n.span,{className:"mclose",children:"]"})]})]})]}),"\uff0c\u5f53\u5e8f\u53f7\u589e\u52a0\u5230 ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsxs)(n.msup,{children:[(0,i.jsx)(n.mn,{children:"2"}),(0,i.jsx)(n.mn,{children:"32"})]}),(0,i.jsx)(n.mo,{children:"\u2212"}),(0,i.jsx)(n.mn,{children:"1"})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"2^{32}-1"})]})})}),(0,i.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,i.jsxs)(n.span,{className:"mord",children:[(0,i.jsx)(n.span,{className:"mord",children:"2"}),(0,i.jsx)(n.span,{className:"msupsub",children:(0,i.jsx)(n.span,{className:"vlist-t",children:(0,i.jsx)(n.span,{className:"vlist-r",children:(0,i.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(n.span,{className:"mord mtight",children:(0,i.jsx)(n.span,{className:"mord mtight",children:"32"})})})]})})})})})]}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(n.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(n.span,{className:"mord",children:"1"})]})]})]})," \u65f6\u4e0b\u4e00\u4e2a\u5e8f\u53f7\u5c31\u56de\u5230 0\uff0c\u901a\u5e38",(0,i.jsx)(n.strong,{children:"\u7b80\u79f0\u4e3a \u201cseq\u201d\uff08\u5c0f\u5199\uff09"}),"\u3002\u5f53\u6b64\u62a5\u6587\u4e3a\u4f20\u8f93\u6570\u636e\u7684\u62a5\u6587\u65f6\uff0c\u5e8f\u53f7\u8868\u793a\u5f53\u524d\u62a5\u6587\u4e2d\u7b2c\u4e00\u4e2a\u5b57\u8282\u4f4d\u4e8e\u6574\u4e2a\u6570\u636e\u7684\u7edd\u5bf9\u4f4d\u7f6e\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["TCP \u4f7f\u7528\u6ed1\u52a8\u7a97\u53e3\u673a\u5236\u6765\u7ba1\u7406\u9700\u8981\u63a5\u6536\u54ea\u4e9b\u6570\u636e\uff0c\u56e0\u6b64\u4e0d\u4f1a\u51fa\u73b0\u5f53\u5e8f\u5217\u53f7\u56de\u5230 0 \u65f6\u65e0\u6cd5\u533a\u5206\u662f\u7b2c 0 \u5b57\u8282\u8fd8\u662f \u7b2c ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsx)(n.mrow,{children:(0,i.jsxs)(n.msup,{children:[(0,i.jsx)(n.mn,{children:"2"}),(0,i.jsx)(n.mn,{children:"32"})]})}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"2^{32}"})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsxs)(n.span,{className:"mord",children:[(0,i.jsx)(n.span,{className:"mord",children:"2"}),(0,i.jsx)(n.span,{className:"msupsub",children:(0,i.jsx)(n.span,{className:"vlist-t",children:(0,i.jsx)(n.span,{className:"vlist-r",children:(0,i.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(n.span,{className:"mord mtight",children:(0,i.jsx)(n.span,{className:"mord mtight",children:"32"})})})]})})})})})]})]})})]})," \u5b57\u8282\u7684\u95ee\u9898\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["TCP \u63e1\u624b\u9636\u6bb5 seq \u51fa\u73b0 ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsxs)(n.msup,{children:[(0,i.jsx)(n.mn,{children:"2"}),(0,i.jsx)(n.mn,{children:"32"})]}),(0,i.jsx)(n.mo,{children:"\u2212"}),(0,i.jsx)(n.mn,{children:"1"})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"2^{32}-1"})]})})}),(0,i.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,i.jsxs)(n.span,{className:"mord",children:[(0,i.jsx)(n.span,{className:"mord",children:"2"}),(0,i.jsx)(n.span,{className:"msupsub",children:(0,i.jsx)(n.span,{className:"vlist-t",children:(0,i.jsx)(n.span,{className:"vlist-r",children:(0,i.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(n.span,{className:"mord mtight",children:(0,i.jsx)(n.span,{className:"mord mtight",children:"32"})})})]})})})})})]}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(n.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(n.span,{className:"mord",children:"1"})]})]})]})," \u662f\u53ef\u80fd\u7684\uff0c\u5bf9\u65b9\u56de\u590d ack \u5373\u56de\u590d 0\uff0cTCP \u53ef\u4ee5\u6b63\u786e\u5904\u7406\u8fd9\u4e00\u60c5\u51b5\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u786e\u8ba4\u53f7\uff08Acknowledgment Number\uff09"}),"\uff1a\u5360 4 \u5b57\u8282\uff0c\u901a\u5e38",(0,i.jsx)(n.strong,{children:"\u7b80\u79f0\u4e3a \u201cack\u201d\uff08\u5c0f\u5199\uff09"}),"\u3002\u6570\u636e\u63a5\u6536\u65b9\u9700\u8981\u5411\u6570\u636e\u53d1\u9001\u65b9\u56de\u590d\u786e\u8ba4\uff0c\u6b64\u5b57\u6bb5\u5373\u7528\u4e8e\u5411\u5bf9\u65b9\u786e\u8ba4\u5df2\u6536\u5230\u7684\u5e8f\u53f7\uff0c\u8868\u793a\u7684\u662f",(0,i.jsx)(n.strong,{children:"\u671f\u671b\u6536\u5230\u5bf9\u65b9\u4e0b\u4e00\u4e2a\u62a5\u6587\u6bb5\u7684\u7b2c\u4e00\u4e2a\u6570\u636e\u5b57\u8282\u7684\u5e8f\u53f7"}),"\u3002\u5373\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"\u82e5\u786e\u8ba4\u53f7\u4e3a N\uff0c\u5219\u8868\u793a\u5230\u5e8f\u53f7\u4e3a N-1 \u4e3a\u6b62\u7684\u6240\u6709\u5e8f\u53f7\u5df2\u6b63\u786e\u6536\u5230\u3002"})})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6570\u636e\u504f\u79fb\uff08Data Offset\uff09"}),"\uff1a\u5373\u6b64 TCP \u62a5\u6587\u9996\u90e8\u7684\u957f\u5ea6\uff0c\u5360 8 \u4f4d\uff0c\u5355\u4f4d\u4e3a ",(0,i.jsx)(n.strong,{children:"4 \u5b57\u8282"}),"\u3002\u7531\u4e8e TCP \u9996\u90e8\u56fa\u5b9a\u90e8\u5206\u957f\u5ea6\u4e3a 5 \u4e2a 4 \u5b57\u8282\uff0c\u800c\u6b64\u5b57\u6bb5\u4e0a\u9650\u4e3a 15\uff0c\u56e0\u6b64\u9009\u9879\u90e8\u5206\u4e0d\u80fd\u8d85\u8fc7 40 \u5b57\u8282\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u4fdd\u7559\uff08Rsrvd\uff09"}),"\uff1a\u5360 4 \u4f4d\uff0c\u9884\u7559\u4ee5\u540e\u4f7f\u7528\uff0c\u73b0\u586b\u5145 0\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u63a7\u5236\u4f4d\uff1a\u63a5\u4e0b\u6765 8 \u4e2a\u5b57\u6bb5\u4e3a\u6807\u5fd7\uff0c\u5404\u5360 1 \u4f4d\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u62e5\u585e\u7a97\u53e3\u51cf\u5c11\uff08CWR\uff09"}),"\uff1a\u7528\u4e8e\u901a\u77e5\u63a5\u6536\u65b9\uff0c\u53d1\u9001\u65b9\u5df2\u51cf\u5c11\u5176\u62e5\u585e\u7a97\u53e3\uff0c\u4ee5\u51cf\u5c11\u63a5\u6536\u65b9\u53cd\u590d\u901a\u77e5\u53d1\u9001\u65b9\u9047\u5230\u7f51\u7edc\u62e5\u585e\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u663e\u5f0f\u62e5\u585e\u901a\u77e5\uff08ECE\uff09"}),"\uff1a\u7528\u4e8e\u901a\u77e5\u53d1\u9001\u65b9\uff0c\u63a5\u6536\u65b9\u5df2\u9047\u5230\u7f51\u7edc\u62e5\u585e\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7d27\u6025\uff08URG\uff09"}),"\uff1a\u8868\u793a\u6b64 TCP \u62a5\u6587\u4e2d\u6709\u7d27\u6025\u6570\u636e\uff0c\u9700\u5c3d\u5feb\u53d1\u9001\u3002\u5373\u5f53 URG \u7f6e 1 \u65f6\uff0c\u6b64\u62a5\u6587\u4e0d\u5e94\u6309\u539f\u6765\u6392\u961f\u987a\u5e8f\u53d1\u9001\uff0c\u800c\u9700\u7acb\u5373\u53d1\u9001\u3002\uff08RFC-9293 3.8.5\uff09\u6ce8\u610f\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u65b0\u7684\u5e94\u7528",(0,i.jsx)(n.strong,{children:"\u4e0d\u5e94"}),"\u7ee7\u7eed\u4f7f\u7528 TCP \u7684\u7d27\u6025\u673a\u5236\uff0c\u4f46 TCP \u5b9e\u73b0\u4ecd",(0,i.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u5305\u62ec\u5bf9\u7d27\u6025\u673a\u5236\u7684\u652f\u6301\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["TCP \u5b9e\u73b0",(0,i.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u4e3a\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u4e00\u79cd\u65b9\u6cd5\u6765\u83b7\u53d6\u8fd8\u6709\u591a\u5c11\u7d27\u6025\u6570\u636e\u9700\u8981\u4ece\u8fde\u63a5\u4e2d\u8bfb\u53d6\uff0c\u6216\u81f3\u5c11\u786e\u5b9a\u662f\u5426\u8fd8\u6709\u7d27\u6025\u6570\u636e\u9700\u8981\u8bfb\u53d6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u786e\u8ba4\uff08ACK\uff09"}),"\uff1a\u8868\u793a\u6b64 TCP \u62a5\u6587\u7528\u4e8e\u786e\u8ba4\u3002\u5373\u5f53 ACK \u7f6e 1 \u65f6\uff0c\u786e\u8ba4\u53f7\u6709\u6548\u3002\u6ce8\u610f\uff0c\u5f53\u51fa\u73b0 ACK\uff08\u5927\u5199\uff09\u65f6\uff0c\u8868\u793a\u7684\u662f\u6b64\u6807\u5fd7\u4f4d\uff0c\u800c\u51fa\u73b0 ack\uff08\u5c0f\u5199\uff09\u65f6\uff0c\u5219\u8868\u793a\u786e\u8ba4\u53f7\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u63a8\u9001\uff08PSH\uff09"}),"\uff1a\u8868\u793a\u6b64 TCP \u62a5\u6587\u4e2d\u7684\u6570\u636e\u9700\u5c3d\u5feb\u4ea4\u4ed8\u7ed9\u5e94\u7528\u7a0b\u5e8f\u3002\u5373\u5f53 PSH \u7f6e 1 \u65f6\uff0c\u6b64\u62a5\u6587\u4e0d\u5e94\u7b49\u5f85\u63a5\u6536\u7f13\u5b58\u586b\u6ee1\u540e\u518d\u4ea4\u4ed8\u7ed9\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e94\u7acb\u5373\u4ea4\u4ed8\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u590d\u4f4d\uff08RST\uff09"}),"\uff1a\u8868\u793a\u6b64 TCP \u8fde\u63a5\u51fa\u73b0\u4e25\u91cd\u5dee\u9519\uff0c\u9700\u8981\u7acb\u5373\u91ca\u653e\u8fde\u63a5\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u540c\u6b65\uff08SYN\uff09"}),"\uff1a\u8868\u793a\u6b64 TCP \u62a5\u6587\u662f\u7528\u4e8e\u5efa\u7acb\u8fde\u63a5\u65f6\u4e09\u6b21\u63e1\u624b\u7684\u62a5\u6587\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7ec8\u6b62\uff08FIN\uff09"}),"\uff1a\u8868\u793a\u6b64 TCP \u62a5\u6587\u662f\u7528\u4e8e\u91ca\u653e\u8fde\u63a5\u7684\u56db\u6b21\u6325\u624b\u7684\u62a5\u6587\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u7a97\u53e3\uff08Window\uff09"}),"\uff1a\u6307",(0,i.jsx)(n.strong,{children:"\u53d1\u9001\u6b64 TCP \u62a5\u6587\u7684\u4e00\u65b9"}),"\u7684",(0,i.jsx)(n.strong,{children:"\u63a5\u6536\u7a97\u53e3\u5269\u4f59\u7a7a\u95f4\u7684\u5927\u5c0f"}),"\uff0c\u5360 2 \u5b57\u8282\uff0c\u5355\u4f4d\u4e3a ",(0,i.jsx)(n.strong,{children:"1 \u5b57\u8282"}),"\uff0c\u901a\u5e38\u8bb0\u4e3a ",(0,i.jsx)(n.strong,{children:"rwnd\uff08\u5c0f\u5199\uff09"}),"\u3002\u7528\u4e8e\u544a\u77e5\u5bf9\u65b9\u81ea\u5df1\u7684\u63a5\u6536\u80fd\u529b\uff0c\u5373\u81ea\u5df1\u8fd8\u80fd\u63a5\u6536\u591a\u5c11\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6821\u9a8c\u548c\uff08Checksum\uff09"}),"\uff1a\u5360 2 \u5b57\u8282\u3002TCP \u6821\u9a8c\u548c\u751f\u6210\u65b9\u6cd5\u4e3a\u201c\u4e8c\u8fdb\u5236\u53cd\u7801\u6c42\u548c\u201d\uff0c\u5177\u4f53\u7684\uff1a"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6309\u7167\u5982\u4e0b\u683c\u5f0f\u751f\u6210\u4f2a\u9996\u90e8\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:" 0      7 8     15 16    23 24    31\n+--------+--------+--------+--------+\n|          source address           |\n+--------+--------+--------+--------+\n|        destination address        |\n+--------+--------+--------+--------+\n|  zero  |protocol|     length      |\n+--------+--------+--------+--------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6e90\u5730\u5740\uff08source address\uff09\u3001\u76ee\u7684\u5730\u5740\uff08destination address\uff09"}),"\uff1a\u652f\u6301 IPv4 \u548c IPv6 \u5730\u5740\uff0c\u82e5\u4e3a IPv4 \u5730\u5740\u5219\u4e3a 4 \u5b57\u8282\uff0c\u82e5 IPv6 \u5219\u4e3a 16 \u5b57\u8282\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u586b\u5145\uff08zero\uff09"}),"\uff1a\u65e0\u610f\u4e49\uff0c\u56fa\u5b9a\u4e3a 0\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u534f\u8bae\uff08protocol\uff09"}),"\uff1aIP \u6807\u5934\u4e2d\u7684",(0,i.jsx)(n.strong,{children:"\u534f\u8bae"}),"\u5b57\u6bb5\uff0c\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"/network/04/network-04-07",children:"4.7 IP \u6570\u636e\u62a5\u7684\u7ed3\u6784\u53ca\u5176\u6bcf\u4e2a\u57df\u7684\u610f\u4e49"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u62a5\u6587\u957f\u5ea6\uff08length\uff09"}),"\uff1a\u5373",(0,i.jsx)(n.strong,{children:"\u4e0d\u5305\u62ec\u4f2a\u9996\u90e8"}),"\u3001",(0,i.jsx)(n.strong,{children:"\u5b9e\u9645\u53d1\u9001\u6216\u63a5\u6536"}),"\u7684\u3001",(0,i.jsx)(n.strong,{children:"\u5355\u4e2a"}),"\u62a5\u6587\u957f\u5ea6\uff0c\u5355\u4f4d\u4e3a ",(0,i.jsx)(n.strong,{children:"1 \u5b57\u8282"}),"\u3002\u56e0\u6b64\u5355\u4e2a\u62a5\u6587\u6bb5\u957f\u5ea6\u6700\u957f\u4e0d\u80fd\u8d85\u8fc7 ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsxs)(n.msup,{children:[(0,i.jsx)(n.mn,{children:"2"}),(0,i.jsx)(n.mn,{children:"16"})]}),(0,i.jsx)(n.mo,{children:"\u2212"}),(0,i.jsx)(n.mn,{children:"1"})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"2^{16}-1"})]})})}),(0,i.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,i.jsxs)(n.span,{className:"mord",children:[(0,i.jsx)(n.span,{className:"mord",children:"2"}),(0,i.jsx)(n.span,{className:"msupsub",children:(0,i.jsx)(n.span,{className:"vlist-t",children:(0,i.jsx)(n.span,{className:"vlist-r",children:(0,i.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(n.span,{className:"mord mtight",children:(0,i.jsx)(n.span,{className:"mord mtight",children:"16"})})})]})})})})})]}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(n.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(n.span,{className:"mord",children:"1"})]})]})]})," \u5b57\u8282\uff0c\u5373 65535 \u5b57\u8282\u3002\u7136\u800c\u5b9e\u8df5\u4e2d\u5355\u4e2a\u62a5\u6587\u7684\u5927\u5c0f\u901a\u5e38\u53d6\u51b3\u4e8e MTU\uff0c\u5373\u8fdc\u5c0f\u4e8e 65535 \u5b57\u8282\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728\u6570\u636e\u90e8\u5206\u540e\u9762",(0,i.jsx)(n.strong,{children:"\u586b\u5145 0"})," \u76f4\u81f3\u6570\u636e\u90e8\u5206\u957f\u5ea6\u4e3a ",(0,i.jsx)(n.strong,{children:"4 \u5b57\u8282\u7684\u500d\u6570"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5c06\u6821\u9a8c\u548c\u5b57\u6bb5\u5168\u90e8\u7f6e\u4e3a 0\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5c06\u5904\u7406\u540e\u7684\u6574\u4e2a\u6570\u636e\u62a5\u6bcf 16 \u4f4d\uff08\u5373 2 \u5b57\u8282\uff09\u5206\u4e3a\u4e00\u4efd\uff0c\u89c6\u4f5c\u65e0\u7b26\u53f7\u6574\u6570\u6309\u987a\u5e8f\u76f8\u52a0\uff0c\u82e5\u4ea7\u751f\u8fdb\u4f4d\u5219\u5c06\u8fdb\u4f4d\u90e8\u5206\u62b9\u53bb\u5e76\u52a0\u56de\u3002\u4f8b\u5982\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u7b2c\u4e00\u4efd\u6570\u636e\u4e3a ",(0,i.jsx)(n.code,{children:"0xFFFF"}),"\uff0c\u7b2c\u4e8c\u4efd\u6570\u636e\u4e3a ",(0,i.jsx)(n.code,{children:"0x0002"}),"\uff0c\u5c06\u5176\u89c6\u4f5c\u65e0\u7b26\u53f7\u6574\u6570\u6309\u987a\u5e8f\u76f8\u52a0\uff0c\u5f97\u5230\u7ed3\u679c ",(0,i.jsx)(n.code,{children:"0x10001"}),"\uff0c\u4ea7\u751f\u4e86\u8fdb\u4f4d ",(0,i.jsx)(n.code,{children:"1"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5c06\u8fdb\u4f4d\u62b9\u53bb\u5f97\u5230 ",(0,i.jsx)(n.code,{children:"0x0001"}),"\uff0c\u7136\u540e\u52a0\u56de\u5f97\u5230 ",(0,i.jsx)(n.code,{children:"0x0002"}),"\uff0c\u4e8e\u662f\u7ed3\u679c\u4e3a ",(0,i.jsx)(n.code,{children:"0x0002"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4e8e\u4e24\u4e2a 16 \u4f4d\u65e0\u7b26\u53f7\u6574\u6570\u76f8\u52a0\u6700\u591a\u53ea\u80fd\u4ea7\u751f 1 \u4f4d\u8fdb\u4f4d\uff0c\u800c\u76f8\u52a0\u7ed3\u679c +1 \u540e\u4e0d\u53ef\u80fd\u518d\u6b21\u4ea7\u751f\u8fdb\u4f4d\uff0c\u4e8e\u662f\u53ef\u89c6\u4e3a\u53ea\u8981\u76f8\u52a0\u7ed3\u679c\u8d85\u8fc7 16 \u4f4d\uff0c\u5219\u622a\u53d6\u7ed3\u679c\u7684\u4f4e 16 \u4f4d\u5e76\u5c06\u7ed3\u679c +1\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u7d27\u6025\u6307\u9488\uff08Urgent Pointer\uff09"}),"\uff1a\u6307\u660e\u7d27\u6025\u6570\u636e\u7684\u6700\u540e\u4e00\u4e2a\u5b57\u8282\u5728\u5f53\u524d\u62a5\u6587\u6bb5\u6570\u636e\u90e8\u5206\u4e2d\u7684\u4f4d\u7f6e\u3002\u56e0\u6b64\u5355\u4e2a\u62a5\u6587\u6bb5\u53ef\u4ee5\u540c\u65f6\u5305\u542b\u7d27\u6025\u6570\u636e\u548c\u975e\u7d27\u6025\u6570\u636e\uff0c\u800c\u7d27\u6025\u6570\u636e\u653e\u5728\u975e\u7d27\u6025\u6570\u636e\u524d\u9762\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u9009\u9879\uff08Option\uff09"}),"\uff1a\u957f\u5ea6\u53ef\u53d8\uff0c\u6700\u957f\u4e3a 40 \u5b57\u8282\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6700\u5927\u62a5\u6587\u6bb5\u957f\u5ea6 MSS\uff1a\u5728 TCP \u9009\u9879\u90e8\u5206\u4e2d\u7684 MSS \u6307\u53d1\u9001\u6b64\u62a5\u6587\u7684\u4e00\u65b9\u613f\u610f\u63a5\u6536\u7684\u6700\u5927\u62a5\u6587\u6bb5\u5927\u5c0f\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\uff08RFC-2018\uff09",(0,i.jsx)(n.strong,{children:"\u9009\u62e9\u786e\u8ba4\uff08Selective Acknowledgment\uff09"}),"\uff1a\u5f53\u5206\u7ec4\u4e71\u5e8f\u5230\u8fbe\u65f6\uff0c\u53ef\u9009\u62e9\u5bf9\u672a\u6309\u987a\u5e8f\u5230\u8fbe\u7684\u6570\u636e\u8fdb\u884c",(0,i.jsx)(n.strong,{children:"\u634e\u5e26\u786e\u8ba4"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"TCP \u9996\u90e8\u56fa\u5b9a\u90e8\u5206\u957f\u5ea6 20 \u5b57\u8282\u3002"})}),"\n",(0,i.jsx)(n.p,{children:"\u76f8\u5173\u8bcd\u6761\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u6700\u5927\u62a5\u6587\u6bb5\u957f\u5ea6 MSS\uff08Maximum Segment Size\uff09"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6700\u5927\u62a5\u6587\u6bb5\u957f\u5ea6",(0,i.jsx)(n.strong,{children:"\u672c\u8eab\u542b\u4e49"}),"\u6307\u6bcf\u4e2a TCP \u62a5\u6587\u6bb5\u4e2d",(0,i.jsx)(n.strong,{children:"\u6570\u636e\u90e8\u5206"}),"\u7684\u6700\u5927\u957f\u5ea6\u3002\u9700\u4e0e TCP \u9009\u9879\u90e8\u5206\u4e2d\u7684 MSS \u505a\u533a\u5206\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u63a5\u6536\u65b9\u6700\u5927\u62a5\u6587\u6bb5 RMSS\uff08Receiver Maximum Segment Size\uff09"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6307\u63a5\u6536\u65b9\u613f\u610f\u63a5\u6536\u7684\u6700\u5927\u62a5\u6587\u6bb5\u5927\u5c0f\uff0c\u5355\u4f4d ",(0,i.jsx)(n.strong,{children:"1 \u5b57\u8282"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u53d1\u9001\u65b9\u6700\u5927\u62a5\u6587\u6bb5 SMSS\uff08Sender Maximum Segment Size\uff09"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6307\u53d1\u9001\u65b9\u53d1\u9001\u7684\u6700\u5927\u62a5\u6587\u6bb5\u5927\u5c0f\uff0c\u5355\u4f4d ",(0,i.jsx)(n.strong,{children:"1 \u5b57\u8282"}),"\uff0c\u6839\u636e\u94fe\u8def\u8def\u5f84\u4e0a\u6700\u5c0f MTU\u3001RMSS \u7b49\u56e0\u7d20\u786e\u5b9a\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u62a5\u6587\u6700\u5927\u751f\u5b58\u65f6\u95f4 MSL\uff08Maximum Segment Lifetime\uff09"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6307\u62a5\u6587\u5728\u7f51\u7edc\u4e0a\u5b58\u5728\u7684\u6700\u957f\u65f6\u95f4\u3002\uff08",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc793#:~:text=For%20this%20specification%20the%20MSL%20is%20taken%20to%20be%202%20minutes.",children:"RFC-768"}),"\uff09\u6807\u51c6 MSL \u89c4\u5b9a\u4e3a 2 \u5206\u949f\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7d2f\u8ba1\u786e\u8ba4\uff08Cumulative Acknowladgment\uff09"})}),"\n",(0,i.jsx)(n.p,{children:"\u786e\u8ba4\u5e76\u975e\u6536\u5230\u4e00\u4e2a\u5b57\u8282\u5c31\u786e\u8ba4\u4e00\u4e2a\u5b57\u8282\uff0c\u800c\u662f\u7d2f\u8ba1\u4e00\u5b9a\u6570\u91cf\u7684\u6570\u636e\u518d\u53d1\u9001\u786e\u8ba4\uff0c\u4f8b\u5982\uff1a\u6b63\u786e\u6536\u5230\u4e00\u6574\u4e2a\u62a5\u6587\u6bb5\u540e\u5bf9\u8fd9\u4e2a\u62a5\u6587\u6bb5\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u7d2f\u8ba1\u786e\u8ba4\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5ef6\u8fdf\u786e\u8ba4\uff08Delayed Acknowladgment\uff09"})}),"\n",(0,i.jsxs)(n.p,{children:["TCP \u5b9e\u73b0",(0,i.jsx)(n.strong,{children:"\u5e94\u5f53"}),"\u5b9e\u73b0\u5ef6\u8fdf\u786e\u8ba4\uff0c\u5373\u6b63\u786e\u6536\u5230\u4e00\u4e2a\u62a5\u6587\u6bb5\u540e\u53ef\u4e0d\u7acb\u5373\u53d1\u9001\u786e\u8ba4\uff0c\u4f46\u4e0d\u5e94\u8fc7\u5ea6\u5ef6\u8fdf\uff0c\u5ef6\u8fdf",(0,i.jsx)(n.strong,{children:"\u5fc5\u987b"}),"\u5c0f\u4e8e 0.5 \u79d2\uff0c\u4e14\u6bcf\u9047\u5230\u4ee5\u4e0b\u60c5\u51b5\u4e4b\u4e00\u5e94\u53d1\u9001\u4e00\u4e2a\u786e\u8ba4\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6bcf\u6536\u5230\u4e00\u4e2a\u5b8c\u6574\u5927\u5c0f\u7684\u62a5\u6587\u6bb5\uff08\u5373\u6570\u636e\u90e8\u5206\u5927\u5c0f\u7b49\u4e8e RMSS \u7684\u62a5\u6587\u6bb5\uff09\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u6bcf\u7d2f\u8ba1\u6536\u5230 ",(0,i.jsxs)(n.span,{className:"katex",children:[(0,i.jsx)(n.span,{className:"katex-mathml",children:(0,i.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(n.semantics,{children:[(0,i.jsxs)(n.mrow,{children:[(0,i.jsx)(n.mn,{mathvariant:"bold",children:"2"}),(0,i.jsx)(n.mo,{children:"\xd7"}),(0,i.jsx)(n.mi,{mathvariant:"bold",children:"R"}),(0,i.jsx)(n.mi,{mathvariant:"bold",children:"M"}),(0,i.jsx)(n.mi,{mathvariant:"bold",children:"S"}),(0,i.jsx)(n.mi,{mathvariant:"bold",children:"S"})]}),(0,i.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\bf{2 \\times RMSS}"})]})})}),(0,i.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(n.span,{className:"base",children:[(0,i.jsx)(n.span,{className:"strut",style:{height:"0.7694em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(n.span,{className:"mord",children:(0,i.jsxs)(n.span,{className:"mord",children:[(0,i.jsx)(n.span,{className:"mord mathbf",children:"2"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(n.span,{className:"mbin",children:"\xd7"}),(0,i.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(n.span,{className:"mord mathbf",children:"RMSS"})]})})]})})]})," \u5b57\u8282\u7684\u6570\u636e\u3002"]}),"\n"]}),"\n"]}),"\n"]})]})}function x(s={}){const{wrapper:n}={...(0,r.R)(),...s.components};return n?(0,i.jsx)(n,{...s,children:(0,i.jsx)(d,{...s})}):d(s)}},8453:(s,n,e)=>{e.d(n,{R:()=>a,x:()=>c});var l=e(6540);const i={},r=l.createContext(i);function a(s){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof s?s(n):{...n,...s}}),[n,s])}function c(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:a(s.components),l.createElement(r.Provider,{value:n},s.children)}}}]);