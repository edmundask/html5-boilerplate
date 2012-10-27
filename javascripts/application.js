/*!
 * Main application JS code
 * @author Edmundas Kondrašovas
 */
 
/*************************************************************************/
/* Application
/*************************************************************************/

(function(window, undefined){

  // application object
  var App = {};
    
    // stores array of queued ajax requests
    App.queue = [];
    
    // stores array of cached objects, primarily DOM selectors
    App.cache = {};
    
    // stores the url of your application
    App.url = '';
    
    // subscriptions
    App.subscriptions = {};
  
    // modified version of peter higgens pubsub
    // https://github.com/phiggins42/bloody-jquery-plugins/blob/master/pubsub.js
    App.publish = function(topic, args){
      App.subscriptions[topic] && $.each(App.subscriptions[topic], function(){
          this.apply(App, args || []);
      });
    };
  
    App.subscribe = function(topic, callback){
        if(!App.subscriptions[topic]){
            App.subscriptions[topic] = [];
        }
        App.subscriptions[topic].push(callback);
        return [topic, callback];
    };
    
    App.unsubscribe = function(handle){
        var t = handle[0];
        App.subscriptions[t] && $.each(App.subscriptions[topic], function(idx){
            if(this == handle[1]){
                App.subscriptions[topic].splice(idx, 1);
            }
        });
    };
    
  /*************************************************************************/
  /* Subscriptions
  /*************************************************************************/
  
  App.subscribe('init', function(){
     
  });
  
  /*************************************************************************/
  /* Events
  /*************************************************************************/
  
  // DOM Ready
  jQuery(function($){
      App.publish('init');
  });
  
  // Window unload
  jQuery(window).unload(function(){
      App.publish('destroy');
  });

})(window);