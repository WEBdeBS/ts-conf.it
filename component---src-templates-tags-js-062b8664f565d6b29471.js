(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"tagPageQuery",function(){return d});var n=a(7),r=a.n(n),c=a(0),l=a.n(c),s=a(162),o=a.n(s),i=a(158),m=a(161),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges.map(function(e){return l.a.createElement("li",{key:e.node.fields.slug},l.a.createElement(i.a,{to:e.node.fields.slug},l.a.createElement("h2",{className:"is-size-2"},e.node.frontmatter.title)))}),t=this.props.pageContext.tag,a=this.props.data.site.siteMetadata.title,n=this.props.data.allMarkdownRemark.totalCount,r=n+" post"+(1===n?"":"s")+" tagged with “"+t+"”";return l.a.createElement(m.a,null,l.a.createElement("section",{className:"section"},l.a.createElement(o.a,{title:t+" | "+a}),l.a.createElement("div",{className:"container content"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-10 is-offset-1",style:{marginBottom:"6rem"}},l.a.createElement("h3",{className:"title is-size-4 is-bold-light"},r),l.a.createElement("ul",{className:"taglist"},e),l.a.createElement("p",null,l.a.createElement(i.a,{to:"/tags/"},"Browse all tags")))))))},t}(l.a.Component);t.default=u;var d="4202630850"},157:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},158:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=a(32),o=a.n(s);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return s.withPrefix});a(157);var i=r.a.createContext({}),m=function(e){return r.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},159:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=a(54),o=a(2),i=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};i.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=i},160:function(e){e.exports={data:{site:{siteMetadata:{title:"TSconf 2019 by WEBdeBs",description:"TSconf 2019 by WEBdeBs: First Italian TypeScript Conference. Desenzano 25th October 2019"}}}}},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(162),l=a.n(c),s=a(7),o=a.n(s),i=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mb-5"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h2",{className:"footer-heading text-uppercase mb-4"},"About Event"),r.a.createElement("p",null,"A new amazing conference by WEBdeBS! On 25 October 2019 unite with the whole Italian TypeScript Community!")),r.a.createElement("div",{className:"col-md-3 ml-auto"},r.a.createElement("h2",{className:"footer-heading text-uppercase mb-4"},"Quick Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#speakers"},"Speakers")),r.a.createElement("li",null,r.a.createElement("a",{href:"#schedule"},"Schedule")),r.a.createElement("li",null,r.a.createElement("a",{href:"#tickets"},"Tickets")),r.a.createElement("li",null,r.a.createElement("a",{href:"#newsletter"},"Newsletter")),r.a.createElement("li",null,r.a.createElement("a",{href:"#code-of-conduct"},"Code of Conduct")),r.a.createElement("li",null,r.a.createElement("a",{href:"#location"},"Location")))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h2",{className:"footer-heading text-uppercase mb-4"},"Connect with Us"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.facebook.com/webdebs/",className:"p-2 pl-0",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-facebook"})),r.a.createElement("a",{href:"https://twitter.com/ConfTs",className:"p-2",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-twitter"}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("div",{className:"border-top pt-5"},r.a.createElement("p",null,"Copyright © WEBdeBS 2019",r.a.createElement("br",null),"WEBdeBS - Associazione di Promozione Sociale senza scopo di lucro ",r.a.createElement("a",{href:"http://www.webdebs.org",target:"_blank",rel:"noopener"},"www.webdebs.org")," - ",r.a.createElement("a",{href:"mailto:info@webdebs.org"},"info@webdebs.org")))))))},t}(r.a.Component),m=a(158),u=(a(163),a(160)),d=function(){return u.data.site.siteMetadata},p=a(164);t.a=function(e){var t=e.children,a=d(),c=a.title,s=a.description,o=Object(n.useState)(!1),u=o[0],f=o[1];return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"it"}),r.a.createElement("title",null,c),r.a.createElement("meta",{name:"description",content:s}),r.a.createElement("meta",{charset:"utf-8"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Mono",rel:"stylesheet"}),r.a.createElement("link",{rel:"stylesheet",href:"/fonts/icomoon/style.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/magnific-popup.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/jquery-ui.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/owl.carousel.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/owl.theme.default.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/bootstrap-datepicker.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/fonts/flaticon/font/flaticon.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/aos.css"}),u&&r.a.createElement("script",{type:"text/javascript",async:!0,defer:!0,src:Object(m.c)("/js/statistics-scripts.js")})),r.a.createElement("div",null,t),r.a.createElement(i,null),r.a.createElement(p.CookieBanner,{message:"This site is able to use the cookies needed to use the cookie policy. To learn more or opt out, see the cookie policy. By accepting it you consent to use cookies.",acceptButtonText:"Consent",necessaryOptionText:"Required / Tech",statisticsOptionText:"Analytics",showMarketingOption:!1,privacyPolicyLinkText:"Privacy and Cookie policy",policyLink:"/privacy",showPreferencesOption:!1,onAccept:function(){},onAcceptPreferences:function(){!0!==u&&f(!0)},onAcceptStatistics:function(){},styles:{dialog:{position:"fixed",bottom:"0",left:"0",right:"0",zIndex:"100000",backgroundColor:"#f8f7f7",padding:"10px"}}}))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-062b8664f565d6b29471.js.map