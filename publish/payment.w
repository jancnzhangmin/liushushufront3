<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onParamsReceive="modelParamsReceive"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="支付"
          class="x-titlebar" style="background-color:white;">
          <div class="x-titlebar-left" style="color:#808080;"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title" style="color:#808080;font-weight:lighter;">支付</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content x-cards" xid="content1"><div component="$UI/system/components/justep/smartContainer/smartContainer" class="x-smartcontainer" xid="smartContainer1" style="background-color:white;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col2"><span xid="span1"><![CDATA[技工]]></span></div>
   <div class="x-col text-right" xid="col3"><span xid="span2"><![CDATA[]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col5"><span xid="span3"><![CDATA[费用]]></span></div>
   <div class="x-col text-right" xid="col6"><span xid="span4" style="color:#ff651a;"><![CDATA[]]></span></div></div>
  </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col text-center" xid="col9"><span xid="span5" style="color:#C0C0C0;"><![CDATA[该费用预支付到刘叔叔安装平台，待技工完成安装，您通过验收后，该费用支付给技工]]></span></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col12"><a component="$UI/system/components/justep/button/button" class="btn btn-success btn-block" label="微信支付" xid="wxpaybtn" onClick="wxpaybtnClick">
   <i xid="i1"></i>
   <span xid="span6">微信支付</span></a></div></div></div>
  </div> 
</div>