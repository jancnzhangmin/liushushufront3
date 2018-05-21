define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var artisanid;
	var artisan;
	var bartaskid;
	var price;
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
			$(this.getElementByXid("span4")).text(price);
		}
	};

	return Model;
});