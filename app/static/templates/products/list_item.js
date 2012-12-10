define([
  'underscore'
], function(_){
  var list_item = _.template('<a class="detailLink" href="<%= href %>"><div class="labsEntry" id="<%= id %>"><div class="labsPreview"><img src="http://127.0.0.1/files/www_jamesrhys_net/<%= thumbnail %>"/></div><div class="subheading labsTitle"><%= title %></div></div></a>');
  return list_item;  
})