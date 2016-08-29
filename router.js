/**
 * Created by yuan on 7/29/16.
 */
/*global module,cmd,require,process*/
'use strict';
let currentActionName = 'init';
const  link1=require('./codings/code_to_barcodes.js');
const  link2=require('./codings/code_to_postcodes.js');

const actions = [{
        name: 'init',
        help: `
- - - - -  Welcome - - - -
---> 1. postcodes-barcodes         
---> 2. barcodes-postcodes
---> 3. quit
- - - - - - - - - - - - -`.trim(),
        doActions(cmd){
            switch (cmd) {
            case '1': currentActionName = 'barcodes';break;
            case '2': currentActionName = 'postcodes';break;
            case '3': process.exit();break;
            default: console.log('Your input is wrong!');
            }
        }
      },{
        name:'barcodes',
        help:`
         Please input postcodes (q to exit)`.trim(),
        doActions(cmd){
            switch (cmd) {
                case 'q':
                    currentActionName = 'init';
                    break;
                default:
                    console.log('The barcodes of '+cmd+' is');
                    console.log(link1.codingBarcodes(cmd));
                    break;
            }
        }
    },{
        name:'postcodes',
        help:`
         Please input barcodes(q to exit)`.trim(),
         doActions(cmd){
             switch (cmd) {
                 case 'q': currentActionName = 'init';
                           break;
                 default: console.log('The postcodes of '+cmd+' is');
                          console.log(link2.codingPostcodes(cmd));
                          break;
             }
         }
    }];

const  router= {
    handle(cmd){
        actions.find(v=>v.name === currentActionName).doActions(cmd);
    },
    start(){
        console.log(actions.find(v=>v.name === currentActionName).help);
    }
};

module.exports=router;
