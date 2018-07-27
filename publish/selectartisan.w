<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:25px;left:89px;height:auto;" onParamsReceive="modelParamsReceive" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="artisanuserData" idColumn="id"><column name="id" type="String" xid="xid1"></column>
  <column name="login" type="String" xid="xid2"></column>
  <column name="username" type="String" xid="xid3"></column>
  <column name="headurl" type="String" xid="xid4"></column>
  <column name="iscollection" type="String" xid="xid14"></column>
  <column name="score" type="String" xid="xid18"></column>
  <column name="ordercount" type="String" xid="xid19"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="offerData" idColumn="id"><column name="id" type="String" xid="xid5"></column>
  <column name="artisanuser_id" type="String" xid="xid6"></column>
  <column name="bartask_id" type="String" xid="xid7"></column>
  <column name="price" type="String" xid="xid8"></column>
  <column name="summary" type="String" xid="xid9"></column>
  <column name="isselect" type="String" xid="xid10"></column>
  <column name="login" type="String" xid="xid11"></column>
  <column name="username" type="String" xid="xid12"></column>
  <column name="headurl" type="String" xid="xid13"></column>
  <column name="iscollection" type="String" xid="xid15"></column>
  <column name="score" type="String" xid="xid20"></column>
  <column name="ordercount" type="String" xid="xid21"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="couponData" idColumn="id"><column name="id" type="String" xid="xid16"></column>
  <column name="artisanuser_id" type="String" xid="xid17"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="选择技工"
          class="x-titlebar" style="background-color:white;">
          <div class="x-titlebar-left" style="color:#808080;"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title" style="color:#808080;font-weight:lighter;">选择技工</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content x-cards" xid="content1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="artisanuserData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" class="list-group-item" style="padding:0px;margin-bottom:5px;">
  
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="offerData" filter=' $row.val("artisanuser_id") == val("id")'>
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2" bind-css="val(&quot;isselect&quot;) == 1 ? 'selectcolor' : ''" bind-click="li2Click"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col2"><img src=" " alt="" xid="image1" style="width:40px;" bind-attr-src=' val("headurl")' class="headimg"></img>
  <i xid="i2" class="fa fa-star" style="color:#FF8000;margin-left:10px;"></i>
  <span xid="span8" bind-text='val("score")' style="color:#C0C0C0;"></span>
  <span xid="span9" bind-text="val(&quot;ordercount&quot;) + '单'" style="margin-left:15px;color:#C0C0C0;"></span></div>
   <div class="x-col text-right" xid="col3" style="padding-top:15px;"><span xid="span1" bind-text='val("username")'></span>
  <span xid="span6" style="color:#C0C0C0;" bind-visible=' val("iscollection") == 1'><![CDATA[(已收藏)]]></span></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col5"><span xid="span2"><![CDATA[报价]]></span></div>
   <div class="x-col text-right" xid="col6"><span xid="span7" style="color:#ff651a;" bind-visible=' $model.checkcoupon( val("artisanuser_id"))'><![CDATA[（专用优惠券）]]></span><span xid="span3" bind-text="'￥' + val(&quot;price&quot;)" style="color:#ff651a;"></span>
  </div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col7"><span xid="span4" bind-text='val("summary")' style="color:#C0C0C0;font-size:x-small;"></span></div></div></li></ul> </div></li></ul> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="margin-top:10px;">
   <div class="x-col" xid="col10"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="下一步" xid="nextbtn" disabled="true" onClick="nextbtnClick">
   <i xid="i1"></i>
   <span xid="span5">下一步</span></a></div></div></div>
  </div> 
<resource xid="resource2"><require xid="require1" url="css!$UI/liushushufront3/font-awesome-4.7.0/css/fa.icons"></require></resource></div>