import{j as t,L as a,u as i,e as l,_ as c}from"./index-DfsPqNBX.js";import{E as m}from"./EmailLabel-B02cJqUh.js";import{a as d,A as u}from"./ApplyButton-KHHh9Xh_.js";const p="_icon__eye_grcw5_1",f="_icon__logo_grcw5_1",g="_icon__service_grcw5_1",w="_title_grcw5_1",h="_form_grcw5_1",x="_forgot__buttons__wrapper_grcw5_3",e={icon__eye:p,icon__logo:f,icon__service:g,title:w,form:h,forgot__buttons__wrapper:x},j=({text:o})=>t.jsx(a,{to:"/",className:d.back__link,children:o}),P=()=>{const o=i(),_=s=>{s.preventDefault();const n=s.currentTarget.elements.namedItem("mail");o(l({email:n.value,redirect_url:"https://auth-qa.qencode.com/password-set"})).then(r=>{if(r.meta.requestStatus==="rejected")throw new Error;c.success(r.payload.detail)}).catch(()=>c.error("User not found"))};return t.jsxs("div",{children:[t.jsx("h2",{className:e.title,children:"Forgot Password?"}),t.jsxs("form",{onSubmit:_,className:e.form,children:[t.jsx(m,{placeholder:"Enter your email"}),t.jsxs("div",{className:e.forgot__buttons__wrapper,children:[t.jsx(u,{text:"Send"}),t.jsx(j,{text:"Cancel"})]})]})]})};export{P as default};
