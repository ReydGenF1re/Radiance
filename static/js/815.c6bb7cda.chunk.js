"use strict";(self.webpackChunkindividual_project=self.webpackChunkindividual_project||[]).push([[815],{6774:(s,t,e)=>{e.d(t,{I:()=>r,S:()=>n});e(2791);var o=e(5578),a=e(6139),_=e(184);const r=s=>{let{input:t,meta:{touched:e,error:a},...r}=s;const n=a&&e;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("input",{...r,...t}),n&&(0,_.jsx)("div",{className:o.Z.errorText,children:a})]})},n=s=>{let{children:t,id:e,name:o,type:n,validators:i=[]}=s;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a.Z,{type:n,id:e,validate:i,component:r,name:o}),(0,_.jsx)("label",{htmlFor:e,children:t})]})}},5815:(s,t,e)=>{e.r(t),e.d(t,{default:()=>F});var o=e(2791),a=e(6070);const _={section__title:"MyPosts_section__title__Rdkq+",newPost:"MyPosts_newPost__Lp0O3",post__ava:"MyPosts_post__ava__+MrS8",post__input:"MyPosts_post__input__tChNo",post__btn:"MyPosts_post__btn__wIbDs"},r={post:"Post_post__Xs5SA",post__ava:"Post_post__ava__FDLSu",post__user:"Post_post__user__hKYFP",post__username:"Post_post__username__Ud8II",post__time:"Post_post__time__QZ1vT",post__text:"Post_post__text__fJqDs",post__buttons:"Post_post__buttons__NQ4g8",post__btnLike:"Post_post__btnLike__Eu38q",post__btnComment:"Post_post__btnComment__cOdZ8",post__btnShare:"Post_post__btnShare__rgxT2"};var n=e(184);function i(s){let{name:t,date:e,message:o,likes:a,comments:_,shares:i}=s;return(0,n.jsxs)("article",{className:r.post,children:[(0,n.jsxs)("div",{className:r.post__user,children:[(0,n.jsx)("img",{className:r.post__ava,src:"https://cdn.mos.cms.futurecdn.net/wadCYrEXA7JKngzFMgECzh-1200-80.jpg",alt:"Avatar"}),(0,n.jsxs)("div",{className:r.post__userDescr,children:[(0,n.jsx)("span",{className:r.post__username,children:t}),(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:r.post__time,children:e})]})]}),(0,n.jsx)("p",{className:r.post__text,children:o}),(0,n.jsxs)("div",{className:r.post__buttons,children:[(0,n.jsxs)("div",{className:r.post__like,children:[(0,n.jsx)("button",{className:r.post__btnLike}),(0,n.jsx)("span",{className:r.post__likes,children:a})]}),(0,n.jsxs)("div",{className:r.post__comment,children:[(0,n.jsx)("button",{className:r.post__btnComment}),(0,n.jsx)("span",{className:r.post__comments,children:_})]}),(0,n.jsxs)("div",{className:r.post__share,children:[(0,n.jsx)("button",{className:r.post__btnShare}),(0,n.jsx)("span",{className:r.post__shares,children:i})]})]})]})}var l=e(8478),u=e(6139),p=e(704),c=e(1557),m=e(6774);const d=(0,c.D)(400),h=o.memo((s=>{let{addPost:t,posts:e}=s;const o=e.map((s=>(0,n.jsx)(i,{name:s.name,likes:s.likes,shares:s.shares,comments:s.comments,date:s.date,message:s.message})));return(0,n.jsxs)("section",{className:_.posts,children:[(0,n.jsx)(f,{onSubmit:s=>{let{newPostText:e}=s;t(e)}}),o]})})),f=(0,p.Z)({form:"addPostForm"})((s=>{let{handleSubmit:t}=s;return(0,n.jsxs)("form",{onSubmit:t,className:_.newPost,children:[(0,n.jsx)("img",{className:_.post__ava,src:l,alt:"Avatar"}),(0,n.jsx)(u.Z,{component:m.I,name:"newPostText",className:_.post__input,validate:[c.C,d],placeholder:"What\u2019s on your mind?",type:"text"}),(0,n.jsx)("button",{className:_.post__btn})]})}));var x=e(4420);const j=(0,x.$j)((s=>({newPostText:s.profilePage.newPostText,posts:s.profilePage.posts})),((s,t)=>({addPost:e=>{s((0,a.WA)(t.profile.fullName,e))}})))(h),P={user:"ProfileInfo_user__se6Ar",user__background:"ProfileInfo_user__background__IlvBQ",user__profile:"ProfileInfo_user__profile__7MWPu",user__about:"ProfileInfo_user__about__XGCt2",user__ava:"ProfileInfo_user__ava__1OjQP",user__name:"ProfileInfo_user__name__IWXOl",user__status:"ProfileInfo_user__status__mVg3P",section__title:"ProfileInfo_section__title__+ZwG8",about:"ProfileInfo_about__Hn3NF",newPost:"ProfileInfo_newPost__8TF3K",post__ava:"ProfileInfo_post__ava__Tct4W",post__input:"ProfileInfo_post__input__2OqV-",post__btn:"ProfileInfo_post__btn__QZ8oZ",status:"ProfileInfo_status__pm66M",statusBlock:"ProfileInfo_statusBlock__+qyIR"};var g=e(4307);const b=s=>{const[t,e]=(0,o.useState)(!1),[a,_]=(0,o.useState)(s.status);return(0,o.useEffect)((()=>{_(s.status)}),[s.status]),(0,n.jsx)("div",{className:P.statusBlock,children:t?(0,n.jsx)("input",{value:a,onChange:s=>{_(s.target.value)},onBlur:()=>{e(!1),s.updateStatus(a)},className:P.status,type:"text",autoFocus:!0}):(0,n.jsx)("span",{onDoubleClick:()=>{e(!0)},children:s.status||"----"})})};function v(s){var t;let{profile:e,status:o,updateStatus:a}=s;return e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("section",{className:P.user,children:[(0,n.jsx)("img",{className:P.user__background,src:"https://img.freepik.com/premium-photo/palms-exotic-pattern-palm-trees-on-blue-sky-palm-at-tropical-coast-coconut-tree-tropical-backdrop-on-sun-light-sky_265223-30591.jpg",alt:"Background: palms"}),(0,n.jsx)("figure",{className:P.user__profile,children:(0,n.jsx)("img",{src:null!==(t=e.photos.large)&&void 0!==t?t:l,alt:"Avatar"})}),(0,n.jsxs)("div",{className:P.user__about,children:[(0,n.jsx)("h2",{className:P.user__name,children:e.fullName}),(0,n.jsx)(b,{status:o,updateStatus:a})]})]}),e.aboutMe&&(0,n.jsxs)("section",{className:P.about,children:[(0,n.jsx)("h2",{className:P.section__title,children:"About"}),(0,n.jsx)("p",{children:e.aboutMe})]})]}):(0,n.jsx)(g.Z,{})}function N(s){let{profile:t,status:e,updateStatus:o}=s;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{profile:t,status:e,updateStatus:o}),(0,n.jsx)(j,{profile:t})]})}var I=e(7689),k=e(1154);class S extends o.Component{componentDidMount(){let s=this.props.router.params.userID;s||(s=this.props.authorizedUserID,s||this.props.router.navigate("/login/")),s&&this.props.getUserProfile(s),s&&this.props.getStatus(s)}render(){return(0,n.jsx)(n.Fragment,{children:this.props.isFetching?(0,n.jsx)(g.Z,{}):(0,n.jsx)(N,{...this.props,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})})}}const F=(0,k.qC)((0,x.$j)((s=>({profile:s.profilePage.profile,status:s.profilePage.status,isFetching:s.profilePage.isFetching,authorizedUserID:s.auth.userID,isAuth:s.auth.isAuth})),{setUserProfile:a.$l,getUserProfile:a.et,getStatus:a.lR,updateStatus:a.Nf}),(function(s){return function(t){let e=(0,I.TH)(),o=(0,I.s0)(),a=(0,I.UO)();return(0,n.jsx)(s,{...t,router:{location:e,navigate:o,params:a}})}}))(S)},1557:(s,t,e)=>{e.d(t,{C:()=>o,D:()=>a});const o=s=>s?void 0:"Field is required",a=s=>t=>t&&t.length>s?"Max length is ".concat(s," symbols"):void 0},5578:(s,t,e)=>{e.d(t,{Z:()=>o});const o={errorText:"FormControls_errorText__SnW2q",summaryError:"FormControls_summaryError__mS76w"}},8478:(s,t,e)=>{s.exports=e.p+"static/media/user.9532a9f138a7e3251d4a.jpg"}}]);
//# sourceMappingURL=815.c6bb7cda.chunk.js.map