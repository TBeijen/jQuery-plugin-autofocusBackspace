/*
 * autofocusBackspace
 *
 * jQuery plugin that focuses the first of the matching elements while
 * preserving backspace functionality if no text has yet been entered
 *
 * Copyright (c) 2011 Tibo Beijen
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){
    $.fn.autofocusBackspace = function() {
        var _target = this.first();
        var _active = true;
        _target.focus();
        _target.keydown(function(event) {
            if (_active && event.keyCode == '8') {
                history.back();
            } else {
                _active = false;
            }
        _target.blur(function(event) {
            _active = false;
        })
        });
        return _target;
    };
})(jQuery);