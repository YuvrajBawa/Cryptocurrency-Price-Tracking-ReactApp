(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t(54)},49:function(e,a,t){},52:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(17),o=t.n(r),i=t(6),m=t(18),l=t.n(m),s=(t(49),t(52),function(e){var a=e.name,t=e.image,c=e.symbol,r=e.price,o=e.volume,i=e.priceChange,m=e.marketcap;return n.a.createElement("div",{className:"coin-container"},n.a.createElement("div",{className:"coin-row"},n.a.createElement("div",{className:"coin"},n.a.createElement("img",{src:t,alt:"N/A"}),n.a.createElement("h1",null,a),n.a.createElement("p",{className:"coin-symbol"},c)),n.a.createElement("div",{className:"coin-data"},n.a.createElement("p",{className:"coin-price"},"$",r),n.a.createElement("p",{className:"coin-volume"},"$",o.toLocaleString()),i<0?n.a.createElement("p",{className:"coin-percent red"},i.toFixed(2),"%"):n.a.createElement("p",{className:"coin-percent green"},i.toFixed(2),"%"),n.a.createElement("p",{className:"coin-marketcap"},"Mkt Cap: $",m.toLocaleString()))))});var p=function(){var e=Object(c.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(c.useState)(""),m=Object(i.a)(o,2),p=m[0],u=m[1];Object(c.useEffect)(function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(function(e){r(e.data)}).catch(function(e){return alert("Error coming!!!")})},[]);var d=t.filter(function(e){return e.name.toLowerCase().includes(p.toLowerCase())});return n.a.createElement("div",{className:"coin-app"},n.a.createElement("div",{className:"coin-search"},n.a.createElement("h1",{className:"coin-text"},"Cryptocurrency Price Tracker"),n.a.createElement("form",null,n.a.createElement("input",{type:"text",placeholder:"Search",className:"coin-input",onChange:function(e){u(e.target.value)}}))),d.map(function(e){return n.a.createElement(s,{key:e.id,name:e.name,image:e.image,symbol:e.symbol,volume:e.market_cap,price:e.current_price,marketcap:e.market_cap,priceChange:e.price_change_percentage_24h})}))};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)))}},[[19,2,1]]]);
//# sourceMappingURL=main.1384279f.chunk.js.map