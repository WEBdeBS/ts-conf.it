(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{156:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(4),s=t.n(r),l=t(164),c=t(173),m=t(192),o=function(e){var a=e.testimonials;return i.a.createElement("div",null,a.map(function(e){return i.a.createElement("article",{key:Object(m.v4)(),className:"message"},i.a.createElement("div",{className:"message-body"},e.quote,i.a.createElement("br",null),i.a.createElement("cite",null," – ",e.author)))}))};o.propTypes={testimonials:s.a.arrayOf(s.a.shape({quote:s.a.string,author:s.a.string}))};var d=o,u=function(e){var a=e.data;return i.a.createElement("div",{className:"columns"},a.map(function(e){return i.a.createElement("div",{key:e.plan,className:"column"},i.a.createElement("section",{className:"section"},i.a.createElement("h4",{className:"has-text-centered has-text-weight-semibold"},e.plan),i.a.createElement("h2",{className:"is-size-1 has-text-weight-bold has-text-primary has-text-centered"},"$",e.price),i.a.createElement("p",{className:"has-text-weight-semibold"},e.description),i.a.createElement("ul",null,e.items.map(function(e){return i.a.createElement("li",{key:e,className:"is-size-5"},e)}))))}))};u.propTypes={data:s.a.arrayOf(s.a.shape({plan:s.a.string,price:s.a.oneOfType([s.a.string,s.a.number]),description:s.a.string,items:s.a.array}))};var p=u,g=t(170);t.d(a,"ProductPageTemplate",function(){return f}),t.d(a,"productPageQuery",function(){return h});var f=function(e){var a=e.image,t=e.title,n=e.heading,r=e.description,s=e.intro,l=e.main,m=e.testimonials,o=e.fullImage,u=e.pricing;return i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"full-width-image-container margin-top-0",style:{backgroundImage:"url("+(a.childImageSharp?a.childImageSharp.fluid.src:a)+")"}},i.a.createElement("h2",{className:"has-text-weight-bold is-size-1",style:{boxShadow:"0.5rem 0 0 #f40, -0.5rem 0 0 #f40",backgroundColor:"#f40",color:"white",padding:"1rem"}},t)),i.a.createElement("section",{className:"section section--gradient"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-7 is-offset-1"},i.a.createElement("h3",{className:"has-text-weight-semibold is-size-2"},n),i.a.createElement("p",null,r))),i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-10 is-offset-1"},i.a.createElement(c.a,{gridItems:s.blurbs}),i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-7"},i.a.createElement("h3",{className:"has-text-weight-semibold is-size-3"},l.heading),i.a.createElement("p",null,l.description))),i.a.createElement("div",{className:"tile is-ancestor"},i.a.createElement("div",{className:"tile is-vertical"},i.a.createElement("div",{className:"tile"},i.a.createElement("div",{className:"tile is-parent is-vertical"},i.a.createElement("article",{className:"tile is-child"},i.a.createElement(g.a,{imageInfo:l.image1}))),i.a.createElement("div",{className:"tile is-parent"},i.a.createElement("article",{className:"tile is-child"},i.a.createElement(g.a,{imageInfo:l.image2})))),i.a.createElement("div",{className:"tile is-parent"},i.a.createElement("article",{className:"tile is-child"},i.a.createElement(g.a,{imageInfo:l.image3}))))),i.a.createElement(d,{testimonials:m}),i.a.createElement("div",{className:"full-width-image-container",style:{backgroundImage:"url("+(o.childImageSharp?o.childImageSharp.fluid.src:o)+")"}}),i.a.createElement("h2",{className:"has-text-weight-semibold is-size-2"},u.heading),i.a.createElement("p",{className:"is-size-5"},u.description),i.a.createElement(p,{data:u.plans})))))))};f.propTypes={image:s.a.oneOfType([s.a.object,s.a.string]),title:s.a.string,heading:s.a.string,description:s.a.string,intro:s.a.shape({blurbs:s.a.array}),main:s.a.shape({heading:s.a.string,description:s.a.string,image1:s.a.oneOfType([s.a.object,s.a.string]),image2:s.a.oneOfType([s.a.object,s.a.string]),image3:s.a.oneOfType([s.a.object,s.a.string])}),testimonials:s.a.array,fullImage:s.a.oneOfType([s.a.object,s.a.string]),pricing:s.a.shape({heading:s.a.string,description:s.a.string,plans:s.a.array})};var v=function(e){var a=e.data.markdownRemark.frontmatter;return i.a.createElement(l.a,null,i.a.createElement(f,{image:a.image,title:a.title,heading:a.heading,description:a.description,intro:a.intro,main:a.main,testimonials:a.testimonials,fullImage:a.full_image,pricing:a.pricing}))};v.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.object})})};a.default=v;var h="2855502059"},173:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(4),s=t.n(r),l=t(170),c=function(e){var a=e.gridItems;return i.a.createElement("div",{className:"columns is-multiline"},a.map(function(e){return i.a.createElement("div",{key:e.text,className:"column is-6"},i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"has-text-centered"},i.a.createElement("div",{style:{width:"240px",display:"inline-block"}},i.a.createElement(l.a,{imageInfo:e}))),i.a.createElement("p",null,e.text)))}))};c.propTypes={gridItems:s.a.arrayOf(s.a.shape({image:s.a.oneOfType([s.a.object,s.a.string]),text:s.a.string}))},a.a=c},181:function(e,a){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var i=new Array(16);e.exports=function(){for(var e,a=0;a<16;a++)0==(3&a)&&(e=4294967296*Math.random()),i[a]=e>>>((3&a)<<3)&255;return i}}},182:function(e,a){for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1);e.exports=function(e,a){var n=a||0,i=t;return[i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]]].join("")}},192:function(e,a,t){var n=t(193),i=t(194),r=i;r.v1=n,r.v4=i,e.exports=r},193:function(e,a,t){var n,i,r=t(181),s=t(182),l=0,c=0;e.exports=function(e,a,t){var m=a&&t||0,o=a||[],d=(e=e||{}).node||n,u=void 0!==e.clockseq?e.clockseq:i;if(null==d||null==u){var p=r();null==d&&(d=n=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==u&&(u=i=16383&(p[6]<<8|p[7]))}var g=void 0!==e.msecs?e.msecs:(new Date).getTime(),f=void 0!==e.nsecs?e.nsecs:c+1,v=g-l+(f-c)/1e4;if(v<0&&void 0===e.clockseq&&(u=u+1&16383),(v<0||g>l)&&void 0===e.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=g,c=f,i=u;var h=(1e4*(268435455&(g+=122192928e5))+f)%4294967296;o[m++]=h>>>24&255,o[m++]=h>>>16&255,o[m++]=h>>>8&255,o[m++]=255&h;var E=g/4294967296*1e4&268435455;o[m++]=E>>>8&255,o[m++]=255&E,o[m++]=E>>>24&15|16,o[m++]=E>>>16&255,o[m++]=u>>>8|128,o[m++]=255&u;for(var y=0;y<6;++y)o[m+y]=d[y];return a||s(o)}},194:function(e,a,t){var n=t(181),i=t(182);e.exports=function(e,a,t){var r=a&&t||0;"string"==typeof e&&(a="binary"===e?new Array(16):null,e=null);var s=(e=e||{}).random||(e.rng||n)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,a)for(var l=0;l<16;++l)a[r+l]=s[l];return a||i(s)}}}]);
//# sourceMappingURL=component---src-templates-product-page-js-a30bad24ed45b5f48531.js.map