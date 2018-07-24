<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive" onActive="modelActive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="couponData" idColumn="id"><column name="id" type="String" xid="xid1"></column>
  <column name="facevalue" type="String" xid="xid2"></column>
  <column name="condition" type="String" xid="xid3"></column>
  <column name="expirytype" type="String" xid="xid4"></column>
  <column name="assignexpiry" type="String" xid="xid5"></column>
  <column name="fixedexpiry" type="String" xid="xid6"></column>
  <column name="ordernumber" type="String" xid="xid7"></column>
  <column name="couponnumber" type="String" xid="xid8"></column>
  <column name="coupontype" type="String" xid="xid9"></column>
  <column name="name" type="String" xid="xid10"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="优惠券"
          class="x-titlebar" style="background-color:white;">
          <div class="x-titlebar-left" style="color:#808080;"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title" style="color:#808080;font-weight:lighter;">优惠券</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content x-cards" xid="content1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="couponData" onAfterRender="list1AfterRender" filter=" $model.listfilter($row)">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" class="list-group-item" bind-click="li1Click"><div xid="coupondiv" class="couponback" style="height:300px;">
  
  
  
  <div xid="listdiv" class="col-xs-5 listdiv" style="padding:0px;padding-left:20px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="padding:0px;">
   <div class="x-col" xid="col3" style="padding:0px;"><span xid="namespan" bind-text='val("name")' style="font-size:small;color:#000;"></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px;">
   <div class="x-col" xid="col8" style="padding:0px;">
    <span xid="span2" bind-text="val(&quot;assignexpiry&quot;) + '前有效'" style="font-size:9px;color:#000;"></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="padding:0px;">
   <div class="x-col" xid="col9" style="padding:0px;">
    <span xid="span3" bind-text="'消费满' + val(&quot;condition&quot;) + '可用'" style="font-size:9px;color:#000;"></span></div> </div></div><div xid="facevaluediv" class="col-xs-7 facevaluediv" style="padding:0px;margin-left:-10px;">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="padding:0px;">
   <div class="x-col" xid="col6" style="padding:0px;"><label xid="facevaluelabel" bind-text='val("facevalue") ' style="font-weight:bolder;font-size:50px;width:70px;text-align:right;letter-spacing:0px;margin-left:-5px;" class="facevaluegradient"><![CDATA[label　]]></label></div></div>
  </div></div>
  </li></ul> </div></div>
  </div> 
</div>