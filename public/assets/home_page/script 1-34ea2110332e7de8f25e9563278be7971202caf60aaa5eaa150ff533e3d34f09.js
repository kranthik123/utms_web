!function(n){function i(){clearTimeout(t),t=setTimeout(e,50)}function e(){var i=n(".ctrans-gallery .modal");if(i.length){var e=30,t=n(window).width(),a=n(window).height();i.each(function(){var i,o,r=(n(this).hasClass("in"),n(this).find(".modal-dialog")),s=r.find(".item.active > img");r.find(".item.prev > img, .item.next > img").length&&(s=r.find(".item.prev > img, .item.next > img").eq(0));var d=s[0].naturalWidth,l=s[0].naturalHeight;if(t/a>d/l){var m=a-2*e;i=m*d/l}else i=t-2*e;i=i>=d?d:i,o=(a-2*e-i*l/d)/2,r.css({width:parseInt(i),top:o})})}}n(document).on("add.cards change.cards",function(i){"undefined"!=typeof n.fn.masonry&&n(i.target).outerFind(".ctrans-gallery").each(function(){var i=n(this).find(".ctrans-gallery-row").masonry({itemSelector:".ctrans-gallery-item",percentPosition:!0});i.masonry("reloadItems"),i.imagesLoaded().progress(function(){i.masonry("layout")})})});var t;n(window).on("resize load",i),n(window).on("show.bs.modal",i),n(window).on("slid.bs.carousel",i)}(jQuery);