(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"AboutPageTemplate",function(){return i}),a.d(t,"aboutPageQuery",function(){return u});var n=a(0),r=a.n(n),c=a(4),s=a.n(c),o=a(159),l=a(166),i=function(e){var t=e.title,a=e.content,n=e.contentComponent||l.b;return r.a.createElement("section",{className:"section section--gradient"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-10 is-offset-1"},r.a.createElement("div",{className:"section"},r.a.createElement("h2",{className:"title is-size-3 has-text-weight-bold is-bold-light"},t),r.a.createElement(n,{className:"content",content:a}))))))};i.propTypes={title:s.a.string.isRequired,content:s.a.string,contentComponent:s.a.func};var m=function(e){var t=e.data.markdownRemark;return r.a.createElement(o.a,null,r.a.createElement(i,{contentComponent:l.a,title:t.frontmatter.title,content:t.html}))};m.propTypes={data:s.a.object.isRequired},t.default=m;var u="3047988929"},157:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},158:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),c=a(4),s=a.n(c),o=a(32),l=a.n(o);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return o.withPrefix});a(157);var i=r.a.createContext({}),m=function(e){return r.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},159:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(162),s=a.n(c),o=a(7),l=a.n(o),i=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mb-5"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h2",{className:"footer-heading text-uppercase mb-4"},"About Event"),r.a.createElement("p",null,"A new amazing conference by WEBdeBS! On 25 October 2019 unite with the whole Italian TypeScript Community!")),r.a.createElement("div",{className:"col-md-3 ml-auto"},r.a.createElement("h2",{className:"footer-heading text-uppercase mb-4"},"Quick Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#speakers"},"Speakers")),r.a.createElement("li",null,r.a.createElement("a",{href:"#tickets"},"Tickets")),r.a.createElement("li",null,r.a.createElement("a",{href:"#newsletter"},"Newsletter")),r.a.createElement("li",null,r.a.createElement("a",{href:"#code-of-conduct"},"Code of Conduct")),r.a.createElement("li",null,r.a.createElement("a",{href:"#location"},"Location")))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h2",{className:"footer-heading text-uppercase mb-4"},"Connect with Us"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.facebook.com/webdebs/",className:"p-2 pl-0",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-facebook"})),r.a.createElement("a",{href:"https://twitter.com/ConfTs",className:"p-2",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-twitter"}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("div",{className:"border-top pt-5"},r.a.createElement("p",null,"Copyright © WEBdeBS 2019",r.a.createElement("br",null),"WEBdeBS - Associazione di Promozione Sociale senza scopo di lucro ",r.a.createElement("a",{href:"http://www.webdebs.org",target:"_blank",rel:"noopener noreferrer"},"www.webdebs.org")," - ",r.a.createElement("a",{href:"mailto:info@webdebs.org"},"info@webdebs.org")))))))},t}(r.a.Component),m=a(158),u=(a(163),a(161)),p=function(){return u.data.site.siteMetadata},d=a(164);t.a=function(e){var t=e.children,a=p(),c=a.title,o=a.description,l=Object(n.useState)(!1),u=l[0],f=l[1];return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement("html",{lang:"it"}),r.a.createElement("title",null,c),r.a.createElement("meta",{name:"description",content:o}),r.a.createElement("meta",{charset:"utf-8"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Mono",rel:"stylesheet"}),r.a.createElement("link",{rel:"stylesheet",href:"/fonts/icomoon/style.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/magnific-popup.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/jquery-ui.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/owl.carousel.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/owl.theme.default.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/bootstrap-datepicker.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/fonts/flaticon/font/flaticon.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/aos.css"}),u&&r.a.createElement("script",{type:"text/javascript",async:!0,defer:!0,src:Object(m.c)("/js/statistics-scripts.js")})),r.a.createElement("div",null,t),r.a.createElement(i,null),r.a.createElement(d.CookieBanner,{message:"This site is able to use the cookies needed to use the cookie policy. To learn more or opt out, see the cookie policy. By accepting it you consent to use cookies.",acceptButtonText:"Consent",necessaryOptionText:"Required / Tech",statisticsOptionText:"Analytics",showMarketingOption:!1,privacyPolicyLinkText:"Privacy and Cookie policy",policyLink:"/privacy",showPreferencesOption:!1,onAccept:function(){},onAcceptPreferences:function(){!0!==u&&f(!0)},onAcceptStatistics:function(){},styles:{dialog:{position:"fixed",bottom:"0",left:"0",right:"0",zIndex:"100000",backgroundColor:"#f8f7f7",padding:"10px"}}}))}},160:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),o=a(54),l=a(2),i=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};i.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=i},161:function(e){e.exports={data:{site:{siteMetadata:{title:"TSconf 2019 by WEBdeBs",description:"TSconf 2019 by WEBdeBs: First Italian TypeScript Conference. Desenzano 25th October 2019"}}}}},166:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n),c=a(4),s=a.n(c),o=function(e){var t=e.content,a=e.className;return r.a.createElement("div",{className:a,dangerouslySetInnerHTML:{__html:t}})},l=function(e){var t=e.content,a=e.className;return r.a.createElement("div",{className:a},t)};l.propTypes={content:s.a.node,className:s.a.string},o.propTypes=l.propTypes,t.b=l}}]);
//# sourceMappingURL=component---src-templates-about-page-js-b1bacb421c800356d68f.js.map