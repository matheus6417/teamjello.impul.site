﻿/*!
 * MotorCortex.js 1.1.0
 *
 * Copyright 2014, Andreas Trantidis
 * atrantidis@gmail.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 */
(function(a){a.MotorCortex=function(s){var f=false;if(s){f=s.hasOwnProperty("debug")?s.debug:false}var k=[];var r=[];var n=[];var e=this;var l=["duration","easing","delay","complete","loop"];var j=function(u,z){var w=u*1;var t=z*1;if(z<=u){e.log("warn","When using @rand make sure the first parameter is always smaller than the first one. Reverting and proceeding");var t=u*1;var w=z*1}var v=t-w;return w+v*Math.random()};var h=function(t){return r[t]};var b=function(t){if(t.indexOf("+=")==0){return"+="}else{if(t.indexOf("-=")==0){return"-="}else{if(t.indexOf("-")==0){return"-"}else{return""}}}};var d=function(t){if(t.indexOf(")px",t.length-3)!==-1){return"px"}else{if(t.indexOf("%",t.length-1)!==-1){return"%"}else{return""}}};var g=function(t){var u=t.split(".")[1].split(")")[0];if(u.indexOf("%")!=-1){return u.substring(0,u.length-1)}else{return u}};this.trigger=function(u,v,B,A){var z=true;var x;var y,w,t;if(arguments.length===0){e.log("error","You must always include the event name to be triggered when invoking the MotorCortex.trigger function, as the first parameter in string format");x=new m(null);z=false}else{if(typeof arguments[0]!="string"){e.log("error","The first argument of the trigger function should always be a string representing the name of the event to be triggered. "+typeof arguments[0]+" passed on call.");x=new m(null);z=false}else{if(arguments.length>1){if(typeof arguments[1]==="object"&&arguments[1]!=null){if(arguments[1].target){y=arguments[1];if(arguments.length>2){if(typeof arguments[2]==="object"&&arguments[2]!=null){w=arguments[2];if(arguments.length>3){if(typeof arguments[3]==="function"){t=arguments[3]}else{e.log("error","Unrecognized type of 4th parameter on trigger function of event "+u+". Function expected, "+typeof arguments[3]+" passed.");z=false}}}else{if(typeof arguments[2]==="function"){t=arguments[2]}else{e.log("error","Unrecognized type of 3rd parameter on trigger function of event "+u+". Object or Function expected, "+typeof arguments[2]+" passed.");z=false}}}}else{w=arguments[1];if(arguments.length>2){if(typeof arguments[2]!="function"){e.log("error","Unrecognized type of 3rd parameter on trigger function of event "+u+". Function expected, "+typeof arguments[2]+" passed.");z=false}else{t=arguments[2]}}}}else{if(typeof arguments[1]==="function"){t=arguments[1]}else{e.log("error","Unrecognized type of 2nd parameter on trigger function of event "+u+". Object or Function expected, "+typeof arguments[1]+" passed.");z=false}}}}}if(!w){w={}}if(!t){t=function(){}}if(z){if(r.hasOwnProperty(u)){x=new m(r[u]);r[u].fire(y,w,t)}else{x=new m(null);e.log("error","The event with name "+u+" has not been defined in any of the MSS files. It will be ignored!")}}return x};var q=function(v,A){var t=new RegExp(/^[a-zA-Z0-9\.\-\_]+\:callback$/);var x=new RegExp(/^@[a-zA-Z0-9\.\-\_]*?/);for(var y in v.attributes){if(v.attributes.hasOwnProperty(y)){if(y=="@index"||y=="@params"||y=="@domel"){e.log("warn","The keywords/parameter names @index, @params and @domel are reserved by MotorCortex and cannot be used as a global variable's name. The declared global "+y+" will be ignored!")}else{if(x.exec(y)){k[y]=v.attributes[y]}else{e.log("warn","The property "+y+" should begin with the character '@'. It will be ignored!")}}}}for(var y in v.children){if(t.exec(y)){var z=y.split(":");n[z[0]]=v.children[y].attributes.eventName}var z=y.split(":");if(z.length<2){e.log("error","The MC selection and event part "+y+" is not valid. Each MC selection string should consist by least a selection string and an event name separated by the ':' character.")}else{if(!r.hasOwnProperty(z[z.length-1])){var u=1;if(v.children[y].attributes.hasOwnProperty("loop")){u=v.children[y].attributes.loop}var w=new o(u,z[z.length-1]);w.addThread(z,v.children[y]);r[z[z.length-1]]=w}else{w.addThread(z,v.children[y])}}}A()};var m=function(t){this.stop=function(){if(t){t.stop()}else{e.log("error","You tried to stop a process that has not been executed.")}}};var p=function(y,w,E,C,D){this.loops=1;if(!C){C={attributes:{},options:{}}}if(!D){D=""}this.selectionFunction=this.createSelectionFunction(y,D);var u=new RegExp(/^@globals\.[a-zA-Z0-9\-\_]*$/);var H=JSON.parse(JSON.stringify(C));H.attributes={};for(var G in w.attributes){if(u.exec(w.attributes[G])){var v=w.attributes[G].split(".")[1].trim();if(!k.hasOwnProperty("@"+v)){e.log("error","The global variable "+w.attributes[G]+" is not defined. It will be ignored")}else{w.attributes[G]=k["@"+v]}}if(l.indexOf(G)>=0){if(G!=="loop"){H.options[G]=w.attributes[G]}else{this.loops=w.attributes[G]}}else{H.attributes[G]=w.attributes[G]}}var A=function(){E.CallbackHandler.animationEnded()};var B=Object.keys(w.children);if(w.attributes.hasOwnProperty("loop")){E.setLoopTimes(w.attributes.loop)}for(var z=0;z<B.length;z++){var F=B[z];if(F=="complete:trigger"){A=function(I,J){var K=function(){E.CallbackHandler.animationEnded()};h(w.children[F].attributes.eventName).fire(I,J,K)}}else{if(F!="complete"){E.addReadyThread(new p(this.selectionFunction,w.children[F],E,H,F))}else{var x=1;if(w.children[F].attributes.hasOwnProperty("loop")){x=w.children[F].attributes.loop}var t=new o(x);t.addReadyThread(new p(this.selectionFunction,w.children.complete,t,H));A=function(I,J){var K=function(){E.CallbackHandler.animationEnded()};t.fire(I,J,K)}}}}this.createAnimationFunction(H,A);this.execute=function(I,J){this.animationFunction(I,J,A)}};p.prototype.createAnimationFunction=function(w){var x=new RegExp(/^@params\.[a-zA-Z0-9\-\_]*$|^-@params\.[a-zA-Z0-9\-\_]*$|^-=@params\.[a-zA-Z0-9\-\_]*$|^\+=@params\.[a-zA-Z0-9\-\_]*$|^@params\.[a-zA-Z0-9\-\_]*.%$|-^@params\.[a-zA-Z0-9\-\_]*.%$|^-=@params\.[a-zA-Z0-9\-\_]*.%$|^\+=@params\.[a-zA-Z0-9\-\_]*.%$|^\(@params\.[a-zA-Z0-9\-\_]*.\)px$|-^\(@params\.[a-zA-Z0-9\-\_]*.\)px$|^-=\(@params\.[a-zA-Z0-9\-\_]*.\)px$|^\+=\(@params\.[a-zA-Z0-9\-\_]*.\)px$/);var v=new RegExp(/^@domel\.[a-zA-Z0-9\-\_]*$|^-@domel\.[a-zA-Z0-9\-\_]*$|^-=@domel\.[a-zA-Z0-9\-\_]*$|^\+=@domel\.[a-zA-Z0-9\-\_]*$|^@domel\.[a-zA-Z0-9\-\_]*.%$|^-@domel\.[a-zA-Z0-9\-\_]*.%$|^-=@domel\.[a-zA-Z0-9\-\_]*.%$|^\+=@domel\.[a-zA-Z0-9\-\_]*.%$|^\(@domel\.[a-zA-Z0-9\-\_]*.\)px$|^-\(@domel\.[a-zA-Z0-9\-\_]*.\)px$|^-=\(@domel\.[a-zA-Z0-9\-\_]*.\)px$|^\+=\(@domel\.[a-zA-Z0-9\-\_]*.\)px$/);var t=new RegExp(/^@rand\( *?.+ *?, *?.+ *?\)$|^-@rand\( *?.+ *?, *?.+ *?\)$|^-=@rand\( *?.+ *?, *?.+ *?\)$|^\+=@rand\( *?.+ *?, *?.+ *?\)$|^@rand\( *?.+ *?, *?.+ *?\)%$|^-@rand\( *?.+ *?, *?.+ *?\)%$|^-=@rand\( *?.+ *?, *?.+ *?\)%$|^\+=@rand\( *?.+ *?, *?.+ *?\)%$|^@rand\( *?.+ *?, *?.+ *?\)px$|^-@rand\( *?.+ *?, *?.+ *?\)px$|^-=@rand\( *?.+ *?, *?.+ *?\)px$|^\+=@rand\( *?.+ *?, *?.+ *?\)px$/);var u=false;if(!w.options.hasOwnProperty("duration")){w.options.duration="0.3s";u=true}this.animationFunction=function(M,O,B){var Q=JSON.parse(JSON.stringify(w));var K=false;var y=false;var J=[];var L=[];var N=0;var G=[];var F=function(U){for(var T=0;T<G.length;T++){G[T](U)}return U};var D=false;var H=false;var S=false;for(var C in w.attributes){if(C=="-."){var z=w.attributes[C]+"";G.push(function(T){T.removeClass(z)});continue}else{if(C=="+."){var z=w.attributes[C]+"";G.push(function(T){T.addClass(z)});continue}else{if(C=="scroll"){D=true}else{if(C=="stop"){H=true}else{if(C=="reverse"){S=true}}}}}N+=1;if(x.exec(w.attributes[C])){var A=g(w.attributes[C]);if(O.hasOwnProperty(A)){Q.attributes[C]=b(w.attributes[C])+O[A]+d(w.attributes[C])}else{e.log("error","The variable "+A+" was expected in the params object but is not present. It will be ignored")}}else{if(v.exec(w.attributes[C])){J.push({pre:b(w.attributes[C]),units:d(w.attributes[C]),whichPart:"attributes",whichKey:C,byWhichAttr:g(w.attributes[C])});K=true}else{if(t.exec(w.attributes[C])){var E=w.attributes[C].match(/([^()]+)/g)[1].split(",");L.push({pre:b(w.attributes[C]),units:d(w.attributes[C]),whichPart:"attributes",whichKey:C,byWhichRand:[E[0].trim()*1,E[1].trim()*1]})}}}}for(var C in w.options){if(x.exec(w.options[C])){var A=g(w.options[C]);if(O.hasOwnProperty(A)){Q.options[C]=b(w.options[C])+O[A]+d(w.options[C])}else{e.log("error","The variable "+A+" was expected in the params object but is not present. It will be ignored")}}else{if(v.exec(w.options[C])){J.push({pre:b(w.options[C]),units:d(w.options[C]),whichPart:"options",whichKey:C,byWhichAttr:g(w.options[C])});K=true}else{if(t.exec(w.options[C])){y=true;var E=w.options[C].match(/([^()]+)/g)[1].split(",");L.push({pre:b(w.options[C]),units:d(w.options[C]),whichPart:"options",whichKey:C,byWhichRand:[E[0].trim()*1,E[1].trim()*1]})}}}}if(N==0){F(this.selectionFunction(w,M));B(M,O);return true}else{if(u&&!H&&!S){e.log("error","The duration has not been defined. The default (0.3s) will be used")}}if(!K&&!y){Q.options.complete=function(){B(M,O)};var R=this.selectionFunction(Q,M);if(D){this.selectionFunction(Q,M).velocity("scroll",Q.options)}if(H){F(this.selectionFunction(Q,M)).velocity("stop");B(M,O)}else{if(S){F(this.selectionFunction(Q,M)).velocity("reverse",Q.options)}else{F(this.selectionFunction(Q,M)).velocity(Q.attributes,Q.options)}}}else{var P=this.selectionFunction(Q,M);var I={numberOfElements:P.length,numberOfFinished:0,finished:function(){this.numberOfFinished+=1;if(this.numberOfFinished==this.numberOfElements){B(M,O)}}};P.each(function(){var U=JSON.parse(JSON.stringify(Q));for(var T=0;T<J.length;T++){U[J[T].whichPart][J[T].whichKey]=J[T].pre+$(this).attr(J[T].byWhichAttr)+J[T].units}for(var T=0;T<L.length;T++){U[L[T].whichPart][L[T].whichKey]=L[T].pre+j(L[T]["byWhichRand"][0],L[T]["byWhichRand"][1])+L[T].units}U.options.complete=function(){I.finished()};if(S){F($(this)).velocity("reverse",U.options)}else{F($(this)).velocity(U.attributes,U.options)}})}}};p.prototype.createSelectionFunction=function(D,z){var x=[{name:"index greater than",rxp:new RegExp(/^@index\ *?\>\ *?\d+$/),createSelectionFunction:function(E){return function(F){return":gt("+E.split(":")[1].trim()+")"}}},{name:"index less than",rxp:new RegExp(/^@index\ *?\<\ *?\d+$/),createSelectionFunction:function(E){return function(F){return":lt("+E.split(":")[1].trim()+")"}}},{name:"index less or equal to",rxp:new RegExp(/^@index\ *?\<\=\ *?\d+$/),createSelectionFunction:function(E){return function(F){return":lt("+E.split(":")[1].trim()+"):eq"+E.split(":")[1].trim()+")"}}},{name:"index greater or equal to",rxp:new RegExp(/^@index\ *?\>\=\ *?\d+$/),createSelectionFunction:function(E){return function(F){return":gt("+E.split(":")[1].trim()+"):eq"+E.split(":")[1].trim()+")"}}},{name:"index equals to",rxp:new RegExp(/^@index\ *?\={2}\ *?\d+$/),createSelectionFunction:function(E){return function(F){return":eq("+E.split(":")[1].trim()+")"}}},{name:"index odd",rxp:new RegExp(/^@index *?odd$/),createSelectionFunction:function(E){return function(F){return":odd"}}},{name:"index even",rxp:new RegExp(/^@index *?even$/),createSelectionFunction:function(E){return function(F){return":even"}}},{name:"index greater than parameter",rxp:new RegExp(/^@index\ *?\>\ *\@params. ?[a-zA-Z0-9\.\-\_]+$/),createSelectionFunction:function(E){return function(G){var F=E.split(":")[1].trim().split(".")[1];if(!G.hasOwnProperty(F)){e.log("error","The expected params key "+F+" is not present. The selector will be ignored!");return""}else{return":gt("+G[F]+")"}}}},{name:"index less than parameter",rxp:new RegExp(/^@index\ *?\<\ *\@params. ?[a-zA-Z0-9\.\-\_]+$/),createSelectionFunction:function(E){return function(G){var F=E.split(":")[1].trim().split(".")[1];if(!G.hasOwnProperty(F)){e.log("error","The expected params key "+F+" is not present. The selector will be ignored!");return""}else{return":lt("+G[F]+")"}}}},{name:"index less or equal to parameter",rxp:new RegExp(/^@index\ *?\<\=\ *\@params. ?[a-zA-Z0-9\.\-\_]+$/),createSelectionFunction:function(E){return function(G){var F=E.split(":")[1].trim().split(".")[1];if(!G.hasOwnProperty(F)){e.log("error","The expected params key "+F+" is not present. The selector will be ignored!");return""}else{return":lt("+G[F]+"):eq"+G[F]+")"}}}},{name:"index greater or equal to parameter",rxp:new RegExp(/^@index\ *?\>\=\ *\@params. ?[a-zA-Z0-9\.\-\_]+$/),createSelectionFunction:function(E){return function(G){var F=E.split(":")[1].trim().split(".")[1];if(!G.hasOwnProperty(F)){e.log("error","The expected params key "+F+" is not present. The selector will be ignored!");return""}else{return":gt("+G[F]+"):eq"+G[F]+")"}}}},{name:"index greater than parameter",rxp:new RegExp(/^@index\ *?\={2}\ *\@params. ?[a-zA-Z0-9\.\-\_]+$/),createSelectionFunction:function(E){return function(G){var F=E.split(":")[1].trim().split(".")[1];if(!G.hasOwnProperty(F)){e.log("error","The expected params key "+F+" is not present. The selector will be ignored!");return""}else{return":eq("+G[F]+")"}}}}];var y=function(E){return function(F){return E}};if(Object.prototype.toString.call(D)==="[object Array]"){var w=D.length;var t=[];var A;var B=false;for(var v=0;v<w-1;v++){if(D[v].indexOf("@")!=0){if(D[v]=="triggeringElement"){if(B){e.log("warn","The triggering object filter seems to have been applied twice. The second directive will be ignored!");continue}A=function(E){if(E){return $(E.target)}else{e.log("error","You have included the 'triggeringElement' directive in your selection string on MSS, though you didn't pass the event object on the trigger function. The directive will be ignored");return $("*")}};B=true}else{if(D[v].replace(/ +?/g,"")=="not(triggeringElement)"){if(B){e.log("warn","The triggering object filter seems to have been applied twice. The second directive will be ignored!");continue}A=function(E){if(E){return $("*").not($(E.target))}else{e.log("error","You have included the 'triggeringElement' directive in your selection string on MSS, though you didn't pass the event object on the trigger function. The directive will be ignored");return $("*")}};B=true}else{t.push(y(D[v]))}}}else{var C=false;for(var u=0;u<x.length;u++){if(x[u].rxp.exec(D[v])){t.push(x[u].createSelectionFunction(D[v]));C=true;break}}if(!C){e.log("error","The selection "+D[v]+" seems to be invalid. It will be ignored!")}}}return function(H,G){var F="";for(var E=0;E<t.length;E++){F+=t[E](H)}if(!A){var I=$(F)}else{var I=A(G).filter(F)}if(z==""){return I}else{return I.find(z)}}}else{return function(F,E){if(z==""){return D(F,E)}else{return D(F,E).find(z)}}}};var o=function(t,v){if(!t){t=1}this.threads=[];this.addTheThread=function(w,x){this.threads.push(new p(w,x,this))};this.addReadyThread=function(w){this.threads.push(w)};var u=this;this.CallbackHandler={numberOfExecutedLeafs:0,numberOfLoopsCompleted:0,eventId:v,init:function(x,z,y,w){this.numberOfThreads=x;this.callbackFunction=z;this.e=y;this.options=w;return this},setLoopTimes:function(w){t=w},reset:function(w){if(!w){this.resetLoop();this.numberOfLoopsCompleted=0;return this}},resetLoop:function(){this.numberOfExecutedLeafs=0},animationEnded:function(){this.numberOfExecutedLeafs+=1;if(this.numberOfExecutedLeafs==this.numberOfThreads){this.numberOfLoopsCompleted+=1;if(this.numberOfLoopsCompleted==t){if(this.eventId!=null){if(n[this.eventId]!=null&&n[this.eventId]!=undefined){if(typeof n[this.eventId]=="string"){h(n[this.eventId]).fire(this.e,this.options,this.callbackFunction)}else{if(Array.isArray(n[this.eventId])){for(var w=0;w<n[this.eventId].length;w++){h(n[this.eventId][w]).fire(this.e,this.options,this.callbackFunction)}}}return true}}this.callbackFunction()}else{this.resetLoop();u.fire(this.e,this.options,this.callbackFunction,true)}}}}};o.prototype.setOverallEventCallback=function(t){this.parentEvent.setOverallEventCallback()};o.prototype.addThread=function(t,u){this.addTheThread(t,u)};o.prototype.fire=function(w,u,x,t){if(!x){x=function(){}}if(!u){u={}}this.CallbackHandler.init(this.threads.length,x,w,u,this.fire).reset(t);for(var v=0;v<this.threads.length;v++){this.threads[v].execute(w,u)}};o.prototype.stop=function(){};o.prototype.setLoopTimes=function(t){this.CallbackHandler.setLoopTimes(t)};var c=new function(){var v=this;v.init=function(){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.repeat=function(H){return new Array(1+H).join(this)}};v.init();var A=/([^\s\;\{\}][^\;\{\}]*)\{/g;var F=/\}/g;var w=/([^\;\{\}]*)\;/g;var D=/\/\*[\s\S]*?\*\//g;var z=/([^\:]+):([^\;]*);/;var G=/(\/\*[\s\S]*?\*\/)|([^\s\;\{\}][^\;\{\}]*(?=\{))|(\})|([^\;\{\}]+\;(?!\s*\*\/))/gmi;var B=1;var y=2;var u=3;var C=4;var x=function(H){return typeof H=="undefined"||H.length==0||H==null};v.toJSON=function(K){var L={children:{},attributes:{}};var N=null;var O=0;var Q={ordered:false,comments:false,stripComments:false,split:false};while((N=G.exec(K))!=null){if(!x(N[B])&&Q.comments){var V=N[B].trim();L[O++]=V}else{if(!x(N[y])){var H=N[y].trim();var T=v.toJSON(K,Q);if(Q.ordered){var M={};M.name=H;M.value=T;M.type="rule";L[O++]=M}else{if(Q.split){var U=H.split(",")}else{var U=[H]}for(i in U){var I=U[i].trim();if(I in L.children){for(var R in T.attributes){L.children[I].attributes[R]=T.attributes[R]}}else{L.children[I]=T}}}}else{if(!x(N[u])){return L}else{if(!x(N[C])){var W=N[C].trim();var P=z.exec(W);if(P){var H=P[1].trim();var S=P[2].trim();if(Q.ordered){var M={};M.name=H;M.value=S;M.type="attr";L[O++]=M}else{if(H in L.attributes){var J=L.attributes[H];if(!(J instanceof Array)){L.attributes[H]=[J]}L.attributes[H].push(S)}else{L.attributes[H]=S}}}else{L[O++]=W}}}}}}return L};var t=function(H,I,J){return"\t".repeat(J)+H+": "+I+";\n"};var E=function(H,J,K){var I="\t".repeat(K)+H+" {\n";I+=v.toCSS(J,K+1);I+="\t".repeat(K)+"}\n";return I}};this.log=function(v,u,w){if(f){var t="MotorCortex "+v+": ";t+=u;if(w){console.log(w);t+=" | "+w}console[v](t)}};this.loadMSS=function(y,A){var x=this;if(!a.jQuery){this.log("error","jQuery has not been loaded. Please load jQuery before MotorCortex.loadMSS invocation");this.execute=function(){this.log("error","jQuery has not been loaded")};return false}var z;if(Object.prototype.toString.call(y)!="[object Array]"){if(typeof y==="string"){z=[y]}else{this.log("error","Unidentified / Unsupported files attribute type. Currently supported only array and string");return false}}else{z=y}var w=z.length;var t={totalLoaded:0,fileLoaded:function(){t.totalLoaded+=1;if(t.totalLoaded===w){A()}}};for(var v=0;v<w;v++){var u=z[v];$.ajax({url:u,type:"GET",async:true,success:function(C){var B=c.toJSON(C);q(B,t.fileLoaded)},error:function(B,D,C){x.log("error","The MSS file "+u+" seems to be missing",C)}})}}}})(window);