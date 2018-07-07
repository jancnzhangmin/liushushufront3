<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"
    onLoad="modelLoad" onParamsReceive="modelParamsReceive"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="验收"
        class="x-titlebar" style="background-color:white;"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}"
            xid="backBtn" style="color:#808080;"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title" style="color:#808080;font-weight:lighter;">验收</div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content x-cards" xid="content1"> 
      <div component="$UI/system/components/justep/smartContainer/smartContainer"
        class="x-smartcontainer" xid="smartContainer1" style="background-color:white;"> 
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row5"> 
          <div class="x-col x-col-fixed" xid="col10" style="padding-top:15px;width:75px;"> 
            <span xid="span7" style="font-size:16px;"><![CDATA[综合评分]]></span> 
          </div>  
          <div class="x-col" xid="col9"> 
            <div xid="div7" class="block clearfix"> 
              <div xid="div8" class="atar_Show" style="float: left;"> 
                <p xid="p4"><![CDATA[
                ]]>
                  
                </p>
              </div> 
            </div> 
          </div> 
        <div class="x-col" xid="col11" style="padding-top:15px;padding-left:12px;"><span class="fenshu" xid="zhspan" style="font-size:15px;"><![CDATA[]]></span></div></div>  
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row2"> 
          <div class="x-col x-col-fixed" xid="col1" style="padding-top:15px;width:75px;"> 
            <span xid="span2" style="font-size:16px;"><![CDATA[服务技能]]></span> 
          </div>  
          <div class="x-col" xid="col4"> 
            <div xid="skill" class="block clearfix"> 
              <div xid="div2" class="star_score" bind-click="div2Click" bind-touchend="div2Touchend"/>  
              <p xid="p1" style="float:left;"><![CDATA[
                
              ]]>  
                <span class="fenshu" xid="skillspan"/>分
              </p> 
            </div> 
          </div> 
        </div>  
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row3"> 
          <div class="x-col x-col-fixed" xid="col6" style="padding-top:15px;width:75px;"> 
            <span xid="span3" style="font-size:16px;"><![CDATA[服务态度]]></span> 
          </div>  
          <div class="x-col" xid="col5"> 
            <div xid="attitude" class="block clearfix"> 
              <div xid="div3" class="star_score"/>  
              <p xid="p2" style="float:left;"> 
                <span class="fenshu" xid="attitudespan"/>分
              </p> 
            </div> 
          </div> 
        </div>  
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row4"> 
          <div class="x-col x-col-fixed" xid="col8" style="padding-top:15px;width:75px;"> 
            <span xid="span5" style="font-size:16px;"><![CDATA[时间观念]]></span> 
          </div>  
          <div class="x-col" xid="col7"> 
            <div xid="concept" class="block clearfix"> 
              <div xid="div5" class="star_score"/>  
              <p xid="p3" style="float:left;"> 
                <span class="fenshu" xid="conceptspan"/>分
              </p> 
            </div> 
          </div> 
        </div> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col16"><span xid="span15" style="font-size:x-small;"><![CDATA[一星至五星分别为：非常差、差、一般、满意、非常满意]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col19"><textarea component="$UI/system/components/justep/textarea/textarea" class="form-control" xid="textarea1" placeHolder="其它评价"></textarea></div></div></div>  
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1"> 
        <div class="x-col" xid="col3"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block"
            label="通过验收" xid="acceptanceBtn" onClick="acceptanceBtnClick"> 
            <i xid="i1"/>  
            <span xid="span1">通过验收</span> 
          </a> 
        </div> 
      </div> 
    </div> 
  </div> 
<span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog1" message="请完成评价"></span></div>
