/**
 * Baseclass for server side widgets.
 * 
 * <p> The velocity response writer is used, the widget only specifies the
 *     template name in the getTemplateName() method. </p>
 *
 * @param properties A map of fields to set. Refer to the list of non-private fields. 
 * @class AbstractServerSideWidget
 * @augments jQuery.solrjs.AbstractWidget
 */
jQuery.solrjs.AbstractServerSideWidget = jQuery.solrjs.createClass ("AbstractWidget", /** @lends jQuery.solrjs.AbstractServerSideWidget.prototype */  { 
  
  /**
   * Adds the velocity specific request parameters to the url and creates a JSON call
   * using a dynamic script tag. The html response from the velocity template gets wrapped inside a 
   * javascript object to make cross site requests possible.
   * 
   * @param url The solr query request
   */
  executeHttpRequest : function(url) {
    var query = url.substring(url.indexOf("q")+2,url.length);
    url = url.substring(0,url.indexOf("q")-1);
    url += "&wt=velocity&v.json=?&q="+query.toString()+"&v.template=" + this.getTemplateName();   
    url += "&solrjs.widgetid=" + this.id;   
    var me = this;
    jQuery.getJSON(url,
      function(data){
        me.handleResult(data.result);
      }
    );
  },
  
  getTemplateName : function() { 
   throw("Abstract method");
  },
  
  /**
   * The default behaviour is that the result of teh template is simply "copied" to the target div.
   * 
   * @param result The result of the velocity template wrapped inside a javascript object.
   */
  handleResult : function(result) { 
    jQuery(this.target).html(result);
    //window.console.markTimeline("Marcando el delay");
    //setTimeout('delayedRedirect()', 5000); 
    document.cookie = '__done=1; path=/';
  },

});

