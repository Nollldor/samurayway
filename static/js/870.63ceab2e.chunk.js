"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[870],{2870:function(e,t,s){s.r(t),s.d(t,{ProfileContainer:function(){return I}});var n=s(364),r=s(1413),a=s(2791),i="Profile_profileImg__ZRmmw",u="Posts_profile__bCePr",o="Posts_messages__w5oYu",l="Post_item__qeYgu",c=s(184),d=function(e){return(0,c.jsxs)("div",{className:l,children:[(0,c.jsx)("img",{src:"https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg"}),(0,c.jsx)("div",{children:e.messageText}),(0,c.jsxs)("span",{children:[" ",e.likesNumber," "]}),(0,c.jsx)("button",{children:"like"})]})},f=s(81),h=s(6139),p=s(704),m=s(3079),x=s(6854),j=a.memo((function(e){return(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{children:"My posts"}),(0,c.jsx)(v,{onSubmit:function(t){e.addPost(t.newPostText)}})]})})),g=(0,m.D)(10),v=(0,p.Z)({form:"addNewPost"})((function(e){return(0,c.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,c.jsx)("div",{children:(0,c.jsx)(h.Z,{component:x.gx,name:"newPostText",placeholder:"New Post",validate:[m.l,g]})}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})),P=(0,n.$j)((function(e){return{NewPostText:"state.profilePage.NewPostText"}}),(function(e){return{addPost:function(t){e((0,f.q2)(t))}}}))(j),k=function(){var e=(0,n.v9)((function(e){return e.profilePage.posts})).map((function(e,t){return(0,c.jsx)(d,{messageText:e.messageText,likesNumber:e.likesNumber},t)}));return(0,c.jsxs)("div",{className:u,children:[(0,c.jsx)(P,{}),(0,c.jsx)("div",{className:o,children:e})]})},_="ProfileInfo_userInfo__mHTe6",b="ProfileInfo_avatar__wlKPZ",S=s(885),N=function(e){var t=e.updateStatus,s=e.status,n=(0,a.useState)(!1),r=(0,S.Z)(n,2),i=r[0],u=r[1],o=(0,a.useState)(s),l=(0,S.Z)(o,2),d=l[0],f=l[1];(0,a.useEffect)((function(){f(s)}),[s]);return i?(0,c.jsx)("input",{autoFocus:!0,onBlur:function(){u(!1),t(d)},placeholder:s,onChange:function(e){f(e.currentTarget.value)},value:d}):(0,c.jsxs)("span",{onDoubleClick:function(){u(!0)},children:["Status: ",s," "]})},T=function(e){var t=e.profile,s=e.updateStatus,n=e.status;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:_,children:[(0,c.jsx)("div",{children:(0,c.jsx)("img",{className:b,src:t.photos.large,alt:"user-avatar"})}),(0,c.jsx)(N,{updateStatus:s,status:n}),(0,c.jsxs)("div",{children:["Full Name: ",t.fullName]}),t.lookingForAJob&&(0,c.jsxs)("div",{children:["Looking for a job: ",t.lookingForAJobDescription]}),"avatar+description"]})})},w=function(e){var t=e.profile,s=e.updateStatus,n=e.status;return(0,c.jsxs)("div",{className:i,children:[(0,c.jsx)(T,{profile:t,status:n,updateStatus:s}),(0,c.jsx)(k,{})]})},Z=s(819),I=(0,n.$j)((function(e){return{profile:e.profilePage.profile,profileStatus:e.profilePage.status,isAuth:e.auth.isAuth,authorisedUserID:e.auth.id}}),{setUserProfile:f.$l,getProfileThunk:f.VB,getStatusThunk:f.$b,updateStatusThunk:f.dw})((function(e){var t=(0,Z.UO)().userId,s=(0,Z.s0)();return(0,a.useEffect)((function(){t||"0"===(t=e.authorisedUserID.toString())&&s("/login"),e.getProfileThunk(+t),e.getStatusThunk(+t)}),[t]),(0,c.jsx)(w,(0,r.Z)((0,r.Z)({},e),{},{profile:e.profile,status:e.profileStatus,updateStatus:e.updateStatusThunk}))}))}}]);
//# sourceMappingURL=870.63ceab2e.chunk.js.map