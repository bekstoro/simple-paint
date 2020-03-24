(this["webpackJsonpsimple-paint"]=this["webpackJsonpsimple-paint"]||[]).push([[0],{106:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),c=a.n(i),o=a(24),u=(a(106),a(15)),s=a(16),l=a(27),d=a.n(l),f=a(178),m=a(132),b=a(169),h=a(172),p=a(173),g=a(171),E=a(136),x=a(83),S=a.n(x),v={canvasHeight:"Height is required field, it should be greater than ".concat(20," and less than ").concat(100),canvasWidth:"Width is required field, it should be greater than ".concat(20," and less than ").concat(100),invalidColor:"Invalid color",fillHeightRule:function(e){return"Height is required field, it should be greater than 0 and less than canvas height: ".concat(e)},fillWidthRule:function(e){return"Width is required field, it should be greater than 0 and less than canvas width: ".concat(e)},point1IsOutOfCanvas:"Point 1 is out of canvas",point2IsOutOfCanvas:"Point 2 is out of canvas",pointsAreEqual:"Points are equal",requiredField:"This field is required",shouldBeEqualByXYCoordinates:"Should be equal by X or Y coordinates",shouldNotBeEqualByXYCoordinates:"Should not be equal by X or Y coordinates",somethingWentWrong:"Something went wrong"},O="New line is added",j="New rectangle is added",y=d()((function(){return{appBar:{position:"relative"},iconMargin:{marginLeft:"auto"}}}))((function(e){var t=e.classes;return r.a.createElement(b.a,{className:t.appBar},r.a.createElement(g.a,null,r.a.createElement(E.a,{variant:"h6",noWrap:!0},"Simple Paint"),r.a.createElement(h.a,{color:"inherit","aria-label":"Github",className:t.iconMargin},r.a.createElement(p.a,{href:"http://github.com/bekstoro/simple-paint",target:"_blank",title:"Github",color:"inherit"},r.a.createElement(S.a,null)))))})),C=a(84),L=a.n(C),T=a(19),w=function(e){return{type:"SET_CANVAS_REQUEST",payload:e}},_=function(e){return{type:"SET_CANVAS_SUCCESS",payload:e}},k=function(e){return{type:"SET_CANVAS_FAILURE",payload:e}},q=a(176),N=a(175),R=a(179),A=a(174),F=d()((function(){return{wrapper:{display:"flex",marginTop:20,justifyContent:"flex-end"},addBtn:{marginRight:"1em"}}}))((function(e){var t=e.classes,a=e.nextDisabled,n=e.onNext,i=e.onSubmit,c=e.submitDisabled;return r.a.createElement("div",{className:t.wrapper},i&&r.a.createElement(A.a,{className:t.addBtn,variant:"contained",color:"secondary",onClick:i,disabled:c},"Add"),n&&r.a.createElement(A.a,{variant:"contained",color:"primary",onClick:n,disabled:c||a},"Next"))})),M=a(184),I=a(181);function W(e){var t=e.message,a=void 0===t?v.somethingWentWrong:t,n=e.type,i=void 0===n?"error":n;return r.a.createElement(M.a,{open:!!a},r.a.createElement(I.a,{variant:"filled",severity:i},a))}var U,B=function(e){return{height:e.canvas.height,width:e.canvas.width}},P=function(e){return e.canvas.errorMessage},V=function(e){return e.canvas.height},D=function(e){return e.canvas.isLoading},Q=function(e){return e.canvas.isSuccess},G=function(e){return e.canvas.width},H=Object(o.b)((function(e){return{errorMessage:P(e),isLoading:D(e),isSuccess:Q(e)}}),(function(e){return{setCanvasRequest:Object(T.bindActionCreators)(w,e)}}))((function(e){var t=e.errorMessage,a=e.handleNext,i=e.isLoading,c=e.isSuccess,o=e.setCanvasRequest,s=Object(n.useState)(20),l=Object(u.a)(s,2),d=l[0],f=l[1],m=Object(n.useState)(20),b=Object(u.a)(m,2),h=b[0],p=b[1];return c&&a(),i?r.a.createElement(N.a,null):r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(W,{message:t}),r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(R.a,{fullWidth:!0,variant:"outlined",label:"Width",name:"width",placeholder:"Set width",defaultValue:d,onChange:function(e){return f(+e.target.value)},margin:"normal",type:"number",required:!0,error:!d,helperText:!d&&v.requiredField})),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(R.a,{fullWidth:!0,variant:"outlined",label:"Height",name:"height",placeholder:"Set height",defaultValue:h,onChange:function(e){return p(+e.target.value)},margin:"normal",type:"number",required:!0,error:!h,helperText:!h&&v.requiredField}))),r.a.createElement(F,{onNext:function(){return o({width:d,height:h})},nextDisabled:!d||!h}))})),X=a(25),Y=a(180),J=Object(Y.a)((U={},Object(s.a)(U,"SET_CANVAS_FAILURE",(function(e,t){var a=t.payload;return Object(X.a)({},e,{errorMessage:a,isLoading:!1,isSuccess:!1})})),Object(s.a)(U,"SET_CANVAS_REQUEST",(function(e){return Object(X.a)({},e,{errorMessage:"",isLoading:!0,isSuccess:!1})})),Object(s.a)(U,"SET_CANVAS_SUCCESS",(function(e,t){var a=t.payload;return{errorMessage:"",height:a.height,isLoading:!1,isSuccess:!0,width:a.width}})),U),{errorMessage:"",height:0,isLoading:!1,isSuccess:!1,width:0}),$=a(12),z=a.n($),K=a(10),Z=z.a.mark(ae),ee=z.a.mark(ne),te=function(e){var t=e.width,a=e.height;return!t||t<20||t>100?v.canvasWidth:!a||a<20||a>100?v.canvasHeight:void 0};function ae(){var e,t,a;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(K.f)("SET_CANVAS_REQUEST");case 3:if(e=n.sent,t=e.payload,!(a=te(t))){n.next=11;break}return n.next=9,Object(K.d)(k(a));case 9:n.next=13;break;case 11:return n.next=13,Object(K.d)(_(t));case 13:n.next=0;break;case 15:case"end":return n.stop()}}),Z)}function ne(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.c)(ae);case 2:case"end":return e.stop()}}),ee)}var re=function(e){return{type:"SET_FILL_REQUEST",payload:e}},ie=function(e){return{type:"SET_FILL_SUCCESS",payload:e}},ce=function(e){return{type:"SET_FILL_FAILURE",payload:e}};var oe,ue=function(e){return{height:e.fill.height,width:e.fill.width,color:e.fill.color}},se=function(e){return e.fill.errorMessage},le=function(e){return e.fill.isSuccess},de=function(e){return e.fill.isLoading},fe=Object(o.b)((function(e){return{errorMessage:se(e),isLoading:de(e),isSuccess:le(e)}}),(function(e){return{setFillRequest:Object(T.bindActionCreators)(re,e)}}))((function(e){var t=e.errorMessage,a=e.handleNext,i=e.isLoading,c=e.isSuccess,o=e.setFillRequest,s=Object(n.useState)(1),l=Object(u.a)(s,2),d=l[0],f=l[1],m=Object(n.useState)(1),b=Object(u.a)(m,2),h=b[0],p=b[1],g=Object(n.useState)("#f44336"),E=Object(u.a)(g,2),x=E[0],S=E[1];return c&&a(),i?r.a.createElement(N.a,null):r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(W,{message:t}),r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(R.a,{fullWidth:!0,variant:"outlined",label:"Width",name:"width",placeholder:"Set width",defaultValue:d,onChange:function(e){return f(+e.target.value)},margin:"normal",type:"number",required:!0,error:!d,helperText:!d&&v.requiredField})),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(R.a,{fullWidth:!0,variant:"outlined",label:"Height",name:"height",placeholder:"Set height",defaultValue:h,onChange:function(e){return p(+e.target.value)},margin:"normal",type:"number",required:!0,error:!h,helperText:!h&&v.requiredField})),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(R.a,{fullWidth:!0,variant:"outlined",label:"Color",name:"color",placeholder:"Set color",defaultValue:x,onChange:function(e){return S(e.target.value)},margin:"normal",required:!0,error:!x,helperText:!x&&v.requiredField}))),r.a.createElement(F,{onNext:function(){return o({width:d,height:h,color:x})},nextDisabled:!d||!h||!x}))})),me=Object(Y.a)((oe={},Object(s.a)(oe,"SET_FILL_FAILURE",(function(e,t){var a=t.payload;return Object(X.a)({},e,{errorMessage:a,isLoading:!1,isSuccess:!1})})),Object(s.a)(oe,"SET_FILL_REQUEST",(function(e){return Object(X.a)({},e,{errorMessage:"",isLoading:!0,isSuccess:!1})})),Object(s.a)(oe,"SET_FILL_SUCCESS",(function(e,t){var a=t.payload;return{color:a.color,errorMessage:"",height:a.height,isLoading:!1,isSuccess:!0,width:a.width}})),oe),{color:"",errorMessage:"",height:0,isLoading:!1,isSuccess:!1,width:0}),be=z.a.mark(ge),he=z.a.mark(Ee),pe=z.a.mark(xe);function ge(e){var t,a,n,r,i;return z.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.width,a=e.height,n=e.color,c.next=3,Object(K.e)(V);case 3:return r=c.sent,c.next=6,Object(K.e)(G);case 6:if(i=c.sent,!(!t||t<0||t>i)){c.next=9;break}return c.abrupt("return",v.fillWidthRule(i));case 9:if(!(!a||a<0||a>r)){c.next=11;break}return c.abrupt("return",v.fillHeightRule(r));case 11:if(n.match(/#[a-f0-9]{6}/gi)){c.next=13;break}return c.abrupt("return",v.invalidColor);case 13:case"end":return c.stop()}}),be)}function Ee(){var e,t,a;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(K.f)("SET_FILL_REQUEST");case 3:return e=n.sent,t=e.payload,n.next=7,Object(K.b)(ge,t);case 7:if(!(a=n.sent)){n.next=13;break}return n.next=11,Object(K.d)(ce(a));case 11:n.next=15;break;case 13:return n.next=15,Object(K.d)(ie(t));case 15:n.next=0;break;case 17:case"end":return n.stop()}}),he)}function xe(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.c)(Ee);case 2:case"end":return e.stop()}}),pe)}var Se=function(e){return{type:"SET_LINE_REQUEST",payload:e}},ve=function(e){return{type:"SET_LINE_SUCCESS",payload:e}},Oe=function(e){return{type:"SET_LINE_FAILURE",payload:e}};var je,ye=function(e){return e.line.entities},Ce=function(e){return e.line.errorMessage},Le=function(e){return e.line.isLoading},Te=function(e){return e.line.isSuccess},we=Object(o.b)((function(e){return{errorMessage:Ce(e),isLoading:Le(e),isSuccess:Te(e)}}),(function(e){return{setLineRequest:Object(T.bindActionCreators)(Se,e)}}))((function(e){var t=e.errorMessage,a=e.handleNext,i=e.isLoading,c=e.isSuccess,o=e.setLineRequest,s=Object(n.useState)(1),l=Object(u.a)(s,2),d=l[0],f=l[1],m=Object(n.useState)(1),b=Object(u.a)(m,2),h=b[0],p=b[1],g=Object(n.useState)(1),E=Object(u.a)(g,2),x=E[0],S=E[1],j=Object(n.useState)(4),y=Object(u.a)(j,2),C=y[0],L=y[1];return i?r.a.createElement(N.a,null):r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(W,{message:O,type:"success"}),t&&r.a.createElement(W,{message:t}),r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(R.a,{fullWidth:!0,variant:"outlined",label:"StartPoint xCoordinate",name:"x1",placeholder:"Set xCoordinate for startPoint",defaultValue:d,onChange:function(e){return f(+e.target.value)},margin:"normal",type:"number",required:!0,error:!d,helperText:!d&&v.requiredField})),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(R.a,{fullWidth:!0,variant:"outlined",label:"StartPoint yCoordinate",name:"y1",placeholder:"Set xCoordinate for startPoint",defaultValue:x,onChange:function(e){return S(+e.target.value)},margin:"normal",type:"number",required:!0,error:!x,helperText:!x&&v.requiredField})),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(R.a,{fullWidth:!0,variant:"outlined",label:"EndPoint xCoordinate",name:"x2",placeholder:"Set xCoordinate for startPoint",defaultValue:h,onChange:function(e){return p(+e.target.value)},margin:"normal",type:"number",required:!0,error:!h,helperText:!h&&v.requiredField})),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(R.a,{fullWidth:!0,variant:"outlined",label:"EndPoint yCoordinate",name:"y2",placeholder:"Set xCoordinate for startPoint",defaultValue:C,onChange:function(e){return L(+e.target.value)},margin:"normal",type:"number",required:!0,error:!C,helperText:!C&&v.requiredField}))),r.a.createElement(F,{onNext:function(){c&&a()},onSubmit:function(){o({x1:d,y1:x,x2:h,y2:C})},nextDisabled:!c,submitDisabled:!d||!h||!x||!C}))})),_e=a(37),ke=Object(Y.a)((je={},Object(s.a)(je,"SET_LINE_FAILURE",(function(e,t){var a=t.payload;return Object(X.a)({},e,{errorMessage:a,isLoading:!1,isSuccess:!1})})),Object(s.a)(je,"SET_LINE_REQUEST",(function(e){return Object(X.a)({},e,{errorMessage:"",isLoading:!0,isSuccess:!1})})),Object(s.a)(je,"SET_LINE_SUCCESS",(function(e,t){var a=t.payload;return{errorMessage:"",isLoading:!1,isSuccess:!0,entities:[].concat(Object(_e.a)(e.entities),[{x1:a.x1,x2:a.x2,y1:a.y1,y2:a.y2}])}})),je),{errorMessage:"",isLoading:!1,isSuccess:!1,entities:[]}),qe=z.a.mark(Ae),Ne=z.a.mark(Fe),Re=z.a.mark(Me);function Ae(e){var t,a,n,r,i,c;return z.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.x1,a=e.y1,n=e.x2,r=e.y2,o.next=3,Object(K.e)(V);case 3:return i=o.sent,o.next=6,Object(K.e)(G);case 6:if(c=o.sent,!(!t||!a||t<0||t>c||a<0||a>i)){o.next=9;break}return o.abrupt("return",v.point1IsOutOfCanvas);case 9:if(!(!n||!r||n<0||n>c||r<0||r>i)){o.next=11;break}return o.abrupt("return",v.point2IsOutOfCanvas);case 11:if(t!==n||a!==r){o.next=13;break}return o.abrupt("return",v.pointsAreEqual);case 13:if(t===n||a===r){o.next=15;break}return o.abrupt("return",v.shouldBeEqualByXYCoordinates);case 15:case"end":return o.stop()}}),qe)}function Fe(){var e,t,a;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(K.f)("SET_LINE_REQUEST");case 3:return e=n.sent,t=e.payload,n.next=7,Object(K.b)(Ae,t);case 7:if(!(a=n.sent)){n.next=13;break}return n.next=11,Object(K.d)(Oe(a));case 11:n.next=15;break;case 13:return n.next=15,Object(K.d)(ve(t));case 15:n.next=0;break;case 17:case"end":return n.stop()}}),Ne)}function Me(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.c)(Fe);case 2:case"end":return e.stop()}}),Re)}var Ie=function(e){return{type:"SET_RECTANGLE_REQUEST",payload:e}},We=function(e){return{type:"SET_RECTANGLE_SUCCESS",payload:e}},Ue=function(e){return{type:"SET_RECTANGLE_FAILURE",payload:e}};var Be,Pe=function(e){return e.rectangle.entities},Ve=function(e){return e.rectangle.errorMessage},De=function(e){return e.rectangle.isLoading},Qe=function(e){return e.rectangle.isSuccess},Ge=Object(o.b)((function(e){return{errorMessage:Ve(e),isLoading:De(e),isSuccess:Qe(e)}}),(function(e){return{setRectangleRequest:Object(T.bindActionCreators)(Ie,e)}}))((function(e){var t=e.errorMessage,a=e.handleNext,i=e.isLoading,c=e.isSuccess,o=e.setRectangleRequest,s=Object(n.useState)(3),l=Object(u.a)(s,2),d=l[0],f=l[1],m=Object(n.useState)(7),b=Object(u.a)(m,2),h=b[0],p=b[1],g=Object(n.useState)(3),E=Object(u.a)(g,2),x=E[0],S=E[1],O=Object(n.useState)(7),y=Object(u.a)(O,2),C=y[0],L=y[1];return i?r.a.createElement(N.a,null):r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(W,{message:j,type:"success"}),t&&r.a.createElement(W,{message:t}),r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(R.a,{fullWidth:!0,variant:"outlined",label:"LeftTopPoint xCoordinate",name:"x1",placeholder:"Set xCoordinate for leftTopPoint",defaultValue:d,onChange:function(e){return f(+e.target.value)},margin:"normal",type:"number",required:!0,error:!d,helperText:!d&&v.requiredField})),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(R.a,{fullWidth:!0,variant:"outlined",label:"LeftTopPoint yCoordinate",name:"y1",placeholder:"Set xCoordinate for leftTopPoint",defaultValue:x,onChange:function(e){return S(+e.target.value)},margin:"normal",type:"number",required:!0,error:!x,helperText:!x&&v.requiredField})),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(R.a,{fullWidth:!0,variant:"outlined",label:"RightBottomPoint xCoordinate",name:"x2",placeholder:"Set xCoordinate for rightBottomPoint",defaultValue:h,onChange:function(e){return p(+e.target.value)},margin:"normal",type:"number",required:!0,error:!h,helperText:!h&&v.requiredField})),r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(R.a,{fullWidth:!0,variant:"outlined",label:"RightBottomPoint yCoordinate",name:"y2",placeholder:"Set xCoordinate for rightBottomPoint",defaultValue:C,onChange:function(e){return L(+e.target.value)},margin:"normal",type:"number",required:!0,error:!C,helperText:!C&&v.requiredField}))),r.a.createElement(F,{onNext:function(){c&&a()},onSubmit:function(){o({x1:d,y1:x,x2:h,y2:C})},nextDisabled:!c,submitDisabled:!d||!h||!x||!C}))})),He=Object(Y.a)((Be={},Object(s.a)(Be,"SET_RECTANGLE_FAILURE",(function(e,t){var a=t.payload;return Object(X.a)({},e,{errorMessage:a,isLoading:!1,isSuccess:!1})})),Object(s.a)(Be,"SET_RECTANGLE_REQUEST",(function(e){return Object(X.a)({},e,{errorMessage:"",isLoading:!0,isSuccess:!1})})),Object(s.a)(Be,"SET_RECTANGLE_SUCCESS",(function(e,t){var a=t.payload;return{errorMessage:"",isLoading:!1,isSuccess:!0,entities:[].concat(Object(_e.a)(e.entities),[{x1:a.x1,x2:a.x2,y1:a.y1,y2:a.y2}])}})),Be),{errorMessage:"",isLoading:!1,isSuccess:!1,entities:[]}),Xe=z.a.mark($e),Ye=z.a.mark(ze),Je=z.a.mark(Ke);function $e(e){var t,a,n,r,i,c;return z.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.x1,a=e.y1,n=e.x2,r=e.y2,o.next=3,Object(K.e)(V);case 3:return i=o.sent,o.next=6,Object(K.e)(G);case 6:if(c=o.sent,!(!t||!a||t<0||t>c||a<0||a>i)){o.next=9;break}return o.abrupt("return",v.point1IsOutOfCanvas);case 9:if(!(!n||!r||n<0||n>c||r<0||r>i)){o.next=11;break}return o.abrupt("return",v.point2IsOutOfCanvas);case 11:if(t!==n||a!==r){o.next=13;break}return o.abrupt("return",v.pointsAreEqual);case 13:if(!(t===n&&a!==r||t!==n&&a===r)){o.next=15;break}return o.abrupt("return",v.shouldNotBeEqualByXYCoordinates);case 15:case"end":return o.stop()}}),Xe)}function ze(){var e,t,a;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(K.f)("SET_RECTANGLE_REQUEST");case 3:return e=n.sent,t=e.payload,n.next=7,Object(K.b)($e,t);case 7:if(!(a=n.sent)){n.next=13;break}return n.next=11,Object(K.d)(Ue(a));case 11:n.next=15;break;case 13:return n.next=15,Object(K.d)(We(t));case 15:n.next=0;break;case 17:case"end":return n.stop()}}),Ye)}function Ke(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.c)(ze);case 2:case"end":return e.stop()}}),Je)}var Ze=Object(o.b)((function(e){return{canvas:B(e),fill:ue(e),lines:ye(e),rectangles:Pe(e)}}),null)(d()((function(){return{table:{margin:"1em auto"},td:{border:"1px solid #DDD",height:"1em",width:"1em"},figure:{backgroundColor:"#3f51b5"}}}))((function(e){var t=e.canvas,a=e.fill,i=e.lines,c=e.rectangles,o=e.classes,l=function(e){for(var t=[],a=0;a<e.length;a++)for(var n=e[a],r=n.x1,i=n.y1,c=n.x2,o=n.y2,u=r!==c,s=u?r-1:i-1,l=u?c:o,d=s;d<l;d++)t.push(u?[d,s]:[s,d]);return t}(i),d=function(e){for(var t=[],a=0;a<e.length;a++){for(var n=e[a],r=n.x1,i=n.y1,c=n.x2,o=n.y2,u=r-1;u<c;u++)t.push([u,i-1],[u,o-1]);for(var s=i;s<o;s++)t.push([r-1,s],[c-1,s])}return t}(c),f=Object(n.useState)(function(e,t,a,n){for(var r=[],i=0;i<e;i++){for(var c=[],o=0;o<t;o++)c.push({value:0});r.push(c)}return[].concat(Object(_e.a)(a),Object(_e.a)(n)).forEach((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];r[n][a].value=1})),r}(t.height,t.width,l,d)),m=Object(u.a)(f,2),b=m[0],h=m[1];return r.a.createElement("table",{className:o.table},r.a.createElement("tbody",null,b.map((function(e,t){return r.a.createElement("tr",{key:t},e.map((function(e,n){return r.a.createElement("td",{key:n,onClick:function(){h([]),setTimeout((function(){h(function e(t,a,n){var r=t;return r[a]&&r[a][n]&&0===r[a][n].value&&(r[a][n].value=2,r=e(r,a-1,n),r=e(r,a+1,n),r=e(r,a,n-1),r=e(r,a,n+1)),r}(b,t,n))}),0)},className:L()(o.td,Object(s.a)({},o.figure,1===e.value)),style:{backgroundColor:2===e.value&&a.color}})})))}))))}))),et=a(177),tt=a(182),at=a(185),nt=["Canvas","Line","Rectangle","Bucket Fill"],rt=d()((function(){return{stepper:{paddingTop:30,paddingBottom:50}}}))((function(e){var t,a=e.classes,i=e.onSubmit,c=Object(n.useState)(0),o=Object(u.a)(c,2),s=o[0],l=o[1],d=function(){return l(s+1)};return s===nt.length&&i(),r.a.createElement(r.a.Fragment,null,r.a.createElement(at.a,{activeStep:s,className:a.stepper,alternativeLabel:!0},nt.map((function(e){return r.a.createElement(et.a,{key:e},r.a.createElement(tt.a,null,e))}))),(t=s,{0:r.a.createElement(H,{handleNext:d}),1:r.a.createElement(we,{handleNext:d}),2:r.a.createElement(Ge,{handleNext:d}),3:r.a.createElement(fe,{handleNext:d})}[t]))}));a(130);var it=d()((function(e){return{layout:Object(s.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:1e3,marginLeft:"auto",marginRight:"auto"}),paper:Object(s.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(8),marginBottom:e.spacing(8),padding:e.spacing(3)})}}))((function(e){var t=e.classes,a=Object(n.useState)(!1),i=Object(u.a)(a,2),c=i[0],o=i[1];return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null),r.a.createElement(y,null),r.a.createElement("main",{className:t.layout},r.a.createElement(m.a,{className:t.paper},c?r.a.createElement(Ze,null):r.a.createElement(rt,{onSubmit:function(){return o(!0)}}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ct=a(85),ot=a(86),ut=Object(T.combineReducers)({canvas:J,fill:me,line:ke,rectangle:He}),st=z.a.mark(lt);function lt(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.a)([ne(),xe(),Me(),Ke()]);case 2:case"end":return e.stop()}}),st)}var dt=Object(ot.a)(),ft=Object(T.applyMiddleware)(dt),mt=Object(T.createStore)(ut,Object(ct.composeWithDevTools)(ft));dt.run(lt),c.a.render(r.a.createElement(o.a,{store:mt},r.a.createElement(it,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,a){e.exports=a(131)}},[[96,1,2]]]);
//# sourceMappingURL=main.e997b593.chunk.js.map