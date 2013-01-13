# MoreOrLess
## A .less package for really fast css


### Description

	This project is very handy as base for all your css / less websites.
	It comes with the fantastic boilerplate(4.0.0) package & with some very handy helper functions.
	Al the code is modular, bootstrapped, tested and ready to use.
	

### Usage

####important !!!

	First of all, make sure you have a less compiler otherwise you shouldn't get very far with this project.
	For mac users its recommended to use codekit.
	The bootstrap.less in the lib directory connects everything and is the main file.
	You should set your compiler to detect filechanges in the style.less file.
	The file that is compiled to css is the bootstrap file. not your style.less. (feel free to adapt this)
	I liked this approach because my style.less files is clean like this (no import statements)

####bootstrap.less

	So as I said before. The bootstrap file is the file where you can add other libs or define vars at your wish.

######bootstrap exists out of 4 parts 
	
* vars (vars can be added here or elsewhere for example in style.less)
* imports (import your files here)
* the default stylesheet import 
* initialization 
 
	
####boilerplate.less

	up to date with the latest version.(4.0.0)

######has 4 functions

* .boiler.init();
* .boiler.normalize();
* .boiler.ns-helpers();
* .boiler.mediaprint();

### more.or.less

	This file holds helper functions for the latest css3 rules.
	This file is logicaly namespaced to make it easyer in the future to add stuff for a specific namespace.

######The namespaces are

* .iefix
* .reset
* .transform
* .typo
* .util
* .sprite
* .effect
* .tween
* .lib
* .math
* .diagnostics

######Full function list

* .reset()
  * .ul()
* .iefix
	* .inlineblock()
* .transform
	* .all(@transform1, @transform2, @transform3, @transform4)
	* .scale(@amount)
	* .scale_x(@x)
	* .scale_y(@y)
	* .rotate(@degrees)
	* .rotate_x(@degrees)
	* .rotate_y(@degrees)
	* .skew(@angleX, @angleY)
	* .skew_x(@angleX)
	* .skew_y(@angleY)
	* .translate(@x, @y)
	* .translate_x(@x)
	* .translate_y(@y)
	* .origin(@x, @y)
	* .matrix(@n1, @n2, @n3, @n4, @n5, @n6)
* .threed
	* .perspective(@zdistance);
	* .perspective_origin(@x-axis, @y-axis);
	* .backface_visibility(@value);
* .typo
	* .serif(@webfont)
	* .sans(@webfont)
	* .columns(@count, @gap)
	* .font(@webfont, @size, @font_color, @weight, @align)
	* .font_face(@font_ref_name, @font_real_name, @extra_path)
	* .smooth()
	* .cap(@color, @size, @lineheight, @paddingtop, @paddingright, @paddingbottom, @paddingleft)
* .util
	* .centered(@width: @site_width)
	* .box_sizing(@type)
	* .subtle_list()
	* .horizontal_nav(@itemSpacing)
	* .bg(@name)
	* .bg(@name, @extrapathpart)
	* .cleanbox()
	* .pos(abs, @left, @top)
	* .pos(rel, @left, @top)
	* .abs_center(x, @width)
	* .abs_center(y, @height)
	* .abs_center(xy, @width, @height)
* .sprite
	* .position(@size, @coll, @row)
	* .position(@width, @height , @coll, @row)
* .effect
	* .opacity(@value)
	* .rounded_corners(@radius)
	* .rounded_corners(@topLeft, @topRight, @bottomRight, @bottomLeft) 
	* .drop_shadow(@x, @y, @blur, @colour) 
	* .inner_shadow(@x, @y, @blur, @colour) 
	* .text_shadow(@x, @y, @blur, @colour)
	* .bevel(@size, @blur, @colour, @colourtwo) 
	* .background_gradient(@colourfrom, @colourTo, @fallbackColour)
	* .background_gradient(@colourfrom, @colourTo, @fallbackColour, @fallbackImageUrl,@repeat);
	* .zebra(odd, @bgcolor);
	* .zebra(even, @bgcolor);
* .tween
	* transition(@property, @duration, @ease, @delay)
	* transition_property(@property)
	* transition_duration(@duration)
	* transitionp_timing(@timing)
	* transitionp_delay(@delay)
	* .ease
		* .linear();
		* .in();
		* .out();
		* .inout();
		* .inquad();
		* .incubic();
		* .inquart();
		* .inquint();
		* .insine();
		* .inexpo();
		* .inback();
		* .outquad();
		* .outcubic();
		* .outquart();
		* .outquint();
		* .outsine();
		* .outexpo();
		* .outback();
		* .inoutquad();
		* .inoutcubic();
		* .inoutquart();
		* .inoutquint();
		* .inoutsine();
		* .inoutexpo();
		* .inoutback();
* .lib
	* stiched() `To be parametered`
	* layered_paper() `To be parametered`
	* ribon() `To be parametered`
	* grad_round_button() `To be added`
* .math
	* px_to_em(@target ,@context)
	* percent_of_pixels(width, @width, @percent)
	* percent_of_pixels(height, @height, @percent)
* .diagnostics
	* .run()

### mq.less
	This file holds all sorts of media queries for mobile devices and responsive websites
	
### style.less
	Your magic comes HERE!!!
	Additionally you can use the ie classes in this file

### Suggested css coding styles
	.codingconventions {
		display: ;
		z-index: ;
		positon: ;
		left: ;
		top: ;
		width: ;
		height: ;
		float: ;
		margin: ;
		padding: ;
		text: ;
		color: ;
		background: ;
		border: ;
		other: ;
		effects: ;
		mixings: ;
	}
	.onelinecrules { rule: value; }
### Questions

If you have any questions or issues feel free to mail me on robbie.bardijn@gmail.com 
or contact me on social networks http://www.robbiebardijn.be
