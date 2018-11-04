<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id"><column name="id" type="String" xid="xid1"></column>
  <column name="selectname" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;selectname&quot;:&quot;铁门&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="basedata" idColumn="id"><column name="id" type="String" xid="xid3"></column>
  <column name="base" type="String" xid="xid4"></column>
  <column name="isselect" type="String" xid="xid5"></column>
  <data xid="default2">[{&quot;id&quot;:&quot;1&quot;,&quot;base&quot;:&quot;安装&quot;,&quot;isselect&quot;:&quot;1&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;base&quot;:&quot;拆旧&quot;,&quot;isselect&quot;:&quot;0&quot;},{&quot;id&quot;:&quot;3&quot;,&quot;base&quot;:&quot;上楼&quot;,&quot;isselect&quot;:&quot;0&quot;},{&quot;id&quot;:&quot;4&quot;,&quot;base&quot;:&quot;灌水泥沙浆&quot;,&quot;isselect&quot;:&quot;0&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="bartaskData" idColumn="id"><column name="id" type="String" xid="xid6"></column>
  <column name="user_id" type="String" xid="xid7"></column>
  <column name="perprice" type="String" xid="xid8"></column>
  <column name="province" type="String" xid="xid9"></column>
  <column name="city" type="String" xid="xid10"></column>
  <column name="district" type="String" xid="xid11"></column>
  <column name="address" type="String" xid="xid12"></column>
  <column name="status" type="String" xid="xid13"></column>
  <column name="ordernumber" type="String" xid="xid14"></column>
  <column name="installtime" type="String" xid="xid15"></column>
  <column name="contact" type="String" xid="xid16"></column>
  <column name="contactphone" type="String" xid="xid17"></column>
  <column name="summary" type="String" xid="xid18"></column>
  <column name="paytype" type="String" xid="xid19"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="transitData" idColumn="id"><column name="id" type="String" xid="xid20"></column>
  <column name="province" type="String" xid="xid21"></column>
  <column name="city" type="String" xid="xid22"></column>
  <column name="district" type="String" xid="xid23"></column>
  <column name="address" type="String" xid="xid24"></column>
  <column name="distrance" type="String" xid="xid25"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row19" style="padding:0px;">
   <div class="x-col" xid="col25" style="padding:0px;">
    <img src="$UI/liushushufront3/image/back01.png" alt="" xid="image1" style="width:100%;"></img></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row list-group-item" xid="row1">
   <div class="x-col" xid="col1" style="padding-top:15px;"><span xid="span1"><![CDATA[服务类型]]></span></div>
   <div class="x-col text-right" xid="col3" style="padding-top:10px;"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm liushushubtn-active" label="安装" xid="button1" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span2">安装</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm liushushubtn-blur" label="维修 开锁" xid="button2" onClick="button2Click">
   <i xid="i2"></i>
   <span xid="span3">维修 开锁</span></a></div></div>
  <div xid="div1" style="padding-top:15px;"><div component="$UI/system/components/justep/smartContainer/smartContainer" class="x-smartcontainer" xid="smartContainer1" style="background-color:white;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="padding-right:0px;padding-bottom:0px;padding-left:15px;padding-top:0px;">
   <div class="x-col x-col-fixed" xid="col2" style="padding-top:14px;width:80px;padding-bottom:0px;padding-left:0px;height:50px;"><span xid="span4"><![CDATA[品牌]]></span></div>
   <div class="x-col" xid="col4" style="padding-right:0px;padding-bottom:0px;"><input component="$UI/system/components/justep/input/input" class="form-control liushushuinput" xid="input2" placeHolder="品牌"></input></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding-right:0px;padding-bottom:0px;padding-left:15px;padding-top:6px;">
   <div class="x-col x-col-fixed" xid="col7" style="padding-top:14px;width:80px;padding-bottom:0px;padding-left:0px;height:50px;">
    <span xid="span5"><![CDATA[项目]]></span></div> 
   <div class="x-col" xid="col6" style="padding-right:0px;padding-bottom:0px;">
    <select component="$UI/system/components/justep/select/select" bind-optionsCaption="项目" class="form-control liushushuinput" xid="select1" bind-options="data1" bind-optionsValue="id" bind-optionsLabel="selectname"></select></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding-right:0px;padding-bottom:0px;padding-left:15px;padding-top:6px;">
   <div class="x-col x-col-fixed" xid="col9" style="padding-top:14px;width:80px;padding-bottom:0px;padding-left:0px;height:50px;">
    <span xid="span6"><![CDATA[类型]]></span></div> 
   <div class="x-col" xid="col8" style="padding-right:0px;padding-bottom:0px;">
    <select component="$UI/system/components/justep/select/select" bind-optionsCaption="请选择..." class="form-control liushushuinput" xid="select2"></select></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="padding-right:0px;padding-bottom:0px;padding-left:15px;padding-top:6px;">
   <div class="x-col x-col-fixed" xid="col11" style="padding-top:14px;width:80px;padding-bottom:0px;padding-left:0px;height:50px;">
    <span xid="span7"><![CDATA[锁具]]></span></div> 
   <div class="x-col" xid="col10" style="padding-right:0px;padding-bottom:0px;">
    <select component="$UI/system/components/justep/select/select" bind-optionsCaption="请选择..." class="form-control liushushuinput" xid="select3"></select></div> </div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding-bottom:3px;">
   <div class="x-col text-center" xid="col14" style="padding-bottom:0px;"><span xid="span8" style="font-size:medium;color:#2671b9;"><![CDATA[基础服务]]></span></div></div>
  <div component="$UI/system/components/justep/smartContainer/smartContainer" class="x-smartcontainer" xid="smartContainer2" style="background-color:white;"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="basedata">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" class="col-xs-4 col-sm-3 text-center" style="padding-bottom:10px;"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-xs" label="button" xid="button3" bind-text=' val("base")' bind-css="val(&quot;isselect&quot;) == 1 ? 'servicebtn-active' : 'servicebtn-blur'">
   <i xid="i3"></i>
   <span xid="span9"></span></a></li></ul> </div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="padding-bottom:3px;">
   <div class="x-col text-center" xid="col15" style="padding-bottom:0px;">
    <span xid="span10" style="font-size:medium;color:#2671b9;"><![CDATA[增值服务]]></span></div> </div>
  <div component="$UI/system/components/justep/smartContainer/smartContainer" class="x-smartcontainer" xid="smartContainer3" style="background-color:white;">
   <div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="basedata">
    <ul class="x-list-template" xid="listTemplateUl2">
     <li xid="li2" class="col-xs-4 col-sm-3 text-center" style="padding-bottom:10px;">
      <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-xs" label="button" xid="button4" bind-text=' val("base")' bind-css="val(&quot;isselect&quot;) == 1 ? 'servicebtn-active' : 'servicebtn-blur'">
       <i xid="i4"></i>
       <span xid="span11"></span></a> </li> </ul> </div> </div>
  </div><div xid="div8" style="display:none;"><div component="$UI/system/components/justep/smartContainer/smartContainer" class="x-smartcontainer" xid="smartContainer4" style="background-color:white;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row17" style="padding-right:0px;padding-bottom:0px;padding-left:15px;padding-top:6px;">
   <div class="x-col x-col-fixed" xid="col35" style="padding-top:14px;width:80px;padding-bottom:0px;padding-left:0px;height:50px;">
    <span xid="span28"><![CDATA[服务项目]]></span></div> 
   <div class="x-col" xid="col33" style="padding-right:0px;padding-bottom:0px;">
    <select component="$UI/system/components/justep/select/select" bind-optionsCaption="项目" class="form-control liushushuinput" xid="select4" bind-options="data1" bind-optionsValue="id" bind-optionsLabel="selectname"></select></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row18" style="background-color:white;padding-right:0px;padding-bottom:0px;padding-left:15px;padding-top:6px;">
   <div class="x-col x-col-fixed" xid="col37" style="width:80px;padding-top:14px;">
    <span xid="span29"></span></div> 
   <div class="x-col text-center" xid="col36">
    <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control liushushuinput colblur" xid="textarea2" placeHolder="备注"></textarea></div> </div></div></div><div component="$UI/system/components/justep/row/row" class="x-row list-group-item" xid="row8" style="margin-top:15px;">
   <div class="x-col x-col-fixed" xid="col17" style="height:50px;padding-top:12px;width:80px;" bind-click="row8Click"><span xid="span12" style="font-size:medium;"><![CDATA[运输]]></span></div>
   <div class="x-col text-center" xid="col13" bind-click="row8Click"><div xid="div2" class="col-xs-12"><span xid="span14" style="color:#2671b9;"></span></div>
  <div xid="div3"><span xid="span15" class="text-muted"></span></div></div><div class="x-col x-col-fixed text-right" xid="col18" style="width:40px;padding-top:14px;"><i xid="i5" class="linear linear-chevronright" style="color:#808080;" bind-click="row8Click"></i>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-only-icon ciclebtn" label="button" xid="transitclear" icon="linear linear-cross" onClick="transitclearClick" bind-visible="false">
   <i xid="i7" class="linear linear-cross"></i>
   <span xid="span16"></span></a></div>
  </div>
  <div component="$UI/system/components/justep/row/row" class="x-row list-group-item" xid="row9">
   <div class="x-col x-col-fixed" xid="col12" style="height:50px;padding-top:12px;width:80px;" bind-click="row9Click">
    <span xid="span13" style="font-size:medium;"><![CDATA[服务地址]]></span></div> 
   <div class="x-col" xid="col16" bind-click="row9Click"><div xid="div4" class="col-xs-12 text-center"><div xid="div6"><span xid="span17" style="color:#2671b9;"></span></div>
  <div xid="div7"><span xid="span18" class="text-muted"></span></div></div>
  <div xid="div5" class="col-xs-12 text-center"><span xid="span19" style="color:#2671b9;"></span></div></div><div class="x-col x-col-fixed text-right" xid="col5" style="width:40px;margin-top:13px;">
    <i xid="i6" class="linear linear-chevronright" style="color:#808080;" bind-click="row9Click"></i>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-only-icon ciclebtn" label="button" xid="serviceclear" icon="linear linear-cross" onClick="serviceclearClick" bind-visible="false">
   <i xid="i8" class="linear linear-cross"></i>
   <span xid="span20"></span></a></div> 
  </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="background-color:white;padding-right:0px;padding-bottom:0px;padding-left:15px;padding-top:6px;margin-top:15px;">
   <div class="x-col x-col-fixed" xid="col20" style="width:80px;padding-top:14px;"><span xid="span21"><![CDATA[预约时间]]></span></div>
   <div class="x-col" xid="col21"><input type="text" xid="input7" class="form-control liushushuinput" id="installtime"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11" style="background-color:white;padding-right:0px;padding-bottom:0px;padding-left:15px;padding-top:6px;">
   <div class="x-col x-col-fixed" xid="col23" style="width:80px;padding-top:14px;">
    <span xid="span22"><![CDATA[代收款]]></span></div> 
   <div class="x-col" xid="col22">
    <input component="$UI/system/components/justep/input/input" class="form-control liushushuinput" xid="input3" dataType="String"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12" style="background-color:white;padding-right:0px;padding-bottom:0px;padding-left:15px;padding-top:6px;">
   <div class="x-col x-col-fixed" xid="col24" style="width:80px;padding-top:14px;">
    <span xid="span23"><![CDATA[联系人]]></span></div> 
   <div class="x-col" xid="col26">
    <input component="$UI/system/components/justep/input/input" class="form-control liushushuinput" xid="input4" dataType="String" placeHolder="现场联系人"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13" style="background-color:white;padding-right:0px;padding-bottom:0px;padding-left:15px;padding-top:6px;">
   <div class="x-col x-col-fixed" xid="col28" style="width:80px;padding-top:14px;">
    <span xid="span24"><![CDATA[联系方式]]></span></div> 
   <div class="x-col" xid="col27">
    <input component="$UI/system/components/justep/input/input" class="form-control liushushuinput" xid="input5" dataType="String" placeHolder="现场联系方式"></input></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row14" style="background-color:white;padding-right:0px;padding-bottom:0px;padding-left:15px;padding-top:6px;">
   <div class="x-col x-col-fixed" xid="col29" style="width:80px;padding-top:14px;">
    <span xid="span25"><![CDATA[额外费用]]></span></div> 
   <div class="x-col text-center" xid="col30" style="padding-top:10px;">
    <span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio1" label="发单人支付" name="pay" style="border-bottom-width:0px;"></span>
  </div> 
  <div class="x-col text-center" xid="col31" style="padding-top:10px;"><span component="$UI/system/components/justep/button/radio" class="x-radio liushushuradio" xid="radio2" label="客户支付" name="pay" style="border-bottom-width:0px;"></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row16" style="background-color:white;padding-right:0px;padding-bottom:0px;padding-left:15px;padding-top:6px;">
   <div class="x-col x-col-fixed" xid="col19" style="width:80px;padding-top:14px;">
    <span xid="span27"><![CDATA[]]></span></div> 
   
   <div class="x-col text-center" xid="col32">
    <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control liushushuinput colblur" xid="textarea1" placeHolder="备注"></textarea></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row15" style="padding-top:15px;">
   <div class="x-col" xid="col34"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-lg btn-block" label="发布订单" xid="button6" style="background-color:#2671b9;border-color:#2671b9;">
   <i xid="i9"></i>
   <span xid="span26">发布订单</span></a></div></div>
  </div>
  </div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" height="80%"></span>
  <resource xid="resource2"><require xid="require1" url="css!$UI/liushushufront3/css/lCalendar"></require>
  <require xid="require2" url="css!$UI/liushushufront3/css/mobiscroll.custom-2.6.2.min"></require>
  </resource></div>