module.exports = {
	"night": {
		"title": "Nighttime Appearance",
		"type": "object",
		"order": 2,
		"properties": {
			"ui": {
				"title": "UI Theme",
				"description": "UI theme to use at night.",
				"type": "string",
				"default": "one-dark-ui",
				"enum": [
					"atom-dark-ui", 
					"atom-light-ui", 
					"one-dark-ui", 
					"one-light-ui"
				],
				"order": 1
			},
			"syntax": {
				"title": "Syntax Theme",
				"description": "Syntax theme to use at night.",
				"type": "string",
				"default": "one-dark-syntax",
				"enum": [
					"atom-dark-syntax", 
					"atom-light-syntax", 
					"one-dark-syntax", 
					"one-light-syntax",
					"solarized-dark-syntax",
					"solarized-light-syntax",
					"base16-tomorrow-dark-theme",
					"base16-tomorrow-light-theme"
				],
				"order": 2
			}
		}
	},
	"day": {
		"title": "Daytime Appearance",
		"type": "object",
		"order": 1,
		"properties": {
			"ui": {
				"title": "UI Theme",
				"description": "UI theme to use during the day.",
				"type": "string",
				"default": "one-light-ui",
				"enum": [
					"atom-dark-ui", 
					"atom-light-ui", 
					"one-dark-ui", 
					"one-light-ui"
				],
				"order": 1
			},
			"syntax": {
				"title": "Syntax Theme",
				"description": "Syntax theme to use during the day.",
				"type": "string",
				"default": "one-light-syntax",
				"enum": [
					"atom-dark-syntax", 
					"atom-light-syntax", 
					"one-dark-syntax", 
					"one-light-syntax",
					"solarized-dark-syntax",
					"solarized-light-syntax",
					"base16-tomorrow-dark-theme",
					"base16-tomorrow-light-theme"
				],
				"order": 2
			}
		}
	},
	"schedule": {
		"title": "Schedule",
		"type": "object",
		"order": 3,
		"properties": {
			"auto": {
				"title": "Auto-update Sunset and Sunrise",
				"description": "Automatically update the scheduled sunrise/sunset times daily. If this setting is disabled, then the themes will change based on the start and end times below.",
				"default": true,
				"type": "boolean",
				"order": 1
			},
			"start": {
				"title": "Manual Sunset",
				"description": "Night mode begins at this time. Must follow HH:MM format.",
				"type": "string",
				"pattern": "/.*:.*/",
				"default": "18:00",
				"order": 2
			},
			"end": {
				"title": "Manual Sunrise",
				"description": "Night mode ends at this time. Must follow HH:MM format.",
				"type": "string",
				"pattern": "/.*:.*/",
				"default": "05:00",
				"order": 3
			}
		}
	},
	"location": {
		"title": "Location",
		"type": "object",
		"order": 4,
		"properties": {
			"auto": {
				"title": "Auto-update Location",
				"description": "Automatically refresh the latitute and longitude based on your location. If this is disabled, then please update your latitude and longitude below. For best results, please use a location in the same time zone as this computer.",
				"type": "boolean",
				"order": 1,
				"default": true
			},
			"lat": {
				"title": "Latitude",
				"type": "number",
				"order": 2,
				"default": 40.714623
			},
			"lng": {
				"title": "Longitude",
				"type": "number",
				"order": 3,
				"default": -74.006605
			}
		}
	}
}
