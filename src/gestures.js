(function() {

  /**
   * Gestures
   *
   * @constructor
   */
  var Gestures = (function() {

    /**
     * Gestures
     *
     * @constructor
     */
    var Gestures = function() {

      // Version
      this.version = [0, 1, 0].join('.');

    };

    /**
     * GetElements
     *
     * @private
     * @param {string} selector
     * @param {function} iterator
     */
    var getElements = function(selector, iterator) {

      // Does the query
      var elements = document.querySelectorAll( selector );

      // Goes through the NodeList of found elements
      for ( var i = elements.length; i; i-- ) {
        iterator( elements[ i - 1 ], elements );
      }

    };

    /**
     * Longpress
     * 
     * @param {string} selector
     * @param {function} fn
     */
    Gestures.prototype.longpress = function(selector, fn) {

      var event = [
        'mousedown',
        'mouseup',
        'touchstart',
        'touchend',
        'click'
      ];

      // Attaches the even
      getElements(selector, function(element) {

        var timer;

        var dispatchEvent = function(event) {
  
          switch ( event.type ) {
            case 'mousedown':
            case 'touchstart':
              timer = window.setTimeout(fn, 1000, event);
              break;
            case 'mouseup':
            case 'touchend':
              window.clearTimeout( timer );
              break;
            default:
              event.preventDefault();
          }
  
        };
  
        events.forEach(function(event) {
          element.addEventListener( event, dispatchEvent, false );
        });
        
      });
  
    };

    /**
     * Swipe
     * 
     * @param {string} selector
     * @param {object} fns
     */
    Gestures.prototype.swipe = function(selector, fns) {

      // List of events
      var events = [
        'mousedown',
        'mouseup',
        'click',
        'touchstart',
        'touchend'
      ];

      getElements(selector, function(element) {
        
        var coords = {};
        
        var dispatchEvent = function(event) {
          
          switch ( event.type ) {

            case 'mousedown':
              coords = { 
                x: event.x, 
                y: event.y
              };
              break;

            case 'mouseup':
              
              // Swipe to the left
              if ( ( coords.x - event.x > 40 && coords.x > event.x ) && fns.left ) {
                return fns.left(event) || undefined;
              }
              
              // Swipe to the right
              if ( ( event.x - coords.x > 40 && coords.x < event.x ) && fns.right ) {
                  return fns.right(event) || undefined;
              }
              
              // Swipe to the top
              if ( ( coords.y - event.y > 40 && coords.y > event.y ) && fns.top ) {
                return fns.top(event) || undefined;
              }
      
              // Swipe to the bottom
              if ( ( event.y - coords.y > 40 && coords.y < event.y ) && fns.bottom ) {
                return fns.bottom(event) || undefined;
              }
      
              break;

            default:
              event.preventDefault();

          }

        };
          
        events.forEach(function(event) {
          element.addEventListener( event, dispatchEvent, false );
        });

      });

    };

    /**
     * Swipe(Left|Right|Bottom|Top).
     * 
     * @param {string} selector
     * @param {function} fn
     */
    [
      'left',
      'right',
      'bottom',
      'top'
    ].forEach(function(direction) {

      // Name of the method (for instance ‘swipeLeft’)
      var method = 'swipe' + direction.charAt(0).toUpperCase() + direction.slice(1);

      // Generate a new method
      Gestures.prototype[method] = function(selector, fn) {
        var options = {};
        options[direction] = fn;
        this.swipe(selector, options);
      };

    });
  
    /**
     * DoubleTap
     * 
     * @param {string} selector
     * @param {function} fn
     */
    Gestures.prototype.doubleTap = function(selector, fn) {

      var events = [
        'mouseup',
        'touchend'
      ];

      return getElements(selector, function(element) {

        // How many times has been the element tapped
        var times = 0;

        var dispatchEvent = function(event) {
        
          times++;
          
          if ( times === 2 ) {
            fn( event );
            times = 0;
            return;

          }
          
          window.setTimeout(function() {
            times = 0;
          }, 500);

        };        

        events.forEach(function(event) {
          element.addEventListener( event, dispatchEvent, false );
        });

      });
  
    };

    /**
     * TripleTap
     * 
     * @param {string} selector
     * @param {function} fn
     */
    Gestures.prototype.tripleTap = function(selector, fn) {

      var events = [
        'mouseup',
        'touchend'
      ];

      return getElements(selector, function(element) {

        // How many times has been the element tapped
        var times = 0;

        var dispatchEvent = function(event) {
        
          times++;
          
          if ( times === 3 ) {
            fn( event );
            times = 0;
            return;

          }
          
          window.setTimeout(function() {
            times = 0;
          }, 500);

        };        

        events.forEach(function(event) {
          element.addEventListener( event, dispatchEvent, false );
        });

      });
  
    };

    return new Gestures();

  }());

  // Export
  this.Gestures = Gestures;

}());