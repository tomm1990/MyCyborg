$( "document" ).ready(function() {
//    alert('asuschusdanc');
    $("#hamburger").click(function(){
       $(".smallMobileMenu ul").toggle(200);
        //console.log("hamburger was clocked");
    });

    //Marketing button was clicked
    //timesArea sets up
    $("#Marketing").click(function(){
       $(".bubblesArea").toggle(200);
        $(".timesArea").toggle(200);
    });

    //backArrow button was clocked
    //bubblesArea sets up
    $(".backArrow").click(function(){
        $(".bubblesArea").toggle(200);         $(".timesArea").toggle(200);
    });

    // report.html -> hover over secwrap changes h2 color
    $( "#mainReports .secwrap" ).hover(function() {
        $(this).find("h2").css("color","#f7f6f6");
    });

    // report.html-> mouse leave makes h2 original color
    $( "#mainReports .secwrap" ).mouseleave(function() {
        $(this).find("h2").css("color","#821122");
    });

    $(".carousel-control").click(function(){
        $("#myCarousel").carousel( {interval: 999999999} );
        console.log("carousel-control clicked from index");
    });

    //reports.html -> one of the weeks was clicked -> move to diagram.html
    $(".timesArea #LastWeek").click(function(){
        $(".timesArea #LastWeek").hide(500 , function(){
            location.href = 'diagram.html';
        });
    });



//$("document").ready(
//  $( "document" ).ready(function() {
//    var x = document.createElement("h2");
//    x.innerHTML = "hi";
//    document.getElementsByTagName("main")[0].appendChild(x);
// $(function(){
//    alert('hello');
    $.ajax({
        type : "POST",
        url : "includes/action.php",
        cache : true,
        success:function(html){
            $("#loader").html(html);

        }
    });

    $.ajax({
        type : "POST",
        url : "includes/diagramAction1.php",
        cache : true,
        success:function(html){
            $("tbody").html(html);
        }
    });

    $("td").each(function() {
        console.log(  "test"  );

    // compare id to what you want
    });
});
//    return false;
//}


//
//
//$("#myCarousel").carousel({
//    interval: 0
//});
//
////);
//
//$().dropdown('toggle')
//
//
//$("document").delegate('*[data-toggle="lightbox"]', 'click', function(event) {
//    event.preventDefault();
//    $(this).ekkoLightbox(gallery);
//});
//
////$('#mylink').ekkoLightbox(remote);
//
//
////    var x.innerHTML("
////    <?php
////        //connection with data base
////        // db ip
////        $dbhost = "166.62.8.11";
////        // db user name
////        $dbuser = "auxstudDB5";
////        // bd password
////        $dbpass = "auxstud5DB1!";
////        $dbname = "auxstudDB5";
////        //open a connection
////        $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
////
////        //testing
////        if(!connection){
////
////        }
////
////
////        //get data from DB
////        //$query = "SELECT * FROM robotsTable_221";
////        $query = "Select * from clientsTable_221";
////        $result = mysqli_query($connection , $query);
////        if ( !$result) { };
////
////
////
////        //use return daya
////        while( $row = mysqli_fetch_assoc($result) ){
////            echo "<h2>".$row["c.name"]."</h2>";
////        }
////
////        mysqli_free_result($result);
////		mysqli_close($connection);
////	   ?> ");
////    var y = document.getElementsByTagName("body")[0].appendChild(x);
//
//
////
////while($row = mysqli_fetch_row($result)){
////    echo "<section>";
////    var_dump($row);
////    echo "</section>";
////}
//
///*!
//* bootstrap-lightbox.js v0.6.1
//* Copyright 2013 Jason Butz
//* http://www.apache.org/licenses/LICENSE-2.0.txt
//*/
//!function ($) {
//	"use strict";
//
//
///* LIGHTBOX CLASS DEFINITION
// * ========================= */
//
//	var Lightbox = function (element, options)
//	{
//		this.options = options;
//		this.$element = $(element)
//			.delegate('[data-dismiss="lightbox"]', 'click.dismiss.lightbox', $.proxy(this.hide, this));
//
//		this.options.remote && this.$element.find('.lightbox-body').load(this.options.remote);
//
//	}
//
//	// We depend upon Twitter Bootstrap's Modal library to simplify things here
//	Lightbox.prototype = $.extend({},$.fn.modal.Constructor.prototype);
//
//	Lightbox.prototype.constructor = Lightbox;
//
//	// We can't use Modal for this, it depends upon a class
//	Lightbox.prototype.enforceFocus = function ()
//	{
//		var that = this;
//		$(document).on('focusin.lightbox', function (e)
//		{
//			if (that.$element[0] !== e.target && !that.$element.has(e.target).length)
//			{
//				that.$element.focus();
//			}
//		});
//	};
//
//	// We have to have a copy of this since we are tweaking it a bit
//	Lightbox.prototype.show = function()
//	{
//		var that = this,
//			e    = $.Event('show');
//
//		this.$element.trigger(e);
//
//		if (this.isShown || e.isDefaultPrevented()) return;
//
//		this.isShown = true;
//
//
//		this.escape();
//
//		// This bit is added since we don't display until we have the size
//		//	which prevents image jumping
//		this.preloadSize(function()
//		{
//			that.backdrop(function ()
//			{
//				var transition = $.support.transition && that.$element.hasClass('fade');
//
//				if (!that.$element.parent().length)
//				{
//					that.$element.appendTo(document.body); //don't move modals dom position
//				}
//
//				that.$element.show();
//
//				if (transition)
//				{
//					that.$element[0].offsetWidth; // force reflow
//				}
//
//				that.$element
//					.addClass('in')
//					.attr('aria-hidden', false);
//
//				that.enforceFocus();
//
//				transition ?
//					that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
//					that.$element.focus().trigger('shown');
//			});
//		});
//	};
//
//	// We have to have this because of a class in it
//	Lightbox.prototype.hide = function (e)
//	{
//        e && e.preventDefault();
//
//        var that = this;
//
//        e = $.Event('hide');
//
//        this.$element.trigger(e);
//
//        if (!this.isShown || e.isDefaultPrevented()) return;
//
//        this.isShown = false;
//
//        this.escape();
//
//        $(document).off('focusin.lightbox');
//
//        this.$element
//          .removeClass('in')
//          .attr('aria-hidden', true);
//
//        $.support.transition && this.$element.hasClass('fade') ?
//          this.hideWithTransition() :
//          this.hideModal();
//    };
//
//    // This references a class as well
//    Lightbox.prototype.escape = function()
//	{
//		var that = this;
//		if (this.isShown && this.options.keyboard)
//		{
//			this.$element.on('keyup.dismiss.lightbox', function ( e )
//			{
//				e.which == 27 && that.hide();
//			});
//		}
//		else if (!this.isShown)
//		{
//			this.$element.off('keyup.dismiss.lightbox');
//		}
//	}
//
//	Lightbox.prototype.preloadSize = function(callback)
//	{
//		var callbacks = $.Callbacks();
//		if(callback) callbacks.add( callback );
//		var that = this;
//
//		var windowHeight,
//			windowWidth,
//			padTop,
//			padBottom,
//			padLeft,
//			padRight,
//			$image,
//			preloader,
//			originalWidth,
//			originalHeight;
//		// Get the window width and height.
//		windowHeight = $(window).height();
//		windowWidth  = $(window).width();
//
//		// Get the top, bottom, right, and left padding
//		padTop    = parseInt( that.$element.find('.lightbox-content').css('padding-top')    , 10);
//		padBottom = parseInt( that.$element.find('.lightbox-content').css('padding-bottom') , 10);
//		padLeft   = parseInt( that.$element.find('.lightbox-content').css('padding-left')   , 10);
//		padRight  = parseInt( that.$element.find('.lightbox-content').css('padding-right')  , 10);
//
//		// Load the image, we have to do this because if the image isn't already loaded we get a bad size
//		$image    = that.$element.find('.lightbox-content').find('img:first');
//		preloader = new Image();
//		preloader.onload = function()
//		{
//			//$image.width = preloader.width;
//			//$image.height = preloader.height;
//			//return _this.sizeContainer(preloader.width, preloader.height);
//
//			// The image could be bigger than the window, that is an issue.
//			if( (preloader.width + padLeft + padRight) >= windowWidth)
//			{
//				originalWidth = preloader.width;
//				originalHeight = preloader.height;
//				preloader.width = windowWidth - padLeft - padRight;
//				preloader.height = originalHeight / originalWidth * preloader.width;
//			}
//
//			if( (preloader.height + padTop + padBottom) >= windowHeight)
//			{
//				originalWidth = preloader.width;
//				originalHeight = preloader.height;
//				preloader.height = windowHeight - padTop - padBottom;
//				preloader.width = originalWidth / originalHeight * preloader.height;
//			}
//
//			that.$element.css({
//				'position': 'fixed',
//				'width': preloader.width + padLeft + padRight,
//				'height': preloader.height + padTop + padBottom,
//				'top' : (windowHeight / 2) - ( (preloader.height + padTop + padBottom) / 2),
//				'left' : '50%',
//				'margin-left' : -1 * (preloader.width + padLeft + padRight) / 2
//			});
//			that.$element.find('.lightbox-content').css({
//				'width': preloader.width,
//				'height': preloader.height
//			});
//
//			// We have everything sized!
//			callbacks.fire();
//		};
//		preloader.src = $image.attr('src');
//	};
//
///* LIGHTBOX PLUGIN DEFINITION
// * ======================= */
//
//	var old = $.fn.lightbox;
//
//	$.fn.lightbox = function (option)
//	{
//		return this.each(function ()
//		{
//			var $this   = $(this);
//			var data    = $this.data('lightbox');
//			var options = $.extend({}, $.fn.lightbox.defaults, $this.data(), typeof option == 'object' && option);
//			if (!data) $this.data('lightbox', (data = new Lightbox(this, options)));
//
//			if (typeof option == 'string')
//				data[option]();
//			else if (options.show)
//				data.show();
//		});
//	};
//
//	$.fn.lightbox.defaults = {
//		backdrop: true,
//		keyboard: true,
//		show: true
//	};
//
//	$.fn.lightbox.Constructor = Lightbox;
//
///* LIGHTBOX NO CONFLICT
//  * ================= */
//
//  $.fn.lightbox.noConflict = function () {
//	$.fn.lightbox = old;
//	return this;
//  }
//
//
///* LIGHTBOX DATA-API
// * ================== */
//
//	$(document).on('click.lightbox.data-api', '[data-toggle*="lightbox"]', function (e)
//	{
//		var $this = $(this);
//		var href  = $this.attr('href');
//		var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))); //strip for ie7
//		var option = $target.data('lightbox') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data());
//
//		e.preventDefault();
//
//		$target
//			.lightbox(option)
//			.one('hide', function ()
//			{
//				$this.focus();
//			});
//	})
//
//}(window.jQuery);
//
