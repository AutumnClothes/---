webpackJsonp([20],{e73g:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("L/Zn"),r=a("prc4"),l={name:"comment_index",components:{mainTable:o.a,paging:r.a},data:function(){return{url:{add:"comment/add.do",edit:"comment/edit.do",delete:"comment/delete.do"},pager:{data:[{id:"944047408537128960",appId:"937896733121966080",sId:"",nickName:"发的后果",rNickName:"",comment:"手动阀手动阀",upvoteNum:"156",answerSatus:"",account:"13612873429",commentType:1,lockStatus:1,createTime:"2017-12-22 11:30:16",status:""},{id:"944043274203287552",appId:"937896733121966080",sId:"",nickName:"维尔",rNickName:"",comment:"虽然他有人提议",upvoteNum:"12334",answerSatus:"",account:"13612873429",commentType:3,lockStatus:2,createTime:"2017-12-22 11:13:50",status:""},{id:"944042615311683584",appId:"937896733121966080",sId:"",nickName:"权威飒东风",rNickName:"",comment:"日语特尔问题",upvoteNum:"42514",answerSatus:"",account:"13612873429",commentType:2,lockStatus:1,createTime:"2017-12-22 11:11:13",status:""}],url:"comment/dataGrid.do",sort:"createTime",order:"desc"},currDialog:"add",dialogShow:!1,dialogSubmitLoading:!1,formSearch:{createdateStart:"",createdateEnd:"",keyWord:"",commentMan:"",lockStatus:"",id:""},formDialog:{id:"",appId:"",sId:"",nickName:"",rNickName:"",comment:"",upvoteNum:"",answerSatus:"",status:""},columns:[{title:"ID",key:"id",width:180,sortable:!0,fixed:"left"},{title:"评论内容",key:"comment",width:350,sortable:!0},{title:"评论人ID",key:"appId",width:180,sortable:!0},{title:"评论人昵称",key:"nickName",width:150,sortable:!0},{title:"评论人账号",key:"account",width:160,sortable:!0},{title:"评论对象",key:"commentType",width:150,sortable:!0,render:function(t,e){return t("span",{1:"帖子",2:"帖子",3:"帖子",4:"帖子",5:"新闻",6:"帖子"}[e.row.commentType])}},{title:"点赞数",key:"upvoteNum",width:150,sortable:!0},{title:"评论状态",key:"lockStatus",width:150,sortable:!0,render:function(t,e){return t("span",{1:"正常",2:"屏蔽"}[e.row.lockStatus])}},{title:"发布时间",key:"createTime",width:160,sortable:!0},{title:"操作",key:"action",width:140,align:"center",fixed:"right",render:function(t,e){return t("Button",{props:{type:"warning",size:"small"},style:{marginRight:"5px"},on:{click:function(){console.log("屏蔽")}}},2==e.row.lockStatus?"取消屏蔽":"屏蔽")}}],rules:{}}},methods:{addRow:function(){this.$store.commit("addRow",this)},initDialog:function(t){var e=util.extend(t);this.provinceCity=[e.cityCode.toString().slice(0,2)+"0000",e.cityCode.toString().slice(0,4)+"00",e.cityCode.toString()]},resetSearch:function(t){this.derail_address_obj_s=[],this.$refs[t].resetFields(),this.submitSearch(t)},submitSearch:function(t){this.$store.dispatch("submitSearch",{vm:this,name:t})},resetDialogForm:function(t){this.$refs[t].resetFields()},submitDialogForm:function(t){this.util.submitDialogForm(this,t)},changePager:function(t){this.util.changePager(this,t)},paging:function(){this.util.paging(this)},initData:function(){}},computed:{label:function(){return this.$store.state.label}},watch:{dialogShow:function(t){t||(this.currDialog="add")}},created:function(){var t=this;t.initData(),t.$store.commit("initPager",t),t.paging(t)},mounted:function(){}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment"},[a("Form",{ref:"formSearch",attrs:{model:t.formSearch,inline:"","label-width":60}},[a("FormItem",{attrs:{label:"关键词",prop:"keyWord"}},[a("Input",{attrs:{placeholder:"评论内容",size:"small"},model:{value:t.formSearch.keyWord,callback:function(e){t.$set(t.formSearch,"keyWord",e)},expression:"formSearch.keyWord"}})],1),t._v(" "),a("FormItem",{attrs:{label:"评论ID",prop:"id"}},[a("Input",{attrs:{placeholder:"评论ID",size:"small"},model:{value:t.formSearch.id,callback:function(e){t.$set(t.formSearch,"id",e)},expression:"formSearch.id"}})],1),t._v(" "),a("FormItem",{attrs:{label:"评论人",prop:"commentMan"}},[a("Input",{attrs:{placeholder:"ID/账号/昵称",size:"small"},model:{value:t.formSearch.commentMan,callback:function(e){t.$set(t.formSearch,"commentMan",e)},expression:"formSearch.commentMan"}})],1),t._v(" "),a("FormItem",{attrs:{label:"创建时间"}},[a("FormItem",{attrs:{prop:"createdateStart"}},[a("DatePicker",{attrs:{type:"datetime",placeholder:"点击选择时间",size:"small",clearable:!1},model:{value:t.formSearch.createdateStart,callback:function(e){t.$set(t.formSearch,"createdateStart",e)},expression:"formSearch.createdateStart"}})],1),t._v(" "),a("FormItem",[t._v("至")]),t._v(" "),a("FormItem",{attrs:{prop:"createdateEnd"}},[a("DatePicker",{attrs:{type:"datetime",placeholder:"点击选择时间",size:"small",clearable:!1},model:{value:t.formSearch.createdateEnd,callback:function(e){t.$set(t.formSearch,"createdateEnd",e)},expression:"formSearch.createdateEnd"}})],1)],1),t._v(" "),a("FormItem",{attrs:{label:"状态",prop:"lockStatus"}},[a("Select",{staticStyle:{width:"80px"},attrs:{placeholder:"请选择",size:"small",clearable:""},model:{value:t.formSearch.lockStatus,callback:function(e){t.$set(t.formSearch,"lockStatus",e)},expression:"formSearch.lockStatus"}},[a("Option",{attrs:{value:"1"}},[t._v("正常")]),t._v(" "),a("Option",{attrs:{value:"2"}},[t._v("屏蔽")])],1)],1),t._v(" "),a("Button",{staticStyle:{margin:"5px 8px 24px 0"},attrs:{type:"ghost",size:"small"},on:{click:function(e){t.resetSearch("formSearch")}}},[t._v(t._s(t.label.clear))]),t._v(" "),a("Button",{staticStyle:{margin:"5px 8px 24px 0"},attrs:{type:"primary",size:"small"},on:{click:function(e){t.submitSearch("formSearch")}}},[t._v(t._s(t.label.search))]),t._v(" "),a("Button",{staticStyle:{margin:"5px 8px 24px 0"},attrs:{type:"primary",size:"small"},on:{click:t.addRow}},[t._v(t._s(t.label.add))])],1),t._v(" "),a("mainTable",{attrs:{columns:t.columns,data:t.pager.data}}),t._v(" "),a("paging",{attrs:{total:t.pager.total,currPage:t.pager.currPage},on:{changePager:t.changePager,paging:t.paging}}),t._v(" "),a("Modal",{attrs:{title:t.label[t.currDialog],"mask-closable":!1,width:"750"},on:{"on-cancel":function(e){t.resetDialogForm("formDialog")}},model:{value:t.dialogShow,callback:function(e){t.dialogShow=e},expression:"dialogShow"}},[a("Form",{ref:"formDialog",attrs:{model:t.formDialog,rules:t.rules,"label-width":80}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"app用户id",prop:"appId"}},[a("Input",{attrs:{placeholder:"请输入app用户id"},model:{value:t.formDialog.appId,callback:function(e){t.$set(t.formDialog,"appId",e)},expression:"formDialog.appId"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"send发表评论id",prop:"sId"}},[a("Input",{attrs:{placeholder:"请输入send发表评论id"},model:{value:t.formDialog.sId,callback:function(e){t.$set(t.formDialog,"sId",e)},expression:"formDialog.sId"}})],1)],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"昵称",prop:"nickName"}},[a("Input",{attrs:{placeholder:"请输入昵称"},model:{value:t.formDialog.nickName,callback:function(e){t.$set(t.formDialog,"nickName",e)},expression:"formDialog.nickName"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"回复人昵称",prop:"rNickName"}},[a("Input",{attrs:{placeholder:"请输入回复人昵称"},model:{value:t.formDialog.rNickName,callback:function(e){t.$set(t.formDialog,"rNickName",e)},expression:"formDialog.rNickName"}})],1)],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"评论内容",prop:"comment"}},[a("Input",{attrs:{placeholder:"请输入评论内容"},model:{value:t.formDialog.comment,callback:function(e){t.$set(t.formDialog,"comment",e)},expression:"formDialog.comment"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"点赞数",prop:"upvoteNum"}},[a("Input",{attrs:{placeholder:"请输入点赞数"},model:{value:t.formDialog.upvoteNum,callback:function(e){t.$set(t.formDialog,"upvoteNum",e)},expression:"formDialog.upvoteNum"}})],1)],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"1：非评论,2:评论",prop:"answerSatus"}},[a("Input",{attrs:{placeholder:"请输入1：非评论,2:评论"},model:{value:t.formDialog.answerSatus,callback:function(e){t.$set(t.formDialog,"answerSatus",e)},expression:"formDialog.answerSatus"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"0:正常,1:广告,2:政治敏感,3:不适宜公开,4:骂人,5:色情等违法",prop:"status"}},[a("Input",{attrs:{placeholder:"请输入0:正常,1:广告,2:政治敏感,3:不适宜公开,4:骂人,5:色情等违法"},model:{value:t.formDialog.status,callback:function(e){t.$set(t.formDialog,"status",e)},expression:"formDialog.status"}})],1)],1)],1)],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{on:{click:function(e){t.resetDialogForm("formDialog")}}},[t._v(t._s(t.label.clear))]),t._v(" "),a("Button",{attrs:{type:"primary",loading:t.dialogSubmitLoading},on:{click:function(e){t.submitDialogForm("formDialog")}}},[t._v(t._s(t.label.submit))])],1)],1)],1)},staticRenderFns:[]};var s=a("Z0/y")(l,i,!1,function(t){a("xPO7")},"data-v-21d697d4",null);e.default=s.exports},xPO7:function(t,e){}});