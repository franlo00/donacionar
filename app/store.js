import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import * as ApplicationSettings from "tns-core-modules/application-settings";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orgs:[
      {
        img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-zman.jpg",
        name:"Zman",
        direccion:"Billinghurst 670",
descripcion:"Instituto de Oficios para j\u00f3venes a cargo del Lic. Leonardo Epstein",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=322",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-toratenu.jpg",
name:"Toratenu",direccion:"Anchorena 626, CABA",
descripcion:"Escuela niveles jard\u00edn, primaria y secundaria, aproximadamente 2000 alumnos.",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=321",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-sucath-azul.jpg",
name:"Sucath David",direccion:"Tucuman 2750",
descripcion:"Centro Comunitario con m\u00e1s de 1000 socios y participantes diarios. ",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=324",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-ncsy.jpg",
name:"NCSY",direccion:"Moldes 2436",
descripcion:"Actividades y Viajes para adolescentes jud\u00edos en edad de secundaria",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=326",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-general-roca.jpg",
name:"Asociaci\u00f3n Israelita de General Roca",direccion:"Chacabuco 1546, General Roca",
descripcion:"Comunidad con el \u00fanico Cementerio Jud\u00edo de la Patagonia Argentina",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=329",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-agudat.jpg",
name:"Agudat Dodim",direccion:" Avellaneda 2874",
descripcion:"Comunidad Sefarad\u00ed Agudath Dodim",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=333",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-acilba-2.jpg",
name:"ACILBA",direccion:"Jorge Luis Borges 1932",
descripcion:"Comunidad Marroqu\u00ed con Bet Hakneset, Cementerio, Actividades para todas las edades",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=332",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-chalom2.jpg",
name:"Chalom",direccion:"Olleros 2876",
descripcion:"Centro Comunitario Chalom",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=330",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-Ajdut-Israel.jpg",
name:"Ajdut Israel",direccion:"Moldes 2449",
descripcion:"Comunidad Ajdut Israel cuenta con escuela jard\u00edn, primaria y secundaria, colel, yeshiva, shil y minian sefarad\u00ed, entre otros. ",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=343",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-hatzalah.jpg",
name:"Jevr\u00e1 Hatzalah Argentina",direccion:"Artigas 626, CABA",
descripcion:"Equipo de voluntarios en emergencias prehospitalarias.",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=345",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-bene-david.jpg",
name:"Bene David",direccion:"Tucuman 2750",
descripcion:"Mini\u00e1n Juvenil de Sucath David",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=346",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-Iosef-Caro.jpg",
name:"Colegio Iosef Caro",direccion:"Moldes 2449",
descripcion:"Colegio Iosef Caro cuenta con los 3 niveles jard\u00edn, primaria y secundaria.",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=347",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-dor-jadash2.jpg",
name:"Dor Jadash",direccion:"Murillo 661",
descripcion:"Comunidad Dor Jadash",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=348",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-guemilut-hasadim.jpg",
name:"Guemilut Hasadim",direccion:"Once",
descripcion:"Fundaci\u00f3n Guemilut Hasadim brinda ayuda de todo tipo a quienes m\u00e1s lo necesitan.",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=349",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-seminar-bet-yaakov.jpg",
name:"Seminar Beit Yaacov Shayejet",direccion:"Azcu\u00e9naga 736",
descripcion:"Seminar Beit Yaakov es un instituto integral oficial para mujeres en edad de secundaria",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=350",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/logo_dark.png",
name:"donacion.com.ar",direccion:"CABA",
descripcion:"Plataforma de Fundraising para Organizaciones",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=351",
categoria:"Causas Solidarias"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-congregacion.jpg",
name:"Congregaci\u00f3n Sefarad\u00ed",direccion:"Lavalle 2449",
descripcion:"Congregaci\u00f3n Sefarad\u00ed \"Yesod Hadat\" ",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=352",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-ahabat-ajim.jpg",
name:"Ahabat Ajim (Lan\u00fas)",direccion:"Anatole France 1548",
descripcion:"Centro Comunitario Israelita Sefarad\u00ed de Lan\u00fas",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=353",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-atid.jpg",
name:"Asoc. Sefarad\u00ed de La Plata",direccion:"Lavalle 2449",
descripcion:"Atid es la Asociaci\u00f3n Sefarad\u00ed de La Plata dirigida por el Rab Ruben Faour",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=354",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-castex.jpg",
name:"Castex",direccion:"Castex 3290",
descripcion:"Kehil\u00e1 de Barrio Parque",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=355",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-perspectivas2.jpg",
name:"Yeshiva y Colel Perspectivas",direccion:"Tucum\u00e1n 2750",
descripcion:"Yeshiva Ketan\u00e1, Yeshiva Guedol\u00e1 y Colel",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=356",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-shuba.jpg",
name:"Shuba Israel",direccion:"Ecuador 627",
descripcion:"Comunidad Shuba Israel ",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=357",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-bene-emet.jpg",
name:"Ben\u00e9 Emeth",direccion:"Buenos Aires",
descripcion:"Asociaci\u00f3n Israelita Sefarad\u00ed \"Hijos de la Verdad\"",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=358",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-maimonides.jpg",
name:"Maimonides",direccion:" Avellaneda 2874",
descripcion:"Colegio Maimonides cuenta con niveles maternal, jard\u00edn y primaria.",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=359",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-shorashim.jpg",
name:"Shorashim",direccion:"Lavalle 2390",
descripcion:"Comunidad Shorashim a cargo del Rab Ezra Chueke",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=360",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-valle.jpg",
name:"Kehila de Valle - C\u00f3rdoba ",direccion:"C\u00f3rdoba",
descripcion:"Kehila de Valle",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=361",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-jabad-rosario.jpg",
name:"Beit Jabad Rosario ",direccion:"Rosario",
descripcion:"Beit Jabad Rosario ",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=373",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-mendoza.jpg",
name:"Kehila de Mendoza",direccion:"Mendoza",
descripcion:"Sociedad Israelita de Beneficencia Mendoza",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=376",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-rivera.jpg",
name:"Kehil\u00e1 de Rivera y Colonias Baron Hirsch",direccion:"Rivera",
descripcion:"Asociaci\u00f3n Israelita Chevra Kedusch\u00e1 de Rivera y Colonias Baron Hirsch",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=372",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-neuquen.jpg",
name:"Centro Hebarico Neuqu\u00e9n",direccion:"Neuqu\u00e9n",
descripcion:"Centro Hebarico Neuqu\u00e9n",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=362",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-salta.jpg",
name:"Kehil\u00e1 de Salta",direccion:"Salta",
descripcion:"Alianza Israelita de Ss.Mm de Salta",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=375",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-etz-ajaim.jpg",
name:"Etz Ajaim - Rosario ",direccion:"Rosario",
descripcion:"Asociaci\u00f3n Israelita Sefaradi Etz Ajaim",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=364",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-max-nordau.jpg",
name:"Max Nordau - La Plata ",direccion:"La Plata",
descripcion:"Club Literario israelita y Biblioteca Max Nordau",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=371",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-parana.jpg",
name:"Asociacion Israelita de Paran\u00e1",direccion:"Paran\u00e1",
descripcion:"Asociacion Israelita de Paran\u00e1",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=369",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-corrientesjpg.jpg",
name:"Asociacion Israelita Latina - Corrientes",direccion:" Corrientes",
descripcion:"Asociacion Israelita Latina de Corrientes",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=363",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-amia-la-plata.jpg",
name:"Amia La Plata ",direccion:"La Plata",
descripcion:"Amia La Plata ",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=365",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-villa-angela.jpg",
name:"Kehil\u00e1 de Villa \u00c1ngela - Chaco ",direccion:"Chaco",
descripcion:"Asociaci\u00f3n Israelita Cultural y de Beneficencia de Villa \u00c1ngela, Chaco",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=366",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-rafaela.jpg",
name:"Comunidad Judia - Rafaela",direccion:"Rafaela",
descripcion:"Comunidad Judia de Rafaela",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=367",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-suim.jpg",
name:"SUIM - Mar del Plata ",direccion:"Mar del Plata",
descripcion:"SUIM Sociedad Uni\u00f3n Israelita Marplatense",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=368",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-sefaradi-cordoba.jpg",
name:"Uni\u00f3n Israelita Sefaradi de C\u00f3rdoba",direccion:"C\u00f3rdoba",
descripcion:"Uni\u00f3n Israelita Sefaradi de C\u00f3rdoba",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=370",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-basavilbaso.jpg",
name:"Kehil\u00e1 de Basavilbaso ",direccion:"Basavilbaso ",
descripcion:"Asociacion Israelita de Basavilbaso ",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=374",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-resistencia.jpg",
name:"Comunidad Jud\u00eda de Resistencia",direccion:"Resistencia",
descripcion:"Comunidad Jud\u00eda de Resistencia",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=377",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-sefaradi-tucuman.jpg",
name:"Kehil\u00e1 Sefarad\u00ed de Tucum\u00e1n",direccion:"Tucum\u00e1n",
descripcion:"Kehil\u00e1 Sefarad\u00ed de Tucum\u00e1n",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=380",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-concordia.jpg",
name:"Kehil\u00e1 Agudat Israel Sefaradi Concordia ",direccion:"Concordia",
descripcion:"Comunidad Agudat Israel Sefaradi Concordia ",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=378",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-bahia-blanca.jpg",
name:"Asociaci\u00f3n Israelita de Bahia Blanca ",direccion:"Bahia Blanca ",
descripcion:"Asociaci\u00f3n Israelita de Bahia Blanca ",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=382",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-concepcion.jpg",
name:"Kehila de Concepci\u00f3n del Uruguay ",direccion:"Concepci\u00f3n del Uruguay ",
descripcion:"Centro Social Israelito Argentino Concepci\u00f3n del uruguay ",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=379",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-avigdor.jpg",
name:"Colonia Jud\u00eda de Avigdor ",direccion:"Entre R\u00edos",
descripcion:"Centro Union Israelita Colonia Avigador",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=381",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-villa-clara.jpg",
name:"Comunidad\u00a0de\u00a0Villa Clara",direccion:"Entre R\u00edos",
descripcion:"Comunidad\u00a0Israelita Clara Belez de\u00a0Villa Clara",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=383",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-sionista-tucuman.jpg",
name:"Uni\u00f3n Sionista Tucumana ",direccion:"Tucum\u00e1n",
descripcion:"Instituci\u00f3n deportiva Unidad Sionista Tucumana ",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=389",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-villaguay.jpg",
name:"Comunidad Jud\u00eda - Villaguay ",direccion:"Entre R\u00edos",
descripcion:"Asociacion Israelita Argentina de Villaguay",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=384",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-catamarca.jpg",
name:"Kehil\u00e1 de Catamarca",direccion:"Catamarca",
descripcion:"Asociacion Israelita Argentina de Catamarca",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=393",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-schebet-ahim-rosario.jpg",
name:"Schebet Ahim Rosario ",direccion:"Rosario",
descripcion:"Asociacion Israelita Sefaradi Schebet Ahim Rosario",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=386",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-tucuman-ashkenazi.jpg",
name:"Kehila de Tucuman",direccion:"Tucum\u00e1n",
descripcion:"Kehila Tucuman - Ashkenazi",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=392",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-santa-fe.jpg",
name:"Comunidad Israelita de Santa Fe ",direccion:"Santa Fe",
descripcion:"Comunidad Israelita de Santa Fe ",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=388",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-misiones.jpg",
name:"Comunidad Israelita de Misiones",direccion:"Misiones",
descripcion:"Comunidad Israelita de Misiones",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=385",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-san-salvador.jpg",
name:"Kehila de San Salvador",direccion:"Entre R\u00edos",
descripcion:"Asociaci\u00f3n Isrealita Unificada Baron Hirsch",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=387",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-macabi-santa-fe.jpg",
name:"Macabi Santa Fe ",direccion:"Santa Fe",
descripcion:"Instituci\u00f3n deportiva C\u00edrculo Israelita Macabi Santa Fe ",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=390",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-santa-rosa.jpg",
name:"Kehil\u00e1 de Santa Rosa",direccion:"La Pampa",
descripcion:"Asociacion Israelita de Santa Rosa",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=391",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-general-campos.jpg",
name:"Kehila de General Campos",direccion:"Entre R\u00edos",
descripcion:"Asociacion Union Israelita de General Campos",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=395",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-la-rioja.jpg",
name:"Kehila de La Rioja",direccion:"La Rioja",
descripcion:"Sociedad Israelita de Beneficiencia de La Rioja",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=396",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-baderej.jpg",
name:"Baderej",direccion:"CABA",
descripcion:"Primer programa comunitario para j\u00f3venes y adultos con TEA - trastornos del espectro autista.",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=397",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-eretz.jpg",
name:"Eretz",direccion:"Antezana 145, CABA",
descripcion:"Centro jud\u00edo para la difusi\u00f3n de nuestros valores a la juventud.",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=399",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-lichbod-shabat.jpg",
name:"Lichbod Shabat",direccion:"CABA",
descripcion:"Fundaci\u00f3n de Jesed Lichbod Shabat",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=398",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-union-israelita-ceres.jpg",
name:"Union Israelita Ceres",direccion:"Santa Fe",
descripcion:"Union Israelita Ceres",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=401",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-jabad-cordoba.jpg",
name:"Beit Jabad C\u00f3rdoba",direccion:"C\u00f3rdoba",
descripcion:"Beit Jabad C\u00f3rdoba",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=400",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-maguen-abraham.png",
name:"Maguen Abraham",direccion:"CABA",
descripcion:"Comunidad Maguen Abraham",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=402",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-gualeguaychu.jpg",
name:"Kehila de Gualeguaychu",direccion:"Entre R\u00edos",
descripcion:"Asociacion Union Israelita de Gualeguaychu",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=403",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/vaadhakehilot\/img-san-juan.jpg",
name:"Kehila de San Juan ",direccion:"San Juan",
descripcion:"Sociedad Israelita San Juan",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=404",
categoria:"Organizaciones fuera de CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-jesed.jpg",
name:"Fundaci\u00f3n Jesed",direccion:"CABA",
descripcion:"Fundaci\u00f3n Jesed brinda alimentos, abrigo y todo tipo de ayuda a quienes m\u00e1s lo necesitan",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=405",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-adat-eliezer.jpg",
name:"Kolel Adat Eliezer",direccion:"Israel",
descripcion:"Colel abrejim y apoyo a familias latinoamericanas en Israel, en nombre del Rab Eliezer ben David zz\"l",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=406",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/causas\/img-fondo-drachman.jpg",
name:"Fondo Familia Dov Drachman",direccion:"CABA",
descripcion:"Fondo de Ayuda para la Familia de Dov Drachman Z\"L",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=407",
categoria:"Causas Solidarias"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-hevrat-pinto.jpg",
name:"Hevrat Pinto Argentina",direccion:"Viamonte 2715, CABA",
descripcion:"Hevrat Pinto Argentina",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=408",
categoria:"Organizaciones en CABA"
},{
img:"https:\/\/donacion.com.ar\/images\/comunidades\/img-ohel-braja.jpg",
name:"Seminario Ohel Braja",direccion:"CABA",
descripcion:"Seminario Ohel Braja",
form:"https:\/\/donacion.com.ar\/component\/jux_charity_hub\/?view=cause&id=409",
categoria:"Organizaciones en CABA"}],
    favoritos:[],
    sideDrawer: false,
    lastupdate: 0,
    pages: []
  },
  mutations: {
    increment (state,dato) {
      
      var thereitis = 0;
      for (var i = 0, len = state.favoritos.length; i < len; i++) {
        if(state.favoritos[i] == dato){
          thereitis = 1;
        }
      }
      if(thereitis == 0){
        state.favoritos.push(dato);
      }
    },
    setOrgs (state, data) {
      state.orgs = data
    },
    setSideDrawer (state, data) {
      state.sideDrawer = data
    },
    setRoutes (state, data) {
      state.pages = data
    },
    setLU (state, data) {
      state.lastupdate = data
    },
    remove (state,dato) {
      if(state.favoritos.length == 1){
        state.favoritos = [];
      }else{
        for (var i = 0, len = state.favoritos.length; i < len; i++) {
          if(state.favoritos[i] == dato){
            if(i == 0){
              var removed = state.favoritos.shift();
            }else{
              var removed = state.favoritos.splice(i,i);
            }
            
          }
        }
      }
      
    },
    initialiseStore(state) {
			// Check if the ID exists
			if(ApplicationSettings.getString("store")) {
        this.replaceState(
            Object.assign(state, JSON.parse(ApplicationSettings.getString("store")))
        );
      }
		}
  },
  getters: {
    sideDrawer: (state) => state.sideDrawer
  }
});

