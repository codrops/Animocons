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
				self.timeline.start();
			}
			self.checked = !self.checked;
		});
	}

	Animocon.prototype.options = {
		tweens : [
			new mojs.Burst({
				shape : 'circle',
				isRunLess: true
			})
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
					parent: el1,
					duration: 1700,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '50%',
					y: '50%',
					opacity: 0.6,
					childOptions: { radius: {15:0} },
					radius: {30:90},
					count: 6,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// ring animation
				new mojs.Transit({
					parent: el1,
					duration: 700,
					type: 'circle',
					radius: {0: 60},
					fill: 'transparent',
					stroke: '#C0C1C3',
					strokeWidth: {20:0},
					opacity: 0.6,
					x: '50%',     
					y: '50%',
					isRunLess: true,
					easing: mojs.easing.sin.out
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
					parent: el2,
					duration: 1500,
					delay: 300,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '50%',
					y: '50%',
					opacity: 0.6,
					radius: {40:90},
					count: 6,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// ring animation
				new mojs.Transit({
					parent: el2,
					duration: 600,
					type: 'circle',
					radius: {0: 50},
					fill: 'transparent',
					stroke: '#C0C1C3',
					strokeWidth: {35:0},
					opacity: 0.6,
					x: '50%',     
					y: '50%',
					isRunLess: true,
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
					parent: el3,
					duration: 1500,
					delay: 300,
					shape : 'circle',
					fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
					x: '50%',
					y: '50%',
					opacity: 0.6,
					radius: {40:90},
					count: 6,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// ring animation
				new mojs.Transit({
					parent: el3,
					duration: 750,
					type: 'circle',
					radius: {0: 50},
					fill: 'transparent',
					stroke: '#988ADE',
					strokeWidth: {35:0},
					opacity: 0.6,
					x: '50%',     
					y: '50%',
					isRunLess: true,
					easing: mojs.easing.bezier(0, 1, 0.5, 1)
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
					parent: el4,
					duration: 1500,
					shape : 'circle',
					fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
					x: '50%',
					y: '50%',
					opacity: 0.6,
					childOptions: { radius: {20:0} },
					radius: {40:120},
					count: 6,
					isSwirl: true,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// ring animation
				new mojs.Transit({
					parent: el4,
					duration: 750,
					type: 'circle',
					radius: {0: 50},
					fill: 'transparent',
					stroke: '#988ADE',
					strokeWidth: {15:0},
					opacity: 0.6,
					x: '50%',     
					y: '50%',
					isRunLess: true,
					easing: mojs.easing.bezier(0, 1, 0.5, 1)
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
					parent: el5,
					duration: 1500,
					shape : 'circle',
					fill : '#988ADE',
					x: '50%',
					y: '50%',
					opacity: 0.6,
					childOptions: { radius: {20:0} },
					radius: {20:80},
					angle: {0: 140},
					count: 15,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
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
					parent: el6,
					duration: 1500,
					shape : 'circle',
					fill : 'white',
					x: '50%',
					y: '50%',
					childOptions: { 
						radius: {12:0},
						type: 'line',
						stroke: '#988ADE',
						strokeWidth: 2
					},
					radius: {40:110},
					count: 20,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// ring animation
				new mojs.Transit({
					parent: el6,
					duration: 800,
					type: 'circle',
					radius: {10: 60},
					fill: 'transparent',
					stroke: '#988ADE',
					strokeWidth: {30:0},
					x: '50%',     
					y: '50%',
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
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
					parent: el7,
					duration: 1200,
					delay: 200,
					shape : 'circle',
					fill: '#988ADE',
					x: '50%',
					y: '50%',
					opacity: 0.6,
					childOptions: { radius: {'rand(20,5)':0} },
					radius: {90:150},
					count: 18,
					isSwirl: true,
					swirlSize: 15,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// ring animation
				new mojs.Transit({
					parent: el7,
					duration: 1500,
					type: 'circle',
					radius: {30: 100},
					fill: 'transparent',
					stroke: '#988ADE',
					strokeWidth: {30:0},
					opacity: 0.6,
					x: '50%',     
					y: '50%',
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				new mojs.Transit({
					parent: el7,
					duration: 1600,
					delay: 320,
					type: 'circle',
					radius: {30: 80},
					fill: 'transparent',
					stroke: '#988ADE',
					strokeWidth: {20:0},
					opacity: 0.3,
					x: '50%',     
					y: '50%',
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
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
					parent: el8,
					duration: 1600,
					shape : 'circle',
					fill: '#988ADE',
					x: '50%',
					y: '50%',
					opacity: 0.6,
					childOptions: { radius: {'rand(20,5)':0} },
					radius: {50:110},
					count: 28,
					isSwirl: true,
					swirlSize: 15,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation
				new mojs.Burst({
					parent: el8,
					duration: 1800,
					delay: 300,
					shape : 'circle',
					fill: '#988ADE',
					x: '50%',
					y: '50%',
					opacity: 0.6,
					childOptions: { 
						radius: {'rand(20,5)':0},
						type: 'line',
						stroke: '#988ADE',
						strokeWidth: 2
					},
					angle: {0:10},
					radius: {140:200},
					count: 18,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation
				new mojs.Burst({
					parent: el8,
					duration: 2000,
					delay: 500,
					shape : 'circle',
					fill: '#988ADE',
					x: '50%',
					y: '50%',
					opacity: 0.6,
					childOptions: { radius: {'rand(20,5)':0} },
					radius: {40:80},
					count: 18,
					isSwirl: true,
					swirlSize: 15,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation
				new mojs.Burst({
					parent: el8,
					duration: 3000,
					delay: 750,
					shape : 'circle',
					fill: '#988ADE',
					x: '50%',
					y: '50%',
					opacity: 0.6,
					childOptions: { 
						radius: {'rand(20,10)':0}
					},
					angle: {0:-10},
					radius: {90:130},
					count: 20,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
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
					parent: el9,
					duration: 1500,
					delay: 350,
					shape : 'circle',
					fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
					x: '50%',
					y: '50%',
					opacity: 0.6,
					radius: {40:90},
					count: 6,
					angle: 135,
					degree: 90,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation
				new mojs.Burst({
					parent: el9,
					duration: 1500,
					delay: 550,
					shape : 'circle',
					fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
					x: '50%',
					y: '50%',
					opacity: 0.6,
					radius: {40:100},
					count: 6,
					angle: 45,
					degree: -90,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// ring animation
				new mojs.Transit({
					parent: el9,
					duration: 750,
					type: 'circle',
					radius: {0: 50},
					fill: 'transparent',
					stroke: '#988ADE',
					strokeWidth: {35:0},
					opacity: 0.6,
					x: '50%',     
					y: '50%',
					isRunLess: true,
					easing: mojs.easing.bezier(0, 1, 0.5, 1)
				}),
				// ring animation
				new mojs.Transit({
					parent: el9,
					duration: 750,
					delay: 200,
					type: 'circle',
					radius: {0: 50},
					fill: 'transparent',
					stroke: '#988ADE',
					strokeWidth: {35:0},
					opacity: 0.6,
					x: '50%',     
					y: '50%',
					isRunLess: true,
					easing: mojs.easing.bezier(0, 1, 0.5, 1)
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
					parent: el10,
					duration: 600,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '50%',
					y: '50%',
					opacity: 0.6,
					childOptions: { 
						radius: {30:0},
						type: 'line',
						stroke: '#6F97F7',
						strokeWidth: {1:2}
					},
					radius: {80:130},
					degree: 90,
					angle: 135,
					count: 6,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
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
				new mojs.Transit({
					parent: el11,
					duration: 1000,
					delay: 100,
					type: 'circle',
					radius: {0: 95},
					fill: 'transparent',
					stroke: '#C0C1C3',
					strokeWidth: {50:0},
					opacity: 0.4,
					x: '50%',     
					y: '50%',
					isRunLess: true,
					easing: mojs.easing.bezier(0, 1, 0.5, 1)
				}),
				// ring animation
				new mojs.Transit({
					parent: el11,
					duration: 1800,
					delay: 300,
					type: 'circle',
					radius: {0: 80},
					fill: 'transparent',
					stroke: '#C0C1C3',
					strokeWidth: {40:0},
					opacity: 0.2,
					x: '50%',     
					y: '50%',
					isRunLess: true,
					easing: mojs.easing.bezier(0, 1, 0.5, 1)
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
					parent: el12,
					duration: 500,
					delay: 200,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '50%',
					y: '90%',
					opacity: 0.5,
					childOptions: { 
						radius: {40:0},
						type: 'line',
						stroke: '#C0C1C3',
						strokeWidth: {4:1},
						strokeLinecap: 'round'
					},
					radius: {10:90},
					angle: 92,
					count: 2,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation
				new mojs.Burst({
					parent: el12,
					duration: 600,
					delay: 200,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '50%',
					y: '90%',
					opacity: 0.5,
					childOptions: { 
						radius: {10:0},
						type: 'line',
						stroke: '#C0C1C3',
						strokeWidth: {4:1},
						strokeLinecap: 'round'
					},
					radius: {10:40},
					angle: 182,
					count: 3,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// ring animation
				new mojs.Transit({
					parent: el12,
					duration: 400,
					delay: 100,
					type: 'circle',
					radius: {40: 0},
					radiusY: {20: 0},
					fill: '#C0C1C3',
					stroke: '#C0C1C3',
					strokeWidth: 1,
					opacity: 0.3,
					x: '50%',     
					y: '90%',
					isRunLess: true,
					easing: mojs.easing.bounce.out
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
					parent: el13,
					duration: 600,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '0%',
					y: '0%',
					childOptions: { 
						radius: {60:0},
						type: 'line',
						stroke: '#988ADE',
						strokeWidth: 1
					},
					radius: {80:250},
					angle: -90,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation
				new mojs.Burst({
					parent: el13,
					duration: 600,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '0%',
					y: '50%',
					childOptions: { 
						radius: {60:0},
						type: 'line',
						stroke: '#988ADE',
						strokeWidth: 1
					},
					radius: {80:200},
					angle: -90,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation
				new mojs.Burst({
					parent: el13,
					duration: 600,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '0%',
					y: '100%',
					childOptions: { 
						radius: {60:0},
						type: 'line',
						stroke: '#988ADE',
						strokeWidth: 1
					},
					radius: {80:250},
					angle: -90,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation
				new mojs.Burst({
					parent: el13,
					duration: 600,
					delay: 150,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '50%',
					y: '50%',
					childOptions: { 
						radius: {30:0},
						type: 'line',
						stroke: '#988ADE',
						strokeWidth: {2:1}
					},
					radius: {60:90},
					degree: -90,
					angle: 135,
					count: 6,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 1000,
					onUpdate: function(progress) {
						var elasticOutProgress = mojs.easing.elastic.out(progress);
						el13span.style.WebkitTransform = el13span.style.transform = 'translate3d(' + -50*(1-elasticOutProgress) + '%,0,0)';
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
				new mojs.Transit({
					parent: el14,
					duration: 750,
					type: 'circle',
					radius: {0: 40},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {35:0},
					opacity: 0.2,
					x: '50%',     
					y: '45%',
					isRunLess: true,
					easing: mojs.easing.bezier(0, 1, 0.5, 1)
				}),
				new mojs.Transit({
					parent: el14,
					duration: 500,
					delay: 100,
					type: 'circle',
					radius: {0: 20},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.2,
					x: '50%', 
					y: '50%',
					shiftX : 40, 
					shiftY : -60,
					isRunLess: true,
					easing: mojs.easing.sin.out
				}),
				new mojs.Transit({
					parent: el14,
					duration: 500,
					delay: 180,
					type: 'circle',
					radius: {0: 10},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.5,
					x: '50%', 
					y: '50%',
					shiftX : -10, 
					shiftY : -80,
					isRunLess: true,
					easing: mojs.easing.sin.out
				}),
				new mojs.Transit({
					parent: el14,
					duration: 800,
					delay: 240,
					type: 'circle',
					radius: {0: 20},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.3,
					x: '50%', 
					y: '50%',
					shiftX : -70, 
					shiftY : -10,
					isRunLess: true,
					easing: mojs.easing.sin.out
				}),
				new mojs.Transit({
					parent: el14,
					duration: 800,
					delay: 240,
					type: 'circle',
					radius: {0: 20},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.4,
					x: '50%', 
					y: '50%',
					shiftX : 80, 
					shiftY : -50,
					isRunLess: true,
					easing: mojs.easing.sin.out
				}),
				new mojs.Transit({
					parent: el14,
					duration: 1000,
					delay: 300,
					type: 'circle',
					radius: {0: 15},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.2,
					x: '50%', 
					y: '50%',
					shiftX : 20, 
					shiftY : -100,
					isRunLess: true,
					easing: mojs.easing.sin.out
				}),
				new mojs.Transit({
					parent: el14,
					duration: 600,
					delay: 330,
					type: 'circle',
					radius: {0: 25},
					fill: 'transparent',
					stroke: '#F35186',
					strokeWidth: {5:0},
					opacity: 0.4,
					x: '50%', 
					y: '50%',
					shiftX : -40, 
					shiftY : -90,
					isRunLess: true,
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
					duration: 600,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '50%',
					y: '90%',
					childOptions: { 
						radius: {60:0},
						type: 'line',
						stroke: '#9BBADC',
						strokeWidth: 1
					},
					radius: {30:100},
					degree: 20,
					angle: -90,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
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
					parent: el16,
					duration: 1700,
					delay: 350,
					shape : 'circle',
					fill: '#FF6767',
					x: '50%',
					y: '50%',
					opacity: 0.3,
					childOptions: { radius: {'rand(15,5)':0} },
					radius: {0:150},
					degree: 50,
					angle: -25,
					count: 6,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation (line1)
				new mojs.Burst({
					parent: el16,
					duration: 600,
					delay: 200,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '20%',
					y: '100%',
					childOptions: { 
						radius: {60:0},
						type: 'line',
						stroke: '#FF6767',
						strokeWidth: 2,
						strokeLinecap: 'round'
					},
					radius: {50:180},
					angle: 180,
					count: 1,
					opacity: 0.4,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation (line2)
				new mojs.Burst({
					parent: el16,
					duration: 600,
					delay: 200,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '50%',
					y: '100%',
					childOptions: { 
						radius: {60:0},
						type: 'line',
						stroke: '#FF6767',
						strokeWidth: 2,
						strokeLinecap: 'round'
					},
					radius: {50:220},
					angle: 180,
					count: 1,
					opacity: 0.4,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation (line3)
				new mojs.Burst({
					parent: el16,
					duration: 600,
					delay: 200,
					shape : 'circle',
					fill: '#C0C1C3',
					x: '80%',
					y: '100%',
					childOptions: { 
						radius: {60:0},
						type: 'line',
						stroke: '#FF6767',
						strokeWidth: 2,
						strokeLinecap: 'round'
					},
					radius: {50:180},
					angle: 180,
					count: 1,
					opacity: 0.4,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
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
					duration: 600,
					shape : 'circle',
					x: '65%',
					y: '40%',
					childOptions: { 
						radius: {20:0},
						type: 'line',
						stroke: '#bf62a6',
						strokeWidth: 2
					},
					radius: {40:120},
					angle: 70,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation (line2)
				new mojs.Burst({
					parent: el17,
					duration: 600,
					shape : 'circle',
					x: '65%',
					y: '40%',
					childOptions: { 
						radius: {20:0},
						type: 'line',
						stroke: '#f28c33',
						strokeWidth: 2
					},
					radius: {40:120},
					angle: 74,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation (line3)
				new mojs.Burst({
					parent: el17,
					duration: 600,
					shape : 'circle',
					x: '65%',
					y: '40%',
					childOptions: { 
						radius: {20:0},
						type: 'line',
						stroke: '#f5d63d',
						strokeWidth: 2
					},
					radius: {40:120},
					angle: 78,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation (line4)
				new mojs.Burst({
					parent: el17,
					duration: 600,
					shape : 'circle',
					x: '65%',
					y: '40%',
					childOptions: { 
						radius: {20:0},
						type: 'line',
						stroke: '#79c267',
						strokeWidth: 2
					},
					radius: {40:120},
					angle: 82,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation (line5)
				new mojs.Burst({
					parent: el17,
					duration: 600,
					shape : 'circle',
					x: '65%',
					y: '40%',
					childOptions: { 
						radius: {20:0},
						type: 'line',
						stroke: '#78c5d6',
						strokeWidth: 2
					},
					radius: {40:120},
					angle: 86,
					count: 1,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// burst animation (circles)
				new mojs.Burst({
					parent: el17,
					duration: 1600,
					shape : 'circle',
					x: '65%',
					y: '40%',
					fill: ['#bf62a6','#f28c33','#f5d63d','#79c267','#78c5d6'],
					childOptions: { 
						radius: {'rand(20,5)':0},
						delay: [0,350,200,150,400]
					},
					radius: {20:50},
					degree: 20,
					angle: 70,
					isSwirl: true,
					swirlSize: 4,
					count: 4,
					opacity: 0.6,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
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
				parent: molinkEl,
				duration: 1300,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: '0%',
				y: '-50%',
				radius: {0:60},
				count: 6,
				isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			}),
			moburst2 = new mojs.Burst({
				parent: molinkEl,
				duration: 1600,
				delay: 100,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: '-100%',
				y: '-20%',
				radius: {0:120},
				count: 14,
				isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			}),
			moburst3 = new mojs.Burst({
				parent: molinkEl,
				duration: 1500,
				delay: 200,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: '130%',
				y: '-70%',
				radius: {0:90},
				count: 8,
				isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			}),
			moburst4 = new mojs.Burst({
				parent: molinkEl,
				duration: 2000,
				delay: 300,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: '-20%',
				y: '-150%',
				radius: {0:60},
				count: 14,
				isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			}),
			moburst5 = new mojs.Burst({
				parent: molinkEl,
				duration: 1400,
				delay: 400,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: '30%',
				y: '-100%',
				radius: {0:60},
				count: 12,
				isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			});

		moTimeline.add(moburst1, moburst2, moburst3, moburst4, moburst5);
		molinkEl.addEventListener('mouseenter', function() {
			moTimeline.start();
		});
	}
	
	init();

})(window);