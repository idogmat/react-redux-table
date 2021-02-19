(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{104:function(e,t,n){},109:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),i=n.n(o),s=(n(104),n(39)),c=n(81),l=n(87),u=n(32),d="GET_SOME_FORMS",h="FILTER_COLUMN",m="TOGGLE_IS_FETCHING",j="CREATE_NEW_FORM",b={formData:[],isFetching:!1,sortRow:!1},f=function(e){return{type:d,form:e}},p=function(e){return{type:m,isFetching:e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n=Object(u.a)({},e);switch(n.formData=Object(l.a)(e.formData),t.type){case d:return n.formData=t.form,n;case m:return n.isFetching=t.isFetching,n;case j:return n.formData.unshift(t.newForm),n;case h:console.log(t.sortRow);var r=new Array(n.formData);return t.sortRow.sortRow?(r[0].sort((function(e,n){return n[t.column.column]<e[t.column.column]?1:-1})),n.sortRow=!1):(r[0].sort((function(e,n){return n[t.column.column]>e[t.column.column]?1:-1})),n.sortRow=!0),n.formData=r[0],n.ifFetching=!1,n;default:return e}},g=Object(s.c)({formReducer:O}),x=Object(s.d)(g,Object(s.a)(c.a)),v=n(20),w=n(21),C=n(28),N=n(26),k=n(56),R=(n(109),n(181)),F=n(19),y=n(89),S=n(84),T=n.n(S),M=n(3),P=function(e){Object(C.a)(n,e);var t=Object(N.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.inputRef,Object(y.a)(e,["inputRef"]));return Object(M.jsx)("div",{children:Object(M.jsx)(T.a,Object(u.a)(Object(u.a)({},t),{},{mask:["(",/[1-9]/,/\d/,/\d/,")",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholderChar:"\u2000",placeholder:"(999)999-9999",value:this.props.value,showMask:!1,keepCharPositions:!1}))})}}]),n}(a.a.Component),E=function(e){Object(C.a)(n,e);var t=Object(N.a)(n);function n(e){var r;return Object(v.a)(this,n),(r=t.call(this,e)).handleChange=function(e){switch(e.target.name){case"id":r.setState({id:e.target.value});break;case"firstName":r.setState({firstName:e.target.value});break;case"lastName":r.setState({lastName:e.target.value});break;case"email":r.setState({email:e.target.value});break;case"phone":r.setState({phone:e.target.value});break;default:console.log(e)}},r.handleSubmit=function(){var e=Object(u.a)({},r.state);r.props.pushFormOnStore(e)},r.state={id:"",firstName:"",lastName:"",email:"",phone:""},r}return Object(w.a)(n,[{key:"componentDidMount",value:function(){F.ValidatorForm.addValidationRule("isName",(function(e){var t=function(e){return/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+$/.test(e)};return console.log(t(e)),!!t(e)})),F.ValidatorForm.addValidationRule("isPhone",(function(e){var t=function(e){return/^((8|\+7)[/\- ]?)?(\(?\d{3}\)?[/\- ]?)?[\d\- ]{7,10}$/.test(e)};return console.log(t(e)),!!t(e)}))}},{key:"render",value:function(){var e=this.state,t=e.id,n=e.firstName,r=e.lastName,a=e.email,o=e.phone;return Object(M.jsxs)(F.ValidatorForm,{className:"ValidatorForm",ref:"form",onSubmit:this.handleSubmit,onError:function(e){return console.log(e)},children:[Object(M.jsx)(F.TextValidator,{label:"id",onChange:this.handleChange,name:"id",type:"number",value:t,validators:["required"],errorMessages:["this field is required","id is not valid"]}),Object(M.jsx)(F.TextValidator,{label:"firstName",onChange:this.handleChange,name:"firstName",type:"text",value:n,validators:["isName"],errorMessages:["firstName is not valid"]}),Object(M.jsx)(F.TextValidator,{label:"lastName",onChange:this.handleChange,name:"lastName",type:"text",value:r,validators:["isName"],errorMessages:["this field is required","lastName  is not valid"]}),Object(M.jsx)(F.TextValidator,{label:"email",onChange:this.handleChange,name:"email",type:"email",value:a,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),Object(M.jsx)(F.TextValidator,{label:"phone",onChange:this.handleChange,name:"phone",value:o,validators:["isPhone"],errorMessages:["phone is not valid"],InputProps:{inputComponent:P}}),Object(M.jsx)(R.a,{type:"submit",children:"Submit"})]})}}]),n}(a.a.Component),L=n(60),V=function(){return L.get("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}").then((function(e){return e.data}))},D=function(){return L.get("http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}").then((function(e){return e.data}))},I=n(88),_=n(182),q=n(192),A=n(186),B=n(185),z=n(188),G=n(190),J=n(184),$=n(191),H=n(189),U=n(183),W=n(187),Z=n(180),K=n(86),Q=n.n(K),X=n(85),Y=n.n(X),ee=Object(_.a)({root:{"& > *":{borderBottom:"unset"}}});function te(e){var t=e.row,n=a.a.useState(!1),r=Object(I.a)(n,2),o=r[0],i=r[1],s=ee();return Object(M.jsxs)(a.a.Fragment,{children:[Object(M.jsxs)(U.a,{className:s.root,children:[Object(M.jsx)(J.a,{children:Object(M.jsx)(B.a,{"aria-label":"expand row",size:"small",onClick:function(){return i(!o)},children:o?Object(M.jsx)(Y.a,{}):Object(M.jsx)(Q.a,{})})}),Object(M.jsx)(J.a,{component:"th",scope:"row",children:t.id}),Object(M.jsx)(J.a,{align:"right",children:t.firstName}),Object(M.jsx)(J.a,{align:"right",children:t.lastName}),Object(M.jsx)(J.a,{align:"right",children:t.email}),Object(M.jsx)(J.a,{align:"right",children:t.phone})]}),Object(M.jsx)(U.a,{children:Object(M.jsx)(J.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(M.jsx)(A.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(M.jsxs)(q.a,{margin:1,children:[Object(M.jsx)(W.a,{variant:"h6",gutterBottom:!0,component:"div",children:"Info"}),Object(M.jsxs)(z.a,{size:"small","aria-label":"purchases",children:[Object(M.jsx)(H.a,{children:Object(M.jsxs)(U.a,{children:[Object(M.jsx)(J.a,{children:"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),Object(M.jsx)(J.a,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(M.jsx)(J.a,{align:"right",children:"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f"}),Object(M.jsx)(J.a,{align:"right",children:"\u0413\u043e\u0440\u043e\u0434"}),Object(M.jsx)(J.a,{align:"right",children:"\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442"}),Object(M.jsx)(J.a,{align:"right",children:"\u0418\u043d\u0434\u0435\u043a\u0441"})]})}),t.address?Object(M.jsx)(G.a,{children:Object(M.jsxs)(U.a,{children:[Object(M.jsxs)(J.a,{component:"th",scope:"row",children:[t.firstName,t.secondName]}),Object(M.jsx)(J.a,{children:t.description}),Object(M.jsx)(J.a,{align:"right",children:t.address.streetAddress}),Object(M.jsx)(J.a,{align:"right",children:t.address.city}),Object(M.jsx)(J.a,{align:"right",children:t.address.state}),Object(M.jsx)(J.a,{align:"right",children:t.address.zip})]},t.id)}):""]})]})})})})]})}var ne=function(e){Object(C.a)(n,e);var t=Object(N.a)(n);function n(e){var r;return Object(v.a)(this,n),(r=t.call(this,e)).state={sortRow:r.props.sortRow,totalPages:r.props.forms.length/50,currentPage:Number(1),elementsOnPage:50},r}return Object(w.a)(n,[{key:"onPageChange",value:function(e){this.setState({currentPage:e})}},{key:"clickOnColumnType",value:function(e){this.setState({sortRow:!this.state.sortRow}),this.props.filterColumn(e,{sortRow:this.state.sortRow})}},{key:"render",value:function(){for(var e=this,t=this.state,n=t.currentPage,r=t.elementsOnPage,a=n*r,o=a-r,i=this.props.forms.slice(o,a),s=[],c=1;c<=Math.ceil(this.props.forms.length/r);c++)s.push(c);return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)($.a,{component:Z.a,children:Object(M.jsxs)(z.a,{"aria-label":"collapsible table",children:[Object(M.jsx)(H.a,{children:Object(M.jsxs)(U.a,{children:[Object(M.jsx)(J.a,{}),Object(M.jsxs)(J.a,{onClick:function(){return e.clickOnColumnType({column:"id"})},children:["id ",this.props.sortRow?"\u25bc":"\u25b2"]}),Object(M.jsxs)(J.a,{onClick:function(){return e.clickOnColumnType({column:"firstName"})},align:"right",children:["First Name ",this.props.sortRow?"\u25bc":"\u25b2"]}),Object(M.jsxs)(J.a,{onClick:function(){return e.clickOnColumnType({column:"secondName"})},align:"right",children:["Second Name ",this.props.sortRow?"\u25bc":"\u25b2"]}),Object(M.jsxs)(J.a,{onClick:function(){return e.clickOnColumnType({column:"email"})},align:"right",children:["Email ",this.props.sortRow?"\u25bc":"\u25b2"]}),Object(M.jsxs)(J.a,{onClick:function(){return e.clickOnColumnType({column:"phone"})},align:"right",children:["Phone ",this.props.sortRow?"\u25bc":"\u25b2"]})]})}),Object(M.jsx)(G.a,{children:i.map((function(e){return Object(M.jsx)(te,{row:e},e.id+e.firstName+Math.random())}))})]})}),s.map((function(t){return Object(M.jsx)("button",{onClick:function(){return e.onPageChange(t)},children:t})}))]})}}]),n}(a.a.Component),re=function(e){Object(C.a)(n,e);var t=Object(N.a)(n);function n(e){var r;return Object(v.a)(this,n),(r=t.call(this,e)).state={addNewForm:!1},r}return Object(w.a)(n,[{key:"LoadSome",value:function(){this.props.LoadSome()}},{key:"LoadMore",value:function(){this.props.LoadMore()}},{key:"render",value:function(){var e=this;return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{className:"App",children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("button",{onClick:function(){return e.LoadSome()},children:"Some"}),Object(M.jsx)("button",{onClick:function(){return e.LoadMore()},children:"More"}),Object(M.jsx)("button",{onClick:function(){return e.setState({addNewForm:!e.state.addNewForm})},children:"addRow"}),this.state.addNewForm?Object(M.jsx)(E,{pushFormOnStore:this.props.pushFormOnStore,forms:this.props.forms}):""]}),this.props.isFetching?Object(M.jsx)("div",{className:"preloader"}):"",this.props.forms[0]?Object(M.jsx)(ne,{filterColumn:this.props.filterColumn,forms:this.props.forms,sortRow:this.props.sortRow}):""]})})}}]),n}(a.a.Component),ae=Object(k.b)((function(e){return{forms:e.formReducer.formData,isFetching:e.formReducer.isFetching,sortRow:e.formReducer.sortRow}}),{LoadSome:function(){return function(e){e(p(!0)),V().then((function(t){e(p(!1)),e(f(t))})).catch((function(t){console.log(t),e(p(!1))}))}},LoadMore:function(){return function(e){e(p(!0)),D().then((function(t){e(p(!1)),e(f(t))})).catch((function(t){console.log(t),e(p(!1))}))}},filterColumn:function(e,t){return function(n){n(function(e,t){return{type:h,column:e,sortRow:t}}(e,t))}},pushFormOnStore:function(e){return function(t){t(function(e){return{type:j,newForm:e}}(e))}}})(re),oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,194)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};i.a.render(Object(M.jsx)(k.a,{store:x,children:Object(M.jsx)(ae,{})}),document.getElementById("root")),oe()}},[[140,1,2]]]);
//# sourceMappingURL=main.d525bfc6.chunk.js.map