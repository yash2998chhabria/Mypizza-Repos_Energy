(this.webpackJsonpmypizza=this.webpackJsonpmypizza||[]).push([[0],{49:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(17),s=c.n(a),i=(c(49),c(16)),j=c(23),l=c(22),o=c(79),h=c(80),b=c(81),d=c(82),O=c(83),x=c(84),u=c(85),p=c(77),g=c(86),f=c(100),y=c(4),v=Object(p.a)({root:{width:300}}),m=function(e){var t=v(),c=function(t){t.target.ariaValueNow?e.setFilters(Object(l.a)(Object(l.a)({},e.filters),{},{price:t.target.ariaValueNow})):e.setFilters(Object(l.a)(Object(l.a)({},e.filters),{},Object(j.a)({},t.target.name,t.target.value)))};return Object(y.jsx)("div",{style:{paddingTop:"50px"},children:Object(y.jsx)(o.a,{children:Object(y.jsx)(h.a,{sm:{size:10,offset:1},children:Object(y.jsxs)(b.a,{children:[Object(y.jsx)(d.a,{children:"Filters"}),Object(y.jsxs)(O.a,{style:{margin:"10px"},children:["Category: ",e.filters.category.toUpperCase(),!e.filters.category&&Object(y.jsx)("span",{children:"ALL"})]}),Object(y.jsxs)(x.a,{style:{margin:"10px"},children:[Object(y.jsx)(u.a,{name:"category",onClick:c,color:"success",value:"Veg",children:"Veg"}),Object(y.jsx)(u.a,{name:"category",onClick:c,color:"danger",value:"Nonveg",children:"Non Veg"}),Object(y.jsx)(u.a,{name:"category",onClick:c,color:"secondary",value:"",children:"ALL"})]}),Object(y.jsx)(O.a,{style:{margin:"10px"},children:"Base:"}),Object(y.jsxs)("select",{type:"text",name:"base",id:"base_type",placeholder:"Choose Base type",onChange:c,style:{margin:"10px"},children:[Object(y.jsx)("option",{value:""}),Object(y.jsx)("option",{value:"Thin Crust",children:"Thin Crust"}),Object(y.jsx)("option",{value:"Regular Base",children:"Regular Base"}),Object(y.jsx)("option",{value:"Flat Bread",children:"Flat bread"}),Object(y.jsx)("option",{value:"Multigrain",children:"Mutigrain"})]}),Object(y.jsx)(O.a,{style:{margin:"10px"},children:"Cheese options:"}),Object(y.jsxs)("select",{type:"text",name:"cheese_type",id:"cheese_type",placeholder:"Choose Cheese type",onChange:c,style:{margin:"10px"},children:[Object(y.jsx)("option",{value:""}),Object(y.jsx)("option",{value:"Cheese Burst",children:"Cheese Burst"}),Object(y.jsx)("option",{value:"Cheese Topping",children:"Cheese Topping"}),Object(y.jsx)("option",{value:"No Cheese",children:"No Cheese"})]}),Object(y.jsxs)("div",{className:t.root,style:{margin:"10px"},children:[Object(y.jsxs)(g.a,{id:"discrete-slider",gutterBottom:!0,children:["Price Range: [100 - ",e.filters.price,"]"]}),Object(y.jsx)(f.a,{defaultValue:600,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:50,marks:!0,min:100,max:600,name:"price",onChange:c})]})]})})})})},C=c(87),z=c(88),F=c(89),w=c(90),B=function(e){var t=function(e){var t=e.pizza;return Object(y.jsx)("div",{style:{paddingTop:"50px"},children:Object(y.jsx)(b.a,{children:Object(y.jsxs)(o.a,{children:[Object(y.jsx)(h.a,{lg:"6",children:Object(y.jsx)(C.a,{top:!0,width:"100%",src:t.picture,alt:t.name})}),Object(y.jsx)(h.a,{lg:"6",children:Object(y.jsxs)(z.a,{children:[Object(y.jsx)(F.a,{tag:"h5",children:t.name}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:t.category}),Object(y.jsx)("li",{children:t.base}),Object(y.jsx)("li",{children:t.cheese_type})]}),Object(y.jsxs)(w.a,{children:[" Rs: ",t.price," \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(y.jsx)(u.a,{children:"ADD"})," "]})]})})]})})})};return Object(y.jsx)("div",{children:e.filteredpizzas.map((function(e,c){return Object(y.jsx)(t,{pizza:e},c)}))})},N=c(91),k=c(92),T=c(93),_=c(94),L=c(95),S=c(96),V=c(97),P=c(98),D=function(e){var t=Object(r.useState)(!1),c=Object(i.a)(t,2),n=c[0],a=c[1];return Object(y.jsx)("div",{children:Object(y.jsxs)(N.a,{color:"light",light:!0,expand:"md",children:[Object(y.jsx)(k.a,{href:"/",children:"My Pizza"}),Object(y.jsx)(T.a,{onClick:function(){return a(!n)}}),Object(y.jsxs)(_.a,{isOpen:n,navbar:!0,children:[Object(y.jsxs)(L.a,{className:"mr-auto",navbar:!0,children:[Object(y.jsx)(S.a,{children:Object(y.jsx)(V.a,{href:"/",children:"File"})}),Object(y.jsx)(S.a,{children:Object(y.jsx)(V.a,{href:"/",children:"Edit"})}),Object(y.jsx)(S.a,{children:Object(y.jsx)(V.a,{href:"/",children:"View"})}),Object(y.jsx)(S.a,{children:Object(y.jsx)(V.a,{href:"/",children:"Help"})})]}),Object(y.jsx)(P.a,{children:"Repos Energy"})]})]})})},E=c(101),R=c(99),A=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(null),s=Object(i.a)(a,2),j=s[0],l=s[1],b=Object(r.useState)(null),d=Object(i.a)(b,2),O=d[0],x=d[1],u=Object(r.useState)({category:"",base:"",cheese_type:"",price:600}),p=Object(i.a)(u,2),g=p[0],f=p[1];Object(r.useEffect)((function(){fetch("http://127.0.0.1:8000/api/").then((function(e){if(!e.ok)throw Error("Could Not Fetch Pizza Data");return e.json()})).then((function(e){n(e),l(!1),x(null)})).catch((function(e){x(e.message),l(!1)}))}),[]);var v="";return c&&(v=c,g.category&&(v=v.filter((function(e){return e.category===g.category}))),g.base&&(v=v.filter((function(e){return e.base===g.base}))),g.cheese_type&&(v=v.filter((function(e){return e.cheese_type===g.cheese_type}))),g.price<600&&(v=v.filter((function(e){return e.price<=g.price})))),Object(y.jsxs)("div",{children:[Object(y.jsx)(o.a,{children:Object(y.jsx)(h.a,{lg:"12",children:Object(y.jsx)(D,{})})}),Object(y.jsxs)(o.a,{children:[Object(y.jsx)(h.a,{lg:"5",children:Object(y.jsx)(m,{filters:g,setFilters:f})}),Object(y.jsxs)(h.a,{lg:"7",children:[O&&Object(y.jsx)(E.a,{color:"danger",children:O}),j&&Object(y.jsx)(R.a,{type:"grow",color:"danger",style:{width:"10rem",height:"10rem"}}),v.length?Object(y.jsx)(B,{filteredpizzas:v}):O?Object(y.jsx)("div",{}):Object(y.jsx)(E.a,{color:"warning",children:"No Pizzas Available for selected Filters!!"})]})]})]})},M=(c(62),function(){return Object(y.jsx)("div",{children:Object(y.jsx)(A,{})})}),I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,103)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))};s.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(M,{})}),document.getElementById("root")),I()}},[[63,1,2]]]);
//# sourceMappingURL=main.09b0e7fe.chunk.js.map