jQuery(document).ready(function($){'use strict';$(".pulse").hover(function(){$(this).removeClass("pulse")},function(){$(this).addClass("pulse")});$('.srch-btn').on('click',function(){$('.header-search').addClass('active');return!1});$('.srch-cls-btn').on('click',function(){$('.header-search').removeClass('active');return!1});if($.isFunction($.fn.musicPlayer)){$(".plyr").musicPlayer({elements:['artwork','information','controls','progress','time','volume'],})}
$('.rspn-mnu-btn').on('click',function(){$('.rsnp-mnu').addClass('slidein');return!1});$('.rspn-mnu-cls').on('click',function(){$('.rsnp-mnu').removeClass('slidein');return!1});$('.rsnp-mnu li.menu-item-has-children > a').on('click',function(){$(this).parent().siblings().children('ul').slideUp();$(this).parent().siblings().removeClass('active');$(this).parent().children('ul').slideToggle();$(this).parent().toggleClass('active');return!1});if($('.rsnp-mnu').length>0){var ps=new PerfectScrollbar('.rsnp-mnu')}
if($.isFunction($.fn.fancybox)){$('[data-fancybox],[data-fancybox="gallery"]').fancybox({})}
if($.isFunction($.fn.fancybox)){$(".fancybox").attr('rel','gallery').fancybox({type:"iframe",beforeShow:function(){}})}
if($('.facts-count').length>0){$('.facts-count').counterUp({delay:2,time:350})}
if($.isFunction($.fn.selectpicker)){if($('select').length>0){$('select').selectpicker()}}
if($.isFunction($.fn.TouchSpin)){$('.quantity > input').TouchSpin()}
if($.isFunction($.fn.owlCarousel)){$(window).load(function(){$('.dnt-car').owlCarousel({smartSpeed:3000,loop:!0,items:1,dots:!1,slideSpeed:1000,autoplayHoverPause:!0,nav:!0,margin:0,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],})});$(window).load(function(){$('.testi-car').owlCarousel({autoplay:!0,smartSpeed:2000,loop:!0,items:1,dots:!1,slideSpeed:15000,autoplayHoverPause:!0,nav:!1,margin:0,animateIn:'fadeIn',animateOut:'fadeOut',navText:["<i class='fa fa-angle-up'></i>","<i class='fa fa-angle-down'></i>"]})});$(window).load(function(){$('.featured-area').owlCarousel({autoplay:!0,smartSpeed:2000,loop:!0,items:1,dots:!1,slideSpeed:3000,autoplayHoverPause:!0,nav:!1,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],margin:0,animateIn:'fadeIn',animateOut:'fadeOut',navText:["<i class='fa fa-angle-up'></i>","<i class='fa fa-angle-down'></i>"]})});$(window).load(function(){$('.testi-car').owlCarousel({autoplay:!0,smartSpeed:3000,loop:!0,items:3,dots:!1,slideSpeed:2000,autoplayHoverPause:!0,nav:!0,margin:30,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:{0:{items:1,nav:!1},481:{items:1,margin:30},771:{items:2,margin:30},981:{items:3,margin:30},1025:{items:3,margin:30},1200:{items:3}}})});$(window).load(function(){$('.ltst-car').owlCarousel({smartSpeed:3000,loop:!0,items:1,dots:!1,slideSpeed:2000,autoplayHoverPause:!0,nav:!0,margin:0,animateIn:'fadeIn',animateOut:'fadeOut',navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],})})}});jQuery(window).on('load',function(){'use strict';jQuery(".preloader").fadeOut("slow")})