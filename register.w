<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onunLoad="modelUnLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="provinceData" idColumn="province"><column name="province" type="String" xid="xid1"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="cityData" idColumn="city"><column name="city" type="String" xid="xid2"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="注册"
          class="x-titlebar" style="background-color:white;">
          <div class="x-titlebar-left" style="color:#808080;"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title" style="color:#808080;font-weight:lighter;">注册</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content x-cards" xid="content1"><ul xid="ul1"><li class="list-group-item" xid="li1">
   <div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup4">
    <span class="input-group-addon" xid="span4"><![CDATA[手机　]]></span>
    <input type="text" class="form-control" component="$UI/system/components/justep/input/input" xid="phoneInput" placeHolder="手机号码"></input></div> </li>
  <li xid="li2" class="list-group-item"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col8"><span xid="span1"><![CDATA[地址]]></span></div>
   <div class="x-col" xid="col9"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px;">
   <div class="x-col" xid="col10" style="padding:0px;"><select component="$UI/system/components/justep/distpicker/provinceSelect" class="form-control" xid="provinceSelect1" onChange="provinceSelect1Change"></select></div>
   <div class="x-col" xid="col11" style="padding:0px;"><select component="$UI/system/components/justep/distpicker/citySelect" class="form-control" xid="citySelect1" bind-provinceRef='$model.provinceData.val("province")' onChange="citySelect1Change"></select></div>
   <div class="x-col" xid="col12" style="padding:0px;"><select component="$UI/system/components/justep/distpicker/districtSelect" class="form-control" xid="districtSelect1" bind-cityRef='$model.cityData.val("city")'></select></div></div></li>
  <li xid="li3"></li>
  <li class="list-group-item" xid="li4">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="padding:0px;">
    <div class="x-col" xid="col2" style="padding:0px;">
     <div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup3">
      <span class="input-group-addon" xid="span5">验证码</span>
      <input type="text" class="form-control" component="$UI/system/components/justep/input/input" xid="input1" placeHolder="短信验证码"></input></div> </div> 
    <div class="x-col x-col-fixed text-right" xid="col3" style="padding-top:5px;width:120px;">
     <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm" label="获取验证码" xid="validateBtn" onClick="validateBtnClick">
      <i xid="i1"></i>
      <span xid="span2">获取验证码</span></a> </div> </div> </li></ul>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col5"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="确定" xid="registerBtn" onClick="registerBtnClick">
   <i xid="i2"></i>
   <span xid="span3">确定</span></a></div></div></div>
  </div> 
</div>