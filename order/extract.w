<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="extractData" idColumn="id"><column name="id" type="String" xid="xid1"></column>
  <column name="headurl" type="String" xid="xid2"></column>
  <column name="amount" type="String" xid="xid3"></column>
  <column name="name" type="String" xid="xid4"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="业务提成"
          class="x-titlebar" style="background-color:white;">
          <div class="x-titlebar-left" style="color:#808080;"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title" style="color:#808080;font-weight:lighter;">业务提成</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content x-cards" xid="content1">
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="extractData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" class="list-group-item" style="padding:0px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col2"><img src=" " alt="" xid="image1" bind-attr-src=' val("headurl")' style="width:30px;"></img>
  <span xid="span1" bind-text='val("name")' style="margin-left:15px;"></span></div>
   <div class="x-col text-right" xid="col3"><span xid="span2" bind-text="'￥' + val(&quot;amount&quot;)"></span></div></div></li></ul> </div></div>
  </div> 
</div>