/**
 * Created by yuan on 7/29/16.
 */
/*global require,repl*/
'use strict';
const repl=require('repl');
const router=require('./router');

router.start();

repl.start({prompt:'*-*-*-*-* ->',eval:handleInput});
function  handleInput(cmd,context,filename,callback) {
    router.handle(cmd.trim());
    router.start();
    callback();
}