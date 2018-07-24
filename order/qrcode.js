define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
var qrcodeurl = '';
	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		var self = this;
		$.ajax({
			async : false,
			url : url + "apis/createuserqrcode",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			data : {
				openid : openid
			},
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				qrcodeurl = url + jsonstr.qrcodeurl;
				$(self.getElementByXid("image1")).attr('src',qrcodeurl);
			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});
	};

	return Model;
});