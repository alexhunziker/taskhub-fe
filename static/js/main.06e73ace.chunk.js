(this["webpackJsonptaskhub-fe"]=this["webpackJsonptaskhub-fe"]||[]).push([[0],{109:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o,s,u,d,l,b,j,O,f,p,x,g,h,v,y,m,k,C,w,F,E,D,S,T,I,L,N,M,R,A,U,P,z,Y,B,K,_,q,H,W=n(1),G=n.n(W),J=n(42),V=n.n(J),X=(n(109),n(39)),Z=n(18),Q=n(22),$=n(19),ee=n(20),te=n(92),ne=n.n(te),re=n(15),ce=n(36),ae=n(88),ie=n(27),oe={apiKey:"AIzaSyBh36cGPXJH-cyb2giOsJet7VDEKZ3MVsU",authDomain:"my-task-hub.firebaseapp.com",databaseURL:"https://my-task-hub-default-rtdb.europe-west1.firebasedatabase.app",projectId:"my-task-hub",storageBucket:"my-task-hub.appspot.com",messagingSenderId:"941408350272",appId:"1:941408350272:web:a0f5bfc5afbcbbcb3defa5",measurementId:"G-485HGNY5X9"},se=n(8),ue=G.a.createContext({successIndicator:!1,errorList:[],indicateSuccess:function(){},addError:function(e){},clearErrorList:function(){}}),de=function(e){var t=e.children,n=Object(W.useState)(!1),r=Object(re.a)(n,2),c=r[0],a=r[1],i=Object(W.useState)([]),o=Object(re.a)(i,2),s=o[0],u=o[1],d=Object(W.useState)(!1),l=Object(re.a)(d,2),b=l[0],j=l[1];Object(W.useEffect)((function(){try{var e=function(){var e=Object(ae.a)(oe);return Object(ie.b)(e)}();console.log("Initialize Firebase... done"),e&&j(!0)}catch(t){console.error("initializind database failed",t)}}),[]);var O={successIndicator:c,errorList:s,indicateSuccess:function(){a(!0),setTimeout((function(){return a(!1)}),1e3)},addError:function(e){u([].concat(Object(Q.a)(s),[e]))},clearErrorList:function(){u([])},ready:b};return Object(se.jsx)(ue.Provider,{value:O,children:t})},le=ue,be=n(25),je=G.a.createContext({uid:"",displayName:"",email:"",isLoggedIn:function(){return Boolean}}),Oe=function(e){var t=e.children,n=Object(W.useState)(""),r=Object(re.a)(n,2),c=r[0],a=r[1],i=Object(W.useState)(""),o=Object(re.a)(i,2),s=o[0],u=o[1],d=Object(W.useState)(""),l=Object(re.a)(d,2),b=l[0],j=l[1],O=Object(W.useContext)(le).ready,f=function(){var e=Object(W.useContext)(le),t=e.addError,n=e.ready,r=e.indicateSuccess;return{storeUser:function(e,c,a){if(n){var i=Object(ie.b)(),o=Object(ie.c)(i,"user/".concat(e));Object(ie.a)(o).then((function(e){var n=e.exists()?e.val():{},i=Object(be.a)(Object(be.a)({},n),{},{mail:a,displayName:c});Object(ie.d)(o,i).then(r()).catch((function(e){return t("User update/creation failed: "+e)}))}))}else t("Database not ready to record user.")}}}(),p=f.storeUser,x=O&&Object(ce.b)();O&&Object(ce.c)(x,(function(e){e?(c!==e.uid&&p(e.uid,e.displayName,e.email),a(e.uid),u(e.displayName),j(e.email)):(a(""),u(""),j(""))}));var g={uid:c,displayName:s,email:b,isLoggedIn:function(){return!!c}};return Object(se.jsx)(je.Provider,{value:g,children:t})},fe=je,pe=(n(87),"/taskhub-fe"),xe="/taskhub-fe/categories",ge=ee.a.header(r||(r=Object($.a)(["\n  height: 3.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #007799;\n  padding-left: 20px;\n  padding-right: 20px;\n  gap: 20px;\n  color: white;\n\n  a {\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n  }\n\n  a:hover,\n  a:active,\n  a.active {\n    color: #E0F5FF;\n  }\n"]))),he=ee.a.div(c||(c=Object($.a)(["\n  flex-grow: 1;\n"]))),ve=ee.a.div(a||(a=Object($.a)(["\n  background-color: #EE8888;\n  color: white;\n  padding: 10px 20px 10px;\n\n  li {\n    list-style-type: none;\n  }\n"]))),ye=function(e){var t=e.page,n=Object(W.useContext)(le),r=n.successIndicator,c=n.errorList,a=n.addError,i=Object(W.useContext)(fe),o=i.displayName,s=i.isLoggedIn,u=Object(ce.b)(),d=Object(W.useCallback)((function(){Object(ce.d)(u).catch((function(e){return a("Sign out failed: ",e)}))}),[u,a]);return Object(se.jsxs)(se.Fragment,{children:[Object(se.jsxs)(ge,{children:[Object(se.jsx)(he,{children:Object(se.jsxs)("a",{href:"/tasks",children:["\ud83d\udcdd TaskHub ",">>"," ",t]})}),r&&Object(se.jsx)(ne.a,{}),s()&&Object(se.jsx)(X.b,{to:xe,children:"Categories"}),s()&&Object(se.jsxs)("a",{href:pe,onClick:d,children:["Logout (",o,")"]})]}),c.length>0&&Object(se.jsx)(ve,{children:c.map((function(e){return Object(se.jsx)("li",{children:e},e)}))})]})},me=ee.a.div(i||(i=Object($.a)(["\n    padding: 1rem;\n    border-radius: 5px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n    margin-top: 10px;\n"]))),ke=function(e){return Object(se.jsx)(me,{style:e.style,className:e.className,children:e.children})},Ce=n(96),we=n.n(Ce),Fe=ee.a.button(o||(o=Object($.a)(["\n  display: inline-block;\n  color: #007799;\n  background-color: #FFFFFF;\n  font-size: 1em;\n  padding: 0.25em 0.5em;\n  border: 2px solid #007799;\n  border-radius: 3px;\n  display: block;\n\n  ","\n"])),(function(e){return e.primary&&"\n    background: #007799;\n    color: #FFFFFF;\n  "})),Ee=ee.a.div(s||(s=Object($.a)(["\n  padding: 0.3rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n  margin-top: 10px;\n  opacity: 1;\n\n  transform: translateY(0%);\n  transition: opacity 0.5s, transform 0.5s ease-in;\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n"])),(function(e){return e.overdue&&"\n    background: #FFDDDD;\n  "}),(function(e){return e.editMode&&"\n    background: #E0F5FF;\n    padding-bottom: 0.6rem;\n    position: relative;\n    z-index: 99;\n  "}),(function(e){return e.done&&"\n    color: grey;\n  "}),(function(e){return e.remove&&"\n    opacity: 0;\n    transform: translateY(100%);\n  "}),(function(e){var t=e.remove,n=e.done;return t&&n&&"\n    transform: translateY(-100%);\n  "})),De=function(e){var t=e.overdue,n=e.editMode,r=e.children,c=e.done,a=e.remove;return Object(se.jsx)(Ee,{overdue:t,editMode:n,done:c,remove:a,children:r})},Se=ee.a.input(u||(u=Object($.a)(["\n  width: 100%;\n  height: 24px;\n  border: 2px solid #007799;\n  border-radius: 3px;\n\n  :focus {\n    border: 2px solid #007799;\n  }\n\n  ","\n"])),(function(e){return e.validationError&&"\n    border: 2px solid #AA6666;\n    background-color: #FFDDDD;\n  "})),Te=function(e){var t=e.onChange,n=e.value,r=e.validationError;return Object(se.jsx)(Se,{onChange:t,value:n,validationError:r})},Ie=ee.a.div(d||(d=Object($.a)(["\n  flex-grow: 1;\n  padding-right: 10px;\n"]))),Le=ee.a.div(l||(l=Object($.a)(["\n  font-size: 9pt;\n  color: #003333;\n"]))),Ne=function(e){var t=e.description,n=e.children;return Object(se.jsxs)(Ie,{children:[Object(se.jsx)(Le,{children:t}),n]})},Me=ee.a.select(b||(b=Object($.a)(["\n  width: 100%;\n  height: 30px;\n  border: 2px solid #007799;\n  border-radius: 3px;\n  background-color: white;\n\n  :disabled {\n    background-color: #EEEEEE;\n  }\n\n  :focus {\n    border: 2px solid #007799;\n  }\n"]))),Re=function(e){var t=e.entries,n=e.onChange,r=e.selectedKey,c=e.disabled;return Object(se.jsx)(Me,{onChange:n,value:r,disabled:c,children:t.map((function(e){return Object(se.jsx)("option",{value:e.key,children:e.name},e.key||"unknown")}))})},Ae=n(93),Ue=n.n(Ae),Pe=Object(ee.a)(Ue.a)(j||(j=Object($.a)(["\n  width: 100%;\n  height: 24px;\n  border: 2px solid #007799;\n  border-radius: 3px;\n\n  :focus {\n    border: 2px solid #007799;\n  }\n\n  ","\n"])),(function(e){return e.validationError&&"\n    border: 2px solid #AA6666;\n    background-color: #FFDDDD;\n  "})),ze="Low",Ye="Medium",Be="High",Ke=[ze,Ye,Be],_e="DAILY",qe="WEEKLY",He="MONTHLY",We="YEARLY",Ge=[{name:"Daily",key:_e},{name:"Weely",key:qe},{name:"Monthly",key:He},{name:"Yearly",key:We}],Je="AFTER_DUE",Ve="AFTER_COMPLETE",Xe=[{name:"after due",key:Je},{name:"after complete",key:Ve}],Ze=n(189),Qe=n(6),$e=n(0),et=n.n($e),tt=function(){var e=Object(W.useContext)(le),t=e.addError,n=e.indicateSuccess,r=e.ready,c=Object(W.useState)(!1),a=Object(re.a)(c,2),i=a[0],o=a[1],s=function(){var e=Object(Qe.a)(et.a.mark((function e(c,a){var i,o,s;return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=3;break}return t("Task update/creation failed: Database not ready."),e.abrupt("return");case 3:i=Object(be.a)(Object(be.a)({},c),{},{due:c.due&&c.due.getTime(),closedOn:c.closedOn&&c.closedOn.getTime()}),Object.keys(i).forEach((function(e){return void 0===i[e]&&delete i[e]})),o=Object(ie.b)(),s=Object(ie.c)(o,"tasks/".concat(a,"/").concat(i.key)),Object(ie.d)(s,i).then(n()).catch((function(e){return t("Task update/creation failed: "+e)}));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=Object(Qe.a)(et.a.mark((function e(r,c){var a,i;return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(ie.b)(),i=Object(ie.c)(a,"tasks/".concat(c,"/").concat(r)),Object(ie.d)(i,null).then(n()).catch((function(e){return t("Task removal failed: "+e)}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return{listenToTaskList:function(e,c){if(r)if(i)t("WARN: Prevented from listening to tasklist multiple times.");else{o(!0);var a=Object(ie.b)(),s=Object(ie.c)(a,"tasks/"+c);Object(ie.a)(s).then((function(t){if(t.exists()){var r=Object.values(t.val()).map((function(e){return Object(be.a)(Object(be.a)({},e),{},{due:e.due&&new Date(e.due),closedOn:e.closedOn&&new Date(e.closedOn)})}));e(r),n()}else console.warn("No tasks were obtained by firebase.")}),(function(e){return t("Getting tasks failed: "+e)}))}else t("Getting taks failed: Database not ready.")},updateTask:s,removeTask:u}},nt=G.a.createContext({tasks:[],addTask:function(e){},removeTask:function(e){},toggleResolved:function(e){},modifyTask:function(e){},unassignAllTasksFromCategory:function(e){}}),rt=function(e){var t=Object(W.useContext)(fe).uid,n=Object(W.useState)([]),r=Object(re.a)(n,2),c=r[0],a=r[1],i=tt(),o=i.updateTask,s=i.removeTask,u=function(e){var n=Object(be.a)(Object(be.a)({},e),{},{key:Object(Ze.a)()});a([].concat(Object(Q.a)(c),[n])),o(n,t)},d=function(e){a(c.map((function(t){return t.key!==e.key?t:e}))),o(e,t)},l={tasks:c,setTasks:a,addTask:u,removeTask:function(e){a(c.filter((function(t){return t.key!==e}))),s(e,t)},toggleResolved:function(e){var n=c.find((function(t){return t.key===e}));if(n.done=!n.done,n.closedOn=n.done?new Date:null,a(c.map((function(t){return t.key===e?n:t}))),o(n,t),n.recurrenceMode&&n.done){var r=n.recurrenceMode===Ve?new Date:new Date(n.due.getTime()),i=n.recurrenceFrequency;i===_e?r.setDate(r.getDate()+1):i===qe?r.setDate(r.getDate()+7):i===He?r.setMonth(r.getMonth()+1):i===We&&r.setFullYear(r.getFullYear()+1);var s=Object(be.a)(Object(be.a)({},n),{},{due:r,done:!1,closedOn:void 0});u(s)}},modifyTask:d,unassignAllTasksFromCategory:function(e){c.filter((function(t){return t.category===e})).forEach((function(e){return d(Object(be.a)(Object(be.a)({},e),{},{category:void 0}))}))}};return Object(se.jsx)(nt.Provider,{value:l,children:e.children})},ct=nt,at=G.a.createContext({categories:[],saveCategory:function(e){},removeCategory:function(e){}}),it=function(e){var t=Object(W.useContext)(fe),n=t.uid,r=t.addError,c=Object(W.useContext)(ct).unassignAllTasksFromCategory,a=Object(W.useState)([]),i=Object(re.a)(a,2),o=i[0],s=i[1],u=function(){var e=Object(W.useContext)(le),t=e.addError,n=e.indicateSuccess,r=e.ready,c=Object(W.useCallback)((function(e,c){if(r&&c){var a=Object(ie.b)(),i=Object(ie.c)(a,"categories/"+c);Object(ie.a)(i).then((function(t){if(t.exists()){var r=Object.values(t.val()).map((function(e){return Object(be.a)(Object(be.a)({},e),{},{due:e.due&&new Date(e.due)})}));e(r),n()}else console.warn("No categories were obtained by firebase.")})).catch((function(e){console.error(e),t("Getting categories failed: "+e)}))}else console.warn("Firebase not ready.")}),[t,n,r]),a=function(){var e=Object(Qe.a)(et.a.mark((function e(r,c){var a,i,o,s;return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=Object(be.a)(Object(be.a)({},r),{},{due:null===(a=r.due)||void 0===a?void 0:a.getTime()}),Object.keys(i).forEach((function(e){return void 0===i[e]&&delete i[e]})),o=Object(ie.b)(),s=Object(ie.c)(o,"categories/".concat(c,"/").concat(i.key)),Object(ie.d)(s,i).then(n()).catch((function(e){return t("Category update/creation failed: "+e)}));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=Object(Qe.a)(et.a.mark((function e(r,c){var a,i;return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(ie.b)(),i=Object(ie.c)(a,"categories/".concat(c,"/").concat(r)),Object(ie.d)(i,null).then(n()).catch((function(e){return t("Category removal failed: "+e)}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return{fetchCategories:c,updateCategory:a,deleteCategory:i}}(),d=u.fetchCategories,l=u.updateCategory,b=u.deleteCategory;Object(W.useEffect)((function(){d(s,n)}),[n]);var j={categories:o,saveCategory:function(e){if(e.name){var t=Object(be.a)({key:Object(Ze.a)()},e),c=o.filter((function(e){return e.key!==t.key}));s([].concat(Object(Q.a)(c),[t])),l(t,n)}else r("Category name cannot be empty")},removeCategory:function(e){c(e),s(o.filter((function(t){return t.key!==e}))),b(e,n)}};return Object(se.jsx)(at.Provider,{value:j,children:e.children})},ot=at,st=ee.a.div(O||(O=Object($.a)(["\n  margin-top: 7px;\n  display: flex;\n  gap: 10px;\n  width: 100%;\n  flex-wrap: wrap;\n"]))),ut=ee.a.div(f||(f=Object($.a)(["\n  display: flex;\n  gap: 10px;\n  min-width: 300px;\n"]))),dt=ee.a.input(p||(p=Object($.a)(["\n  height: 17px;\n"]))),lt=function(e){var t=e.category,n=e.setCategory,r=e.due,c=e.setDue,a=e.priority,i=e.setPriority,o=e.recurring,s=e.setRecurring,u=Object(W.useContext)(ot).categories,d=null===u||void 0===u?void 0:u.sort((function(e,t){return e.name.toUpperCase()>t.name.toUpperCase()})),l=[{key:void 0,name:"Uncategorized"}].concat(Object(Q.a)(d)),b=r instanceof Date?r:void 0,j=Object(W.useState)(!!o.frequency),O=Object(re.a)(j,2),f=O[0],p=O[1],x=Ke.map((function(e){return{key:e,name:e}}));return Object(se.jsxs)(st,{children:[Object(se.jsx)(Ne,{description:"Category",children:Object(se.jsx)(Re,{entries:l,selectedKey:t,onChange:function(e){return n(e.target.options[e.target.selectedIndex].value)}})}),Object(se.jsx)(Ne,{description:"Due",children:Object(se.jsx)(Pe,{selected:b,onChange:function(e){return c(e)},dateFormat:"dd.MM.yyyy",validationError:o.invalid})}),Object(se.jsx)(Ne,{name:"priority",description:"Priority",children:Object(se.jsx)(Re,{entries:x,selectedKey:a,onChange:function(e){return i(e.target.options[e.target.selectedIndex].value)}})}),Object(se.jsx)(se.Fragment,{children:Object(se.jsx)(Ne,{description:"Recurring",children:Object(se.jsxs)(ut,{children:[Object(se.jsx)(dt,{type:"checkbox",onChange:function(){return s(f?{}:{mode:Ve,frequency:qe}),void p(!f)},checked:f}),Object(se.jsx)(Re,{disabled:!f,entries:f?Ge:[],selectedKey:o.frequency,onChange:function(e){return s(Object(be.a)(Object(be.a)({},o),{},{frequency:e.target.options[e.target.selectedIndex].value}))}}),Object(se.jsx)(Re,{disabled:!f,entries:f?Xe:[],selectedKey:o.mode,onChange:function(e){return s(Object(be.a)(Object(be.a)({},o),{},{mode:e.target.options[e.target.selectedIndex].value}))}})]})})})]})},bt=Object(ee.a)(Fe)(x||(x=Object($.a)(["\n  margin-top: 15px;\n"]))),jt=ee.a.div(g||(g=Object($.a)(["\n  display: flex;\n  gap: 10px;\n"]))),Ot=function(e){var t=e.task,n=e.toggleEditMode,r=Object(W.useState)(t.title),c=Object(re.a)(r,2),a=c[0],i=c[1],o=Object(W.useState)(t.category),s=Object(re.a)(o,2),u=s[0],d=s[1],l=Object(W.useState)(t.due),b=Object(re.a)(l,2),j=b[0],O=b[1],f=Object(W.useState)(t.priority),p=Object(re.a)(f,2),x=p[0],g=p[1],h=Object(W.useState)({mode:t.recurrenceMode,frequency:t.recurrenceFrequency}),v=Object(re.a)(h,2),y=v[0],m=v[1],k=Object(W.useContext)(ct),C=k.removeTask,w=k.modifyTask;return Object(se.jsxs)(se.Fragment,{children:[Object(se.jsxs)(jt,{children:[Object(se.jsx)(Ne,{description:"Task",children:Object(se.jsx)(Te,{value:a,name:"title",onChange:function(e){return i(e.target.value)}})}),Object(se.jsx)(bt,{onClick:function(){return w(Object(be.a)(Object(be.a)({},t),{},{title:a,category:u,due:j,priority:x,recurrenceMode:y.mode,recurrenceFrequency:y.frequency})),void n()},primary:!0,children:"Save"}),Object(se.jsx)(bt,{onClick:function(){return C(t.key)},children:"Delete"})]}),Object(se.jsx)(lt,{category:u,setCategory:d,due:j,setDue:O,priority:x,setPriority:g,recurring:y,setRecurring:m})]})},ft=ee.a.div(h||(h=Object($.a)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]))),pt=ee.a.input(v||(v=Object($.a)(["\n  height: 17px;\n"]))),xt=ee.a.div(y||(y=Object($.a)(["\n  flex-grow: 1;\n\n  ","\n"])),(function(e){return e.done&&"\n    text-decoration: line-through;\n  "})),gt=ee.a.div(m||(m=Object($.a)(["\n  font-weight: bold;\n\n  ","\n\n  ","\n\n  ","\n"])),(function(e){return e.priority===Be&&"\n    color: red;\n  "}),(function(e){return e.priority===Ye&&"\n    color: orange;\n  "}),(function(e){return e.priority===ze&&"\n    color: green;\n  "})),ht=function(e){if(e instanceof Date){var t=e.getDate(),n=e.getMonth()+1,r=e.getFullYear();return"".concat(t,".").concat(n,".").concat(r)}},vt=function(e){var t=e.task,n=Object(W.useContext)(ct).toggleResolved,r=Object(W.useState)(!1),c=Object(re.a)(r,2),a=c[0],i=c[1],o=new Date,s=!(!t.due||"function"!==typeof t.due.getTime)&&(o>t.due.getTime()&&!t.done),u=Object(W.useState)(!1),d=Object(re.a)(u,2),l=d[0],b=d[1],j=function(){return b(!l)},O=t.done?ht(t.closedOn):ht(t.due),f=Object(W.useCallback)((function(){setTimeout((function(){return n(t.key)}),500),i(!0)}),[i,t.key,n]);return Object(se.jsx)(De,{overdue:s,editMode:l,done:t.done,remove:a,children:l?Object(se.jsx)(Ot,{task:t,toggleEditMode:j}):Object(se.jsxs)(ft,{children:[Object(se.jsx)(pt,{type:"checkbox",onChange:function(){return f()},checked:t.done||a}),Object(se.jsx)(gt,{priority:t.priority,children:"!"}),Object(se.jsxs)(xt,{done:t.done,children:[t.title," ",O&&"(".concat(O,")")]}),Object(se.jsx)(Fe,{onClick:function(){return j()},children:Object(se.jsx)(we.a,{fontSize:"small"})})]})})},yt=n(2),mt={ALPHABETICAL:"Alphabetical",DUE_UNKNOWN_FIRST:"Due (unknown first)",DUE_UNKNOWN_LAST:"Due (unknown last)",PRIORITY:"Priority"},kt=function(e,t){return e.due||t.due?e.due?t.due?e.due-t.due:-1:1:e.title>t.title},Ct=(k={},Object(yt.a)(k,mt.ALPHABETICAL,(function(e,t){return e.title>t.title?1:e.title<t.title?-1:0})),Object(yt.a)(k,mt.DUE_UNKNOWN_FIRST,(function(e,t){return e.due||t.due?e.due?t.due?e.due-t.due:1:-1:e.title>t.title})),Object(yt.a)(k,mt.DUE_UNKNOWN_LAST,kt),Object(yt.a)(k,mt.PRIORITY,(function(e,t){return e.priority===t.priority?kt(e,t):e.priority===Be?-1:e.priority===ze||t.priority===Be?1:t.priority===ze?-1:void 0})),k),wt=n(97),Ft=n.n(wt),Et=ee.a.div(C||(C=Object($.a)(["\n  display: inline-block;\n  overflow: hidden;\n  font-size: smaller;\n  vertical-align: bottom;\n  color: grey;\n"]))),Dt=ee.a.div(w||(w=Object($.a)(["\n  transition:visibility 0.2s linear,opacity 0.2s linear;\n  display: block;\n  position: absolute;\n  background-color: #FFFFFF;\n  border-style: solid;\n  border-color: #BBBBBB;\n  border-radius: 3px;\n  border-width: 2px;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n\n  ","\n"])),(function(e){return e.showDropdown?"opacity: 100;":"opacity: 0; visibility:hidden"})),St=ee.a.div(F||(F=Object($.a)(["\n  transition: all 0.1s linear;\n  padding: 5px;\n  ","\n"])),(function(e){return e.selected&&"\n    background: #E0F5FF;\n  "})),Tt=function(e){var t=e.setSortOrder,n=e.sortOrder,r=Object(W.useState)(!1),c=Object(re.a)(r,2),a=c[0],i=c[1],o=Object(W.useCallback)((function(e){i(!1),t(e)}),[i,t]);return Object(se.jsxs)(Et,{children:[Object(se.jsx)(Ft.a,{onClick:function(){return i(!a)},fontSize:"small"}),Object(se.jsx)(Dt,{showDropdown:a,children:Object.values(mt).map((function(e){return Object(se.jsx)(St,{selected:e===n,onClick:function(){return o(e)},children:e},e)}))})]})},It=ee.a.h2(E||(E=Object($.a)(["\n  font-size: 14pt;\n"]))),Lt=ee.a.div(D||(D=Object($.a)(["\n  margin-top: 10px;\n  color: #007799;\n"]))),Nt=Object(ee.a)(ke)(S||(S=Object($.a)(["\n  width: 400px;\n  flex-grow: 1;\n"]))),Mt=function(e){var t=e.taskCategory,n=e.tasks,r=Object(W.useState)(mt.DUE_UNKNOWN_LAST),c=Object(re.a)(r,2),a=c[0],i=c[1],o=Object(W.useState)(!1),s=Object(re.a)(o,2),u=s[0],d=s[1],l=Ct[a],b=n.filter((function(e){return!e.done})).sort((function(e,t){return l(e,t)})),j=n.filter((function(e){return e.done})).sort((function(e,t){return function(e,t){return e.closedOn===t.closedOn?0:e.closedOn?t.closedOn?t.closedOn-e.closedOn:-1:1}(e,t)})),O=u?"- Hide closed tasks":"+ Show closed tasks";return Object(se.jsxs)(Nt,{children:[Object(se.jsxs)(It,{children:[Object(se.jsx)(Tt,{setSortOrder:i,sortOrder:a})," ",t||"Uncategorized"]}),b.length>0?b.map((function(e){return Object(se.jsx)(vt,{task:e},e.key)})):"Yay, no tasks",j.length>0&&Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(Lt,{onClick:function(){return d(!u)},children:O}),u&&j.map((function(e){return Object(se.jsx)(vt,{task:e},e.key)}))]})]})},Rt=(n(164),Object(ee.a)(ke)(T||(T=Object($.a)(["\n  margin-left: 1rem;\n  margin-right: 1rem;\n  margin-bottom: 0px;\n  background-color: #e0f5ff;\n  max-height: 50px;\n  transition: max-height 0.3s linear;\n  height: fit-content;\n  overflow: hidden;\n\n  ","\n"])),(function(e){return e.advanced?"max-height: 150px;":"max-height: 50px;"}))),At=ee.a.div(I||(I=Object($.a)(["\n  display: flex;\n  gap: 10px;\n"]))),Ut=Object(ee.a)(Fe)(L||(L=Object($.a)(["\n  margin-top: 15px;\n"]))),Pt=Object(ee.a)(At)(N||(N=Object($.a)(["\n  transition: opacity 0.3s linear;\n  ","\n"])),(function(e){return e.advanced?"opacity: 1;":"opacity: 0;"})),zt=function(){var e=Object(W.useState)((function(){return!1})),t=Object(re.a)(e,2),n=t[0],r=t[1],c=Object(W.useContext)(ct).addTask,a=Object(W.useState)(""),i=Object(re.a)(a,2),o=i[0],s=i[1],u=Object(W.useState)(void 0),d=Object(re.a)(u,2),l=d[0],b=d[1],j=Object(W.useState)(Ye),O=Object(re.a)(j,2),f=O[0],p=O[1],x=Object(W.useState)(void 0),g=Object(re.a)(x,2),h=g[0],v=g[1],y=Object(W.useState)({}),m=Object(re.a)(y,2),k=m[0],C=m[1],w=Object(W.useState)(!1),F=Object(re.a)(w,2),E=F[0],D=F[1],S=Object(W.useState)(!0),T=Object(re.a)(S,2),I=T[0],L=T[1],N=Object(W.useState)(!1),M=Object(re.a)(N,2),R=M[0],A=M[1],U=Object(W.useContext)(ot).categories,P=Object(W.useMemo)((function(){return U.flatMap((function(e){var t,n=null===(t=e.rules)||void 0===t?void 0:t.map((function(e){return new RegExp(e)}));return null===n||void 0===n?void 0:n.map((function(t){return{pattern:t,category:e.key}}))})).filter((function(e){return!!e}))}),[U]),z=function(e){var t=e.mode!==Je||!!h;L(t),C(Object(be.a)(Object(be.a)({},e),{},{invalid:!t}))};return Object(se.jsxs)(Rt,{advanced:n,children:[Object(se.jsxs)(At,{children:[Object(se.jsx)(Ne,{description:"New Task",children:Object(se.jsx)(Te,{value:o,name:"title",validationError:!E&&R,onChange:function(e){return function(e){var t=e.target.value;if(s(t),D(!!t),A(!0),void 0===l){var n=P.find((function(e){return e.pattern.test(t)}));b(null===n||void 0===n?void 0:n.category)}}(e)}})}),Object(se.jsx)(Ut,{onClick:function(){return r(!n)},children:n?"\u2796":"\u2795"}),Object(se.jsx)(Ut,{onClick:function(){return function(){var e={title:o,category:l,due:h,priority:f,recurrenceMode:k.mode,recurrenceFrequency:k.frequency};z(k),E&&I?(c(e),s(""),b(void 0),p(Ye),D(!1),A(!1),C({})):A(!0)}()},primary:!0,children:"Create"})]}),Object(se.jsx)(Pt,{advanced:n,children:Object(se.jsx)(lt,{category:l,setCategory:b,due:h,setDue:function(e){var t=k.mode!==Je||!!e;L(t),v(e),C(Object(be.a)(Object(be.a)({},k),{},{invalid:!t}))},priority:f,setPriority:p,recurring:k,setRecurring:z})})]})},Yt=ee.a.div(M||(M=Object($.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  gap: 15px;\n  padding: 1rem;\n"]))),Bt=function(){var e,t=Object(W.useContext)(ot).categories,n=null===t||void 0===t||null===(e=t.sort((function(e,t){return e.name.localeCompare(t.name)})))||void 0===e?void 0:e.filter((function(e){return!e.isHidden})),r=[{key:void 0,name:"Uncategorized"}].concat(Object(Q.a)(n)),c=Object(W.useContext)(ct),a=c.tasks,i=c.setTasks,o=Object(W.useContext)(le).ready,s=tt().listenToTaskList,u=Object(W.useContext)(fe),d=u.isLoggedIn,l=u.uid;return Object(W.useEffect)((function(){return o&&s(i,l)}),[o,l]),d()?Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(ye,{page:"Tasks"}),Object(se.jsx)(zt,{}),Object(se.jsx)(Yt,{children:r.map((function(e){return Object(se.jsx)(Mt,{taskCategory:e.name,tasks:a.filter((function(t){return t.category===e.name||t.category===e.key}))},e.key||"undefined")}))})]}):Object(se.jsx)(Z.a,{to:"taskhub-fe/login",replace:!0})},Kt=ee.a.span(R||(R=Object($.a)(["\n  border: 1px solid;\n  border-color: #007799;\n  background-color: #E0F5FF;\n  color: #007799;\n  padding: 0px 2px;\n  border-radius: 3px;\n  white-space:nowrap;\n\n  ","\n"])),(function(e){return e.editMode||"\n    font-size: smaller;\n  "})),_t=ee.a.span(A||(A=Object($.a)(["\n  border: 1px solid;\n  border-color: #006666;\n  border-radius: 3px;\n  margin-right: -3px;\n  margin-left: 3px;\n  padding: 0px 5px;\n  background-color: #FFDDDD;\n  color: #CC8888;  \n"]))),qt=function(e){var t=e.rule,n=e.handleRemoval,r=e.editMode;return Object(se.jsxs)(Kt,{editMode:r,children:[t,r&&Object(se.jsx)(_t,{onClick:function(){return n(t)},children:"X"})]})},Ht=ee.a.div(U||(U=Object($.a)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]))),Wt=Object(ee.a)(Fe)(P||(P=Object($.a)(["\n  margin-top: 15px;\n"]))),Gt=ee.a.div(z||(z=Object($.a)(["\n  margin-top: 10px;\n  display: flex;\n  gap: 5px;\n  flex-wrap: wrap;\n"]))),Jt=function(e){var t=e.category,n=e.resetEditedCategory,r=Object(W.useState)(""),c=Object(re.a)(r,2),a=c[0],i=c[1],o=Object(W.useState)([]),s=Object(re.a)(o,2),u=s[0],d=s[1],l=Object(W.useState)(""),b=Object(re.a)(l,2),j=b[0],O=b[1],f=Object(W.useContext)(ot).saveCategory,p=Object(W.useContext)(le).addError;Object(W.useEffect)((function(){i(t.name||""),d(t.rules||[])}),[t]);var x=Object(W.useCallback)((function(){try{new RegExp(j)}catch(e){return void p("Cannot add rule due to invalid format")}d([].concat(Object(Q.a)(u),[j])),O("")}),[u,j,O,d,p]),g=Object(W.useCallback)((function(e){d(u.filter((function(t){return t!==e})))}),[u,d]),h=Object(W.useCallback)((function(e){f(e),n()}),[n,f]),v=Object(be.a)(Object(be.a)({},t),{},{name:a,rules:u});return Object(se.jsxs)(ke,{children:[Object(se.jsxs)(Ht,{children:[Object(se.jsx)(Ne,{description:"Name:",children:Object(se.jsx)(Te,{value:a,onChange:function(e){return i(e.target.value)}})}),Object(se.jsx)(Wt,{onClick:function(){return h(v)},primary:!0,children:"Save"})]}),Object(se.jsxs)(Ht,{children:[Object(se.jsx)(Ne,{description:"Rules (Regex capable)",children:Object(se.jsx)(Te,{value:j,onChange:function(e){O(e.target.value)}})}),Object(se.jsx)(Wt,{onClick:x,children:"Add"})]}),Object(se.jsx)(Gt,{children:null===u||void 0===u?void 0:u.map((function(e){return Object(se.jsx)(qt,{rule:e,handleRemoval:g,editMode:!0},e)}))})]})},Vt=ee.a.div(Y||(Y=Object($.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n"]))),Xt=ee.a.div(B||(B=Object($.a)(["\n  position: fixed;\n  top: 60px;\n  bottom: 60px;\n  right: 60px;\n  left: 60px;\n  background-color: #FFFFFF;\n  z-index: 3;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);\n  padding: 0px 20px;\n  overflow: auto;\n"]))),Zt=function(e){var t=e.children;return Object(se.jsx)(Vt,{children:Object(se.jsx)(Xt,{children:t})})},Qt=ee.a.div(K||(K=Object($.a)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  ","\n"])),(function(e){return e.isEdited&&"\n    color: #666666;\n  "})),$t=ee.a.div(_||(_=Object($.a)(["\n  flex-grow: 1;\n"]))),en=ee.a.div(q||(q=Object($.a)(["\n  margin-top: 5px;\n  display: flex;\n  gap: 7px;\n  flex-wrap: wrap;\n"]))),tn=function(e){var t=e.name,n=e.id,r=e.rules,c=e.handleEdit,a=e.isEdited,i=Object(W.useContext)(ot).removeCategory;return Object(se.jsxs)(ke,{children:[Object(se.jsxs)(Qt,{isEdited:a,children:[Object(se.jsx)($t,{children:t}),!a&&Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(Fe,{onClick:function(){return c(n)},children:"Edit"}),Object(se.jsx)(Fe,{onClick:function(){return i(n)},children:"Delete"})]})]}),Object(se.jsx)(en,{children:r&&r.map((function(e){return Object(se.jsx)(qt,{rule:e},e)}))})]})},nn=function(e){var t=e.categories,n=e.handleEdit,r=e.editedCategory;return(null===t||void 0===t?void 0:t.sort((function(e,t){return e.name.toUpperCase()>t.name.toUpperCase()}))).map((function(e){var t=e.name,c=e.key,a=e.rules;return Object(se.jsx)(tn,{name:t,id:c,rules:a,handleEdit:n,isEdited:r.key===c},c)}))},rn=Object(ee.a)(Fe)(H||(H=Object($.a)(["\n  margin-top: 10px;\n  text-decoration: none;\n  margin-bottom: 10px;\n"]))),cn=function(){var e=Object(W.useContext)(ot).categories,t=Object(W.useContext)(le).errorList,n=Object(W.useState)({rules:[]}),r=Object(re.a)(n,2),c=r[0],a=r[1],i=Object(W.useCallback)((function(){a({rules:[]})}),[a]);return Object(se.jsxs)(Zt,{children:[t&&Object(se.jsx)("p",{children:t.join(",")}),Object(se.jsx)("h2",{children:"Categories"}),Object(se.jsx)(Jt,{category:c,resetEditedCategory:i}),Object(se.jsx)(nn,{categories:e,handleEdit:function(t){a(e.find((function(e){return e.key===t})))},editedCategory:c}),Object(se.jsx)(X.b,{to:pe,children:Object(se.jsx)(rn,{primary:!0,children:"Close"})})]})},an=n(98),on=n.n(an),sn=function(){var e=Object(W.useContext)(le).ready;if((0,Object(W.useContext)(fe).isLoggedIn)())return Object(se.jsx)(Z.a,{to:pe,replace:!0});var t={signInFlow:"popup",signInOptions:[ce.a.PROVIDER_ID],signInSuccessUrl:pe};return Object(se.jsxs)(ke,{children:[Object(se.jsx)(ye,{page:"Login"}),e&&Object(se.jsx)(on.a,{uiConfig:t,firebaseAuth:Object(ce.b)()})]})};var un=function(){return Object(se.jsx)(de,{children:Object(se.jsx)(Oe,{children:Object(se.jsx)(rt,{children:Object(se.jsx)(it,{children:Object(se.jsx)(X.a,{children:Object(se.jsxs)(Z.d,{children:[Object(se.jsx)(Z.b,{path:"/taskhub-fe/categories",element:Object(se.jsx)(cn,{})}),Object(se.jsx)(Z.b,{path:"/taskhub-fe/login",element:Object(se.jsx)(sn,{})}),Object(se.jsx)(Z.b,{path:"*",element:Object(se.jsx)(Bt,{})})]})})})})})})},dn=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,190)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};V.a.render(Object(se.jsx)(G.a.StrictMode,{children:Object(se.jsx)(un,{})}),document.getElementById("root")),dn()}},[[175,1,2]]]);
//# sourceMappingURL=main.06e73ace.chunk.js.map