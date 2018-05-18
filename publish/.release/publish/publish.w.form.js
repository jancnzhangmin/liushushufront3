define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/distpicker/districtSelect');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/bootstrap/accordion/accordion');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/justep/messageDialog/messageDialog');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/distpicker/citySelect');
require('$model/UI2/system/components/bootstrap/panel/panel');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/smartContainer/smartContainer');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/distpicker/provinceSelect');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/bootstrap/inputGroup/inputGroup');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/liushushufront3/publish/publish'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cnEnuqa';
	this._flag_='a77400e60741cf31c6027ebb0549dd61';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 require('css!$UI/liushushufront3/font-awesome-4.7.0/css/fa.icons').load();
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"doorset":{"define":"doorset","name":"doorset","relation":"doorset","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"isding":{"define":"isding","name":"isding","relation":"isding","type":"String"},"isfloorheat":{"define":"isfloorheat","name":"isfloorheat","relation":"isfloorheat","type":"String"},"openinout":{"define":"openinout","name":"openinout","relation":"openinout","type":"String"},"openleftright":{"define":"openleftright","name":"openleftright","relation":"openleftright","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"measureData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"endaddress":{"define":"endaddress","name":"endaddress","relation":"endaddress","type":"String"},"endcity":{"define":"endcity","name":"endcity","relation":"endcity","type":"String"},"enddistrict":{"define":"enddistrict","name":"enddistrict","relation":"enddistrict","type":"String"},"endprovince":{"define":"endprovince","name":"endprovince","relation":"endprovince","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"startaddress":{"define":"startaddress","name":"startaddress","relation":"startaddress","type":"String"},"startcity":{"define":"startcity","name":"startcity","relation":"startcity","type":"String"},"startdistrict":{"define":"startdistrict","name":"startdistrict","relation":"startdistrict","type":"String"},"startprovince":{"define":"startprovince","name":"startprovince","relation":"startprovince","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"transitData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"province":{"define":"province","name":"province","relation":"province","type":"String"}},"directDelete":false,"events":{},"idColumn":"province","isMain":false,"limit":20,"xid":"provinceData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"city":{"define":"city","name":"city","relation":"city","type":"String"}},"directDelete":false,"events":{},"idColumn":"city","isMain":false,"limit":20,"xid":"cityData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"brand":{"define":"brand","name":"brand","relation":"brand","type":"String"},"floor":{"define":"floor","name":"floor","relation":"floor","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"lock_id":{"define":"lock_id","name":"lock_id","relation":"lock_id","type":"String"},"number":{"define":"number","name":"number","relation":"number","type":"String"},"producbase":{"define":"producbase","name":"producbase","relation":"producbase","type":"String"},"product_id":{"define":"product_id","name":"product_id","relation":"product_id","type":"String"},"productbaseid":{"define":"productbaseid","name":"productbaseid","relation":"productbaseid","type":"String"},"productincrement":{"define":"productincrement","name":"productincrement","relation":"productincrement","type":"String"},"productincrementid":{"define":"productincrementid","name":"productincrementid","relation":"productincrementid","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"bartaskdetailData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"product":{"define":"product","name":"product","relation":"product","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"productData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"},"parent_id":{"define":"parent_id","name":"parent_id","relation":"parent_id","type":"String"},"product_id":{"define":"product_id","name":"product_id","relation":"product_id","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"barbaseData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"barbase":{"define":"barbase","name":"barbase","relation":"barbase","type":"String"},"bartaskdetail":{"define":"bartaskdetail","name":"bartaskdetail","relation":"bartaskdetail","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"bartaskdetail_barbase"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"},"product_id":{"define":"product_id","name":"product_id","relation":"product_id","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"barincrementData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"model":{"define":"model","name":"model","relation":"model","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"fingerData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"openlockData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"address":{"define":"address","name":"address","relation":"address","type":"String"},"city":{"define":"city","name":"city","relation":"city","type":"String"},"contact":{"define":"contact","name":"contact","relation":"contact","type":"String"},"contactphone":{"define":"contactphone","name":"contactphone","relation":"contactphone","type":"String"},"district":{"define":"district","name":"district","relation":"district","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"installtime":{"define":"installtime","name":"installtime","relation":"installtime","type":"String"},"openid":{"define":"openid","name":"openid","relation":"openid","type":"String"},"ordernumber":{"define":"ordernumber","name":"ordernumber","relation":"ordernumber","type":"String"},"paytype":{"define":"paytype","name":"paytype","relation":"paytype","type":"String"},"preprice":{"define":"preprice","name":"preprice","relation":"preprice","type":"String"},"province":{"define":"province","name":"province","relation":"province","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"bartaskData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"lock":{"define":"lock","name":"lock","relation":"lock","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"lockData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"address":{"define":"address","name":"address","relation":"address","type":"String"},"artisancount":{"define":"artisancount","name":"artisancount","relation":"artisancount","type":"String"},"bartaskdetailcount":{"define":"bartaskdetailcount","name":"bartaskdetailcount","relation":"bartaskdetailcount","type":"String"},"city":{"define":"city","name":"city","relation":"city","type":"String"},"contact":{"define":"contact","name":"contact","relation":"contact","type":"String"},"contactphone":{"define":"contactphone","name":"contactphone","relation":"contactphone","type":"String"},"district":{"define":"district","name":"district","relation":"district","type":"String"},"fingercount":{"define":"fingercount","name":"fingercount","relation":"fingercount","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"installtime":{"define":"installtime","name":"installtime","relation":"installtime","type":"String"},"measurecount":{"define":"measurecount","name":"measurecount","relation":"measurecount","type":"String"},"openlockcount":{"define":"openlockcount","name":"openlockcount","relation":"openlockcount","type":"String"},"ordernumber":{"define":"ordernumber","name":"ordernumber","relation":"ordernumber","type":"String"},"preprice":{"define":"preprice","name":"preprice","relation":"preprice","type":"String"},"prvoince":{"define":"prvoince","name":"prvoince","relation":"prvoince","type":"String"},"status":{"define":"status","name":"status","relation":"status","type":"String"},"transitcount":{"define":"transitcount","name":"transitcount","relation":"transitcount","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"receiptbartaskData"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});