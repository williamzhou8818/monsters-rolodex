(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,n,t){e.exports=t(37)},28:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(15),c=t.n(a),i=t(8),s=(t(28),t(16)),l=t(17),u=t(21),d=t(18),m=t(22),h=(t(29),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),r.a.createElement("h1",null," ",e.monster.name," "),r.a.createElement("p",null," ",e.monster.email," "))}),f=(t(30),function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map(function(e){return r.a.createElement(h,{key:e.id,monster:e})}))}),p=(t(31),function(e){var n=e.placeholder,t=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})}),g=t(5),v=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Page Working "),r.a.createElement("img",{src:"https://positivepsychology.com/wp-content/uploads/positive-body-image1.png",alt:"about-body-img"}))},w=(t(32),function(e){function n(){var e;return Object(s.a)(this,n),(e=Object(u.a)(this,Object(d.a)(n).call(this))).state={monsters:[],searchField:""},e}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e.setState({monsters:n})})}},{key:"render",value:function(){var e=this,n=this.state,t=n.monsters,o=n.searchField,a=t.filter(function(e){return e.name.toLowerCase().includes(o.toLocaleLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," Monsters Rolodex "),r.a.createElement(i.b,{to:"/monsters-rolodex/about"},"About"),r.a.createElement(p,{placeholder:"search monsters",handleChange:function(n){return e.setState({searchField:n.target.value})}}),r.a.createElement(f,{monsters:a}),r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/monsters-rolodex/about",component:v})))}}]),n}(o.Component)),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(i.a,null,r.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/monsters-rolodex",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/monsters-rolodex","/service-worker.js");b?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):E(n,e)})}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.cb3b09da.chunk.js.map