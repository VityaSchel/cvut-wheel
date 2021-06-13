(this["webpackJsonpcvut-wheel"]=this["webpackJsonpcvut-wheel"]||[]).push([[0],{121:function(t,e,n){},122:function(t,e,n){},128:function(t,e){},130:function(t,e){},140:function(t,e){},142:function(t,e){},169:function(t,e){},170:function(t,e){},175:function(t,e){},177:function(t,e){},184:function(t,e){},203:function(t,e){},223:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),c=n(24),i=n.n(c),o=(n(121),n(14)),r=(n(122),n(237)),l=n(37),u=n(30),h=n(31),f=n(115),d=n(114),j=n(3),b=function(t){Object(f.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={list:a.props.list,colorList:a.props.colorList,radius:75,rotate:0,easeOut:0,angle:0,top:null,offset:null,net:null,result:null,spinning:!1},a.topPosition=function(t,e){var n=null,s=null;9===t?(n=7,s=Math.PI/2-2*e):8===t?(n=6,s=0):t<=7&&t>4?(n=t-1,s=Math.PI/2-e):4===t?(n=t-1,s=0):t<=3&&(n=t,s=Math.PI/2),a.setState({top:n-1,offset:s})},a.spin=function(){var t=Math.floor(900*Math.random())+500;a.setState({rotate:t,easeOut:2,spinning:!0}),setTimeout((function(){a.getResult(t)}),2e3)},a.getResult=function(t){for(var e,n=a.state,s=n.angle,c=n.top,i=n.offset,o=n.list,r=t%360*Math.PI/180,l=r+i,u=c+1;l>0;)l-=s,u--;e=u>=0?u:o.length+u,a.setState({net:r,result:e})},a.reset=function(){a.setState({rotate:0,easeOut:0,result:null,spinning:!1})},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.renderWheel()}},{key:"renderWheel",value:function(){var t=this.state.list.length,e=2*Math.PI/t;this.setState({angle:e}),this.topPosition(t,e);for(var n=0,a=0;a<t;a++){var s=this.state.list[a];this.renderSector(a+1,s,n,e,this.state.colorList[a]),n+=e}}},{key:"renderSector",value:function(t,e,n,a,s){var c=document.getElementById("wheel"),i=c.getContext("2d"),o=c.width/2,r=c.height/2,l=this.state.radius,u=n,h=n+a,f=t*a,d=3.33*l,j=d-150;i.beginPath(),i.arc(o,r,l,u,h,!1),i.lineWidth=2*l,i.strokeStyle=s,i.font="17px Arial",i.fillStyle="white",i.stroke(),i.save(),i.translate(d+Math.cos(f-a/2)*j,d+Math.sin(f-a/2.65)*j),i.rotate(f-a/2-2*Math.PI),i.fillText(e,-i.measureText(e).width/2,0),i.restore()}},{key:"getColor",value:function(){var t=Math.floor(255*Math.random()),e=Math.floor(255*Math.random()),n=Math.floor(255*Math.random());return"rgba(".concat(t,",").concat(e,",").concat(n,",0.4)")}},{key:"render",value:function(){return Object(j.jsx)("canvas",{id:"wheel",width:"500",height:"500"})}}]),n}(s.a.Component);var p=function(){var t=s.a.useState(!1),e=Object(o.a)(t,2),n=e[0],a=e[1],c=s.a.useState(!1),i=Object(o.a)(c,2),u=i[0],h=i[1],f=s.a.useState(0),d=Object(o.a)(f,2),p=d[0],v=d[1],g=s.a.useState(0),O=Object(o.a)(g,2),m=O[0],x=O[1],M=s.a.useState(0),S=Object(o.a)(M,2),w=S[0],y=S[1],k=s.a.useState(),I=Object(o.a)(k,2),P=I[0],N=I[1],L=s.a.useState(),T=Object(o.a)(L,2),E=T[0],F=T[1];return s.a.useEffect((function(){for(var t=2*(new l.a).integer(4,8),e=[],n=[],a=0;a<t;a++)e.push(0===a?"\u010cZU":a%2===0?"FIT":"FEL"),n.push(0===a?"#048e0e":a%2===0?"#2b048e":"#8e044b");N(e),F(n);var s=360/e.length;v(-s/2),x((new l.a).integer(s,360-s))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"wheel",children:[Object(j.jsx)("div",{className:"picker",children:Object(j.jsx)("img",{src:"palec.jpeg",height:"50px"})}),Object(j.jsx)("div",{className:"rotation-part",style:{transform:"rotate(".concat(w,"deg)")},children:Object(j.jsx)("div",{style:{transform:"rotate(".concat(m,"deg)")},children:Object(j.jsx)("div",{className:"wheel-component-outer",style:{transform:"rotate(".concat(p,"deg)")},children:Object(j.jsx)("div",{className:"wheel-component",children:P&&E&&Object(j.jsx)(b,{list:P,colorList:E})})})})})]}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("h1",{children:"FIT \u0438\u043b\u0438 FEL?"}),Object(j.jsx)("p",{children:"\u041a\u0440\u0443\u0442\u0438\u0442\u0435 \u043a\u043e\u043b\u0435\u0441\u043e \u0443\u0434\u0430\u0447\u0438, \u0447\u0442\u043e\u0431\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u0432\u043e\u044e \u0441\u0443\u0434\u044c\u0431\u0443!"}),Object(j.jsx)(r.a,{variant:"contained",color:"primary",disabled:u,onClick:function(){h(!0),y(360*(new l.a).integer(3,5)-m),setTimeout((function(){return a(!0)}),8e3)},children:"\u041a\u0440\u0443\u0442\u0438\u0442\u044c!"})]})]}),Object(j.jsx)("img",{src:"czu.png",className:"fullscreen","is-shown":n.toString(),alt:"\u0414\u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \u0432 \u010cZU"})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.524c4f07.chunk.js.map