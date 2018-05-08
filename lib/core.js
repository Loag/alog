

module.exports = {
   info: function(s) {
     console.log('\x1b[32m%s\x1b[0m', `${Date.now()} INFO - ${s}`);
   },
   warning: function (s) {
     // yellow
     console.log('\x1b[33m%s\x1b[0m', `${Date.now()} WARNING - ${s}`);
   },
   error: function (s) {
     // red
     console.log('\x1b[31m%s\x1b[0m', `${Date.now()} ERROR - ${s}`);
   },
   task: function (s) {
     // blue
     console.log('\x1b[34m%s\x1b[0m', `${Date.now()} TASKRUNNER - ${s}`);
   },
   db: function (s) {
     // magenta
     console.log('\x1b[35m%s\x1b[0m',`${Date.now()} DATABASE - ${s}`);
   },
   utility: function (s) {
     // cyan
     console.log('\x1b[36m%s\x1b[0m', `${Date.now()} UTILITY - ${s}`);
   }
}