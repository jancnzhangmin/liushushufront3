window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_c468f9f830e1433092157749298c62d7l_zh_CNs_d_m/system/components/pc.addon.min.css', include: '$model/UI2/system/components/justep/pagerBar/css/pagerBar,$model/UI2/system/components/justep/widgets/css/widgets,$model/UI2/system/components/justep/absoluteLayout/css/absoluteLayout,$model/UI2/system/components/justep/pagerLimitSelect/css/pagerLimitSelect,$model/UI2/system/components/justep/cellLayout/css/cellLayout,$model/UI2/system/components/justep/richTextarea/css/richTextarea,$model/UI2/system/components/justep/smartContainer/css/smartContainer'},{url: '/UI2/v_4408f3c43ec54eaba37545016a710d93l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_e5fda954d37b42a683f58edc20cb9b03l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_3d4577fa9d85422f8ddc75cf717308c3l_zh_CNs_d_m/system/core.min.js','/v_c56fb8580950453fb18ab53490c3633fl_zh_CNs_d_m/system/common.min.js','/v_0e36696db82e4923960c6faaaed86df0l_zh_CNs_d_m/system/components/comp.min.js','/v_ab37e96a884a43fe8465dce0c13cd36cl_zh_CNs_d_m/system/components/pc.addon.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/smartContainer/smartContainer');
require('$model/UI2/system/components/justep/menu/menu');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/messageDialog/messageDialog');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/popMenu/popMenu');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/liushushufront3/publish/bartaskdetail'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cfYNf2a';
	this._flag_='d07ad3976f983948535a85943c830daa';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 require('css!$UI/liushushufront3/font-awesome-4.7.0/css/fa.icons').load();
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"address":{"define":"address","name":"address","relation":"address","type":"String"},"city":{"define":"city","name":"city","relation":"city","type":"String"},"contact":{"define":"contact","name":"contact","relation":"contact","type":"String"},"contactphone":{"define":"contactphone","name":"contactphone","relation":"contactphone","type":"String"},"created_at":{"define":"created_at","name":"created_at","relation":"created_at","type":"String"},"district":{"define":"district","name":"district","relation":"district","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"installtime":{"define":"installtime","name":"installtime","relation":"installtime","type":"String"},"ordernumber":{"define":"ordernumber","name":"ordernumber","relation":"ordernumber","type":"String"},"paytype":{"define":"paytype","name":"paytype","relation":"paytype","type":"String"},"preprice":{"define":"preprice","name":"preprice","relation":"preprice","type":"String"},"province":{"define":"province","name":"province","relation":"province","type":"String"},"status":{"define":"status","name":"status","relation":"status","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"},"updated_at":{"define":"updated_at","name":"updated_at","relation":"updated_at","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"bartaskData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"doorset":{"define":"doorset","name":"doorset","relation":"doorset","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"isding":{"define":"isding","name":"isding","relation":"isding","type":"String"},"isfloorheat":{"define":"isfloorheat","name":"isfloorheat","relation":"isfloorheat","type":"String"},"openinout":{"define":"openinout","name":"openinout","relation":"openinout","type":"String"},"openleftright":{"define":"openleftright","name":"openleftright","relation":"openleftright","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"measureData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"brand":{"define":"brand","name":"brand","relation":"brand","type":"String"},"floor":{"define":"floor","name":"floor","relation":"floor","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"lock":{"define":"lock","name":"lock","relation":"lock","type":"String"},"number":{"define":"number","name":"number","relation":"number","type":"String"},"producbase":{"define":"producbase","name":"producbase","relation":"producbase","type":"String"},"product":{"define":"product","name":"product","relation":"product","type":"String"},"product_id":{"define":"product_id","name":"product_id","relation":"product_id","type":"String"},"productbaseid":{"define":"productbaseid","name":"productbaseid","relation":"productbaseid","type":"String"},"productincrement":{"define":"productincrement","name":"productincrement","relation":"productincrement","type":"String"},"productincrementid":{"define":"productincrementid","name":"productincrementid","relation":"productincrementid","type":"String"},"projectdef":{"define":"projectdef","name":"projectdef","relation":"projectdef","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"bartaskdetailData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"endaddress":{"define":"endaddress","name":"endaddress","relation":"endaddress","type":"String"},"endcity":{"define":"endcity","name":"endcity","relation":"endcity","type":"String"},"enddistrict":{"define":"enddistrict","name":"enddistrict","relation":"enddistrict","type":"String"},"endprovince":{"define":"endprovince","name":"endprovince","relation":"endprovince","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"startaddress":{"define":"startaddress","name":"startaddress","relation":"startaddress","type":"String"},"startcity":{"define":"startcity","name":"startcity","relation":"startcity","type":"String"},"startdistrict":{"define":"startdistrict","name":"startdistrict","relation":"startdistrict","type":"String"},"startprovince":{"define":"startprovince","name":"startprovince","relation":"startprovince","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"transitData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"bartaskdetail_id":{"define":"bartaskdetail_id","name":"bartaskdetail_id","relation":"bartaskdetail_id","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"isselect":{"define":"isselect","name":"isselect","relation":"isselect","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"barbaseData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"bartaskdetail_id":{"define":"bartaskdetail_id","name":"bartaskdetail_id","relation":"bartaskdetail_id","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"},"isselect":{"define":"isselect","name":"isselect","relation":"isselect","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"barincrementData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"model":{"define":"model","name":"model","relation":"model","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"fingerData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"summary":{"define":"summary","name":"summary","relation":"summary","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"openlockData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"reason":{"define":"reason","name":"reason","relation":"reason","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"usercancelreasonData"});
}}); 
return __result;});
