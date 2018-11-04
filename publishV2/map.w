<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="provinceData" idColumn="province" confirmRefresh="true"><column name="province" type="String" xid="xid1"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="cityData" idColumn="city"><column name="city" type="String" xid="xid2"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="districtData" idColumn="district"><column name="district" type="String" xid="xid3"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="addressData" idColumn="address"><column name="address" type="String" xid="xid4"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" title="运输起点" style="background-color:white;" xid="title">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title" style="color:#2671b9;font-weight:normal;">运输起点</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1">
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-top" xid="top2" height="100"><div xid="div2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><select component="$UI/system/components/justep/distpicker/provinceSelect" class="form-control liushushuinput" xid="provinceSelect1" onChange="provinceSelect1Change"></select></div>
   <div class="x-col" xid="col2"><select component="$UI/system/components/justep/distpicker/citySelect" class="form-control liushushuinput" xid="citySelect1" bind-provinceRef='$model.provinceData.val("province")' onChange="citySelect1Change"></select></div>
   <div class="x-col" xid="col3"><select component="$UI/system/components/justep/distpicker/districtSelect" class="form-control liushushuinput" xid="districtSelect1" bind-cityRef='$model.cityData.val("city")' onChange="districtSelect1Change"></select></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col6"><input component="$UI/system/components/justep/input/input" class="form-control liushushuinput" xid="addressInput" placeHolder="详细地址" onChange="addressInputChange"></input></div></div></div></div>
   <div class="x-panel-content" xid="content2"><div xid="allmap" style="height:100%;width:100%;"></div></div>
   <div class="x-panel-bottom" xid="bottom1" height="48"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding:0px;">
   <div class="x-col text-center" xid="col5" style="padding-top:12px;"><span xid="distranceSpan" style="font-size:large;color:#2671b9;" bind-visible="false"></span></div>
   <div class="x-col x-col-67" xid="col7" style="padding:0px;"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block liushushubtn" label="确定" xid="button1" style="padding-top:12px;" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span2">确定</span></a></div></div></div></div></div>
  </div> 
</div>