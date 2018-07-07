define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("../js/startScore");
	var orderid;
	var score = 0;
	var Model = function() {
		this.callParent();
	};

	Model.prototype.modelLoad = function(event) {
	var self = this;
		scoreFun($(this.getElementByXid("skill")));
		scoreFun($(this.getElementByXid("attitude")));
		scoreFun($(this.getElementByXid("concept")));
		$(this.getElementByXid("zhspan")).text(0 + '分');
		$(this.getElementByXid("p4")).css("width", 2 * 0 * 16);
		// $(this).css("width",www);
		$(this.getElementByXid("skillspan")).bind('DOMNodeInserted', function(e) {
			self.changezonghe();
		});
		$(this.getElementByXid("attitudespan")).bind('DOMNodeInserted', function(e) {
			self.changezonghe();
		});
		$(this.getElementByXid("conceptspan")).bind('DOMNodeInserted', function(e) {
			self.changezonghe();
		});

	};

	Model.prototype.changezonghe = function() {
	var skill = 0;
	if ($(this.getElementByXid("skillspan")).text()){
	skill = parseFloat($(this.getElementByXid("skillspan")).text());
	}
		var attitude = 0;
	if ($(this.getElementByXid("attitudespan")).text()){
	attitude = parseFloat($(this.getElementByXid("attitudespan")).text());
	}
		var concept = 0;
	if ($(this.getElementByXid("conceptspan")).text()){
	concept = parseFloat($(this.getElementByXid("conceptspan")).text());
	}
	score = skill + attitude + concept;
		score = score/3.0;
		$(this.getElementByXid("zhspan")).text(score.toFixed(1) + '分');
		$(this.getElementByXid("p4")).css("width", score * 2 * 16);
	};

	Model.prototype.acceptanceBtnClick = function(event) {
	
	if(!$(this.getElementByXid("skillspan")).text() || !$(this.getElementByXid("attitudespan")).text() || !$(this.getElementByXid("conceptspan")).text()){
	this.comp('messageDialog1').show();
	return false;
	}
	
	
		var self = this;
		$.ajax({
			async : false,
			url : url + "apis/acceptance",
			type : "GET",
			dataType : 'jsonp',
			jsonp : 'callback',
			timeout : 5000,
			data : {
				orderid : orderid,
				//score : $(this.getElementByXid("fen")).text()
				skill:$(this.getElementByXid("skillspan")).text(),
				attitude:$(this.getElementByXid("attitudespan")).text(),
				concept:$(this.getElementByXid("conceptspan")).text(),
				summary:self.comp('textarea1').val()
			},
			success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
				self.close();
			},
			error : function(xhr) {
				// justep.Util.hint("错误，请检查网络");
			}
		});
	};

	Model.prototype.modelParamsReceive = function(event) {
		if (event.params.data) {
			orderid = event.params.data.id;
		}
	};

	Model.prototype.div2Click = function(event) {

	};

	Model.prototype.div2Touchend = function(event) {

	};

	return Model;
});