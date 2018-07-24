define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var mytimer;
	var phone;
	var Model = function() {
		this.callParent();
	};

	Model.prototype.validateBtnClick = function(event) {
		alert('c');
		if (!this.comp('phoneInput').val()) {
			justep.Util.hint('手机号码不能为空！');
			return false;
		}

		var self = this;
		phone = self.comp('phoneInput').val();

		$.ajax({
			async : false,
			url : url + "apis/senduservcodesms",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			data : {
				phone : phone,
				openid : openid
			},
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				clearInterval(mytimer);
				var timecount = 60;
				mytimer = window.setInterval(function() {
					self.comp("validateBtn").set({
						"disabled" : true,
						"label" : "重新发送" + timecount
					});
					timecount--;
					if (timecount < 0) {
						clearInterval(mytimer);
						self.comp("validateBtn").set({
							"disabled" : false,
							"label" : "获取验证码"
						});
					}

				}, 1000);
			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});

	};

	Model.prototype.modelUnLoad = function(event) {
		clearInterval(mytimer);
	};

	Model.prototype.registerBtnClick = function(event) {
		var self = this;
		if (!self.comp('provinceSelect1').val() || !self.comp('citySelect1').val() || self.comp('districtSelect1').val()) {
			justep.Util.hint('地址不能为空！');
			return false;
		}
		$.ajax({
			async : false,
			url : url + "apis/binduser",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			data : {
				vcode : self.comp('input1').val(),
				phone : phone,
				openid : openid,
				province : self.comp('provinceSelect1').val(),
				city : self.comp('citySelect1').val(),
				districy : self.comp('districtSelect1').val()
			},
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				if (jsonstr.status == '0') {
					justep.Util.hint('验证码无效！');
				} else {
					params = {
						data : 'success'
					};
					self.owner.send(params);
					self.close();
				}

			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});
	};

	Model.prototype.provinceSelect1Change = function(event){
		this.comp('provinceData').clear();
		var options = {
			defaultValues : [ {
				province : this.comp('provinceSelect1').val()
			} ]
		};
		this.comp('provinceData').newData(options);
	};

	Model.prototype.citySelect1Change = function(event){
		this.comp('cityData').clear();
		var options = {
			defaultValues : [ {
				city : this.comp('citySelect1').val()
			} ]
		};
		this.comp('cityData').newData(options);
	};

	return Model;
});