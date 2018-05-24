<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="bartaskData" idColumn="id"><column name="id" type="String" xid="xid1"></column>
  <column name="preprice" type="String" xid="xid2"></column>
  <column name="province" type="String" xid="xid3"></column>
  <column name="city" type="String" xid="xid4"></column>
  <column name="district" type="String" xid="xid5"></column>
  <column name="address" type="String" xid="xid6"></column>
  <column name="status" type="String" xid="xid7"></column>
  <column name="installtime" type="String" xid="xid8"></column>
  <column name="ordernumber" type="String" xid="xid9"></column>
  <column name="created_at" type="String" xid="xid10"></column>
  <column name="updated_at" type="String" xid="xid11"></column>
  <column name="contact" type="String" xid="xid12"></column>
  <column name="contactphone" type="String" xid="xid13"></column>
  <column name="summary" type="String" xid="xid14"></column>
  <column name="paytype" type="String" xid="xid15"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="measureData" idColumn="id" confirmDelete="false">
   <column name="id" type="String" xid="column1"></column>
   <column name="isfloorheat" type="String" xid="column2"></column>
   <column name="isding" type="String" xid="column3"></column>
   <column name="openinout" type="String" xid="column4"></column>
   <column name="openleftright" type="String" xid="column5"></column>
   <column name="summary" type="String" xid="column6"></column>
   <column name="doorset" type="String" xid="column7"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="bartaskdetailData" idColumn="id" confirmDelete="false">
   <column name="id" type="String" xid="xid22"></column>
  <column name="product_id" type="String" xid="xid27"></column>
  <column name="producbase" type="String" xid="xid28"></column>
  <column name="productincrement" type="String" xid="xid29"></column>
  <column name="number" type="String" xid="xid30"></column>
  <column name="floor" type="String" xid="xid31"></column>
  <column name="summary" type="String" xid="xid32"></column>
  <column name="productbaseid" type="String" xid="xid37"></column>
  <column name="productincrementid" type="String" xid="xid42"></column>
  <column name="brand" type="String" xid="xid17"></column>
  <column name="product" type="String" xid="xid18"></column>
  <column name="lock" type="String" xid="xid19"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="transitData" idColumn="id" confirmDelete="false">
   <column name="id" type="String" xid="column12"></column>
   <column name="startprovince" type="String" xid="column13"></column>
   <column name="startcity" type="String" xid="column14"></column>
   <column name="startdistrict" type="String" xid="column15"></column>
   <column name="startaddress" type="String" xid="column8"></column>
   <column name="endprovince" type="String" xid="column9"></column>
   <column name="endcity" type="String" xid="column10"></column>
   <column name="enddistrict" type="String" xid="column11"></column>
   <column name="endaddress" type="String" xid="xid16"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="barbaseData" idColumn="id"><column name="id" type="String" xid="xid20"></column>
  <column name="bartaskdetail_id" type="String" xid="xid21"></column>
  <column name="name" type="String" xid="xid23"></column>
  <column name="summary" type="String" xid="xid24"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="barincrementData" idColumn="id">
   <column name="id" type="String" xid="column18"></column>
   <column name="bartaskdetail_id" type="String" xid="column19"></column>
   <column name="name" type="String" xid="column16"></column>
   <column name="summary" type="String" xid="column17"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="fingerData" idColumn="id" confirmDelete="false">
   <column name="id" type="String" xid="column20"></column>
   <column name="model" type="String" xid="xid43"></column>
   <column name="summary" type="String" xid="xid44"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="openlockData" idColumn="id" confirmDelete="false">
   <column name="id" type="String" xid="xid45"></column>
   <column name="summary" type="String" xid="xid46"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="订单明细"
          class="x-titlebar" style="color:#808080;font-weight:lighter;background-color:white;">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn" style="font-weight:lighter;"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title" style="font-weight:lighter;">订单明细</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content x-cards" xid="content1"><div component="$UI/system/components/justep/smartContainer/smartContainer" class="x-smartcontainer" xid="smartContainer1" style="background-color:white;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col5"><span xid="span3"><![CDATA[订单号]]></span></div>
   <div class="x-col text-right" xid="col6"><span xid="span4" bind-text='$model.bartaskData.val("ordernumber")'></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col8"><span xid="span5"><![CDATA[服务地址]]></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col12"><span xid="span7" bind-text=' $model.bartaskData.val("province") + $model.bartaskData.val("city") + $model.bartaskData.val("district") + $model.bartaskData.val("address")'></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col" xid="col14"><span xid="span8"><![CDATA[预约服务时间]]></span></div>
   <div class="x-col text-right" xid="col15"><span xid="span9" bind-text='$model.bartaskData.val("installtime")'></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col17"><span xid="span10"><![CDATA[预出价格]]></span></div>
   <div class="x-col text-right" xid="col18"><span xid="span11" bind-text="'￥' +  $model.bartaskData.val(&quot;preprice&quot;)"></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col20"><span xid="span12"><![CDATA[联系人]]></span></div>
   <div class="x-col text-right" xid="col21"><span xid="span13" bind-text='$model.bartaskData.val("contact")'></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col" xid="col23"><span xid="span14"><![CDATA[联系方式]]></span></div>
   <div class="x-col text-right" xid="col24"><span xid="span15" bind-text='$model.bartaskData.val("contactphone")'></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col" xid="col32">
    <span xid="span18"><![CDATA[额外费用支付]]></span></div> 
   <div class="x-col text-right" xid="col31">
    <span xid="span19" bind-text=" $model.bartaskData.val(&quot;paytype&quot;) == 1 ? '现场支付' : '发单人支付'"></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col27"><span xid="span16"><![CDATA[描述]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
   <div class="x-col" xid="col30"><span xid="span17" bind-text='$model.bartaskData.val("summary")'></span></div></div>
  </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12" bind-visible="$model.measureData.count() &gt; 0">
   <div class="x-col text-center" xid="col35"><span xid="span20"><![CDATA[门洞测量]]></span></div></div>
  <div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list1" data="measureData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" class="list-group-item" style="padding:0px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col" xid="col38"><span xid="span21"><![CDATA[描述]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row14">
   <div class="x-col" xid="col41"><span xid="span22" bind-text='val("summary")'></span></div></div>
  </li></ul> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row15" bind-visible=" $model.transitData.count() &gt; 0">
   <div class="x-col text-center" xid="col42">
    <span xid="span23"><![CDATA[运输服务]]></span></div> </div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="transitData">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2" class="list-group-item" style="padding:0px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row16">
   <div class="x-col" xid="col43">
    <span xid="span24"><![CDATA[起点]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row17">
   <div class="x-col" xid="col46"><span xid="span25" bind-text=' val("startaddress")'></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row18">
   <div class="x-col" xid="col47">
    <span xid="span26"><![CDATA[终点]]></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row19">
   <div class="x-col" xid="col48">
    <span xid="span27" bind-text='val("endaddress")'></span></div> </div>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list3">
   <ul class="x-list-template" xid="listTemplateUl3">
    <li xid="li3"></li></ul> </div></li></ul> 
  </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row20" bind-visible=" $model.bartaskdetailData.count() &gt; 0">
   <div class="x-col text-center" xid="col51"><span xid="span28"><![CDATA[安装服务]]></span>
  </div></div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list4" data="bartaskdetailData">
   <ul class="x-list-template" xid="listTemplateUl4">
    <li xid="li4" class="list-group-item" style="padding:0px;padding-bottom:10px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row21">
   <div class="x-col" xid="col53"><span xid="span29"><![CDATA[品牌]]></span></div>
   <div class="x-col text-right" xid="col54"><span xid="span30" bind-text='val("brand")'></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row22">
   <div class="x-col" xid="col56">
    <span xid="span32"><![CDATA[型号]]></span></div> 
   <div class="x-col text-right" xid="col55">
    <span xid="span31" bind-text='val("product")'></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row23">
   <div class="x-col" xid="col57">
    <span xid="span33"><![CDATA[锁具]]></span></div> 
   <div class="x-col text-right" xid="col58">
    <span xid="span34" bind-text='val("lock")'></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row24">
   <div class="x-col" xid="col61"><span xid="span35"><![CDATA[基础服务]]></span></div></div>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list5" data="barbaseData" filter=' $row.val("bartaskdetail_id") == val("id")'>
   <ul class="x-list-template" xid="listTemplateUl5" style="padding-left:10px;padding-right:10px;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-xs" label="button" xid="button1" bind-text=' val("name")'>
   <i xid="i2"></i>
   <span xid="span36"></span></a></ul> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row26">
   <div class="x-col" xid="col65">
    <span xid="span37"><![CDATA[增值服务]]></span></div> </div>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list6" data="$model.barincrementData" filter=' $row.val("bartaskdetail_id") == val("id")'>
   <ul class="x-list-template" xid="listTemplateUl6" style="padding-left:10px;padding-right:10px;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-xs" label="button" xid="button2" bind-text=' val("name")'>
     <i xid="i3"></i>
     <span xid="span38"></span></a> </ul> </div></li></ul> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row27" bind-visible=" $model.bartaskdetailData.count() &gt; 0">
   <div class="x-col text-center" xid="col66" bind-visible="false">
    <span xid="span39"><![CDATA[指纹锁 电子猫眼安装]]></span>
  </div> </div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list7" data="fingerData" bind-visible="false">
   <ul class="x-list-template" xid="listTemplateUl7">
    <li xid="li6" class="list-group-item" style="padding:0px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row28">
   <div class="x-col" xid="col68"><span xid="span40"></span></div>
   <div class="x-col" xid="col69"></div></div></li></ul> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row25" bind-visible=" $model.openlockData.count() &gt; 0">
   <div class="x-col text-center" xid="col1">
    <span xid="span6"><![CDATA[维修 开锁服务]]></span></div> </div>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list8" data="openlockData">
   <ul class="x-list-template" xid="listTemplateUl8">
    <li xid="li5" class="list-group-item" style="padding:0px;">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row29">
      <div class="x-col" xid="col7">
       <span xid="span41"><![CDATA[描述]]></span></div> 
      <div class="x-col" xid="col4"></div></div> 
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row30">
   <div class="x-col" xid="col11"><span xid="span42" bind-text='val("summary")'></span></div></div></li> </ul> </div></div>
  </div> 
<resource xid="resource2"><require xid="require1" url="css!$UI/liushushufront3/font-awesome-4.7.0/css/fa.icons"></require></resource></div>