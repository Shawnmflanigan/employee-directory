(this["webpackJsonpreact-employee-dir"]=this["webpackJsonpreact-employee-dir"]||[]).push([[0],{24:function(e,t,r){},26:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),s=r(12),i=r.n(s),a=r(7),j=r(27),o=r(13),h=(r(10),function(e,t){return-1!==e.toLowerCase().indexOf(t.toLowerCase())}),l=r(3),d=function(e){var t=e.name,r=e.email,c=e.picture,n=e.location,s=e.phone,i=e.i;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{class:"profile",children:Object(l.jsx)(o.a,{src:c.thumbnail,roundedCircle:!0})}),Object(l.jsxs)("td",{children:[t.first," ",t.last]}),Object(l.jsxs)("td",{children:[n.city,", ",n.state]}),Object(l.jsx)("td",{children:r}),Object(l.jsx)("td",{children:s})]},i)},u=function(e){var t=e.searchTerm,r=Object(c.useState)([]),n=Object(a.a)(r,2),s=n[0],i=n[1];Object(c.useEffect)((function(){fetch("https://randomuser.me/api/?results=500&nat=US").then((function(e){return e.json()})).then((function(e){i(e.results)}))}),[]);return Object(l.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Picture"}),Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Location"}),Object(l.jsx)("th",{children:"Email"}),Object(l.jsx)("th",{children:"Phone"})]})}),Object(l.jsx)("tbody",{children:s.filter((function(e){var r=e.name,c=e.location;return!t||h(c.state,t)||h(r.first,t)})).map((function(e,t){var r=e.name,c=e.email,n=e.picture,s=e.location,i=e.phone;return Object(l.jsx)(d,{name:r,email:c,picture:n,location:s,phone:i,i:t})}))})]})},b=r(14),O=r(15),x=(r(24),function(){return Object(l.jsx)(b.a,{style:{backgroundImage:"url(/employees.jpeg)"},children:Object(l.jsxs)(O.a,{children:[Object(l.jsx)("h1",{children:"Your Company .inc"}),Object(l.jsx)("p",{children:"A comprehensive employee directory."})]})})}),m=r(28),p=function(e){var t=e.searchTerm,r=e.setSearchTerm;return Object(l.jsx)(m.a.Control,{type:"text",placeholder:"Search by Name or State",value:t,onChange:function(e){var t=e.target;return r(t.value)}})};var f=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),r=t[0],n=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(x,{}),Object(l.jsx)(p,{searchTerm:r,setSearchTerm:n}),Object(l.jsx)("br",{}),Object(l.jsx)(u,{searchTerm:r})]})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.f69301bc.chunk.js.map