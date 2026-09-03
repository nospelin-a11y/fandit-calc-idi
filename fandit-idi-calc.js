(function(){
"use strict";

var CSS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

.fandit-idi-calc{
  --yellow:#FFDE00; --yellow-deep:#E8C700; --yellow-pale:#FFFBE0;
  --ink:#14140F; --ink-soft:#5B584C; --ink-faint:#9B9786;
  --paper:#FFFFFF; --panel:#FAF9F4; --line:#E7E3D6; --line-strong:#1E1D17; --white:#FFFFFF;
  --sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --display: 'Space Grotesk', 'Inter', sans-serif;
  --radius: 14px;
  background:var(--paper); color:var(--ink); font-family:var(--sans);
  font-size:15px; line-height:1.5; -webkit-font-smoothing:antialiased; display:block;
}
.fandit-idi-calc *{box-sizing:border-box;}
.fandit-idi-calc a{color:var(--ink);}
.fandit-idi-calc .wrap{max-width:1180px;margin:0 auto;padding:0 24px 60px;}

.fandit-idi-calc header.hero{background:var(--paper);border-bottom:4px solid var(--yellow);}
.fandit-idi-calc .hero-inner{
  max-width:1180px;margin:0 auto;padding:30px 24px 32px;
  display:flex;justify-content:space-between;align-items:flex-end;gap:40px;flex-wrap:wrap;
}
.fandit-idi-calc .brand-row{display:flex;align-items:center;gap:10px;margin-bottom:26px;}
.fandit-idi-calc .brand-row span{font-family:var(--display);font-weight:700;font-size:16px;letter-spacing:.01em;color:var(--ink);}
.fandit-idi-calc .hero-text{max-width:640px;}
.fandit-idi-calc .hero-text h1{
  font-family:var(--display);font-weight:700;font-size:clamp(28px,3.4vw,38px);
  line-height:1.12;margin:0 0 14px;letter-spacing:-0.01em;max-width:17ch;color:var(--ink);
}
.fandit-idi-calc .hero-text p{margin:0;max-width:52ch;color:var(--ink-soft);font-size:15.5px;}
.fandit-idi-calc .hero-meta{
  border:1.5px solid var(--line);border-radius:10px;padding:14px 18px;
  font-size:12px;line-height:1.7;color:var(--ink-soft);white-space:nowrap;
}
.fandit-idi-calc .hero-meta b{color:var(--ink);font-weight:700;}

.fandit-idi-calc .board{
  display:grid;grid-template-columns:1fr 400px;gap:0;
  border:1.5px solid var(--line);background:var(--panel);
}
@media (max-width:920px){ .fandit-idi-calc .board{grid-template-columns:1fr;} }
.fandit-idi-calc .form-col{padding:38px 40px 52px;border-right:1.5px solid var(--line);}
@media (max-width:920px){.fandit-idi-calc .form-col{border-right:none;border-bottom:1.5px solid var(--line);padding:28px 22px 36px;}}
.fandit-idi-calc .result-col{
  padding:38px 32px 44px;position:sticky;top:0;align-self:start;
  max-height:100vh;overflow:auto;background:var(--paper);
}
@media (max-width:920px){.fandit-idi-calc .result-col{position:static;max-height:none;padding:28px 22px 40px;}}

.fandit-idi-calc .section{margin-bottom:36px;}
.fandit-idi-calc .section:last-child{margin-bottom:0;}
.fandit-idi-calc .section-num{
  display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;
  border-radius:50%;border:1.5px solid var(--ink);color:var(--ink);
  font-family:var(--display);font-weight:700;font-size:12px;margin-bottom:10px;
}
.fandit-idi-calc .section h2{font-family:var(--display);font-size:21px;font-weight:700;margin:0 0 4px;color:var(--ink);}
.fandit-idi-calc .section .hint{color:var(--ink-soft);font-size:13.5px;margin:0 0 16px;}
.fandit-idi-calc .field{margin-bottom:18px;}
.fandit-idi-calc .field label{display:block;font-size:13px;font-weight:600;color:var(--ink);margin-bottom:6px;}
.fandit-idi-calc .field .sub{font-weight:400;color:var(--ink-soft);font-size:12.5px;display:block;margin-top:2px;}

.fandit-idi-calc select,
.fandit-idi-calc input[type=number],
.fandit-idi-calc input[type=text]{
  width:100%;font-family:var(--sans);font-size:14.5px;padding:11px 13px;
  border:1.5px solid var(--line);background:var(--white);color:var(--ink);
  border-radius:9px;appearance:none;-webkit-appearance:none;
}
.fandit-idi-calc select{
  background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='9'><path d='M1 1l6 6 6-6' stroke='%235B584C' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>");
  background-repeat:no-repeat;background-position:right 13px center;padding-right:34px;
}
.fandit-idi-calc select:focus, .fandit-idi-calc input:focus{outline:none;border-color:var(--ink);}
.fandit-idi-calc input::placeholder{color:var(--ink-faint);}

.fandit-idi-calc .euro-field{position:relative;}
.fandit-idi-calc .euro-field input{padding-left:30px;}
.fandit-idi-calc .euro-field::before{
  content:"\\20AC";position:absolute;left:13px;top:50%;transform:translateY(-50%);
  font-weight:600;color:var(--ink-soft);pointer-events:none;
}
.fandit-idi-calc .euro-field input{position:relative;}

.fandit-idi-calc .choice-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(168px,1fr));gap:8px;}
.fandit-idi-calc .choice{
  border:1.5px solid var(--line);background:var(--white);padding:10px 13px;border-radius:9px;
  font-size:13.5px;font-weight:500;color:var(--ink);cursor:pointer;user-select:none;
  display:flex;align-items:center;gap:8px;transition:border-color .12s, background .12s;
}
.fandit-idi-calc .choice:hover{border-color:var(--ink-soft);}
.fandit-idi-calc .choice input{accent-color:var(--ink);margin:0;flex-shrink:0;}
.fandit-idi-calc .choice.active{border-color:var(--ink);background:var(--ink);color:var(--white);}
.fandit-idi-calc .choice.active input{accent-color:var(--yellow);}
.fandit-idi-calc .radio-row{display:flex;gap:8px;flex-wrap:wrap;}
.fandit-idi-calc .radio-row .choice{flex:1 1 auto;min-width:110px;justify-content:center;text-align:center;}
.fandit-idi-calc .two-col{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
@media (max-width:520px){.fandit-idi-calc .two-col{grid-template-columns:1fr;}}
.fandit-idi-calc .conditional{border-left:3px solid var(--yellow);padding-left:14px;margin-top:16px;}
.fandit-idi-calc hr.rule{border:none;border-top:1.5px solid var(--line);margin:30px 0;}

.fandit-idi-calc .result-eyebrow{font-family:var(--display);font-weight:700;font-size:13px;color:var(--ink-soft);margin-bottom:12px;}
.fandit-idi-calc .result-empty{
  border:1.5px dashed var(--line);padding:28px 20px;text-align:center;
  color:var(--ink-soft);font-size:13.5px;border-radius:var(--radius);
}
.fandit-idi-calc .total-box{background:var(--ink);color:var(--paper);padding:24px 24px 22px;border-radius:var(--radius);margin-bottom:22px;}
.fandit-idi-calc .total-box .label{font-size:12px;color:#C9C6B6;margin-bottom:8px;font-weight:500;}
.fandit-idi-calc .total-box .amount{font-family:var(--display);font-size:40px;font-weight:700;letter-spacing:-0.01em;line-height:1;color:var(--yellow);}
.fandit-idi-calc .total-box .amount small{font-size:16px;font-weight:500;color:#C9C6B6;}
.fandit-idi-calc .total-box .foot{font-size:11.5px;color:#9B9786;margin-top:12px;line-height:1.5;}

.fandit-idi-calc .fund-card{border:1.5px solid var(--line);background:var(--white);padding:17px 17px 15px;border-radius:var(--radius);margin-bottom:14px;}
.fandit-idi-calc .fund-card .fc-top{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:6px;}
.fandit-idi-calc .fund-card .fc-name{font-family:var(--display);font-size:15.5px;font-weight:700;line-height:1.25;color:var(--ink);}
.fandit-idi-calc .fund-card .fc-amount{font-family:var(--display);font-size:17px;font-weight:700;color:var(--ink);white-space:nowrap;}
.fandit-idi-calc .fund-card .fc-line{font-size:12px;color:var(--ink-soft);margin-bottom:8px;}
.fandit-idi-calc .fund-card ul.fc-notes{margin:8px 0 0;padding-left:16px;font-size:12.5px;color:var(--ink-soft);}
.fandit-idi-calc .fund-card ul.fc-notes li{margin-bottom:3px;}
.fandit-idi-calc .fund-card .fc-foot{
  display:flex;justify-content:space-between;align-items:center;margin-top:12px;padding-top:10px;
  border-top:1px solid var(--line);font-size:11.5px;color:var(--ink-soft);
}
.fandit-idi-calc .fund-card .fc-foot a{color:var(--ink);text-decoration:none;font-weight:700;border-bottom:1.5px solid var(--yellow);}
.fandit-idi-calc .fund-card .fc-foot a:hover{color:var(--ink-soft);}
.fandit-idi-calc .fund-card.warn{border-color:var(--yellow-deep);border-style:dashed;}
.fandit-idi-calc .fund-card .fc-warn-note{background:var(--yellow-pale);color:#5C4B00;font-size:12px;padding:9px 11px;border-radius:7px;margin-top:8px;}
.fandit-idi-calc .fund-card .fc-tag{
  display:inline-block;font-size:10.5px;font-weight:700;padding:2px 8px;border-radius:20px;margin-left:8px;
  background:var(--yellow-pale);color:#5C4B00;border:1px solid var(--yellow-deep);vertical-align:middle;
}
.fandit-idi-calc .loan-note{border:1.5px solid var(--line);border-radius:var(--radius);padding:16px 17px;font-size:12.5px;color:var(--ink-soft);margin-top:6px;}
.fandit-idi-calc .loan-note b{color:var(--ink);}
.fandit-idi-calc .disclaimer{font-size:11.5px;color:var(--ink-soft);border-top:1px solid var(--line);margin-top:22px;padding-top:16px;}
.fandit-idi-calc .not-covered{border:1.5px dashed var(--line);padding:22px;font-size:13.5px;color:var(--ink-soft);border-radius:var(--radius);}
.fandit-idi-calc .not-covered b{color:var(--ink);}
.fandit-idi-calc .page-foot{
  max-width:1180px;margin:0 auto;padding:24px 24px 0;font-size:12px;color:var(--ink-soft);border-top:1px solid var(--line);
}
.fandit-idi-calc .page-foot a{color:var(--ink);font-weight:600;}

/* ---------- Mobile ---------- */
.fandit-idi-calc{overflow-x:hidden;}
@media (max-width:768px){
  .fandit-idi-calc .hero-inner{padding:22px 18px 24px;gap:20px;align-items:flex-start;}
  .fandit-idi-calc .brand-row{margin-bottom:16px;}
  .fandit-idi-calc .hero-text h1{font-size:26px;max-width:100%;}
  .fandit-idi-calc .hero-text p{font-size:14.5px;max-width:100%;}
  .fandit-idi-calc .hero-meta{white-space:normal;width:100%;font-size:11.5px;padding:12px 14px;}
  .fandit-idi-calc .wrap{padding:0 14px 40px;}
  .fandit-idi-calc .board{border-left:none;border-right:none;margin:0 -14px;}
  .fandit-idi-calc .form-col{padding:24px 16px 30px;}
  .fandit-idi-calc .result-col{padding:24px 16px 32px;}
  .fandit-idi-calc .section h2{font-size:19px;}
  .fandit-idi-calc .choice-grid{grid-template-columns:1fr;}
  .fandit-idi-calc .radio-row .choice{min-width:0;flex:1 1 100%;}
  .fandit-idi-calc .total-box .amount{font-size:32px;}
  .fandit-idi-calc .fund-card .fc-top{flex-direction:column;align-items:flex-start;gap:4px;}
  .fandit-idi-calc .fund-card .fc-amount{font-size:20px;}
  .fandit-idi-calc .fund-card .fc-foot{flex-direction:column;align-items:flex-start;gap:6px;}
  .fandit-idi-calc .page-foot{padding:20px 16px 0;}
}
@media (max-width:400px){
  .fandit-idi-calc .hero-text h1{font-size:23px;}
  .fandit-idi-calc select,
  .fandit-idi-calc input[type=number],
  .fandit-idi-calc input[type=text]{font-size:16px;} /* evita el zoom automatico de iOS */
}
`;

var MARKUP = `
<header class="hero">
  <div class="hero-inner">
    <div class="hero-text">
      <div class="brand-row"><span>FANDIT</span></div>
      <h1>&iquest;Cu&aacute;nto te subvencionan tu proyecto de I+D+i?</h1>
      <p>Describe tu proyecto &mdash; comunidad aut&oacute;noma, tama&ntilde;o de empresa, tipo de investigaci&oacute;n y presupuesto &mdash; y cruzamos las convocatorias de I+D+i actualmente abiertas para estimar el importe orientativo, l&iacute;nea por l&iacute;nea.</p>
    </div>
    <div class="hero-meta">
      Fuente: cat&aacute;logo FANDIT<br>
      <b id="metaFundCount">8</b> l&iacute;neas de proyecto activas<br>
      actualizado a <b>septiembre 2026</b>
    </div>
  </div>
</header>
<div class="wrap">
  <div class="board">
    <div class="form-col" id="formCol"></div>
    <div class="result-col">
      <div class="result-eyebrow">Estimaci&oacute;n</div>
      <div id="resultBox"></div>
    </div>
  </div>
  <div class="page-foot">
    Estimaci&oacute;n orientativa a efectos informativos, calculada a partir del texto de las convocatorias vigentes recogidas por <a href="https://fandit.es" target="_blank" rel="noopener">FANDIT</a>. No sustituye la lectura de las bases reguladoras ni garantiza la concesi&oacute;n de la ayuda: la resoluci&oacute;n depende de la disponibilidad presupuestaria, del cumplimiento &iacute;ntegro de los requisitos t&eacute;cnicos del proyecto y, en su caso, de la concurrencia competitiva.
  </div>
</div>
`;

function boot(){
  var mount = document.getElementById('fandit-idi-calc-root');
  if(!mount || mount.getAttribute('data-mounted')) return;
  mount.setAttribute('data-mounted','1');

  var style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  var root = document.createElement('div');
  root.className = 'fandit-idi-calc';
  root.innerHTML = MARKUP;
  mount.appendChild(root);

  var $ = function(id){ return root.querySelector('#'+id); };

  var CCAA = [
    {id:'CYL', name:'Castilla y León'},
    {id:'CT',  name:'Cataluña'},
    {id:'CLM', name:'Castilla-La Mancha'},
    {id:'GA',  name:'Galicia'},
    {id:'LR',  name:'La Rioja'},
    {id:'NA',  name:'Comunidad Foral de Navarra'},
    {id:'AS',  name:'Principado de Asturias'},
    {id:'MU',  name:'Región de Murcia'},
    {id:'OTRA',name:'Otra comunidad autónoma'}
  ];
  var TIPO_PROYECTO = [
    ['investigacion_industrial','Investigación industrial'],
    ['desarrollo_experimental','Desarrollo experimental'],
    ['innovacion','Innovación en procesos u organización'],
    ['exploracion','Exploración tecnológica / prueba de concepto']
  ];

  var money = function(n){ return Math.round(n).toLocaleString('es-ES', {maximumFractionDigits:0}) + ' €'; };
  var round = function(n){ return Math.round(n*100)/100; };
  function labelTamano(t){ return t==='pequena'?'pequeña empresa':t==='mediana'?'mediana empresa':'gran empresa'; }

  var FUNDS = [
  {
    id:'cyl_tecnologias', ccaa:'CYL',
    name:'I+D en tecnologías fundamentales — León y Palencia',
    line:'Proyectos individuales o en colaboración de investigación industrial y desarrollo experimental',
    deadline:'30/06/2028', url:'https://fandit.es/subvenciones/detalles-subvencion/1016994',
    compute:function(s){
      if(!s.presupuestoPersonal || +s.presupuestoPersonal<=0){
        return {amount:0, warn:true, notes:['Indica el presupuesto de personal del proyecto para estimar esta línea']};
      }
      var personal = +s.presupuestoPersonal;
      var amount = personal * 1.40;
      var notes = [
        'Cubre el 100% del coste de personal dentro de las tarifas máximas por categoría (Director técnico 45€/h · Técnico 30€/h · Auxiliar 20€/h, máx. 20% de las horas)',
        'Un 40% adicional fijo sobre el coste de personal cubre el resto de gastos del proyecto (material, subcontratación, equipos) sin necesidad de justificar factura a factura',
        'Las horas de personal en I+D no pueden superar el 30% de las horas totales de la plantilla del centro de trabajo'
      ];
      if(s.colaboracion) notes.push('En proyectos en colaboración, ninguna empresa puede asumir más del 70% del coste total');
      return {amount:round(amount), notes:notes};
    }
  },
  {
    id:'ct_exploracion', ccaa:'CT',
    name:'Proyectos de exploración tecnológica',
    line:'Pruebas de concepto, MVP y validación tecnológica temprana',
    deadline:'21/09/2026', url:'https://fandit.es/subvenciones/detalles-subvencion/1029950',
    compute:function(s){
      if(s.tipoProyecto!=='exploracion') return null;
      if(!s.presupuesto || +s.presupuesto<20000){
        return {amount:0, warn:true, notes:['El presupuesto subvencionable mínimo de esta línea es de 20.000 € — ajusta el presupuesto del proyecto']};
      }
      var amount = Math.min(+s.presupuesto*0.75, 30000);
      var notes = [
        'Intensidad: 75% del gasto subvencionable, con un tope de 30.000 € por proyecto',
        'Dentro de ese tope, el gasto de personal propio está limitado a 15.000 €',
        'El proyecto debe concluir con la validación tecnológica de la solución (PoC, MVP o algoritmo validado)'
      ];
      return {amount:round(amount), notes:notes};
    }
  },
  {
    id:'clm_innova', ccaa:'CLM',
    name:'Programa Innova-Adelante',
    line:'Proyectos de innovación empresarial en producto, proceso o modelo de negocio',
    deadline:'30/09/2026', url:'https://fandit.es/subvenciones/detalles-subvencion/1025410',
    compute:function(s){
      if(!s.presupuesto || +s.presupuesto<5000){
        return {amount:0, warn:true, notes:['El presupuesto subvencionable mínimo de esta línea es de 5.000 €']};
      }
      var pct = s.tamano==='grande' ? 0.30 : s.tamano==='mediana' ? 0.40 : 0.50;
      var inversion = Math.min(+s.presupuesto, 300000);
      var amount = inversion*pct;
      var notes = [
        (s.tamano==='grande'?'30%':s.tamano==='mediana'?'40%':'50%')+' de intensidad según tu tamaño de empresa, sobre una inversión subvencionable de hasta 300.000 €',
        'El gasto de personal se calcula por tarifa/hora (salario bruto anual ÷ 1.720 horas) y admite un máximo de 3 personas por proyecto, en grupos de cotización 1 o 2'
      ];
      return {amount:round(amount), notes:notes};
    }
  },
  {
    id:'ga_neotec', ccaa:'GA',
    name:'Rescate de entidades NEOTEC (umbrales mínimos)',
    line:'Empresas con Sello NEOTEC 2025 no financiadas por falta de presupuesto estatal',
    deadline:'30/09/2026', url:'https://fandit.es/subvenciones/detalles-subvencion/1030398',
    compute:function(s){
      if(!s.selloNeotecGalicia) return null;
      if(!s.presupuesto || +s.presupuesto<175000){
        return {amount:0, warn:true, notes:['Esta línea exige un presupuesto financiable de entre 175.000 € y 750.000 €']};
      }
      var cap = s.contrataDoctor ? 325000 : 250000;
      var amount = Math.min(+s.presupuesto*0.60, cap);
      var notes = ['Intensidad: 60% del presupuesto elegible, con tope de '+money(cap)+' por empresa'];
      if(s.contrataDoctor) notes.push('Tope ampliado por incorporar personal doctor con contrato indefinido a jornada completa (salario bruto 30.000–50.000 €)');
      else notes.push('El tope sube a 325.000 € si incorporas personal con título de doctor a jornada completa');
      notes.push('Coste de personal (investigador, técnico, auxiliar) limitado a 45 €/hora');
      return {amount:round(amount), notes:notes, tag: s.contrataDoctor ? 'bono doctor' : null};
    }
  },
  {
    id:'lr_mercado', ccaa:'LR',
    name:'Proyectos de I+D+i orientados al mercado',
    line:'Programa 1 (I+D) o Programa 2 (innovación en procesos y organización)',
    deadline:'30/09/2026', url:'https://fandit.es/subvenciones/detalles-subvencion/998328',
    compute:function(s){
      if(!s.presupuesto || +s.presupuesto<20000){
        return {amount:0, warn:true, notes:['La inversión mínima subvencionable de esta línea es de 20.000 €']};
      }
      var pct, programa;
      if(s.tipoProyecto==='investigacion_industrial'){ pct=0.45; programa='Programa 1 · Investigación industrial'; }
      else if(s.tipoProyecto==='desarrollo_experimental'){ pct=0.20; programa='Programa 1 · Desarrollo experimental'; }
      else if(s.tipoProyecto==='innovacion'){ pct = s.tamano==='grande' ? 0.15 : 0.20; programa='Programa 2 · Innovación en procesos y organización'; }
      else return null;
      var cap = s.colaboracion ? 600000 : 400000;
      var amount = Math.min(+s.presupuesto*pct, cap);
      var notes = [
        Math.round(pct*100)+'% de intensidad para '+programa.toLowerCase(),
        'Tope: '+money(cap)+' por expediente ('+(s.colaboracion?'proyecto colectivo':'proyecto individual')+')',
        'La ayuda conjunta con otros fondos públicos no puede superar el 80% del gasto subvencionable'
      ];
      return {amount:round(amount), notes:notes, lineOverride:programa};
    }
  },
  {
    id:'na_competitivos', ccaa:'NA',
    name:'Proyectos competitivos de I+D+i',
    line:'Individuales, en colaboración entre empresas, o de transferencia de conocimiento',
    deadline:'15/09/2026', url:'https://fandit.es/subvenciones/detalles-subvencion/1027365',
    compute:function(s){
      if(!s.presupuesto || +s.presupuesto<=0){
        return {amount:0, warn:true, notes:['Indica el presupuesto subvencionable del proyecto']};
      }
      var tabla = {
        investigacion_industrial: { ind:{pequena:.70,mediana:.50,grande:.35}, col:{pequena:.80,mediana:.70,grande:.50} },
        desarrollo_experimental:  { ind:{pequena:.45,mediana:.25,grande:.15}, col:{pequena:.60,mediana:.50,grande:.25} },
        innovacion: null, exploracion: null
      };
      var fila = tabla[s.tipoProyecto];
      if(!fila) return null;
      var pct = (s.colaboracion?fila.col:fila.ind)[s.tamano];
      var amount = Math.min(+s.presupuesto*pct, 200000);
      var notes = [
        Math.round(pct*100)+'% de intensidad ('+(s.colaboracion?'proyecto en colaboración/transferencia':'proyecto individual')+', '+labelTamano(s.tamano)+')',
        'Tope de 200.000 € por empresa participante (500.000 € para el conjunto del proyecto en colaboración)',
        'Coste de personal limitado a 45 €/hora · costes indirectos: 15% adicional sobre el gasto de personal'
      ];
      return {amount:round(amount), notes:notes};
    }
  },
  {
    id:'as_ebt', ccaa:'AS',
    name:'Empresas de base tecnológica (EBT)',
    line:'Fase I (puesta en marcha) o Fase II (crecimiento)',
    deadline:'17/09/2026', url:'https://fandit.es/subvenciones/detalles-subvencion/1010139',
    compute:function(s){
      if(!s.presupuesto || +s.presupuesto<=0){
        return {amount:0, warn:true, notes:['Indica el presupuesto subvencionable del proyecto']};
      }
      var pct = s.faseAsturias==='fase2' ? 0.50 : 0.70;
      var amount = +s.presupuesto*pct;
      var notes = [s.faseAsturias==='fase2' ? '50% de intensidad en Fase II' : '70% de intensidad en Fase I (puede llegar al 80% en determinadas condiciones)'];
      notes.push('Costes indirectos: 15% adicional sobre el gasto de personal técnico e investigador');
      notes.push('Requiere al menos un empleado por cuenta ajena o socio con relación laboral, excluye autónomos individuales');
      return {amount:round(amount), notes:notes};
    }
  },
  {
    id:'mu_ris4', ccaa:'MU',
    name:'I+D empresarial — Estrategia RIS4',
    line:'Proyectos individuales o en cooperación entre empresas',
    deadline:'18/09/2026', url:'https://fandit.es/subvenciones/detalles-subvencion/1023015',
    compute:function(s){
      if(!s.presupuesto || +s.presupuesto<70000){
        return {amount:0, warn:true, notes:['El presupuesto mínimo subvencionable de esta línea es de 70.000 €']};
      }
      var pct, cap, modalidad;
      if(!s.colaboracion){
        if(s.tamano==='grande') return null;
        pct = s.tamano==='pequena' ? 0.45 : 0.35;
        cap = 120000; modalidad='Modalidad 1 · Individual';
      } else {
        pct = s.tamano==='pequena' ? 0.60 : s.tamano==='mediana' ? 0.50 : 0.40;
        cap = 140000; modalidad='Modalidad 2 · Cooperación';
      }
      var amount = Math.min(+s.presupuesto*pct, cap);
      var notes = [
        Math.round(pct*100)+'% de intensidad ('+modalidad.toLowerCase()+')',
        'Tope de '+money(cap)+' por empresa y proyecto (máximo 600.000 € por beneficiario y convocatoria en conjunto)',
        'Coste de personal limitado a 7.200 €/mes por trabajador a tiempo completo'
      ];
      return {amount:round(amount), notes:notes, lineOverride:modalidad};
    }
  }
  ];

  var state = {
    ccaa:'', tamano:'', tipoProyecto:'', colaboracion:false,
    presupuesto:'', presupuestoPersonal:'',
    contrataDoctor:false, selloNeotecGalicia:false, faseAsturias:'fase1'
  };

  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function choiceBtn(key, val, label){
    var active = state[key]===val;
    return '<label class="choice '+(active?'active':'')+'" data-key="'+key+'" data-val="'+val+'" data-kind="radio">'+
      '<input type="radio" name="'+key+'" '+(active?'checked':'')+'> '+label+'</label>';
  }

  function renderForm(){
    var c = state.ccaa;
    var html = '';
    html += '<div class="section">'+
      '<div class="section-num">1</div>'+
      '<h2>Dónde está tu empresa</h2>'+
      '<p class="hint">La comunidad autónoma del centro de trabajo donde se ejecuta el proyecto determina qué convocatorias aplican.</p>'+
      '<div class="field"><label>Comunidad autónoma</label>'+
      '<select id="f_ccaa"><option value="">Selecciona…</option>'+
      CCAA.map(function(x){ return '<option value="'+x.id+'" '+(state.ccaa===x.id?'selected':'')+'>'+x.name+'</option>'; }).join('')+
      '</select></div>'+
      '<div class="field"><label>Tamaño de la empresa</label><div class="radio-row">'+
      choiceBtn('tamano','pequena','Pequeña <span class="sub" style="display:inline">(&lt;50 empl.)</span>')+
      choiceBtn('tamano','mediana','Mediana <span class="sub" style="display:inline">(&lt;250 empl.)</span>')+
      choiceBtn('tamano','grande','Gran empresa')+
      '</div></div></div>';

    if(!c || !state.tamano){
      $('formCol').innerHTML = html + '<div class="not-covered" style="margin-top:8px;">Completa la comunidad autónoma y el tamaño de empresa para ver las preguntas del proyecto.</div>';
      attachHandlers(); renderResults(); return;
    }
    if(c==='OTRA'){
      html += '<hr class="rule"><div class="not-covered"><b>Aún no hay líneas de proyecto cargadas para esta comunidad en esta calculadora.</b><br><br>El listado analizado cubre actualmente Castilla y León, Cataluña, Castilla-La Mancha, Galicia, La Rioja, Navarra, Asturias y la Región de Murcia — las comunidades con convocatorias de proyecto de I+D+i abiertas y con cuantías publicadas a fecha de hoy. Consulta el catálogo completo de FANDIT para tu comunidad.</div>';
      $('formCol').innerHTML = html; attachHandlers(); renderResults(); return;
    }

    html += '<div class="section">'+
      '<div class="section-num">2</div><h2>Tu proyecto</h2>'+
      '<div class="field"><label>Tipo de proyecto</label><div class="choice-grid">'+
      TIPO_PROYECTO.map(function(p){ return choiceBtn('tipoProyecto',p[0],p[1]); }).join('')+
      '</div></div>'+
      '<div class="field"><label>¿Se ejecuta en colaboración con otra empresa?</label><div class="radio-row">'+
      choiceBtn('colaboracion',true,'Sí, en colaboración')+
      choiceBtn('colaboracion',false,'No, en solitario')+
      '</div></div>'+
      '<div class="two-col">'+
      '<div class="field euro-field"><label>Presupuesto subvencionable del proyecto<span class="sub">Coste total elegible, sin IVA</span></label>'+
      '<input type="number" id="f_presupuesto" min="0" step="1000" placeholder="Ej. 150000" value="'+esc(state.presupuesto)+'"></div>'+
      '<div class="field euro-field"><label>Del cual, gasto de personal<span class="sub">Sueldos + Seguridad Social del personal dedicado</span></label>'+
      '<input type="number" id="f_presupuestoPersonal" min="0" step="1000" placeholder="Ej. 80000" value="'+esc(state.presupuestoPersonal)+'"></div>'+
      '</div></div>';

    html += '<div class="section">'+
      '<div class="section-num">3</div><h2>El equipo del proyecto</h2>'+
      '<div class="field"><label>¿Incorporas o ya cuentas con personal doctor a jornada completa en el proyecto?</label><div class="radio-row">'+
      choiceBtn('contrataDoctor',true,'Sí')+
      choiceBtn('contrataDoctor',false,'No')+
      '</div></div>'+
      (c==='GA' ? '<div class="field conditional"><label class="choice" style="display:inline-flex;width:auto;">'+
        '<input type="checkbox" id="f_selloNeotec" '+(state.selloNeotecGalicia?'checked':'')+'> Obtuve el Sello NEOTEC 2025 y no fui financiado por falta de presupuesto estatal</label></div>' : '')+
      (c==='AS' ? '<div class="field conditional"><label>Fase del programa EBT</label>'+
        '<select id="f_faseAsturias"><option value="fase1" '+(state.faseAsturias==='fase1'?'selected':'')+'>Fase I · Puesta en marcha</option>'+
        '<option value="fase2" '+(state.faseAsturias==='fase2'?'selected':'')+'>Fase II · Crecimiento</option></select></div>' : '')+
      '</div>';

    $('formCol').innerHTML = html;
    attachHandlers(); renderResults();
  }

  function attachHandlers(){
    var col = $('formCol');
    var ccaaSel = $('f_ccaa');
    if(ccaaSel) ccaaSel.onchange = function(e){ state.ccaa = e.target.value; renderForm(); };
    var presInp = $('f_presupuesto');
    if(presInp) presInp.oninput = function(e){ state.presupuesto = e.target.value; renderResults(); };
    var persInp = $('f_presupuestoPersonal');
    if(persInp) persInp.oninput = function(e){ state.presupuestoPersonal = e.target.value; renderResults(); };
    var selloInp = $('f_selloNeotec');
    if(selloInp) selloInp.onchange = function(e){ state.selloNeotecGalicia = e.target.checked; renderResults(); };
    var faseSel = $('f_faseAsturias');
    if(faseSel) faseSel.onchange = function(e){ state.faseAsturias = e.target.value; renderResults(); };
    col.querySelectorAll('.choice[data-kind="radio"]').forEach(function(el){
      el.onclick = function(){
        var key = el.getAttribute('data-key');
        var val = el.getAttribute('data-val');
        if(val==='true') val=true; else if(val==='false') val=false;
        state[key] = val;
        renderForm();
      };
    });
  }

  function renderResults(){
    var applicable = FUNDS.filter(function(f){ return f.ccaa===state.ccaa; });
    var box = $('resultBox');
    if(!state.ccaa || !state.tamano || state.ccaa==='OTRA' || !applicable.length){
      box.innerHTML = '<div class="result-empty">Completa el formulario para ver las líneas de proyecto a las que podrías optar.</div>';
      return;
    }
    var results = [];
    applicable.forEach(function(f){
      var r = f.compute(state);
      if(r){ r.fund = f; results.push(r); }
    });
    var real = results.filter(function(r){ return !r.warn; });
    var total = real.reduce(function(a,r){ return a + r.amount; }, 0);

    var html = '';
    if(real.length){
      html += '<div class="total-box">'+
        '<div class="label">Total estimado si se acumulan todas las líneas compatibles</div>'+
        '<div class="amount">'+money(total)+'</div>'+
        '<div class="foot">Suma orientativa de '+real.length+' línea(s) — revisa la compatibilidad entre ayudas antes de acumularlas; casi todas exigen que la suma de ayudas públicas no supere un % máximo del gasto</div>'+
        '</div>';
    }
    if(!results.length){
      html += '<div class="result-empty">Con este presupuesto y tipo de proyecto no encaja ninguna de las líneas analizadas para esta comunidad. Prueba a cambiar el tipo de proyecto, el tamaño de empresa o el presupuesto.</div>';
    } else {
      results.forEach(function(r){
        var f = r.fund;
        html += '<div class="fund-card '+(r.warn?'warn':'')+'">'+
          '<div class="fc-top">'+
          '<div class="fc-name">'+f.name+(r.tag?'<span class="fc-tag">'+r.tag+'</span>':'')+'</div>'+
          (!r.warn ? '<div class="fc-amount">'+money(r.amount)+'</div>' : '')+
          '</div>'+
          '<div class="fc-line">'+(r.lineOverride || f.line)+'</div>'+
          (r.warn ? '<div class="fc-warn-note">'+r.notes[0]+'</div>' : '<ul class="fc-notes">'+r.notes.map(function(n){ return '<li>'+n+'</li>'; }).join('')+'</ul>')+
          '<div class="fc-foot"><span>Cierre: '+f.deadline+'</span>'+
          '<a href="'+f.url+'" target="_blank" rel="noopener">Ver convocatoria completa</a></div>'+
          '</div>';
      });
    }
    html += '<div class="loan-note"><b>Además, a nivel estatal:</b> el CDTI ofrece líneas de financiación para proyectos de I+D (individuales, cooperación, INNOGLOBAL, Cervera…) con hasta el 85% del presupuesto — pero en forma de <b>préstamo parcialmente reembolsable</b>, no de subvención a fondo perdido. No se incluyen en el total de esta calculadora por ser de naturaleza distinta. <a href="https://fandit.es/subvenciones/detalles-subvencion/693953" target="_blank" rel="noopener">Ver línea CDTI</a></div>';
    html += '<div class="disclaimer">Cálculo basado en las bases reguladoras vigentes de cada convocatoria. Los porcentajes acumulables, los topes de minimis y la compatibilidad entre líneas dependen de cada resolución: verifica siempre el texto completo antes de presentar la solicitud.</div>';
    box.innerHTML = html;
  }

  renderForm();
}

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
})();
