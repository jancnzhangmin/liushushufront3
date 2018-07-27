define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var UUID = require("$UI/system/lib/base/uuid");
	require("../js/jquer_shijian");
	var servicetype = 'install';// install:安装 finger:维修开锁
	var registerstatus = false;
	var Model = function() {
		this.callParent();
	};

	Model.prototype.row10Click = function(event) {
		var uuid = UUID.createUUID();
		var options = {
			defaultValues : [ {
				id : uuid
			} ]
		};
		this.comp('measureData').newData(options);
	};

	Model.prototype.radio1Change = function(event) {
		var row = event.bindingContext.$object;
		var status = this.comp('radio1').get('checked');
		if (status) {
			row.val('doorset', '0');
		}
	};

	Model.prototype.radio2Change = function(event) {
		var row = event.bindingContext.$object;
		var status = this.comp('radio2').get('checked');
		if (status) {
			row.val('doorset', '1');
		}
	};

	Model.prototype.radio3Change = function(event) {
		var row = event.bindingContext.$object;
		var status = this.comp('radio3').get('checked');
		if (status) {
			row.val('doorset', '2');
		}
	};

	Model.prototype.button2Click = function(event) {
		var row = event.bindingContext.$object;
		this.comp('measureData').deleteData(row)
	};

	Model.prototype.provinceSelect1Change = function(event) {
		var row = event.bindingContext.$object;
		row.val('startprovince', event.value);
	};

	Model.prototype.button3Click = function(event) {
		var uuid = UUID.createUUID();
		var options = {
			defaultValues : [ {
				id : uuid
			} ]
		};
		this.comp('transitData').newData(options);
	};

	Model.prototype.citySelect1Change = function(event) {
		var row = event.bindingContext.$object;
		row.val('startcity', event.value);
	};

	Model.prototype.districtSelect1Change = function(event) {
		var row = event.bindingContext.$object;
		row.val('startdistrict', event.value);
	};

	Model.prototype.input1Change = function(event) {
		var row = event.bindingContext.$object;
		row.val('startaddress', event.value);
	};

	Model.prototype.provinceSelect2Change = function(event) {
		var row = event.bindingContext.$object;
		row.val('endprovince', event.value);
	};

	Model.prototype.districtSelect2Change = function(event) {
		var row = event.bindingContext.$object;
		row.val('enddistrict', event.value);
	};

	Model.prototype.input2Change = function(event) {
		var row = event.bindingContext.$object;
		row.val('endaddress', event.value);
	};

	Model.prototype.button4Click = function(event) {
		var row = event.bindingContext.$object;
		this.comp('transitData').deleteData(row)
	};

	Model.prototype.refresh = function() {
		var self = this;
		$.ajax({
			async : false,
			url : url + "apis/getproducts",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				var data = self.comp("productData");
				data.clear();
				$.each(jsonstr.products, function(i, item) {

					var options = {
						defaultValues : [ {
							id : item.id,
							product : item.product
						} ]
					};
					data.newData(options);
				});
			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});
		
				$.ajax({
			async : false,
			url : url + "apis/getprojectdefs",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				var data = self.comp("projectdefData");
				data.clear();
				$.each(jsonstr.projectdefs, function(i, item) {

					var options = {
						defaultValues : [ {
							id : item.id,
							project : item.project
						} ]
					};
					data.newData(options);
				});
			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});
		
		$.ajax({
			async : false,
			url : url + "apis/getlocks",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				var data = self.comp("lockData");
				data.clear();
				$.each(jsonstr.locks, function(i, item) {

					var options = {
						defaultValues : [ {
							id : item.id,
							lock : item.lock
						} ]
					};
					data.newData(options);
				});
			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});

		$.ajax({
			async : false,
			url : url + "apis/getbarbases",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				var data = self.comp("barbaseData");
				data.clear();
				$.each(jsonstr.barbases, function(i, item) {

					var options = {
						defaultValues : [ {
							id : item.id,
							name : item.name,
							summary : item.summary,
							parent_id : '',
							product_id : item.product_id
						} ]
					};
					data.newData(options);
				});
			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});

		$.ajax({
			async : false,
			url : url + "apis/getbarincrements",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				var data = self.comp("barincrementData");
				data.clear();
				$.each(jsonstr.increments, function(i, item) {

					var options = {
						defaultValues : [ {
							id : item.id,
							name : item.name,
							summary : item.summary,
							parent_id : '',
							product_id : item.product_id
						} ]
					};
					data.newData(options);
				});
			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});

		$.ajax({
			async : false,
			url : url + "apis/getprocesstask",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			data : {
				openid : openid
			},
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				var data = self.comp("processData");
				data.clear();
				$.each(jsonstr.processtask, function(i, item) {
					var paytype = '发单人支付';
					if (item.paytype == 1) {
						paytype = '现场客户支付';
					} else if (item.paytype == 2) {
						paytype = '省心全包报价';
					}
					var options = {
						defaultValues : [ {
							id : item.id,
							ordernumber : item.ordernumber,
							artisan : item.artisan,
							price : item.price,
							taskcount : parseInt(item.measurecount) + parseInt(item.transitcount) + parseInt(item.fingercount) + parseInt(item.openlockcount),
							status : item.status,
							province : item.province,
							city : item.city,
							district : item.district,
							address : item.address,
							servicetype : item.servicetype,
							paytype : paytype,
							installtime : justep.Date.toString(new Date(Date.parse(item.installtime)), "yyyy-MM-dd"),
						} ]
					};
					data.newData(options);
				});
			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});

		$.ajax({
			async : false,
			url : url + "apis/getfingermodeldefs",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			data : {
				openid : openid
			},
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				var data = self.comp("fingermodeldefData");
				data.clear();
				$.each(jsonstr.fingermodeldefs, function(i, item) {

					var options = {
						defaultValues : [ {
							id : item.id,
							model : item.model
						} ]
					};
					data.newData(options);
				});
			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});

		var uuid = UUID.createUUID();
		var options = {
			defaultValues : [ {
				id : uuid,
				openid : openid
			} ]
		};
		this.comp('bartaskData').newData(options);
		$(this.getElementByXid("input11")).shijian({
			y : -10,// 当前年份+10
			Hour : true,// 是否显示小时
			Minute : false,// 是否显分钟
		})
		this.refreshorder();
		this.defaultinstall();
	};

	Model.prototype.modelLoad = function(event) {
		this.refresh();
		this.getuserinfo();
	};

	Model.prototype.getuserinfo = function() {
		var self = this;
		$.ajax({
			async : false,
			url : url + "apis/getuserinfo",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			data : {
				openid : openid
			},
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				if (jsonstr.user.login == null) {
					$(self.getElementByXid("div1")).show();
				} else {
					$(self.getElementByXid("div1")).hide();
					registerstatus = true;
				}
			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});
	};

	Model.prototype.select2Change = function(event) {
		var row = event.bindingContext.$object;
		row.val('lock_id', event.value);
	};

	Model.prototype.button6Click = function(event) {
		var uuid = UUID.createUUID();
		var options = {
			defaultValues : [ {
				id : uuid,
				productbaseid : '',
				productincrementid : ''
			} ]
		};
		this.comp('bartaskdetailData').newData(options);
	};

	Model.prototype.button5Click = function(event) {

		var hasid = event.bindingContext.$parent.val('productbaseid').toString().split(',');
		var inarr = $.inArray(event.bindingContext.$object.val('id').toString(), hasid);
		if (inarr > -1) {
			event.source.addClass('btn-outline-off');
			hasid.splice(inarr, 1);
			event.bindingContext.$parent.val('productbaseid', hasid);
		} else {
			hasid.push(event.bindingContext.$object.val('id'));
			event.source.removeClass('btn-outline-off');
			event.bindingContext.$parent.val('productbaseid', hasid);
		}
	};

	Model.prototype.button7Click = function(event) {
		var hasid = event.bindingContext.$parent.val('productincrementid').toString().split(',');
		var inarr = $.inArray(event.bindingContext.$object.val('id').toString(), hasid);
		if (inarr > -1) {
			event.source.addClass('btn-outline-off');
			hasid.splice(inarr, 1);
			event.bindingContext.$parent.val('productincrementid', hasid);
		} else {
			hasid.push(event.bindingContext.$object.val('id'));
			event.source.removeClass('btn-outline-off');
			event.bindingContext.$parent.val('productincrementid', hasid);
		}
	};

	Model.prototype.button8Click = function(event) {
		var row = event.bindingContext.$object;
		this.comp('bartaskdetailData').deleteData(row)
	};

	Model.prototype.button9Click = function(event) {
		var uuid = UUID.createUUID();
		var options = {
			defaultValues : [ {
				id : uuid
			} ]
		};
		this.comp('fingerData').newData(options);
	};

	Model.prototype.button10Click = function(event) {
		var row = event.bindingContext.$object;
		this.comp('fingerData').deleteData(row)
	};

	Model.prototype.button1Click = function(event) {
		var uuid = UUID.createUUID();
		var options = {
			defaultValues : [ {
				id : uuid
			} ]
		};
		this.comp('openlockData').newData(options);
	};

	Model.prototype.button11Click = function(event) {
		var row = event.bindingContext.$object;
		this.comp('openlockData').deleteData(row)
	};

	Model.prototype.publicBtnClick = function(event) {
		if (!registerstatus) {
			justep.Util.hint('请先注册后再发单');
			return false;
		}
		if (servicetype == 'install') {
			if (this.comp('measureData').count() + this.comp('transitData').count() + this.comp('bartaskdetailData').count() + this.comp('fingerData').count() + this.comp('openlockData').count() == 0) {
				this.comp('messageDialog1').set({
					'message' : '请选择至少一项服务类型'
				});
				this.comp('messageDialog1').show();
				return false;
			}

			var firstrow = this.comp('bartaskdetailData').getFirstRow();
			if ((firstrow.val('productbaseid').length < 2 && firstrow.val('productincrementid').length < 2)) {
				this.comp('messageDialog1').set({
					'message' : '请选择至少一项服务'
				});
				this.comp('messageDialog1').show();
				return false;
			}
		} else if (servicetype == 'finger') {

			var fingerrow = this.comp('fingerData').getFirstRow();
			if (fingerrow.val('fingermodeldef_id') == '') {
				this.comp('messageDialog1').set({
					'message' : '请选择服务项目'
				});
				this.comp('messageDialog1').show();
				return false;
			}
		}
		if (this.comp('provinceSelect3').val() == '' || this.comp('citySelect3').val() == '' || this.comp('districtSelect3').val() == '' || this.comp('input9').val() == '') {
			this.comp('messageDialog1').set({
				'message' : '服务地址不完整'
			});
			this.comp('messageDialog1').show();
			return false;
		}

		if (this.comp('input4').val() == '') {
			this.comp('messageDialog1').set({
				'message' : '服务时间不能为空'
			});
			this.comp('messageDialog1').show();
			return false;
		}

		if (this.comp('input6').val() == '') {
			this.comp('messageDialog1').set({
				'message' : '联系人不能为空'
			});
			this.comp('messageDialog1').show();
			return false;
		}

		if (this.comp('input7').val() == '') {
			this.comp('messageDialog1').set({
				'message' : '联系方式不能为空'
			});
			this.comp('messageDialog1').show();
			return false;
		}

		var ischeck = $("input[name='pay']:checked").val();
		if (ischeck == undefined) {
			this.comp('messageDialog1').set({
				'message' : '额外费用支付不能为空'
			});
			this.comp('messageDialog1').show();
			return false;
		}

		var self = this;

		var vFD = new FormData();
		vFD.append("bartask", JSON.stringify(self.comp('bartaskData').toJson({
			'format' : 'simple'
		})));
		vFD.append("measure", JSON.stringify(self.comp('measureData').toJson({
			'format' : 'simple'
		})));
		vFD.append("transit", JSON.stringify(self.comp('transitData').toJson({
			'format' : 'simple'
		})));
		vFD.append("bartaskdetail", JSON.stringify(self.comp('bartaskdetailData').toJson({
			'format' : 'simple'
		})));
		vFD.append("finger", JSON.stringify(self.comp('fingerData').toJson({
			'format' : 'simple'
		})));
		vFD.append("openlock", JSON.stringify(self.comp('openlockData').toJson({
			'format' : 'simple'
		})));
		oXHR = new XMLHttpRequest();
		oXHR.addEventListener('load', function(resUpload) {
			// 成功
			self.comp('messageDialog1').set({
				'message' : '任务发布成功'
			});
			self.refreshorder();
			self.comp('messageDialog1').show();
			self.comp('bartaskData').clear();
			self.comp('measureData').clear();
			self.comp('transitData').clear();
			self.comp('bartaskdetailData').clear();
			self.comp('fingerData').clear();
			self.comp('openlockData').clear();
			var uuid = UUID.createUUID();
			var options = {
				defaultValues : [ {
					id : uuid,
					openid : openid
				} ]
			};
			self.comp('bartaskData').newData(options);
			self.defaultinstall();
			self.clearinfo();
			self.comp('contents1').to('content3');
		}, false);
		oXHR.addEventListener('error', function() {
			// 失败
		}, false);
		oXHR.addEventListener('abort', function() {
			// 上传中断
		}, false);
		oXHR.open('POST', url + "apis/setbartask");
		oXHR.send(vFD);
	};

	Model.prototype.radio4Change = function(event) {
		var row = event.bindingContext.$object;
		var status = this.comp('radio4').get('checked');
		if (status) {
			row.val('isfloorheat', '0');
		}
	};

	Model.prototype.clearinfo = function() {
		this.comp('provinceSelect3').val('');
		this.comp('citySelect3').val('');
		this.comp('districtSelect3').val('');
		this.comp('input9').val('');
		this.comp('input4').val('');
		this.comp('input5').val('');
		this.comp('input6').val('');
		this.comp('input7').val('');
		this.comp('radio12').set({
			'checked' : true
		});
		this.comp('radio12').set({
			'checked' : false
		});
		this.comp('radio13').set({
			'checked' : true
		});
		this.comp('radio13').set({
			'checked' : false
		});
		this.comp('textarea3').val('');
	};

	Model.prototype.radio5Change = function(event) {
		var row = event.bindingContext.$object;
		var status = this.comp('radio5').get('checked');
		if (status) {
			row.val('isfloorheat', '1');
		}
	};

	Model.prototype.radio6Change = function(event) {
		var row = event.bindingContext.$object;
		var status = this.comp('radio6').get('checked');
		if (status) {
			row.val('isding', '0');
		}
	};

	Model.prototype.radio7Change = function(event) {
		var row = event.bindingContext.$object;
		var status = this.comp('radio7').get('checked');
		if (status) {
			row.val('isding', '1');
		}
	};

	Model.prototype.radio8Change = function(event) {
		var row = event.bindingContext.$object;
		var status = this.comp('radio8').get('checked');
		if (status) {
			row.val('openinout', '1');
		}
	};

	Model.prototype.radio9Change = function(event) {
		var row = event.bindingContext.$object;
		var status = this.comp('radio9').get('checked');
		if (status) {
			row.val('openinout', '0');
		}
	};

	Model.prototype.radio10Change = function(event) {
		var row = event.bindingContext.$object;
		var status = this.comp('radio10').get('checked');
		if (status) {
			row.val('openleftright', '0');
		}
	};

	Model.prototype.radio11Change = function(event) {
		var row = event.bindingContext.$object;
		var status = this.comp('radio11').get('checked');
		if (status) {
			row.val('openleftright', '1');
		}
	};

	Model.prototype.textarea2Change = function(event) {
		var row = event.bindingContext.$object;
		row.val('summary', this.comp('textarea2').val());
	};

	Model.prototype.provinceSelect3Change = function(event) {
		this.comp('provinceData').clear();
		var options = {
			defaultValues : [ {
				province : this.comp('provinceSelect3').val()
			} ]
		};
		this.comp('provinceData').newData(options);
		var data = this.comp("bartaskData");
		var rows = data.getFirstRow();
		rows.val('province', this.comp('provinceSelect3').val());

	};

	Model.prototype.citySelect3Change = function(event) {
		this.comp('cityData').clear();
		var options = {
			defaultValues : [ {
				city : this.comp('citySelect3').val()
			} ]
		};
		this.comp('cityData').newData(options);
		var data = this.comp("bartaskData");
		var rows = data.getFirstRow();
		rows.val('city', this.comp('citySelect3').val());
	};

	Model.prototype.modelActive = function(event) {
		var uuid = UUID.createUUID();
		var options = {
			defaultValues : [ {
				id : uuid,
				paytype : 0
			} ]
		};
		this.comp('bartaskData').newData(options);
	};

	Model.prototype.districtSelect3Change = function(event) {
		var data = this.comp("bartaskData");
		var rows = data.getFirstRow();
		rows.val('district', this.comp('districtSelect3').val());
	};

	Model.prototype.input9Change = function(event) {
		var data = this.comp("bartaskData");
		var rows = data.getFirstRow();
		rows.val('address', this.comp('input9').val());
	};

	Model.prototype.input4Change = function(event) {
		var data = this.comp("bartaskData");
		var rows = data.getFirstRow();
		rows.val('installtime', this.comp('input4').val());
	};

	Model.prototype.input5Change = function(event) {
		var data = this.comp("bartaskData");
		var rows = data.getFirstRow();
		rows.val('preprice', this.comp('input5').val());
	};

	Model.prototype.input6Change = function(event) {
		var data = this.comp("bartaskData");
		var rows = data.getFirstRow();
		rows.val('contact', this.comp('input6').val());
	};

	Model.prototype.input7Change = function(event) {
		var data = this.comp("bartaskData");
		var rows = data.getFirstRow();
		rows.val('contactphone', this.comp('input7').val());
	};

	Model.prototype.textarea3Change = function(event) {
		var data = this.comp("bartaskData");
		var rows = data.getFirstRow();
		rows.val('summary', this.comp('textarea3').val());
	};

	Model.prototype.input4Focus = function(event) {
		// this.comp('popOver1').show();
	};

	Model.prototype.calendar1EventsSelected = function(event) {

	};

	Model.prototype.calendar1Select = function(event) {

	};

	Model.prototype.calendar1Click = function(event) {

	};

	Model.prototype.refreshorder = function() {
		var self = this;
		$.ajax({
			async : false,
			url : url + "apis/getbartask",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			data : {
				openid : openid
			},
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				var data = self.comp("receiptbartaskData");
				data.clear();
				$.each(jsonstr.bartasks, function(i, item) {
					var paytype = '发单人支付';
					if (item.paytype == 1) {
						paytype = '现场客户支付';
					} else if (item.paytype == 2) {
						paytype = '省心全包报价';
					}
					var options = {
						defaultValues : [ {
							id : item.id,
							preprice : item.preprice,
							province : item.province,
							city : item.city,
							district : item.district,
							address : item.address,
							status : item.status,
							installtime : justep.Date.toString(new Date(Date.parse(item.installtime)), "yyyy-MM-dd"),
							ordernumber : item.ordernumber,
							contact : item.contact,
							contactphone : item.contactphone,
							measurecount : item.measurecount,
							transitcount : item.transitcount,
							fingercount : item.fingercount,
							bartaskdetailcount : item.bartaskdetailcount,
							openlockcount : item.openlockcount,
							artisancount : item.artisancount,
							servicetype : item.servicetype,
							paytype : paytype
						} ]
					};
					data.newData(options);
				});
			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});
	};

	Model.prototype.li8Click = function(event) {
		var row = event.bindingContext.$object;
		var params = {
			data : {
				artisancount : row.val('artisancount'),
				id : row.val('id')
			}
		}
		justep.Shell.showPage(require.toUrl("./bartaskdetail.w"), params);
	};

	Model.prototype.radio12Change = function(event) {
		var data = this.comp("bartaskData");
		var rows = data.getFirstRow();
		var status = this.comp('radio12').get('checked');
		if (status) {
			rows.val('paytype', 0);
		}
	};

	Model.prototype.radio13Change = function(event) {
		var data = this.comp("bartaskData");
		var rows = data.getFirstRow();
		var status = this.comp('radio13').get('checked');
		if (status) {
			rows.val('paytype', 1);
		}
	};

	Model.prototype.select1Change = function(event) {
		var row = event.bindingContext.$object;
		row.val('product_id', event.value);
	};

	Model.prototype.li9Click = function(event) {
		var row = event.bindingContext.$object;
		var params = {
			data : {
				artisancount : row.val('artisancount'),
				id : row.val('id')
			}
		}
		justep.Shell.showPage(require.toUrl("./processbartaskdetail.w"), params);
	};

	Model.prototype.clearlastdata = function() {
		// this.comp('bartaskData').clear();
		this.comp('measureData').clear();
		this.comp('transitData').clear();
		this.comp('bartaskdetailData').clear();
		this.comp('fingerData').clear();
		this.comp('openlockData').clear();
		this.comp('measure_btn').removeClass('x-default');
		this.comp('measure_btn').addClass('x-gray');
		this.comp('transit_btn').removeClass('x-default');
		this.comp('transit_btn').addClass('x-gray');
		this.comp('bartask_btn').removeClass('x-default');
		this.comp('bartask_btn').addClass('x-gray');
		this.comp('finger_btn').removeClass('x-default');
		this.comp('finger_btn').addClass('x-gray');

	};

	Model.prototype.measure_btnClick = function(event) {
		this.clearlastdata();
		var uuid = UUID.createUUID();
		var options = {
			defaultValues : [ {
				id : uuid
			} ]
		};
		this.comp('measureData').newData(options);
		this.comp('measure_btn').removeClass('x-gray');
		this.comp('measure_btn').addClass('btn-default');
	};

	Model.prototype.transit_btnClick = function(event) {
		this.clearlastdata();
		var uuid = UUID.createUUID();
		var options = {
			defaultValues : [ {
				id : uuid
			} ]
		};
		this.comp('transitData').newData(options);
		this.comp('transit_btn').removeClass('x-gray');
		this.comp('transit_btn').addClass('btn-default');
	};

	Model.prototype.bartask_btnClick = function(event) {
		servicetype = 'install';
		this.defaultinstall();
	};

	Model.prototype.defaultinstall = function() {
		servicetype = 'install';
		this.clearlastdata();
		var uuid = UUID.createUUID();
		var options = {
			defaultValues : [ {
				id : uuid,
				productbaseid : '',
				productincrementid : ''
			} ]
		};
		this.comp('bartaskdetailData').newData(options);
		this.comp('bartask_btn').removeClass('x-gray');
		this.comp('bartask_btn').addClass('btn-default');
	};

	Model.prototype.finger_btnClick = function(event) {
		servicetype = 'finger';
		this.clearlastdata();
		var uuid = UUID.createUUID();
		var options = {
			defaultValues : [ {
				id : uuid
			} ]
		};
		this.comp('fingerData').newData(options);
		this.comp('finger_btn').removeClass('x-gray');
		this.comp('finger_btn').addClass('btn-default');
	};

	Model.prototype.radio14Change = function(event) {
		var data = this.comp("bartaskData");
		var rows = data.getFirstRow();
		var status = this.comp('radio14').get('checked');
		if (status) {
			rows.val('paytype', 2);
		}
	};

	Model.prototype.fingermodeldefselectChange = function(event) {
		var fingerrow = this.comp('fingerData').getFirstRow();
		fingerrow.val('fingermodeldef_id', event.source.val());
	};

	Model.prototype.closedivClick = function(event) {
		$(this.getElementByXid("div1")).hide();
	};

	Model.prototype.div1Click = function(event) {

	};

	Model.prototype.col98Click = function(event) {
		this.comp('windowDialog1').open({
			src : require.toUrl("../register.w")
		});

	};

	Model.prototype.windowDialog1Receive = function(event) {
		this.getuserinfo();
	};

	Model.prototype.select3Change = function(event){
		var row = event.bindingContext.$object;
		row.val('projectdef_id', event.value);
	};

	return Model;
});