/*
 * autofocusBackspace
 *
 * jQuery plugin that focuses the first of the matching elements while
 * preserving backspace functionality if no text has yet been entered
 *
 * TODO:
 *  - If disabled, remove event handlers to prevent unneccessary code execution
 *
 * Copyright (c) 2011 Tibo Beijen
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){
    $.fn.autofocusBackspace = function () {
        // declare vars & determine start values
        var _target = this.first();
        var _initValue = _target.val();
        var _active = true;
        _target.focus();

        // disable if input is actually changed
        _target.keyup(function(event) {
            if (_target.val() !== _initValue) {
                _active = false;
            }
        });

        // disable if losing focus
        _target.blur(function(event) {
            _active = false;
        });

        // respond to backspace while active
        _target.keydown(function(event) {
            if (_active && event.keyCode === '8') {
                history.back();
            }
        });
        return _target;
    };
})(jQuery);