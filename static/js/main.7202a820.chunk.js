(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(61)},61:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(12),s=n.n(c),u=n(4),o=n(5),i=n(8),l=n(6),p=n(9),d=n(7),f=n(11),h=n.n(f),m=n(18),b=n(26),v=n.n(b).a.create({baseURL:"https://jsonplaceholder.typicode.com/"}),O=n(27),j=n.n(O).a.memoize(function(){var e=Object(m.a)(h.a.mark(function e(t,n){var r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/users/".concat(t));case 2:r=e.sent,n({type:"FETCH_USER",payload:r.data});case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()),y=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUser(this.props.userId)}},{key:"render",value:function(){var e=this,t=this.props.users.find(function(t){return t.id===e.props.userId});return t?a.a.createElement("div",{className:"header"},t.name):null}}]),t}(a.a.Component),E=Object(d.b)(function(e){return{users:e.users}},{fetchUser:function(e){return function(t){j(e,t)}}})(y),w=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"renderList",value:function(){return this.props.posts.map(function(e){return a.a.createElement("div",{className:"item",key:e.id},a.a.createElement("i",{className:"large middle aligned icon user"}),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"description"},a.a.createElement("h2",null,e.title),a.a.createElement("p",null,e.body),a.a.createElement(E,{userId:e.userId}))))})}},{key:"render",value:function(){return a.a.createElement("div",{className:"ui relaxed divided list"},this.renderList())}}]),t}(a.a.Component),k=Object(d.b)(function(e){return{posts:e.posts}},{fetchPosts:function(){return function(){var e=Object(m.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/posts");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(w),g=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"ui container"},a.a.createElement(k,null))}}]),t}(a.a.Component),C=n(2),N=n(29),S=Object(C.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return[].concat(Object(N.a)(e),[t.payload]);default:return e}}}),x=n(28),T=Object(C.d)(S,Object(C.a)(x.a));s.a.render(a.a.createElement(d.a,{store:T},a.a.createElement(g,null)),document.querySelector("#root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.7202a820.chunk.js.map