(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{PqLn:function(e,t,s){},Xk2m:function(e,t,s){"use strict";var n=s("PqLn"),r=s.n(n);r.a},igWg:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:" flex items-center column-inline"},[s("div",{staticClass:" color flex justify-center full-width"},[s("q-icon",{attrs:{color:"white",name:"face",size:"80px"}})],1),e._v(" "),s("div",[s("p",{staticClass:"q-my-lg"},[s("b",[e._v("Nombre:")]),e._v(" "+e._s(e.user.firstName))]),e._v(" "),s("p",{staticClass:"q-mb-lg"},[s("b",[e._v("Apellidos:")]),e._v(" "+e._s(e.user.lastName))]),e._v(" "),s("p",{staticClass:"q-mb-lg"},[s("b",[e._v("Email:")]),e._v(" "+e._s(e.user.email))]),e._v(" "),s("p",{staticClass:"q-mb-lg"},[s("b",[e._v("Edad:")]),e._v(" "+e._s(e.user.age))])])])},r=[];n._withStripped=!0;var a=s("MVZn"),i=s.n(a),c=(s("ls82"),s("yXPU")),l=s.n(c),u=s("L2JU"),o={created:function(){var e=l()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getUser",this.$route.params._id);case 2:this.user=e.sent,console.log(this.user);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),data:function(){return{user:{}}},computed:i()({},Object(u["b"])(["getFirstname","getLastname","getEmail","getAge"]))},m=o,p=(s("Xk2m"),s("KHd+")),v=Object(p["a"])(m,n,r,!1,null,null,null);t["default"]=v.exports}}]);