var flag1 = 0 , flag2 = 0 , total=0.0 ;

$(document).ready(function(){
    //couting checkboxes within #legsPropertiesPanel
    var chbxs = $('#legsPropertiesPanel :checkbox[required]');
    //couting checkboxes within #handsPropertiesPanel
    var chbxs2 = $('#handsPropertiesPanel :checkbox[required]');
//    console.log("length of chbxs is "+chbxs.length);
//    console.log("length of chbxs2 is "+chbxs2.length);
    var namedChbxs = {};

    //each checkbox will receieve the mutual name
    chbxs.each(function(){
        var name = $(this).attr('name');
//        console.log("Name is : "+this.name);
        namedChbxs[name] = (namedChbxs[name] || $()).add(this);
    });

    //each checkbox will receieve the mutual name
    chbxs2.each(function(){
        var name = $(this).attr('name');
//        console.log("Name is : "+this.name);
        namedChbxs[name] = (namedChbxs[name] || $()).add(this);
    });

    //if one (or more) checkbox in #legsPropertiesPanel was checked
    //then remove "required" from other checkboxes
    chbxs.change(function(){
        var name = $(this).attr('name');
//        console.log("Name is : "+this.name);
        var cbx = namedChbxs[name];
//        console.log("Length of cbx is "+cbx.length);
//        console.log("cbx.filter(':checked').length is "+cbx.filter(':checked').length);
        if(cbx.filter(':checked').length > 0){
            cbx.removeAttr('required');
            flag1=1;
        }else{
            cbx.attr('required','required');
        }
    });

    //if one (or more) checkbox in #handsPropertiesPanel was checked
    //then remove "required" from other checkboxes
    chbxs2.change(function(){
        var name = $(this).attr('name');
//        console.log("Name is : "+this.name);
        var cbx = namedChbxs[name];
//        console.log("Length of cbx is "+cbx.length);
//        console.log("cbx.filter(':checked').length is "+cbx.filter(':checked').length);
        if(cbx.filter(':checked').length > 0){
            cbx.removeAttr('required');
            flag2=1;
        }else{
            cbx.attr('required','required');
        }
    });


    //show Save Panel
    $("#showSavePanel").click(function(event){
        //var temp = Math.floor(Math.random() * 400) + 320;
        $("#orderNum").html(Math.floor(Math.random()*8876423)+11324532);
        $("#rnum").html(Math.floor(Math.random()*400)+320);

        // if hands or legs were chosen
        if(flag1==1&&flag2==1){
            event.preventDefault();
            $("#toSavePanel").show(500);
        }
        else if (flag2==0){
            $('#foo').click();
        }
        var Price = $('input:checkbox:checked');
        $.each( $(Price) , function(){
            total += parseFloat($(this).attr("list"));
            console.log("current number is :"+$(this).attr("list"));
        });
        console.log("Total is  : "+total);
        //$("#orderNum").html("Math.floor(Math.random()*8876423)+11324532");
        $("#rprice").html(total);
        //$("p").html("Hello <b>world!</b>");
        //$("#r.num1").html("Math.floor(Math.random()*400)+320");
    });

    //Hide Save Panel
    $("#hideSavePanel").click(function(){
    $("#toSavePanel").hide(500);
    //$("#myCarousel").carousel( {interval: 0} );
    });

    $("#hideSavePanel2").click(function(){
    $("#checkOutPanel").hide(500);
    });

    //BUY NOW button was clicked -> show toSavePanel
    $("#payNowButton").click(function(){
        $("#toSavePanel").hide();
        $("#checkOutPanel").show();
    });

    // CUNTINUE button was clicked -> to order.html
    $("#continueButton").click(function(){
        location.href = 'order.html';
        //$(this).changePage("order.html",{transition:"slide"});
    });



    $(".carousel-control").click(function(){
        $("#myCarousel").carousel( {interval: 0} );
        console.log("carousel-control clicked from lightBoxSript");

    });

    //Save, hide, and close Save Panel and move to save.html
    $("#SaveSavePanel").click(function(){


        $("#saveSuccess")
                .show(500)
                .delay(1500)
                .hide(500, function(){
                    setTimeout(function() {
                        $("#toSavePanel").hide(500);
                    } , 0  );})
                .show( function(){ setTimeout(function(){ location.href = 'save.html'});
        });


    });


    // Activate Carousel
    $("#myCarousel").carousel({
        interval: 0
    });



});


/*!
* bootstrap-lightbox.js v0.6.1
* Copyright 2013 Jason Butz
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function ($) {
	"use strict";
/* LIGHTBOX CLASS DEFINITION
 * ========================= */

	var Lightbox = function (element, options)
	{
		this.options = options;
		this.$element = $(element)
			.delegate('[data-dismiss="lightbox"]', 'click.dismiss.lightbox', $.proxy(this.hide, this));

		this.options.remote && this.$element.find('.lightbox-body').load(this.options.remote);

	}

	// We depend upon Twitter Bootstrap's Modal library to simplify things here
	Lightbox.prototype = $.extend({},$.fn.modal.Constructor.prototype);

	Lightbox.prototype.constructor = Lightbox;

	// We can't use Modal for this, it depends upon a class
	Lightbox.prototype.enforceFocus = function ()
	{
		var that = this;
		$(document).on('focusin.lightbox', function (e)
		{
			if (that.$element[0] !== e.target && !that.$element.has(e.target).length)
			{
				that.$element.focus();
			}
		});
	};

	// We have to have a copy of this since we are tweaking it a bit
	Lightbox.prototype.show = function()
	{
		var that = this,
			e    = $.Event('show');

		this.$element.trigger(e);
        $("#myCarousel").carousel( {interval: 0} );

		if (this.isShown || e.isDefaultPrevented()) return;

		this.isShown = true;


		this.escape();

		// This bit is added since we don't display until we have the size
		//	which prevents image jumping
		this.preloadSize(function()
		{
			that.backdrop(function ()
			{
				var transition = $.support.transition && that.$element.hasClass('fade');

				if (!that.$element.parent().length)
				{
					that.$element.appendTo(document.body); //don't move modals dom position
				}

				that.$element.show();

				if (transition)
				{
					that.$element[0].offsetWidth; // force reflow
				}

				that.$element
					.addClass('in')
					.attr('aria-hidden', false);

				that.enforceFocus();

				transition ?
					that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
					that.$element.focus().trigger('shown');
			});
		});
	};

	// We have to have this because of a class in it
	Lightbox.prototype.hide = function (e)
	{
        e && e.preventDefault();

        var that = this;

        e = $.Event('hide');

        this.$element.trigger(e);
        $("#myCarousel").carousel( {interval: 0} );

        if (!this.isShown || e.isDefaultPrevented()) return;

        this.isShown = false;
        this.isShown = false;

        this.escape();

        $(document).off('focusin.lightbox');

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true);

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal();
    };

    // This references a class as well
    Lightbox.prototype.escape = function()
	{
		var that = this;
		if (this.isShown && this.options.keyboard)
		{
			this.$element.on('keyup.dismiss.lightbox', function ( e )
			{
				e.which == 0 && that.hide();
			});
		}
		else if (!this.isShown)
		{
			this.$element.off('keyup.dismiss.lightbox');
		}
	}

	Lightbox.prototype.preloadSize = function(callback)
	{
		var callbacks = $.Callbacks();
		if(callback) callbacks.add( callback );
		var that = this;

		var windowHeight,
			windowWidth,
			padTop,
			padBottom,
			padLeft,
			padRight,
			$image,
			preloader,
			originalWidth,
			originalHeight;
		// Get the window width and height.
		windowHeight = $(window).height();
		windowWidth  = $(window).width();

		// Get the top, bottom, right, and left padding
		padTop    = parseInt( that.$element.find('.lightbox-content').css('padding-top')    , 10);
		padBottom = parseInt( that.$element.find('.lightbox-content').css('padding-bottom') , 10);
		padLeft   = parseInt( that.$element.find('.lightbox-content').css('padding-left')   , 10);
		padRight  = parseInt( that.$element.find('.lightbox-content').css('padding-right')  , 10);

		// Load the image, we have to do this because if the image isn't already loaded we get a bad size
		$image    = that.$element.find('.lightbox-content').find('img:first');
		preloader = new Image();
		preloader.onload = function()
		{
			//$image.width = preloader.width;
			//$image.height = preloader.height;
			//return _this.sizeContainer(preloader.width, preloader.height);

			// The image could be bigger than the window, that is an issue.
			if( (preloader.width + padLeft + padRight) >= windowWidth)
			{
				originalWidth = preloader.width;
				originalHeight = preloader.height;
				preloader.width = windowWidth - padLeft - padRight;
				preloader.height = originalHeight / originalWidth * preloader.width;
			}

			if( (preloader.height + padTop + padBottom) >= windowHeight)
			{
				originalWidth = preloader.width;
				originalHeight = preloader.height;
				preloader.height = windowHeight - padTop - padBottom;
				preloader.width = originalWidth / originalHeight * preloader.height;
			}

			that.$element.css({
				'position': 'fixed',
				'width': preloader.width + padLeft + padRight,
				'height': preloader.height + padTop + padBottom,
				'top' : (windowHeight / 2) - ( (preloader.height + padTop + padBottom) / 2),
				'left' : '50%',
				'margin-left' : -1 * (preloader.width + padLeft + padRight) / 2
			});
			that.$element.find('.lightbox-content').css({
				'width': preloader.width,
				'height': preloader.height
			});

			// We have everything sized!
			callbacks.fire();
		};
		preloader.src = $image.attr('src');
        $("#myCarousel").carousel( {interval: 0} );

	};

/* LIGHTBOX PLUGIN DEFINITION
 * ======================= */

	var old = $.fn.lightbox;

	$.fn.lightbox = function (option)
	{
		return this.each(function ()
		{
			var $this   = $(this);
			var data    = $this.data('lightbox');
			var options = $.extend({}, $.fn.lightbox.defaults, $this.data(), typeof option == 'object' && option);
            $("#myCarousel").carousel( {interval: 0} );
			if (!data) $this.data('lightbox', (data = new Lightbox(this, options)));

			if (typeof option == 'string')
				data[option]();
			else if (options.show)
				data.show();
		});
	};

	$.fn.lightbox.defaults = {
		backdrop: true,
		keyboard: true,
		show: true
	};

	//$.fn.lightbox.Constructor = Lightbox;

/* LIGHTBOX NO CONFLICT
  * ================= */

  $.fn.lightbox.noConflict = function () {
	$.fn.lightbox = old;
	return this;
  }


/* LIGHTBOX DATA-API
 * ================== */

	$(document).on('click.lightbox.data-api', '[data-toggle*="lightbox"]', function (e)
	{
		var $this = $(this);
		var href  = $this.attr('href');
		var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))); //strip for ie7
		var option = $target.data('lightbox') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data());

		e.preventDefault();
        $("#myCarousel").carousel( {interval: 0} );

		$target
			.lightbox(option)
			.one('hide', function ()
			{
				$this.focus();
			});
	})

}(window.jQuery);



!function ($) {

    "use strict";

    // PROGRESSBAR CLASS DEFINITION
    // ============================

    var Progressbar = function (element) {
        this.$element = $(element);
    }

    Progressbar.prototype.update = function (value) {
        var $div = this.$element.find('div');
        var $span = $div.find('span');
        $div.attr('aria-valuenow', value);
        $div.css('width', value + '%');
        $span.text(value + '% Complete');
    }

    Progressbar.prototype.finish = function () {
        this.update(100);
    }

    Progressbar.prototype.reset = function () {
        this.update(0);
    }

    // PROGRESSBAR PLUGIN DEFINITION
    // =============================

    $.fn.progressbar = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('jbl.progressbar');

            if (!data) $this.data('jbl.progressbar', (data = new Progressbar(this)));
            if (typeof option == 'string') data[option]();
            if (typeof option == 'number') data.update(option);
        })
    };

    // PROGRESSBAR DATA-API
    // ====================

    $(document).on('click', '[data-toggle="progressbar"]', function (e) {
        var $this = $(this);
        var $target = $($this.data('target'));
        var value = $this.data('value');

        e.preventDefault();
        $("#myCarousel").carousel( {interval: 0} );

        $target.progressbar(value);
    });

}(window.jQuery);
