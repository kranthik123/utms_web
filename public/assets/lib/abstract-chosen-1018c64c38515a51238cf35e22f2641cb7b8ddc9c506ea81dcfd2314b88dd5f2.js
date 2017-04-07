(function(){var t;t=function(){function t(e,s){this.form_field=e,this.options=null!=s?s:{},t.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.on_ready())}return t.prototype.set_default_values=function(){return this.click_test_action=function(t){return function(e){return t.test_active_click(e)}}(this),this.activate_action=function(t){return function(e){return t.activate_field(e)}}(this),this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text&&this.options.allow_single_deselect,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null==this.options.enable_split_word_search||this.options.enable_split_word_search,this.group_search=null==this.options.group_search||this.options.group_search,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null==this.options.single_backstroke_delete||this.options.single_backstroke_delete,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null==this.options.display_selected_options||this.options.display_selected_options,this.display_disabled_options=null==this.options.display_disabled_options||this.options.display_disabled_options,this.include_group_label_in_selected=this.options.include_group_label_in_selected||!1,this.max_shown_results=this.options.max_shown_results||Number.POSITIVE_INFINITY,this.case_sensitive_search=this.options.case_sensitive_search||!1},t.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||t.default_multiple_text:this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||t.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||t.default_no_result_text},t.prototype.choice_label=function(t){return this.include_group_label_in_selected&&null!=t.group_label?"<b class='group-name'>"+t.group_label+"</b>"+t.html:t.html},t.prototype.mouse_enter=function(){return this.mouse_on_container=!0},t.prototype.mouse_leave=function(){return this.mouse_on_container=!1},t.prototype.input_focus=function(){if(this.is_multiple){if(!this.active_field)return setTimeout(function(t){return function(){return t.container_mousedown()}}(this),50)}else if(!this.active_field)return this.activate_field()},t.prototype.input_blur=function(){if(!this.mouse_on_container)return this.active_field=!1,setTimeout(function(t){return function(){return t.blur_test()}}(this),100)},t.prototype.results_option_build=function(t){var e,s,i,r,o,n,l;for(e="",l=0,n=this.results_data,r=0,o=n.length;r<o&&(s=n[r],i="",i=s.group?this.result_add_group(s):this.result_add_option(s),""!==i&&(l++,e+=i),(null!=t?t.first:void 0)&&(s.selected&&this.is_multiple?this.choice_build(s):s.selected&&!this.is_multiple&&this.single_set_selected_text(this.choice_label(s))),!(l>=this.max_shown_results));r++);return e},t.prototype.result_add_option=function(t){var e,s;return t.search_match&&this.include_option_in_results(t)?(e=[],t.disabled||t.selected&&this.is_multiple||e.push("active-result"),!t.disabled||t.selected&&this.is_multiple||e.push("disabled-result"),t.selected&&e.push("result-selected"),null!=t.group_array_index&&e.push("group-option"),""!==t.classes&&e.push(t.classes),s=document.createElement("li"),s.className=e.join(" "),s.style.cssText=t.style,s.setAttribute("data-option-array-index",t.array_index),s.innerHTML=t.search_text,t.title&&(s.title=t.title),this.outerHTML(s)):""},t.prototype.result_add_group=function(t){var e,s;return(t.search_match||t.group_match)&&t.active_options>0?(e=[],e.push("group-result"),t.classes&&e.push(t.classes),s=document.createElement("li"),s.className=e.join(" "),s.innerHTML=t.search_text,t.title&&(s.title=t.title),this.outerHTML(s)):""},t.prototype.results_update_field=function(){if(this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing)return this.winnow_results()},t.prototype.reset_single_select_options=function(){var t,e,s,i,r;for(s=this.results_data,r=[],t=0,e=s.length;t<e;t++)i=s[t],i.selected?r.push(i.selected=!1):r.push(void 0);return r},t.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},t.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},t.prototype.winnow_results=function(){var t,e,s,i,r,o,n,l,_,u,h,a;for(this.no_results_clear(),n=0,_=this.get_search_text(),t=_.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),a=new RegExp(t,"i"),o=this.get_search_regex(t),r=this.results_data,e=0,s=r.length;e<s;e++)i=r[e],i.search_match=!1,l=null,this.include_option_in_results(i)&&(i.group&&(i.group_match=!1,i.active_options=0),null!=i.group_array_index&&this.results_data[i.group_array_index]&&(l=this.results_data[i.group_array_index],0===l.active_options&&l.search_match&&(n+=1),l.active_options+=1),i.search_text=i.group?i.label:i.html,i.group&&!this.group_search||(i.search_match=this.search_string_match(i.search_text,o),i.search_match&&!i.group&&(n+=1),i.search_match?(_.length&&(u=i.search_text.search(a),h=i.search_text.substr(0,u+_.length)+"</em>"+i.search_text.substr(u+_.length),i.search_text=h.substr(0,u)+"<em>"+h.substr(u)),null!=l&&(l.group_match=!0)):null!=i.group_array_index&&this.results_data[i.group_array_index].search_match&&(i.search_match=!0)));return this.result_clear_highlight(),n<1&&_.length?(this.update_results_content(""),this.no_results(_)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},t.prototype.get_search_regex=function(t){var e,s;return e=this.search_contains?"":"^",s=this.case_sensitive_search?"":"i",new RegExp(e+t,s)},t.prototype.search_string_match=function(t,e){var s,i,r,o;if(e.test(t))return!0;if(this.enable_split_word_search&&(t.indexOf(" ")>=0||0===t.indexOf("["))&&(o=t.replace(/\[|\]/g,"").split(" "),o.length))for(s=0,i=o.length;s<i;s++)if(r=o[s],e.test(r))return!0},t.prototype.choices_count=function(){var t,e,s,i;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,i=this.form_field.options,t=0,e=i.length;t<e;t++)s=i[t],s.selected&&(this.selected_option_count+=1);return this.selected_option_count},t.prototype.choices_click=function(t){if(t.preventDefault(),!this.results_showing&&!this.is_disabled)return this.results_show()},t.prototype.keyup_checker=function(t){var e,s;switch(s=null!=(e=t.which)?e:t.keyCode,this.search_field_scale(),s){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(t.preventDefault(),this.results_showing)return this.result_select(t);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:case 18:break;default:return this.results_search()}},t.prototype.clipboard_event_checker=function(){return setTimeout(function(t){return function(){return t.results_search()}}(this),50)},t.prototype.container_width=function(){return null!=this.options.width?this.options.width:this.form_field.offsetWidth+"px"},t.prototype.include_option_in_results=function(t){return!(this.is_multiple&&!this.display_selected_options&&t.selected)&&(!(!this.display_disabled_options&&t.disabled)&&!t.empty)},t.prototype.search_results_touchstart=function(t){return this.touch_started=!0,this.search_results_mouseover(t)},t.prototype.search_results_touchmove=function(t){return this.touch_started=!1,this.search_results_mouseout(t)},t.prototype.search_results_touchend=function(t){if(this.touch_started)return this.search_results_mouseup(t)},t.prototype.outerHTML=function(t){var e;return t.outerHTML?t.outerHTML:(e=document.createElement("div"),e.appendChild(t),e.innerHTML)},t.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:!(/iP(od|hone)/i.test(window.navigator.userAgent)||/IEMobile/i.test(window.navigator.userAgent)||/Windows Phone/i.test(window.navigator.userAgent)||/BlackBerry/i.test(window.navigator.userAgent)||/BB10/i.test(window.navigator.userAgent)||/Android.*Mobile/i.test(window.navigator.userAgent))},t.default_multiple_text="Select Some Options",t.default_single_text="Select an Option",t.default_no_result_text="No results match",t}(),window.AbstractChosen=t}).call(this);