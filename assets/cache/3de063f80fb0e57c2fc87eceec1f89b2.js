$(function(){pyro.filter={$content:$('#filter-stage'),$filter_form:$('#filters form'),f_module:$('input[name="f_module"]').val(),init:function(){$('a.cancel').button();$('select',pyro.filter.$filter_form).on('change',function(){form_data=pyro.filter.$filter_form.serialize();pyro.filter.do_filter(pyro.filter.f_module,form_data);});$('input[type="text"]',pyro.filter.$filter_form).on('keyup',$.debounce(500,function(){form_data=pyro.filter.$filter_form.serialize();pyro.filter.do_filter(pyro.filter.f_module,form_data);}));$('body').on('click','.pagination a',function(e){e.preventDefault();url=$(this).attr('href');form_data=pyro.filter.$filter_form.serialize();pyro.filter.do_filter(pyro.filter.f_module,form_data,url);});$('a.cancel',pyro.filter.$filter_form).click(function(){$('select',pyro.filter.$filter_form).val('0');$('input[type="text"]').val('');form_data=pyro.filter.$filter_form.serialize();pyro.filter.do_filter(pyro.filter.f_module,form_data);});pyro.filter.$filter_form.submit(function(e){e.preventDefault();});pyro.filter.$filter_form.find('select').first().trigger('change');},do_filter:function(module,form_data,url){form_action=pyro.filter.$filter_form.attr('action');post_url=form_action?form_action:SITE_URL+'admin/'+module;if(typeof url!=='undefined'){post_url=url;}
pyro.clear_notifications();pyro.filter.$content.fadeOut('fast',function(){$.post(post_url,form_data,function(data,response,xhr){var ct=xhr.getResponseHeader('content-type')||'',html='';if(ct.indexOf('application/json')>-1&&typeof data=='object')
{html='html'in data?data.html:'';pyro.filter.handler_response_json(data);}
else{html=data;}
pyro.chosen();pyro.filter.$content.html(html).fadeIn('fast');});});},handler_response_json:function(json)
{if('update_filter_field'in json&&typeof json.update_filter_field=='object')
{$.each(json.update_filter_field,pyro.filter.update_filter_field);}},update_filter_field:function(field,data)
{var $field=pyro.filter.$filter_form.find('[name='+field+']');if($field.is('select'))
{if(typeof data=='object')
{if('options'in data)
{var selected,value;selected=$field.val();$field.children('option').remove();for(value in data.options)
{$field.append('<option value="'+value+'"'+(value==selected?' selected="selected"':'')+'>'+data.options[value]+'</option>');}}}}}};pyro.filter.init();});
