define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var orderid;
	var reason = '';
	var amount = 0;
	var Model = function() {
		this.callParent();
	};

	var artisanuserid = 0;
	var hascollection = 0;

	Model.prototype.modelParamsReceive = function(event) {
		if (event.params.data) {
			orderid = event.params.data.id;
			$(this.getElementByXid("span2")).text(event.params.data.artisancount);
			var self = this;
			$.ajax({
				async : false,
				url : url + "apis/getbartaskdetail",
				type : "GET",
				dataType : 'jsonp',
				jsonp : 'callback',
				timeout : 5000,
				data : {
					id : event.params.data.id
				},
				success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
					if (jsonstr.bartask.status == -1 || jsonstr.bartask.status == 5) {
						self.comp('cancelBtn').set({
							'disabled' : true
						});
					}
					var data = self.comp("bartaskData");
					data.clear();
					var options = {
						defaultValues : [ {
							id : jsonstr.bartask.id,
							preprice : parseFloat(jsonstr.bartask.preprice).toFixed(2),
							province : jsonstr.bartask.province,
							city : jsonstr.bartask.city,
							district : jsonstr.bartask.district,
							address : jsonstr.bartask.address,
							status : jsonstr.bartask.status,
							installtime : justep.Date.toString(new Date(Date.parse(jsonstr.bartask.installtime)), "yyyy-MM-dd"),
							ordernumber : jsonstr.bartask.ordernumber,
							created_at : jsonstr.bartask.created_at,
							updated_at : jsonstr.bartask.updated_at,
							contact : jsonstr.bartask.contact,
							contactphone : jsonstr.bartask.contactphone,
							summary : jsonstr.bartask.summary,
							paytype : jsonstr.bartask.paytype
						} ]
					};
					data.newData(options);

					var measuredata = self.comp("measureData");
					measuredata.clear();
					$.each(jsonstr.measures, function(i, item) {
						var options = {
							defaultValues : [ {
								id : item.id,
								summary : item.summary
							} ]
						};
						measuredata.newData(options);
					});

					var transitdata = self.comp("transitData");
					transitdata.clear();
					$.each(jsonstr.transits, function(i, item) {
						var options = {
							defaultValues : [ {
								id : item.id,
								startaddress : item.start,
								endaddress : item.end
							} ]
						};
						transitdata.newData(options);
					});

					var bartaskdetaildata = self.comp("bartaskdetailData");
					bartaskdetaildata.clear();
					$.each(jsonstr.bartaskdetails, function(i, item) {
						var options = {
							defaultValues : [ {
								id : item.id,
								bartask_id : item.bartask_id,
								product : item.product,
								lock : item.lock,
								brand:item.brand,
								projectdef:item.projectdef
							} ]
						};
						bartaskdetaildata.newData(options);
					});

					var barbasedata = self.comp("barbaseData");
					barbasedata.clear();
					$.each(jsonstr.barbasedefs, function(i, item) {
						var options = {
							defaultValues : [ {
								id : item.id,
								bartaskdetail_id : item.bartaskdetail_id,
								name : item.name,
								summary : item.summary,
								isselect : item.isselect
							} ]
						};
						barbasedata.newData(options);
					});

					var barincrementdata = self.comp("barincrementData");
					barincrementdata.clear();
					$.each(jsonstr.barincrementdefs, function(i, item) {
						var options = {
							defaultValues : [ {
								id : item.id,
								bartaskdetail_id : item.bartaskdetail_id,
								name : item.name,
								summary : item.summary,
								isselect : item.isselect
							} ]
						};
						barincrementdata.newData(options);
					});

					var fingerdata = self.comp("fingerData");
					fingerdata.clear();
					$.each(jsonstr.fingers, function(i, item) {
						var options = {
							defaultValues : [ {
								id : item.id,
								model : item.model,
								summary : item.summary
							} ]
						};
						fingerdata.newData(options);
					});

					var openlockdata = self.comp("openlockData");
					openlockdata.clear();
					$.each(jsonstr.openlocks, function(i, item) {
						var options = {
							defaultValues : [ {
								id : item.id,
								summary : item.summary
							} ]
						};
						openlockdata.newData(options);
					});

				},
				error : function(xhr) {
					justep.Util.hint("错误，请检查网络");
				}

			});

			$.ajax({
				async : false,
				url : url + "apis/getuserbartaskpro",
				type : "GET",
				dataType : 'jsonp',
				jsonp : 'callback',
				timeout : 5000,
				data : {
					orderid : event.params.data.id
				},
				success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
					var bartaskprodata = self.comp("bartaskproData");
					bartaskprodata.clear();
					amount = jsonstr.bartaskpro.amount;
					artisanuserid = jsonstr.bartaskpro.artisanuserid;
					var options = {
						defaultValues : [ {
							id : jsonstr.bartaskpro.id,
							artisanuserid : jsonstr.bartaskpro.artisanuserid,
							artisanuser : jsonstr.bartaskpro.artisanuser,
							begintime : justep.Date.toString(new Date(Date.parse(jsonstr.bartaskpro.begintime)), "yyyy-MM-dd hh:mm:ss"),
							endtime : justep.Date.toString(new Date(Date.parse(jsonstr.bartaskpro.endtime)), "yyyy-MM-dd hh:mm:ss"),
							receivable:jsonstr.bartaskpro.receivable,
							needreceivable:jsonstr.bartaskpro.needreceivable
						} ]
					};
					bartaskprodata.newData(options);

					var bartaskproimagedata = self.comp('bartaskproimageData');
					bartaskproimagedata.clear();
					$.each(jsonstr.bartaskpro.bartaskproimages, function(i, item) {
						var options = {
							defaultValues : [ {
								id : item.id,
								bartaskproimage : url + item.bartaskproimage
							} ]
						};
						bartaskproimagedata.newData(options);
					});

					$.ajax({
						async : false,
						url : url + "apis/checkcollection",
						type : "GET",
						dataType : 'jsonp',
						jsonp : 'callback',
						timeout : 5000,
						data : {
							openid : openid,
							artisanuserid : artisanuserid
						},
						success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
							if (jsonstr.status == 1) {
								hascollection = 1;
								self.comp("collectionBtn").set({
									"icon" : "fa fa-heart",
									"label" : "　取消收藏"
								});
							} else {
								hascollection = 0;
								self.comp("collectionBtn").set({
									"icon" : "fa fa-heart-o",
									"label" : "　收藏技工"
								});
							}

						},
						error : function(xhr) {
							// justep.Util.hint("错误，请检查网络");
						}
					});

				},
				error : function(xhr) {
					// justep.Util.hint("错误，请检查网络");
				}
			});

			$.ajax({
				async : false,
				url : url + "apis/getusercancelreason",
				type : "GET",
				dataType : 'jsonp',
				jsonp : 'callback',
				timeout : 5000,
				success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
					var usercancelreasondata = self.comp("usercancelreasonData");
					usercancelreasondata.clear();
					$.each(jsonstr.usercancelreason, function(i, item) {
						var options = {
							defaultValues : [ {
								id : item.id,
								reason : item.reason
							} ]
						};
						usercancelreasondata.newData(options);
					});
				},
				error : function(xhr) {
					// justep.Util.hint("错误，请检查网络");
				}
			});
			this.comp('acceptanceBtn').set({
				'disabled' : false
			});
		}
	};

	Model.prototype.row1Click = function(event) {
		var params = {
			data : {
				id : orderid
			}
		}
		justep.Shell.showPage(require.toUrl("./selectartisan.w"), params);
	};

	Model.prototype.acceptanceBtnClick = function(event) {
		var params = {
			data : {
				id : orderid
			}
		}
		justep.Shell.showPage(require.toUrl("./acceptance.w"), params);
	};

	Model.prototype.button5Click = function(event) {
		this.comp('popMenu3').show();
	};

	Model.prototype.cancelBtnClick = function(event) {
		$("input[name='usercancelreason']").attr('checked', false);
		this.comp('usercancelreasonPop').show();
	};

	Model.prototype.button3Click = function(event) {
		this.comp('usercancelreasonPop').hide();
	};

	Model.prototype.seasonsubmitBtnClick = function(event) {
		var ischeck = $("input[name='usercancelreason']:checked").val();
		if (ischeck == undefined) {
			return false;
		}
		if (this.comp('otherreasonradio').get('checked')) {
			reason = this.comp('textarea1').val();
		}

		var self = this;
		$.ajax({
			async : false,
			url : url + "apis/userpaidcancel",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			data : {
				orderid : orderid,
				reason : reason,
				amount : amount
			},
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				self.comp('cancelBtn').set({
					"disabled" : true
				});
				self.comp('usercancelreasonPop').hide();
				self.close();
			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});
	};

	Model.prototype.radio1Change = function(event) {
		var row = event.bindingContext.$object;
		reason = row.val('reason');
	};

	Model.prototype.textarea1Keyup = function(event) {
		this.comp('otherreasonradio').set({
			'checked' : false
		});
		this.comp('otherreasonradio').set({
			'checked' : true
		});
	};

	Model.prototype.modelActive = function(event) {
		this.comp('acceptanceBtn').set({
			'disabled' : true
		});
	};

	Model.prototype.collectionBtnClick = function(event) {
		var self = this;
		$.ajax({
			async : false,
			url : url + "apis/collectionartisan",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			data : {
				openid : openid,
				artisanuserid : artisanuserid
			},
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				if (hascollection == 0) {
					hascollection = 1;
					self.comp("collectionBtn").set({
						"icon" : "fa fa-heart",
						"label" : "　取消收藏"
					});
				} else {
					hascollection = 0;
					self.comp("collectionBtn").set({
						"icon" : "fa fa-heart-o",
						"label" : "　收藏技工"
					});
				}

			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});
	};

	return Model;
});