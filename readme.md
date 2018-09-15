**INIT**

CLI:
1.  npm install
2.  bower install
3.  gulp install

**ease of use for PhpStorm**

Install plugins "pug", "sass", "coffeeScript"

_NOTE:_

The default gulp-task does not run all registered tasks in order to compile faster during development.
If files in /route are edited, the gulp task "install" should be used, 
or adjustments to the variable "runConfig" in the gulpfile should be made.