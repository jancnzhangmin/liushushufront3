define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var wx = require("http://res.wx.qq.com/open/js/jweixin-1.0.0.js");
	var artisanid;
	var artisan;
	var bartaskid;
	var price;
	var facevalue = 0;
	var couponnumber = '';
	var Model = function() {
		this.callParent();
	};

	Model.prototype.modelParamsReceive = function(event) {
		if (event.params.data) {
			artisanid = event.params.data.artisanid;
			artisan = event.params.data.artisan;
			bartaskid = event.params.data.bartaskid;
			price = event.params.data.price;
			$(this.getElementByXid("span2")).text(artisan);
			$(this.getElementByXid("span4")).text('￥' + parseFloat(price).toFixed(2));
		}
	};

	Model.prototype.wxpaybtnClick = function(event) {
		var self = this;
		$.ajax({
			async : false,
			url : url + "wxpayments/pay",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			data : {
				// url : window.location.href,
				price : price,
				facevalue : facevalue,
				artisanid : artisanid,
				bartaskid : bartaskid,
				openid : openid,
				couponnumber : couponnumber
			},
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				wx.config({
					debug : false,
					appId : jsonstr.sign_packge.appId,
					url : jsonstr.sign_packge.url,
					timestamp : jsonstr.sign_packge.timestamp,
					nonceStr : jsonstr.sign_packge.nonceStr,
					signature : jsonstr.sign_packge.signature,
					jsApiList : [ 'chooseWXPay' ]
				});
				wx.ready(function() {
					window.weixin_ready = true;
					wx.chooseWXPay({
						timestamp : jsonstr.pay_ticket_param.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
						nonceStr : jsonstr.pay_ticket_param.nonceStr, // 支付签名随机串，不长于
						// 32 位
						package : jsonstr.pay_ticket_param.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***
						signType : jsonstr.pay_ticket_param.signType, // 签名方式，默认为"SHA1"，使用新版支付需传入"MD5"
						paySign : jsonstr.pay_ticket_param.paySign, // 支付签名
						success : function(res) {
							alert("支付成功");
							self.close();
						}
					});
				});

				wx.error(function() {
					window.weixin_ready = false;
				});

			},
			error : function(xhr) {
				// alert(xhr);
				// justep.Util.hint("错误，请检查网络");
			}
		});
	};

	Model.prototype.row5Click = function(event) {
		var params = {
			data : {
				status : 'pay',
				amount : price,
				artisanuser_id : artisanid
			}
		}

		if (this.comp('checkbox1').get('checked')) {
			facevalue = 0;
			couponnumber = '';
			this.comp('checkbox1').set({
				'checked' : false
			});
			$(this.getElementByXid("span8")).text(facevalue.toFixed(2));
		} else {
			this.comp('windowDialog1').open({
				src : require.toUrl("../order/coupon.w"),
				params : params
			});
		}

	};

	Model.prototype.windowDialog1Received = function(event) {
		if (event.data.data.couponnumber != '') {
			facevalue = parseFloat(event.data.data.facevalue);
			couponnumber = event.data.data.couponnumber;
			$(this.getElementByXid("span8")).text(facevalue.toFixed(2));
			this.comp('checkbox1').set({
				'checked' : true
			});
		}

	};

	return Model;
});