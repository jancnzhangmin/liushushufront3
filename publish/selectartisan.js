define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
	};
	var artisanid;
	var artisan;
	var bartaskid;
	var price;

	Model.prototype.modelParamsReceive = function(event) {
		if (event.params.data) {
			var self = this;
			$.ajax({
				async : false,
				url : url + "apis/getofferartisan",
				type : "GET",
				dataType : 'jsonp',
				jsonp : 'callback',
				timeout : 5000,
				data : {
					orderid : event.params.data.id,
					openid:openid
				},
				success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
					var artisanuser = self.comp("artisanuserData");
					artisanuser.clear();
					$.each(jsonstr.artisans, function(i, item) {
						var options = {
							defaultValues : [ {
								id : item.id,
								login : item.login,
								username : item.username,
								headurl : item.headurl,
								iscollection:item.iscollection
							} ]
						};
						artisanuser.newData(options);
					});

					var offerdata = self.comp("offerData");
					offerdata.clear();
					$.each(jsonstr.offers, function(i, item) {
					var iscollection = 0;
					artisanuser.each(function(param){
					if(param.row.val('id') == item.artisanuser_id && param.row.val('iscollection') == '1'){
					iscollection = 1;
					}
					});
						var options = {
							defaultValues : [ {
								id : item.id,
								artisanuser_id : item.artisanuser_id,
								bartask_id : item.bartask_id,
								price : parseFloat(item.price).toFixed(2),
								summary : item.summary,
								isselect : item.isselect,
								iscollection:iscollection
							} ]
						};
						offerdata.newData(options);
					});

					offerdata.each(function(offer) {
						artisanuser.each(function(artisan) {
							if (offer.row.val('artisanuser_id') == artisan.row.val('id')) {
								offer.row.val('login', artisan.row.val('login'));
								offer.row.val('username', artisan.row.val('username'));
								offer.row.val('headurl', artisan.row.val('headurl'));
							}

						});
					});

				},
				error : function(xhr) {
					// justep.Util.hint("错误，请检查网络");
				}
			});
		}
	};

	Model.prototype.li2Click = function(event) {

		this.comp('offerData').each(function(param) {
			param.row.val('isselect', '0');
		});
		var row = event.bindingContext.$object;
		row.val('isselect', '1');
		this.comp('nextbtn').set({
			'disabled' : false
		});
		artisanid = row.val('artisanuser_id');
		var artisanrows = this.comp('artisanuserData').find([ 'id' ], [ artisanid ]);
		artisan = artisanrows[0].val('username');
		bartaskid = row.val('bartask_id');
		price = row.val('price');

	};

	Model.prototype.nextbtnClick = function(event) {
		var params = {
			data : {
				artisanid : artisanid,
				artisan : artisan,
				bartaskid : bartaskid,
				price : price
			}
		}
		justep.Shell.showPage(require.toUrl("./payment.w"), params);
	};

	return Model;
});