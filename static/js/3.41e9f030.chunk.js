(this["webpackJsonpit-kamasutra-reactjs"]=this["webpackJsonpit-kamasutra-reactjs"]||[]).push([[3],{301:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__16nVP",mainPhoto:"ProfileInfo_mainPhoto__3TWDo"}},302:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__3t9Yg",posts:"MyPosts_posts__c73PI"}},303:function(t,e,s){t.exports={item:"Post_item__2SvGa"}},305:function(t,e,s){"use strict";s.r(e);var i=s(3),o=s(34),n=s(35),r=s(37),a=s(36),c=s(0),u=s.n(c),p=s(66),j=s(301),d=s.n(j),l=s(128),h=s(1),b=function(t){var e=Object(c.useState)(!1),s=Object(l.a)(e,2),i=s[0],o=s[1],n=Object(c.useState)(t.status),r=Object(l.a)(n,2),a=r[0],u=r[1];Object(c.useEffect)((function(){u(t.status)}),[t.status]);return Object(h.jsxs)("div",{children:[!i&&Object(h.jsx)("div",{children:Object(h.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.status||"-----"})}),i&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.updateStatus(a)},value:a})})]})},f=s(105),O=function(t){var e=t.profile,s=t.status,i=t.updateStatus,o=t.isOwner,n=t.savePhoto;if(!e)return Object(h.jsx)(p.a,{});return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:d.a.descriptionBlock,children:[Object(h.jsxs)("div",{children:["id = ",e.userId]}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:e.photos.large||f.a,className:d.a.mainPhoto})}),Object(h.jsx)("div",{children:o&&Object(h.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&n(t.target.files[0])}})}),Object(h.jsx)(b,{status:s,updateStatus:i})]})})},m=s(95),x=s(38),v=s(89),P=s(127),g=s(74),k=s(302),S=s.n(k),_=s(303),y=s.n(_),w=function(t){return Object(h.jsxs)("div",{className:y.a.item,children:[Object(h.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9uFKDM7XSDRSHG2LyI9-q7Sg9C5500PeH0PoOahEJY-2IqJRr6hrUZ40zJeGym3dv3o&usqp=CAU"}),t.message,Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Like"})," ",t.likesCount]})]})},I=s(32),C=Object(g.a)(10),B=Object(P.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(v.a,{name:"newPostText",component:I.b,placeholder:"Post message",validate:[g.b,C]})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Add post"})})]})})),N=u.a.memo((function(t){var e=Object(x.a)(t.posts).reverse().map((function(t){return Object(h.jsx)(w,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(h.jsxs)("div",{className:S.a.postsBlock,children:[Object(h.jsx)("h3",{children:"My posts"}),Object(h.jsx)(B,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(h.jsx)("div",{className:S.a.posts,children:e})]})})),U=s(13),A=Object(U.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(m.a)(e))}}}))(N),D=function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(h.jsx)(A,{})]})},T=s(10),J=s(9),M=function(t){Object(r.a)(s,t);var e=Object(a.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserid)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t){this.props.match.params.userId!=t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(D,Object(i.a)(Object(i.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))})}}]),s}(u.a.Component);e.default=Object(J.d)(Object(U.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserid:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:m.d,getStatus:m.c,updateStatus:m.f,savePhoto:m.e}),T.f)(M)}}]);
//# sourceMappingURL=3.41e9f030.chunk.js.map