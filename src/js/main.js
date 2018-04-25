//import {Markdown} from "./Markdown";
//import hljs from "./node_modules/highlightjs/highlight.pack.min.js";
import hljs from "./highlight.pack.min.js";
import Markdown from "./Markdown.js";
document.addEventListener('DOMContentLoaded', function(){
    //hljs.initHighlightingOnLoad();
    hljs.initHighlighting();
    let m = new Markdown();
    console.log(document.body);
    m.ToAppend(document.body);
    //import {Sub} from "./Sub";
    //let sub = new Sub();
    //sub.Show();
    //import {hello} from "./sub";
    //hello();
}, false);
