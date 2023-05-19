## SASS - syntactically style sheets
.scss file type
$name: value; used for denoting variables

nest css to target different levels

### mixins
behave like functions 

define @mixin name();
call using @include name();
-webkit-
-moz-
-ms-

### logic
@if

### for
2 ways - start through end VS start to end (excludes end)
@for $i from <start> to / through <end>
#{$i} for string interpolation but $i to input value

### each
