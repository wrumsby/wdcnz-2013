var SLIDES = [
	{
		"cls": "first",
		"title": "Hi",
		"notes": "Who am I?"
	},

	{
		"cls": "first",
		"title": "The Loading Point: How Little Modules Can Make a Big Difference",
		"lanyrd": "http://lanyrd.com/scfkyb",
		"hashtag": "jsmod",
		"notes": "What is this about? This is opinion"
	},

	{
		"quote": {
			"text": "The worst thing that can happen to a code base is size",
			"from": "Steve Yegge"
		},
		"image": "http://www.flickr.com/photos/zapthedingbat/517644777/",
		"notes": "http://steve-yegge.blogspot.co.nz/2007/12/codes-worst-enemy.html"
	},

	{
		"quote": {
			"text":	"The secret to building large apps is never build large apps. Break your applications into small pieces. Then, assemble those testable,  bite-sized pieces into your big application",
			"from":	"Justin Meyer, JavaScript MVC"
		},
		"image": "http://www.flickr.com/photos/62472560@N00/4679740934/"
	},

	{
		"quote": {
			"text": "module: a unit of source code with optional imports and exports",
			"from": "John Hann via Yehuda Katz"
		},
		"image": "http://www.flickr.com/photos/sayamindu/5677674922/"
	},

	{
		"image": "http://www.flickr.com/photos/feverblue/3865671508/",
		"notes": "modules help us break big apps into those bite-sized pieces"
	},

	{
		"tweet": "https://twitter.com/keranm/status/315670961594699777",
		"notes": "module loaders can help with this problem"
	},

	{
		"quote": {
			"text": "loader: an object that defines how modules are fetched, translated and compiled into a module instance object",
			"from": "John Hann via Yehuda Katz"
		},
		"image": "http://www.flickr.com/photos/moehre1992/8436105600/",
		"notes": "loader: an object that defines how modules are fetched, translated and compiled into a module instance object"
	},

	{
		"image": "http://www.flickr.com/photos/insouciance/3061759623/",
		"notes": "modules provide a better developer workflow... let\'s talk about how"
	},

	{
		"image": "http://www.flickr.com/photos/26752267@N00/6171360453/in/photolist-apkQsr-dtU9tp-aoehCe-89A6WU-8rwqWJ-8rthfg-8rwqNq-8rtku4-8rwoPJ-8rwpvG-8rwpWo-8rtkeF-8rwpNj-8rwouf-8rtifr-8rwoZm-8rwmWJ-8rtgCB-8rth6B-8rwrdf-8rtgNr-8rwpkS-8rthpM-8rtjja-8rtgXk-8rwoDN-8rwqvy-8rwqDQ-8rwnaE-8rwnmN-8rwqmJ-8rtiKV-8rwq5d-9Yeewb-aoh37C-8zWGWa-8zWH6T-9XweDb-7MNorS-7MJoYi-ckpfuG-9yVNx5",
		"notes": "Going to talk about YUI modules because they were the first to do async, modular & they have an interesting production story"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5857534",
		"notes": "Bolderiser is attached to the Y instance (sorta like a jQuery plugin). Module is named."
	},

	{
		"gist": "https://gist.github.com/wrumsby/5857594",
		"notes": "Loader config repeats YUI.add requires info (to support a particular, rare, scenario); loader already knows about YUI library modules"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5857564",
		"notes": "Load seed then load config... then use modules"
	},

	{
		"image": "http://www.flickr.com/photos/martinhoward/6171889982/",
		"notes": "Most folks writing modular JavaScript in the browser are probably using AMD, inspired by YUI & Dojo"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5907620",
		"notes": "AMD kinda similar; module name is optional; return"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5907663",
		"notes": "Loader config is smaller, mainly shims and packages"
	},

	{
		"image": "http://www.flickr.com/photos/cogdog/4643688405/",
		"notes": "idioms"
	},

	{
		"text": "Y.My.Bolderiser = Bolderiser;",
		"notes": "Add to sandbox (sandbox vs. global), kinda like a jQuery plugin"
	},

	{
		"text": "return Bolderiser;",
		"notes": "No global, sandbox"
	},

	{
		"text": "Ext.define('My.Bolderiser', { ... });",
		"notes": "Global, namespace"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5914632",
		"notes": "confusing... NodeUp"
	},

	{
		"image": "http://www.flickr.com/photos/danielfoster/4725849931/",
		"notes": "production"
	},

	{
		"text": "http://l.yimg.com/g/combo/1/3.7.3?cookie/cookie-min.js&oop/oop-min.js&attribute-core/attribute-core-min.js&base-core/base-core-min.js&event-custom-base/event-custom-base-min.js&event-custom-complex/event-custom-complex-min.js&attribute-events/attribute-events-min.js&attribute-extras/attribute-extras-min.js&attribute-base/attribute-base-min.js&attribute-complex/attribute-complex-min.js&base-base/base-base-min.js&dom-core/dom-core-min.js&dom-base/dom-base-min.js&dom-style/dom-style-min.js&selector-native/selector-native-min.js&selector/selector-min.js&node-core/node-core-min.js&node-base/node-base-min.js&event-base/event-base-min.js&node-style/node-style-min.js&anim-base/anim-base-min.js&anim-color/anim-color-min.js&dom-screen/dom-screen-min.js&node-screen/node-screen-min.js&anim-xy/anim-xy-min.js&anim-curve/anim-curve-min.js&anim-easing/anim-easing-min.js&pluginhost-base/pluginhost-base-min.js&pluginhost-config/pluginhost-config-min.js&node-pluginhost/node-pluginhost-min.js&anim-node-plugin/anim-node-plugin-min.js&anim-scroll/anim-scroll-min.js&event-delegate/event-delegate-min.js&event-synthetic/event-synthetic-min.js&event-mousewheel/event-mousewheel-min.js&event-mouseenter/event-mouseenter-min.js&event-key/event-key-min.js&event-focus/event-focus-min.js&event-resize/event-resize-min.js&event-hover/event-hover-min.js&event-outside/event-outside-min.js&event-touch/event-touch-min.js&event-move/event-move-min.js&event-flick/event-flick-min.js&event-valuechange/event-valuechange-min.js&event-tap/event-tap-min.js&base-pluginhost/base-pluginhost-min.js&base-build/base-build-min.js&node-event-delegate/node-event-delegate-min.js&classnamemanager/classnamemanager-min.js&widget-base/widget-base-min.js&widget-htmlparser/widget-htmlparser-min.js&widget-skin/widget-skin-min.js&widget-uievents/widget-uievents-min.js&widget-stdmod/widget-stdmod-min.js&widget-position/widget-position-min.js&widget-position-align/widget-position-align-min.js&widget-stack/widget-stack-min.js",
		"cls": "full"
	},
	
	{
		"image": "http://www.flickr.com/photos/26752267@N00/6171891884/in/photolist-apoyr3-apkQkM-apoyks-apkQsr-9DMQTP-7JN6Un-916PJX-ckpdMA-eQPtdB-a3DakL-9hgabJ-7WaPk1-8oJxvQ-aoefGi-dtU9tp-aoehCe-89A6WU-8rwqWJ-8rthfg-8rwqNq-8rtku4-8rwoPJ-8rwpvG-8rwpWo-8rtkeF-8rwpNj-8rwouf-8rtifr-8rwoZm-8rwmWJ-8rtgCB-8rth6B-8rwrdf-8rtgNr-8rwpkS-8rthpM-8rtjja-8rtgXk-8rwoDN-8rwqvy-8rwqDQ-8rwnaE-8rwnmN-8rwqmJ-8rtiKV-8rwq5d-9Yeewb-aoh37C-8zWGWa-8zWH6T-9XweDb"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5907846"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5907863",
		"notes": "Convention based, namespaces, magic, require"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5907875"
	},

	{
		"image": "http://www.flickr.com/photos/49512158@N00/6231468612/",
		"title": "Thank you!",
		"list": ["@evangoer", "@davglass", "@unscriptable", "@jrburke", "@souders"],
		"notes": "@davglass, @evangoer, @yaypie, @kiwipom"
	},
	{
		"cls": "xero",
		"html": "<span class=\"logo\"></span>",
		"link": "http://xero.com/careers"
	},

	{
		"cls": "javascript",
		"text": "JS",
		"link": "http://meetup.com/AucklandJS/"
	},

	{
		"credits": true
	},

	{
		"image": "http://www.flickr.com/photos/24046097@N00/3908013145/",
		"cls": "last",
		"twitter": "wrumsby"
	}
];
