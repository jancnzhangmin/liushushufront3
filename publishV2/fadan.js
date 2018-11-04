define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	//require("../js/LCalendar.min");
	require("../js/mobiscroll.custom-2.6.2.min");
	var servicetype = 'install';// install安装 repair维修
	var Model = function() {
		this.callParent();
	};

	Model.prototype.modelLoad = function(event) {
	var self = this;
		$('input').parent().parent().children().addClass('colblur');
		$('select').parent().parent().children().addClass('colblur');
		$('input').focus(function() {
			$(this).parent().parent().children().removeClass('colblur');
			$(this).parent().parent().children().addClass('colcss');
		});
		$('input').blur(function() {
			$(this).parent().parent().children().removeClass('colcss');
			$(this).parent().parent().children().addClass('colblur');
		});
		$('select').focus(function() {
			$(this).parent().parent().children().removeClass('colblur');
			$(this).parent().parent().children().addClass('colcss');
		});
		$('select').blur(function() {
			$(this).parent().parent().children().removeClass('colcss');
			$(this).parent().parent().children().addClass('colblur');
		});
		justep.Shell.on("onBackMap", this.onBackMap, this);
		this.comp('bartaskData').clear();
		var options = {
			defaultValues : [ {
				id : 1,
				province : '',
				city : '',
				district : '',
				address : ''
			} ]
		};
		this.comp('bartaskData').newData(options);
		
					var opt = {
				preset: 'datetime', //日期，可选：date\datetime\time\tree_list\image_text\select
				theme: 'default', //皮肤样式，可选：default\android\android-ics light\android-ics\ios\jqm\sense-ui\wp light\wp
				display: 'modal', //显示方式 ，可选：modal\inline\bubble\top\bottom
				mode: 'scroller', //日期选择模式，可选：scroller\clickpick\mixed
				lang:'zh',
				dateFormat: 'yyyy-mm-dd', // 日期格式
				setText: '确定', //确认按钮名称
				cancelText: '取消',//取消按钮名籍我
				dateOrder: 'yyyymmdd', //面板中日期排列格式
				dayText: '日', monthText: '月', yearText: '年', //面板中年月日文字
				showNow: false,  
           		nowText: "今"
           		}

		
    $('#installtime').mobiscroll().datetime(opt);

	};

	Model.prototype.onBackMap = function(params) {
		if (params.type == 'transit') {
			this.comp('transitData').clear();
			var options = {
				defaultValues : [ {
					province : params.province,
					city : params.city,
					district : params.district,
					address : params.address,
					distrance : params.distrance
				} ]
			};
			this.comp('transitData').newData(options);
			$(this.getElementByXid("span14")).text(params.address);
			$(this.getElementByXid("span15")).text(params.province + params.city + params.district);
			$(this.getElementByXid("i5")).hide();
			this.comp('transitclear').removeClass('hide');
			this.comp('transitclear').addClass('show');
		} else {
			this.comp('bartaskData').getFirstRow().val('province', params.province);
			this.comp('bartaskData').getFirstRow().val('city', params.city);
			this.comp('bartaskData').getFirstRow().val('district', params.district);
			this.comp('bartaskData').getFirstRow().val('address', params.address);
			$(this.getElementByXid("span17")).text(params.address);
			$(this.getElementByXid("span18")).text(params.province + params.city + params.district);
			$(this.getElementByXid("i6")).hide();
			this.comp('serviceclear').removeClass('hide');
			this.comp('serviceclear').addClass('show');
			if (this.comp('transitData').getFirstRow()) {
				this.comp('transitData').getFirstRow().val('distrance', params.distrance);
			}
		}

		if (this.comp('transitData').getFirstRow()) {
			if (this.comp('transitData').getFirstRow().val('province') && this.comp('bartaskData').getFirstRow().val('province')) {
				$(this.getElementByXid("span19")).show();
				$(this.getElementByXid("span19")).text('(' + parseFloat((this.comp('transitData').getFirstRow().val('distrance')) / 1000).toFixed(2) + '公里)');
			}
		} else {
			$(this.getElementByXid("span19")).hide();
		}

	};

	Model.prototype.row8Click = function(event) {
		var transit_province = '';
		var transit_city = '';
		var transit_district = '';
		var transit_address = '';
		var service_province = '';
		var service_city = '';
		var service_district = '';
		var service_address = '';

		if (this.comp('transitData').getFirstRow()) {
			var data = this.comp('transitData').getFirstRow();
			transit_province = data.val('province');
			transit_city = data.val('city');
			transit_district = data.val('district');
			transit_address = data.val('address');
		}
		if (this.comp('bartaskData').getFirstRow()) {
			var data = this.comp('bartaskData').getFirstRow();
			service_province = data.val('province');
			service_city = data.val('city');
			service_district = data.val('district');
			service_address = data.val('address');
		}

		var params = {
			title : '运输起点',
			type : 'transit',
			transit_province : transit_province,
			transit_city : transit_city,
			transit_district : transit_district,
			transit_address : transit_address,
			service_province : service_province,
			service_city : service_city,
			service_district : service_district,
			service_address : service_address
		}
		justep.Shell.showPage(require.toUrl('./map.w'), params);
	};

	Model.prototype.row9Click = function(event) {
		var transit_province = '';
		var transit_city = '';
		var transit_district = '';
		var transit_address = '';
		var service_province = '';
		var service_city = '';
		var service_district = '';
		var service_address = '';

		if (this.comp('transitData').getFirstRow()) {
			var data = this.comp('transitData').getFirstRow();
			transit_province = data.val('province');
			transit_city = data.val('city');
			transit_district = data.val('district');
			transit_address = data.val('address');
		}
		if (this.comp('bartaskData').getFirstRow()) {
			var data = this.comp('bartaskData').getFirstRow();
			service_province = data.val('province');
			service_city = data.val('city');
			service_district = data.val('district');
			service_address = data.val('address');
		}

		var params = {
			title : '服务地址',
			type : 'service',
			transit_province : transit_province,
			transit_city : transit_city,
			transit_district : transit_district,
			transit_address : transit_address,
			service_province : service_province,
			service_city : service_city,
			service_district : service_district,
			service_address : service_address
		}
		justep.Shell.showPage(require.toUrl('./map.w'), params);
	};

	Model.prototype.transitclearClick = function(event) {
		this.comp('transitData').clear();
		$(this.getElementByXid("span14")).text('');
		$(this.getElementByXid("span15")).text('');
		$(this.getElementByXid("i5")).show();
		this.comp('transitclear').removeClass('show');
		this.comp('transitclear').addClass('hide');
		this.showdistrance();
	};

	Model.prototype.showdistrance = function() {
		if (this.comp('transitData').getFirstRow()) {
			if (this.comp('transitData').getFirstRow().val('province') && this.comp('bartaskData').getFirstRow().val('province')) {
				$(this.getElementByXid("span19")).show();
			} else {
				$(this.getElementByXid("span19")).hide();
			}
		} else {
			$(this.getElementByXid("span19")).hide();
		}
	};

	Model.prototype.serviceclearClick = function(event) {
		var data = this.comp('bartaskData').getFirstRow();
		data.val('province', '');
		data.val('city', '');
		data.val('district', '');
		data.val('address', '');
		$(this.getElementByXid("span17")).text('');
		$(this.getElementByXid("span18")).text('');
		$(this.getElementByXid("i6")).show();
		this.comp('serviceclear').removeClass('show');
		this.comp('serviceclear').addClass('hide');
		this.showdistrance();
	};

	Model.prototype.button1Click = function(event) {
		servicetype = 'install';
		this.comp('button1').removeClass('liushushubtn-blur');
		this.comp('button1').addClass('liushushubtn-active');
		this.comp('button2').removeClass('liushushubtn-active');
		this.comp('button2').addClass('liushushubtn-blur');
		$(this.getElementByXid("div1")).show();
		$(this.getElementByXid("div8")).hide();
	};

	Model.prototype.button2Click = function(event){
		servicetype = 'repair';
		this.comp('button1').removeClass('liushushubtn-active');
		this.comp('button1').addClass('liushushubtn-blur');
		this.comp('button2').removeClass('liushushubtn-blur');
		this.comp('button2').addClass('liushushubtn-active');
		$(this.getElementByXid("div1")).hide();
		$(this.getElementByXid("div8")).show();
	};

	return Model;
});