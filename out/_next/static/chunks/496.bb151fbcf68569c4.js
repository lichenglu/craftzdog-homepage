"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{3496:function(c,b,a){a.r(b),a.d(b,{"default":function(){return j}});var d=a(5893),e=a(7294),f=a(2212),g=a(9365),h=a(1217),i=a(7302),j=function(){var l=(0,e.useRef)(),a=(0,e.useState)(!0),m=a[0],r=a[1],b=(0,e.useState)(),c=b[0],s=b[1],j=(0,e.useState)(),t=(j[0],j[1]),n=(0,e.useState)(new f.Pa4(0,.4,0)),u=n[0],o=(0,e.useState)(new f.Pa4(20*Math.sin(.2*Math.PI),10,20*Math.cos(.2*Math.PI))),v=o[0],p=(0,e.useState)(new f.xsS),w=p[0],k=(0,e.useState)(),x=(k[0],k[1]),q=(0,e.useCallback)(function(){var a=l.current;if(a&&c){var b=a.clientWidth,d=a.clientHeight;c.setSize(b,d)}},[c]);return(0,e.useEffect)(function(){var b=l.current;if(b&&!c){var k=b.clientWidth,j=b.clientHeight,a=new f.CP7({antialias:!0,alpha:!0});a.setPixelRatio(window.devicePixelRatio),a.setSize(k,j),a.outputEncoding=f.knz,b.appendChild(a.domElement),s(a);var d=5e-4*j+1.3,e=new f.iKG(-d,d,d,-d,.01,5e4);e.position.copy(v),e.lookAt(u),t(e);var m=new f.vmT(13421772,526368,2);w.add(m);var i=new g.z(e,a.domElement);i.autoRotate=!0,i.target=u,x(i),(function(b,c){var a=arguments.length>2&& void 0!==arguments[2]?arguments[2]:{receiveShadow:!0,castShadow:!0},d=a.receiveShadow,e=a.castShadow;return new Promise(function(a,f){new h.E().load(c,function(f){var c=f.scene;c.name="dog",c.position.y=0,c.position.x=0,c.receiveShadow=d,c.castShadow=e,b.add(c),c.traverse(function(a){a.isMesh&&(a.castShadow=e,a.receiveShadow=d)}),a(c)},void 0,function(a){f(a)})})})(w,"/static/scene.gltf",{receiveShadow:!1,castShadow:!1}).then(function(){p(),r(!1)});var n=null,o=0,p=function(){if(n=requestAnimationFrame(p),(o=o<=100?o+1:o)<=100){var d,b=v,c=-Math.sqrt(1-Math.pow(o/120-1,4))*Math.PI*20;e.position.y=10,e.position.x=b.x*Math.cos(c)+b.z*Math.sin(c),e.position.z=b.z*Math.cos(c)-b.x*Math.sin(c),e.lookAt(u)}else i.update();a.render(w,e)};return function(){console.log("unmount"),cancelAnimationFrame(n),a.dispose()}}},[]),(0,e.useEffect)(function(){return window.addEventListener("resize",q,!1),function(){window.removeEventListener("resize",q,!1)}},[c,q]),(0,d.jsx)(i.dl,{ref:l,children:m&&(0,d.jsx)(i.xn,{})})}}}])