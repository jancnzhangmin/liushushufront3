<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:51px;left:90px;height:215px;width:152px;" onLoad="modelLoad" onActive="modelActive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="measureData" idColumn="id" confirmDelete="false"><column name="id" type="String" xid="xid1"></column>
  <column name="isfloorheat" type="String" xid="xid2"></column>
  <column name="isding" type="String" xid="xid3"></column>
  <column name="openinout" type="String" xid="xid4"></column>
  <column name="openleftright" type="String" xid="xid5"></column>
  <column name="summary" type="String" xid="xid6"></column>
  <column name="doorset" type="String" xid="xid7"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="transitData" idColumn="id" confirmDelete="false"><column name="id" type="String" xid="xid8"></column>
  <column name="startprovince" type="String" xid="xid9"></column>
  <column name="startcity" type="String" xid="xid10"></column>
  <column name="startdistrict" type="String" xid="xid11"></column>
  <column name="startaddress" type="String" xid="xid12"></column>
  <column name="endprovince" type="String" xid="xid13"></column>
  <column name="endcity" type="String" xid="xid14"></column>
  <column name="enddistrict" type="String" xid="xid15"></column>
  <column name="endaddress" type="String" xid="xid16"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="provinceData" idColumn="province"><column name="province" type="String" xid="xid17"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="cityData" idColumn="city"><column name="city" type="String" xid="xid18"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="bartaskdetailData" idColumn="id" confirmDelete="false"><column name="id" type="String" xid="xid22"></column>
  <column name="product_id" type="String" xid="xid27"></column>
  <column name="producbase" type="String" xid="xid28"></column>
  <column name="productincrement" type="String" xid="xid29"></column>
  <column name="number" type="String" xid="xid30"></column>
  <column name="floor" type="String" xid="xid31"></column>
  <column name="summary" type="String" xid="xid32"></column>
  <column name="productbaseid" type="String" xid="xid37"></column>
  <column name="productincrementid" type="String" xid="xid42"></column>
  <column name="lock_id" type="String" xid="xid78"></column>
  <column name="brand" type="String" xid="xid79"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="productData" idColumn="id"><column name="id" type="String" xid="xid19"></column>
  <column name="product" type="String" xid="xid20"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="barbaseData" idColumn="id"><column name="id" type="String" xid="xid23"></column>
  <column name="name" type="String" xid="xid24"></column>
  <column name="summary" type="String" xid="xid25"></column>
  <column name="product_id" type="String" xid="xid26"></column>
  <column name="parent_id" type="String" xid="xid36"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="bartaskdetail_barbase" idColumn="id"><column name="id" type="String" xid="xid33"></column>
  <column name="bartaskdetail" type="String" xid="xid34"></column>
  <column name="barbase" type="String" xid="xid35"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="barincrementData" idColumn="id"><column name="id" type="String" xid="xid38"></column>
  <column name="name" type="String" xid="xid39"></column>
  <column name="summary" type="String" xid="xid40"></column>
  <column name="product_id" type="String" xid="xid41"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="fingerData" idColumn="id" confirmDelete="false"><column name="id" type="String" xid="xid21"></column>
  <column name="model" type="String" xid="xid43"></column>
  <column name="summary" type="String" xid="xid44"></column>
  <column name="fingermodeldef_id" type="String" xid="xid87"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="openlockData" idColumn="id" confirmDelete="false"><column name="id" type="String" xid="xid45"></column>
  <column name="summary" type="String" xid="xid46"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="bartaskData" idColumn="id"><column name="id" type="String" xid="xid47"></column>
  <column name="preprice" type="String" xid="xid48"></column>
  <column name="province" type="String" xid="xid49"></column>
  <column name="city" type="String" xid="xid50"></column>
  <column name="district" type="String" xid="xid51"></column>
  <column name="address" type="String" xid="xid52"></column>
  <column name="ordernumber" type="String" xid="xid53"></column>
  <column name="installtime" type="String" xid="xid54"></column>
  <column name="contact" type="String" xid="xid55"></column>
  <column name="contactphone" type="String" xid="xid56"></column>
  <column name="summary" type="String" xid="xid57"></column>
  <column name="openid" type="String" xid="xid58"></column>
  <column name="paytype" type="String" xid="xid77"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="lockData" idColumn="id"><column name="id" type="String" xid="xid59"></column>
  <column name="lock" type="String" xid="xid60"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="receiptbartaskData" idColumn="id"><column name="id" type="String" xid="xid61"></column>
  <column name="preprice" type="String" xid="xid62"></column>
  <column name="province" type="String" xid="xid63"></column>
  <column name="city" type="String" xid="xid64"></column>
  <column name="district" type="String" xid="xid65"></column>
  <column name="address" type="String" xid="xid66"></column>
  <column name="status" type="String" xid="xid67"></column>
  <column name="installtime" type="String" xid="xid68"></column>
  <column name="ordernumber" type="String" xid="xid69"></column>
  <column name="contact" type="String" xid="xid70"></column>
  <column name="contactphone" type="String" xid="xid71"></column>
  <column name="measurecount" type="String" xid="xid72"></column>
  <column name="transitcount" type="String" xid="xid73"></column>
  <column name="fingercount" type="String" xid="xid74"></column>
  <column name="bartaskdetailcount" type="String" xid="xid75"></column>
  <column name="openlockcount" type="String" xid="xid76"></column>
  <column name="artisancount" type="String" xid="xid80"></column>
  <column name="servicetype" type="String" xid="xid90"></column>
  <column name="paytype" type="String" xid="xid91"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="processData" idColumn="id"><column name="id" type="String" xid="xid81"></column>
  <column name="ordernumber" type="String" xid="xid82"></column>
  <column name="artisan" type="String" xid="xid83"></column>
  <column name="price" type="String" xid="xid84"></column>
  <column name="taskcount" type="String" xid="xid85"></column>
  <column name="status" type="String" xid="xid86"></column>
  <column name="province" type="String" xid="xid92"></column>
  <column name="city" type="String" xid="xid93"></column>
  <column name="district" type="String" xid="xid94"></column>
  <column name="address" type="String" xid="xid95"></column>
  <column name="servicetype" type="String" xid="xid96"></column>
  <column name="paytype" type="String" xid="xid97"></column>
  <column name="installtime" type="String" xid="xid98"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="fingermodeldefData" idColumn="id"><column name="id" type="String" xid="xid88"></column>
  <column name="model" type="String" xid="xid89"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1" height="48"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified x-liushushu-top" tabbed="true" xid="buttonGroup1">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="我要发单" xid="button12" target="content2">
    <i xid="i14"></i>
    <span xid="span13">我要发单</span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="待确认" xid="button13" target="content3">
    <i xid="i15"></i>
    <span xid="span38">待确认</span></a> 
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="正在安装" xid="button14" target="content4">
   <i xid="i16"></i>
   <span xid="span39">正在安装</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="待验收" xid="button1" target="content6">
   <i xid="i1"></i>
   <span xid="span5">待验收</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="已完成" xid="button15" target="content5">
   <i xid="i17"></i>
   <span xid="span40">已完成</span></a>
  </div>
  </div><div class="x-panel-content x-cards" xid="content1" style="padding-top:0px;">
  
  
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content x-cards" xid="content2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row19" style="padding:0px;">
   <div class="x-col" xid="col25" style="padding:0px;"><img src="$UI/liushushufront3/image/back01.png" alt="" xid="image1" style="width:100%;"></img></div></div><div component="$UI/system/components/justep/row/row" class="x-row list-group-item" xid="row59" style="padding-top:5px;margin-bottom:10px;">
   <div class="x-col x-col-25" xid="col85"><span xid="span69"><![CDATA[服务类型]]></span></div>
   <div class="x-col text-right" xid="col93"><a component="$UI/system/components/justep/button/button" class="btn x-gray btn-sm" label="测量" xid="measure_btn" onClick="measure_btnClick" style="display:none;">
   <i xid="i18"></i>
   <span xid="span70">测量</span></a>
  <label xid="label1" style="width:5px;"><![CDATA[]]></label><a component="$UI/system/components/justep/button/button" class="btn x-gray btn-xs" label="运输" xid="transit_btn" onClick="transit_btnClick" bind-visible="false" style="display:none;">
   <i xid="i19"></i>
   <span xid="span71">运输</span></a>
  <label xid="label2" bind-visible="false"></label><a component="$UI/system/components/justep/button/button" class="btn x-gray btn-sm" label="安装" xid="bartask_btn" onClick="bartask_btnClick">
   <i xid="i20"></i>
   <span xid="span72">安装</span></a>
  <label xid="label3" style="width:5px;"></label><a component="$UI/system/components/justep/button/button" class="btn x-gray btn-sm" label="维修 开锁" xid="finger_btn" onClick="finger_btnClick">
   <i xid="i21"></i>
   <span xid="span73">维修 开锁</span></a>
  </div></div>
  <div component="$UI/system/components/justep/list/list" class="x-list " xid="list1" data="measureData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" class="list-group-item blue-border"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="display:none;">
   <div class="x-col" xid="col3" style="padding-top:10px;"><span xid="span1"><![CDATA[门套]]></span></div>
  <div class="x-col text-right" xid="col31" style="padding:0px;"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#F0F0F0;display:none;">
   <div class="x-col" xid="col4"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio1" label="无" name="doorset" onChange="radio1Change" bind-name="'doorset' +  val(&quot;id&quot;)"></span></div>
   <div class="x-col" xid="col5"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio2" label="保留" name="doorset" onChange="radio2Change" bind-name="'doorset' +  val(&quot;id&quot;)"></span></div>
   <div class="x-col" xid="col6"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio3" name="doorset" label="不保留" onChange="radio3Change" bind-name="'doorset' +  val(&quot;id&quot;)"></span></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="display:none;">
   <div class="x-col" xid="col9"><span xid="span2"><![CDATA[地暖]]></span></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#F0F0F0;display:none;">
   <div class="x-col" xid="col11"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio4" name="isfloorheat" label="无" bind-name="'isfloorheat' +  val(&quot;id&quot;)" onChange="radio4Change"></span></div>
   <div class="x-col" xid="col12"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio5" name="isfloorheat" label="有" bind-name="'isfloorheat' +  val(&quot;id&quot;)" onChange="radio5Change"></span></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="display:none;">
   <div class="x-col" xid="col15"><span xid="span3"><![CDATA[丁字墙]]></span></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#F0F0F0;display:none;">
   <div class="x-col" xid="col17"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio6" name="isding" label="否" bind-name="'isding' +  val(&quot;id&quot;)" onChange="radio6Change"></span></div>
   <div class="x-col" xid="col18"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio7" name="isding" label="是" bind-name="'isding' +  val(&quot;id&quot;)" onChange="radio7Change"></span></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="display:none;">
   <div class="x-col" xid="col21"><span xid="span4"><![CDATA[开向]]></span></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="display:none;">
   <div class="x-col" xid="col23"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio8" name="openinout" label="外开" bind-name="'openinout' +  val(&quot;id&quot;)" onChange="radio8Change"></span></div>
   <div class="x-col" xid="col24"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio9" name="openinout" label="内开" bind-name="'openinout' +  val(&quot;id&quot;)" onChange="radio9Change"></span></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#F0F0F0;display:none;">
   <div class="x-col" xid="col26"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio10" name="openleftright" label="左开" bind-name="'openleftright' +  val(&quot;id&quot;)" onChange="radio10Change"></span></div>
   <div class="x-col" xid="col27"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio11" name="openleftright" label="右开" bind-name="'openleftright' +  val(&quot;id&quot;)" onChange="radio11Change"></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col" xid="col34"><span xid="span7"><![CDATA[描述]]></span></div>
  <div class="x-col text-right" xid="col49"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
   <div class="x-col" xid="col37"><div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup1" style="width:100%;">
   
  <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control" xid="textarea2" onChange="textarea2Change" bind-ref='ref("summary")'></textarea></div></div></div>
  </li></ul> </div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="transitData">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2" class="list-group-item  blue-border"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col" xid="col40" style="padding-top:10px;"><span xid="span9"><![CDATA[起点]]></span></div>
  <div class="x-col text-right" xid="col55" style="padding:0px;"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row14">
   <div class="x-col" xid="col41"><select component="$UI/system/components/justep/distpicker/provinceSelect" class="form-control" xid="provinceSelect1" onChange="provinceSelect1Change" bind-ref='ref("startprovince")'></select></div>
   <div class="x-col" xid="col42"><select component="$UI/system/components/justep/distpicker/citySelect" class="form-control" xid="citySelect1" bind-provinceRef='val("startprovince")' bind-ref='ref("startcity")' onChange="citySelect1Change"></select></div>
   <div class="x-col" xid="col43"><select component="$UI/system/components/justep/distpicker/districtSelect" class="form-control" xid="districtSelect1" bind-cityRef='val("startcity")' bind-ref='ref("startdistrict")' onChange="districtSelect1Change"></select></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row17" style="border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#F0F0F0;">
   <div class="x-col" xid="col50"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" placeHolder="起点详细地址" bind-ref='ref("startaddress")' onChange="input1Change"></input></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row15">
   <div class="x-col" xid="col44">
    <span xid="span10"><![CDATA[终点]]></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row16">
   <div class="x-col" xid="col47">
    <select component="$UI/system/components/justep/distpicker/provinceSelect" class="form-control" xid="provinceSelect2" bind-ref='ref("endprovince")' onChange="provinceSelect2Change"></select></div> 
   <div class="x-col" xid="col46">
    <select component="$UI/system/components/justep/distpicker/citySelect" class="form-control" xid="citySelect2" bind-provinceRef='val("endprovince")' bind-ref='ref("endcity")'></select></div> 
   <div class="x-col" xid="col45">
    <select component="$UI/system/components/justep/distpicker/districtSelect" class="form-control" xid="districtSelect2" onChange="districtSelect2Change" bind-ref='ref("enddistrict")' bind-cityRef='val("endcity")'></select></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row18">
   <div class="x-col" xid="col51">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input2" placeHolder="终点详细地址" onChange="input2Change"></input></div> </div>
  </li></ul> </div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list3" data="bartaskdetailData">
   <ul class="x-list-template" xid="listTemplateUl3" style="padding-left:5px;padding-right:5px;">
    <li xid="li3" class="list-group-item  blue-border " style="padding:0px;"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row43">
   <div class="x-col" xid="col8"><div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup7">
   <span class="input-group-addon" xid="span41"><![CDATA[品　　牌]]></span>
   <input class="form-control" component="$UI/system/components/justep/input/input" xid="input8" dataType="String" onChange="input5Change" bind-ref='ref("brand")' placeHolder="品牌"></input></div></div>
  </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row44">
   <div class="x-col" xid="col10">
    <div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup8">
     <span class="input-group-addon" xid="span42"><![CDATA[类　　型]]></span>
     <select component="$UI/system/components/justep/select/select" bind-optionsCaption="请选择..." class="form-control" xid="select1" bind-options="$model.productData" bind-optionsValue="id" bind-optionsLabel="product" onChange="select1Change"></select></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row21">
   <div class="x-col" xid="col60"><div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup2">
   <span class="input-group-addon" xid="span15"><![CDATA[锁　　具]]></span>
   <select component="$UI/system/components/justep/select/select" bind-optionsCaption="请选择..." class="form-control" xid="select2" bind-options="$model.lockData" bind-optionsValue="id" bind-optionsLabel="lock" onChange="select2Change"></select></div>
  </div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row23" style="background-color:#eee;">
   <div class="x-col" xid="col65" style="padding-left:16px;"><span xid="span16"><![CDATA[基础服务]]></span></div>
   </div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list4" data="barbaseData">
   <ul class="x-list-template" xid="listTemplateUl4">
    <li xid="li4"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row24" style="padding:0px;">
   <div class="x-col" xid="col70" style="padding-left:36px;"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-xs basebtn btn-outline-off" label="button" xid="button5" bind-text='val("name")' style="margin-left:5px;width:80px;" onClick="button5Click">
   <i xid="i5"></i>
   <span xid="span17"></span></a>
  <span xid="span18" bind-text='val("summary")' style="font-size:small;color:#C0C0C0;margin-left:5px;"></span></div></div></li></ul> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row26" style="background-color:#eee;">
   <div class="x-col" xid="col72" style="padding-left:16px;">
    <span xid="span20"><![CDATA[增值服务]]></span></div> </div>
  
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list5" data="$model.barincrementData">
   <ul class="x-list-template" xid="listTemplateUl5">
    <li xid="li5">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row27" style="padding:0px;">
      <div class="x-col" xid="col73" style="padding-left:36px;">
       <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-xs basebtn btn-outline-off" label="button" xid="button7" bind-text='val("name")' style="margin-left:5px;width:80px;" onClick="button7Click">
        <i xid="i7"></i>
        <span xid="span22"></span></a> 
       <span xid="span21" bind-text='val("summary")' style="font-size:small;color:#C0C0C0;margin-left:5px;"></span></div> </div> </li> </ul> </div></li></ul> </div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list6" data="fingerData">
   <ul class="x-list-template" xid="listTemplateUl6">
    <li xid="li6" class="list-group-item  blue-border"><div component="$UI/system/components/justep/row/row" class="x-row " xid="row20">
   <div class="x-col" xid="col7"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label4"><![CDATA[服务项目]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="fingermodeldefselect" bind-optionsValue="id" bind-optionsLabel="model" bind-options="$model.fingermodeldefData" onChange="fingermodeldefselectChange"></select></div></div>
  </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row22">
   <div class="x-col" xid="col13" style="padding-top:10px"><textarea component="$UI/system/components/justep/textarea/textarea" class="form-control" xid="textarea1" placeHolder="描述" bind-ref='ref("summary")'></textarea></div></div>
  </li></ul> </div><div component="$UI/system/components/justep/smartContainer/smartContainer" xid="smartContainer1" style="margin:5px;background-color:white;height:550px;" class="x-smartcontainer blue-border"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row28">
   <div class="x-col x-col-fixed" xid="col77" style="width:80px;padding-top:12px;"><span xid="span27" style="margin-left:10px;"><![CDATA[服务地址]]></span></div>
  <div class="x-col" xid="col38" style="padding-right:0px;"><select component="$UI/system/components/justep/distpicker/provinceSelect" class="form-control" xid="provinceSelect3" onChange="provinceSelect3Change" optionsCaption=" 省 "></select></div>
  <div class="x-col" xid="col39" style="padding-left:0px;padding-right:0px;"><select component="$UI/system/components/justep/distpicker/citySelect" class="form-control" xid="citySelect3" bind-provinceRef='$model.provinceData.val("province")' onChange="citySelect3Change" optionsCaption=" 市 "></select></div>
  <div class="x-col" xid="col48" style="padding-left:0px;"><select component="$UI/system/components/justep/distpicker/districtSelect" class="form-control" xid="districtSelect3" bind-cityRef='$model.cityData.val("city")' onChange="districtSelect3Change" optionsCaption=" 县 "></select></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row41">
   <div class="x-col x-col-fixed" xid="col36" style="width:80px;"></div>
  <div class="x-col" xid="col68"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input9" placeHolder="详细地址" onChange="input9Change"></input></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row30" style="padding-top:10px;">
   <div class="x-col x-col-fixed" xid="col83" style="padding-top:12px;width:80px;"><span xid="span28" style="margin-left:10px;"><![CDATA[预约时间]]></span></div>
  <div class="x-col" xid="col30"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input4" dataType="Date" onChange="input4Change" onFocus="input4Focus"></input></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row32">
   <div class="x-col" xid="col89"><div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup3">
   <span xid="span29" class="input-group-addon"><![CDATA[代收款　]]></span>
   <input class="form-control" component="$UI/system/components/justep/input/input" xid="input5" dataType="String" onChange="input5Change"></input></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row " xid="row33">
   <div class="x-col" xid="col90">
    <div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup4">
     <span class="input-group-addon" xid="span30"><![CDATA[联系人　]]></span>
     <input class="form-control" component="$UI/system/components/justep/input/input" xid="input6" dataType="String" onChange="input6Change"></input></div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row34">
   <div class="x-col" xid="col91">
    <div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup5">
     <span class="input-group-addon" xid="span31"><![CDATA[联系方式]]></span>
     <input class="form-control" component="$UI/system/components/justep/input/input" xid="input7" dataType="String" onChange="input7Change"></input></div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row45">
   <div class="x-col" xid="col28">
    <span xid="span43" style="margin-left:10px;"><![CDATA[额外费用支付]]></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row46">
   <div class="x-col text-center" xid="col33"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio12" label="发单人支付" name="pay" checked="false" onChange="radio12Change" style="font-size:12px;"></span></div>
   <div class="x-col text-center" xid="col35"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio13" label="客户支付" name="pay" onChange="radio13Change"></span></div>
  </div><div component="$UI/system/components/justep/row/row" class="x-row " xid="row35">
   <div class="x-col" xid="col94"><textarea component="$UI/system/components/justep/textarea/textarea" class="form-control" xid="textarea3" placeHolder="描述" onChange="textarea3Change"></textarea></div></div>
  
  
  </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row40" style="background-color:#eee;padding-top:10px;">
   <div class="x-col" xid="col32"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="发布订单" xid="publicBtn" onClick="publicBtnClick">
   <i xid="i13"></i>
   <span xid="span37">发布订单</span></a></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="margin-top:10px;">
   <div class="x-col" xid="col14"><span xid="span6"><![CDATA[　]]></span></div>
   <div class="x-col" xid="col16"></div>
   <div class="x-col" xid="col19"></div></div>
  <div xid="div1" style="width:100%;position:fixed;bottom:48px;height:40px;display:none;" class="popdiv-background text-center" bind-click="div1Click"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row38">
   <div class="x-col" xid="col98" bind-click="col98Click"><label xid="label6" style="color:#FFFFFF;"><![CDATA[完成注册 享受更多优惠]]></label></div>
   <div class="x-col x-col-fixed" xid="col99" style="width:30px;"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-xs btn-only-icon pull-right div-close" label="button" xid="closediv" icon="fa fa-times" onClick="closedivClick" style="margin-top:-5px;">
   <i xid="i2" style="margin-top:8px;" class="fa fa-times"></i>
   <span xid="span32"></span></a></div></div></div></div>
  <div class="x-contents-content x-cards" xid="content3"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list8" data="receiptbartaskData" filter=' $row.val("status") == 1'>
   <ul class="x-list-template" xid="listTemplateUl8">
    <li xid="li8" class="list-group-item" bind-click="li8Click"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row48">
   <div class="x-col x-col-fixed" xid="col53" style="width:80px;"><![CDATA[]]>
  <span xid="span44"><![CDATA[预约时间]]></span></div>
   <div class="x-col" xid="col56"><span xid="span45" bind-text='val("installtime")' class="text-info"></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row49">
   <div class="x-col x-col-fixed" xid="col58" style="width:80px;"><span xid="span46"><![CDATA[参与技工]]></span></div>
   <div class="x-col" xid="col59"><span xid="span47" bind-text='val("artisancount")'><![CDATA[0]]></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row51">
   <div class="x-col x-col-fixed" xid="col66" style="width:80px;"><span xid="span49"><![CDATA[服务类型]]></span></div>
   <div class="x-col" xid="col67"><span xid="span23" bind-text='val("servicetype")'></span></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row25">
   <div class="x-col x-col-fixed" xid="col75" style="width:80px;">
    <span xid="span12"><![CDATA[任务地址]]></span></div> 
   <div class="x-col" xid="col74">
    <span xid="span8" bind-text=' val("province") + val("city") + val("district")'>0</span></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row29">
   <div class="x-col x-col-fixed" xid="col79" style="width:80px;">
    <span xid="span19"><![CDATA[额外费用]]></span></div> 
   <div class="x-col" xid="col78">
    <span xid="span14" bind-text='val("paytype")'>0</span></div> </div></li></ul> </div></div>
  <div class="x-contents-content" xid="content4"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list9" data="processData" filter="$row.val(&quot;status&quot;) == '2' || $row.val(&quot;status&quot;) == '3'">
   <ul class="x-list-template" xid="listTemplateUl9">
    <li xid="li9" class="list-group-item" bind-click="li9Click">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row47">
      <div class="x-col x-col-fixed" xid="col61" style="width:80px;">
       <span xid="span55"><![CDATA[预约时间]]></span></div> 
      <div class="x-col" xid="col29">
       <span xid="span54" bind-text='val("installtime")' class="text-info"></span></div> </div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row31">
   <div class="x-col x-col-fixed" xid="col22" style="width:80px;">
    <span xid="span50"><![CDATA[服务类型]]></span></div> 
   <div class="x-col" xid="col20">
    <span xid="span24" bind-text='val("servicetype")'></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row36">
   <div class="x-col x-col-fixed" xid="col80" style="width:80px;">
    <span xid="span61"><![CDATA[任务地址]]></span></div> 
   <div class="x-col" xid="col86">
    <span xid="span63" bind-text=' val("province") + val("city") + val("district")'></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row50">
      <div class="x-col x-col-fixed" xid="col2" style="width:80px;">
       <span xid="span52"><![CDATA[技工]]></span></div> 
      <div class="x-col" xid="col1">
       <span xid="span51" bind-text='val("artisan")'>0</span></div> </div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row53">
   <div class="x-col x-col-fixed" xid="col62" style="width:80px;">
    <span xid="span56"><![CDATA[报价]]></span></div> 
   <div class="x-col" xid="col63">
    <span xid="span57" bind-text="'￥' + val(&quot;price&quot;)" style="color:#ff651a;">0</span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row52">
      <div class="x-col x-col-fixed" xid="col57" style="width:80px;">
       <span xid="span53"><![CDATA[额外费用]]></span></div> 
      <div class="x-col" xid="col52">
       <span xid="span48" bind-text='val("paytype")'>0</span></div> </div> 
  </li> </ul> </div></div>
  <div class="x-contents-content" xid="content6"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list11" data="processData" filter='$row.val("status") == 4'>
   <ul class="x-list-template" xid="listTemplateUl11">
    <li xid="li11" class="list-group-item" bind-click="li9Click">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row37">
      <div class="x-col x-col-fixed" xid="col96" style="width:80px;">
       <span xid="span35"><![CDATA[预约时间]]></span></div> 
      <div class="x-col" xid="col71">
       <span xid="span33" bind-text='val("installtime")' class="text-info"></span></div> </div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row62">
   <div class="x-col x-col-fixed" xid="col106" style="width:80px;">
    <span xid="span82"><![CDATA[服务类型]]></span></div> 
   <div class="x-col" xid="col107">
    <span xid="span83" bind-text='val("servicetype")'>0</span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row63">
   <div class="x-col x-col-fixed" xid="col109" style="width:80px;">
    <span xid="span85"><![CDATA[任务地址]]></span></div> 
   <div class="x-col" xid="col108">
    <span xid="span84" bind-text=' val("province") + val("city") + val("district")'>0</span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row42">
      <div class="x-col x-col-fixed" xid="col95" style="width:80px;">
       <span xid="span76">技工</span></div> 
      <div class="x-col" xid="col92">
       <span xid="span77" bind-text='val("artisan")'>0</span></div> </div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row39">
      <div class="x-col x-col-fixed" xid="col100" style="width:80px;">
       <span xid="span36">报价</span></div> 
      <div class="x-col" xid="col97">
       <span xid="span26" bind-text="'￥' + val(&quot;price&quot;)" style="color:#ff651a;;">0</span></div> </div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row64">
   <div class="x-col x-col-fixed" xid="col110" style="width:80px;">
    <span xid="span86"><![CDATA[额外费用]]></span></div> 
   <div class="x-col" xid="col111">
    <span xid="span87" bind-text='val("paytype")'>0</span></div> </div>
  </li> </ul> </div></div><div class="x-contents-content" xid="content5"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list10" data="processData" filter="$row.val(&quot;status&quot;) == 5 || $row.val(&quot;status&quot;) == '-1'">
   <ul class="x-list-template" xid="listTemplateUl10">
    <li xid="li10" class="list-group-item" bind-click="li9Click">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row55">
      <div class="x-col x-col-fixed" xid="col81" style="width:80px;">
       <span xid="span65"><![CDATA[预约时间]]></span></div> 
      <div class="x-col" xid="col64">
       <span xid="span62" bind-text='val("installtime")' class="text-info"></span></div> </div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row56">
   <div class="x-col x-col-fixed" xid="col103" style="width:80px;">
    <span xid="span79"><![CDATA[服务类型]]></span></div> 
   <div class="x-col" xid="col102">
    <span xid="span78" bind-text='val("servicetype")'></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row61">
   <div class="x-col x-col-fixed" xid="col104" style="width:80px;">
    <span xid="span80"><![CDATA[任务地址]]></span></div> 
   <div class="x-col" xid="col105">
    <span xid="span81" bind-text=' val("province") + val("city") + val("district")'></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row57">
      <div class="x-col x-col-fixed" xid="col82" style="width:80px;">
       <span xid="span58">技工</span></div> 
      <div class="x-col" xid="col84">
       <span xid="span59" bind-text='val("artisan")'>0</span></div> </div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row54">
      <div class="x-col x-col-fixed" xid="col76" style="width:80px;">
       <span xid="span64">报价</span></div> 
      <div class="x-col" xid="col69">
       <span xid="span60" bind-text="'￥' + val(&quot;price&quot;)" style="color:#ff651a;">0</span></div> </div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row58">
   <div class="x-col x-col-fixed" xid="col87" style="width:80px;"><span xid="span66"><![CDATA[状态]]></span></div>
   <div class="x-col" xid="col88"><span xid="span67" bind-visible=' val("status") == 4'><![CDATA[等待验收]]></span>
  <span xid="span68" bind-visible=' val("status") == 5'><![CDATA[已验收]]></span>
  <span xid="span11" class="text-danger" bind-visible=' val("status") == -1'><![CDATA[已取消]]></span></div></div>
  </li> </ul> </div></div>
  </div>
  </div>
  </div> 
<resource xid="resource2"><require xid="require1" url="css!$UI/liushushufront3/font-awesome-4.7.0/css/fa.icons"></require></resource>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog1"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" onReceive="windowDialog1Receive"></span><div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" opacity="1">
   <div class="x-popOver-overlay" xid="div11"></div>
   <div class="x-popOver-content" xid="div12" style="width:100%;"></div></div>
  </div>