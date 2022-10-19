(function($){
  "use strict";
  
  // Preloader 
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(350).fadeOut("slow");
	});
	
	// on ready function
	jQuery(document).ready(function($) {
	var $this = $(window);
	
	// Back to Top js
	$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
	$('#scroll').on("click", function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
	
	// Menu show Hide
	var counter = 0;
	$('.wd_menu_btn').on("click", function(e){
		if( counter == '0') {
			$('.wd_main_menu_wrapper').addClass('wd_main_menu_hide');
			$(this).children().removeAttr('class');
			$(this).children().attr('class','fa fa-close');
			counter++;
		}
		else {
			$('.wd_main_menu_wrapper').removeClass('wd_main_menu_hide');
			$(this).children().removeAttr('class');
			$(this).children().attr('class','fa fa-bars');
			counter--;
		}		
	});
	
	// Menu js for Position fixed
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
		if (window_top > 500) {
			$('.wd_header_wrapper').addClass('menu_fixed animated fadeInDown');
		} else {
			$('.wd_header_wrapper').removeClass('menu_fixed animated fadeInDown');
		}
	});
	
	// Guest Slider Js
	$('.wd_guest_slider .owl-carousel').owlCarousel({
		loop:true,
		margin:45,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
	
	// Testimonial Slider Js
	$('.wd_testimonial_slider .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
	// Family Slider Js
	$('.wd_family_slider .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["<i class='fa fa-angle-left'></i>" , "<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});
	
	// Gallery Slider js
	$('.wd_gallery_slider .owl-carousel').owlCarousel({
		animateOut: 'fadeOut',
		loop:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
	// Magnific Popup js
	$('.popup-gallery').magnificPopup({
		delegate: '.ast_glr_overlay a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
	
	// Contact Form Submition
//	$("#wd_submit").on("click", function() {
//		var e = $("#uname").val();
//		var t = $("#umail").val();
//		var r = $("#msg").val();
//		var n = $("#unum").val();
//		$.ajax({
//			type: "POST",
//			url: "liuyan.php",
//			data: {
//				username: e,
//				useremail: t,
//				mesg: r,
//				unum: n
//			},
//			success: function(n) {
//				var i = n.split("#");
//				if (i[0] == "1") {
//					$("#uname").val("");
//					$("#umail").val("");
//					$("#msg").val("");
//					$("#unum").val("");
//					$("#err").html(i[1]);
//				} else {
//					$("#uname").val(e);
//					$("#umail").val(t);
//					$("#msg").val(r);
//					$("#unum").val(n);
//					$("#err").html(i[1]);
//				}
//			}
//		});
//	});
	
	// Single page scroll menu
	
	$('.wd_single_index_menu ul li a').on('click' , function(e){
	  $('.wd_single_index_menu ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[section-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('83', 10);
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.wd_single_index_menu ul li');
	  if (windscroll >= 0) {
	   $('[section-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 83) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.wd_single_index_menu ul li:first').addClass('active');
	  }

	});
	
	// CountDown Js
/**	var deadline = 'November 1 2018 11:59:00 GMT-0400';
		function time_remaining(endtime){
			var t = Date.parse(endtime) - Date.parse(new Date());
			var seconds = Math.floor( (t/1000) % 60 );
			var minutes = Math.floor( (t/1000/60) % 60 );
			var hours = Math.floor( (t/(1000*60*60)) % 24 );
			var days = Math.floor( t/(1000*60*60*24) );
			return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
		}
		function run_clock(id,endtime){
			var clock = document.getElementById(id);
			
			// get spans where our clock numbers are held
			var days_span = clock.querySelector('.days');
			var hours_span = clock.querySelector('.hours');
			var minutes_span = clock.querySelector('.minutes');
			var seconds_span = clock.querySelector('.seconds');

			function update_clock(){
				var t = time_remaining(endtime);
				
				// update the numbers in each part of the clock
				days_span.innerHTML = t.days;
				hours_span.innerHTML = ('0' + t.hours).slice(-2);
				minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
				seconds_span.innerHTML = ('0' + t.seconds).slice(-2);
				
				if(t.total<=0){ clearInterval(timeinterval); }
			}
			update_clock();
			var timeinterval = setInterval(update_clock,1000);
		}
		run_clock('clockdiv',deadline);	*/
	
	}); 
})(); 
/*Plugin canvas-link-image js*/
{
	const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
		if (!e) e = window.event;
		if (e.pageX || e.pageY) {
            posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
        return { x : posx, y : posy }
    }
    // Generate a random float.
    const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);
	
    class HoverImgFx1 {
        constructor(el) {
            this.DOM = {el: el};
            
            this.DOM.reveal = document.createElement('div');
            this.DOM.reveal.className = 'hover-reveal';
            this.DOM.reveal.style.overflow = 'hidden';
            this.DOM.reveal.innerHTML = `<div class="hover-reveal__deco"></div><div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
            this.DOM.el.appendChild(this.DOM.reveal);
            this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
            this.DOM.revealInner.style.overflow = 'hidden';
            this.DOM.revealDeco = this.DOM.reveal.querySelector('.hover-reveal__deco');
            this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');

            this.initEvents();
        }
        initEvents() {
            this.positionElement = (ev) => {
                const mousePos = getMousePos(ev);
                const docScrolls = {
                    left : document.body.scrollLeft + document.documentElement.scrollLeft, 
                    top : document.body.scrollTop + document.documentElement.scrollTop
                };
                this.DOM.reveal.style.top = `${mousePos.y-300-docScrolls.top}px`;
                this.DOM.reveal.style.left = `${mousePos.x-260-docScrolls.left}px`;
            };
            this.mouseenterFn = (ev) => {
                this.positionElement(ev);
                this.showImage();
            };
            this.mousemoveFn = ev => requestAnimationFrame(() => {
                this.positionElement(ev);
            });
            this.mouseleaveFn = () => {
                this.hideImage();
            };
            
            this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
            this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
            this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
        }
        showImage() {
            TweenMax.killTweensOf(this.DOM.reveal);
            TweenMax.killTweensOf(this.DOM.revealInner);
            TweenMax.killTweensOf(this.DOM.revealImg);
            TweenMax.killTweensOf(this.DOM.revealDeco);

            this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {zIndex: 1000});
                }
            })
            .add('begin')
            .set(this.DOM.revealInner, {x: '100%'})
            .set(this.DOM.revealDeco, {transformOrigin: '100% 50%'})
            .add(new TweenMax(this.DOM.revealDeco, 0.3, {
                ease: Sine.easeInOut,
                startAt: {scaleX: 0},
                scaleX: 1
            }), 'begin')
            .set(this.DOM.revealDeco, {transformOrigin: '0% 50%'})
            .add(new TweenMax(this.DOM.revealDeco, 0.6, {
                ease: Expo.easeOut,
                scaleX: 0
            }), 'begin+=0.3')
            .add(new TweenMax(this.DOM.revealInner, 0.6, {
                ease: Expo.easeOut,
                startAt: {x: '100%'},
                x: '0%'
            }), 'begin+=0.45')
            .add(new TweenMax(this.DOM.revealImg, 0.6, {
                ease: Expo.easeOut,
                startAt: {x: '-100%'},
                x: '0%'
            }), 'begin+=0.45')
            .add(new TweenMax(this.DOM.revealImg, 1.6, {
                ease: Expo.easeOut,
                startAt: {scale: 1.3},
                scale: 1
            }), 'begin+=0.45')
            .add(new TweenMax(this.DOM.reveal, 0.8, {
                ease: Quint.easeOut,
                startAt: {x: '20%', rotation: 10},
                x: '0%',
                rotation: 0
            }), 'begin');
        }
        hideImage() {
            TweenMax.killTweensOf(this.DOM.reveal);
            TweenMax.killTweensOf(this.DOM.revealInner);
            TweenMax.killTweensOf(this.DOM.revealImg);
            TweenMax.killTweensOf(this.DOM.revealDeco);

            this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {zIndex: 999});
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {zIndex: ''});
                    TweenMax.set(this.DOM.reveal, {opacity: 0});
                }
            })
            .add('begin')
            .add(new TweenMax(this.DOM.revealInner, 0.1, {
                ease: Sine.easeOut,
                x: '-100%'
            }), 'begin')
            .add(new TweenMax(this.DOM.revealImg, 0.1, {
                ease: Sine.easeOut,
                x: '100%'
            }), 'begin')
        }
    };
	
	   class HoverImgFx2 {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.reveal = document.createElement('div');
            this.DOM.reveal.className = 'hover-reveal';
            this.DOM.reveal.innerHTML = `<div class="hover-reveal__deco"></div><div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
            this.DOM.el.appendChild(this.DOM.reveal);
            this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
            this.DOM.revealDeco = this.DOM.reveal.querySelector('.hover-reveal__deco');
            this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
            this.rect = this.DOM.reveal.getBoundingClientRect();
            // charming(this.DOM.el);
            this.DOM.letters = Array.from(this.DOM.el.querySelectorAll('span'));
            this.initEvents();
        }
        initEvents() {
            this.positionElement = (ev) => {
                const mousePos = getMousePos(ev);
                const docScrolls = {
                    left : document.body.scrollLeft + document.documentElement.scrollLeft, 
                    top : document.body.scrollTop + document.documentElement.scrollTop
                };
                this.DOM.reveal.style.top = `${mousePos.y-300-docScrolls.top}px`;
                this.DOM.reveal.style.left = `${mousePos.x-this.rect.width+250-docScrolls.left}px`;
            };
            this.mouseenterFn = (ev) => {
                this.positionElement(ev);
                this.showImage();
                this.animateLetters();
            };
            this.mousemoveFn = ev => requestAnimationFrame(() => {
                this.positionElement(ev);
            });
            this.mouseleaveFn = () => {
                this.hideImage();
            };
            
            this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
            this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
            this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
            window.addEventListener('resize', () => this.rect = this.DOM.reveal.getBoundingClientRect());
        }
        showImage() {
            TweenMax.killTweensOf(this.DOM.reveal);
            TweenMax.killTweensOf(this.DOM.revealInner);
            TweenMax.killTweensOf(this.DOM.revealImg);
            TweenMax.killTweensOf(this.DOM.revealDeco);

            this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, {zIndex: 1000});
                }
            })
            .add('begin')
            .set(this.DOM.revealInner, {opacity: 0})
            .set(this.DOM.revealDeco, {transformOrigin: '-5% 50%'})
            .add(new TweenMax(this.DOM.revealDeco, 0.2, {
                ease: Quad.easeInOut,
                startAt: {scaleX: 0},
                scaleX: 1,
                scaleY: 0.8
            }), 'begin')
            .set(this.DOM.revealDeco, {transformOrigin: '105% 50%'})
            .add(new TweenMax(this.DOM.revealDeco, 0.3, {
                ease: Sine.easeOut,
                scaleX: 0,
                scaleY: 1
            }), 'begin+=0.2')
            .add(new TweenMax(this.DOM.revealInner, 0.9, {
                ease: Elastic.easeOut.config(1,0.6),
                startAt: {scale: 0, opacity: 1, x: '0%'},
                scale: 1,
            }), 'begin+=0.4')
            .add(new TweenMax(this.DOM.revealImg, 0.8, {
                ease: Expo.easeOut,
                rotation: -15,
            }), 'begin')
            .add(new TweenMax(this.DOM.reveal, 1.1, {
                ease: Quint.easeOut,
                startAt: {x: '-50%', y: '10%', rotation: -35},
                x: '0%',
                y: '0%',
                rotation: 15
            }), 'begin');
        }
        hideImage() {
            TweenMax.killTweensOf(this.DOM.reveal);
            TweenMax.killTweensOf(this.DOM.revealInner);
            TweenMax.killTweensOf(this.DOM.revealImg);
            TweenMax.killTweensOf(this.DOM.revealDeco);

            this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, {zIndex: 999});
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, {zIndex: ''});
                    TweenMax.set(this.DOM.reveal, {opacity: 0});
                }
            })
            .add(new TweenMax(this.DOM.revealInner, 0.13, {
                ease: Sine.easeOut,
                scale: 0.8,
                opacity: 0
            }));
        }
        animateLetters() {
            TweenMax.set(this.DOM.letters, {opacity: 0});
            TweenMax.staggerTo(this.DOM.letters, 1.5, {
                ease: Elastic.easeOut.config(1,0.4),
                startAt: {y: '50%'},
                y: '0%',
                opacity: 1
            }, 0.02);
        }
    };
	
	Array.from(document.querySelectorAll('[data-fx="1"] > a, a[data-fx="1"]')).forEach(link => new HoverImgFx1(link));
	Array.from(document.querySelectorAll('[data-fx="2"] > a, a[data-fx="2"]')).forEach(link => new HoverImgFx2(link));
	
};

/*Plugin canvas-heart-love js*/
{
/*
 * Settings
 */
var settings = {
  particles: {
    length:   500, // maximum amount of particles
    duration:   2, // particle duration in sec
    velocity: 100, // particle velocity in pixels/sec
    effect: -0.75, // play with this for a nice effect
    size:      30, // particle size in pixels
  },
};

/*
 * RequestAnimationFrame polyfill by Erik M?ller
 */
(function(){var b=0;var c=["ms","moz","webkit","o"];for(var a=0;a<c.length&&!window.requestAnimationFrame;++a){window.requestAnimationFrame=window[c[a]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[c[a]+"CancelAnimationFrame"]||window[c[a]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(h,e){var d=new Date().getTime();var f=Math.max(0,16-(d-b));var g=window.setTimeout(function(){h(d+f)},f);b=d+f;return g}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(d){clearTimeout(d)}}}());

/*
 * Point class
 */
var Point = (function() {
  function Point(x, y) {
    this.x = (typeof x !== 'undefined') ? x : 0;
    this.y = (typeof y !== 'undefined') ? y : 0;
  }
  Point.prototype.clone = function() {
    return new Point(this.x, this.y);
  };
  Point.prototype.length = function(length) {
    if (typeof length == 'undefined')
      return Math.sqrt(this.x * this.x + this.y * this.y);
    this.normalize();
    this.x *= length;
    this.y *= length;
    return this;
  };
  Point.prototype.normalize = function() {
    var length = this.length();
    this.x /= length;
    this.y /= length;
    return this;
  };
  return Point;
})();

/*
 * Particle class
 */
var Particle = (function() {
  function Particle() {
    this.position = new Point();
    this.velocity = new Point();
    this.acceleration = new Point();
    this.age = 0;
  }
  Particle.prototype.initialize = function(x, y, dx, dy) {
    this.position.x = x;
    this.position.y = y;
    this.velocity.x = dx;
    this.velocity.y = dy;
    this.acceleration.x = dx * settings.particles.effect;
    this.acceleration.y = dy * settings.particles.effect;
    this.age = 0;
  };
  Particle.prototype.update = function(deltaTime) {
    this.position.x += this.velocity.x * deltaTime;
    this.position.y += this.velocity.y * deltaTime;
    this.velocity.x += this.acceleration.x * deltaTime;
    this.velocity.y += this.acceleration.y * deltaTime;
    this.age += deltaTime;
  };
  Particle.prototype.draw = function(context, image) {
    function ease(t) {
      return (--t) * t * t + 1;
    }
    var size = image.width * ease(this.age / settings.particles.duration);
    context.globalAlpha = 1 - this.age / settings.particles.duration;
    context.drawImage(image, this.position.x - size / 2, this.position.y - size / 2, size, size);
  };
  return Particle;
})();

/*
 * ParticlePool class
 */
var ParticlePool = (function() {
  var particles,
      firstActive = 0,
      firstFree   = 0,
      duration    = settings.particles.duration;
  
  function ParticlePool(length) {
    // create and populate particle pool
    particles = new Array(length);
    for (var i = 0; i < particles.length; i++)
      particles[i] = new Particle();
  }
  ParticlePool.prototype.add = function(x, y, dx, dy) {
    particles[firstFree].initialize(x, y, dx, dy);
    
    // handle circular queue
    firstFree++;
    if (firstFree   == particles.length) firstFree   = 0;
    if (firstActive == firstFree       ) firstActive++;
    if (firstActive == particles.length) firstActive = 0;
  };
  ParticlePool.prototype.update = function(deltaTime) {
    var i;
    
    // update active particles
    if (firstActive < firstFree) {
      for (i = firstActive; i < firstFree; i++)
        particles[i].update(deltaTime);
    }
    if (firstFree < firstActive) {
      for (i = firstActive; i < particles.length; i++)
        particles[i].update(deltaTime);
      for (i = 0; i < firstFree; i++)
        particles[i].update(deltaTime);
    }
    
    // remove inactive particles
    while (particles[firstActive].age >= duration && firstActive != firstFree) {
      firstActive++;
      if (firstActive == particles.length) firstActive = 0;
    }
    
    
  };
  ParticlePool.prototype.draw = function(context, image) {
    // draw active particles
    if (firstActive < firstFree) {
      for (i = firstActive; i < firstFree; i++)
        particles[i].draw(context, image);
    }
    if (firstFree < firstActive) {
      for (i = firstActive; i < particles.length; i++)
        particles[i].draw(context, image);
      for (i = 0; i < firstFree; i++)
        particles[i].draw(context, image);
    }
  };
  return ParticlePool;
})();

/*
 * Putting it all together
 */
(function(canvas) {
  var context = canvas.getContext('2d'),
      particles = new ParticlePool(settings.particles.length),
      particleRate = settings.particles.length / settings.particles.duration, // particles/sec
      time;
  
  // get point on heart with -PI <= t <= PI
  function pointOnHeart(t) {
    return new Point(
      160 * Math.pow(Math.sin(t), 3),
      130 * Math.cos(t) - 50 * Math.cos(2 * t) - 20 * Math.cos(3 * t) - 10 * Math.cos(4 * t) + 25
    );
  }
  
  // creating the particle image using a dummy canvas
  var image = (function() {
    var canvas  = document.createElement('canvas'),
        context = canvas.getContext('2d');
    canvas.width  = settings.particles.size;
    canvas.height = settings.particles.size;
    // helper function to create the path
    function to(t) {
      var point = pointOnHeart(t);
      point.x = settings.particles.size / 2 + point.x * settings.particles.size / 350;
      point.y = settings.particles.size / 2 - point.y * settings.particles.size / 350;
      return point;
    }
    // create the path
    context.beginPath();
    var t = -Math.PI;
    var point = to(t);
    context.moveTo(point.x, point.y);
    while (t < Math.PI) {
      t += 0.01; // baby steps!
      point = to(t);
      context.lineTo(point.x, point.y);
    }
    context.closePath();
    // create the fill
    context.fillStyle = '#ea80b0';
    context.fill();
    // create the image
    var image = new Image();
    image.src = canvas.toDataURL();
    return image;
  })();
  
  // render that thing!
  function render() {
    // next animation frame
    requestAnimationFrame(render);
    
    // update time
    var newTime   = new Date().getTime() / 1000,
        deltaTime = newTime - (time || newTime);
    time = newTime;
    
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // create new particles
    var amount = particleRate * deltaTime;
    for (var i = 0; i < amount; i++) {
      var pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
      var dir = pos.clone().length(settings.particles.velocity);
      particles.add(canvas.width / 2 + pos.x, canvas.height / 2 - pos.y, dir.x, -dir.y);
    }
    
    // update and draw particles
    particles.update(deltaTime);
    particles.draw(context, image);
  }
  
  // handle (re-)sizing of the canvas
  function onResize() {
    canvas.width  = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }
  window.onresize = onResize;
  
  // delay rendering bootstrap
  setTimeout(function() {
    onResize();
    render();
  }, 10);
})(document.getElementById('pinkboard'));
};
