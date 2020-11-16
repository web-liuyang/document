/**
 * @file 这是一个基于uniapp中的常用API进行的封装
 * @author LiuYang <984584014@qq.com>
 * @copyright LiuYang 2020
 * @version 1.0.0
 */



/**
 * @description 把字符串分割成数组
 * @param {Array} str 需要分割的字符串
 * @param {String} split 以什么方式分割，默认英文逗号','
 */
const stringSplitArray = (str, split = ',') => {
	return str.split(split)
}

/**
 * @description 把数组拼接为字符串
 * @param {Array} arr 需要拼接的数组
 */
const arrJoinString = (arr) => {
	return arr.join(',')
}

/**
 * @description 获取节点信息
 * @param {IDString} select 选择器
 * @param {object} _this 当前页面实例
 * @returns {Promise} 返回节点信息
 */
const node = (select, _this) => {
	return new Promise(resolv => {
		const query = uni.createSelectorQuery().in(_this);
		query.select(select).boundingClientRect(data => {
			resolv(data)
		}).exec();
	})
}


/**
 * @description 直线距离计算
 * @param {number|string} lat2 纬度
 * @param {number|string} lng2 经度
 * @returns {Promise} 返回两端之间的距离,单位米
 */
const straightDistance = (lat2, lng2) => {
	return new Promise((resolv) => {
		uni.getLocation({
			type: "gcj02",
			success: (res) => {
				var EARTH_RADIUS = 6378137.0;
				var PI = Math.PI;

				function getRad(d) {
					return d * PI / 180.0;
				}
				var radLat1 = getRad(res.latitude);
				var radLat2 = getRad(lat2);
				var a = radLat1 - radLat2;
				var b = getRad(res.longitude) - getRad(lng2);
				var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) *
					Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
				s = s * EARTH_RADIUS;
				s = Math.round(s * 10000) / 10000.0;
				resolv(Math.floor(s)) // m
			}
		})
	})
}


/**
 * @description 页面实例获取
 * @param { Number | String } num 默认获取上一页面实例，数字几就返回前几页的实例
 * @return {Object} 返回页面实例
 */
const getPageInstance = (num = 1) => {
	const pages = getCurrentPages();
	return pages[pages.length - 1 - num].$vm;
}


/**
 * @description 深拷贝引用类型数据
 * @param {Object | Array} obj 需要深拷贝的数据
 * @return{Any} 返回全新的数据
 */
const deepCopy = (obj) => {
	let objClone = Array.isArray(obj) ? [] : {};
	if (obj && typeof obj === 'object') {
		for (let key in obj) {
			if (obj[key] && typeof obj[key] === 'object') {
				objClone[key] = deepCopy(obj[key]);
			} else {
				objClone[key] = obj[key]
			}
		}
	}
	return objClone;
}

// 打开当前定位地图
const openMap = () => {
	uni.getLocation({
		type: 'gcj02', //返回可以用于uni.openLocation的经纬度
		success: (res) => {
			const {
				latitude,
				longitude
			} = res;
			uni.openLocation({
				latitude,
				longitude,
				success: function() {
					console.log('success');
				}
			});
		}
	});
}


export {
	node, // 节点信息
	straightDistance, // 距离计算
	getPageInstance, // 页面实例获取
	deepCopy, // 深拷贝
	stringSplitArray, // 把字符串分割为数组
	arrJoinString // 把数组拼接为字符串
}
