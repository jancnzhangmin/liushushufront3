define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
	};

	Model.prototype.modelLoad = function(event) {

	};

	Model.prototype.modelParamsReceive = function(event) {
		if (event.params.data) {
			var self = this;
			$.ajax({
				async : false,
				url : url + "apis/getartisanuser",
				type : "GET",
				dataType : 'jsonp',
				jsonp : 'callback',
				timeout : 5000,
				data : {
					artisanuserid : event.params.data.artisanuserid
				},
				success : function(jsonstr) {// 客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
					var artisanuserdata = self.comp("artisanuserData");
					artisanuserdata.clear();
					var options = {
						defaultValues : [ {
							id : jsonstr.artisanuser.id,
							username : jsonstr.artisanuser.username,
							login : jsonstr.artisanuser.login,
							headurl : jsonstr.artisanuser.headurl,
							servicenumber : jsonstr.artisanuser.servicenumber,
							score : jsonstr.artisanuser.score,
							skillscore : jsonstr.artisanuser.skillscore,
							conceptscore : jsonstr.artisanuser.conceptscore,
							attitudescore : jsonstr.artisanuser.attitudescore
						} ]
					};
					artisanuserdata.newData(options);
					$(self.getElementByXid("a2")).attr('href', 'tel:' + jsonstr.artisanuser.login);
					$(self.getElementByXid("zhspan")).text(parseFloat(jsonstr.artisanuser.score).toFixed(1) + '分');
					$(self.getElementByXid("p4")).css("width", 2 * parseFloat(jsonstr.artisanuser.score).toFixed(1) * 16);
					
					var skillscore = parseFloat(jsonstr.artisanuser.score).toFixed(1);
					if (jsonstr.artisanuser.skillscore) {
						skillscore = parseFloat(jsonstr.artisanuser.skillscore).toFixed(1);
					}
					$(self.getElementByXid("skillscorespen")).text(skillscore + '分');
					$(self.getElementByXid("p1")).css("width", 2 * skillscore * 16);
					
					var conceptscore = parseFloat(jsonstr.artisanuser.score).toFixed(1);
					if (jsonstr.artisanuser.conceptscore) {
						conceptscore = parseFloat(jsonstr.artisanuser.conceptscore).toFixed(1);
					}
					$(self.getElementByXid("conceptscorespan")).text(conceptscore + '分');
					$(self.getElementByXid("p2")).css("width", 2 * conceptscore * 16);
					
					var attitudescore = parseFloat(jsonstr.artisanuser.score).toFixed(1);
					if (jsonstr.artisanuser.attitudescore) {
						attitudescore = parseFloat(jsonstr.artisanuser.attitudescore).toFixed(1);
					}
					$(self.getElementByXid("attitudescorespan")).text(attitudescore + '分');
					$(self.getElementByXid("p3")).css("width", 2 * attitudescore * 16);
				},
				error : function(xhr) {
					// justep.Util.hint("错误，请检查网络");
				}
			});
		}
	};

	return Model;
});