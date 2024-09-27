"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[904],{91756:function(d,t,n){n.r(t),n.d(t,{demos:function(){return m}});var e=n(67294),o=n(87870),m={}},81539:function(d,t,n){n.r(t),n.d(t,{demos:function(){return S}});var e={};n.r(e),n.d(e,{ApiHeader:function(){return y.$},DumiSiteProvider:function(){return h.Z},Features:function(){return A.Z},Footer:function(){return E.Z},Hero:function(){return P.Z},Highlighter:function(){return D.oP},Toc:function(){return O.Z},defineThemeConfig:function(){return M},siteSelectors:function(){return x.b8},useSiteStore:function(){return T.HX}});var o={};n.r(o),n.d(o,{Center:function(){return I.Z},Flexbox:function(){return C.D}});var m=n(15009),s=n.n(m),f=n(99289),g=n.n(f),u=n(67294),v=n.t(u,2),R=n(26211),y=n(78908),h=n(43235),A=n(94391),E=n(70623),P=n(3878),D=n(93958),O=n(22447),M=function(i){return i},x=n(31623),T=n(1320),I=n(1322),C=n(17542),a=n(40207),S={"docs-guide-demo-guide":{component:u.memo(u.lazy(function(){return n.e(433).then(n.bind(n,71231))})),asset:{type:"BLOCK",id:"docs-guide-demo-guide",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:n(35809).Z},"dumi-theme-antd-style":{type:"NPM",value:"0.31.1"},"react-layout-kit":{type:"NPM",value:"1.9.0"},react:{type:"NPM",value:"18.3.1"},"./config/config.ts":{type:"FILE",value:n(22293).Z}},entry:"index.jsx"},context:{"./config/config.ts":a,"dumi-theme-antd-style":e,"react-layout-kit":o,react:v,"/home/runner/work/my_blog/my_blog/docs/guide/config/config.ts":a},renderOpts:{compile:function(){var l=g()(s()().mark(function F(){var c,L=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return r.abrupt("return",(c=r.sent).default.apply(c,L));case 3:case"end":return r.stop()}},F)}));function i(){return l.apply(this,arguments)}return i}()}},"docs-guide-demo-commit":{component:u.memo(u.lazy(function(){return n.e(433).then(n.bind(n,89190))})),asset:null,context:void 0,renderOpts:void 0}}},17252:function(d,t,n){n.r(t),n.d(t,{demos:function(){return m}});var e=n(67294),o=n(87079),m={}},11171:function(d,t,n){n.r(t),n.d(t,{demos:function(){return m}});var e=n(67294),o=n(68537),m={}},40207:function(d,t,n){n.r(t),n.d(t,{antdStyleItems:function(){return e}});var e=[{title:"dumi-theme-antd-style \u4E3B\u9898",image:"\u{1F4A0}",description:"",link:"https://dumi-theme-antd-style.arvinx.com/",imageType:"light",row:7},{title:"\u5E94\u7528\u6848\u4F8B",description:"",link:"/case",image:"https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*5H2ySLO-X4cAAAAAAAAAAAAADoN6AQ/original",imageType:"soon",row:7}]},70475:function(d,t,n){n.r(t),n.d(t,{texts:function(){return o}});var e=n(87870);const o=[]},9978:function(d,t,n){n.r(t),n.d(t,{texts:function(){return o}});var e=n(26211);const o=[]},61070:function(d,t,n){n.r(t),n.d(t,{texts:function(){return o}});var e=n(87079);const o=[]},51446:function(d,t,n){n.r(t),n.d(t,{texts:function(){return o}});var e=n(68537);const o=[]},22293:function(d,t){t.Z=`import { IFeature } from 'dumi-theme-antd-style';

export const antdStyleItems: IFeature[] = [
  {
    title: 'dumi-theme-antd-style \u4E3B\u9898',
    image:
      '\u{1F4A0}',
    description:
      '',
    link: 'https://dumi-theme-antd-style.arvinx.com/',
    imageType: 'light',
    row: 7,
  },
  {
    title: '\u5E94\u7528\u6848\u4F8B',
    description:
      '',
    link: '/case',
    image:
      'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*5H2ySLO-X4cAAAAAAAAAAAAADoN6AQ/original',
    imageType: 'soon',
    row: 7,
  },
];
`},35809:function(d,t){t.Z=`import { DumiSiteProvider, Features } from 'dumi-theme-antd-style';
import { Flexbox } from 'react-layout-kit';

import { antdStyleItems } from './config/config';
import React from "react";

export default () => (
  <DumiSiteProvider>
    <Flexbox padding={24}>
      <Features openExternal={true} items={antdStyleItems} />
    </Flexbox>
  </DumiSiteProvider>
);
`}}]);
