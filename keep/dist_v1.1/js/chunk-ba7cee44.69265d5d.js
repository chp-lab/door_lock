(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba7cee44"],{"03ca":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-modal",{attrs:{centered:"",footer:null,fullscreen:""},model:{value:t.dialog500,callback:function(e){t.dialog500=e},expression:"dialog500"}},[a("a-result",{attrs:{status:"500",title:"500","sub-title":"Sorry, the server is wrong."}})],1),a("a-modal",{attrs:{centered:"",footer:null,fullscreen:""},model:{value:t.dialog401,callback:function(e){t.dialog401=e},expression:"dialog401"}},[a("a-result",{attrs:{status:"403",title:"401","sub-title":"Sorry, you are not authorized to access this page."}})],1),a("a-modal",{attrs:{centered:"",footer:null,fullscreen:""},model:{value:t.dialog404,callback:function(e){t.dialog404=e},expression:"dialog404"}},[a("a-result",{attrs:{status:"404",title:"404","sub-title":"Sorry, the page you visited does not exist."}})],1)],1)},o=[],s={data:function(){return{dialog500:!1,dialog401:!1,dialog404:!1}},methods:{open_dialog500:function(){this.dialog500=!0},open_dialog401:function(){console.log("dialog401"),this.dialog401=!0},open_dialog404:function(){this.dialog404=!0}}},i=s,l=a("2877"),r=Object(l["a"])(i,n,o,!1,null,"194cd237",null);e["a"]=r.exports},"1b75":function(t,e,a){},"1bb8":function(t,e,a){"use strict";a("1b75")},3026:function(t,e,a){"use strict";a("acf6")},acf6:function(t,e,a){},d755:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-card",{},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"pt-3 pt-0 pb-0",attrs:{cols:"9",align:"left"}},[a("p",[t._v("ปฏิทินการประชุมของท่าน")])]),a("v-col",{staticClass:"mb-1 pt-0 pb-0",attrs:{cols:"3",align:"right"}},[a("a-icon",{attrs:{type:"snippets"}})],1)],1)],1),a("v-row",{staticClass:"pt-3 pb-1 pt-0 pb-0"},[a("v-col",{},[a("a-alert",{attrs:{type:"info","show-icon":"",description:"ท่านสามารถกดวันที่ในปฏิทิน เพื่อดูการประชุมของท่าน"}})],1)],1),a("a-spin",{attrs:{spinning:t.spinning}},[a("div",{staticClass:"spin-content"},[a("div",{staticClass:"mt-2 mb-1",staticStyle:{border:"1px solid #d9d9d9","border-radius":"4px"}},[a("a-calendar",{attrs:{fullscreen:!1,"header-render":t.headerRender,"disabled-date":t.disabledDate,format:"DD-MM-YYYY"},on:{select:t.onSelect,panelChange:t.onPanelChange},scopedSlots:t._u([{key:"dateCellRender",fn:function(e){return a("ul",{staticClass:"events"},t._l(t.getListData(e),(function(t){return a("li",{key:t.content},[a("a-icon",{style:{color:t.theme_color},attrs:{theme:"filled",type:t.type}})],1)})),0)}}])})],1)])]),a("DialogShowMeetingPerson",{ref:"DialogShowMeetingPerson"})],1)},o=[],s=(a("fb6a"),a("d3b7"),a("25f0"),a("b85c")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-modal",{attrs:{title:"ข้อมูลการประชุมของท่าน",centered:""},model:{value:t.DialogShowMeetingPerson,callback:function(e){t.DialogShowMeetingPerson=e},expression:"DialogShowMeetingPerson"}},[a("a-spin",{attrs:{spinning:t.spinning}},[a("div",[a("v-row",{staticClass:"pt-3 pb-1 pt-0 pb-0"},[a("v-col",{},[a("a-alert",{attrs:{type:"success",description:this.convert_DateCendar}})],1)],1),a("a-empty",{directives:[{name:"show",rawName:"v-show",value:1==this.empty_data,expression:"this.empty_data == true"}],staticStyle:{"margin-top":"20px"}},[a("span",{attrs:{slot:"description"},slot:"description"},[t._v(" ท่านไม่มีประชุมในวันนี้ ")])]),t._l(this.data_list,(function(e){return a("v-row",{key:e,staticClass:"pt-5",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"pa-0"},[a("a-card",[a("a-timeline",[a("a-timeline-item",{attrs:{color:"green"}},[a("a-icon",{staticClass:"pr-5",staticStyle:{"font-size":"18px"},attrs:{slot:"dot",type:"solution"},slot:"dot"}),t._v(" "+t._s("หัวข้อประชุม : "+e.agenda)+" ")],1),a("a-timeline-item",{attrs:{color:"red"}},[a("a-icon",{staticStyle:{"font-size":"18px"},attrs:{slot:"dot",type:"calendar"},slot:"dot"}),t._v(" "+t._s(t.parseToDateFormat(e.meeting_start))+" ")],1),a("a-timeline-item",{attrs:{color:"pink"}},[a("a-icon",{staticStyle:{"font-size":"18px"},attrs:{slot:"dot",type:"bank"},slot:"dot"}),t._v(" "+t._s("ห้องประชุมที่ : "+e.room_num)+" ")],1),a("a-timeline-item",{attrs:{color:"blue"}},[a("a-icon",{staticStyle:{"font-size":"18px"},attrs:{slot:"dot",type:"clock-circle-o"},slot:"dot"}),t._v(" "+t._s(t.parseToTimeFormat(e.meeting_start,e.meeting_end))+" ")],1),a("a-timeline-item",{attrs:{color:"red"}},[a("a-icon",{staticStyle:{"font-size":"18px"},attrs:{slot:"dot",type:"team"},slot:"dot"}),a("p",[t._v("ผู้ร่วมประชุม :")]),a("div",[a("a-tag",{staticClass:"mt-2",attrs:{color:"blue"}},[t._v(" "+t._s(e.one_email)+" ")])],1),t._l(e.guest_email,(function(e){return a("div",{key:e},[a("a-tag",{staticClass:"mt-2",attrs:{color:"blue"}},[t._v(" "+t._s(e)+" ")])],1)}))],2)],1)],1)],1)],1)}))],2)]),a("template",{slot:"footer"},[a("a-button",{key:"back",attrs:{type:"primary"},on:{click:function(e){return t.closeDialogShowMeetingPerson()}}},[t._v(" ปิด ")])],1)],2),a("a-modal",{attrs:{centered:"",footer:null},model:{value:t.status_500,callback:function(e){t.status_500=e},expression:"status_500"}},[a("a-result",{attrs:{status:"500",title:"500","sub-title":"Sorry, the server is wrong."},scopedSlots:t._u([{key:"extra",fn:function(){},proxy:!0}])})],1),a("ModalStatuscode",{ref:"ModalStatuscode"})],1)},l=[],r=a("03ca"),c={components:{ModalStatuscode:r["a"]},data:function(){return{DialogShowMeetingPerson:!1,convert_DateCendar:null,select_date_calender:null,spinning:!1,user_login:"",data_list:null,empty_data:!1,status_500:!1,email_user:""}},created:function(){this.getdata_storage()},methods:{open:function(t){this.select_date_calender=t,console.log(t);var e=t.slice(8,10),a=t.slice(5,7),n=t.slice(0,4);this.convert_DateCendar="วันที่ "+e+"-"+a+"-"+n,this.API_ShowBookingUser(t),this.DialogShowMeetingPerson=!0},cleanSpinning:function(){this.spinning=!1},closeDialogShowMeetingPerson:function(){this.DialogShowMeetingPerson=!1},parseToDateFormat:function(t){var e=new Date(t);return"วันที่ : "+e.getDate()+"-"+(e.getMonth()+1)+"-"+e.getFullYear()},parseToTimeFormat:function(t,e){var a=new Date(t),n=new Date(e),o=0,s=0;return o=0==a.getMinutes()?a.getMinutes()+"0":a.getMinutes(),s=0==n.getMinutes()?n.getMinutes()+"0":n.getMinutes(),"เวลา : "+a.getHours()+":"+o+" - "+n.getHours()+":"+s+" น."},API_ShowBookingUser:function(t){var e=this;this.spinning=!0,this.empty_data=!1;var a="";this.axios({method:"GET",url:this.$store.state.url_get_API_axios+"api/v1/bookingTable/"+this.email_user+"/time/"+t}).then((function(t){console.log(t);var a=t.data;"success"==a.Status?(e.data_list=a.Value,e.cleanSpinning(),0===a.Value.length&&(e.empty_data=!0,e.data_list=[],e.cleanSpinning())):(e.$error({centered:!0,title:"ไม่พบข้อมูล",content:"กรุณาตรวจสอบข้อมูล"}),e.cleanSpinning())})).catch((function(t){console.log(t.message),e.cleanSpinning(),"Request failed with status code 400"==t.message?e.Model_countDown_error(t.message):"Request failed with status code 401"==t.message?e.$refs.ModalStatuscode.open_dialog401():"Request failed with status code 404"==t.message?e.$refs.ModalStatuscode.open_dialog404():"Request failed with status code 500"==t.message?e.$refs.ModalStatuscode.open_dialog500():(a="error",e.Model_countDown_error(a))}))},getdata_storage:function(){var t=JSON.parse(window.localStorage.getItem("user_data"));null===t?this.getdata=null:this.email_user=t.email},Model_countDown_error:function(t){if("Request failed with status code 400"==t){var e=3,a=this.$error({title:"กรุณากรอกข้อมูลให้ครบถ้วน",content:"เนื่องจากกรอกข้อมูลไม่ครบถ้วน",centered:!0}),n=setInterval((function(){e-=1,a.update({content:"เนื่องจากกรอกข้อมูลไม่ครบถ้วน"})}),1e3);setTimeout((function(){clearInterval(n),a.destroy()}),1e3*e)}else{var o=3,s=this.$error({title:"เกิดข้อผิดพลาด",content:"ไม่สามารถใช้งานได้",centered:!0}),i=setInterval((function(){o-=1,s.update({content:"ไม่สามารถใช้งานได้"})}),1e3);setTimeout((function(){clearInterval(i),s.destroy()}),1e3*o)}}}},u=c,d=(a("3026"),a("2877")),g=a("6544"),p=a.n(g),h=a("62ad"),f=a("0fd9"),_=Object(d["a"])(u,i,l,!1,null,"168de266",null),m=_.exports;p()(_,{VCol:h["a"],VRow:f["a"]});var v=a("c1df"),w=a.n(v),S={components:{DialogShowMeetingPerson:m},data:function(){return{format:"YYYY/MM/DD",day_event_calendar:null,user_login:"",email_user:"",List_booking_user:null,spinning:!1,Date_now:null,Month_now:null}},created:function(){this.getMonthNow(),this.getdata_storage(),this.API_GetBookingCalendarUser()},methods:{moment:w.a,onSelect:function(t){if(null!=t){var e=JSON.stringify(t);this.OpenDialogShowMeetingPerson(e)}else this.$message.error("กรุุณาเลือกวันที่ให้ถูกต้อง")},cleanSpinning:function(){this.spinning=!1},disabledDate:function(t){return t&&t<w()().startOf("day")},OpenDialogShowMeetingPerson:function(t){var e=t.slice(1,11);this.$refs.DialogShowMeetingPerson.open(e)},getMonthNow:function(){var t=new Date;this.Month_now=t.getMonth()+1,this.Date_now=t.getDate()},getListData:function(t){if(t.date()<10)var e="0"+t.date();else e=t.date();var a,n,o=e+"-"+t.month(),i=o.substring(0,2),l=o.substring(3,5),r=Object(s["a"])(this.List_booking_user);try{for(r.s();!(n=r.n()).done;){var c=n.value;i.toString()==c.meeting_start_day.toString()&&i>"0"+this.Date_now&&l==(this.Month_now-1).toString()&&(a=[{type:"star",theme_color:"orange"}])}}catch(u){r.e(u)}finally{r.f()}return a||[]},API_GetBookingCalendarUser:function(){var t=this;this.spinning=!0,console.log(this.email_user),this.axios({method:"GET",url:this.$store.state.url_get_API_axios+"api/v1/bookingTable/"+this.email_user+"/future"}).then((function(e){t.cleanSpinning(),console.log(e);var a=e.data;"success"==a.Status?t.List_booking_user=a.Value:console.log("test")})).catch((function(e){t.cleanSpinning(),console.log(e.message),"Request failed with status code 500"==e.message&&t.$message.error("ไม่พบข้อมูล")}))},headerRender:function(t){for(var e=t.value,a=t.onChange,n=this.$createElement,o=0,s=12,i=[],l=e.clone(),r=e.localeData(),c=[],u=0;u<12;u++)l.month(u),c.push(r.monthsShort(l));for(var d=o;d<s;d++)d<=s&&i.push(n("a-select-option",{class:"month-item",key:"".concat(d)},[c[d]]));var g=e.month();return n("div",{style:{padding:"10px"}},[n("a-row",{attrs:{type:"flex",justify:"space-around "}},[n("v-col",{attrs:{align:"left"},class:"mt-1"},[n("a-icon",{attrs:{type:"star",theme:"filled"},style:"color: orange;"}),n("span",{class:"ml-2"},["  หมายถึง มีการประชุม"])]),n("v-col",{attrs:{align:"right"}},[n("a-select",{attrs:{dropdownMatchSelectWidth:!1,value:String(g)},on:{change:function(t){var n=e.clone();n.month(parseInt(t,10)),a(n)}}},[i])])])])},getdata_storage:function(){var t=JSON.parse(window.localStorage.getItem("user_data"));null===t?this.getdata=null:this.email_user=t.email}}},y=S,b=(a("1bb8"),Object(d["a"])(y,n,o,!1,null,"fdec3400",null));e["default"]=b.exports;p()(b,{VCol:h["a"],VRow:f["a"]})}}]);
//# sourceMappingURL=chunk-ba7cee44.69265d5d.js.map