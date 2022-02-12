(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7368:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var i=n(7294),o=n(9008),a=n(1664),s=n(7625),r=n(615),l=n(6010),c=n(3632),d=n(7379),h=n(316),m=d.ZP.main.withConfig({displayName:"homestyled__Wrapper",componentId:"sc-1hkjacp-0"})(["width:100%;"]),u={Container:d.ZP.section.withConfig({displayName:"homestyled__SectionContainer",componentId:"sc-1hkjacp-1"})(["width:100%;height:650px;padding:70px 0;&.hero{padding:0;height:100vh;}&.skills{background:linear-gradient( to right,"," 50%,"," 50% );}&.about{background:",";}&.w-navigation{button{&:not(:last-child){margin-right:20px;}}}"],h.Z.sectionBg,h.Z.primary,h.Z.aboutBg)},p={Skills:d.ZP.div.withConfig({displayName:"homestyled__NavigationSkills",componentId:"sc-1hkjacp-2"})(["display:flex;flex-direction:row;justify-content:space-evenly;height:50px;margin-top:70px;"])},x={Container:d.ZP.ul.withConfig({displayName:"homestyled__GridContainer",componentId:"sc-1hkjacp-3"})(['display:grid;gap:1rem;margin:50px 0 0 0;list-style:none;width:100%;height:auto;padding:0;grid-template-columns:repeat(2,minmax(0,1fr));&.projects{grid-template-columns:repeat(3,minmax(0,1fr));a{transition:transform 300ms ease-out 300ms;&:hover{opacity:1;transform:translate(0,-5px);z-index:1;cursor:pointer;&::after{opacity:1;}}&::after{border-radius:20px;content:"";height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity 300ms ease-out 300ms;width:100%;z-index:-1;}}}']),Card:d.ZP.div.withConfig({displayName:"homestyled__GridCard",componentId:"sc-1hkjacp-4"})(["display:flex;width:100%;height:100%;background:transparent;&.work-exp{border-radius:16px;transition:transform 300ms ease-out 300ms;&:hover{transform:translate(0,-5px);z-index:1;cursor:pointer;&::after{opacity:1;}}&::after{border-radius:0.9375em;background:",';box-shadow:0px 6px 9px #0000004b;content:"";height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity 300ms ease-out 300ms;width:100%;z-index:-1;}}'],h.Z.secondary),CardContent:d.ZP.div.withConfig({displayName:"homestyled__GridCardContent",componentId:"sc-1hkjacp-5"})(["display:flex;flex-direction:column;width:100%;padding:0 55px 0 0;&.work-exp{padding:50px 55px;text-align:start;justify-content:start;}&.skills-icons{padding:0;flex-direction:row;justify-content:space-evenly;a{&:first-child{margin-bottom:40px;}&:hover{opacity:1;}}}&.about{padding:0;}"]),CardList:d.ZP.ul.withConfig({displayName:"homestyled__GridCardList",componentId:"sc-1hkjacp-6"})(["margin:35px 0 0 0;display:flex;flex-direction:column;list-style:none;&.default{margin:0;padding:0;justify-content:space-between;}li{font-size:17px;color:",';letter-spacing:0.83px;font-family:"Karla";&.work-exp::before{content:"\u2022";color:',";font-weight:bold;display:inline-block;width:1em;margin-left:-1em;font-size:35px;}}"],h.Z.white,h.Z.white),CardIcon:d.ZP.div.withConfig({displayName:"homestyled__GridCardIcon",componentId:"sc-1hkjacp-7"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:",";border-radius:20px;width:150px;height:180px;transition:300ms;&:hover{cursor:pointer;.icon{&-graphql{color:",";}&-laravel{color:",";}&-react{color:",";}&-prisma{color:",";}&-nodejs{color:",";}&-vue path{fill:",";&:last-child{fill:",";}}}.skill-title{color:",";}}"],h.Z.sectionBg,h.Z.iconGraphQl,h.Z.iconLaravel,h.Z.iconReact,h.Z.iconPrisma,h.Z.iconNodeJs,h.Z.iconVueFirst,h.Z.iconVueLast,h.Z.white)},f=d.ZP.div.withConfig({displayName:"homestyled__Bar",componentId:"sc-1hkjacp-8"})(["display:flex;position:relative;width:100%;height:15px;border:1px solid ",";margin-top:15px;.fill{background:",";position:absolute;top:0;left:0;width:",";height:inherit;}"],h.Z.barBg,h.Z.barBg,(function(e){return e.width})),g=n(7413),j=n(2193),y=n(5893),N=(0,c.pq)(c.ZH.sort((function(e,t){return Number(t.id)-Number(e.id)})).slice().splice(0,c.ZH.length),3),w=function(){var e=i.useState(0),t=(0,s.Z)(e,2),n=t[0],o=t[1];return(0,y.jsx)(u.Container,{id:"projects",className:"container w-navigation",children:(0,y.jsxs)(g.Nm.Col,{className:"h-100 align-items-center justify-content-between",children:[(0,y.jsxs)(g.Nm.Col,{className:"h-100 align-items-center",children:[(0,y.jsx)(g.xv.Title,{className:"heading",children:"Projects"}),(0,y.jsx)(r.lr,{emulateTouch:!0,infiniteLoop:!0,interval:36e5,transitionTime:200,showThumbs:!1,showIndicators:!1,showStatus:!1,showArrows:!1,selectedItem:n,onChange:function(e){return o(e)},children:N.map((function(e,t){return(0,y.jsx)(x.Container,{className:"h-100 projects",children:e.map((function(e){return(0,y.jsx)(a.default,{passHref:!0,href:e.url,children:(0,y.jsx)("a",{href:"replace",target:"_blank",children:(0,y.jsx)(x.Card,{children:(0,y.jsx)(g.Ee.Project,{src:e.image,alt:"projects"})})})},e.id)}))},t)}))})]}),(0,y.jsx)(g.Nm.Row,{children:N.map((function(e,t){return(0,y.jsx)(j.W_.Button,{type:"button",className:(0,l.Z)("projects",{active:n===t}),onClick:function(){return o(t)}},t)}))})]})})},b=(0,c.pq)(c.A0.sort((function(e,t){return Number(e.order)-Number(t.order)})).slice().splice(0,c.A0.length),2),C=function(){return(0,y.jsx)(u.Container,{id:"skills",className:"skills w-navigation",children:(0,y.jsxs)(g.Nm.Col,{className:"container h-100",children:[(0,y.jsxs)(g.Nm.Col,{className:"h-100",children:[(0,y.jsx)(g.xv.Title,{className:"heading",children:"Skills"}),(0,y.jsxs)(x.Container,{className:"h-100",children:[(0,y.jsx)(x.Card,{children:(0,y.jsx)(x.CardContent,{children:(0,y.jsx)(x.CardList,{className:"default h-100",children:c.A0.sort((function(e,t){return Number(e.id)-Number(t.id)})).map((function(e){return(0,y.jsxs)("li",{children:[(0,y.jsx)(g.xv.SubTitle,{className:"light",children:e.label}),(0,y.jsx)(f,{width:e.percentage,children:(0,y.jsx)("div",{className:"fill"})})]},e.id)}))})})}),(0,y.jsx)(x.Card,{children:(0,y.jsx)(x.CardContent,{className:"skills-icons",children:null===b||void 0===b?void 0:b.map((function(e,t){return(0,y.jsx)(g.Nm.Col,{className:(0,l.Z)({"justify-content-end":1===t}),children:null===e||void 0===e?void 0:e.map((function(e){return(0,y.jsx)(a.default,{passHref:!0,href:e.url,children:(0,y.jsx)("a",{href:"replace",target:"_blank",children:(0,y.jsxs)(x.CardIcon,{children:[e.icon,(0,y.jsx)(g.xv.Title,{className:"skill-title",children:e.label})]})})},e.id)}))},t)}))})})]})]}),(0,y.jsx)(g.Nm.Row,{className:"justify-content-center mt-50 d-none",children:(0,y.jsx)(j.W_.Button,{type:"button",className:"active"})})]})})},v=n(8582),k=function(){return(0,y.jsx)(j.$_.Wrapper,{children:(0,y.jsx)(j.$_.Body,{children:(0,y.jsxs)(g.xv.SubTitle,{className:"light ground",children:["Copyright \xa9 Ryan M. Torino ",(0,v.Z)(new Date,"yyyy")]})})})},_=(0,c.pq)(c.JY.sort((function(e,t){return Number(t.id)-Number(e.id)})).slice().splice(0,c.JY.length),2),T=function(){var e=i.useState(0),t=(0,s.Z)(e,2),n=t[0],o=t[1];return(0,y.jsx)(u.Container,{id:"experience",className:"container w-navigation",children:(0,y.jsxs)(g.Nm.Col,{className:"h-100 align-items-center justify-content-between",children:[(0,y.jsxs)(g.Nm.Col,{className:"align-items-center",children:[(0,y.jsx)(g.xv.Title,{className:"heading",children:"Work Experience"}),(0,y.jsx)(r.lr,{emulateTouch:!0,infiniteLoop:!0,interval:36e5,transitionTime:200,showThumbs:!1,showIndicators:!1,showStatus:!1,showArrows:!1,selectedItem:n,onChange:function(e){return o(e)},children:_.map((function(e,t){return(0,y.jsx)(x.Container,{className:"work-exp",children:e.map((function(e){return(0,y.jsx)(x.Card,{className:"work-exp",children:(0,y.jsxs)(x.CardContent,{className:"work-exp",children:[(0,y.jsx)(g.xv.Title,{className:"mb-10",children:e.jobTitle}),(0,y.jsx)(g.xv.SubTitle,{className:"label light mb-30",children:e.company}),(0,y.jsx)(g.xv.SubTitle,{className:"ground light",children:e.dateAttended}),(0,y.jsx)(x.CardList,{children:e.doings.map((function(e){return(0,y.jsx)("li",{className:"work-exp",children:e.description},e.id)}))})]})},e.id)}))},t)}))})]}),(0,y.jsx)(g.Nm.Row,{children:_.map((function(e,t){return(0,y.jsx)(j.W_.Button,{type:"button",className:(0,l.Z)({active:n===t}),onClick:function(){return o(t)}},t)}))})]})})},Z="Thors Portfolio",I="http://localhost:3000",S="Ryan M. Torino",P="Ryan M. Torino | Software Engineer 1 - Hello, I'm Ryan but you may call me Thors. Welcome to my portfolio. Let's get connected and keep in touch for future opportunities.",A=0,E=function(){var e=i.useCallback((function(){var t=document.getElementById("hero-text");t.innerHTML.length<S.length&&A<S.length&&(t.innerHTML+=S.charAt(A),A++,setTimeout(e,100))}),[]);return i.useEffect((function(){e()}),[e]),(0,y.jsxs)(m,{children:[(0,y.jsxs)(o.default,{children:[(0,y.jsx)("title",{children:"".concat(Z," | Home")}),(0,y.jsx)("meta",{name:"description",content:P}),(0,y.jsx)("meta",{name:"robots",content:"index,follow"}),(0,y.jsx)("meta",{name:"googlebot",content:"index,follow"}),(0,y.jsx)("meta",{name:"og:title",content:"".concat(Z," | Home")}),(0,y.jsx)("meta",{name:"og:description",content:P}),(0,y.jsx)("meta",{name:"og:url",content:I}),(0,y.jsx)("meta",{name:"og:image",content:"".concat(I,"/static/thors.jpeg")}),(0,y.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,y.jsx)("link",{rel:"canonical",href:I})]}),(0,y.jsx)(u.Container,{id:"hero",className:"hero container",children:(0,y.jsx)(g.Nm.Row,{className:"w-100 h-100 justify-content-center align-items-center",children:(0,y.jsxs)(g.Nm.Col,{className:"align-items-center w-800",children:[(0,y.jsx)(g.Ee.Profile,{src:"/static/thors.jpeg",className:"mb-50"}),(0,y.jsx)(g.xv.SubTitle,{className:"hero",children:"Software Engineer"}),(0,y.jsx)(g.xv.Title,{id:"hero-text",className:"hero"}),(0,y.jsx)(p.Skills,{className:"w-100",children:null===c.SA||void 0===c.SA?void 0:c.SA.filter((function(e){return"hero"!==e})).map((function(e){return(0,y.jsx)(g.xv.SubTitle,{className:"clickable hero",onClick:function(){return(0,c.uX)(e)},children:e},e)}))})]})})}),(0,y.jsx)(T,{}),(0,y.jsx)(C,{}),(0,y.jsx)(w,{}),(0,y.jsx)(u.Container,{id:"about",className:"about",children:(0,y.jsx)(g.Nm.Col,{className:"container h-100",children:(0,y.jsx)(g.Nm.Col,{className:"h-100",children:(0,y.jsxs)(x.Container,{className:"h-100 m-0",children:[(0,y.jsx)(x.Card,{children:(0,y.jsx)(x.CardContent,{className:"about justify-content-center align-items-center",children:(0,y.jsx)(g.Ee.About,{src:"/static/thors-speaker.jpg",alt:"my-photo"})})}),(0,y.jsx)(x.Card,{children:(0,y.jsxs)(x.CardContent,{className:"about justify-content-center",children:[(0,y.jsx)(g.xv.Title,{className:"heading mb-30",children:"About"}),(0,y.jsx)(g.xv.SubTitle,{className:"light about-description h-max-content",children:"Hello! I'm Ryan M. Torino. I graduated from FEU Institute of Technology, last August 2019. I'm now working full-time software engineer at August 99 Inc under the Oqulo division. I've been working with them for almost 4 years, that includes my internship last September 2018 up until March 2019, and I was hired full-time employee last August 2019."}),(0,y.jsxs)(g.xv.SubTitle,{className:"light about-description h-max-content mt-20",children:["Quick personality about myself. I consider myself an extroverted person. I like going out with my peers, friends, or colleagues. I play musical instruments in my past time and practice my skills in web development by making personal projects using various frameworks like, Laravel and Next.Js. If you were interested to get in touch with me, feel free to navigate the contact form on this website or email me at"," ",(0,y.jsx)(a.default,{passHref:!0,href:"mailto:ryanmondigotorino@gmail.com",children:(0,y.jsx)("a",{href:"replace",className:"text-underline",children:"ryanmondigotorino@gmail.com"})}),". Hope we can get along and have a good day \ud83d\ude0a"]})]})})]})})})}),(0,y.jsx)(k,{})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7368)}])}},function(e){e.O(0,[91,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);