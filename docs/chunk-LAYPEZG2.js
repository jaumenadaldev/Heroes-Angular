import{W as L,b as u,d,e as f,f as g,r as x}from"./chunk-6VWOBISH.js";import{h as E,i as F,j as c,k as b,m as S}from"./chunk-IGEC4HNM.js";import"./chunk-JGYM447R.js";import{$ as p,Eb as M,Kc as C,Qb as r,Xa as y,ia as l,ja as s,xb as n,yb as e,zb as a}from"./chunk-CT7SAVEE.js";var j=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["app-layout-page"]],decls:3,vars:0,consts:[[1,"grid","p-3"],[1,"col-12","mt-5","md:col-6","md:col-offset-3","md:mt-8"]],template:function(o,v){o&1&&(n(0,"div",0)(1,"div",1),a(2,"router-outlet"),e()())},dependencies:[E]});let i=t;return i})();var w=(()=>{let t=class t{constructor(m,o){this.authService=m,this.router=o}onLogin(){this.authService.login("jaume@gmail.com","1234").subscribe(m=>{this.router.navigate(["/"])})}};t.\u0275fac=function(o){return new(o||t)(y(S),y(F))},t.\u0275cmp=l({type:t,selectors:[["app-login-page"]],decls:18,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["type","text","matInput","","placeholder","Nombre de usuario"],["type","password","matInput","","placeholder","Contrase\xF1a"],["mat-button","","mat-flat-button","","color","primary",3,"click"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/new-account"]],template:function(o,v){o&1&&(n(0,"div",0)(1,"span",1),r(2,"Login"),e(),n(3,"mat-form-field")(4,"mat-label"),r(5,"Usuario"),e(),a(6,"input",2),e(),n(7,"mat-form-field")(8,"mat-label"),r(9,"Contrase\xF1a"),e(),a(10,"input",3),e(),n(11,"button",4),M("click",function(){return v.onLogin()}),n(12,"mat-icon"),r(13,"login"),e(),r(14," Iniciar sesi\xF3n "),e(),n(15,"div",5)(16,"a",6),r(17,"\xBFQuieres crear un usuario?"),e()()())},dependencies:[c,u,f,d,g,x]});let i=t;return i})();var k=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["app-register-page"]],decls:22,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["type","text","matInput","","placeholder","Nombre de usuario"],["type","password","matInput","","placeholder","Contrase\xF1a"],["mat-button","","mat-flat-button","","color","primary"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/login"]],template:function(o,v){o&1&&(n(0,"div",0)(1,"span",1),r(2,"Registro"),e(),n(3,"mat-form-field")(4,"mat-label"),r(5,"Usuario"),e(),a(6,"input",2),e(),n(7,"mat-form-field")(8,"mat-label"),r(9,"Nombre"),e(),a(10,"input",2),e(),n(11,"mat-form-field")(12,"mat-label"),r(13,"Contrase\xF1a"),e(),a(14,"input",3),e(),n(15,"button",4)(16,"mat-icon"),r(17,"save"),e(),r(18," Crear cuenta "),e(),n(19,"div",5)(20,"a",6),r(21,"\xBFQuieres iniciar sesi\xF3n?"),e()()())},dependencies:[c,u,f,d,g,x]});let i=t;return i})();var B=[{path:"",component:j,children:[{path:"login",component:w},{path:"new-account",component:k},{path:"**",redirectTo:"login"}]}],N=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=s({type:t}),t.\u0275inj=p({imports:[b.forChild(B),b]});let i=t;return i})();var it=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=s({type:t}),t.\u0275inj=p({imports:[C,N,L]});let i=t;return i})();export{it as AuthModule};
