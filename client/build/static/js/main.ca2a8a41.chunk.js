(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){e.exports=a(58)},39:function(e,t,a){},40:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=(a(39),a(12)),i=(a(40),a(41),a(3)),s=a(5),o=a.n(s),u=a(10);function m(e){return{type:"LOGIN",payload:e}}function d(e){return function(){var t=Object(u.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n=JSON.parse(localStorage.getItem("userData")).token,setTimeout(Object(u.a)(o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/api/menu/getAllPizza","GET",null,{Authorization:"Bearer "+n});case 2:r=t.sent,a({type:"GET/PIZZA/ALL_LOADED",payload:r});case 4:case"end":return t.stop()}}),t)}))),2e3)}catch(r){console.log(r)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function p(e){return{type:"ADD/TO_CART",payload:e}}function f(e){return{type:"REMOVE/FROM_CART",payload:e}}var E=a(2),h=a(6),v=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),l=Object(h.a)(c,2),i=l[0],s=l[1];return{loading:a,request:Object(n.useCallback)(function(){var e=Object(u.a)(o.a.mark((function e(t){var a,n,c,l,i,u=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:"GET",n=u.length>2&&void 0!==u[2]?u[2]:null,c=u.length>3&&void 0!==u[3]?u[3]:{},r(!0),e.prev=4,n&&(n=JSON.stringify(n),c["Content-Type"]="application/json"),e.next=8,fetch(t,{method:a,body:n,headers:c});case 8:return l=e.sent,e.next=11,l.json();case 11:if(i=e.sent,l.ok){e.next=14;break}throw new Error(i.message||"Something goes wrong");case 14:return r(!1),e.abrupt("return",i);case 18:throw e.prev=18,e.t0=e.catch(4),r(!1),s(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,clearError:Object(n.useCallback)((function(){return s(null)}),[])}},b=function(){return Object(n.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[])},g=(a(47),function(){return r.a.createElement("div",{className:"circle-loader-red"},r.a.createElement("div",{className:"preloader-wrapper active"},r.a.createElement("div",{className:"spinner-layer spinner-red-only"},r.a.createElement("div",{className:"circle-clipper left"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"gap-patch"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"circle-clipper right"},r.a.createElement("div",{className:"circle"})))))}),O=(a(48),a(49),{addToCart:p,removeFromCart:f}),z=Object(E.b)(null,O)((function(e){var t=e.pizza,a=e.addToCart,c=e.removeFromCart,l=Object(n.useState)(!1),i=Object(h.a)(l,2),s=i[0],o=i[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("cartPizzaIds"));e&&e.length&&-1!==e.findIndex((function(e){return e===t._id}))&&o(!0)}),[t,a]),r.a.createElement("div",{className:"pizza-box z-depth-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"left-part"},r.a.createElement("span",{className:"pizza-title"},t.name),r.a.createElement("span",{className:"pizza-description"},t.description),r.a.createElement("span",{className:"pizza-weight"},t.weight,"g")),r.a.createElement("div",{className:"right-part"},r.a.createElement("div",{className:"pizza-image"},r.a.createElement("img",{src:t.photoUrl,alt:""})),r.a.createElement("button",{className:"waves-effect waves-light btn add-to-cart-btn \n              ".concat(s?"light-green darken-1":"purple darken-4"),onClick:function(){s?c(t):a(t),o(!s)}},s?r.a.createElement(r.a.Fragment,null,"added"):r.a.createElement(r.a.Fragment,null,"add to cart: +",r.a.createElement("b",null,t.cost,"$"))))))})),N={addToCart:p},w=Object(E.b)((function(e){return{pizza:e.pizza,cart:e.cart}}),N)((function(e){var t=e.pizza,a=e.addToCart,c=e.cart,l=v(),i=l.error,s=l.clearError,o=b();return Object(n.useEffect)((function(){o(i),s()}),[i,o,s]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("cartPizzaIds"));t.length&&e&&e.length&&e.forEach((function(e){var n=t.find((function(t){return t._id===e}));n&&-1===c.findIndex((function(e){return e._id===n._id}))&&a(n)}))}),[t,c,a]),t.length?r.a.createElement("div",{className:"pizza-menu-window"},r.a.createElement("h2",null,"Pizza Catalog"),r.a.createElement("div",{className:"pizza-catalog"},t.map((function(e){return r.a.createElement(z,{key:e._id,pizza:e})})))):r.a.createElement(g,null)})),y=a(14),j=a(4),k={login:m},C=Object(E.b)(null,k)((function(e){var t=e.login,a=v(),c=a.loading,l=a.request,i=a.error,s=a.clearError,m=b(),d=Object(n.useState)({email:"",password:""}),p=Object(h.a)(d,2),f=p[0],E=p[1];Object(n.useEffect)((function(){m(i),s()}),[i,m,s]),Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var g=function(e){E(Object(j.a)(Object(j.a)({},f),{},Object(y.a)({},e.target.name,e.target.value)))},O=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("/api/auth/register","POST",Object(j.a)({},f));case 3:t=e.sent,m(t.message),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(o.a.mark((function e(){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("/api/auth/login","POST",Object(j.a)({},f));case 3:a=e.sent,n={token:a.token,userId:a.userId},t(n),localStorage.setItem("userData",JSON.stringify(n)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6 offset-s3"},r.a.createElement("h1",null,"Innoscripta Pizza Delivery"),r.a.createElement("div",{className:"card blue darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},"Authorization"),r.a.createElement("div",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"Type Email",id:"email",type:"text",name:"email",className:"yellow-input",value:f.email,onChange:g}),r.a.createElement("label",{htmlFor:"email"},"Email")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"Type password",id:"password",type:"password",name:"password",className:"yellow-input",value:f.password,onChange:g}),r.a.createElement("label",{htmlFor:"password"},"Password")))),r.a.createElement("div",{className:"card-action"},r.a.createElement("button",{className:"btn yellow darken-4",style:{marginRight:10},disabled:c,onClick:z},"Log In"),r.a.createElement("button",{className:"btn grey lighten-1 black-text",onClick:O,disabled:c},"Registration")))))})),I=(a(50),{logout:function(){return{type:"LOGOUT"}}}),S=Object(E.b)((function(e){return{token:e.token,cart:e.cart}}),I)((function(e){var t=e.token,a=e.cart,n=e.logout,c=Object(i.g)();return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper deep-purple accent-1"},r.a.createElement("span",{className:"brand-logo"},"Innoscripta Pizza Delivery Service"),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/cart"},"Cart",a.length?r.a.createElement("span",{className:"order-count"},a.length):"")),t&&r.a.createElement("li",null,r.a.createElement(l.b,{to:"/orders"},"Your Orders")),t&&r.a.createElement("li",null,r.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),n(),c.push("/")}},"Log Out"))))))})),x=(a(52),a(53),function(e){var t=e.pizza,a=e.onDelete;return r.a.createElement("div",{className:"row pizza-cart-row"},r.a.createElement("div",{className:"pizza-description z-depth-1"},r.a.createElement("img",{className:"pizza-image",src:t.photoUrl,alt:""}),r.a.createElement("span",{className:"pizza-name"},t.name),r.a.createElement("span",{className:"pizza-weight"},t.weight,"g"),r.a.createElement("div",{className:"pizza-cost purple darken-4"},r.a.createElement("b",null,t.cost,"$")),r.a.createElement("div",{className:"spacer"}),r.a.createElement("button",{className:"waves-effect waves-light red darken-1 delete-btn btn",onClick:a},"delete")))}),T={addToCart:p,removeFromCart:f},_=Object(E.b)((function(e){return{cart:e.cart,pizza:e.pizza}}),T)((function(e){var t=e.cart,a=e.pizza,c=e.addToCart,l=e.removeFromCart,s=Object(i.g)(),o=Object(n.useState)(0),u=Object(h.a)(o,2),m=u[0],d=u[1],p=function(e){l(a.find((function(t){return t._id===e}))),d(f(e))},f=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t.reduce((function(t,a){return a._id===e?t:t+a.cost}),0)}),[t]);return Object(n.useEffect)((function(){if(!t.length){var e=JSON.parse(localStorage.getItem("cartPizzaIds"));a.length&&e&&e.length&&e.forEach((function(e){c(a.find((function(t){return t._id===e})))}))}}),[c,t,a]),Object(n.useEffect)((function(){t.length&&0===m&&d(f())}),[t,m,f]),r.a.createElement("div",{className:"cart-page"},t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Cart"),r.a.createElement("div",{className:"cart-table"},t.map((function(e){return r.a.createElement(x,{pizza:e,key:e._id,onDelete:function(){return p(e._id)}})}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"spacer"}),r.a.createElement("h3",null,"Total: $",m+3),r.a.createElement("h6",null,"(3$ Delivery)"),r.a.createElement("button",{className:"waves-effect waves-light purple darken-4 order-btn btn",onClick:function(){s.push("/make-order")}},"make order"))):r.a.createElement("h2",null,"Your cart is empty"))})),F=a(28),D=a(29),A=a(33),P=a(31),R=(a(54),function(e){Object(A.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(F.a)(this,a),(n=t.call(this,e)).handleFieldChange=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value))},n.proceedOrder=function(){n.props.setAddress(n.state)},n.state={country:"",district:"",city:"",street:"",building:"",flat:"",room:""},n}return Object(D.a)(a,[{key:"componentDidMount",value:function(){window.M.updateTextFields()}},{key:"render",value:function(){return r.a.createElement("div",{className:"address-edit"},r.a.createElement("h2",null,"Please, fill in the shipping address fields"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"country-field input-field"},r.a.createElement("input",{placeholder:"Country",id:"country",type:"text",className:"validate",name:"country",onChange:this.handleFieldChange}),r.a.createElement("label",{htmlFor:"country"},"Country")),r.a.createElement("div",{className:"district-field input-field"},r.a.createElement("input",{placeholder:"District",id:"district",type:"text",className:"validate",name:"district",onChange:this.handleFieldChange}),r.a.createElement("label",{htmlFor:"district"},"District"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"city-field input-field"},r.a.createElement("input",{placeholder:"City",id:"city",type:"text",className:"validate",onChange:this.handleFieldChange,name:"city"}),r.a.createElement("label",{htmlFor:"city"},"City"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"street-field input-field"},r.a.createElement("input",{placeholder:"Street",id:"street",type:"text",className:"validate",onChange:this.handleFieldChange,name:"street"}),r.a.createElement("label",{htmlFor:"street"},"Street"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"building-field input-field"},r.a.createElement("input",{placeholder:"Building",id:"building",type:"text",className:"validate",onChange:this.handleFieldChange,name:"building"}),r.a.createElement("label",{htmlFor:"building"},"Building")),r.a.createElement("div",{className:"flat-field input-field"},r.a.createElement("input",{placeholder:"Flat",id:"flat",type:"text",className:"validate",onChange:this.handleFieldChange,name:"flat"}),r.a.createElement("label",{htmlFor:"flat"},"flat")),r.a.createElement("div",{className:"room-field input-field"},r.a.createElement("input",{placeholder:"Room",id:"room",type:"text",className:"validate",onChange:this.handleFieldChange,name:"room"}),r.a.createElement("label",{htmlFor:"room"},"Room")),r.a.createElement("div",{className:"spacer"})),r.a.createElement("button",{className:"waves-effect waves-light purple darken-4 order-btn btn",onClick:this.proceedOrder},"make order (",this.props.total,"$)"))}}]),a}(r.a.Component)),L=(a(55),function(e){var t=e.total,a=e.address,n=e.pizzaDetails,c=Object(i.g)(),l=Object(E.c)();return r.a.createElement("div",{className:"bill"},r.a.createElement("h2",null,"Your order has been moved to delivery service"),r.a.createElement("h3",null,"Thank you for choosing us!"),r.a.createElement("h5",null,"Here is your bill:"),r.a.createElement("div",{className:"bill-details"},r.a.createElement("h6",null,"Address:"),r.a.createElement("div",{className:"address"},a),r.a.createElement("h6",null,"Pizza details:"),r.a.createElement("div",{className:"pizza-details"},n.map((function(e){return r.a.createElement("span",{className:"pizza-row",key:e._id},"pizza: ",e.name,", weight: ",e.weight,", cost: ",e.cost)}))),r.a.createElement("h5",null,"Total: ",t,"$")),r.a.createElement("button",{className:"waves-effect waves-light purple darken-4 catalog-btn btn",onClick:function(){c.push("/menu"),l({type:"REMOVE/CART"})}},"return to catalog"))}),M=Object(E.b)((function(e){return{cart:e.cart,token:e.token,userId:e.userId}}))((function(e){var t=e.cart,a=e.userId,c=e.token,l=t,i=v().request,s=Object(n.useState)(!1),m=Object(h.a)(s,2),d=m[0],p=m[1],f=Object(n.useState)(null),E=Object(h.a)(f,2),b=E[0],g=E[1],O=t.reduce((function(e,t){return e+t.cost}),0),z=function(){var e=Object(u.a)(o.a.mark((function e(n){var r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=(n.country?n.country+", ":"")+(n.district?n.district+" district, ":"")+(n.city?n.city+", ":"")+(n.street?n.street+" st, ":"")+(n.building?n.building+" building, ":"")+(n.flat?n.flat+" flat, ":"")+(n.room?n.room+" room":""),p(!0),g(r),!c){e.next=8;break}return(l={address:r,total:O,userId:a,order:[]}).order=t.map((function(e){return e._id})),e.next=8,i("/api/orders/save","POST",Object(j.a)({},l));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return d?r.a.createElement(L,{address:b,pizzaDetails:l,total:O}):r.a.createElement(R,{total:O,setAddress:z})})),J=(a(56),a(57),Object(E.b)((function(e){return{pizza:e.pizza}}))((function(e){var t=e.order,a=e.pizza;return r.a.createElement("div",{className:"order-box"},r.a.createElement("span",null,"Address: ",t.address),r.a.createElement("span",null,"Total: ",t.total,"$"),r.a.createElement("h6",null,"Pizza:"),t.order.map((function(e){var t=a.find((function(t){return t._id===e}));return r.a.createElement("div",{className:"pizza-row",key:e},r.a.createElement("img",{src:t.photoUrl,alt:""}),r.a.createElement("span",{className:"pizza-name"},t.name),r.a.createElement("span",{className:"pizza-weight"},t.weight,"g"),r.a.createElement("span",{className:"pizza-cost purple darken-4"},t.cost,"$"))})))}))),$=Object(E.b)((function(e){return{userId:e.userId,pizza:e.pizza}}))((function(e){var t=e.userId,a=e.pizza,c=e.getAllPizza,l=Object(n.useState)([]),i=Object(h.a)(l,2),s=i[0],m=i[1],d=v().request,p=Object(E.c)();return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/api/orders/getAll","POST",{userId:t});case 2:a=e.sent,s.length||m(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.length||p(c(d)),function(){e.apply(this,arguments)}()}),[]),s.length?r.a.createElement("div",{className:"orders-area"},r.a.createElement("h3",null,"Your orders"),s.map((function(e){return r.a.createElement(J,{order:e,key:e._id})}))):r.a.createElement(g,null)})),G={login:m},U=Object(E.b)((function(e){return{token:e.token,pizza:e.pizza}}),G)((function(e){var t=e.token,a=e.pizza,c=e.login,s=JSON.parse(localStorage.getItem("userData"));s&&s.token&&c({token:s.token,userId:s.userId});var o=Object(E.c)(),u=v().request;Object(n.useEffect)((function(){o(d(u))}),[o,u]);var m=function(e){return e?r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/menu",exact:!0},r.a.createElement(w,null)),r.a.createElement(i.b,{path:"/cart"},r.a.createElement(_,null)),r.a.createElement(i.b,{path:"/make-order"},r.a.createElement(M,null)),r.a.createElement(i.b,{path:"/orders"},r.a.createElement($,null)),r.a.createElement(i.a,{to:"/menu"}))):r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0},r.a.createElement(C,null)),r.a.createElement(i.a,{to:"/"}))}(!!t||!(!s||!s.token));return a.length?r.a.createElement(l.a,null,r.a.createElement("div",null,m)):r.a.createElement(g,null)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(15),q=a(32),B={token:null,userId:null,pizza:[],cart:[]},X=a(30),Y=Object(V.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(j.a)(Object(j.a)({},e),{},{token:t.payload.token,userId:t.payload.userId});case"LOGOUT":return localStorage.removeItem("userData"),Object(j.a)(Object(j.a)({},e),{},{token:null,userId:null});case"GET/PIZZA/ALL_LOADED":return Object(j.a)(Object(j.a)({},e),{},{pizza:t.payload});case"ADD/TO_CART":var a=[].concat(Object(q.a)(e.cart),[t.payload]);return localStorage.setItem("cartPizzaIds",JSON.stringify(a.map((function(e){return e._id})))),Object(j.a)(Object(j.a)({},e),{},{cart:a});case"REMOVE/FROM_CART":var n=e.cart.filter((function(e){return e._id!==t.payload._id}));return localStorage.setItem("cartPizzaIds",JSON.stringify(n.map((function(e){return e._id})))),Object(j.a)(Object(j.a)({},e),{},{cart:n});case"REMOVE/CART":return localStorage.removeItem("cartPizzaIds"),Object(j.a)(Object(j.a)({},e),{},{cart:[]});default:return e}}),Object(V.c)(Object(V.a)(X.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),Z=r.a.createElement(E.a,{store:Y},r.a.createElement(U,null));Object(c.render)(Z,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.ca2a8a41.chunk.js.map