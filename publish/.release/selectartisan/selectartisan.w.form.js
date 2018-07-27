define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/liushushufront3/publish/selectartisan'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cVVVJzm';
	this._flag_='6033dca9bc3fce7e94eec13d4fc01a6c';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 require('css!$UI/liushushufront3/font-awesome-4.7.0/css/fa.icons').load();
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"headurl":{"define":"headurl","name":"headurl","relation":"headurl","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"iscollection":{"define":"iscollection","name":"iscollection","relation":"iscollection","type":"String"},"login":{"define":"login","name":"login","relation":"login","type":"String"},"ordercount":{"define":"ordercount","name":"ordercount","relation":"ordercount","type":"String"},"score":{"define":"score","name":"score","relation":"score","type":"String"},"username":{"define":"username","name":"username","relation":"username","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"artisanuserData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"artisanuser_id":{"define":"artisanuser_id","name":"artisanuser_id","relation":"artisanuser_id","type":"String"},"bartask_id":{"define":"bartask_id","name":"bartask_id","relation":"bartask_id","type":"String"},"headurl":{"define":"headurl","name":"headurl","relation":"headurl","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"iscollection":{"define":"iscollection","name":"iscollection","relation":"iscollection","type":"String"},"isselect":{"define":"isselect","name":"isselect","relation":"isselect","type":"String"},"login":{"define":"login","name":"login","relation":"login","type":"String"},"ordercount":{"define":"ordercount","name":"ordercount","relation":"ordercount","type":"String"},"price":{"define":"price","name":"price","relation":"price","type":"String"},"score":{"define":"score","name":"score","relation":"score","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"},"username":{"define":"username","name":"username","relation":"username","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"offerData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"artisanuser_id":{"define":"artisanuser_id","name":"artisanuser_id","relation":"artisanuser_id","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"couponData"});
}}); 
return __result;});