(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return f}),n.d(t,"c",function(){return p}),n.d(t,"d",function(){return h});var r=n(6),a=n(7),o=n(3),i=n(0),u=n(14),c=n(4),s=function(e,t){return Object.assign(Object(u.a)(e),t)},l={create:function(){return{nodes:{},nextId:0,seed:1}},addNode:function(e,t,n){var r=e.nextId,a=Object(i.a)({},e,{nextId:e.nextId+1,nodes:Object(i.a)({},e.nodes,Object(o.a)({},r,t))});if(null!=n&&"Expression Result"==e.nodes[n].type){var u=l.connect(a,r,n,0);if(u)return u}return a},addNodeWithInputs:function(e,t){console.log(t);var n=1==Object.keys(e.nodes).length?Object.keys(e.nodes)[0]:null;return function t(n){var r=!0,a=!1,o=void 0;try{for(var i,u=n.properties[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var c=i.value;if("Node"===c.type&&null!=c.value){t(c.value);var s=e.nextId;e=l.addNode(e,c.value),c.value=s}}}catch(d){a=!0,o=d}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}}(t),l.addNode(e,t,n)},move:function(e,t,n){if(null==t)return e;var r=e.nodes[t],a={x:r.position.x+n.x,y:r.position.y+n.y},u=Object(i.a)({},r,{position:a});return Object(i.a)({},e,{nodes:Object(i.a)({},e.nodes,Object(o.a)({},t,u))})},connect:function(e,t,n,r){if(t===n)return null;var a=e.nodes[n],u=a.properties[r];if(!u||"Node"!==u.type)return null;if(u.value===t)return null;var c=Object(i.a)({},u,{value:t});if(u.duplicateOnConnect&&null==u.value){var l,d=s(a.properties,(l={},Object(o.a)(l,r,c),Object(o.a)(l,a.properties.length,Object(i.a)({},u,{value:null})),l)),f=Object(i.a)({},e.nodes,Object(o.a)({},n,Object(i.a)({},a,{properties:d})));return Object(i.a)({},e,{nodes:f})}return Object(i.a)({},e,{nodes:Object(i.a)({},e.nodes,Object(o.a)({},n,Object(i.a)({},a,{properties:s(a.properties,Object(o.a)({},r,c))})))})},setNodeInput:function(e,t,n,r){if(null==t)return e;var a=e.nodes[t],u=a.properties[n],c=Object(i.a)({},a,{properties:s(a.properties,Object(o.a)({},n,Object(i.a)({},u,{value:r})))});return Object(i.a)({},e,{nodes:Object(i.a)({},e.nodes,Object(o.a)({},t,c))})},build:function(e,t){return null==e?"(?!)":f.build(t.nodes[e],t)},generate:function(e,t,n){return null==e?"":f.generate(n.nodes[e],t,n)},generateSeeded:function(e,t,n){return l.generate(e,new d(t.seed+n),t)}},d=function(){function e(t){Object(r.a)(this,e),this.seed=t}return Object(a.a)(e,[{key:"normalized",value:function(){return 1.618033988749895*Math.abs(this.seed++)%1}},{key:"upto",value:function(e){return Math.floor(this.normalized()*e)}},{key:"range",value:function(e,t){return e+this.upto(t-e)}},{key:"select",value:function(e){return e[this.upto(e.length)]}},{key:"chance",value:function(e){return this.normalized()<e}}]),e}(),f={create:function(e,t){var n={position:e,type:t,properties:c.a[t].defaultProperties(),width:c.a[t].defaultWidth};if(!n.width){n.width=80;var r=!0,a=!1,o=void 0;try{for(var i,u=n.properties[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var s=i.value;n.width=Math.max(n.width,9.5*s.name.length+c.b[s.type].defaultWidth)}}catch(l){a=!0,o=l}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}}return n.position.x-=n.width/2,n.position.y-=n.properties.length/2*25,n},createWithInputValues:function(e,t,n){var r=f.create(e,t),a=0,o=!0,u=!1,c=void 0;try{for(var s,l=n[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){for(var d=s.value;a<r.properties.length&&"Label"==r.properties[a].type;)a++;r.properties[a].duplicateOnConnect&&r.properties.push(Object(i.a)({},r.properties[a])),r.properties[a].value=d,a++}}catch(p){u=!0,c=p}finally{try{o||null==l.return||l.return()}finally{if(u)throw c}}return r},build:function(e,t){return c.a[e.type].build(e.properties,t)},generate:function(e,t,n){return c.a[e.type].generate(e.properties,t,n)}},p={create:function(e,t,n,r){return{type:e,value:n,name:t,duplicateOnConnect:r}}},h={sensitivity:.4,create:function(){return{offset:{x:300,y:200},magnification:0}},getTransformScale:function(e){return Math.pow(2,e*h.sensitivity)},magnify:function(e,t,n){var r=e.magnification+n,a=h.getTransformScale(r);if(a<.1||a>20)return e;var o=a/h.getTransformScale(e.magnification);return{magnification:r,offset:{x:(e.offset.x-t.x)*o+t.x,y:(e.offset.y-t.y)*o+t.y}}},transformPoint:function(e,t){return{x:t.x*h.getTransformScale(e.magnification)+e.offset.x,y:t.y*h.getTransformScale(e.magnification)+e.offset.y}},transformDirection:function(e,t){return{x:h.transformLength(e,t.x),y:h.transformLength(e,t.y)}},transformLength:function(e,t){return t*h.getTransformScale(e.magnification)},inverseTransformLength:function(e,t){return t/h.getTransformScale(e.magnification)},inverseTransformSize:function(e,t){return{width:t.width/h.getTransformScale(e.magnification),height:t.height/h.getTransformScale(e.magnification)}},inverseTransformDirection:function(e,t){return{x:t.x/h.getTransformScale(e.magnification),y:t.y/h.getTransformScale(e.magnification)}},inverseTransformPoint:function(e,t){return{x:(t.x-e.offset.x)/h.getTransformScale(e.magnification),y:(t.y-e.offset.y)/h.getTransformScale(e.magnification)}}}},,,function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return i});var r=n(2),a=n.n(r),o=n(1),i={Label:{defaultWidth:0,create:function(e){return o.c.create("Label",e,null)},render:function(){return null}},Characters:{defaultWidth:60,create:function(e,t){return o.c.create("Characters",e,t)},render:function(e){return a.a.createElement("input",{className:"input",type:"text",value:e.value,onChange:function(t){return e.onChange(t.target.value)},onMouseDown:function(e){0==e.button?e.stopPropagation():e.preventDefault()},onClick:function(e){return e.stopPropagation()},onKeyPress:function(e){return e.stopPropagation()}})}},Character:{defaultWidth:30,create:function(e,t){return o.c.create("Character",e,t)},render:function(e){return a.a.createElement("input",{className:"character input",type:"text",value:e.value,onChange:function(t){return e.onChange(t.target.value)},onMouseDown:function(e){0==e.button?e.stopPropagation():e.preventDefault()},onClick:function(e){return e.stopPropagation()},onKeyPress:function(e){return e.stopPropagation()}})}},Node:{defaultWidth:0,create:function(e,t){return o.c.create("Node",e,null,t)},render:function(){return null}},Bool:{defaultWidth:30,create:function(e,t){return o.c.create("Bool",e,t)},render:function(e){return a.a.createElement("input",{className:"input",type:"checkbox",checked:e.value,onChange:function(t){return e.onChange(t.target.checked)},onMouseDown:function(e){0==e.button?e.stopPropagation():e.preventDefault()},onClick:function(e){return e.stopPropagation()},onKeyPress:function(e){return e.stopPropagation()}})}},Number:{defaultWidth:30,create:function(e,t){return o.c.create("Number",e,t)},render:function(e){return a.a.createElement("input",{className:"input",type:"number",value:e.value,onChange:function(t){return e.onChange(t.target.value)},onMouseDown:function(e){0==e.button?e.stopPropagation():e.preventDefault()},onClick:function(e){return e.stopPropagation()},onKeyPress:function(e){return e.stopPropagation()}})}}},u=function(e,t,n){return{precedence:5,defaultProperties:function(){return[i.Label.create(e)]},build:function(){return t},generate:n||function(e,n){return m(n,t)}}},c=function(e,t,n){return{precedence:5,defaultProperties:function(){return[i.Label.create(e)]},build:function(){return t},generate:function(){return n}}},s=function(e,t){return o.a.build(e.value,t)},l=function(e,t,n){return o.a.generate(e.value,t,n)},d=function(e,t,n){if(null==t.value)return s(t,n);var r=n.nodes[t.value],a=f[r.type].precedence,o=s(t,n);return a>=e?o:"(?:"+o+")"},f={"Expression Result":{precedence:0,defaultProperties:function(){return[i.Node.create("Expression Result"),i.Bool.create("Multiple Matches",!0),i.Bool.create("Case-Sensitive",!0),i.Bool.create("Multiline",!0)]},build:function(e,t){var n="/"+s(e[0],t)+"/";return e[1].value&&(n+="g"),e[2].value||(n+="i"),e[3].value&&(n+="m"),n},generate:function(e,t,n){return l(e[0],t,n)}},"Not Digit":u("Not Digit","\\D"),"Word Char":u("Word Char","\\w"),"Not Word Char":u("Not Word Char","\\W"),"Word Boundary":u("Word Boundary","\\b",function(){return" word"}),"Not Word Boundary":u("Not Word Boundary","\\b",function(){return"word"}),Digit:u("Digit","\\d",function(e,t){return t.upto(10)}),"Whitespace Char":u("Whitespace Char","\\s",function(e,t){return t.select([" ","\t","\r","\n","\v","\f"])}),"Not Whitespace Char":u("Not Whitespace Char","\\S"),"Not Linebreak":u("Not Linebreak","."),Linebreak:c("Linebreak","\\n","\n"),Tab:c("Tab","\\t","\t"),Never:u("Never","(?!)",function(){return""}),Any:u("Any","(?:)"),Literal:{precedence:2,defaultProperties:function(){return[i.Characters.create("Literal","the")]},build:function(e){return p(e[0])},generate:function(e){return e[0].value}},"Any of Chars":{precedence:5,defaultProperties:function(){return[i.Characters.create("Any of Chars",":!?.,")]},build:function(e){return"["+v(e[0].value)+"]"},generate:function(e,t){return t.select(e[0].value)}},"None of Chars":{precedence:5,defaultProperties:function(){return[i.Characters.create("None of Chars",":!?.,")]},build:function(e){return"[^"+v(e[0].value)+"]"},generate:function(e,t){return m(t,"[^"+v(e[0].value)+"]")}},"Char Range":{precedence:5,defaultProperties:function(){return[i.Label.create("Char Range"),i.Character.create("Start","a"),i.Character.create("End","z")]},build:function(e){return"["+h(e[0])+"-"+h(e[1])+"]"},generate:function(e,t){var n=e[0].value.charCodeAt(0),r=e[1].value.charCodeAt(0),a=t.range(n,r+1);return String.fromCharCode(a)}},"Not in Char Range":{precedence:5,defaultProperties:function(){return[i.Label.create("Not in Char Range"),i.Character.create("Start","A"),i.Character.create("End","Z")]},build:function(e){return"[^"+h(e[0])+"-"+h(e[1])+"]"},generate:function(e,t){return m(t,"[^"+h(e[0])+"-"+h(e[1])+"]")}},"Any Of":{precedence:1,defaultProperties:function(){return[i.Label.create("Any Of"),i.Node.create("Option",!0)]},build:function(e,t){var n=e.filter(function(e){return null!=e.value});return n.length?n.map(function(e){return d(1,e,t)}).join("|"):f.Never.build()},generate:function(e,t,n){var r=e.filter(function(e){return null!=e.value});return r.length?o.a.generate(t.select(r).value,t,n):f.Never.generate()}},Sequence:{precedence:2,defaultProperties:function(){return[i.Label.create("Sequence"),i.Node.create("Next",!0)]},build:function(e,t){var n=e.filter(function(e){return null!=e.value});return n.length?n.map(function(e){return d(2,e,t)}).join(""):f.Never.build()},generate:function(e,t,n){var r=e.filter(function(e){return null!=e.value});return r.length?r.map(function(e){return l(e,t,n)}).join(""):f.Never.generate(null,t)}},Capture:{precedence:5,defaultProperties:function(){return[i.Node.create("Capture")]},build:function(e,t){return"("+s(e[0],t)+")"},generate:function(e,t,n){return l(e[0],t,n)}},Optional:{precedence:4,defaultProperties:function(){return[i.Node.create("Optional")]},build:function(e,t){return d(4,e[0],t)+"?"},generate:function(e,t,n){return t.chance(.6)?"":l(e[0],t,n)}},"At Least One":{precedence:4,defaultProperties:function(){return[i.Node.create("At Least One"),i.Bool.create("Lazy",!1)]},build:function(e,t){return d(4,e[0],t)+"+"+(e[1].value?"?":"")},generate:function(e,t,n){for(var r=l(e[0],t,n);t.chance(.7);)r+=l(e[0],t,n);return r}},"Any Repetition":{precedence:4,defaultProperties:function(){return[i.Node.create("Any Repetition"),i.Bool.create("Lazy",!1)]},build:function(e,t){return d(4,e[0],t)+"*"+(e[1].value?"?":"")},generate:function(e,t,n){for(var r="";t.chance(.5);)r+=l(e[0],t,n);return r}},"Exact Repetition":{precedence:4,defaultProperties:function(){return[i.Node.create("Exact Repetition"),i.Number.create("Count",3)]},build:function(e,t){return d(4,e[0],t)+"{"+e[1].value+"}"},generate:function(e,t,n){for(var r="",a=0;a<e[1].value;a++)r+=l(e[0],t,n);return r}},"Ranged Repetition":{precedence:4,defaultProperties:function(){return[i.Node.create("Ranged Repetition"),i.Number.create("Minimum",2),i.Number.create("Maximum",3),i.Bool.create("Minimal",!1)]},build:function(e,t){return d(4,e[0],t)+"{"+e[1].value+","+e[2].value+"}"+(e[3].value?"?":"")},generate:function(e,t,n){for(var r=t.range(e[1].value,e[2].value+1),a="",o=0;o<r;o++)a+=l(e[0],t,n);return a}},"If At End":{precedence:3,defaultProperties:function(){return[i.Node.create("If At End")]},build:function(e,t){return d(3,e[0],t)+"$"},generate:function(e,t,n){return l(e[0],t,n)}},"If At Start":{precedence:3,defaultProperties:function(){return[i.Node.create("If At Start")]},build:function(e,t){return"^"+d(3,e[0],t)},generate:function(e,t,n){return l(e[0],t,n)}},"If Followed By":{precedence:3,defaultProperties:function(){return[i.Node.create("If Followed By"),i.Node.create("Successor")]},build:function(e,t){return d(3,e[0],t)+"(?="+s(e[1],t)+")"},generate:function(e,t,n){return l(e[0],t,n)+l(e[1],t,n)}},"If Not Followed By":{precedence:3,defaultProperties:function(){return[i.Node.create("If Not Followed By"),i.Node.create("Successor")]},build:function(e,t){return d(3,e[0],t)+"(?!"+s(e[1],t)+")"},generate:function(e,t,n){return l(e[0],t,n)}}},p=function(e){return g(e.value)},h=function(e){return g(e.value[0])},g=function(e){var t="",n=!0,r=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var u=o.value;"[]{}()|^.-+*?!$/\\".includes(u)&&(t+="\\"),t+=u}}catch(c){r=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}return t},v=function(e){var t="",n=!0,r=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var u=o.value;".[]^-\\".includes(u)&&(t+="\\"),t+=u}}catch(c){r=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}return t},m=function(e,t){for(var n=new RegExp(t),r=/[ \t\S]/;;)if(e.chance(.9)){var a=String.fromCharCode(e.upto(256));if(n.test(a)&&r.test(a))return a}else{var o=String.fromCharCode(e.upto(65e3));if(n.test(o)&&r.test(o))return o}}},,,,function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"c",function(){return i});n(5);var r=n(2),a=n.n(r),o=n(4),i=function(e){var t=e.node2.position.x,n=e.node2.position.y+25*(e.index+.5),r=e.node1.position.x+e.node1.width,o=e.node1.position.y+12.5,i=-.4*Math.abs(r-t),u=.4*Math.abs(r-t);return a.a.createElement("path",{className:"connection "+e.className,d:"M ".concat(t," ").concat(n," C ").concat(t+i," ").concat(n,", ").concat(r+u," ").concat(o,", ").concat(r," ").concat(o)})},u=function(e){return e.node.properties.map(function(e,t){return{property:e,index:t}}).filter(function(e){return"Node"===e.property.type&&null!=e.property.value}).map(function(t){return a.a.createElement(i,{node1:e.graph.nodes[t.property.value],node2:e.node,index:t.index})})},c=function(e){return a.a.createElement("div",{className:"property"+(e.connectOutput?" main":"")+(e.connectInput?" connectable-input":""),style:{height:"25px"},onContextMenu:function(e){return e.preventDefault()},onMouseEnter:function(){return e.onPropertyEnter()},onMouseDown:function(t){0==t.button?e.onLeftPress():2==t.button&&e.onRightPress()}},a.a.createElement("div",{className:(e.connectInput?"":"inactive ")+"left connector"}),a.a.createElement("span",{className:"title"},e.property.name),e.property&&o.b[e.property.type].render({onChange:function(t){return e.onChange(t)},value:e.property.value}),a.a.createElement("div",{className:(e.connectOutput?"":"inactive ")+"right connector"}))},s=function(e){return a.a.createElement("div",{className:"graph-node"+(e.selected?" selected":"")+(e.connecting?" connecting":"")+(e.dragged?" dragged":""),style:{width:e.node.width+"px",transform:"translate(".concat(e.node.position.x,"px, ").concat(e.node.position.y,"px)")}},e.node.properties.map(function(t,n){return a.a.createElement(c,{property:t,connectInput:"Node"===t.type,connectOutput:0==n,onPropertyEnter:function(){return e.onPropertyEnter(n)},onLeftPress:function(){return e.onLeftPress()},onRightPress:function(){return e.onRightPress(n)},onChange:function(t){return e.onInputChanged(e.id,n,t)}})}))}},,,function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(7),i=n(15),u=n(12),c=n(16),s=n(0),l=n(2),d=n.n(l),f=n(25),p=n.n(f),h=n(1),g=n(8),v=n(4),m=n(13),y={create:function(){return{view:h.d.create(),graph:h.a.create(),dragged:null,connection:null,result:0,search:null}},addNode:function(e,t){return 1==Object.keys(e.graph.nodes).length?y.updateCache(Object(s.a)({},e,{graph:h.a.addNode(e.graph,t,Object.keys(e.graph.nodes)[0])})):Object(s.a)({},e,{graph:h.a.addNode(e.graph,t)})},addNodeWithInputs:function(e,t){return y.updateCache(Object(s.a)({},e,{graph:h.a.addNodeWithInputs(e.graph,t)}))},pressMove:function(e,t){return"Expression Result"==e.graph.nodes[t].type&&e.result!=t?y.updateCache(Object(s.a)({},e,{dragged:t,result:t})):Object(s.a)({},e,{dragged:t})},pressConnect:function(e,t,n){return Object(s.a)({},e,{connection:{node:t,property:n}})},connect:function(e,t,n){if(!e.connection)return e;var r=h.a.connect(e.graph,e.connection.node,t,n);return r?y.updateCache(Object(s.a)({},e,{graph:r,connection:null})):e},release:function(e){return Object(s.a)({},e,{dragged:null,connection:null})},moveNode:function(e,t){return Object(s.a)({},e,{graph:h.a.move(e.graph,e.dragged,h.d.inverseTransformDirection(e.view,t))})},moveConnect:function(e,t){return Object(s.a)({},e,{connection:Object(s.a)({},e.connection,{target:h.d.inverseTransformPoint(e.view,t)})})},setNodeInput:function(e,t,n,r){return y.updateCache(Object(s.a)({},e,{graph:h.a.setNodeInput(e.graph,t,n,r)}))},magnify:function(e,t,n){return Object(s.a)({},e,{view:h.d.magnify(e.view,t,n)})},nextRandomSeed:function(e){return y.updateCache(Object(s.a)({},e,{graph:Object(s.a)({},e.graph,{seed:e.graph.seed+1})}))},updateCache:function e(t){var n="\u2018Now off their harbour there lies a wooded and fertile is- land not quite close to the land of the Cyclopes, but still not far. It is over-run with wild goats, that breed there in great numbers and are never disturbed by foot of man; for sports- men\u2014who as a rule will suffer so much hardship in forest or among mountain precipices\u2014do not go there, nor yet again is it ever ploughed or fed down, but it lies a wilderness untilled and unsown from year to year, and has no living thing upon it but only goats. For the Cyclopes have no ships, nor yet shipwrights who could make ships for them; they cannot therefore go from city to city, or sail over the sea to one another\u2019s country as people who have ships can do; if they had had these they would have colonised the island, {78} for it is a very good one, and would yield everything in due season. There are meadows that in some places come right down to the sea shore, well watered and full of lus- cious grass; grapes would do there excellently; there is level land for ploughing, and it would always yield heavily at har- vest time, for the soil is deep.",r=h.a.build(t.result,t.graph),a,o,i,u,c,l,d;return t.cache&&r===t.cache.regex?t:Object(s.a)({},t,{cache:{regex:r,matches:[]}})},parseRegexToNodes:function(e){var t=Object(m.a)(e.search);return t?y.addNodeWithInputs(e,t):e}},b=function(e){function t(e){var n;Object(a.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state=y.create();var r=h.b.create(h.d.inverseTransformPoint(n.state.view,{x:window.innerWidth/2,y:window.innerHeight/2}),"Expression Result");return n.state=y.addNode(n.state,r),n.state=y.updateCache(n.state),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.listener||(this.listener=document.addEventListener("keydown",function(t){t.ctrlKey&&" "===t.key&&e.setState(function(e){return Object(s.a)({},e,{search:""})})}))}},{key:"componentWillUnmount",value:function(){this.listener&&(document.removeEventListener("keydown",this.listener),this.listener=null)}},{key:"render",value:function(){var e=this,t=this.state.view.offset,n=h.d.getTransformScale(this.state.view.magnification),a=null;try{a=null!=this.state.search&&new RegExp(this.state.search,"igm")}catch(o){}return[d.a.createElement("div",{id:"example-text"}," ",this.state.cache.matches," "),d.a.createElement("svg",{id:"connection-graph",className:this.state.connection?"connect-dragging":""},d.a.createElement("g",{transform:"translate(".concat(t.x,", ").concat(t.y,") scale(").concat(n,", ").concat(n,")"),className:"transform"},Object.entries(this.state.graph.nodes).map(function(t){var n=Object(r.a)(t,2),a=n[0],o=n[1];return d.a.createElement(g.a,{node:o,key:a,graph:e.state.graph})}),this.state.connection&&this.state.connection.target&&d.a.createElement(g.c,{node1:this.state.graph.nodes[this.state.connection.node],index:-.5,node2:{position:this.state.connection.target},className:"prototype"}))),d.a.createElement("div",{id:"node-graph",className:this.state.connection?"connect-dragging":"",onWheel:function(t){var n=-Math.sign(t.deltaY),r={x:t.clientX,y:t.clientY};e.setState(function(e){return y.magnify(e,r,n)})},onContextMenu:function(e){return e.preventDefault()},onMouseUp:function(t){e.setState(function(e){return y.release(e)})},onMouseLeave:function(){return e.setState(function(e){return y.release(e)})},onMouseMove:function(t){var n={x:t.movementX,y:t.movementY},r={x:t.clientX,y:t.clientY};e.setState(function(e){return e.connection?y.moveConnect(e,r):y.moveNode(e,n)})}},d.a.createElement("div",{style:{transform:"translate(".concat(t.x,"px, ").concat(t.y,"px) scale(").concat(n,", ").concat(n,")")},className:"transform"},Object.entries(this.state.graph.nodes).map(function(t){var n=Object(r.a)(t,2),a=n[0],o=n[1];return d.a.createElement(g.b,{node:o,id:a,key:a,graph:e.state.graph,dragged:e.state.dragged==a,connecting:e.state.connection&&e.state.connection.node==a,onInputChanged:function(t,n,r){return e.setState(function(e){return y.setNodeInput(e,t,n,r)})},onLeftPress:function(){return e.setState(function(e){return y.pressMove(e,a)})},onRightPress:function(t){return e.setState(function(e){return y.pressConnect(e,a,t)})},onPropertyEnter:function(t){return e.setState(function(e){return y.connect(e,a,t)})}})}))),d.a.createElement("div",{id:"overlay"},d.a.createElement("section",{id:"header"},d.a.createElement("h2",null,"Regex Nodes"),d.a.createElement("nav",null,"by ",d.a.createElement("a",{href:"http://github.com/johannesvollmer",target:"_blank",rel:"noopener noreferrer"},"johannesvollmer"))),d.a.createElement("section",{id:"search"},d.a.createElement("input",{type:"text",value:this.state.search||"",placeholder:" Add Nodes [Ctrl Space]",autoFocus:null!=this.state.search,onFocus:function(){return e.setState(function(e){return Object(s.a)({},e,{search:""})})},onBlur:function(){return e.setState(function(e){return Object(s.a)({},e,{search:null})})},key:null!=this.state.search,onKeyDown:function(t){13==t.keyCode&&0!=e.state.search.length&&e.setState(function(e){return Object(s.a)({},y.parseRegexToNodes(e),{search:null})}),t.stopPropagation()},onChange:function(t){var n=t.target.value;e.setState(function(e){return Object(s.a)({},e,{search:n})})}}),null!=this.state.search&&d.a.createElement("div",{id:"results"},0!=this.state.search.length&&d.a.createElement("div",{id:"parse-search",onMouseDown:function(){return e.setState(function(e){return Object(s.a)({},y.parseRegexToNodes(e),{search:null})})}},"Add Regular expression `",d.a.createElement("code",{id:"string"},this.state.search),"` as Nodes [Enter]"),null!=a&&Object.entries(v.a).filter(function(e){var t=Object(r.a)(e,2),n=t[0];t[1];return a.test(n)}).map(function(t){var n=Object(r.a)(t,2),a=n[0];n[1];return d.a.createElement("div",{key:a,onMouseDown:function(){return e.setState(function(t){return y.addNode(Object(s.a)({},t,{search:null}),h.b.create(h.d.inverseTransformPoint(e.state.view,{x:window.innerWidth/2,y:window.innerHeight/2}),a))})}},a)}))),null===this.state.result?null:d.a.createElement("section",{id:"regex"},d.a.createElement("code",null,"const regex =\xa0",d.a.createElement("span",{className:"string"},this.state.cache.regex))))]}}]),t}(d.a.Component);t.a=b},,function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),a=n(1),o=function(e){return null!=e&&e.length?i(e):[]},i=function(e){if(e.startsWith("/")){var t=e.match(/(?:\/[igm]{0,3})$/i);if(t){var n=e.slice(1,t.index),r=t[0],o=/g/i.test(r),i=!/i/i.test(r),c=/m/i.test(r);return a.b.createWithInputValues({x:0,y:0},"Expression Result",[u(n).node,o,i,c])}return u(e).node}return u(e).node},u=function(e,t){var n=function(e){return!/^[\|\]\)]/.test(e)},r=c(e,n);if(e=r.remaining,!r.node)return r;for(var o=[r.node];e.length&&e.startsWith("|")&&(!t||t(e));){e=e.slice(1);var i=c(e,n);o.push(i.node),e=i.remaining}return 1==o.length?{node:o[0],remaining:e}:{node:a.b.createWithInputValues({x:0,y:0},"Any Of",o),remaining:e}},c=function(e,t){for(var n=[];e.length&&t(e);){var r=s(e);n.push(r.node),e=r.remaining}for(var o=[],i=0;i<n.length;i++){var u=n[i],c=o.length&&o[o.length-1];c&&"Literal"==u.type&&"Literal"==c.type?c.properties[0].value+=u.properties[0].value:o.push(u)}return 1==o.length?{node:o[0],remaining:e}:{node:a.b.createWithInputValues({x:0,y:0},"Sequence",o),remaining:e}},s=function(e){return l(e)},l=function(e){return d(e)},d=function(e){var t=f(e);if(e=t.remaining,null==t.node)return t;if(e.startsWith("?"))return{node:a.b.createWithInputValues({x:0,y:0},"Optional",[t.node]),remaining:e.slice(1)};var n=function(e){return e.startsWith("?")?{value:!0,remaining:e.slice(1)}:{value:!1,remaining:e}};if(e.startsWith("*")){var r=n(e.slice(1));return{remaining:r.remaining,node:a.b.createWithInputValues({x:0,y:0},"Any Repetition",[t.node,r.value])}}if(e.startsWith("+")){var o=n(e.slice(1));return{remaining:o.remaining,node:a.b.createWithInputValues({x:0,y:0},"At Least One",[t.node,o.value])}}if(!e.startsWith("{"))return t;var i=(e=e.slice(1)).indexOf("}"),u=e.slice(0,i),c=e.slice(i+1),s=u.split(",");if(1==s.length)return{remaining:c,node:a.b.createWithInputValues({x:0,y:0},"Exact Repetition",[t.node,parseInt(s[0])])};if(2===s.length&&0===s[1].length){var l=n(c);return{remaining:l.remaining,node:a.b.createWithInputValues({x:0,y:0},"Minimum Repetition",[t.node,parseInt(s[0]),l.value])}}if(2==s.length){var d=n(c);return{remaining:d.remaining,node:a.b.createWithInputValues({x:0,y:0},"Ranged Repetition",[t.node,parseInt(s[0]),parseInt(s[1]),d.value])}}},f=function(e){return e.startsWith("[")?p(e):e.startsWith("\\")?h(e,Object(r.a)({},g.digit,g.word,g.white,g.tab,g.linebreak,g.boundary)):e.startsWith("(?:")?y(e):e.startsWith("(")?b(e):v(e)},p=function(e){var t=[];(e=e.slice(1)).startsWith("^")&&(e=e.slice(1));for(var n="";e.length&&!e.startsWith("]");){if(e.startsWith("-"))throw"range not implemented";if(e.startsWith("\\")){var o=h(e,Object(r.a)({},g.digit,g.word,g.white,g.tab,g.linebreak,g.dot));e=o.remaining,"Literal"==o.node.type?n+=o.node.properties[0].value:t.push(o.node)}else n+=e[0],e=e.slice(1)}return n.length&&t.push(a.b.createWithInputValues({x:0,y:0},"Any of Chars",[n])),1==t.length?{node:t[0],remaining:e.slice(1)}:{node:a.b.createWithInputValues({x:0,y:0},"Any Of",t),remaining:e.slice(1)}},h=function(e,t){if(!(e=e.slice(1)).length)return{node:null,remaining:e};var n=e[0],r=t[n];return null!=r?{node:a.b.create({x:0,y:0},r),remaining:e.slice(1)}:m(n)},g={white:{s:"Whitespace Char",S:"Not Whitespace Char"},boundary:{b:"Word Boundary",B:"Not Word Boundary"},word:{w:"Word Char",W:"Not Word Char"},digit:{d:"Digit",D:"Not Digit"},linebreak:{n:"Linebreak"},dot:{".":"Not Linebreak"},tab:{t:"Tab"}},v=function(e){if(!e.length)return{node:null,remaining:""};var t=e[0];return"."==t?{node:a.b.create({x:0,y:0},"Not Linebreak"),remaining:e.slice(1)}:{node:a.b.createWithInputValues({x:0,y:0},"Literal",[t]),remaining:e.slice(1)}},m=function(e){return e.length?{node:a.b.createWithInputValues({x:0,y:0},"Literal",[e[0]]),remaining:e.slice(1)}:{node:null,remaining:""}},y=function(e){e=e.slice(3);var t=u(e,function(e){return!e.startsWith(")")});return t.node?{node:t.node,remaining:t.remaining.slice(1)}:t},b=function(e){e=e.slice(1);var t=u(e,function(e){return!e.startsWith(")")});return t.node?{node:a.b.createWithInputValues({x:0,y:0},"Capture",[t.node]),remaining:t.remaining.slice(1)}:t}},,,,function(e,t,n){e.exports=n(18)},function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(10),i=n.n(o),u=(n(24),n(11));i.a.render(a.a.createElement(u.a,null),document.getElementById("root"))},,,,,,function(e,t,n){},function(e,t,n){}],[[17,1,2]]]);
//# sourceMappingURL=main.f3121c95.chunk.js.map