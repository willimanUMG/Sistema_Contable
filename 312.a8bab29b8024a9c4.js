"use strict";(self.webpackChunkSistema_Contable=self.webpackChunkSistema_Contable||[]).push([[312],{9312:(rt,Z,a)=>{a.r(Z),a.d(Z,{CentroCostoModule:()=>nt});var u=a(9299),d=a(5861),b=a(8739),f=a(6308),s=a(7155),F=a(7120),A=a(5618),t=a(4650),D=a(5938),U=a(2628),g=a(4859),y=a(7392),N=a(4850),c=a(3546),h=a(8255),x=a(7506),Q=a(6706);function J(e,r){1&e&&(t.TgZ(0,"th",27),t._uU(1,"ID"),t.qZA())}function I(e,r){if(1&e&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.hij(" ",o.costoID," ")}}function L(e,r){1&e&&(t.TgZ(0,"th",27),t._uU(1,"Nombre"),t.qZA())}function Y(e,r){if(1&e&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.hij(" ",o.nombre," ")}}function _(e,r){1&e&&(t.TgZ(0,"th",27),t._uU(1,"Responsable"),t.qZA())}function S(e,r){if(1&e&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.hij(" ",o.responsable," ")}}function w(e,r){1&e&&(t.TgZ(0,"th",27),t._uU(1,"Empresa"),t.qZA())}function j(e,r){if(1&e&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.xp6(1),t.hij(" ",o.empresa.nombre," ")}}function M(e,r){1&e&&(t.TgZ(0,"th",29),t._uU(1,"Acciones"),t.qZA())}function q(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"td",30)(1,"div",31)(2,"button",32)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"mat-menu",null,33)(7,"button",34),t.NdJ("click",function(){const l=t.CHM(o).$implicit,v=t.oxw();return t.KtG(v.edit(l))}),t._uU(8,"Editar"),t.qZA(),t._UZ(9,"mat-divider"),t.TgZ(10,"button",35),t.NdJ("click",function(){const l=t.CHM(o).$implicit,v=t.oxw();return t.KtG(v.delete(l))}),t._uU(11," Eliminar "),t.qZA()()()()}if(2&e){const o=t.MAs(6);t.xp6(2),t.Q6J("matMenuTriggerFor",o)}}function R(e,r){1&e&&t._UZ(0,"tr",36)}function E(e,r){1&e&&t._UZ(0,"tr",37)}const O=function(){return[25,50,100]};let B=(()=>{class e{constructor(o,n,m){this.router=o,this.dialog=n,this.notificationsService=m,this.dataSource=new s.by,this.columns=["costoID","nombre","responsable","empresa"]}ngOnInit(){this.dataSource.data=A}new(){this.router.navigate(["/workspace/catalogos/centros/nuevo"])}edit(o){this.router.navigate(["/content/catalogos/centros/edit",o._id])}delete(o){this.dialog.open(F.$,{width:"95%",maxWidth:"500px",data:{message:"\xbfEsta seguro que desea eliminarlo?",submit:"Aceptar",cancel:"Cancelar"}}).afterClosed().subscribe(function(){var m=(0,d.Z)(function*(l){});return function(l){return m.apply(this,arguments)}}())}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.F0),t.Y36(D.uw),t.Y36(U.T))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list"]],viewQuery:function(o,n){if(1&o&&(t.Gf(b.NW,7),t.Gf(f.YE,7)),2&o){let m;t.iGM(m=t.CRH())&&(n.paginator=m.first),t.iGM(m=t.CRH())&&(n.sort=m.first)}},decls:38,vars:8,consts:[[1,"container-fluid"],[1,"d-flex","flex-wrap","justify-content-between"],[1,"d-flex","align-items-center","txt-blue2","mb-4"],[1,"title"],[1,"row"],[1,"col-md-10"],[3,"dataSource"],[1,"col-md-2","d-flex","justify-content-end"],["mat-raised-button","",1,"bg-blue3","txt-white","squared-button","w-auto",3,"click"],[3,"loading"],[1,"row",3,"hidden"],[1,"col-sm-12"],[1,"table-container"],["mat-table","","matSort","","matSortActive","key","matSortDirection","asc","appTableQuery","",1,"table-responsive-sm","table-hover",3,"dataSource"],["matColumnDef","costoID"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","responsable"],["matColumnDef","empresa"],["matColumnDef","actions"],["mat-header-cell","","class","text-center",4,"matHeaderCellDef"],["mat-cell","","class","text-center",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"d-flex","flex-column-reverse","flex-md-row","align-items-center","justify-content-between"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","",1,"text-center"],["mat-cell","",1,"text-center"],[1,"d-flex","justify-content-center"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","",1,"txt-red3",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._uU(4," Centros de Costo "),t.qZA()()(),t.TgZ(5,"div",4)(6,"div",5),t._UZ(7,"app-search-bar",6),t.qZA(),t.TgZ(8,"div",7)(9,"button",8),t.NdJ("click",function(){return n.new()}),t._uU(10," Crear nuevo "),t.qZA()()(),t._UZ(11,"app-circular-loading",9),t.TgZ(12,"div",10)(13,"div",11)(14,"mat-card")(15,"mat-card-content")(16,"div")(17,"div",12)(18,"table",13),t.ynx(19,14),t.YNc(20,J,2,0,"th",15),t.YNc(21,I,2,1,"td",16),t.BQk(),t.ynx(22,17),t.YNc(23,L,2,0,"th",15),t.YNc(24,Y,2,1,"td",16),t.BQk(),t.ynx(25,18),t.YNc(26,_,2,0,"th",15),t.YNc(27,S,2,1,"td",16),t.BQk(),t.ynx(28,19),t.YNc(29,w,2,0,"th",15),t.YNc(30,j,2,1,"td",16),t.BQk(),t.ynx(31,20),t.YNc(32,M,2,0,"th",21),t.YNc(33,q,12,1,"td",22),t.BQk(),t.YNc(34,R,1,0,"tr",23),t.YNc(35,E,1,0,"tr",24),t.qZA()(),t.TgZ(36,"div",25),t._UZ(37,"mat-paginator",26),t.qZA()()()()()()()),2&o&&(t.xp6(7),t.Q6J("dataSource",n.dataSource),t.xp6(4),t.Q6J("loading",n.loading),t.xp6(1),t.Q6J("hidden",n.loading),t.xp6(6),t.Q6J("dataSource",n.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",n.columns),t.xp6(1),t.Q6J("matRowDefColumns",n.columns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(7,O)))},dependencies:[g.lW,y.Hw,N.d,c.a8,c.dn,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,f.YE,f.nU,b.NW,h.VK,h.OP,h.p6,x.s,Q.N]}),e})();var i=a(4006),H=a(299),C=a(6895),p=a(9549),G=a(4144),z=a(4385),$=a(3238),K=a(9429);function W(e,r){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formErrorHandler"),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,o.nombreField))}}function X(e,r){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formErrorHandler"),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,o.responsableField))}}function P(e,r){if(1&e&&(t.TgZ(0,"mat-option",21),t._uU(1),t.qZA()),2&e){const o=r.$implicit;t.Q6J("value",o.empresaID),t.xp6(1),t.hij(" ",o.nombre," ")}}function V(e,r){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formErrorHandler"),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,o.empresaIDField)," ")}}const k=function(){return["/workspace/catalogos/centros"]};let T=(()=>{class e{constructor(o,n,m){this.formBuilder=o,this.activeRoute=n,this.router=m,this.loading=!0,this.buildForm(),this.router.url.includes("/nuevo")?(this.edit=!1,this.baseKey="nuevo"):(this.activeRoute.params.subscribe(l=>{this.centroCostoID=Number(l.ID)}),this.edit=!0,this.baseKey="edit",this.patchForm()),this.listEmpresas=H}ngOnInit(){this.loading=!1}create(o){o.preventDefault(),this.edit?this.update():this.save(),this.edit=!1}save(){return(0,d.Z)(function*(){})()}update(){return(0,d.Z)(function*(){})()}buildForm(){this.form=this.formBuilder.group({empresaID:["",[i.kI.required]],nombre:["",[i.kI.required]],responsable:["",[i.kI.required]]})}patchForm(){var o=this;return(0,d.Z)(function*(){o.form.patchValue({empresaID:o.centroCosto.empresaID,nombre:o.centroCosto.nombre,responsable:o.centroCosto.responsable})})()}get empresaIDField(){return this.form.get("empresaID")}get nombreField(){return this.form.get("nombre")}get responsableField(){return this.form.get("responsable")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(i.QS),t.Y36(u.gz),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-form"]],decls:47,vars:14,consts:[[1,"container-fluid"],[1,"d-flex","flex-wrap","justify-content-between"],[1,"d-flex","align-items-center","txt-blue2","mb-4"],[1,"title"],[3,"loading"],[1,"row",3,"hidden"],[1,"col-sm-12"],["form","form",3,"formGroup","ngSubmit"],[1,"subheader"],[1,"row"],[1,"form-group"],["appearance","outline"],["appTrim","","matInput","","type","text","formControlName","nombre","minlength","1","maxlength","20",3,"formControl"],[4,"ngIf"],["align","end"],["appTrim","","matInput","","type","text","formControlName","responsable","minlength","1","maxlength","20",3,"formControl"],["formControlName","empresaID","required",""],[3,"value",4,"ngFor","ngForOf"],[1,"form-group",2,"text-align","right !important"],["mat-button","",1,"w-auto",3,"routerLink"],["mat-raised-button","","type","submit",1,"bg-blue3","txt-white","squared-button","w-auto"],[3,"value"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._uU(4," Centro de Costo "),t.qZA()()(),t._UZ(5,"app-circular-loading",4),t.TgZ(6,"div",5)(7,"div",6)(8,"form",7),t.NdJ("ngSubmit",function(l){return n.create(l)}),t.TgZ(9,"mat-card")(10,"mat-card-header")(11,"mat-card-title")(12,"span",8),t._uU(13),t.qZA()()(),t.TgZ(14,"mat-card-content")(15,"div",9)(16,"div",6)(17,"div",10)(18,"mat-form-field",11)(19,"mat-label"),t._uU(20," Nombre "),t.qZA(),t._UZ(21,"input",12),t.YNc(22,W,3,3,"mat-error",13),t.TgZ(23,"mat-hint",14),t._uU(24),t.qZA()()()(),t.TgZ(25,"div",6)(26,"div",10)(27,"mat-form-field",11)(28,"mat-label"),t._uU(29," Responsable "),t.qZA(),t._UZ(30,"input",15),t.YNc(31,X,3,3,"mat-error",13),t.TgZ(32,"mat-hint",14),t._uU(33),t.qZA()()()(),t.TgZ(34,"div",6)(35,"div",10)(36,"mat-form-field",11)(37,"mat-label"),t._uU(38," Empresa "),t.qZA(),t.TgZ(39,"mat-select",16),t.YNc(40,P,2,2,"mat-option",17),t.qZA(),t.YNc(41,V,3,3,"mat-error",13),t.qZA()()()()(),t.TgZ(42,"mat-card-actions",18)(43,"a",19),t._uU(44," Cancelar "),t.qZA(),t.TgZ(45,"button",20),t._uU(46," Guardar "),t.qZA()()()()()()()),2&o&&(t.xp6(5),t.Q6J("loading",n.loading),t.xp6(1),t.Q6J("hidden",n.loading),t.xp6(2),t.Q6J("formGroup",n.form),t.xp6(5),t.Oqu("nuevo"===n.baseKey?"Nuevo Centro de Costo":"Editar Centro de Costo"),t.xp6(8),t.Q6J("formControl",n.nombreField),t.xp6(1),t.Q6J("ngIf",n.nombreField.errors),t.xp6(2),t.hij("",null==n.nombreField.value?null:n.nombreField.value.length," / 20"),t.xp6(6),t.Q6J("formControl",n.responsableField),t.xp6(1),t.Q6J("ngIf",n.responsableField.errors),t.xp6(2),t.hij("",null==n.responsableField.value?null:n.responsableField.value.length," / 20"),t.xp6(7),t.Q6J("ngForOf",n.listEmpresas),t.xp6(1),t.Q6J("ngIf",n.empresaIDField.errors),t.xp6(2),t.Q6J("routerLink",t.DdM(13,k)))},dependencies:[C.sg,C.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.wO,i.nD,i.oH,i.sg,i.u,g.lW,g.zs,c.a8,c.dk,c.dn,c.n5,c.hq,p.TO,p.KE,p.bx,p.hX,G.Nt,z.gD,$.ey,x.s,u.yS,K.P]}),e})();const tt=[{path:"",component:B},{path:"nuevo",component:T},{path:"edit/:ID",component:T}];let et=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(tt),u.Bz]}),e})();var ot=a(4185);let nt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[C.ez,ot.m,et]}),e})()}}]);