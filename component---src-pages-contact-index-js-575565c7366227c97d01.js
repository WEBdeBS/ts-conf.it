(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{151:function(e,M,t){"use strict";t.r(M),t.d(M,"default",function(){return n});t(33),t(177);var N=t(7),j=t.n(N),L=(t(74),t(55),t(178),t(0)),u=t.n(L),a=t(32),c=t(164);var n=function(e){function M(M){var t;return(t=e.call(this,M)||this).handleChange=function(e){var M;t.setState(((M={})[e.target.name]=e.target.value,M))},t.handleSubmit=function(e){e.preventDefault();var M,N=e.target;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(M=Object.assign({"form-name":N.getAttribute("name")},t.state),Object.keys(M).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(M[e])}).join("&"))}).then(function(){return Object(a.navigate)(N.getAttribute("action"))}).catch(function(e){return alert(e)})},t.state={isValidated:!1},t}return j()(M,e),M.prototype.render=function(){return u.a.createElement(c.a,null,u.a.createElement("section",{className:"section"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"content"},u.a.createElement("h1",null,"Contact"),u.a.createElement("form",{name:"contact",method:"post",action:"/contact/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},u.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),u.a.createElement("div",{hidden:!0},u.a.createElement("label",null,"Don’t fill this out:"," ",u.a.createElement("input",{name:"bot-field",onChange:this.handleChange}))),u.a.createElement("div",{className:"field"},u.a.createElement("label",{className:"label",htmlFor:"name"},"Your name"),u.a.createElement("div",{className:"control"},u.a.createElement("input",{className:"input",type:"text",name:"name",onChange:this.handleChange,id:"name",required:!0}))),u.a.createElement("div",{className:"field"},u.a.createElement("label",{className:"label",htmlFor:"email"},"Email"),u.a.createElement("div",{className:"control"},u.a.createElement("input",{className:"input",type:"email",name:"email",onChange:this.handleChange,id:"email",required:!0}))),u.a.createElement("div",{className:"field"},u.a.createElement("label",{className:"label",htmlFor:"message"},"Message"),u.a.createElement("div",{className:"control"},u.a.createElement("textarea",{className:"textarea",name:"message",onChange:this.handleChange,id:"message",required:!0}))),u.a.createElement("div",{className:"field"},u.a.createElement("button",{className:"button is-link",type:"submit"},"Send")))))))},M}(u.a.Component)},157:function(e,M,t){"use strict";t.d(M,"b",function(){return i});var N=t(0),j=t.n(N),L=t(4),u=t.n(L),a=t(32),c=t.n(a);t.d(M,"a",function(){return c.a}),t.d(M,"c",function(){return a.withPrefix});t(159);var n=j.a.createContext({}),i=function(e){return j.a.createElement(n.Consumer,null,function(M){return e.data||M[e.query]&&M[e.query].data?(e.render||e.children)(e.data?e.data.data:M[e.query].data):j.a.createElement("div",null,"Loading (StaticQuery)")})};i.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},158:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTA5IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpmaWdtYT0iaHR0cDovL3d3dy5maWdtYS5jb20vZmlnbWEvbnMiPjx0aXRsZT5Mb2dvPC90aXRsZT48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ3MCkiIGZpZ21hOnR5cGU9ImNhbnZhcyI+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIgZmlnbWE6dHlwZT0idmVjdG9yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDcwKSIgZmlsbD0iI2Y0MCI+PHVzZSB4bGluazpocmVmPSIjYiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjx1c2UgeGxpbms6aHJlZj0iI2MiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWwiLz48dXNlIHhsaW5rOmhyZWY9IiNkIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsIi8+PHVzZSB4bGluazpocmVmPSIjZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjx1c2UgeGxpbms6aHJlZj0iI2YiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWwiLz48L2c+PC9nPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMjIuNzM1IDIzLjE3MWMuMjgzLjMyMy4wNTMuODI5LS4zNzYuODI5aC01LjkwN2MtLjI4NSAwLS41NTYtLjEyMS0uNzQ1LS4zMzNsLTkuNDE0LTEwLjUyNnYxMC4zNmMwIC4yNzYtLjIyNC41LS41LjVoLTUuMjkzYy0uMjc2IDAtLjUtLjIyNC0uNS0uNXYtMjNjMC0uMjc2LjIyNC0uNS41LS41aDUuMjkzYy4yNzYgMCAuNS4yMjQuNS41djkuODE1bDkuMTQxLTkuOTljLjE5LS4yMDcuNDU3LS4zMjUuNzM4LS4zMjVoNS43NjJjLjQzNyAwIC42NjQuNTIxLjM2Ni44NDFsLTkuODUxIDEwLjU2MyAxMC4yODcgMTEuNzY3eiIvPjxwYXRoIGlkPSJjIiBkPSJNNDUuOTkxIDI0Yy0uMTk5IDAtLjM4LS4xMTgtLjQ1OS0uMzAxbC0yLjAyNC00LjY2OWgtMTAuNjdsLTIuMDI0IDQuNjY5Yy0uMDc5LjE4My0uMjU5LjMwMS0uNDU5LjMwMWgtNS4yMTJjLS4zNjYgMC0uNjA4LS4zODEtLjQ1My0uNzEybDEwLjc4Mi0yM2MuMDgyLS4xNzYuMjU5LS4yODguNDUzLS4yODhoNC4zNThjLjE5NCAwIC4zNy4xMTIuNDUzLjI4N2wxMC44MTUgMjNjLjE1Ni4zMzItLjA4Ni43MTMtLjQ1Mi43MTNoLTUuMTA4em0tMTEuMTM1LTkuNjY4aDYuNjM1bC0zLjMxNy03LjY5NC0zLjMxNyA3LjY5NHoiLz48cGF0aCBpZD0iZCIgZD0iTTU1LjUyNSAyNGMtLjI3NiAwLS41LS4yMjQtLjUtLjV2LTIzYzAtLjI3Ni4yMjQtLjUuNS0uNWg1LjI5M2MuMjc2IDAgLjUuMjI0LjUuNXYxOC40MjhoOS43NTljLjI3NiAwIC41LjIyNC41LjV2NC4wNzJjMCAuMjc2LS4yMjQuNS0uNS41aC0xNS41NTJ6Ii8+PHBhdGggaWQ9ImUiIGQ9Ik03NS4yNzkuNWMwLS4yNzYuMjI0LS41LjUtLjVoOS4zMTVjMi42NjcgMCA0Ljk1OS40NzcgNi44NzQgMS40MyAxLjkzOC45NTMgMy40MiAyLjMzOCA0LjQ0NiA0LjE1MyAxLjAyNiAxLjc5MyAxLjUzOSAzLjkyNiAxLjUzOSA2LjQgMCAyLjQ5Ni0uNTEzIDQuNjUyLTEuNTM5IDYuNDY4LTEuMDAzIDEuNzkzLTIuNDc0IDMuMTY2LTQuNDEyIDQuMTE5LTEuOTE1Ljk1My00LjIxOCAxLjQzLTYuOTA4IDEuNDNoLTkuMzE1Yy0uMjc2IDAtLjUtLjIyNC0uNS0uNXYtMjN6bTkuMzcgMTguNDYyYzIuMzcxIDAgNC4xMzgtLjU3OSA1LjMwMS0xLjczNiAxLjE2My0xLjE1NyAxLjc0NC0yLjkwNSAxLjc0NC01LjI0MiAwLTIuMzM4LS41ODEtNC4wNzQtMS43NDQtNS4yMDktMS4xNjMtMS4xNTctMi45My0xLjczNi01LjMwMS0xLjczNmgtMy4wNzh2MTMuOTIzaDMuMDc4eiIvPjxwYXRoIGlkPSJmIiBkPSJNMTAyLjkxMyAyNGMtLjI3NiAwLS41LS4yMjQtLjUtLjV2LTIzYzAtLjI3Ni4yMjQtLjUuNS0uNWg1LjI5M2MuMjc2IDAgLjUuMjI0LjUuNXYyM2MwIC4yNzYtLjIyNC41LS41LjVoLTUuMjkzeiIvPjwvZGVmcz48L3N2Zz4K"},159:function(e,M,t){var N;e.exports=(N=t(165))&&N.default||N},160:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RmFjZWJvb2sgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIyLjY3NiAwSDEuMzI0Qy41OTMgMCAwIC41OTMgMCAxLjMyNHYyMS4zNTJDMCAyMy40MDguNTkzIDI0IDEuMzI0IDI0aDExLjQ5NHYtOS4yOTRIOS42ODl2LTMuNjIxaDMuMTI5VjguNDFjMC0zLjA5OSAxLjg5NC00Ljc4NSA0LjY1OS00Ljc4NSAxLjMyNSAwIDIuNDY0LjA5NyAyLjc5Ni4xNDF2My4yNGgtMS45MjFjLTEuNSAwLTEuNzkyLjcyMS0xLjc5MiAxLjc3MXYyLjMxMWgzLjU4NGwtLjQ2NSAzLjYzSDE2LjU2VjI0aDYuMTE1Yy43MzMgMCAxLjMyNS0uNTkyIDEuMzI1LTEuMzI0VjEuMzI0QzI0IC41OTMgMjMuNDA4IDAgMjIuNjc2IDAiLz48L3N2Zz4="},161:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SW5zdGFncmFtIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xMiAwQzguNzQgMCA4LjMzMy4wMTUgNy4wNTMuMDcyIDUuNzc1LjEzMiA0LjkwNS4zMzMgNC4xNC42M2MtLjc4OS4zMDYtMS40NTkuNzE3LTIuMTI2IDEuMzg0Uy45MzUgMy4zNS42MyA0LjE0Qy4zMzMgNC45MDUuMTMxIDUuNzc1LjA3MiA3LjA1My4wMTIgOC4zMzMgMCA4Ljc0IDAgMTJzLjAxNSAzLjY2Ny4wNzIgNC45NDdjLjA2IDEuMjc3LjI2MSAyLjE0OC41NTggMi45MTMuMzA2Ljc4OC43MTcgMS40NTkgMS4zODQgMi4xMjYuNjY3LjY2NiAxLjMzNiAxLjA3OSAyLjEyNiAxLjM4NC43NjYuMjk2IDEuNjM2LjQ5OSAyLjkxMy41NThDOC4zMzMgMjMuOTg4IDguNzQgMjQgMTIgMjRzMy42NjctLjAxNSA0Ljk0Ny0uMDcyYzEuMjc3LS4wNiAyLjE0OC0uMjYyIDIuOTEzLS41NTguNzg4LS4zMDYgMS40NTktLjcxOCAyLjEyNi0xLjM4NC42NjYtLjY2NyAxLjA3OS0xLjMzNSAxLjM4NC0yLjEyNi4yOTYtLjc2NS40OTktMS42MzYuNTU4LTIuOTEzLjA2LTEuMjguMDcyLTEuNjg3LjA3Mi00Ljk0N3MtLjAxNS0zLjY2Ny0uMDcyLTQuOTQ3Yy0uMDYtMS4yNzctLjI2Mi0yLjE0OS0uNTU4LTIuOTEzLS4zMDYtLjc4OS0uNzE4LTEuNDU5LTEuMzg0LTIuMTI2QzIxLjMxOSAxLjM0NyAyMC42NTEuOTM1IDE5Ljg2LjYzYy0uNzY1LS4yOTctMS42MzYtLjQ5OS0yLjkxMy0uNTU4QzE1LjY2Ny4wMTIgMTUuMjYgMCAxMiAwem0wIDIuMTZjMy4yMDMgMCAzLjU4NS4wMTYgNC44NS4wNzEgMS4xNy4wNTUgMS44MDUuMjQ5IDIuMjI3LjQxNS41NjIuMjE3Ljk2LjQ3NyAxLjM4Mi44OTYuNDE5LjQyLjY3OS44MTkuODk2IDEuMzgxLjE2NC40MjIuMzYgMS4wNTcuNDEzIDIuMjI3LjA1NyAxLjI2Ni4wNyAxLjY0Ni4wNyA0Ljg1cy0uMDE1IDMuNTg1LS4wNzQgNC44NWMtLjA2MSAxLjE3LS4yNTYgMS44MDUtLjQyMSAyLjIyNy0uMjI0LjU2Mi0uNDc5Ljk2LS44OTkgMS4zODItLjQxOS40MTktLjgyNC42NzktMS4zOC44OTYtLjQyLjE2NC0xLjA2NS4zNi0yLjIzNS40MTMtMS4yNzQuMDU3LTEuNjQ5LjA3LTQuODU5LjA3LTMuMjExIDAtMy41ODYtLjAxNS00Ljg1OS0uMDc0LTEuMTcxLS4wNjEtMS44MTYtLjI1Ni0yLjIzNi0uNDIxLS41NjktLjIyNC0uOTYtLjQ3OS0xLjM3OS0uODk5LS40MjEtLjQxOS0uNjktLjgyNC0uOS0xLjM4LS4xNjUtLjQyLS4zNTktMS4wNjUtLjQyLTIuMjM1LS4wNDUtMS4yNi0uMDYxLTEuNjQ5LS4wNjEtNC44NDQgMC0zLjE5Ni4wMTYtMy41ODYuMDYxLTQuODYxLjA2MS0xLjE3LjI1NS0xLjgxNC40Mi0yLjIzNC4yMS0uNTcuNDc5LS45Ni45LTEuMzgxLjQxOS0uNDE5LjgxLS42ODkgMS4zNzktLjg5OC40Mi0uMTY2IDEuMDUxLS4zNjEgMi4yMjEtLjQyMSAxLjI3NS0uMDQ1IDEuNjUtLjA2IDQuODU5LS4wNmwuMDQ1LjAzem0wIDMuNjc4Yy0zLjQwNSAwLTYuMTYyIDIuNzYtNi4xNjIgNi4xNjIgMCAzLjQwNSAyLjc2IDYuMTYyIDYuMTYyIDYuMTYyIDMuNDA1IDAgNi4xNjItMi43NiA2LjE2Mi02LjE2MiAwLTMuNDA1LTIuNzYtNi4xNjItNi4xNjItNi4xNjJ6TTEyIDE2Yy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00IDQgMS43OSA0IDQtMS43OSA0LTQgNHptNy44NDYtMTAuNDA1YzAgLjc5NS0uNjQ2IDEuNDQtMS40NCAxLjQ0LS43OTUgMC0xLjQ0LS42NDYtMS40NC0xLjQ0IDAtLjc5NC42NDYtMS40MzkgMS40NC0xLjQzOS43OTMtLjAwMSAxLjQ0LjY0NSAxLjQ0IDEuNDM5eiIvPjwvc3ZnPg=="},162:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuOTU0IDQuNTY5Yy0uODg1LjM4OS0xLjgzLjY1NC0yLjgyNS43NzUgMS4wMTQtLjYxMSAxLjc5NC0xLjU3NCAyLjE2My0yLjcyMy0uOTUxLjU1NS0yLjAwNS45NTktMy4xMjcgMS4xODQtLjg5Ni0uOTU5LTIuMTczLTEuNTU5LTMuNTkxLTEuNTU5LTIuNzE3IDAtNC45MiAyLjIwMy00LjkyIDQuOTE3IDAgLjM5LjA0NS43NjUuMTI3IDEuMTI0QzcuNjkxIDguMDk0IDQuMDY2IDYuMTMgMS42NCAzLjE2MWMtLjQyNy43MjItLjY2NiAxLjU2MS0uNjY2IDIuNDc1IDAgMS43MS44NyAzLjIxMyAyLjE4OCA0LjA5Ni0uODA3LS4wMjYtMS41NjYtLjI0OC0yLjIyOC0uNjE2di4wNjFjMCAyLjM4NSAxLjY5MyA0LjM3NCAzLjk0NiA0LjgyNy0uNDEzLjExMS0uODQ5LjE3MS0xLjI5Ni4xNzEtLjMxNCAwLS42MTUtLjAzLS45MTYtLjA4Ni42MzEgMS45NTMgMi40NDUgMy4zNzcgNC42MDQgMy40MTctMS42OCAxLjMxOS0zLjgwOSAyLjEwNS02LjEwMiAyLjEwNS0uMzkgMC0uNzc5LS4wMjMtMS4xNy0uMDY3IDIuMTg5IDEuMzk0IDQuNzY4IDIuMjA5IDcuNTU3IDIuMjA5IDkuMDU0IDAgMTMuOTk5LTcuNDk2IDEzLjk5OS0xMy45ODYgMC0uMjA5IDAtLjQyLS4wMTUtLjYzLjk2MS0uNjg5IDEuOC0xLjU2IDIuNDYtMi41NDhsLS4wNDctLjAyeiIvPjwvc3ZnPg=="},163:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VmltZW8gaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIzLjk3NyA2LjQxNmMtLjEwNSAyLjMzOC0xLjczOSA1LjU0My00Ljg5NCA5LjYwOS0zLjI2OCA0LjI0Ny02LjAyNiA2LjM3LTguMjkgNi4zNy0xLjQwOSAwLTIuNTc4LTEuMjk0LTMuNTUzLTMuODgxTDUuMzIyIDExLjRDNC42MDMgOC44MTYgMy44MzQgNy41MjIgMy4wMSA3LjUyMmMtLjE3OSAwLS44MDYuMzc4LTEuODgxIDEuMTMyTDAgNy4xOTdjMS4xODUtMS4wNDQgMi4zNTEtMi4wODQgMy41MDEtMy4xMjhDNS4wOCAyLjcwMSA2LjI2NiAxLjk4NCA3LjA1NSAxLjkxYzEuODY3LS4xOCAzLjAxNiAxLjEgMy40NDcgMy44MzguNDY1IDIuOTUzLjc4OSA0Ljc4OS45NzEgNS41MDcuNTM5IDIuNDUgMS4xMzEgMy42NzQgMS43NzYgMy42NzQuNTAyIDAgMS4yNTYtLjc5NiAyLjI2NS0yLjM4NSAxLjAwNC0xLjU4OSAxLjU0LTIuNzk3IDEuNjEyLTMuNjI4LjE0NC0xLjM3MS0uMzk1LTIuMDYxLTEuNjE0LTIuMDYxLS41NzQgMC0xLjE2Ny4xMjEtMS43NzcuMzkxIDEuMTg2LTMuODY4IDMuNDM0LTUuNzU3IDYuNzYyLTUuNjM3IDIuNDczLjA2IDMuNjI4IDEuNjY0IDMuNDkzIDQuNzk3bC0uMDEzLjAxeiIvPjwvc3ZnPg=="},164:function(e,M,t){"use strict";var N=t(0),j=t.n(N),L=t(168),u=t.n(L),a=t(7),c=t.n(a),n=t(157),i=t(158),y=t.n(i),I=(t(160),t(161),t(162),t(163),function(e){function M(){return e.apply(this,arguments)||this}return c()(M,e),M.prototype.render=function(){return j.a.createElement("footer",{className:"site-footer"},j.a.createElement("div",{className:"container"},j.a.createElement("div",{className:"row mb-5"},j.a.createElement("div",{className:"col-md-4"},j.a.createElement("h2",{className:"footer-heading text-uppercase mb-4"},"About Event"),j.a.createElement("p",null,"A new amazing conference by WEBdeBS! On 25 October 2019 unite with the whole Italian TypeScript Community!")),j.a.createElement("div",{className:"col-md-3 ml-auto"},j.a.createElement("h2",{className:"footer-heading text-uppercase mb-4"},"Quick Links"),j.a.createElement("ul",{className:"list-unstyled"},j.a.createElement("li",null,j.a.createElement("a",{href:"#call-for-paper"},"Call for paper")),j.a.createElement("li",null,j.a.createElement("a",{href:"#newsletter"},"Newsletter")),j.a.createElement("li",null,j.a.createElement("a",{href:"#code-of-conduct"},"Code of Conduct")),j.a.createElement("li",null,j.a.createElement("a",{href:"#location"},"Location")))),j.a.createElement("div",{className:"col-md-4"},j.a.createElement("h2",{className:"footer-heading text-uppercase mb-4"},"Connect with Us"),j.a.createElement("p",null,j.a.createElement("a",{href:"https://www.facebook.com/webdebs/",className:"p-2 pl-0",target:"_blank"},j.a.createElement("span",{className:"icon-facebook"})),j.a.createElement("a",{href:"https://twitter.com/ConfTs",className:"p-2",target:"_blank"},j.a.createElement("span",{className:"icon-twitter"}))))),j.a.createElement("div",{className:"row"},j.a.createElement("div",{className:"col-md-12 text-center"},j.a.createElement("div",{className:"border-top pt-5"},j.a.createElement("p",null,"Copyright © WEBdeBS 2019",j.a.createElement("br",null),"WEBdeBS - Associazione di Promozione Sociale senza scopo di lucro ",j.a.createElement("a",{href:"http://www.webdebs.org",target:"_blank",rel:"noopener noreferrer"},"www.webdebs.org")," - ",j.a.createElement("a",{href:"mailto:info@webdebs.org"},"info@webdebs.org")))))))},M}(j.a.Component)),T=t(166),D=t.n(T),s=(j.a.Component,t(169),t(167)),l=function(){return s.data.site.siteMetadata},z=t(170);M.a=function(e){var M=e.children,t=l(),L=t.title,a=t.description,c=Object(N.useState)(!1),i=c[0],y=c[1];return j.a.createElement("div",null,j.a.createElement(u.a,null,j.a.createElement("html",{lang:"it"}),j.a.createElement("title",null,L),j.a.createElement("meta",{name:"description",content:a}),j.a.createElement("meta",{charset:"utf-8"}),j.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),j.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Mono",rel:"stylesheet"}),j.a.createElement("link",{rel:"stylesheet",href:"/fonts/icomoon/style.css"}),j.a.createElement("link",{rel:"stylesheet",href:"/css/magnific-popup.css"}),j.a.createElement("link",{rel:"stylesheet",href:"/css/jquery-ui.css"}),j.a.createElement("link",{rel:"stylesheet",href:"/css/owl.carousel.min.css"}),j.a.createElement("link",{rel:"stylesheet",href:"/css/owl.theme.default.min.css"}),j.a.createElement("link",{rel:"stylesheet",href:"/css/bootstrap-datepicker.css"}),j.a.createElement("link",{rel:"stylesheet",href:"/fonts/flaticon/font/flaticon.css"}),j.a.createElement("link",{rel:"stylesheet",href:"/css/aos.css"}),i&&j.a.createElement("script",{type:"text/javascript",async:!0,defer:!0,src:Object(n.c)("/js/statistics-scripts.js")})),j.a.createElement("div",null,M),j.a.createElement(I,null),j.a.createElement(z.CookieBanner,{message:"This site is able to use the cookies needed to use the cookie policy. To learn more or opt out, see the cookie policy. By accepting it you consent to use cookies.",acceptButtonText:"Consent",necessaryOptionText:"Required / Tech",statisticsOptionText:"Analytics",showMarketingOption:!1,privacyPolicyLinkText:"Privacy and Cookie policy",policyLink:"/privacy",showPreferencesOption:!1,onAccept:function(){},onAcceptPreferences:function(){!0!==i&&y(!0)},onAcceptStatistics:function(){},styles:{dialog:{position:"fixed",bottom:"0",left:"0",right:"0",zIndex:"100000",backgroundColor:"#f8f7f7",padding:"10px"}}}))}},165:function(e,M,t){"use strict";t.r(M);t(33);var N=t(0),j=t.n(N),L=t(4),u=t.n(L),a=t(54),c=t(2),n=function(e){var M=e.location,t=c.default.getResourcesForPathnameSync(M.pathname);return j.a.createElement(a.a,Object.assign({location:M,pageResources:t},t.json))};n.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},M.default=n},166:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDM4LjU0OXB4IiBoZWlnaHQ9IjQzOC41NDlweCIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0OSA0MzguNTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSAgIGMtMzkuNzgxLDAtNzYuNDcyLDkuODA0LTExMC4wNjMsMjkuNDA4Yy0zMy41OTYsMTkuNjA1LTYwLjE5Miw0Ni4yMDQtNzkuOCw3OS44QzkuODAzLDE0OC4xNjgsMCwxODQuODU0LDAsMjI0LjYzICAgYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NiAgIGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiAgIGMtNC4xODcsMC43NjctOS40NjksMS4wOTItMTUuODQ2LDFjLTYuMzc0LTAuMDg5LTEyLjk5MS0wLjc1Ny0xOS44NDItMS45OTljLTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OSAgIGMtNS44OTgtNC40NzMtMTAuMDg1LTEwLjMyOC0xMi41Ni0xNy41NTZsLTIuODU1LTYuNTdjLTEuOTAzLTQuMzc0LTQuODk5LTkuMjMzLTguOTkyLTE0LjU1OSAgIGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyAgIGMtMC41NzItMS4zMzUtMC4wOTgtMi40MywxLjQyNy0zLjI4OWMxLjUyNS0wLjg1OSw0LjI4MS0xLjI3Niw4LjI4LTEuMjc2bDUuNzA4LDAuODUzYzMuODA3LDAuNzYzLDguNTE2LDMuMDQyLDE0LjEzMyw2Ljg1MSAgIGM1LjYxNCwzLjgwNiwxMC4yMjksOC43NTQsMTMuODQ2LDE0Ljg0MmM0LjM4LDcuODA2LDkuNjU3LDEzLjc1NCwxNS44NDYsMTcuODQ3YzYuMTg0LDQuMDkzLDEyLjQxOSw2LjEzNiwxOC42OTksNi4xMzYgICBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxICAgYy0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTRjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5Ni0yNi44MzUtMTEuMTRjLTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNiAgIGMtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OWMtMy45MDEtMTIuMzc0LTUuODUyLTI2LjY0OC01Ljg1Mi00Mi44MjZjMC0yMy4wMzUsNy41Mi00Mi42MzcsMjIuNTU3LTU4LjgxNyAgIGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCAgIGM1LjA0NiwzLjA0MSw5LjA4OSw1LjYxOCwxMi4xMzUsNy43MDhjMTcuNzA1LTQuOTQ3LDM1Ljk3Ni03LjQyMSw1NC44MTgtNy40MjFzMzcuMTE3LDIuNDc0LDU0LjgyMyw3LjQyMWwxMC44NDktNi44NDkgICBjNy40MTktNC41NywxNi4xOC04Ljc1OCwyNi4yNjItMTIuNTY1YzEwLjA4OC0zLjgwNSwxNy44MDItNC44NTMsMjMuMTM0LTMuMTM4YzguNTYyLDIxLjUwOSw5LjMyNSw0MC45MjIsMi4yNzksNTguMjQgICBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5ICAgYy02LjE5MSw3LjUyMS0xMy45MDEsMTMuODUtMjMuMTMxLDE4Ljk4NmMtOS4yMzIsNS4xNC0xOC4xODIsOC44NS0yNi44NCwxMS4xMzZjLTguNjYyLDIuMjg2LTE4LjQxNSw0LjAwNC0yOS4yNjMsNS4xNDYgICBjOS44OTQsOC41NjIsMTQuODQyLDIyLjA3NywxNC44NDIsNDAuNTM5djYwLjIzN2MwLDMuNDIyLDEuMTksNi4yNzksMy41NzIsOC41NjJjMi4zNzksMi4yNzksNi4xMzYsMi45NSwxMS4yNzYsMS45OTUgICBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2ICAgQzQzOC41MzYsMTg0Ljg1MSw0MjguNzI4LDE0OC4xNjgsNDA5LjEzMiwxMTQuNTczeiIvPgo8L2c+CjxkaXYgeG1sbnM9IiIgaWQ9ImRpdlNjcmlwdHNVc2VkIiBzdHlsZT0iZGlzcGxheTogbm9uZSIvPjxzY3JpcHQgeG1sbnM9IiIgaWQ9Imdsb2JhbFZhcnNEZXRlY3Rpb24iIHNyYz0iY2hyb21lLWV4dGVuc2lvbjovL2Nta2RibWZuZGtmZ2VibGRobmtiZmhsbmVlZmRhYWlwL2pzL3dyc19lbnYuanMiLz48L3N2Zz4K"},167:function(e){e.exports={data:{site:{siteMetadata:{title:"TSconf 2019 by WEBdeBs",description:"TSconf 2019 by WEBdeBs: First Italian TypeScript Conference. Desenzano 25th October 2019"}}}}},177:function(e,M,t){var N=t(25).f,j=Function.prototype,L=/^\s*function ([^ (]*)/;"name"in j||t(18)&&N(j,"name",{configurable:!0,get:function(){try{return(""+this).match(L)[1]}catch(e){return""}}})},178:function(e,M,t){var N=t(26),j=t(34);t(179)("keys",function(){return function(e){return j(N(e))}})},179:function(e,M,t){var N=t(11),j=t(17),L=t(19);e.exports=function(e,M){var t=(j.Object||{})[e]||Object[e],u={};u[e]=M(t),N(N.S+N.F*L(function(){t(1)}),"Object",u)}}}]);
//# sourceMappingURL=component---src-pages-contact-index-js-575565c7366227c97d01.js.map