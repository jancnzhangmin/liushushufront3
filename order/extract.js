define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
			var self = this;
		$.ajax({
			async : false,
			url : url + "apis/get_user_extract",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			data : {
				openid : openid
			},
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
					var extractdata = self.comp("extractData");
					extractdata.clear();
					$.each(jsonstr.extracts, function(i, item) {
					if(item.score != null){
					score = item.score;
					}
						var options = {
							defaultValues : [ {
								id : item.id,
								amount : parseFloat(item.amount).toFixed(2),
								headurl : item.headurl,
								name : item.name
							} ]
						};
						extractdata.newData(options);
					});

			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});

	};

	return Model;
});