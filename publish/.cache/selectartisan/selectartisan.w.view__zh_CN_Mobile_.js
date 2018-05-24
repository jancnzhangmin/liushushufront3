window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_6b39a55ff156403f9fc0f388fd2609dfl_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_542b9a59e27e4d6f9e779a7da4647899l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_8f18d8b649404684866b4e00fd4153e9l_zh_CNs_d_m/system/core.min.js','/v_f804c1d3b27249be95a3630ff6e6e444l_zh_CNs_d_m/system/common.min.js','/v_9b6abb96492e4b9e8791fab8d7ff3effl_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"headurl":{"define":"headurl","name":"headurl","relation":"headurl","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"login":{"define":"login","name":"login","relation":"login","type":"String"},"username":{"define":"username","name":"username","relation":"username","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"artisanuserData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"artisanuser_id":{"define":"artisanuser_id","name":"artisanuser_id","relation":"artisanuser_id","type":"String"},"bartask_id":{"define":"bartask_id","name":"bartask_id","relation":"bartask_id","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"isselect":{"define":"isselect","name":"isselect","relation":"isselect","type":"String"},"price":{"define":"price","name":"price","relation":"price","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"offerData"});
}}); 
return __result;});
