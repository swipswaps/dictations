(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t){},124:function(e,t,a){e.exports=a(300)},136:function(e,t){},142:function(e,t){},300:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(23),r=a.n(s),l=a(79),o=a(16),c=a(113),u=a.n(c),d=a(114),m=a.n(d),p=(a(147),a(19)),h=a(122),f=a.n(h),v=a(302),g=a(303),b=a(304),k=a(14),y=a(15),E=a(21),O=a(20),j=a(22),x=a(43),S=a.n(x),w=a(55),N=a.n(w),C=a(56),T=a.n(C),R=a(36),D=a.n(R),I=a(37),P=a.n(I),q=a(30),F=a.n(q),M=a(301),L=Object(o.d)({langEnGB:{id:"lang.en-GB",defaultMessage:"english"},langFrFR:{id:"lang.fr-FR",defaultMessage:"french"},langUnknown:{id:"lang.unknown",defaultMessage:"unknown language"}});var A=function(e,t){switch(t){case"en-GB":return e(L.langEnGB);case"fr-FR":return e(L.langFrFR);default:return e(L.langUnknown)}},W=Object(o.d)({homeListItem:{id:"home.listItem",defaultMessage:"Dictations in {lang}"}}),B=function(e){function t(){return Object(k.a)(this,t),Object(E.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.data,n=this.props.intl.formatMessage,s=Object.keys(a).map(function(e){var t=A(n,e);return i.a.createElement(N.a,{key:e,component:M.a,to:"/list/"+e,button:!0},i.a.createElement(T.a,{primary:n(W.homeListItem,{lang:t})}))});return i.a.createElement("div",{className:t.root},i.a.createElement(D.a,{position:"static",color:"default"},i.a.createElement(P.a,null,i.a.createElement(F.a,{variant:"title",color:"inherit"},i.a.createElement(o.a,{id:"home.title",defaultMessage:"Dictations"})))),i.a.createElement(S.a,{component:"nav"},s))}}]),t}(i.a.Component),U=Object(o.e)(Object(p.withStyles)({root:{flex:1}})(B)),G=a(24),_=a(117),z=a.n(_),H=a(25),J=a.n(H),Q=a(58),V=a.n(Q);var K=new Worker("/dictations/pico2wave/pico2wave-worker.js"),X=a(38),Y=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(E.a)(this,Object(O.a)(t).call(this,e))).state={src:null,play:!1},a.audioRef=i.a.createRef(),a}return Object(j.a)(t,e),Object(y.a)(t,[{key:"componentDidUpdate",value:function(){null===this.state.src&&(this.audioRef.current.src="/dictations/assets/silence.ogg",this.audioRef.current.play(),this.audioRef.current.pause()),this.state.play&&this.audioRef.current.play()}},{key:"restart",value:function(){this.audioRef.current.currentTime=0,this.audioRef.current.play()}},{key:"render",value:function(){var e=this.props,t=(e.src,Object(X.a)(e,["src"]));return i.a.createElement("audio",Object.assign({ref:this.audioRef,src:this.state.src},t))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{src:e.src,play:e.src!==t.src}}}]),t}(i.a.Component);Y.defaultProps={src:null};var Z=Y,$=a(116),ee=a.n($),te=a(57),ae=a.n(te),ne=a(44),ie=a.n(ne),se=function(e){function t(){return Object(k.a)(this,t),Object(E.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e,t=this.props,a=(t.classes,t.variant),n=t.value,s=Object(X.a)(t,["classes","variant","value"]);switch(a){default:case"normal":e=i.a.createElement(J.a,Object.assign({},s,{color:"inherit"}),i.a.createElement(ee.a,null));break;case"progress":e=i.a.createElement(J.a,{color:"inherit"},i.a.createElement(ie.a,{size:24}));break;case"playing":e=i.a.createElement(J.a,{color:"inherit"},i.a.createElement(ie.a,{size:24,variant:"static",value:n}));break;case"restart":e=i.a.createElement(J.a,Object.assign({},s,{color:"inherit"}),i.a.createElement(ae.a,null))}return i.a.createElement("div",null,e)}}]),t}(i.a.Component);se.defaultProps={progress:"normal",value:0};var re=se,le=Object(o.d)({listListItem:{id:"list.listItem",defaultMessage:"Dictation #{id}"}}),oe=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(E.a)(this,Object(O.a)(t).call(this,e))).state={current:null,status:"normal",value:0,src:null},a.play=a.play.bind(Object(G.a)(a)),a.timeupdate=a.timeupdate.bind(Object(G.a)(a)),a.pico2waveWorker=K,a.pico2waveWorker.onmessage=function(e){a.setState({status:"playing",src:e.data,value:0})},a}return Object(j.a)(t,e),Object(y.a)(t,[{key:"play",value:function(e){this.setState({current:e,status:"progress",src:null});var t=this.props.match.params.lang,a=this.props.data[t][e];this.pico2waveWorker.postMessage({lang:t,text:a})}},{key:"timeupdate",value:function(e){var t=e.target.duration,a=e.target.currentTime;if(t)if(a===t)this.setState({status:"normal"});else{var n=a/t*100;this.setState({value:n})}}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.data,s=t.match,r=this.props.intl.formatMessage,l=s.params.lang,c=A(r,l),u=Object.keys(n[l]).map(function(t){var a=e.state.current===t,n=a?e.state.status:"normal",s=a?e.state.value:0,o=Number(t)+1;return i.a.createElement(N.a,{key:t,component:M.a,to:"/dictation/"+l+"/"+t,button:!0},i.a.createElement(T.a,{primary:r(le.listListItem,{id:o})}),i.a.createElement(z.a,null,i.a.createElement(re,{onClick:e.play.bind(e,t),variant:n,value:s})))});return i.a.createElement("div",{className:a.root},i.a.createElement(D.a,{position:"static",color:"default"},i.a.createElement(P.a,null,i.a.createElement(J.a,{component:M.a,to:"/",className:a.backButton,color:"inherit"},i.a.createElement(V.a,null)),i.a.createElement(F.a,{variant:"title",color:"inherit"},i.a.createElement(o.a,{id:"list.title",defaultMessage:"Dictations in {lang}",values:{lang:c}})))),i.a.createElement(S.a,{component:"nav"},u),i.a.createElement(Z,{src:this.state.src,onTimeUpdate:this.timeupdate}))}}]),t}(i.a.Component),ce=Object(o.e)(Object(p.withStyles)({root:{flex:1},backButton:{marginLeft:-12,marginRight:20}})(oe)),ue=function(){function e(t){Object(k.a)(this,e),this.pos=0,this.buf=t,this.bufLen=t.length}return Object(y.a)(e,[{key:"tokenize",value:function(){for(var e,t=[];null!==(e=this.nextToken());)t.push(e);return t}},{key:"nextToken",value:function(){if(this.skipNonTokens(),this.pos>=this.bufLen)return null;var e=this.buf.charAt(this.pos);return this.isPonctuation(e)?this.processPonctuation():this.processWord()}},{key:"skipNonTokens",value:function(){for(;this.pos<this.bufLen;){var e=this.buf.charAt(this.pos);if(!this.isWhiteSpace(e))break;this.pos++}}},{key:"isWhiteSpace",value:function(e){return" "===e||"\t"===e||"\r"===e||"\n"===e}},{key:"isPonctuation",value:function(e){return","===e||";"===e||"?"===e||"!"===e||"."===e}},{key:"processPonctuation",value:function(){var e=this.pos,t=this.buf.charAt(this.pos);return this.pos++,{type:"PONCTUATION",value:t,pos:e}}},{key:"processWord",value:function(){for(var e=this.pos,t=e+1;t<this.bufLen;){var a=this.buf.charAt(t);if(this.isWhiteSpace(a)||this.isPonctuation(a))break;t++}var n=this.buf.substring(e,t);return this.pos=t,{type:"WORD",value:n,pos:e}}}]),e}(),de=function(){function e(){Object(k.a)(this,e)}return Object(y.a)(e,null,[{key:"compose",value:function(e){var t=this,a=[];a.push(this.makeSilence(2));var n=[];e.forEach(function(e){switch(e.type){case"WORD":n.push(e);break;case"PONCTUATION":for(var i=e,s=t.divideSentence(n,4,5),r=0;r<s.length;r++){var l=s[r];if(r===s.length-1){var o=t.composeSentence(l,i,1),c=t.composeSentence(l,i,.7);a.push(o),a.push(i),a.push(t.makeSilence(2)),a.push(c),a.push(i)}else{var u=t.composeSentence(l,t.makeComma(),1),d=t.composeSentence(l,t.makeComma(),.7);a.push(u),a.push(t.makeSilence(2)),a.push(d)}a.push(t.makeSilence(3))}n=[]}}),a.push(this.makeSilence(6));var i=this.composeText(e,.8);return a.push(i),a}},{key:"divideSentence",value:function(e,t,a){return e.length%t===0?this._divideSentence(e,t):e.length%a===0?this._divideSentence(e,a):e.length%t>e.length%a?this._divideSentence(e,t):this._divideSentence(e,a)}},{key:"_divideSentence",value:function(e,t){for(var a=[],n=[],i=0;i<e.length;i++)n.push(e[i]),(i>0&&i%t===0||i===e.length-1)&&(a.push(n),n=[]);return a}},{key:"composeSentence",value:function(e,t,a){for(var n="",i=0;i<e.length;i++)n+=e[i].value,i<e.length-1&&(n+=" ");return t&&(n+=t.value),{type:"SENTENCE",value:n,speed:a}}},{key:"makeSilence",value:function(e){return{type:"SILENCE",value:e}}},{key:"makeComma",value:function(){return{type:"PONCTUATION",value:","}}},{key:"composeText",value:function(e,t){for(var a="",n=0;n<e.length;n++){if(a+=e[n].value,n<e.length-1)"PONCTUATION"!==e[n+1].type&&(a+=" ")}return{type:"SENTENCE",value:a,speed:t}}}]),e}(),me=function(){function e(){Object(k.a)(this,e)}return Object(y.a)(e,null,[{key:"render",value:function(e,t){var a=this,n="";return e.forEach(function(e){switch(e.type){case"SENTENCE":n+=a.renderSentence(e);break;case"PONCTUATION":n+=a.renderPonctuation(e,t);break;case"SILENCE":n+=a.renderSilence(e)}n+=" "}),n}},{key:"renderSentence",value:function(e){return"<speed level='"+Math.floor(100*e.speed)+"'>"+e.value+"</speed>"}},{key:"renderPonctuation",value:function(e,t){switch(t){case"en-GB":return this.renderPonctuationEN(e);case"fr-FR":return this.renderPonctuationFR(e)}}},{key:"renderPonctuationEN",value:function(e){switch(e.value){case"?":return"<speed level='100'>Question mark.</speed>";case".":return"<speed level='100'>Full stop.</speed>";case",":return"<speed level='100'>Comma,</speed>";case";":return"<speed level='100'>Semicolon;</speed>";case"!":return"<speed level='100'>Exclamation mark.</speed>"}}},{key:"renderPonctuationFR",value:function(e){switch(e.value){case"?":return"<speed level='100'>Point d'int\xe9rogation.</speed>";case".":return"<speed level='100'>Point.</speed>";case",":return"<speed level='100'>Virgule,</speed>";case";":return"<speed level='100'>Point virgule;</speed>";case"!":return"<speed level='100'>Point d'exclamation.</speed>"}}},{key:"renderSilence",value:function(e){for(var t="",a=0;a<e.value;a++)t+="xx";return"<volume level='0'>"+t+".</volume>"}}]),e}();var pe=function(e){var t=new ue(e.text).tokenize(),a=de.compose(t);return me.render(a,e.lang)},he=a(118),fe=a.n(he),ve=function(e){function t(){return Object(k.a)(this,t),Object(E.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.progress,n=Object(X.a)(e,["classes","progress"]),s=a?i.a.createElement("div",{className:t.loading},i.a.createElement(ie.a,{size:24}),i.a.createElement("div",{className:t.loadingMessage},i.a.createElement(o.a,{id:"loading.message",defaultMessage:"Dictation is being prepared"}))):i.a.createElement(fe.a,Object.assign({variant:"contained",color:"primary"},n),i.a.createElement(o.a,{id:"loading.button",defaultMessage:"Start dictation"}));return i.a.createElement("div",{className:t.root},s)}}]),t}(i.a.Component);ve.defaultProps={progress:!1};var ge=Object(p.withStyles)({root:{flex:1,display:"flex",justifyContent:"center",alignItems:"center"},loading:{display:"flex",flexDirection:"column",alignItems:"center"},loadingMessage:{marginTop:10}})(ve),be=a(54),ke=a.n(be),ye=a(119),Ee=a.n(ye),Oe=a(78),je=a.n(Oe),xe=function(e){function t(){return Object(k.a)(this,t),Object(E.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.text,n=e.userText,s=a===n?i.a.createElement("div",{className:t.center},i.a.createElement(ke.a,{className:t.info,square:!1},i.a.createElement(o.a,{id:"checking.info",defaultMessage:"Good job !"}))):i.a.createElement("div",{className:t.correction},i.a.createElement("div",null,i.a.createElement("span",{className:t.textSpan},a)),i.a.createElement("div",{className:t.userText},i.a.createElement("span",{className:t.userTextSpan},n)));return i.a.createElement("div",{className:t.root},s)}}]),t}(i.a.Component);xe.defaultProps={text:"",userText:""};var Se=Object(p.withStyles)(function(e){return{root:{flex:1,display:"flex"},correction:{flex:1,position:"relative",marginLeft:12,marginTop:"-0.5em",marginRight:12},textSpan:{lineHeight:"4em"},userText:{position:"absolute",top:"1.5em"},userTextSpan:{lineHeight:"4em",color:je.a.A700},center:{flex:1,display:"flex",justifyContent:"center",alignItems:"center"},info:{padding:16,backgroundColor:Ee.a.A200}}})(xe),we=a(121),Ne=a.n(we),Ce=a(120),Te=a.n(Ce),Re=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(E.a)(this,Object(O.a)(t).call(this,e))).state={status:"playing",value:0,src:null,progress:!1,text:"",mode:"loading",userText:""},a.play=a.play.bind(Object(G.a)(a)),a.check=a.check.bind(Object(G.a)(a)),a.change=a.change.bind(Object(G.a)(a)),a.reload=a.reload.bind(Object(G.a)(a)),a.restart=a.restart.bind(Object(G.a)(a)),a.timeupdate=a.timeupdate.bind(Object(G.a)(a)),a.audioRef=i.a.createRef(),a.pico2waveWorker=K,a.pico2waveWorker.onmessage=function(e){a.setState({progress:!1,src:e.data})},a}return Object(j.a)(t,e),Object(y.a)(t,[{key:"play",value:function(){this.setState({mode:"playing",status:"playing"})}},{key:"check",value:function(){this.setState({mode:"checking"})}},{key:"reload",value:function(){this.setState({mode:"playing",userText:""})}},{key:"change",value:function(e){var t=e.target.value;this.setState({userText:t})}},{key:"timeupdate",value:function(e){var t=e.target.duration,a=e.target.currentTime;if(t)if(a===t)this.setState({status:"restart"});else{var n=a/t*100;this.setState({value:n})}}},{key:"restart",value:function(){this.setState({status:"playing",value:0}),this.audioRef.current.restart()}},{key:"render",value:function(){var e,t,a=this.props,n=a.classes,s=a.match.params.lang,r=Number(this.state.id)+1;if(this.state.progress){var l=pe({lang:s,text:this.state.text});this.pico2waveWorker.postMessage({lang:s,text:l})}switch(this.state.mode){default:case"loading":e=null;break;case"playing":var c=this.state.status,u="playing"===this.state.status?this.state.value:0;e=i.a.createElement("div",{className:n.toolbar},i.a.createElement(re,{onClick:this.restart,variant:c,value:u}),i.a.createElement(J.a,{color:"inherit",onClick:this.check},i.a.createElement(Te.a,null)));break;case"checking":e=i.a.createElement(J.a,{color:"inherit",onClick:this.reload},i.a.createElement(ae.a,null))}switch(this.state.mode){default:case"loading":t=i.a.createElement(ge,{progress:this.state.progress,onClick:this.play});break;case"playing":t=i.a.createElement(Ne.a,{id:"multiline-static",multiline:!0,className:n.textField,spellCheck:"false",autoComplete:"off",autoCorrect:"off",autoFocus:!0,onChange:this.change});break;case"checking":t=i.a.createElement(Se,{text:this.state.text,userText:this.state.userText})}return i.a.createElement("div",{className:n.root},i.a.createElement(D.a,{position:"static",color:"default"},i.a.createElement(P.a,null,i.a.createElement(J.a,{component:M.a,to:"/list/"+s,className:n.backButton,color:"inherit"},i.a.createElement(V.a,null)),i.a.createElement(F.a,{variant:"title",color:"inherit",className:n.flex},i.a.createElement(o.a,{id:"dictation.title",defaultMessage:"Dictation #{id}",values:{id:r}})),e)),i.a.createElement("div",{className:n.main},t),i.a.createElement(Z,{src:"playing"===this.state.mode?this.state.src:null,onTimeUpdate:this.timeupdate,ref:this.audioRef}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a,n=e.match,i=e.data,s=n.params.lang,r=n.params.id,l=i[s][r],o=t.mode;return l!==t.text?(a=!0,o="loading"):a=!1,{id:r,text:l,progress:a,mode:o}}}]),t}(i.a.Component),De=Object(p.withStyles)({root:{display:"flex",flexDirection:"column",flex:1},backButton:{marginLeft:-12,marginRight:20},flex:{flex:1},main:{flex:1,display:"flex",flexDirection:"column"},textField:{flex:1,margin:20},toolbar:{display:"flex"}})(Re),Ie=a(61);var Pe=Object(p.withStyles)({root:{fontFamily:"Roboto",display:"flex",flexDirection:"column",flex:1}})(function(e){var t=e.classes;return i.a.createElement(v.a,null,i.a.createElement("div",{className:t.root},i.a.createElement(f.a,null),i.a.createElement(g.a,null,i.a.createElement(b.a,{exact:!0,path:"/",component:function(e){return i.a.createElement(U,Object.assign({},e,{data:Ie}))}}),i.a.createElement(b.a,{path:"/list/:lang",component:function(e){return i.a.createElement(ce,Object.assign({},e,{data:Ie}))}}),i.a.createElement(b.a,{path:"/dictation/:lang/:id",component:function(e){return i.a.createElement(De,Object.assign({},e,{data:Ie}))}}))))}),qe=a(62);Object(o.c)([].concat(Object(l.a)(u.a),Object(l.a)(m.a)));var Fe=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage,Me=qe[Fe.toLowerCase().split(/[_-]+/)[0]]||qe[Fe]||qe.en;var Le=function(e){return i.a.createElement(o.b,{locale:Fe,messages:Me},i.a.createElement(Pe,null))};r.a.render(i.a.createElement(Le,null),document.querySelector("#app"))},61:function(e){e.exports={"en-GB":{0:"After a little rambling talk, the lawyer led up to the subject which so disagreeably preoccupied his mind.",1:"A close observer might have gathered that the topic was distasteful; but the doctor carried it off gaily.",2:"It was two o'clock when she came to herself and called for the police. The murderer was gone long ago; but there lay his victim in the middle of the lane, incredibly mangled.",3:"This was brought to the lawyer the next morning, before he was out of bed; and he had no sooner seen it, and been told the circumstances, than he shot out a solemn lip.",4:"An ivory-faced and silvery-haired old woman opened the door. She had an evil face, smoothed by hypocrisy; but her manners were excellent.",5:"The man's appearance amply bore out his words; his manner was altered for the worse; and except for the moment when he had first announced his terror, he had not once looked the lawyer in the face."},"fr-FR":{0:"Il avait la parole rare, le geste peu fr\xe9quent, quelque chose d'imp\xe9rieux dans toute sa personne et qui se faisait ob\xe9ir, l'air pensif, s\xe9rieux plut\xf4t que souffrant. Il avait pourtant bien souffert.",1:"Au bout de quelques mois, Claude s'acclimata \xe0 l'air de la prison, et parut ne plus songer \xe0 rien. Une certaine s\xe9r\xe9nit\xe9 s\xe9v\xe8re, propre \xe0 son caract\xe8re, avait repris le dessus.",2:"En moins de trois mois donc, Claude \xe9tait devenu l'\xe2me, la loi et l'ordre de l'atelier. Toutes ces aiguilles tournaient sur son cadran. Il devait douter lui-m\xeame par moments s'il \xe9tait roi ou prisonnier. C'\xe9tait une sorte de pape captif avec ses cardinaux.",3:"Ils travaillaient dans le m\xeame atelier, ils couchaient sous la m\xeame clef de vo\xfbte, ils se promenaient dans le m\xeame pr\xe9au, ils mordaient au m\xeame pain. Chacun des deux amis \xe9tait l'univers pour l'autre. Il para\xeet qu'ils \xe9taient heureux.",4:"Cependant ceux qui le connaissaient bien remarquaient quelque chose de sinistre et de sombre qui s'\xe9paississait chaque jour de plus en plus sur son visage. Du reste, il \xe9tait plus doux que jamais.",5:"Une fois que les surveillants les eurent laiss\xe9s seuls, Claude se leva debout sur son banc, et annon\xe7a \xe0 toute la chambr\xe9e qu\u2019il avait quelque chose \xe0 dire. On fit silence."}}},62:function(e){e.exports={en:{"lang.en-GB":"english","lang.fr-FR":"french","lang.uknown":"unknown language","home.title":"Dictations","home.listItem":"Dictations in {lang}","list.title":"Dictations","list.listItem":"Dictation #{id}","dictation.title":"Dictation #{id}","loading.button":"Start dictation","loading.message":"Dictation is being prepared","checking.info":"Good job !"},fr:{"lang.en-GB":"anglais","lang.fr-FR":"fran\xe7ais","lang.uknown":"langue inconnue","home.title":"Dict\xe9es","home.listItem":"Dict\xe9es en {lang}","list.title":"Dict\xe9es en {lang}","list.listItem":"Dict\xe9e #{id}","dictation.title":"Dict\xe9e #{id}","loading.button":"Commencer la dict\xe9e","loading.message":"La dict\xe9e est en cours de pr\xe9paration","checking.info":"Beau travail !"}}}},[[124,1,2]]]);
//# sourceMappingURL=main.693a985c.chunk.js.map