(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65b8339e"],{"0fd9":function(t,e,s){"use strict";s("4b85");var i=s("2b0e"),a=s("d9f7"),n=s("80d2");const c=["sm","md","lg","xl"],o=["start","end","center"];function r(t,e){return c.reduce((s,i)=>(s[t+Object(n["u"])(i)]=e(),s),{})}const l=t=>[...o,"baseline","stretch"].includes(t),u=r("align",()=>({type:String,default:null,validator:l})),d=t=>[...o,"space-between","space-around"].includes(t),h=r("justify",()=>({type:String,default:null,validator:d})),g=t=>[...o,"space-between","space-around","stretch"].includes(t),v=r("alignContent",()=>({type:String,default:null,validator:g})),f={align:Object.keys(u),justify:Object.keys(h),alignContent:Object.keys(v)},m={align:"align",justify:"justify",alignContent:"align-content"};function p(t,e,s){let i=m[t];if(null!=s){if(e){const s=e.replace(t,"");i+="-"+s}return i+="-"+s,i.toLowerCase()}}const b=new Map;e["a"]=i["default"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l},...u,justify:{type:String,default:null,validator:d},...h,alignContent:{type:String,default:null,validator:g},...v},render(t,{props:e,data:s,children:i}){let n="";for(const a in e)n+=String(e[a]);let c=b.get(n);if(!c){let t;for(t in c=[],f)f[t].forEach(s=>{const i=e[s],a=p(t,s,i);a&&c.push(a)});c.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),b.set(n,c)}return t(e.tag,Object(a["a"])(s,{staticClass:"row",class:c}),i)}})},"2abd":function(t,e,s){"use strict";s("9524")},"4b85":function(t,e,s){},"62ad":function(t,e,s){"use strict";s("4b85");var i=s("2b0e"),a=s("d9f7"),n=s("80d2");const c=["sm","md","lg","xl"],o=(()=>c.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),r=(()=>c.reduce((t,e)=>(t["offset"+Object(n["u"])(e)]={type:[String,Number],default:null},t),{}))(),l=(()=>c.reduce((t,e)=>(t["order"+Object(n["u"])(e)]={type:[String,Number],default:null},t),{}))(),u={col:Object.keys(o),offset:Object.keys(r),order:Object.keys(l)};function d(t,e,s){let i=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");i+="-"+s}return"col"!==t||""!==s&&!0!==s?(i+="-"+s,i.toLowerCase()):i.toLowerCase()}}const h=new Map;e["a"]=i["default"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...r,order:{type:[String,Number],default:null},...l,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:i,parent:n}){let c="";for(const a in e)c+=String(e[a]);let o=h.get(c);if(!o){let t;for(t in o=[],u)u[t].forEach(s=>{const i=e[s],a=d(t,s,i);a&&o.push(a)});const s=o.some(t=>t.startsWith("col-"));o.push({col:!s||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),h.set(c,o)}return t(e.tag,Object(a["a"])(s,{class:o}),i)}})},"8ce9":function(t,e,s){},9320:function(t,e,s){t.exports=s.p+"img/icon_Bluetooth.a878f41e.png"},9524:function(t,e,s){},f4a9:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("v-container",[i("v-card",{staticClass:"mx-auto white mt-4",staticStyle:{"border-radius":"25px"},attrs:{elevation:"0","max-width":"350",flat:"","max-height":"250px"}},[i("v-row",{staticClass:"pt-3 pr-5",attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"ml-1",attrs:{cols:"3",align:"center"}},[i("v-img",{attrs:{src:s("9320"),"max-height":"130px","max-width":"70px",contain:""}})],1),i("v-col",{staticClass:"pl-0",attrs:{cols:"8"}},[i("div",{staticClass:"ml-3 overline"},[t._v(" Devicename : "),i("v-icon",{staticClass:"pl-16",staticStyle:{"margin-left":"22px"},attrs:{color:"connect"==this.status?"grey":"green",small:""}},[t._v("mdi-circle")])],1),i("v-card-title",{staticClass:"truncatecus pa-0 ml-3 black--text font-weight-black"},[t._v(t._s(t.array_device[0].name))]),i("v-card-title",{staticClass:"truncatecus pa-0 ml-3 grey--text font-weight-black body-2"},[t._v(t._s(t.Deviceid+t.array_device[0].id))])],1)],1),i("v-divider",{staticClass:"mx-10 mt-5",attrs:{inset:""}}),i("v-row",{staticClass:"mt-1 pb-2 pl-0",attrs:{align:"right",justify:"center"}},[i("v-col",{staticClass:"ml-6 mt-1",attrs:{align:"left"}},[i("span",{staticClass:"font-weight-black overline"},[t._v("Status : "),i("v-icon",{staticClass:"ml-2",attrs:{color:"connect"==this.status?"grey":"blue"}},[t._v(" "+t._s(this.status_icon)+" ")])],1)]),i("v-col",{staticClass:"pl-0 mr-7",attrs:{align:"right"}},[i("v-btn",{staticClass:"white--text mr-2",staticStyle:{width:"155px",height:"40px","border-radius":"13px"},attrs:{loading:t.loading,color:"connect"==this.status?"green":"red"},on:{click:function(e){return t.Status_connect_dis_Device()}}},[t._v(" "+t._s(this.status)+" "),i("v-icon",{staticClass:"ml-2"},[t._v(t._s(this.status_icon_btn))])],1)],1)],1)],1),"disconnect"==this.status?i("v-card",{staticClass:"mx-auto white mt-7",staticStyle:{"border-radius":"25px"},attrs:{elevation:"0","max-width":"350",flat:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"ml-6 mt-3",attrs:{align:"left"}},[i("span",{staticClass:"font-weight-black overline"},[t._v("Click button below to UNLOCK : "),i("v-icon",{staticClass:"ml-2",attrs:{color:"lock"==this.status_lock?"red":"green"}},[t._v(" "+t._s(this.statuslock_icon)+" ")])],1)])],1),i("v-row",{staticClass:"pt-2",attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{align:"center"}},[i("v-btn",{staticClass:"mx-2",style:"lock"==this.status_lock?"height: 150px; width: 150px; background: linear-gradient(to right, #e52d27, #b31217);":"height: 150px; width: 150px;  background: linear-gradient(to right, #56ab2f, #9dd955);",attrs:{fab:"",dark:""},on:{click:function(e){return t.connectDeviceAndCacheCharacteristics()}}},[i("v-icon",{attrs:{dark:"",size:"90px",color:"white"}},[t._v(t._s(this.statuslock_icon))])],1)],1)],1),i("v-divider",{staticClass:"ma-2 mt-5 black mx-8"}),i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"mt-1",attrs:{align:"center"}},[i("v-card-text",{staticClass:"font-weight-black overline",attrs:{color:"lock"==this.status_lock?"red":"green"}},[t._v("Status : "+t._s(this.status_lock)+" ")])],1)],1)],1):t._e()],1)],1)},a=[],n={name:"Home",components:{},data:()=>({array_device:[],Devicename:"Device Name:",Deviceid:"ID:",loading:!1,bluetoothDevice:null,statusCharacteristic:null,server:null,service:null,characteristic:null,otp_admin:"123454",name:"",id:"",status:"connect",status_icon:"mdi-bluetooth-off",status_icon_btn:"mdi-arrow-right-circle",status_lock:"lock",statuslock_icon:"mdi-lock-outline",devicegatt:null,backgroung_state_device:"background: linear-gradient(to right, #e52d27, #b31217);"}),mounted:{},created(){this.ScanDevice()},methods:{ScanDevice(){return(this.bluetoothDevice?Promise.resolve():this.requestDevice()).catch(t=>{console.log("Argh! "+t)})},requestDevice(){return console.log("Requesting any Bluetooth Device..."),this.$message.loading("Scan Device...",2).then(()=>this.$message.success("Scan Device",1.5)),navigator.bluetooth.requestDevice({acceptAllDevices:!0}).then(t=>{this.bluetoothDevice=t,console.log(t.rssi);var e={id:t.id,name:t.name};this.array_device.push(e),console.log(this.array_device)})},connectDeviceAndCacheCharacteristics(){if("lock"==this.status_lock)return this.status_lock="unlock",this.statuslock_icon="mdi-lock-open-outline",this.bluetoothDevice.gatt.connected&&this.statusCharacteristic?Promise.resolve():this.bluetoothDevice.gatt.connect().then(t=>(console.log("server---\x3e"),t.getPrimaryService("1fb32be3-958f-463c-893e-f9e33911f256"))).then(t=>(console.log("service---\x3e"),t.getCharacteristic("da467c88-9e6a-4d73-8f15-1dca6bc67419"))).then(t=>{console.log("characteristicr---\x3e");const e=new TextEncoder("utf-8"),s=e.encode(this.otp_admin);t.writeValue(s),this.$message.loading("Unlock Device...",1.5).then(()=>this.$message.success("Unlock success",1.5)),this.Timeout_StatusLock_unlock()})},Status_connect_dis_Device(){this.loading=!0,"connect"==this.status?(this.bluetoothDevice.gatt.connect(),this.devicegatt=this.bluetoothDevice.gatt.connect(),this.$message.loading("Connect to Device...",1.5).then(()=>this.$message.success("Connect Success",2)),this.status_icon_btn="mdi-close-circle",this.status="disconnect",this.status_icon="mdi-bluetooth-connect",this.loading=!1):"disconnect"==this.status&&(this.bluetoothDevice.gatt.disconnect(),this.$message.loading("Disconnect to Device...",1.5).then(()=>this.$message.success("Disconnect Success",2)),this.status_icon_btn="mdi-arrow-right-circle",this.status="connect",this.status_icon="mdi-bluetooth-off",this.loading=!1)},Timeout_StatusLock_unlock(){setTimeout(()=>(this.status_lock="lock",this.statuslock_icon="mdi-lock-outline",this.$message.loading("Action Lock..",1.5).then(()=>this.$message.error("Lock success",2.5))),8e3)}}},c=n,o=(s("2abd"),s("2877")),r=s("6544"),l=s.n(r),u=s("8336"),d=s("b0af"),h=s("99d9"),g=s("62ad"),v=(s("20f6"),s("4b85"),s("2b0e"));function f(t){return v["default"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:i,children:a}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:n}=i;if(n){i.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(i.staticClass+=" "+t.join(" "))}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,a)}})}var m=s("d9f7"),p=f("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:i}){let a;const{attrs:n}=s;return n&&(s.attrs={},a=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,Object(m["a"])(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(a||[])}),i)}}),b=(s("8ce9"),s("7560")),_=b["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}}),k=s("132d"),y=s("adda"),C=s("0fd9"),w=Object(o["a"])(c,i,a,!1,null,"67f428df",null);e["default"]=w.exports;l()(w,{VBtn:u["a"],VCard:d["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:g["a"],VContainer:p,VDivider:_,VIcon:k["a"],VImg:y["a"],VRow:C["a"]})}}]);
//# sourceMappingURL=chunk-65b8339e.7dea7951.js.map