function slugify(str){str=str.replace(/^\s+|\s+$/g,'');str=str.toLowerCase();var from="ĺěščřžýťňďàáäâèéëêìíïîòóöôùůúüûñç·/_,:;";var to="lescrzytndaaaaeeeeiiiioooouuuuunc------";for(var i=0,l=from.length;i<l;i++){str=str.replace(new RegExp(from.charAt(i),'g'),to.charAt(i));}
str=str.replace(/[^a-z0-9 -]/g,'').replace(/\s+/g,'_').replace(/-+/g,'_');return str;}
jQuery(document).ready(function(){$('#stream_name').keyup(function(){$('#stream_slug').val(slugify($('#stream_name').val()));});});
