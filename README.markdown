# autofocusBackspace jQuery plugin

jQuery plugin that focuses the first of the matching elements while
preserving the backspace functionality of navigating to the previous page.

Plugin mimics browser backspace behaviour until:
 * Actual text has been entered
 * The element that received autofocus loses it's focus

## Usage
 * Include jQuery
 * Include jQuery.autofocusBackspace.js
 * Call plugin, example:

    $('input').autofocusBackspace();

## TODO:
 * If disabled, remove event handlers to prevent unneccessary code execution.
