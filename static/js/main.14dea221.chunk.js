(this["webpackJsonpIT-KAMASUTRA-ReactJS"]=this["webpackJsonpIT-KAMASUTRA-ReactJS"]||[]).push([[0],{12:function(e,t,n){e.exports={nav:"Navbar_nav__2Po6G",item:"Navbar_item__w7is6",activeLink:"Navbar_activeLink__BgW27"}},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(38),i=n(3),c="SEND_MESSAGE",a={dialogs:[{id:1,name:"Dymich"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},129:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__qDjs5",item:"Sidebar_item__QmZHx",activeLink:"Sidebar_activeLink__1VzmG"}},134:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__dO7LR"}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n(132),i=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"22b94168-25c1-42a1-b082-01d927be30be"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return i.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return i.post("follow/".concat(e))},unfollow:function(e){return i.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),a.getProfile(e)}},a={getProfile:function(e){return i.get("profile/"+e)},getStatus:function(e){return i.get("profile/status/"+e)},updateStatus:function(e){return i.put("profile/status/",{status:e})}},s={me:function(){return i.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i.post("auth/login",{email:e,password:t,remebmerMe:n})},logout:function(){return i.delete("auth/login")}}},168:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){},298:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,303)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))},i=n(64),c=n.n(i),a=n(34),s=n(35),o=n(37),u=n(36),A=n(0),l=n.n(A),d=(n(168),n(14)),j=n(10),b=n(12),f=n.n(b),g=n(129),h=n.n(g),p=n(1),O=function(e){var t=e.bestFriends.map((function(e){return Object(p.jsxs)("b",{children:[e.name," "]},e.id)}));return Object(p.jsxs)("div",{className:h.a.sidebar,children:[Object(p.jsx)("div",{children:"Friends"}),t]})},m=n(13),v=Object(m.b)((function(e){return{bestFriends:e.sideBar.bestFriends}}),(function(){return{}}))(O),E=function(e){return Object(p.jsxs)("nav",{className:f.a.nav,children:[Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(d.b,{to:"/profile",activeClassName:f.a.activeLink,children:"Profile"})}),Object(p.jsx)("div",{className:"".concat(f.a.item," ").concat(f.a.active),children:Object(p.jsx)(d.b,{to:"/dialogs",activeClassName:f.a.activeLink,children:"Messages"})}),Object(p.jsx)("div",{className:"".concat(f.a.item," ").concat(f.a.active),children:Object(p.jsx)(d.b,{to:"/users",activeClassName:f.a.activeLink,children:"Users"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(d.b,{to:"/news",activeClassName:f.a.activeLink,children:"News"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(d.b,{to:"/music",activeClassName:f.a.activeLink,children:"Music"})}),Object(p.jsx)("div",{className:f.a.item,children:Object(p.jsx)(d.b,{to:"/settings",activeClassName:f.a.activeLink,children:"Settings"})}),Object(p.jsx)(v,{})]})},x=n(9),w=n.n(x),B=n(20),I=n(38),S=n(3),C=n(16),k=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(S.a)(Object(S.a)({},e),r):e}))},P="FOLLOW",N="UNFOLLOW",R="SET_USERS",U="SET_CURRENT_PAGE",y="SET_TOTAL_USERS_COUNT",Q="TOGGLE_IS_FETCHING",F="TOGGLE_IS_FOLLOWING_PROGRESS",T={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},L=function(e){return{type:P,userId:e}},D=function(e){return{type:N,userId:e}},_=function(e){return{type:U,currentPage:e}},M=function(e){return{type:Q,isFetching:e}},G=function(e,t){return{type:F,isFetching:e,userId:t}},Y=function(){var e=Object(B.a)(w.a.mark((function e(t,n,r,i){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(G(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(i(n)),t(G(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,i){return e.apply(this,arguments)}}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(S.a)(Object(S.a)({},e),{},{users:k(e.users,t.userId,"id",{followed:!0})});case N:return Object(S.a)(Object(S.a)({},e),{},{users:k(e.users,t.userId,"id",{followed:!1})});case R:return Object(S.a)(Object(S.a)({},e),{},{users:t.users});case U:return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case y:return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.count});case Q:return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case F:return Object(S.a)(Object(S.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(I.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},J=n(50),Z=n(68),H=n(127),W=n(70),X=n.n(W),K=n(133),V=n.n(K),q=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,i=e.onPageChanged,c=e.portionSize,a=void 0===c?10:c,s=Math.ceil(t/n),o=[],u=1;u<=s;u++)o.push(u);var l=Math.ceil(s/a),d=Object(A.useState)(1),j=Object(H.a)(d,2),b=j[0],f=j[1],g=(b-1)*a+1,h=b*a;return Object(p.jsxs)("div",{className:X.a.paginator,children:[b>1&&Object(p.jsx)("button",{onClick:function(){f(b-1)},children:"PREV"}),o.filter((function(e){return e>=g&&e<=h})).map((function(e){return Object(p.jsx)("span",{className:V()(Object(Z.a)({},X.a.selectedPage,r===e),X.a.pageNumber),onClick:function(t){i(e)},children:e},e)})),l>b&&Object(p.jsx)("button",{onClick:function(){f(b+1)},children:"NEXT"})]})},$=n(134),ee=n.n($),te=n.p+"static/media/user.e527c605.png",ne=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,i=e.follow;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(d.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{src:null!=t.photos.small?t.photos.small:te,className:ee.a.userPhoto})})}),Object(p.jsx)("div",{children:t.followed?Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(p.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){i(t.id)},children:"Follow"})})]}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:t.status})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:"user.location.country"}),Object(p.jsx)("div",{children:"user.location.city"})]})]})]})},re=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],ie=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,i=e.onPageChanged,c=e.users,a=Object(J.a)(e,re);return Object(p.jsxs)("div",{children:[Object(p.jsx)(q,{currentPage:t,onPageChanged:i,totalItemsCount:n,pageSize:r}),Object(p.jsx)("div",{children:c.map((function(e){return Object(p.jsx)(ne,{user:e,followingInProgress:a.followingInProgress,unfollow:a.unfollow,follow:a.follow},e.id)}))})]})},ce=n(66),ae=n(8),se=n(138),oe=Object(se.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ue=function(e){return e.usersPage.pageSize},Ae=function(e){return e.usersPage.totalUsersCount},le=function(e){return e.usersPage.currentPage},de=function(e){return e.usersPage.isFetching},je=function(e){return e.usersPage.followingInProgress},be=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.isFetching?Object(p.jsx)(ce.a,{}):null,Object(p.jsx)(ie,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(l.a.Component),fe=Object(ae.d)(Object(m.b)((function(e){return{users:oe(e),pageSize:ue(e),totalUsersCount:Ae(e),currentPage:le(e),isFetching:de(e),followingInProgress:je(e)}}),{follow:function(e){return function(){var t=Object(B.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y(n,e,C.c.follow.bind(C.c),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(B.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y(n,e,C.c.unfollow.bind(C.c),D);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:_,toggleFollowingProgress:G,requestUsers:function(e,t){return function(){var n=Object(B.a)(w.a.mark((function n(r){var i;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(M(!0)),r(_(e)),n.next=4,C.c.getUsers(e,t);case 4:i=n.sent,r(M(!1)),r((a=i.items,{type:R,users:a})),r((c=i.totalCount,{type:y,count:c}));case 8:case"end":return n.stop()}var c,a}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(be),ge=(n(197),function(e){return Object(p.jsx)("div",{children:"News"})}),he=(n(198),function(e){return Object(p.jsx)("div",{children:"Music"})}),pe=function(e){return Object(p.jsx)("div",{children:"Settings"})},Oe=n(92),me=n.n(Oe),ve=function(e){return Object(p.jsxs)("header",{className:me.a.header,children:[Object(p.jsx)("img",{src:"data:image/gif;base64,R0lGODlhWAAfAPeiAAMBAQYBAQAAAAIBAwEHGwEJEC8QASMWAQEBAQIDAQELBwECARwZAQEHsgElDQ4GAScBFAEmBQkIAUgBEBABEzgBOAUBBAEiHBcBAREBEQgIAQEMAgEKCQEDATsBLwUBBgEDAgEhIQEgJwsLAQMLAQcJAQFubhMBoxkaARMBBXRIARAfAQImAQEDNgoEAcYBnwFqggEdNjsBMDkBLgWAAVJVAQEBAjUBGzI6/wEHqgoBAQcbAS0BTHNHAQEZLwEcIgIjAZ4zAQFqWBIBDgV7AQYBEwEONg0YARYcAQ4BGAECDwMCASUBPhYTARMBFgEDA7kBlTgBDXMBGQEWGwF8DzQ7/wUEAT9RARQDASUBbQcaAQELBQEMAQICAa4B0AEYEAkGAQEbEQYDAQF2Rx4TARoXASIBIioBFQcBATEBMQYBMgEKCgEGkwIBAg8BgAEKBCkBRgEgDBYBCwEEDwQDAR0BMA8BDwECCAEKEwQCAQwXAQQBBwIBDg4CAZMBkwUGAQYHAQQHARQBCgURAVFUASQBbQEKDB4BWkleAQwBBAQBHBgfAWgd/0FUAUQBD0ABIAEmIAYEAV4Bnw4BEcEBYQFtDScBLwFrawEBBAEZHk0BAbQBJrwBvUcx/wEWCWge/w0BAf///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkFFNDkxNjBGQkY5NERGMTFBQjlBOTcxMEVDRTNGNkE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5RkFCMTRDMTVFOTExRUNCNEYxOEYwMjNBQTNGNzhBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5RkFCMTRCMTVFOTExRUNCNEYxOEYwMjNBQTNGNzhBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2NjQ0MzMwRTkxNUVDMTFBMDE3QTVBMDM2NTczNkFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFFNDkxNjBGQkY5NERGMTFBQjlBOTcxMEVDRTNGNkE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAogAsAAAAAFgAHwAACP8ARQkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gJQIQlUfUElFdRP0R1UhUIFEJRAERRUXUG1ECREESdUkUDFEFRBEQ1UDUCVGMREkS5URUGlEvRJ0RNXJkyKtYKQYQ5UIUGVFNRNUQhUiUHlFaRLEQtUFUHFFfRAkRZUKUCKBCRVURpUZUFlE8RHkRxUmUB1GURKXAmbWxY4ZbH4g6IEqCKBSiSohaISqUKBqiIohyIGqMqAud7YqKkbdFas8DRFEQVcGwqBuipIgC9bi374GRRakQxUCUhswwU3NhK2qLKAWiOKR+gneoElF8Usf+ICqDqBmi5Ij/SkT1t3nHWEQFmUz8tXvP8FMjeJ+6aPz7oiyIgiDKkSgd5wV41VYGsOfZcfPFFF8HoizAWHw55YQJfbHF1kZq/G0iiiYCdugRgexZht+I8tHnmWvx7SEKd955ltNiGHgoo0YgDlccZkhsJgoJqTFIGnTShSBKJqLYIModouRglCiFiJKEbLSJAsV+okQhSowzZlkRiD2IUoYohIhyhShH7JiaaD+eRpcoP4iChyhGiIKDKJ2I8okoTIgyiSh+iCKDKI+IMoEoaGhpqER9iCIZGKJYIcoIoiyS3A5qiVKJKJ6IEoYoIIgipCHVESWKG6IcIkodosRmhihDiCKIoOUdQSprQyOJIUokotDxqCiAiDLfIKIQEVqDxHa6hihTiOKDKHOIwoYoiohShChwiGKJKHbkV15OVs3q7bfghisuRAEBADs="}),Object(p.jsx)("div",{className:me.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{children:[e.login," - ",Object(p.jsx)("button",{onClick:e.logout,children:"Log Out"})]}):Object(p.jsx)(d.b,{to:"/login",children:"Login"})})]})},Ee=n(42),xe="samurai-network/auth/SET_USER_DATA",we={userId:null,email:null,login:null,isAuth:!1},Be=function(e,t,n,r){return{type:xe,payload:{userId:e,email:t,login:n,isAuth:r}}},Ie=function(){return function(){var e=Object(B.a)(w.a.mark((function e(t){var n,r,i,c,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,i=r.id,c=r.email,a=r.login,t(Be(i,c,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(S.a)(Object(S.a)({},e),t.payload);default:return e}},Ce=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsx)(ve,Object(S.a)({},this.props))}}]),n}(l.a.Component),ke=Object(m.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(B.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.logout();case 2:0===e.sent.data.resultCode&&t(Be(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ce),Pe=n(126),Ne=n(74),Re=n(32),Ue=n(51),ye=n.n(Ue),Qe=Object(Pe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(Re.c)("Email","email",[Ne.b],Re.a),Object(Re.c)("Password","password",[Ne.b],Re.a,{type:"password"}),Object(Re.c)(null,"rememberMe",[],Re.a,{type:"checkbox"},"remember me"),n&&Object(p.jsx)("div",{className:ye.a.formSummaryError,children:n}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})})]})})),Fe=Object(m.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(B.a)(w.a.mark((function r(i){var c,a;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?i(Ie()):(a=c.data.messages.length>0?c.data.messages[0]:"Some error",i(Object(Ee.a)("login",{_error:a})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(j.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)(Qe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Te="INITIALIZED_SUCCESS",Le={initialized:!1},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te:return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}},_e=n(95),Me=n(125),Ge={bestFriends:[{id:1,name:"Dymich"},{id:2,name:"Andrey"},{id:3,name:"Sveta"}]},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge;return e},ze=n(137),Je=n(128),Ze=Object(ae.c)({profilePage:_e.b,dialogsPage:Me.a,sideBar:Ye,usersPage:z,auth:Se,form:Je.a,app:De}),He=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,We=Object(ae.e)(Ze,He(Object(ae.a)(ze.a)));window.___store___=We;var Xe=We,Ke=l.a.lazy((function(){return n.e(4).then(n.bind(null,305))})),Ve=l.a.lazy((function(){return n.e(3).then(n.bind(null,304))})),qe=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsx)(d.a,{children:Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(ke,{}),Object(p.jsx)(E,{}),Object(p.jsxs)("div",{className:"app-wrapper-content",children:[Object(p.jsxs)(l.a.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:[Object(p.jsx)(j.b,{path:"/dialogs",render:function(){return Object(p.jsx)(Ke,{})}}),Object(p.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(p.jsx)(Ve,{})}})]}),Object(p.jsx)(j.b,{path:"/users",render:function(){return Object(p.jsx)(fe,{})}}),Object(p.jsx)(j.b,{path:"/news",render:function(){return Object(p.jsx)(ge,{})}}),Object(p.jsx)(j.b,{path:"/music",render:function(){return Object(p.jsx)(he,{})}}),Object(p.jsx)(j.b,{path:"/settings",render:function(){return Object(p.jsx)(pe,{})}}),Object(p.jsx)(j.b,{path:"/login",render:function(){return Object(p.jsx)(Fe,{})}})]})]})}):Object(p.jsx)(ce.a,{})}}]),n}(A.Component),$e=Object(ae.d)(j.f,Object(m.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Ie());Promise.all([t]).then((function(){e({type:Te})}))}}}))(qe),et=function(e){return Object(p.jsx)(d.a,{children:Object(p.jsx)(m.a,{store:Xe,children:Object(p.jsx)($e,{})})})};c.a.render(Object(p.jsx)(et,{}),document.getElementById("root")),r()},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return b}));var r=n(3),i=n(50),c=(n(0),n(89)),a=n(51),s=n.n(a),o=n(1),u=["input","meta","child"],A=["input","meta","child"],l=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,i=e.children,c=n&&r;return Object(o.jsxs)("div",{className:s.a.formControl+" "+(c?s.a.error:""),children:[Object(o.jsx)("div",{children:i}),c&&Object(o.jsx)("span",{children:r})]})},d=function(e){var t=e.input,n=(e.meta,e.child,Object(i.a)(e,u));return Object(o.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,e.child,Object(i.a)(e,A));return Object(o.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},b=function(e,t,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,Object(r.a)({placeholder:e,name:t,validate:n,component:i},a))," ",s]})}},51:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1LBAc",error:"FormsControls_error__1XEdf",formSummaryError:"FormsControls_formSummaryError__1HtqL"}},66:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.5fa1fce2.gif",i=n(1);t.a=function(){return Object(i.jsx)("div",{style:{backgroundColor:"white"},children:Object(i.jsx)("img",{src:r})})}},70:function(e,t,n){e.exports={paginator:"Paginator_paginator__2u4bK",pageNumber:"Paginator_pageNumber__wHX6f",selectedPage:"Paginator_selectedPage__3qyFy"}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var r=function(e){if(!e)return"Field is required"},i=function(e){return function(t){if(t&&t.length>e)return"Max length is ${maxLength} symbols"}}},92:function(e,t,n){e.exports={header:"Header_header__GBkl1",loginBlock:"Header_loginBlock__3LUKi"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return p}));var r=n(9),i=n.n(r),c=n(20),a=n(38),s=n(3),o=n(16),u="ADD-POST",A="SET_USER_PROFILE",l="SET_STATUS",d="DELETE_POST",j={posts:[{id:1,message:"Hi, how are you?",likesCount:2},{id:2,message:"It's my first post",likesCount:31},{id:3,message:"Yo",likesCount:2},{id:4,message:"Yo",likesCount:3}],profile:null,status:""},b=function(e){return{type:u,newPostText:e}},f=function(e){return{type:l,status:e}},g=function(e){return function(){var t=Object(c.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((i=r.data,{type:A,profile:i}));case 4:case"end":return t.stop()}var i}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:6,message:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[n]),newPostText:""});case A:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case l:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case d:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[298,1,2]]]);
//# sourceMappingURL=main.14dea221.chunk.js.map