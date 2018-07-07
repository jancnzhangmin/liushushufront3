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
				url : url + "apis/getmycollectionartisanlist",
				type : "GET",
				dataType : 'jsonp',
				jsonp : 'callback',
				timeout : 5000,
				data : {
					openid : openid,
				},
				success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
					var artisanuser = self.comp("artisanuserData");
					artisanuser.clear();
					$.each(jsonstr.artisanusers, function(i, item) {
						var options = {
							defaultValues : [ {
								id : item.id,
								username : item.username,
								login : item.login,
								headurl :  item.headurl
							} ]
						};
						artisanuser.newData(options);
					});
				},
				error : function(xhr) {
					// justep.Util.hint("错误，请检查网络");
				}
			});
	};

	Model.prototype.li1Click = function(event){
	var row = event.bindingContext.$object;
		var params = {
			data : {
				artisanuserid : row.val('id')
			}
		}
		justep.Shell.showPage(require.toUrl("./mycollectionartisan.w"), params);
	};

	return Model;
});