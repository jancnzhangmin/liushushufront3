<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="artisanuserData" idColumn="id"><column name="id" type="String" xid="xid1"></column>
  <column name="username" type="String" xid="xid2"></column>
  <column name="headurl" type="String" xid="xid3"></column>
  <column name="login" type="String" xid="xid4"></column>
  <column name="servicenumber" type="String" xid="xid5"></column>
  <column name="score" type="String" xid="xid6"></column>
  <column name="skillscore" type="String" xid="xid7"></column>
  <column name="conceptscore" type="String" xid="xid8"></column>
  <column name="attitudescore" type="String" xid="xid9"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="我的技工"
          class="x-titlebar" style="background-color:white;">
          <div class="x-titlebar-left" style="color:#808080;"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title" style="font-weight:lighter;color:#808080;">我的技工</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content x-cards" xid="content1"><div component="$UI/system/components/justep/smartContainer/smartContainer" class="x-smartcontainer" xid="smartContainer1" style="background-color:white;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-fixed" xid="col2" style="width:80px;"><span xid="span1"><![CDATA[技工]]></span></div>
   <div class="x-col" xid="col3"><span xid="span2" bind-text='$model.artisanuserData.val("username")'></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-fixed" xid="col4" style="width:80px;">
    <span xid="span4"><![CDATA[联系方式]]></span></div> 
   <div class="x-col" xid="col5">
    <span xid="span3" bind-text='$model.artisanuserData.val("login")'></span></div> 
  <div class="x-col text-right" xid="col6"><a xid="a2"><i xid="i3" class="fa fa-phone"></i></a>
  </div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col x-col-fixed" xid="col7" style="width:80px;">
    <span xid="span7"><![CDATA[服务次数]]></span></div> 
   <div class="x-col" xid="col8">
    <span xid="span6" bind-text='$model.artisanuserData.val("servicenumber")'></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col x-col-fixed" xid="col10" style="padding-top:15px;width:75px;">
    <span xid="span8" style="font-size:16px;">综合评分</span></div> 
   <div class="x-col" xid="col9">
    <div xid="div7" class="block clearfix">
     <div xid="div8" class="atar_Show" style="float: left;">
      <p xid="p4"></p></div> </div> </div> 
   <div class="x-col" xid="col11" style="padding-top:16px;padding-left:12px;">
    <span class="fenshu" xid="zhspan" style="font-size:15px;"></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-fixed" xid="col14" style="padding-top:15px;width:75px;">
    <span xid="span9" style="font-size:16px;"><![CDATA[服务技能]]></span></div> 
   <div class="x-col" xid="col12">
    <div xid="div2" class="block clearfix">
     <div xid="div1" class="atar_Show" style="float: left;">
      <p xid="p1"></p></div> </div> </div> 
   <div class="x-col" xid="col13" style="padding-top:16px;padding-left:12px;">
    <span class="fenshu" xid="skillscorespen" style="font-size:15px;"></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col x-col-fixed" xid="col15" style="padding-top:15px;width:75px;">
    <span xid="span11" style="font-size:16px;"><![CDATA[服务态度]]></span></div> 
   <div class="x-col" xid="col17">
    <div xid="div3" class="block clearfix">
     <div xid="div4" class="atar_Show" style="float: left;">
      <p xid="p2"></p></div> </div> </div> 
   <div class="x-col" xid="col16" style="padding-top:16px;padding-left:12px;">
    <span class="fenshu" xid="conceptscorespan" style="font-size:15px;"></span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col x-col-fixed" xid="col20" style="padding-top:15px;width:75px;">
    <span xid="span14" style="font-size:16px;"><![CDATA[时间观念]]></span></div> 
   <div class="x-col" xid="col18">
    <div xid="div6" class="block clearfix">
     <div xid="div5" class="atar_Show" style="float: left;">
      <p xid="p3"></p></div> </div> </div> 
   <div class="x-col" xid="col19" style="padding-top:16px;padding-left:12px;">
    <span class="fenshu" xid="attitudescorespan" style="font-size:15px;"></span></div> </div></div></div>
  </div> 
<resource xid="resource2"><require xid="require1" url="css!$UI/liushushufront3/font-awesome-4.7.0/css/fa.icons"></require></resource></div>