# Pulse Counter wrapper for mJS

This is an old lib I developed to be able to use the pulse counter peripheral of the esp32.

Most of the C methods are just wrappers for FFI'ed functions in JS.

I've used it the most basic way possible. Set up a counter with no control pins and just get the counts. Most of the other functions I haven't used or tested.