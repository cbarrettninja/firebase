(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,a,t){e.exports=t(299)},173:function(e,a,t){},174:function(e,a,t){},299:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(8),o=t.n(n),s=(t(173),t(30)),i=t(54),c=t(300),m=(t(71),t(20)),u=t(21),p=t(23),d=t(22),E=t(24),h=t(301),f=t(304),g=t(303),v=t(163),y=t(10),b=t(307),w=t(107),O=(t(174),f.a.Title),S=function(e){function a(){var e,t;Object(m.a)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){e||console.log("Received values of form: ",a)})},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(h.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement("div",{style:{"padding-bottom":"10px","text-align":"center"}},r.a.createElement(O,{level:3}," ",r.a.createElement("a",{href:"https://www.ols-med.net/ols-private-privacy-disclosure-updates-06-2019"},"786.OLS onelightsystem Meditation\xae ")," ")),r.a.createElement(h.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(v.a,{prefix:r.a.createElement(y.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(h.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(v.a,{prefix:r.a.createElement(y.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(h.a.Item,null,e("remember",{valuePropName:"checked",initialValue:!0})(r.a.createElement(b.a,null,"Remember me")),r.a.createElement("a",{className:"login-form-forgot",href:""},"Forgot password"),r.a.createElement(w.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",r.a.createElement("a",{href:"/register"},"register now!")))))}}]),a}(l.Component),L=(c.a.Footer,function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=h.a.create({name:"login"})(S);return r.a.createElement("div",null,r.a.createElement("div",{style:{position:"absolute",top:"10%",left:"50%",marginabsolute:"-350px",marginLeft:"-225px"}},r.a.createElement(e,null)))}}]),a}(l.Component)),I=t(306),x=f.a.Title,C={display:"block",height:"30px",lineHeight:"30px"},P=["/olssregister","/olsmeregister","/olslmregister","/olspregister"],k=function(e){function a(){var e,t;Object(m.a)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={value:0},t.onChange=function(e){console.log("radio checked",e.target.value),t.setState({value:e.target.value})},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"getAccountType",value:function(){}},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",{style:{position:"absolute",top:"10%",left:"50%",margincenter:"-350px",marginLeft:"-225px"}},r.a.createElement(g.a,{style:{display:"inline-flex"}},r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(x,{level:3},"Select an account type")),r.a.createElement("br",null),r.a.createElement(I.a.Group,{onChange:this.onChange,value:this.state.value},r.a.createElement(I.a,{style:C,value:0},"OLS Student (Intro and Initi assesment application)"),r.a.createElement(I.a,{style:C,value:1},"OLSME user (Public 30 days free, corporates or government fees)"),r.a.createElement(I.a,{style:C,value:2},"OLSLM (Investor or buyer)"),r.a.createElement(I.a,{style:C,value:3},"OLS promoter (free account and other OLS sevices)"))),r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(s.b,{to:P[this.state.value]},r.a.createElement(w.a,{type:"primary",size:"large",style:{marginRight:20}},"Next")),r.a.createElement(s.b,{to:"/"},r.a.createElement(w.a,{size:"large"},"Back")))))}}]),a}(l.Component),F=t(132),q=t(308),T=t(81),j=t(302),N=t(164),A=F.a.Option,D=q.a.Option,V={display:"block",height:"30px",lineHeight:"30px"},R=function(e){function a(){var e,t;Object(m.a)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1,autoCompleteResult:[],radioValue0:1},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFieldsAndScroll(function(e,a){e||console.log("Received values of form: ",a)})},t.handleConfirmBlur=function(e){var a=e.target.value;t.setState({confirmDirty:t.state.confirmDirty||!!a})},t.setDate=function(e){console.log("TODO")},t.compareToFirstPassword=function(e,a,l){var r=t.props.form;a&&a!==r.getFieldValue("password")?l("Two passwords that you enter is inconsistent!"):l()},t.validateToNextPassword=function(e,a,l){var r=t.props.form;a&&t.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),l()},t.handleWebsiteChange=function(e){var a;a=e?[".com",".org",".net"].map(function(a){return"".concat(e).concat(a)}):[],t.setState({autoCompleteResult:a})},t.onChange=function(e){console.log("radio checked",e.target.value),t.setState({value:e.target.value})},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a=this.state.autoCompleteResult,t={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};e("prefix",{initialValue:"86"})(r.a.createElement(F.a,{style:{width:70}},r.a.createElement(A,{value:"86"},"+86"),r.a.createElement(A,{value:"87"},"+87"))),a.map(function(e){return r.a.createElement(D,{key:e},e)});return r.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",marginTop:"-350px",marginLeft:"-650px"}},r.a.createElement(g.a,{style:{width:1e3,marginBottom:60}},r.a.createElement(h.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit}),r.a.createElement(h.a.Item,{label:"E-mail"},e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:"Password",hasFeedback:!0},e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(r.a.createElement(v.a.Password,null))),r.a.createElement(h.a.Item,{label:"Confirm Password",hasFeedback:!0},e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(r.a.createElement(v.a.Password,{onBlur:this.handleConfirmBlur}))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"Name\xa0",r.a.createElement(T.a,{title:"First and Last Name?"},r.a.createElement(y.a,{type:"question-circle-o"})))},e("Name",{rules:[{required:!0,message:"Please input your name!",whitespace:!0}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"Onelightsystem OLS experience\xa0")},e("experience",{rules:[{required:!0,message:"Please input your experience!",whitespace:!0}]})(r.a.createElement(I.a.Group,{onChange:this.onChange,value:this.state.radioValue0},r.a.createElement(I.a,{style:V,value:1},"New"),r.a.createElement(I.a,{style:V,value:2},"Received 1 ols introduction before"),r.a.createElement(I.a,{style:V,value:3},"PAST Initiated")))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"How did you find out about OLS\xa0",r.a.createElement(T.a,{title:"OLS promoter - refferal ?"},r.a.createElement(y.a,{type:"question-circle-o"})))},e("Reference",{rules:[{required:!0,message:"Please input a value!",whitespace:!0}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"OLS eae | inuo \xa0",r.a.createElement(T.a,{title:" OLS eae (teacher) OLS inuo (instructor) Each has it is own exchange measurement evaluation protocols to determinate proper OLS service fees energy exchange."},r.a.createElement(y.a,{type:"question-circle-o"})))},e("teacher",{rules:[{required:!0,message:"Please select OLS official!",whitespace:!0}]})(r.a.createElement(I.a.Group,{onChange:this.onChange,value:this.state.radioValue0},r.a.createElement(I.a,{style:V,value:1},"OLS aste. eae | Nazar Asvitlo  CA USA"),r.a.createElement(I.a,{style:V,value:2},"OLS inuo | Rei-Wen Ho  \u6559\u5458 CA USA")))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"Your LOCATION (country, city/town)\xa0",r.a.createElement(T.a,{title:"Determines OLS service value fee* CA$190, Bay Area CA $240 (USA average $160); the rest of countries (Quality of Life GDP value assessment)"},r.a.createElement(y.a,{type:"question-circle-o"})))},e("location",{rules:[{required:!0,message:"Please input a value!",whitespace:!0}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"Your Age\xa0",r.a.createElement(T.a,{title:"Ages 6-12 require a parent"},r.a.createElement(y.a,{type:"question-circle-o"})))},e("age",{rules:[{required:!0,message:"Please input a value!",whitespace:!0}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"Meditation Experience\xa0")},e("experience",{rules:[{required:!0,message:"Please input a value!",whitespace:!0}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"Any Health Issues?\xa0")},e("health",{rules:[{required:!0,message:"Please input a value!",whitespace:!0}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"How soon can you start?\xa0")},e("start",{rules:[{required:!0,message:"Please input a value!",whitespace:!0}]})(r.a.createElement(j.a,{onChange:this.setDate}))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"What is a convenient time to receive OLS INTRO. / INITI?\xa0")},e("start",{rules:[{required:!0,message:"Please input a value!",whitespace:!0}]})(r.a.createElement(N.a,{use12Hours:!0,format:"h:mm a"}))),r.a.createElement(h.a.Item,t,e("agreement2",{valuePropName:"checked"})(r.a.createElement(b.a,null,"All the information submitted in this form is true and correct",r.a.createElement(T.a,{title:"The OLS service fees based on assessment current provided Applicant up to date data (valid 9days after to re-evaluate fees will increse 10%) Expect official @mail (intro@ols-med.net) you will receive Assessed OLS servcie Fees to include 50% pre-payment to Scheduling OLS INTRO. "},r.a.createElement(y.a,{type:"question-circle-o"}))))),r.a.createElement(h.a.Item,t,e("agreement",{valuePropName:"checked"})(r.a.createElement(b.a,null,"I have read and agreed to the ",r.a.createElement("a",{href:"https://www.ols-med.net/ols-private-privacy-disclosure-updates-06-2019"},"terms of service")))),r.a.createElement(h.a.Item,t,r.a.createElement(s.b,{to:"/home"},r.a.createElement(w.a,{type:"primary",htmlType:"submit"},"Register Applicant for a free assesment to receive OLS service intro and Initi"))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"Evaluation credits?\xa0")},r.a.createElement("div",null,r.a.createElement(b.a,null,"(10)Had prior OLS experience?! leave a review on ",r.a.createElement("a",{href:"https://goo.gl/7tsW6L"},"google")),r.a.createElement("br",null),r.a.createElement(b.a,null,"(10)Had prior OLS experience?! leave a review on our ",r.a.createElement("a",{href:"https://goo.gl/dhbvmX"},"lessons")),r.a.createElement("br",null),r.a.createElement(b.a,null,"(5)Subscribed on ",r.a.createElement("a",{href:"https://www.youtube.com/c/ONELIGHTSYSTEMOLSMeditation"}," Youtube")),r.a.createElement(b.a,null,"(5)Followed us on ",r.a.createElement("a",{href:"https://www.crunchbase.com/organization/onelightsystem-ols"},"CrunchBase")),r.a.createElement("br",null),r.a.createElement(b.a,null,"(5)Followed us on ",r.a.createElement("a",{href:"https://www.linkedin.com/company/one-light-system/"},"LinkedIn")),r.a.createElement("br",null),r.a.createElement(b.a,null,"(5)Followed us on ",r.a.createElement("a",{href:"https://www.owler.com/company/ols-med"},"Owler and Weight")),r.a.createElement("br",null),r.a.createElement(b.a,null,"Took our class on ",r.a.createElement("a",{href:"https://www.udemy.com/onelightsystem-olsm/?instructorPreviewMode=guest"},"Udemy")),r.a.createElement("br",null),r.a.createElement(b.a,null,"(5)Liked and share our ",r.a.createElement("a",{href:"https://www.facebook.com/onelightsystem/"},"Facebook")," page"),r.a.createElement("br",null),r.a.createElement(b.a,null,"(5)Took our OLS subscription ",r.a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSfbLCi3OIfYXxriI1ddYm0ekzfFYpqhpExnheEyNUY2FfnEqw/viewform"},"survey")),r.a.createElement("br",null),r.a.createElement(b.a,null,"I can offer something else"),r.a.createElement("br",null),r.a.createElement(b.a,null,"(1) will apply valid crypto currencies to pay for OLS service fees"),r.a.createElement("br",null),r.a.createElement(b.a,null,"(10)I will create video on the OLS experience"),r.a.createElement("br",null),r.a.createElement(b.a,null,"Other: "),r.a.createElement(v.a,{style:{width:100,marginLeft:10}}))))))}}]),a}(r.a.Component),M=h.a.create({name:"register"})(R),B=F.a.Option,H=q.a.Option,Y={display:"block",height:"30px",lineHeight:"30px"},G=function(e){function a(){var e,t;Object(m.a)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1,autoCompleteResult:[],radioValue0:1},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFieldsAndScroll(function(e,a){e||console.log("Received values of form: ",a)})},t.handleConfirmBlur=function(e){var a=e.target.value;t.setState({confirmDirty:t.state.confirmDirty||!!a})},t.setDate=function(e){console.log("TODO")},t.compareToFirstPassword=function(e,a,l){var r=t.props.form;a&&a!==r.getFieldValue("password")?l("Two passwords that you enter is inconsistent!"):l()},t.validateToNextPassword=function(e,a,l){var r=t.props.form;a&&t.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),l()},t.handleWebsiteChange=function(e){var a;a=e?[".com",".org",".net"].map(function(a){return"".concat(e).concat(a)}):[],t.setState({autoCompleteResult:a})},t.onChange=function(e){console.log("radio checked",e.target.value),t.setState({radioValue0:e.target.value}),t.props.form.setFieldsValue({radio:e.target.value})},t.radioValidator=function(e,a,t){a?t():t("Please input your experience!")},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a=this.state.autoCompleteResult;console.log(this.state);var t={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};e("prefix",{initialValue:"86"})(r.a.createElement(F.a,{style:{width:70}},r.a.createElement(B,{value:"86"},"+86"),r.a.createElement(B,{value:"87"},"+87"))),a.map(function(e){return r.a.createElement(H,{key:e},e)});return r.a.createElement("div",{style:{position:"absolute",top:"52%",left:"50%",marginTop:"-300px",marginLeft:"-600px"}},r.a.createElement(g.a,{style:{width:1100,marginBottom:60}},r.a.createElement(h.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit}),r.a.createElement(h.a.Item,{label:"E-mail"},e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:"Password",hasFeedback:!0},e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(r.a.createElement(v.a.Password,null))),r.a.createElement(h.a.Item,{label:"Confirm Password",hasFeedback:!0},e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(r.a.createElement(v.a.Password,{onBlur:this.handleConfirmBlur}))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"Name\xa0",r.a.createElement(T.a,{title:"First and Last Name?"},r.a.createElement(y.a,{type:"question-circle-o"})))},e("Name",{rules:[{required:!0,message:"Please input your name!",whitespace:!0}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"Onelightsystem OLS experience\xa0")},e("radio-experience",{rules:[{required:!0,validator:this.radioValidator,whitespace:!0}]})(r.a.createElement(I.a.Group,{onChange:this.onChange,value:this.state.radioValue0},r.a.createElement(I.a,{style:Y,value:1},"New User"),r.a.createElement(I.a,{style:Y,value:3},"PAST Initiated OLS student")))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"select OLSME usage account \xa0",r.a.createElement(T.a,{title:" to evalueta OLSME services fees "},r.a.createElement(y.a,{type:"question-circle-o"})))},e("radio-experience",{rules:[{required:!0,validator:this.radioValidator,whitespace:!0}]})(r.a.createElement(I.a.Group,{onChange:this.onChange,value:this.state.radioValue0},r.a.createElement(I.a,{style:Y,value:1},"Induvidual",r.a.createElement(T.a,{title:" (30 days free, after fees based on usage and GDP ) "},r.a.createElement(y.a,{type:"question-circle-o"}))),r.a.createElement(I.a,{style:Y,value:3},"Corporation",r.a.createElement(T.a,{title:" (Fees based on size and volume) "},r.a.createElement(y.a,{type:"question-circle-o"}))),r.a.createElement(I.a,{style:Y,value:5},"Govermental entity",r.a.createElement(T.a,{title:"  (Fees based on state and contry) "},r.a.createElement(y.a,{type:"question-circle-o"})),6===this.state.radioValue0?r.a.createElement(v.a,{style:{width:100,marginLeft:10}}):null)))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"How did you find out about OLS\xa0",r.a.createElement(T.a,{title:"OLS promoter - refferal ?"},r.a.createElement(y.a,{type:"question-circle-o"})))},e("Reference",{rules:[{required:!0,message:"Please input a value!",whitespace:!0}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"Your LOCATION (country, city/town)\xa0",r.a.createElement(T.a,{title:"Determines OLS service value fee* CA$190, Bay Area CA $240 (USA average $160); the rest of countries (Quality of Life GDP value assessment)"},r.a.createElement(y.a,{type:"question-circle-o"})))},e("location",{rules:[{required:!0,message:"Please input a value!",whitespace:!0}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,t,e("agreement2",{valuePropName:"checked"})(r.a.createElement(b.a,null,"All the information submitted in this form is true and correct"))),r.a.createElement(h.a.Item,t,e("agreement",{valuePropName:"checked"})(r.a.createElement(b.a,null,"I have read and agreed to the ",r.a.createElement("a",{href:"https://www.ols-med.net/ols-private-privacy-disclosure-updates-06-2019"},"terms of service")))),r.a.createElement(h.a.Item,t,r.a.createElement(s.b,{to:"/home"},r.a.createElement(w.a,{type:"primary",htmlType:"submit"},"OLSME for Corporates or Govermental entity Apply"))),r.a.createElement(h.a.Item,t,r.a.createElement(s.b,{to:"/home"},r.a.createElement(w.a,{type:"primary",htmlType:"submit"},"OLSME user Signup"))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"evaluation credits?\xa0")},r.a.createElement("div",null,r.a.createElement(b.a,null,"Had prior OLS experience?! leave a review on ",r.a.createElement("a",{href:"https://goo.gl/7tsW6L"},"google")),r.a.createElement("br",null),r.a.createElement(b.a,null,"Had prior OLS experience?! leave a review on our ",r.a.createElement("a",{href:"https://goo.gl/dhbvmX"},"lessons")),r.a.createElement("br",null),r.a.createElement(b.a,null,"Followed us on ",r.a.createElement("a",{href:"https://www.crunchbase.com/organization/onelightsystem-ols"},"CrunchBase")),r.a.createElement("br",null),r.a.createElement(b.a,null,"Followed us on ",r.a.createElement("a",{href:"https://www.linkedin.com/company/one-light-system/"},"LinkedIn")),r.a.createElement("br",null),r.a.createElement(b.a,null,"Followed us on ",r.a.createElement("a",{href:"https://www.owler.com/company/ols-med"},"Owler and Weight")),r.a.createElement("br",null),r.a.createElement(b.a,null,"Took our class on ",r.a.createElement("a",{href:"https://www.udemy.com/onelightsystem-olsm/?instructorPreviewMode=guest"},"Udemy")),r.a.createElement("br",null),r.a.createElement(b.a,null,"Liked our ",r.a.createElement("a",{href:"https://www.facebook.com/onelightsystem/"},"Facebook")," page"),r.a.createElement("br",null),r.a.createElement(b.a,null,"Took our OLS subscription ",r.a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSfbLCi3OIfYXxriI1ddYm0ekzfFYpqhpExnheEyNUY2FfnEqw/viewform"},"survey")),r.a.createElement("br",null),r.a.createElement(b.a,null,"I can offer something else"),r.a.createElement("br",null),r.a.createElement(b.a,null,"Used valid crypto currencies to pay for OLS service fees"),r.a.createElement("br",null),r.a.createElement(b.a,null,"I will create videos on the OLS experience"),r.a.createElement("br",null),r.a.createElement(b.a,null,"Other: "),r.a.createElement(v.a,{style:{width:100,marginLeft:10}}))))))}}]),a}(r.a.Component),U=h.a.create({name:"register"})(G),W=F.a.Option,z=q.a.Option,$={display:"block",height:"30px",lineHeight:"30px"},Q=function(e){function a(){var e,t;Object(m.a)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1,autoCompleteResult:[],radioValue0:1},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFieldsAndScroll(function(e,a){e||console.log("Received values of form: ",a)})},t.handleConfirmBlur=function(e){var a=e.target.value;t.setState({confirmDirty:t.state.confirmDirty||!!a})},t.setDate=function(e){console.log("TODO")},t.compareToFirstPassword=function(e,a,l){var r=t.props.form;a&&a!==r.getFieldValue("password")?l("Two passwords that you enter is inconsistent!"):l()},t.validateToNextPassword=function(e,a,l){var r=t.props.form;a&&t.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),l()},t.handleWebsiteChange=function(e){var a;a=e?[".com",".org",".net"].map(function(a){return"".concat(e).concat(a)}):[],t.setState({autoCompleteResult:a})},t.onChange=function(e){console.log("radio checked",e.target.value),t.setState({radioValue0:e.target.value}),t.props.form.setFieldsValue({radio:e.target.value})},t.radioValidator=function(e,a,t){a?t():t("Please input your experience!")},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a=this.state.autoCompleteResult;console.log(this.state);var t={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};e("prefix",{initialValue:"86"})(r.a.createElement(F.a,{style:{width:70}},r.a.createElement(W,{value:"86"},"+86"),r.a.createElement(W,{value:"87"},"+87"))),a.map(function(e){return r.a.createElement(z,{key:e},e)});return r.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",marginTop:"-300px",marginLeft:"-600px"}},r.a.createElement(g.a,{style:{width:1100,marginBottom:60}},r.a.createElement(h.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit}),r.a.createElement(h.a.Item,{label:"E-mail"},e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:"Password",hasFeedback:!0},e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(r.a.createElement(v.a.Password,null))),r.a.createElement(h.a.Item,{label:"Confirm Password",hasFeedback:!0},e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(r.a.createElement(v.a.Password,{onBlur:this.handleConfirmBlur}))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"Name\xa0",r.a.createElement(T.a,{title:"First and Last Name?"},r.a.createElement(y.a,{type:"question-circle-o"})))},e("Name",{rules:[{required:!0,message:"Please input your name!",whitespace:!0}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"How did you find out about OLS\xa0",r.a.createElement(T.a,{title:"OLS promoter - ref. ?"},r.a.createElement(y.a,{type:"question-circle-o"})))},e("Reference",{rules:[{required:!0,message:"Please input a value!",whitespace:!0}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"select OLSLM options \xa0",r.a.createElement(T.a,{title:" OLSLM LIGHT MINUTES OLS equity "},r.a.createElement(y.a,{type:"question-circle-o"})))},e("radio-experience",{rules:[{required:!0,validator:this.radioValidator,whitespace:!0}]})(r.a.createElement(I.a.Group,{onChange:this.onChange,value:this.state.radioValue0},r.a.createElement(I.a,{style:$,value:1},"OLSLM Investor",r.a.createElement(T.a,{title:" (90, 180, 360 days Investing benefits) "},r.a.createElement(y.a,{type:"question-circle-o"}))),r.a.createElement(I.a,{style:$,value:3},"OLSLM buyer",r.a.createElement(T.a,{title:" (min. 1LM category 9 or 10LM category 3) "},r.a.createElement(y.a,{type:"question-circle-o"})),6===this.state.radioValue0?r.a.createElement(v.a,{style:{width:100,marginLeft:10}}):null)))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"Your LOCATION (country, city/town)\xa0")},e("location",{rules:[{required:!0,message:"Please input a value!",whitespace:!0}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,t,e("agreement",{valuePropName:"checked"})(r.a.createElement(b.a,null,"I have read and agreed to the ",r.a.createElement("a",{href:"https://www.ols-med.net/ols-private-privacy-disclosure-updates-06-2019"},"terms of service")))),r.a.createElement(h.a.Item,t,e("agreement2",{valuePropName:"checked"})(r.a.createElement(b.a,null,"All the information submitted in this form is true and correct",r.a.createElement(T.a,{title:" after registration you will receive confirmation your account created "},r.a.createElement(y.a,{type:"question-circle-o"}))))),r.a.createElement(h.a.Item,t,r.a.createElement(s.b,{to:"/home"},r.a.createElement(w.a,{type:"primary",htmlType:"submit"},"Register"))))))}}]),a}(r.a.Component),X=h.a.create({name:"register"})(Q),J=F.a.Option,K=q.a.Option,_={display:"block",height:"30px",lineHeight:"30px"},Z=function(e){function a(){var e,t;Object(m.a)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1,autoCompleteResult:[],radioValue0:1},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFieldsAndScroll(function(e,a){e||console.log("Received values of form: ",a)})},t.handleConfirmBlur=function(e){var a=e.target.value;t.setState({confirmDirty:t.state.confirmDirty||!!a})},t.setDate=function(e){console.log("TODO")},t.compareToFirstPassword=function(e,a,l){var r=t.props.form;a&&a!==r.getFieldValue("password")?l("Two passwords that you enter is inconsistent!"):l()},t.validateToNextPassword=function(e,a,l){var r=t.props.form;a&&t.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),l()},t.handleWebsiteChange=function(e){var a;a=e?[".com",".org",".net"].map(function(a){return"".concat(e).concat(a)}):[],t.setState({autoCompleteResult:a})},t.onChange=function(e){console.log("radio checked",e.target.value),t.setState({radioValue0:e.target.value}),t.props.form.setFieldsValue({radio:e.target.value})},t.radioValidator=function(e,a,t){a?t():t("Please input your experience!")},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a=this.state.autoCompleteResult;console.log(this.state);var t={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};e("prefix",{initialValue:"86"})(r.a.createElement(F.a,{style:{width:70}},r.a.createElement(J,{value:"86"},"+86"),r.a.createElement(J,{value:"87"},"+87"))),a.map(function(e){return r.a.createElement(K,{key:e},e)});return r.a.createElement("div",{style:{position:"absolute",top:"52%",left:"50%",marginTop:"-300px",marginLeft:"-605px"}},r.a.createElement(g.a,{style:{width:1150,marginBottom:60}},r.a.createElement(h.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit}),r.a.createElement(h.a.Item,{label:"E-mail"},e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:"Password",hasFeedback:!0},e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(r.a.createElement(v.a.Password,null))),r.a.createElement(h.a.Item,{label:"Confirm Password",hasFeedback:!0},e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(r.a.createElement(v.a.Password,{onBlur:this.handleConfirmBlur}))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"Name\xa0",r.a.createElement(T.a,{title:"First and Last Name?"},r.a.createElement(y.a,{type:"question-circle-o"})))},e("Name",{rules:[{required:!0,message:"Please input your name!",whitespace:!0}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"How did you find out about OLS\xa0",r.a.createElement(T.a,{title:"OLS promoter - refferal ?"},r.a.createElement(y.a,{type:"question-circle-o"})))},e("Reference",{rules:[{required:!0,message:"Please input a value!",whitespace:!0}]})(r.a.createElement(v.a,null))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"select OLS user  \xa0",r.a.createElement(T.a,{title:" free account "},r.a.createElement(y.a,{type:"question-circle-o"})))},e("radio-experience",{rules:[{required:!0,validator:this.radioValidator,whitespace:!0}]})(r.a.createElement(I.a.Group,{onChange:this.onChange,value:this.state.radioValue0},r.a.createElement(I.a,{style:_,value:1},"OLS promoter",r.a.createElement(T.a,{title:" (promting OLS services for commission) "},r.a.createElement(y.a,{type:"question-circle-o"}))),r.a.createElement(I.a,{style:_,value:3},"using OLS services",r.a.createElement(T.a,{title:" (ordering OLS official for pulling Light into my Location, ordering OLSM performance in my location) "},r.a.createElement(y.a,{type:"question-circle-o"})),6===this.state.radioValue0?r.a.createElement(v.a,{style:{width:100,marginLeft:10}}):null)))),r.a.createElement(h.a.Item,{label:r.a.createElement("span",null,"Official OLS Promotion attribution \xa0")},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(b.a,null,"(5)Subscribed on ",r.a.createElement("a",{href:"https://www.youtube.com/c/ONELIGHTSYSTEMOLSMeditation"}," Youtube")),r.a.createElement(b.a,null,"(5)Followed us on ",r.a.createElement("a",{href:"https://www.crunchbase.com/organization/onelightsystem-ols"},"CrunchBase")),r.a.createElement("br",null),r.a.createElement(b.a,null,"(5)Followed us on ",r.a.createElement("a",{href:"https://www.linkedin.com/company/one-light-system/"},"LinkedIn")),r.a.createElement("br",null),r.a.createElement(b.a,null,"(5)Followed us on ",r.a.createElement("a",{href:"https://www.owler.com/company/ols-med"},"Owler and Weight")),r.a.createElement("br",null),r.a.createElement(b.a,null,"(5)Liked and share our ",r.a.createElement("a",{href:"https://www.facebook.com/onelightsystem/"},"Facebook")," page"),r.a.createElement("br",null),r.a.createElement(b.a,null,"(5) Followed us on ",r.a.createElement("a",{href:"https://www.instagram.com/onelightsystem_ols/"},"Instagram")," page"),r.a.createElement("br",null),r.a.createElement(b.a,null,"(5)Took our OLS subscription ",r.a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSfbLCi3OIfYXxriI1ddYm0ekzfFYpqhpExnheEyNUY2FfnEqw/viewform"},"survey")),r.a.createElement("br",null),r.a.createElement(b.a,null,"I can offer something else"),r.a.createElement("br",null),r.a.createElement(b.a,null,"(10)I will create video on the OLS experience"),r.a.createElement("br",null),r.a.createElement(b.a,null,"Other: "),r.a.createElement(v.a,{style:{width:100,marginLeft:10}}))),r.a.createElement(h.a.Item,t,e("agreement",{valuePropName:"checked"})(r.a.createElement(b.a,null,"I have read and agreed to the ",r.a.createElement("a",{href:"https://www.ols-med.net/ols-private-privacy-disclosure-updates-06-2019"},"terms of service")))),r.a.createElement(h.a.Item,t,e("agreement2",{valuePropName:"checked"})(r.a.createElement(b.a,null,"All the information submitted in this form is true and correct"))),r.a.createElement(h.a.Item,t,r.a.createElement(s.b,{to:"/home"},r.a.createElement(w.a,{type:"primary",htmlType:"submit"},"Register"))))))}}]),a}(r.a.Component),ee=h.a.create({name:"register"})(Z),ae=t(134),te=t(305),le=(c.a.Header,c.a.Content,c.a.Footer,c.a.Sider),re=(ae.b.SubMenu,function(e){function a(){var e,t;Object(m.a)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={collapsed:!0},t.onCollapse=function(e){console.log(e),t.setState({collapsed:e})},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(le,{collapsible:!0,collapsed:this.state.collapsed,onCollapse:this.onCollapse,theme:"light"},r.a.createElement("div",{className:"logo"}),r.a.createElement(ae.b,{theme:"light",defaultSelectedKeys:["1"],mode:"inline"},r.a.createElement(ae.b.Item,{key:"1"},r.a.createElement(y.a,{type:"file"}),r.a.createElement("span",null,"OLS stats")),r.a.createElement(ae.b.Item,{key:"2"},r.a.createElement(y.a,{type:"user"}),r.a.createElement("span",null,"Profile")),r.a.createElement(ae.b.Item,{key:"3"},r.a.createElement(y.a,{type:"setting"}),r.a.createElement("span",null,"Support"))))}}]),a}(l.Component)),ne=c.a.Header,oe=c.a.Content,se=c.a.Footer,ie=(c.a.Sider,ae.b.SubMenu,function(e){function a(){var e,t;Object(m.a)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={collapsed:!0},t.onCollapse=function(e){console.log(e),t.setState({collapsed:e})},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(c.a,{style:{minHeight:"100vh"}},r.a.createElement(re,null),r.a.createElement(c.a,null,r.a.createElement(ne,{style:{background:"#fff",padding:0}}),r.a.createElement(oe,{style:{margin:"0 16px"}},r.a.createElement(te.a,{style:{margin:"16px 0"}},r.a.createElement(te.a.Item,null,"OLS student"),r.a.createElement(te.a.Item,null,"OLS updates"),r.a.createElement(te.a.Item,null,"Subbmit OLS LM OLSM OLSME"),r.a.createElement(te.a.Item,null,"Request OLS initi")),r.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},"OLS updates 785")),r.a.createElement(se,{style:{textAlign:"center"}}," ",r.a.createElement("a",{href:"https://www.ols-med.net/ols-private-privacy-disclosure-updates-06-2019"},"onelightsystem OLS \xa92017-2019 ")," ")))}}]),a}(l.Component)),ce=function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Test privacy disclosure")}}]),a}(l.Component);c.a.Footer;var me=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{exact:!0,path:"/",component:L}),r.a.createElement(i.a,{exact:!0,path:"/login",component:L}),r.a.createElement(i.a,{exact:!0,path:"/register",component:k}),r.a.createElement(i.a,{exact:!0,path:"/olssregister",component:M}),r.a.createElement(i.a,{exact:!0,path:"/olsmeregister",component:U}),r.a.createElement(i.a,{exact:!0,path:"/olslmregister",component:X}),r.a.createElement(i.a,{exact:!0,path:"/olspregister",component:ee}),r.a.createElement(i.a,{exact:!0,path:"/home",component:ie}),r.a.createElement(i.a,{exact:!0,path:"/privacydisclosure",component:ce}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[168,1,2]]]);
//# sourceMappingURL=main.3c1d985d.chunk.js.map