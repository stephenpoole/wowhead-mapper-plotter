'use strict'
var EndpointClass = require('./EndpointClass')

//@return
//{
//	id: {
//		category
//		id
//		maxlevel
//		minlevel
//		name
//		territory
//	}
//}

module.exports = class Zones extends EndpointClass {
	static parse(html) {
		var regex = new RegExp(/zonedata.zones = (.*?]);new Listview/g),
			match = regex.exec(html.replace(/\n|\r/g, ''))

		try {
			return JSON.parse(match[1])
		} catch (e) {
			throw new Error(e)
		}
	}

	static format(json) {
		var obj = {}
		for (var key in json) {
			var value = json[key]
			obj[value.id] = value
		}
		return obj
	}

	static url(baseURL, params) {
		return `${baseURL}zones`
	}
}