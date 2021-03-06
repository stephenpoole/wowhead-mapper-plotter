'use strict'
var ItemSearch = require('./endpoints/ItemSearch'),
	ObjectCoordinates = require('./endpoints/ObjectCoordinates'),
	Zones = require('./endpoints/Zones'),
	Zone = require('./endpoints/Zone'),
	filters = require('./filters.json')

class Scraper {
	constructor() {
		this.baseURL = 'http://wowhead.com/'
	}

	getItems(filter) {
		if (filter in filters) filter = filters[filter]
		return ItemSearch.get(this.baseURL, {
			filter: filter
		})
	}

	getObjectCoordinates(objectID, mapID) {
		return ObjectCoordinates.get(this.baseURL, {
			object: objectID
		}, {
			objectID: objectID,
			mapID: mapID
		})
	}

	getZones() {
		return Zones.get(this.baseURL)
	}

	getZone(id) {
		return Zone.get(this.baseURL, {
			id: id
		})
	}
}

module.exports = new Scraper()