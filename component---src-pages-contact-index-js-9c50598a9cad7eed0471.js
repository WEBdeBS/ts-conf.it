(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s});a(33),a(169);var n=a(7),r=a.n(n),c=(a(74),a(55),a(170),a(0)),l=a.n(c),o=a(32),i=a(161);var s=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){e.preventDefault();var t,n=e.target;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object.assign({"form-name":n.getAttribute("name")},a.state),Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"))}).then(function(){return Object(o.navigate)(n.getAttribute("action"))}).catch(function(e){return alert(e)})},a.state={isValidated:!1},a}return r()(t,e),t.prototype.render=function(){return l.a.createElement(i.a,null,l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Contact"),l.a.createElement("form",{name:"contact",method:"post",action:"/contact/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),l.a.createElement("div",{hidden:!0},l.a.createElement("label",null,"Don’t fill this out:"," ",l.a.createElement("input",{name:"bot-field",onChange:this.handleChange}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"name"},"Your name"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",name:"name",onChange:this.handleChange,id:"name",required:!0}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"email"},"Email"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"email",name:"email",onChange:this.handleChange,id:"email",required:!0}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"message"},"Message"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{className:"textarea",name:"message",onChange:this.handleChange,id:"message",required:!0}))),l.a.createElement("div",{className:"field"},l.a.createElement("button",{className:"button is-link",type:"submit"},"Send")))))))},t}(l.a.Component)},157:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},158:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=a(32),i=a.n(o);a.d(t,"a",function(){return i.a}),a.d(t,"c",function(){return o.withPrefix});a(157);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},159:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=a(54),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},160:function(e){e.exports={data:{site:{siteMetadata:{title:"TSconf 2019 by WEBdeBs",description:"TSconf 2019 by WEBdeBs: First Italian TypeScript Conference. Desenzano 25th October 2019"}}}}},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(162),l=a.n(c),o=a(7),i=a.n(o),s=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mb-5"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h2",{className:"footer-heading text-uppercase mb-4"},"About Event"),r.a.createElement("p",null,"A new amazing conference by WEBdeBS! On 25 October 2019 unite with the whole Italian TypeScript Community!")),r.a.createElement("div",{className:"col-md-3 ml-auto"},r.a.createElement("h2",{className:"footer-heading text-uppercase mb-4"},"Quick Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#speakers"},"Speakers")),r.a.createElement("li",null,r.a.createElement("a",{href:"#schedule"},"Schedule")),r.a.createElement("li",null,r.a.createElement("a",{href:"#tickets"},"Tickets")),r.a.createElement("li",null,r.a.createElement("a",{href:"#newsletter"},"Newsletter")),r.a.createElement("li",null,r.a.createElement("a",{href:"#code-of-conduct"},"Code of Conduct")),r.a.createElement("li",null,r.a.createElement("a",{href:"#location"},"Location")))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h2",{className:"footer-heading text-uppercase mb-4"},"Connect with Us"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.facebook.com/webdebs/",className:"p-2 pl-0",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-facebook"})),r.a.createElement("a",{href:"https://twitter.com/ConfTs",className:"p-2",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-twitter"}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("div",{className:"border-top pt-5"},r.a.createElement("p",null,"Copyright © WEBdeBS 2019",r.a.createElement("br",null),"WEBdeBS - Associazione di Promozione Sociale senza scopo di lucro ",r.a.createElement("a",{href:"http://www.webdebs.org",target:"_blank",rel:"noopener"},"www.webdebs.org")," - ",r.a.createElement("a",{href:"mailto:info@webdebs.org"},"info@webdebs.org")))))))},t}(r.a.Component),m=a(158),u=(a(163),a(160)),d=function(){return u.data.site.siteMetadata},f=a(164);t.a=function(e){var t=e.children,a=d(),c=a.title,o=a.description,i=Object(n.useState)(!1),u=i[0],h=i[1];return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"it"}),r.a.createElement("title",null,c),r.a.createElement("meta",{name:"description",content:o}),r.a.createElement("meta",{charset:"utf-8"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Mono",rel:"stylesheet"}),r.a.createElement("link",{rel:"stylesheet",href:"/fonts/icomoon/style.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/magnific-popup.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/jquery-ui.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/owl.carousel.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/owl.theme.default.min.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/bootstrap-datepicker.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/fonts/flaticon/font/flaticon.css"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/aos.css"}),u&&r.a.createElement("script",{type:"text/javascript",async:!0,defer:!0,src:Object(m.c)("/js/statistics-scripts.js")})),r.a.createElement("div",null,t),r.a.createElement(s,null),r.a.createElement(f.CookieBanner,{message:"This site is able to use the cookies needed to use the cookie policy. To learn more or opt out, see the cookie policy. By accepting it you consent to use cookies.",acceptButtonText:"Consent",necessaryOptionText:"Required / Tech",statisticsOptionText:"Analytics",showMarketingOption:!1,privacyPolicyLinkText:"Privacy and Cookie policy",policyLink:"/privacy",showPreferencesOption:!1,onAccept:function(){},onAcceptPreferences:function(){!0!==u&&h(!0)},onAcceptStatistics:function(){},styles:{dialog:{position:"fixed",bottom:"0",left:"0",right:"0",zIndex:"100000",backgroundColor:"#f8f7f7",padding:"10px"}}}))}},169:function(e,t,a){var n=a(25).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},170:function(e,t,a){var n=a(26),r=a(34);a(171)("keys",function(){return function(e){return r(n(e))}})},171:function(e,t,a){var n=a(11),r=a(17),c=a(19);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],l={};l[e]=t(a),n(n.S+n.F*c(function(){a(1)}),"Object",l)}}}]);
//# sourceMappingURL=component---src-pages-contact-index-js-9c50598a9cad7eed0471.js.map