(this["webpackJsonpit-kamasutra-reactjs"]=this["webpackJsonpit-kamasutra-reactjs"]||[]).push([[0],{105:function(e,t,n){"use strict";t.a=n.p+"static/media/user.e527c605.png"},12:function(e,t,n){e.exports={nav:"Navbar_nav__2Po6G",item:"Navbar_item__w7is6",activeLink:"Navbar_activeLink__BgW27"}},126:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(38),c=n(3),i="SEND_MESSAGE",a={dialogs:[{id:1,name:"Dymich"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s=function(e){return{type:i,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},130:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__qDjs5",item:"Sidebar_item__QmZHx",activeLink:"Sidebar_activeLink__1VzmG"}},135:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__dO7LR"}},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n(133),c=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"22b94168-25c1-42a1-b082-01d927be30be"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return c.post("follow/".concat(e))},unfollow:function(e){return c.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),a.getProfile(e)}},a={getProfile:function(e){return c.get("profile/"+e)},getStatus:function(e){return c.get("profile/status/"+e)},updateStatus:function(e){return c.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),c.put("profile/photo",t,{"Content-Type":"multipart/form-data"})}},s={me:function(){return c.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return c.post("auth/login",{email:e,password:t,remebmerMe:n})},logout:function(){return c.delete("auth/login")}}},169:function(e,t,n){},198:function(e,t,n){},199:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,304)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))},c=n(64),i=n.n(c),a=n(34),s=n(35),o=n(37),u=n(36),A=n(0),l=n.n(A),d=(n(169),n(14)),j=n(10),b=n(12),f=n.n(b),p=n(130),h=n.n(p),g=n(1),O=function(e){var t=e.bestFriends.map((function(e){return Object(g.jsxs)("b",{children:[e.name," "]},e.id)}));return Object(g.jsxs)("div",{className:h.a.sidebar,children:[Object(g.jsx)("div",{children:"Friends"}),t]})},m=n(13),v=Object(m.b)((function(e){return{bestFriends:e.sideBar.bestFriends}}),(function(){return{}}))(O),E=function(e){return Object(g.jsxs)("nav",{className:f.a.nav,children:[Object(g.jsx)("div",{className:f.a.item,children:Object(g.jsx)(d.c,{to:"/profile",activeClassName:f.a.activeLink,children:"Profile"})}),Object(g.jsx)("div",{className:"".concat(f.a.item," ").concat(f.a.active),children:Object(g.jsx)(d.c,{to:"/dialogs",activeClassName:f.a.activeLink,children:"Messages"})}),Object(g.jsx)("div",{className:"".concat(f.a.item," ").concat(f.a.active),children:Object(g.jsx)(d.c,{to:"/users",activeClassName:f.a.activeLink,children:"Users"})}),Object(g.jsx)("div",{className:f.a.item,children:Object(g.jsx)(d.c,{to:"/news",activeClassName:f.a.activeLink,children:"News"})}),Object(g.jsx)("div",{className:f.a.item,children:Object(g.jsx)(d.c,{to:"/music",activeClassName:f.a.activeLink,children:"Music"})}),Object(g.jsx)("div",{className:f.a.item,children:Object(g.jsx)(d.c,{to:"/settings",activeClassName:f.a.activeLink,children:"Settings"})}),Object(g.jsx)(v,{})]})},x=n(8),w=n.n(x),B=n(17),I=n(38),S=n(3),C=n(15),k=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(S.a)(Object(S.a)({},e),r):e}))},P="FOLLOW",N="UNFOLLOW",y="SET_USERS",R="SET_CURRENT_PAGE",U="SET_TOTAL_USERS_COUNT",F="TOGGLE_IS_FETCHING",Q="TOGGLE_IS_FOLLOWING_PROGRESS",T={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},D=function(e){return{type:P,userId:e}},L=function(e){return{type:N,userId:e}},_=function(e){return{type:R,currentPage:e}},M=function(e){return{type:F,isFetching:e}},G=function(e,t){return{type:Q,isFetching:e,userId:t}},Y=function(){var e=Object(B.a)(w.a.mark((function e(t,n,r,c){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(G(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(c(n)),t(G(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(S.a)(Object(S.a)({},e),{},{users:k(e.users,t.userId,"id",{followed:!0})});case N:return Object(S.a)(Object(S.a)({},e),{},{users:k(e.users,t.userId,"id",{followed:!1})});case y:return Object(S.a)(Object(S.a)({},e),{},{users:t.users});case R:return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case U:return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.count});case F:return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case Q:return Object(S.a)(Object(S.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(I.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},J=n(50),H=n(68),Z=n(128),W=n(70),X=n.n(W),V=n(134),K=n.n(V),q=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,c=e.onPageChanged,i=e.portionSize,a=void 0===i?10:i,s=Math.ceil(t/n),o=[],u=1;u<=s;u++)o.push(u);var l=Math.ceil(s/a),d=Object(A.useState)(1),j=Object(Z.a)(d,2),b=j[0],f=j[1],p=(b-1)*a+1,h=b*a;return Object(g.jsxs)("div",{className:X.a.paginator,children:[b>1&&Object(g.jsx)("button",{onClick:function(){f(b-1)},children:"PREV"}),o.filter((function(e){return e>=p&&e<=h})).map((function(e){return Object(g.jsx)("span",{className:K()(Object(H.a)({},X.a.selectedPage,r===e),X.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),l>b&&Object(g.jsx)("button",{onClick:function(){f(b+1)},children:"NEXT"})]})},$=n(135),ee=n.n($),te=n(105),ne=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,c=e.follow;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:Object(g.jsx)(d.c,{to:"/profile/"+t.id,children:Object(g.jsx)("img",{src:null!=t.photos.small?t.photos.small:te.a,className:ee.a.userPhoto})})}),Object(g.jsx)("div",{children:t.followed?Object(g.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(g.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})})]}),Object(g.jsxs)("span",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:t.name}),Object(g.jsx)("div",{children:t.status})]}),Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:"user.location.country"}),Object(g.jsx)("div",{children:"user.location.city"})]})]})]})},re=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],ce=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,c=e.onPageChanged,i=e.users,a=Object(J.a)(e,re);return Object(g.jsxs)("div",{children:[Object(g.jsx)(q,{currentPage:t,onPageChanged:c,totalItemsCount:n,pageSize:r}),Object(g.jsx)("div",{children:i.map((function(e){return Object(g.jsx)(ne,{user:e,followingInProgress:a.followingInProgress,unfollow:a.unfollow,follow:a.follow},e.id)}))})]})},ie=n(66),ae=n(9),se=n(139),oe=Object(se.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ue=function(e){return e.usersPage.pageSize},Ae=function(e){return e.usersPage.totalUsersCount},le=function(e){return e.usersPage.currentPage},de=function(e){return e.usersPage.isFetching},je=function(e){return e.usersPage.followingInProgress},be=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[this.props.isFetching?Object(g.jsx)(ie.a,{}):null,Object(g.jsx)(ce,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(l.a.Component),fe=Object(ae.d)(Object(m.b)((function(e){return{users:oe(e),pageSize:ue(e),totalUsersCount:Ae(e),currentPage:le(e),isFetching:de(e),followingInProgress:je(e)}}),{follow:function(e){return function(){var t=Object(B.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y(n,e,C.c.follow.bind(C.c),D);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(B.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y(n,e,C.c.unfollow.bind(C.c),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:_,toggleFollowingProgress:G,requestUsers:function(e,t){return function(){var n=Object(B.a)(w.a.mark((function n(r){var c;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(M(!0)),r(_(e)),n.next=4,C.c.getUsers(e,t);case 4:c=n.sent,r(M(!1)),r((a=c.items,{type:y,users:a})),r((i=c.totalCount,{type:U,count:i}));case 8:case"end":return n.stop()}var i,a}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(be),pe=(n(198),function(e){return Object(g.jsx)("div",{children:"News"})}),he=(n(199),function(e){return Object(g.jsx)("div",{children:"Music"})}),ge=function(e){return Object(g.jsx)("div",{children:"Settings"})},Oe=n(92),me=n.n(Oe),ve=function(e){return Object(g.jsxs)("header",{className:me.a.header,children:[Object(g.jsx)("img",{src:"data:image/gif;base64,R0lGODlhWAAfAPeiAAMBAQYBAQAAAAIBAwEHGwEJEC8QASMWAQEBAQIDAQELBwECARwZAQEHsgElDQ4GAScBFAEmBQkIAUgBEBABEzgBOAUBBAEiHBcBAREBEQgIAQEMAgEKCQEDATsBLwUBBgEDAgEhIQEgJwsLAQMLAQcJAQFubhMBoxkaARMBBXRIARAfAQImAQEDNgoEAcYBnwFqggEdNjsBMDkBLgWAAVJVAQEBAjUBGzI6/wEHqgoBAQcbAS0BTHNHAQEZLwEcIgIjAZ4zAQFqWBIBDgV7AQYBEwEONg0YARYcAQ4BGAECDwMCASUBPhYTARMBFgEDA7kBlTgBDXMBGQEWGwF8DzQ7/wUEAT9RARQDASUBbQcaAQELBQEMAQICAa4B0AEYEAkGAQEbEQYDAQF2Rx4TARoXASIBIioBFQcBATEBMQYBMgEKCgEGkwIBAg8BgAEKBCkBRgEgDBYBCwEEDwQDAR0BMA8BDwECCAEKEwQCAQwXAQQBBwIBDg4CAZMBkwUGAQYHAQQHARQBCgURAVFUASQBbQEKDB4BWkleAQwBBAQBHBgfAWgd/0FUAUQBD0ABIAEmIAYEAV4Bnw4BEcEBYQFtDScBLwFrawEBBAEZHk0BAbQBJrwBvUcx/wEWCWge/w0BAf///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkFFNDkxNjBGQkY5NERGMTFBQjlBOTcxMEVDRTNGNkE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5RkFCMTRDMTVFOTExRUNCNEYxOEYwMjNBQTNGNzhBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5RkFCMTRCMTVFOTExRUNCNEYxOEYwMjNBQTNGNzhBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2NjQ0MzMwRTkxNUVDMTFBMDE3QTVBMDM2NTczNkFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFFNDkxNjBGQkY5NERGMTFBQjlBOTcxMEVDRTNGNkE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAogAsAAAAAFgAHwAACP8ARQkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gJQIQlUfUElFdRP0R1UhUIFEJRAERRUXUG1ECREESdUkUDFEFRBEQ1UDUCVGMREkS5URUGlEvRJ0RNXJkyKtYKQYQ5UIUGVFNRNUQhUiUHlFaRLEQtUFUHFFfRAkRZUKUCKBCRVURpUZUFlE8RHkRxUmUB1GURKXAmbWxY4ZbH4g6IEqCKBSiSohaISqUKBqiIohyIGqMqAud7YqKkbdFas8DRFEQVcGwqBuipIgC9bi374GRRakQxUCUhswwU3NhK2qLKAWiOKR+gneoElF8Usf+ICqDqBmi5Ij/SkT1t3nHWEQFmUz8tXvP8FMjeJ+6aPz7oiyIgiDKkSgd5wV41VYGsOfZcfPFFF8HoizAWHw55YQJfbHF1kZq/G0iiiYCdugRgexZht+I8tHnmWvx7SEKd955ltNiGHgoo0YgDlccZkhsJgoJqTFIGnTShSBKJqLYIModouRglCiFiJKEbLSJAsV+okQhSowzZlkRiD2IUoYohIhyhShH7JiaaD+eRpcoP4iChyhGiIKDKJ2I8okoTIgyiSh+iCKDKI+IMoEoaGhpqER9iCIZGKJYIcoIoiyS3A5qiVKJKJ6IEoYoIIgipCHVESWKG6IcIkodosRmhihDiCKIoOUdQSprQyOJIUokotDxqCiAiDLfIKIQEVqDxHa6hihTiOKDKHOIwoYoiohShChwiGKJKHbkV15OVs3q7bfghisuRAEBADs="}),Object(g.jsx)("div",{className:me.a.loginBlock,children:e.isAuth?Object(g.jsxs)("div",{children:[e.login," - ",Object(g.jsx)("button",{onClick:e.logout,children:"Log Out"})]}):Object(g.jsx)(d.c,{to:"/login",children:"Login"})})]})},Ee=n(42),xe="samurai-network/auth/SET_USER_DATA",we={userId:null,email:null,login:null,isAuth:!1},Be=function(e,t,n,r){return{type:xe,payload:{userId:e,email:t,login:n,isAuth:r}}},Ie=function(){return function(){var e=Object(B.a)(w.a.mark((function e(t){var n,r,c,i,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,i=r.email,a=r.login,t(Be(c,i,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(S.a)(Object(S.a)({},e),t.payload);default:return e}},Ce=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(g.jsx)(ve,Object(S.a)({},this.props))}}]),n}(l.a.Component),ke=Object(m.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(B.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.logout();case 2:0===e.sent.data.resultCode&&t(Be(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ce),Pe=n(127),Ne=n(74),ye=n(32),Re=n(51),Ue=n.n(Re),Fe=Object(Pe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(g.jsxs)("form",{onSubmit:t,children:[Object(ye.c)("Email","email",[Ne.b],ye.a),Object(ye.c)("Password","password",[Ne.b],ye.a,{type:"password"}),Object(ye.c)(null,"rememberMe",[],ye.a,{type:"checkbox"},"remember me"),n&&Object(g.jsx)("div",{className:Ue.a.formSummaryError,children:n}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{children:"Login"})})]})})),Qe=Object(m.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(B.a)(w.a.mark((function r(c){var i,a;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.a.login(e,t,n);case 2:0===(i=r.sent).data.resultCode?c(Ie()):(a=i.data.messages.length>0?i.data.messages[0]:"Some error",c(Object(Ee.a)("login",{_error:a})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(g.jsx)(j.a,{to:"/profile"}):Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Login"}),Object(g.jsx)(Fe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Te="INITIALIZED_SUCCESS",De={initialized:!1},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te:return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}},_e=n(95),Me=n(126),Ge={bestFriends:[{id:1,name:"Dymich"},{id:2,name:"Andrey"},{id:3,name:"Sveta"}]},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge;return e},ze=n(138),Je=n(129),He=Object(ae.c)({profilePage:_e.b,dialogsPage:Me.a,sideBar:Ye,usersPage:z,auth:Se,form:Je.a,app:Le}),Ze=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,We=Object(ae.e)(He,Ze(Object(ae.a)(ze.a)));window.___store___=We;var Xe=We,Ve=l.a.lazy((function(){return n.e(4).then(n.bind(null,306))})),Ke=l.a.lazy((function(){return n.e(3).then(n.bind(null,305))})),qe=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(g.jsx)(d.b,{children:Object(g.jsxs)("div",{className:"app-wrapper",children:[Object(g.jsx)(ke,{}),Object(g.jsx)(E,{}),Object(g.jsxs)("div",{className:"app-wrapper-content",children:[Object(g.jsxs)(l.a.Suspense,{fallback:Object(g.jsx)("div",{children:"Loading..."}),children:[Object(g.jsx)(j.b,{path:"/dialogs",render:function(){return Object(g.jsx)(Ve,{})}}),Object(g.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(g.jsx)(Ke,{})}})]}),Object(g.jsx)(j.b,{path:"/users",render:function(){return Object(g.jsx)(fe,{})}}),Object(g.jsx)(j.b,{path:"/news",render:function(){return Object(g.jsx)(pe,{})}}),Object(g.jsx)(j.b,{path:"/music",render:function(){return Object(g.jsx)(he,{})}}),Object(g.jsx)(j.b,{path:"/settings",render:function(){return Object(g.jsx)(ge,{})}}),Object(g.jsx)(j.b,{path:"/login",render:function(){return Object(g.jsx)(Qe,{})}})]})]})}):Object(g.jsx)(ie.a,{})}}]),n}(A.Component),$e=Object(ae.d)(j.f,Object(m.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Ie());Promise.all([t]).then((function(){e({type:Te})}))}}}))(qe),et=function(e){return Object(g.jsx)(d.a,{children:Object(g.jsx)(m.a,{store:Xe,children:Object(g.jsx)($e,{})})})};i.a.render(Object(g.jsx)(et,{}),document.getElementById("root")),r()},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return b}));var r=n(3),c=n(50),i=(n(0),n(89)),a=n(51),s=n.n(a),o=n(1),u=["input","meta","child"],A=["input","meta","child"],l=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,c=e.children,i=n&&r;return Object(o.jsxs)("div",{className:s.a.formControl+" "+(i?s.a.error:""),children:[Object(o.jsx)("div",{children:c}),i&&Object(o.jsx)("span",{children:r})]})},d=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,u));return Object(o.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,A));return Object(o.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},b=function(e,t,n,c){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,Object(r.a)({placeholder:e,name:t,validate:n,component:c},a))," ",s]})}},51:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1LBAc",error:"FormsControls_error__1XEdf",formSummaryError:"FormsControls_formSummaryError__1HtqL"}},66:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.5fa1fce2.gif",c=n(1);t.a=function(){return Object(c.jsx)("div",{style:{backgroundColor:"white"},children:Object(c.jsx)("img",{src:r})})}},70:function(e,t,n){e.exports={paginator:"Paginator_paginator__2u4bK",pageNumber:"Paginator_pageNumber__wHX6f",selectedPage:"Paginator_selectedPage__3qyFy"}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t&&t.length>e)return"Max length is ${maxLength} symbols"}}},92:function(e,t,n){e.exports={header:"Header_header__GBkl1",loginBlock:"Header_loginBlock__3LUKi"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"f",(function(){return O})),n.d(t,"e",(function(){return m}));var r=n(8),c=n.n(r),i=n(17),a=n(38),s=n(3),o=n(15),u="ADD-POST",A="SET_USER_PROFILE",l="SET_STATUS",d="DELETE_POST",j="SAVE_PHOTO_SUCCESS",b={posts:[{id:1,message:"Hi, how are you?",likesCount:2},{id:2,message:"It's my first post",likesCount:31},{id:3,message:"Yo",likesCount:2},{id:4,message:"Yo",likesCount:3}],profile:null,status:""},f=function(e){return{type:u,newPostText:e}},p=function(e){return{type:l,status:e}},h=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((c=r.data,{type:A,profile:c}));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((c=r.data.data.photos,{type:j,photos:c}));case 4:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:6,message:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[n]),newPostText:""});case A:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case l:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case d:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case j:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[299,1,2]]]);
//# sourceMappingURL=main.f5176b4d.chunk.js.map