var SLIDES = [
	{
		"cls": "first",
		"title": "Hi",
		"notes": "I'm a FED at Xero; writing JavaScript in the browser since 98"
	},

	{
		"cls": "first",
		"title": "The Loading Point: How Little Modules Can Make a Big Difference",
		"lanyrd": "http://lanyrd.com/scfkyb",
		"hashtag": "jsmod",
		"notes": "My opinion on modules & package mgrs for the browser"
	},

	{
		"cls": "first",
		"title": "Conclusion: you should use modules, they're awseome.",
		"notes": "Conclusion: you should use modules, they're awseome"
	},

	{
		"quote": {
			"text": "The worst thing that can happen to a code base is size",
			"from": "Steve Yegge"
		},
		"image": "http://www.flickr.com/photos/zapthedingbat/517644777/",
		"notes": "Stevey - size is the worst thing; ironic"
	},

	{
		"quote": {
			"text":	"The secret to building large apps is never build large apps. Break your applications into small pieces. Then, assemble those testable,  bite-sized pieces into your big application",
			"from":	"Justin Meyer, JavaScript MVC"
		},
		"image": "http://www.flickr.com/photos/62472560@N00/4679740934/",
		"notes": "Justin Meyer - secret is to break app into small pieces; testable; not 10k LoC"
	},

	{
		"image": "http://www.flickr.com/photos/feverblue/3865671508/",
		"notes": "modules help us break big apps into those bite-sized pieces"
	},

	{
		"quote": {
			"text": "module: a unit of source code with optional imports and exports",
			"from": "Yehuda Katz"
		},
		"image": "http://www.flickr.com/photos/sayamindu/5677674922/",
		"notes": "module - unit of source code w/ optional imports & exports"
	},

	{
		"quote": {
			"text": "loader: an object that defines how modules are fetched, translated and compiled into a module instance object",
			"from": "Yehuda Katz"
		},
		"image": "http://www.flickr.com/photos/moehre1992/8436105600/",
		"notes": "loader: an object that defines how modules are fetched, translated and compiled into a module instance object"
	},

	{
		"image": "http://www.flickr.com/photos/insouciance/3061759623/",
		"notes": "The reason I think you should write your JavaScript using modules is that modules provide a better developer workflow"
	},

	{
		"tweet": "https://twitter.com/keranm/status/315670961594699777",
		"image": "http://www.flickr.com/photos/wrumsby/8586255091/in/set-72157632927950302",
		"notes": "imports & exports enable dependency management"
	},

	{
		"image": "http://www.flickr.com/photos/26752267@N00/6171360453/in/photolist-apkQsr-dtU9tp-aoehCe-89A6WU-8rwqWJ-8rthfg-8rwqNq-8rtku4-8rwoPJ-8rwpvG-8rwpWo-8rtkeF-8rwpNj-8rwouf-8rtifr-8rwoZm-8rwmWJ-8rtgCB-8rth6B-8rwrdf-8rtgNr-8rwpkS-8rthpM-8rtjja-8rtgXk-8rwoDN-8rwqvy-8rwqDQ-8rwnaE-8rwnmN-8rwqmJ-8rtiKV-8rwq5d-9Yeewb-aoh37C-8zWGWa-8zWH6T-9XweDb-7MNorS-7MJoYi-ckpfuG-9yVNx5",
		"notes": "Initally look at YUI modules because they were the 1st to do async; Y3 is completely modular & they have an interesting production story; James Burke discusses this in RequireJS history"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5857534",
		"notes": "The export, Bolderiser, is attached to the Y instance (sorta like a jQuery plugin); module is named; imports defined as requires"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5857564",
		"notes": "Load the seed, configure the loader (yui_config.js), use the module"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5857594",
		"notes": "Loader config repeats YUI.add requires info (to support a particular, rare, scenario); loader already knows about YUI library modules"
	},

	{
		"image": "http://www.flickr.com/photos/martinhoward/6171889982/",
		"notes": "Most folks writing modular JavaScript in the browser are probably using AMD, inspired by YUI & Dojo"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5907620",
		"notes": "AMD kinda similar; module name is optional (IMO you shouldn't declare - more flexible); state imports, return the export; jQuery is an AMD module"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5907742",
		"notes": "Load the seed, configure the loader (require_config.js), use the module"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5907663",
		"notes": "Loader config is more based on convention; tends to be smaller, mainly shims and packages; YUI seed has metadata for core library"
	},

	{
		"image": "http://www.flickr.com/photos/26752267@N00/6171891884/in/photolist-apoyr3-apkQkM-apoyks-apkQsr-9DMQTP-7JN6Un-916PJX-ckpdMA-eQPtdB-a3DakL-9hgabJ-7WaPk1-8oJxvQ-aoefGi-dtU9tp-aoehCe-89A6WU-8rwqWJ-8rthfg-8rwqNq-8rtku4-8rwoPJ-8rwpvG-8rwpWo-8rtkeF-8rwpNj-8rwouf-8rtifr-8rwoZm-8rwmWJ-8rtgCB-8rth6B-8rwrdf-8rtgNr-8rwpkS-8rthpM-8rtjja-8rtgXk-8rwoDN-8rwqvy-8rwqDQ-8rwnaE-8rwnmN-8rwqmJ-8rtiKV-8rwq5d-9Yeewb-aoh37C-8zWGWa-8zWH6T-9XweDb",
		"notes": "Other libraries & frameworks provide their own solutions"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5907846",
		"notes": "ExtJS 4 has a pretty nice syntax for defining classes including dependencies - Ext.define w/ a requires property"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5907863",
		"notes": "Loader is convention based, paths are based on namespaces - create will load sync"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5907875",
		"notes": "or you can use Ext.require"
	},

	{
		"image": "http://www.flickr.com/photos/clearlydived/8410899161/",
		"notes": "Did you notice anything missing from my ExtJS code? JavaScript is versatile - can plug holes, but..."
	},

	{
		"image": "http://www.flickr.com/photos/gonmi/9172264505/",
		"notes": "ES6 modules"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5971698"
	},

	{
		"image": "http://www.flickr.com/photos/cedwardmoran/542701018/",
		"tweet": "https://twitter.com/wycats/status/355133508760514560",
		"notes": "ES6 modules are use strict by default"
	},

	{
		"image": "http://www.flickr.com/photos/barbourians/6662357209/"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5974173"
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
		"text": "Making your module available to AMD if it's there"
	},
	

	{
		"image": "http://www.flickr.com/photos/3059349393/3786855827/",
		"notes": "So which one?"
	},

	{
		"quote": {
			"text": "Next time you start an app download require.js first",
			"from": "Alex Sexton"
		},
		"image": "http://www.flickr.com/photos/rdmey/4428476184/"
	},

	{
		"tweet": "https://twitter.com/garannm/status/342380693743075328"
	},

	{
		"tweet": "https://twitter.com/ryanseddon/status/342496267957575681"
	},

	{
		"notes": "UMD; YUI - Flickr; AMD - LinkedIn; ExtJS - Xero; ES6 - 2016 or use transpiler"
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
