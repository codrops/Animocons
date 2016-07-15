/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	// taken from mo.js demos
	function isIOSSafari() {
		var userAgent;
		userAgent = window.navigator.userAgent;
		return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
	};

	// taken from mo.js demos
	function isTouch() {
		var isIETouch;
		isIETouch = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
		return [].indexOf.call(window, 'ontouchstart') >= 0 || isIETouch;
	};
	
	// taken from mo.js demos
	var isIOS = isIOSSafari(),
		clickHandler = isIOS || isTouch() ? 'touchstart' : 'click';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function Animocon(el, options) {
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );

		this.checked = false;

		this.timeline = new mojs.Timeline();
		
		for(var i = 0, len = this.options.tweens.length; i < len; ++i) {
			this.timeline.add(this.options.tweens[i]);
		}

		var self = this;
		this.el.addEventListener(clickHandler, function() {
			if( self.checked ) {
				self.options.onUnCheck();
			}
			else {
				self.options.onCheck();
				self.timeline.replay();
			}
			self.checked = !self.checked;
		});
	}

	Animocon.prototype.options = {
		tweens : [
			new mojs.Burst({})
		],
		onCheck : function() { return false; },
		onUnCheck : function() { return false; }
	};

	// grid items:
	var items = [].slice.call(document.querySelectorAll('ol.grid > .grid__item'));

	function init() {
		/* Icon 1 */
		var el1 = items[0].querySelector('button.icobutton'), el1span = el1.querySelector('span');
		new Animocon(el1, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 			el1,
					radius: 			{30:90},
					count: 				6,
					children : {
						fill: 			'#C0C1C3',
						opacity: 		0.6,
						radius: 		15,
						duration: 	1700,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// ring animation
				new mojs.Shape({
					parent: 		el1,
					type: 			'circle',
					radius: 		{0: 60},
					fill: 			'transparent',
					stroke: 		'#C0C1C3',
					strokeWidth: {20:0},
					opacity: 		0.6,
					duration: 	700,
					easing: 		mojs.easing.sin.out
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 1200,
					onUpdate: function(progress) {
						if(progress > 0.3) {
							var elasticOutProgress = mojs.easing.elastic.out(1.43*progress-0.43);
							el1span.style.WebkitTransform = el1span.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
						}
						else {
							el1span.style.WebkitTransform = el1span.style.transform = 'scale3d(0,0,1)';
						}
					}
				})
			],
			onCheck : function() {
				el1.style.color = '#988ADE';
			},
			onUnCheck : function() {
				el1.style.color = '#C0C1C3';	
			}
		});
		/* Icon 1 */

		/* Icon 2 */
		var el2 = items[1].querySelector('button.icobutton'), el2span = el2.querySelector('span');
		new Animocon(el2, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 		el2,
					count: 			6,
					radius: 		{ 40 : 90 },
					timeline:   { delay: 300 },
					children: {
						fill: 			'#C0C1C3',
						radius:     7,
						opacity: 		0.6,
						duration: 	1500,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// ring animation
				new mojs.Shape({
					parent: 		el2,
					radius: 		{0: 50},
					fill: 			'transparent',
					stroke: 		'#C0C1C3',
					strokeWidth: {35:0},
					opacity: 			0.6,
					duration: 		600,
					easing: mojs.easing.ease.inout
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 1100,
					onUpdate: function(progress) {
						if(progress > 0.3) {
							var elasticOutProgress = mojs.easing.elastic.out(1.43*progress-0.43);
							el2span.style.WebkitTransform = el2span.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
						}
						else {
							el2span.style.WebkitTransform = el2span.style.transform = 'scale3d(0,0,1)';
						}
					}
				})
			],
			onCheck : function() {
				el2.style.color = '#988ADE';
			},
			onUnCheck : function() {
				el2.style.color = '#C0C1C3';	
			}
		});
		/* Icon 2 */

		/* Icon 3 */
		var el3 = items[2].querySelector('button.icobutton'), el3span = el3.querySelector('span');
		new Animocon(el3, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 		el3,
					count: 			6,
					radius: 		{40:90},
					children: {
						fill: 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
						opacity: 		0.6,
						scale: 			1,
						radius:     { 7: 0 },
						duration: 	1500,
						delay: 			300,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// ring animation
				new mojs.Shape({
					parent: 			el3,
					type: 				'circle',
					scale:        { 0: 1 },
					radius: 			50,
					fill: 				'transparent',
					stroke: 			'#988ADE',
					strokeWidth: 	{35:0},
					opacity: 			0.6,
					duration:  		750,
					easing: 			mojs.easing.bezier(0, 1, 0.5, 1)
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 1100,
					onUpdate: function(progress) {
						if(progress > 0.3) {
							var elasticOutProgress = mojs.easing.elastic.out(1.43*progress-0.43);
							el3span.style.WebkitTransform = el3span.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
						}
						else {
							el3span.style.WebkitTransform = el3span.style.transform = 'scale3d(0,0,1)';
						}
					}
				})
			],
			onCheck : function() {
				el3.style.color = '#988ADE';
			},
			onUnCheck : function() {
				el3.style.color = '#C0C1C3';	
			}
		});
		/* Icon 3 */

		/* Icon 4 */
		var el4 = items[3].querySelector('button.icobutton'), el4span = el4.querySelector('span');
		var scaleCurve4 = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
		new Animocon(el4, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 	el4,
					count: 		6,
					radius: 	{40:120},
					children: {
						fill : 		[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
						opacity: 	0.6,
						radius: 	20,
						direction: [ -1, -1, -1, 1, -1 ],
						swirlSize: 'rand(10, 14)',
						duration: 1500,
						easing: 	mojs.easing.bezier(0.1, 1, 0.3, 1),
						isSwirl: 	true
					}
				}),
				// ring animation
				new mojs.Shape({
					parent: 			el4,
					radius: 			50,
					scale: 				{ 0 : 1 },
					fill: 				'transparent',
					stroke: 			'#988ADE',
					strokeWidth: 	{15:0},
					opacity: 			0.6,
					duration: 		750,
					easing: 			mojs.easing.bezier(0, 1, 0.5, 1)
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 900,
					onUpdate: function(progress) {
						var scaleProgress = scaleCurve4(progress);
						el4span.style.WebkitTransform = el4span.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
					}
				})
			],
			onCheck : function() {
				el4.style.color = '#988ADE';
			},
			onUnCheck : function() {
				el4.style.color = '#C0C1C3';	
			}
		});
		/* Icon 4 */

		/* Icon 5 */
		var el5 = items[4].querySelector('button.icobutton'), el5span = el5.querySelector('span');
		var scaleCurve5 = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
		new Animocon(el5, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 	el5,
					count: 		15,
					radius: 	{20:80},
					angle: 		{ 0: 140, easing: mojs.easing.bezier(0.1, 1, 0.3, 1) },
					children: {
						fill: 			'#988ADE',
						radius: 		20,
						opacity: 		0.6,
						duration: 	1500,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 800,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
					onUpdate: function(progress) {
						var scaleProgress = scaleCurve5(progress);
						el5span.style.WebkitTransform = el5span.style.transform = 'scale3d(' + progress + ',' + progress + ',1)';
					}
				})
			],
			onCheck : function() {
				el5.style.color = '#988ADE';
			},
			onUnCheck : function() {
				el5.style.color = '#C0C1C3';	
			}
		});
		/* Icon 5 */

		/* Icon 6 */
		var el6 = items[5].querySelector('button.icobutton'), el6span = el6.querySelector('span');
		var scaleCurve6 = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
		new Animocon(el6, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 			el6,
					radius: 			{40:110},
					count: 				20,
					children: {
						shape: 			'line',
						fill : 			'white',
						radius: 		{ 12: 0 },
						scale: 			1,
						stroke: 		'#988ADE',
						strokeWidth: 2,
						duration: 	1500,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					},
				}),
				// ring animation
				new mojs.Shape({
					parent: 			el6,
					radius: 			{10: 60},
					fill: 				'transparent',
					stroke: 			'#988ADE',
					strokeWidth: 	{30:0},
					duration: 		800,
					easing: 			mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 800,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
					onUpdate: function(progress) {
						var scaleProgress = scaleCurve6(progress);
						el6span.style.WebkitTransform = el6span.style.transform = 'scale3d(' + progress + ',' + progress + ',1)';
					}
				})
			],
			onCheck : function() {
				el6.style.color = '#988ADE';
			},
			onUnCheck : function() {
				el6.style.color = '#C0C1C3';	
			}
		});
		/* Icon 6 */

		/* Icon 7 */
		var el7 = items[6].querySelector('button.icobutton'), el7span = el7.querySelector('span');
		new Animocon(el7, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 		el7,
					radius: 		{90:150},
					count: 			18,
					children: {
						fill: 			'#988ADE',
						opacity: 		0.6,
						scale:      1,
						radius: 		{'rand(5,20)':0},
						swirlSize: 	15,
						direction:  [ 1, 1, -1, -1, 1, 1, -1, -1, -1 ],
						duration: 	1200,
						delay: 			200,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1),
						isSwirl: 		true

					}
				}),
				// ring animation
				new mojs.Shape({
					parent: 			el7,
					radius: 			{30: 100},
					fill: 				'transparent',
					stroke: 			'#988ADE',
					strokeWidth: 	{30:0},
					opacity: 			0.6,
					duration: 		1500,
					easing: 			mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				new mojs.Shape({
					parent: 		el7,
					radius: 		{30: 80},
					fill: 			'transparent',
					stroke: 		'#988ADE',
					strokeWidth: {20:0},
					opacity: 		0.3,
					duration: 	1600,
					delay: 			320,
					easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 1000,
					onUpdate: function(progress) {
						if(progress > 0.3) {
							var elasticOutProgress = mojs.easing.elastic.out(1.43*progress-0.43);
							el7span.style.WebkitTransform = el7span.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
						}
						else {
							el7span.style.WebkitTransform = el7span.style.transform = 'scale3d(0,0,1)';
						}
					}
				})
			],
			onCheck : function() {
				el7.style.color = '#988ADE';
			},
			onUnCheck : function() {
				el7.style.color = '#C0C1C3';	
			}
		});
		/* Icon 7 */

		/* Icon 8 */
		var el8 = items[7].querySelector('button.icobutton'), el8span = el8.querySelector('span');
		var scaleCurve8 = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
		new Animocon(el8, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 			el8,
					count: 				28,
					radius: 			{50:110},
					children: {
						fill: 			'#988ADE',
						opacity: 		0.6,
						radius: 		{'rand(5,20)':0},
						scale: 			1,
						swirlSize: 	15,
						duration: 	1600,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1),
						isSwirl: 		true
					}
				}),
				// burst animation
				new mojs.Burst({
					parent: 	el8,
					count: 		18,
					angle: 		{0:10},
					radius: 	{140:200},
					children: {
						fill: 			'#988ADE',
						shape: 			'line',
						opacity: 		0.6,
						radius: 		{'rand(5,20)':0},
						scale: 			1,
						stroke: 		'#988ADE',
						strokeWidth: 2,
						duration: 	1800,
						delay: 			300,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// burst animation
				new mojs.Burst({
					parent: 	el8,
					radius: 	{40:80},
					count: 		18,
					children: {
						fill: 			'#988ADE',
						opacity: 		0.6,
						radius: 		{'rand(5,20)':0},
						scale: 			1,
						swirlSize:  15,
						duration: 	2000,
						delay: 			500,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1),
						isSwirl: 		true
					}
				}),
				// burst animation
				new mojs.Burst({
					parent: 	el8,
					count: 		20,
					angle: 		{0:-10},
					radius: 	{90:130},
					children: {
						fill: 			'#988ADE',
						opacity: 		0.6,
						radius: 		{'rand(10,20)':0},
						scale: 			1,
						duration: 	3000,
						delay: 			750,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 400,
					easing: mojs.easing.back.out,
					onUpdate: function(progress) {
						var scaleProgress = scaleCurve8(progress);
						el8span.style.WebkitTransform = el8span.style.transform = 'scale3d(' + progress + ',' + progress + ',1)';
					}
				})
			],
			onCheck : function() {
				el8.style.color = '#988ADE';
			},
			onUnCheck : function() {
				el8.style.color = '#C0C1C3';	
			}
		});
		/* Icon 8 */

		/* Icon 9 */
		var el9 = items[8].querySelector('button.icobutton'), el9span = el9.querySelector('span');
		el9span.style.WebkitTransformOrigin = el9span.style.transformOrigin = '-10% 50%';
		new Animocon(el9, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 		el9,
					count: 			6,
					radius: 		{40:90},
					angle: 			135,
					degree: 		90,
					children: {
						fill : 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
						scale: 			1,
						radius: 		{ 7 : 0 },
						opacity: 		0.6,
						duration: 	1500,
						delay: 			350,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// burst animation
				new mojs.Burst({
					parent: 	el9,
					count: 		6,
					angle: 		45,
					degree:  -90,
					radius: 	{40:100},
					children: {
						fill: 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
						scale: 			1,
						radius: 		{ 7 : 0 },
						opacity: 		0.6,
						duration: 	1500,
						delay: 			550,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// ring animation
				new mojs.Shape({
					parent: 	el9,
					radius: 	{0: 50},
					fill: 		'transparent',
					stroke: 	'#988ADE',
					strokeWidth: {35:0},
					opacity: 		0.6,
					duration: 	750,
					easing: 		mojs.easing.bezier(0, 1, 0.5, 1)
				}),
				// ring animation
				new mojs.Shape({
					parent: 			el9,
					radius: 			{0: 50},
					fill: 				'transparent',
					stroke: 			'#988ADE',
					strokeWidth: 	{35:0},
					opacity: 			0.6,
					duration: 		750,
					delay: 				200,
					easing: 			mojs.easing.bezier(0, 1, 0.5, 1)
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 1500,
					onUpdate: function(progress) {
						if(progress > 0.3) {
							var elasticOutProgress = mojs.easing.elastic.out(1.43*progress-0.43);
							el9span.style.WebkitTransform = el9span.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1) rotate3d(0,0,1,' + 90*(1-elasticOutProgress) + 'deg)';
						}
						else {
							el9span.style.WebkitTransform = el9span.style.transform = 'scale3d(0,0,1)';
						}
					}
				})
			],
			onCheck : function() {
				el9.style.color = '#988ADE';
			},
			onUnCheck : function() {
				el9.style.color = '#C0C1C3';	
			}
		});
		/* Icon 9 */

		/* Icon 10 */
		var el10 = items[9].querySelector('button.icobutton'), el10span = el10.querySelector('span'), el10counter = el10.querySelector('span.icobutton__text');
		var opacityCurve10 = mojs.easing.path('M1,0 C1,0 26,100 51,100 C76,100 101,0 101,0');
		var translationCurve10 = mojs.easing.path('M0,100 C0,0 50,0 50,0 L50,100 L50,200 C50,200 50,100 100,100');
		var colorCurve10 = mojs.easing.path('M0,100 L50,100 L50,0 L100,0');
		new Animocon(el10, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 			el10,
					radius: 			{80:130},
					degree: 			90,
					angle: 				135,
					count: 				6,
					children: {
						shape: 				'line',
						fill: 				'#C0C1C3',
						scale: 				1,
						radius: 			{30:0},
						opacity: 			0.6,
						duration: 		600,
						stroke: 			'#6F97F7',
						strokeWidth: 	{1:2},
						easing: 			mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 400,
					easing: mojs.easing.ease.out,
					onUpdate: function(progress) {
						var opacityProgress = opacityCurve10(progress);
						el10span.style.opacity = opacityProgress;
						
						var translationProgress = translationCurve10(progress);
						el10span.style.WebkitTransform = el10span.style.transform = 'translate3d(0,' + -150 * translationProgress + '%,0)';
						
						var colorProgress = colorCurve10(progress);
						el10.style.color = colorProgress ? '#6F97F7' : '#C0C1C3';
					}
				})
			],
			onCheck : function() {
				el10counter.innerHTML = Number(el10counter.innerHTML) + 1;
			},
			onUnCheck : function() {
				el10.style.color = '#C0C1C3';

				var current = Number(el10counter.innerHTML);
				el10counter.innerHTML = current > 1 ? Number(el10counter.innerHTML) - 1 : '';
			}
		});
		/* Icon 10 */

		/* Icon 11 */
		var el11 = items[10].querySelector('button.icobutton'), el11span = el11.querySelector('span');
		var opacityCurve11 = mojs.easing.path('M0,0 C0,87 27,100 40,100 L40,0 L100,0');
		var scaleCurve11 = mojs.easing.path('M0,0c0,80,39.2,100,39.2,100L40-100c0,0-0.7,106,60,106');
		new Animocon(el11, {
			tweens : [
				// ring animation
				new mojs.Shape({
					parent: 		el11,
					radius: 		{0: 95},
					fill: 			'transparent',
					stroke: 		'#C0C1C3',
					strokeWidth: {50:0},
					opacity: 		0.4,
					duration: 	1000,
					delay: 			100,
					easing: 		mojs.easing.bezier(0, 1, 0.5, 1)
				}),
				// ring animation
				new mojs.Shape({
					parent: 	el11,
					radius: 	{0: 80},
					fill: 		'transparent',
					stroke: 	'#C0C1C3',
					strokeWidth: {40:0},
					opacity: 	0.2,
					duration: 1800,
					delay: 		300,
					easing: 	mojs.easing.bezier(0, 1, 0.5, 1)
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 1300,
					easing: mojs.easing.ease.out,
					onUpdate: function(progress) {
						var opacityProgress = opacityCurve11(progress);
						el11span.style.opacity = opacityProgress;

						var scaleProgress = scaleCurve11(progress);
						el11span.style.WebkitTransform = el11span.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';

						var colorProgress = opacityCurve11(progress);
						el11.style.color = colorProgress >= 1 ? '#E87171' : '#C0C1C3';
					}
				})
			],
			onUnCheck : function() {
				el11.style.color = '#C0C1C3';	
			}
		});
		/* Icon 11 */

		/* Icon 12 */ 
		var el12 = items[11].querySelector('button.icobutton'), el12span = el12.querySelector('span');
		var opacityCurve12 = mojs.easing.path('M0,100 L20,100 L20,1 L100,1');
		var translationCurve12 = mojs.easing.path('M0,100h20V0c0,0,0.2,101,80,101');
		new Animocon(el12, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 	el12,
					count: 		2,
					radius: 	{10:90},
					angle: 		92,
					top: 					'90%',
					children: {
						shape: 				'line',
						fill: 				'#C0C1C3',
						scale: 				1,
						radius: 			{40:0},
						stroke: 			'#C0C1C3',
						strokeWidth: 	{4:1},
						strokeLinecap:'round',
						opacity: 			0.5,
						duration: 		500,
						delay: 				200,
						easing: 			mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// burst animation
				new mojs.Burst({
					parent: 			el12,
					count: 				3,
					radius: 			{10:40},
					angle: 				182,
					top: 					'90%',
					children: {
						shape: 			'line',
						fill: 			'#C0C1C3',
						opacity: 		0.5,
						scale: 			1,
						radius: 		{10:0},
						stroke: 		'#C0C1C3',
						strokeWidth:{4:1},
						strokeLinecap: 'round',
						duration: 	600,
						delay: 			200,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// ring animation
				new mojs.Shape({
					parent: el12,
					radius: 	{40: 0},
					radiusY: 	{20: 0},
					fill: 		'#C0C1C3',
					stroke: 	'#C0C1C3',
					strokeWidth: 1,
					opacity: 	0.3,
					top: 			'90%',
					duration: 400,
					delay: 		100,
					easing: 	'bounce.out'
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 500,
					easing: mojs.easing.bounce.out,
					onUpdate: function(progress) {
						var translationProgress = translationCurve12(progress);
						el12span.style.WebkitTransform = el12span.style.transform = 'translate3d(0,' + -450 * translationProgress + '%,0)';

						var colorProgress = opacityCurve12(progress);
						el12.style.color = colorProgress ? '#99D892' : '#C0C1C3';
					}
				})
			],
			onUnCheck : function() {
				el12.style.color = '#C0C1C3';	
			}
		});
		/* Icon 12 */

		/* Icon 13 */
		var el13 = items[12].querySelector('button.icobutton'), el13span = el13.querySelector('span');
		new Animocon(el13, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: 	el13,
					count: 		3,
					degree: 	0,
					radius: 	{80:250},
					angle:   -90,
					children: {
						top: 			[ 0, 45, 0 ],
						left: 		[ -25, 0, 25 ],
						shape: 		'line',
						fill: 		'#C0C1C3',
						radius: 	{60:0},
						scale: 		1,
						stroke: 	'#988ADE',
						opacity:  0.6,
						duration: 650,
						easing: 	mojs.easing.bezier(0.1, 1, 0.3, 1)
					},
				}),
				// burst animation
				new mojs.Burst({
					parent: el13,
					count: 	6,
					radius: {60:90},
					degree: -90,
					angle: 	135,
					children: { 
						shape: 				'line',
						radius: 			{30:0},
						scale: 				1,
						stroke: 			'#988ADE',
						strokeWidth: 	{2:1},
						duration: 		600,
						delay: 				200,
						easing: 			mojs.easing.bezier(0.1, 1, 0.3, 1)
					},
				}),
				// icon scale animation
				new mojs.Tween({
					duration: 1200,
					onUpdate: function(progress) {
						var elasticOutProgress = mojs.easing.elastic.out(progress);
						el13span.style.WebkitTransform = el13span.style.transform = 'translate3d(' + -75*(1-elasticOutProgress) + '%,0,0)';
					}
				})
			],
			onCheck : function() {
				el13.style.color = '#988ADE';
			},
			onUnCheck : function() {
				el13.style.color = '#C0C1C3';	
			}
		});
		/* Icon 13 */

		/* Icon 14 */
		var el14 = items[13].querySelector('button.icobutton'), el14span = el14.querySelector('span'), el14counter = el14.querySelector('span.icobutton__text');
		new Animocon(el14, {
			tweens : [
				// ring animation
				new mojs.Shape({
					parent: el14,
					duration: 750,
					type: 'circle',
					radius: {0: 40},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {35:0},
					opacity: 0.2,
					top: '45%',
					easing: mojs.easing.bezier(0, 1, 0.5, 1)
				}),
				new mojs.Shape({
					parent: el14,
					duration: 500,
					delay: 100,
					type: 'circle',
					radius: {0: 20},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.2,
					x : 40, 
					y : -60,
					easing: mojs.easing.sin.out
				}),
				new mojs.Shape({
					parent: el14,
					duration: 500,
					delay: 180,
					type: 'circle',
					radius: {0: 10},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.5,
					x: -10, 
					y: -80,
					isRunLess: true,
					easing: mojs.easing.sin.out
				}),
				new mojs.Shape({
					parent: el14,
					duration: 800,
					delay: 240,
					type: 'circle',
					radius: {0: 20},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.3,
					x: -70, 
					y: -10,
					easing: mojs.easing.sin.out
				}),
				new mojs.Shape({
					parent: el14,
					duration: 800,
					delay: 240,
					type: 'circle',
					radius: {0: 20},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.4,
					x: 80, 
					y: -50,
					easing: mojs.easing.sin.out
				}),
				new mojs.Shape({
					parent: el14,
					duration: 1000,
					delay: 300,
					type: 'circle',
					radius: {0: 15},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.2,
					x: 20, 
					y: -100,
					easing: mojs.easing.sin.out
				}),
				new mojs.Shape({
					parent: el14,
					duration: 600,
					delay: 330,
					type: 'circle',
					radius: {0: 25},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.4,
					x: -40, 
					y: -90,
					easing: mojs.easing.sin.out
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 1200,
					easing: mojs.easing.ease.out,
					onUpdate: function(progress) {
						if(progress > 0.3) {
							var elasticOutProgress = mojs.easing.elastic.out(1.43*progress-0.43);
							el14span.style.WebkitTransform = el14span.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
						}
						else {
							el14span.style.WebkitTransform = el14span.style.transform = 'scale3d(0,0,1)';
						}
					}
				})
			],
			onCheck : function() {
				el14.style.color = '#F35186';
				el14counter.innerHTML = Number(el14counter.innerHTML) + 1;
			},
			onUnCheck : function() {
				el14.style.color = '#C0C1C3';
				var current = Number(el14counter.innerHTML);
				el14counter.innerHTML = current > 1 ? Number(el14counter.innerHTML) - 1 : '';
			}
		});
		/* Icon 14 */

		/* Icon 15 */
		var el15 = items[14].querySelector('button.icobutton'), el15span = el15.querySelector('span');
		var opacityCurve15 = mojs.easing.path('M1,0 C1,0 26,100 51,100 C76,100 101,0 101,0');
		var translationCurve15 = mojs.easing.path('M0,100 C0,0 50,0 50,0 L50,100 L50,200 C50,200 50,100 100,100');
		var colorCurve15 = mojs.easing.path('M0,100 L50,100 L50,0 L100,0');
		new Animocon(el15, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: el15,
					top: '90%',
					count: 1,
					radius: {30:100},
					degree: 20,
					angle: -90,
					children: {
						shape: 'line',
						fill: '#C0C1C3',
						radius: {60:0},
						scale: 	1,
						stroke: '#9BBADC',
						opacity: .6,
						// strokeWidth: 1,
						duration: 600,
						easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
					},
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 400,
					easing: mojs.easing.ease.inout,
					onUpdate: function(progress) {
						var opacityProgress = opacityCurve15(progress);
						el15span.style.opacity = opacityProgress;

						var translationProgress = translationCurve15(progress);
						el15span.style.WebkitTransform = el15span.style.transform = 'translate3d(' + 350 * translationProgress + '%,0,0)';

						var colorProgress = colorCurve15(progress);
						el15.style.color = colorProgress ? '#9BBADC' : '#C0C1C3';
					}
				})
			],
			onUnCheck : function() {
				el15.style.color = '#C0C1C3';
			}
		});
		/* Icon 15 */

		/* Icon 16 */
		var el16 = items[15].querySelector('button.icobutton'), el16span = el16.querySelector('span');
		var opacityCurve16 = mojs.easing.path('M0,0 L25.333,0 L75.333,100 L100,0');
		var translationCurve16 = mojs.easing.path('M0,100h25.3c0,0,6.5-37.3,15-56c12.3-27,35-44,35-44v150c0,0-1.1-12.2,9.7-33.3c9.7-19,15-22.9,15-22.9');
		var squashCurve16 = mojs.easing.path('M0,100.004963 C0,100.004963 25,147.596355 25,100.004961 C25,70.7741867 32.2461944,85.3230873 58.484375,94.8579105 C68.9280825,98.6531013 83.2611815,99.9999999 100,100');
		new Animocon(el16, {
			tweens : [
				// burst animation (circles)
				new mojs.Burst({
					parent: 		el16,
					count: 			6,
					radius: 		{0:150},
					degree: 		50,
					angle:      -25,
					opacity: 		0.3,
					children: {
						fill: 			'#FF6767',
						scale: 			1,
						radius: 		{'rand(5,15)':0},
						duration: 	1700,
						delay: 			350,
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				new mojs.Burst({
					parent: 	el16,
					count: 		3,
					degree: 	0,
					radius: 	{80:250},
					angle:   	180,
					children: {
						top: 			[ 45, 0, 45 ],
						left: 		[ -15, 0, 15 ],
						shape: 		'line',
						radius: 	{60:0},
						scale: 		1,
						stroke: 	'#FF6767',
						opacity:  0.4,
						duration: 650,
						delay: 		200,
						easing: 	mojs.easing.bezier(0.1, 1, 0.3, 1)
					},
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 500,
					onUpdate: function(progress) {
						var translateProgress = translationCurve16(progress),
							squashProgress = squashCurve16(progress),
							scaleX = 1 - 2*squashProgress,
							scaleY = 1 + 2*squashProgress;

						el16span.style.WebkitTransform = el16span.style.transform = 'translate3d(0,' + -180*translateProgress + 'px,0) scale3d(' + scaleX + ',' + scaleY + ',1)';

						var opacityProgress = opacityCurve16(progress);
						el16span.style.opacity = opacityProgress;

						el16.style.color = progress >= 0.75 ? '#FF6767' : '#C0C1C3';
					}
				})
			],
			onUnCheck : function() {
				el16.style.color = '#C0C1C3';
			}
		});
		/* Icon 16 */

		/* Icon 17 */
		var el17 = items[16].querySelector('button.icobutton'), el17SVG = el17.querySelector('svg');
		var translationCurve17 = mojs.easing.path('M0,100 C0,72 10,-0.1 50,0 C89.6,0.1 100,72 100,100');
		new Animocon(el17, {
			tweens : [
				// burst animation (line1)
				new mojs.Burst({
					parent: el17,
					left: '65%', top: '40%',
					count: 		5,
					radius: 	{40:120},
					angle: 		69,
					degree:   17,
					children: {
						shape: 				'line',
						scale: 				1,	
						radius: 			{20:0},
						stroke: 			['#bf62a6', '#f28c33', '#f5d63d', '#79c267', '#78c5d6'],
						duration: 		600,
						easing: 			mojs.easing.bezier(0.1, 1, 0.3, 1)
					},
				}),
				// burst animation (circles)
				new mojs.Burst({
					parent: el17,
					left: '65%', top: '40%',
					count: 		4,
					radius: 	{20:50},
					degree: 	20,
					angle: 		70,
					opacity: 	0.6,
					children: {
						fill: 			['#bf62a6','#f28c33','#f5d63d','#79c267','#78c5d6'],
						scale: 			1,
						radius: 		{'rand(5,20)':0},
						isSwirl: 		true,
						swirlSize: 	4,
						duration: 	1600,
						delay: 			[0,350,200,150,400],
						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
					}
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 800,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
					onUpdate: function(progress) {
						var translationProgress = translationCurve17(progress);
							el17SVG.style.WebkitTransform = el17SVG.style.transform = 'translate3d(' + -20 * translationProgress + '%,0,0)';	
					}
				})
			],
			onCheck : function() {
				el17SVG.style.fill = '#F198CA';
			},
			onUnCheck : function() {
				el17SVG.style.fill = '#C0C1C3';
			}
		});
		/* Icon 17 */
		
		// bursts when hovering the mo.js link
		var molinkEl = document.querySelector('.special-link'),
			moTimeline = new mojs.Timeline(),
			moburst1 = new mojs.Burst({
				parent: 			molinkEl,
				count: 				6,
				left: 				'0%',
				top:  				'-50%',
				radius: 			{0:60},
				children: {
					fill : 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
					duration: 	1300,
					easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
				}
			}),
			moburst2 = new mojs.Burst({
				parent: 	molinkEl,
				left: '-100%', top: '-20%',
				count: 		14,
				radius: 		{0:120},
				children: {
					fill: 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
					duration: 	1600,
					delay: 			100,
					easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
				}
			}),
			moburst3 = new mojs.Burst({
				parent: 			molinkEl,
				left: '130%', top: '-70%',
				count: 				8,
				radius: 			{0:90},
				children: {
					fill: 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
					duration: 	1500,
					delay: 			200,
					easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
				}
			}),
			moburst4 = new mojs.Burst({
				parent: molinkEl,
				left: '-20%', top: '-150%',
				count: 		14,
				radius: 	{0:60},
				children: {
					fill: 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
					duration: 	2000,
					delay: 			300,
					easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
				}
			}),
			moburst5 = new mojs.Burst({
				parent: 	molinkEl,
				count: 		12,
				left: '30%', top: '-100%',
				radius: 		{0:60},
				children: {
					fill: 			[ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
					duration: 	1400,
					delay: 			400,
					easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
				}
			});

		moTimeline.add(moburst1, moburst2, moburst3, moburst4, moburst5);
		molinkEl.addEventListener('mouseenter', function() {
			moTimeline.replay();
		});
	}
	
	init();

})(window);