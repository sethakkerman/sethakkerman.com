!function(i,$,t){"use strict";var s={MINRATIO:.75,init:function(){this.$els=$(".poster"),this.respond(),this.bind()},bind:function(){this.$els.find("img").on("load",this.respond.bind(this)),$(window).on("resize",this.respond.bind(this))},resize:function(){var i=this;i.$els.each(function(){var i,t;i=$(this),t=i.find(".poster-image"),i.css({"max-height":"700px"})})},reset:function(){this.$els.each(function(){var i=$(this).find(".poster-image");i.removeAttr("style"),i.find("img").removeAttr("style")})},respond:function(){this.pageWidth=$(window).width(),this.pageHeight=$(window).height(),this.aspectRatio=this.pageWidth/this.pageHeight,this.aspectRatio>this.MINRATIO?this.resize():this.reset()}};$(function(){s.init()}),i.Posters=s||{}}(this,jQuery);