_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/a9y":function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),i=n("7W2i"),c=n("a1gu"),l=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}var o=n("TqRt");t.__esModule=!0,t.default=void 0;var d=o(n("q1tI")),u=o(n("8Kt/")),m={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function x(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var h=function(e){i(n,e);var t=s(n);function n(){return r(this,n),t.apply(this,arguments)}return a(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||m[e]||"An unexpected error has occurred";return d.default.createElement("div",{style:f.error},d.default.createElement(u.default,null,d.default.createElement("title",null,e,": ",t)),d.default.createElement("div",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?d.default.createElement("h1",{style:f.h1},e):null,d.default.createElement("div",{style:f.desc},d.default.createElement("h2",{style:f.h2},t,"."))))}}]),n}(d.default.Component);t.default=h,h.displayName="ErrorPage",h.getInitialProps=x,h.origGetInitialProps=x;var f={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"1VCc":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n("3slx")}])},"20a2":function(e,t,n){e.exports=n("nOHt")},"3slx":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return w})),n.d(t,"default",(function(){return N}));var r=n("nKUr"),a=n("20a2"),i=n("eomm"),c=n.n(i),l=n("vUxr"),s=n("qtBi"),o=n.n(s);function d(e){var t=e.content;return Object(r.jsx)("div",{className:"max-w-2xl mx-auto",children:Object(r.jsx)("div",{className:o.a.markdown,dangerouslySetInnerHTML:{__html:t}})})}var u=n("YFqc"),m=n.n(u);function x(){return Object(r.jsxs)("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",children:[Object(r.jsx)(m.a,{href:"/",children:Object(r.jsx)("a",{className:"hover:underline",children:"zpl"})}),"."]})}var h=n("i2FJ"),f=n("p9OW"),j=n("zK7a");function p(e){var t=e.children;return Object(r.jsx)("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:t})}function g(e){var t=e.title,n=e.coverImage,a=e.date,i=e.author;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p,{children:t}),Object(r.jsx)("div",{className:"hidden md:block md:mb-12",children:Object(r.jsx)(h.a,{name:i.name,picture:i.picture})}),n&&Object(r.jsx)("div",{className:"mb-8 md:mb-16 sm:mx-0",children:Object(r.jsx)(j.a,{title:t,src:n,height:620,width:1240})}),Object(r.jsxs)("div",{className:"max-w-2xl mx-auto",children:[Object(r.jsx)("div",{className:"block md:hidden mb-6",children:Object(r.jsx)(h.a,{name:i.name,picture:i.picture})}),Object(r.jsx)("div",{className:"mb-6 text-lg",children:Object(r.jsx)(f.a,{dateString:a})})]})]})}var b=n("CafY"),v=n("g4pe"),O=n.n(v),y=n("YSmr"),_=n("I2Ui"),w=!0;function N(e){var t=e.post,n=(e.morePosts,e.preview),i=_.a[t.author],s=Object(a.useRouter)();return s.isFallback||null!==t&&void 0!==t&&t.slug?Object(r.jsx)(b.a,{preview:n,children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(x,{}),s.isFallback?Object(r.jsx)(p,{children:"Loading\u2026"}):Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("article",{className:"mb-32",children:[Object(r.jsxs)(O.a,{children:[Object(r.jsxs)("title",{children:[t.title," | ",y.a]}),Object(r.jsx)("meta",{name:"author",content:i.name}),Object(r.jsx)("meta",{property:"og:image",content:t.ogImage?t.ogImage.url:y.c}),Object(r.jsx)("meta",{property:"og:type",content:"article"}),Object(r.jsx)("meta",{property:"article:published_time",content:t.date})]}),Object(r.jsx)(g,{title:t.title,coverImage:t.coverImage,date:t.date,author:i}),Object(r.jsx)(d,{content:t.content})]})})]})}):Object(r.jsx)(c.a,{statusCode:404})}},eomm:function(e,t,n){e.exports=n("/a9y")},qtBi:function(e,t,n){e.exports={markdown:"markdown-styles_markdown__1x9gM"}}},[["1VCc",0,2,1,3]]]);