define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var status = '';
	var price = 0;
	var height = 0;
	var width = 0;
	var scale = 1;
	var Model = function() {
		this.callParent();
	};

	Model.prototype.refreshdata = function() {
		status = '';
		price = 0;
		var self = this;
		$.ajax({
			async : false,
			url : url + "apis/getcoupon",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			data : {
				openid : openid
			},
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				var data = self.comp("couponData");
				data.clear();
				$.each(jsonstr.coupons, function(i, item) {
					var coupontype = '注册赠送';
					if (item.coupontype == '2') {
						coupontype = '常规';
					} else if (coupontype == '3') {
						coupontype = '推荐赠送';
					}

					var options = {
						defaultValues : [ {
							id : item.id,
							facevalue : item.facevalue,
							condition : parseFloat(item.condition),
							expirytype : item.expirytype,
							assignexpiry : justep.Date.toString(new Date(Date.parse(item.assignexpiry)), "yyyy年MM月dd日"),
							fixedexpiry : item.fixedexpiry,
							ordernumber : item.ordernumber,
							couponnumber : item.couponnumber,
							coupontype : coupontype,
							name : item.name
						} ]
					};
					data.newData(options);
				});
				$(self.getElementByXid("coupondiv")).height($(self.getElementByXid("coupondiv")).outerWidth() * 0.445);
				width = $(self.getElementByXid("coupondiv")).outerWidth();
				height = $(self.getElementByXid("coupondiv")).outerHeight();
				scale = width / 375;
				$('.couponback').height($('.couponback').outerWidth() * 0.445);
				$('.listdiv').css('top', 80 * scale);
				$('.facevaluediv').css('top', 64 * scale);
				$('.facevaluelabel').css('font-size', 40 * scale);
				// $('.facevaluegradient').offset({'left':width*0.3});
			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});
		// $(this.getElementByXid("coupondiv").width)

		// alert($(this.getElementByXid("coupondiv")).outerWidth());
		$(this.getElementByXid("coupondiv")).height($(this.getElementByXid("coupondiv")).outerWidth() * 0.445);
	};

	Model.prototype.modelLoad = function(event) {
		this.refreshdata();
	};

	Model.prototype.list1AfterRender = function(event) {

	};

	Model.prototype.listfilter = function(row) {
		var flag = true;
		if (price != 0) {
			flag = price >= row.val('condition');
		}
		return flag;
	};

	Model.prototype.modelParamsReceive = function(event) {
		if (event.params.data) {
			status = event.params.data.status;
			price = parseFloat(event.params.data.amount);

			this.comp('list1').refresh();
			$('.couponback').height($('.couponback').outerWidth() * 0.445);
			$('.listdiv').css('top', 80 * scale);
			$('.facevaluediv').css('top', 64 * scale);
			$('.facevaluelabel').css('font-size', 40 * scale);
		}

	};

	Model.prototype.modelActive = function(event) {
		this.refreshdata();
	};

	Model.prototype.li1Click = function(event) {
		var row = event.bindingContext.$object;
		if (status != '') {
			var params = {
				data : {
					facevalue : row.val('facevalue'),
					couponnumber : row.val('couponnumber')
				}
			}
			this.owner.send(params);
			this.close();
		}
	};

	return Model;
});