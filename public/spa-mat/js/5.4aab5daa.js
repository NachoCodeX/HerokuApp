(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"5vjQ":function(t,o,e){"use strict";var n=e("KFc5"),s=e.n(n);s.a},"7JVJ":function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-page",{staticClass:" flex justify-center"},[e("div",{staticClass:"flex column test"},["USER"===t.getRole?e("ButtonGroup",{attrs:{buttons:[t.buttons[0],t.buttons[1]]}}):t._e(),t._v(" "),"USER"===t.getRole?e("ButtonGroup",{attrs:{buttons:[t.buttons[4],t.buttons[6]]}}):t._e(),t._v(" "),"AJUSTADOR"===t.role?e("ButtonGroup",{attrs:{buttons:[t.buttons[0],t.buttons[2]]}}):t._e(),t._v(" "),"AJUSTADOR"===t.role?e("ButtonGroup",{attrs:{buttons:[t.buttons[3],t.buttons[4]]}}):t._e(),t._v(" "),"AJUSTADOR"===t.role?e("ButtonGroup",{attrs:{buttons:[t.buttons[6]]}}):t._e(),t._v(" "),"USER"===t.role?e("div",{staticClass:"flex  row justify-center "},[e("div",{staticClass:"flex column items-center"},[e("q-btn",{staticClass:"fabBtn fabBtn__accident",attrs:{round:"",color:"negative",icon:"person_pin_circle","text-color":"white"},nativeOn:{click:function(o){return t.handleAccident(o)}}})],1)]):t._e()],1)])},s=[];n._withStripped=!0;var r=e("MVZn"),i=e.n(r),u=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"q-mb-lg flex  row justify-between "},[t._l(t.buttons,function(o){return e("div",{key:o.icon,staticClass:"flex column items-center"},[e("q-btn",{staticClass:"fabBtn",attrs:{round:"",color:"white",icon:o.icon,"text-color":"primary"},on:{click:function(e){t.handleRoute(o.route)}}}),t._v(" "),e("p",{staticClass:"q-mt-xs text-primary"},[t._v(t._s(o.text))])],1)}),t._v(" "),t._t("default")],2)},a=[];u._withStripped=!0;var c=e("L2JU"),l={props:["buttons"],methods:{handleRoute:function(t){if(console.log(t),"info"!==t)return"info/ajustador"===t?(console.log(this.getAjustadorID),void this.$router.push("dashboard/info/".concat(this.$store.state.auth.user.ajustador._id))):void this.$router.push("dashboard/".concat(t));this.$router.push("dashboard/".concat(t,"/").concat(this.getID))}},computed:i()({},Object(c["b"])(["getID","getAjustadorID"]))},d=l,h=(e("5vjQ"),e("KHd+")),f=Object(h["a"])(d,u,a,!1,null,null,null),p=f.exports,b={components:{ButtonGroup:p},created:function(){},data:function(){return{role:this.$store.state.auth.user.role,position:{},buttons:[{icon:"accessibility",route:"info",text:"Info"},{icon:"face",route:"info/ajustador",text:"Ajustador"},{icon:"face",route:"users",text:"Usuarios"},{icon:"search",route:"search",text:"Buscar"},{icon:"phone_in_talk",route:"contacts",text:"Contactos"},{icon:"timeline",route:"help",text:"Ayuda"},{icon:"contact_support",route:"help",text:"Ayuda"}]}},computed:i()({},Object(c["b"])(["getID","getRole"])),methods:{onSuccess:function(t){console.log(t),this.position=t},onError:function(t){alert(t.message),console.log(t)},onDeviceReady:function(){navigator.geolocation.getCurrentPosition(this.onSuccess,this.onError)},handleAccident:function(){var t=this,o={data:{user:this.$store.state.auth.user._id,ajustador:this.$store.state.auth.user.ajustador,position:this.position},$socket:this.$socket};this.$q.dialog({title:"Warning",message:"¿Esta usted seguro?",ok:!0,cancel:!0,preventClose:!0}).then(function(){return t.$store.dispatch("sendAlert",o)})}}},_=b,v=(e("MZAG"),Object(h["a"])(_,n,s,!1,null,null,null));o["default"]=v.exports},GGLu:function(t,o,e){},KFc5:function(t,o,e){},MZAG:function(t,o,e){"use strict";var n=e("GGLu"),s=e.n(n);s.a}}]);