(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),i=(n(13),n(4)),c=(n(14),n(15),n(0));var d=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(c.jsxs)("div",{className:"expense-date",children:[Object(c.jsx)("div",{className:"expense-date__month",children:t}),Object(c.jsx)("div",{className:"expense-date__year",children:a}),Object(c.jsx)("div",{className:"expense-date__day",children:n})]})};n(17);var r=function(e){var t="card "+e.className;return Object(c.jsx)("div",{className:t,children:e.children})},l=n(1);var o=function(e){var t=Object(l.useState)(0),n=Object(i.a)(t,2),a=n[0],s=n[1];return Object(c.jsxs)(r,{className:"expense-item",children:[Object(c.jsx)(d,{date:e.date}),Object(c.jsxs)("div",{className:"expense-item__description",children:[Object(c.jsx)("h2",{children:e.title}),Object(c.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]}),Object(c.jsxs)("button",{onClick:function(){s(a+1)},children:["Number of clicks: ",a]})]})};n(18);var m=function(e){return Object(c.jsxs)(r,{className:"expenses",children:[Object(c.jsx)(o,{title:e.items[0].title,amount:e.items[0].amount,date:e.items[0].date}),Object(c.jsx)(o,{title:e.items[1].title,amount:e.items[1].amount,date:e.items[1].date}),Object(c.jsx)(o,{title:e.items[2].title,amount:e.items[2].amount,date:e.items[2].date}),Object(c.jsx)(o,{title:e.items[3].title,amount:e.items[3].amount,date:e.items[3].date})]})};var j=function(){var e=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Let's get started!"}),Object(c.jsx)("p",{children:"Hello world!"}),Object(c.jsx)(m,{items:e})]})};s.a.createRoot(document.getElementById("root")).render(Object(c.jsx)(j,{}))}],[[19,1,2]]]);
//# sourceMappingURL=main.5e1a23ec.chunk.js.map