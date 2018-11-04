define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
	};

	var map;
	var transit;
	var driving;
	var startMarker;
	var endMarker;
	var routeLine;
	var distrance = 0;//距离
	var startaddress = '云南省昆明市官渡区';
	var endaddress = "云南省昆明市官渡区";
	var detailaddress = '';
	var servicetype = 'trsansit';
	var hasstart = false;// 是否有开始地址
	var hasend = false;// 是否有结束地址
	var paramsload = false;// 判读是否正在接收参数状态

	Model.prototype.modelLoad = function(event) {
		var self = this;
		// require([
		// 'http://api.map.baidu.com/api?v=2.0&ak=iOxsL9Z27dKiNtY5s4m8vRjUyZiNwZOC&callback=_baiduInit'
		// ], function() {
		//
		// if (window.BMap && window.BMap.Map) {
		// window._baiduInit();
		// }
		// });
		window._baiduInit = function() {

			map = new BMap.Map(self.getIDByXID("allmap"));
			map.addControl(new BMap.MapTypeControl());
			map.enableScrollWheelZoom(true);

			var output = "从上地到西单驾车需要";
			var searchComplete = function(results) {
				if (transit.getStatus() != BMAP_STATUS_SUCCESS) {
					return;
				}
				var plan = results.getPlan(0);
				output += plan.getDuration(true) + "\n"; // 获取时间
				output += "总路程为：";
				$(self.getElementByXid("distranceSpan")).text(plan.getDistance(true));
				output += plan.getDistance(true) + "\n"; // 获取距离
			}
			transit = new BMap.DrivingRoute(map, {
				renderOptions : {
					map : map
				},
				onSearchComplete : searchComplete,
				onPolylinesSet : function() {
					setTimeout(function() {
						// alert(output)
					}, "1000");
				}
			});
			transit.search(startaddress, endaddress);

			// map.addOverlay(new BMap.Marker(point));
		};

		require([ "https://webapi.amap.com/maps?v=1.4.10&key=e211f927006cc8261173fd48c35b0d2f&callback=onApiLoaded" ], function() {
			if (window.AMap && window.AMap.Map) {
				window.onApiLoaded();
			}
		});

		window.onApiLoaded = function() {
			map = new AMap.Map(self.getIDByXID("allmap"), {
				resizeEnable : true,
				zoom : 14
			});
			AMap.plugin('AMap.Geolocation', function() {
				var geolocation = new AMap.Geolocation({
					enableHighAccuracy : true,// 是否使用高精度定位，默认:true
					zoomToAccuracy : true
				// 定位成功后是否自动调整地图视野到定位点
				});

			});

			AMap.plugin('AMap.Driving', function() {
				driving = new AMap.Driving({
					// 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
					policy : AMap.DrivingPolicy.LEAST_TIME,
				});

			});

			driving.search([ {
				keyword : startaddress

			}, {
				keyword : endaddress

			} ], function(status, result) {
				if (status === 'complete' && result.info === 'OK') {
				$(self.getElementByXid("distranceSpan")).text(parseFloat((result.routes[0].distance)/1000).toFixed(2) + '公里');
				distrance = result.routes[0].distance;
					map.clearMap();
					self.drawRoute(result.routes[0]);
				}

			});
		};

	};

	Model.prototype.drawRoute = function(route) {
		var path = this.parseRouteToPath(route);

		startMarker = new AMap.Marker({
			position : path[0],
			icon : 'https://webapi.amap.com/theme/v1.3/markers/n/start.png',
			map : map
		})

		endMarker = new AMap.Marker({
			position : path[path.length - 1],
			icon : 'https://webapi.amap.com/theme/v1.3/markers/n/end.png',
			map : map
		})

		routeLine = new AMap.Polyline({
			path : path,
			isOutline : true,
			outlineColor : '#ffeeee',
			borderWeight : 2,
			strokeWeight : 5,
			strokeColor : '#0091ff',
			lineJoin : 'round'
		})

		routeLine.setMap(map);
		map.setFitView([ startMarker, endMarker, routeLine ]);
	};

	Model.prototype.parseRouteToPath = function(route) {
		var path = []
		for (var i = 0, l = route.steps.length; i < l; i++) {
			var step = route.steps[i]

			for (var j = 0, n = step.path.length; j < n; j++) {
				path.push(step.path[j])
			}
		}
		return path
	};

	Model.prototype.provinceSelect1Change = function(event) {
		if (!paramsload) {
			this.comp('provinceData').clear();
			var options = {
				defaultValues : [ {
					province : this.comp('provinceSelect1').val()
				} ]
			};
			this.comp('provinceData').newData(options);
			this.addresschange();
		}
	};

	Model.prototype.citySelect1Change = function(event) {
		if (!paramsload) {
			this.comp('cityData').clear();
			var options = {
				defaultValues : [ {
					city : this.comp('citySelect1').val()
				} ]
			};
			this.comp('cityData').newData(options);
			this.addresschange();
		}
	};

	Model.prototype.addresschange = function() {
		var self = this;
		if (servicetype == 'transit') {
			startaddress = this.comp('provinceSelect1').val() + this.comp('citySelect1').val() + this.comp('districtSelect1').val() + this.comp('addressInput').val();
			if (!hasend) {
				endaddress = startaddress;
			}
		} else {
			endaddress = this.comp('provinceSelect1').val() + this.comp('citySelect1').val() + this.comp('districtSelect1').val() + this.comp('addressInput').val();
			if (!hasstart) {
				startaddress = endaddress;
			}
		}

self.comp("button1").set({'label':'计算中','disabled':true});

		driving.search([ {
			keyword : startaddress

		}, {
			keyword : endaddress

		} ], function(status, result) {
			if (status === 'complete' && result.info === 'OK') {
			$(self.getElementByXid("distranceSpan")).text(parseFloat((result.routes[0].distance)/1000).toFixed(2) + '公里');
			distrance = result.routes[0].distance;
				map.clearMap();
				self.drawRoute(result.routes[0]);
				self.comp("button1").set({'label':'确定','disabled':false});
			}

		});
		//transit.search(startaddress, endaddress);

	};

	Model.prototype.districtSelect1Change = function(event) {
		if (!paramsload) {
			this.addresschange();
		}
	};

	Model.prototype.addressInputKeyup = function(event) {
		// detailaddress = event.currentTarget.value;
		// this.addresschange();
	};

	Model.prototype.addressInputChange = function(event) {
		if (!paramsload) {
			this.addresschange();
		}
	};

	Model.prototype.modelParamsReceive = function(event) {

		this.comp('title').set({
			'title' : event.params.title
		});

		if (event.params) {
			paramsload = true;

			if (event.params.transit_province) {
				hasstart = true;
				startaddress = event.params.transit_province + event.params.transit_city + event.params.transit_district + event.params.transit_address;
			}
			if (event.params.service_province) {
				hasend = true;
				endaddress = event.params.service_province + event.params.service_city + event.params.service_district + event.params.service_address;
			}

			servicetype = event.params.type;
			if (event.params.type == 'transit') {

				this.comp('provinceData').clear();
				var options = {
					defaultValues : [ {
						province : event.params.transit_province
					} ]
				};
				this.comp('provinceData').newData(options);
				this.comp('provinceSelect1').val(event.params.transit_province);
				this.comp('cityData').clear();
				var options = {
					defaultValues : [ {
						city : event.params.transit_city
					} ]
				};
				this.comp('cityData').newData(options);
				this.comp('citySelect1').val(event.params.transit_city);
				this.comp('districtData').clear();
				var options = {
					defaultValues : [ {
						district : event.params.transit_district
					} ]
				};
				this.comp('districtData').newData(options);
				this.comp('districtSelect1').val(event.params.transit_district);

				this.comp('addressData').clear();
				var options = {
					defaultValues : [ {
						address : event.params.transit_address
					} ]
				};
				this.comp('addressData').newData(options);
				this.comp('addressInput').val(event.params.transit_address);
				if (hasend) {
					$(this.getElementByXid("distranceSpan")).show();
				}
			} else {

				this.comp('provinceData').clear();
				var options = {
					defaultValues : [ {
						province : event.params.service_province
					} ]
				};

				this.comp('provinceData').newData(options);
				this.comp('provinceSelect1').val(event.params.service_province);
				this.comp('cityData').clear();
				var options = {
					defaultValues : [ {
						city : event.params.service_city
					} ]
				};
				this.comp('cityData').newData(options);
				this.comp('citySelect1').val(event.params.service_city);
				this.comp('districtData').clear();
				var options = {
					defaultValues : [ {
						district : event.params.service_district
					} ]
				};
				this.comp('districtData').newData(options);
				this.comp('districtSelect1').val(event.params.service_district);
				this.comp('addressData').clear();
				var options = {
					defaultValues : [ {
						address : event.params.service_address
					} ]
				};
				this.comp('addressData').newData(options);
				this.comp('addressInput').val(event.params.service_address);
				if (hasstart) {
					$(this.getElementByXid("distranceSpan")).show();
				}
			}
			paramsload = false;
			// this.addresschange();
		}
	};

	Model.prototype.button1Click = function(event) {
		var params = {
			province : this.comp('provinceSelect1').val(),
			city : this.comp('citySelect1').val(),
			district : this.comp('districtSelect1').val(),
			address : this.comp('addressInput').val(),
			type : servicetype,
			distrance : distrance
		}
		justep.Shell.fireEvent("onBackMap", params);
		this.close();
	};

	return Model;
});