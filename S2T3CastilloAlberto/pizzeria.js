
/**provincia */
db.provincia.insert(
    {
        nombre:"Barcelona",
        _id:ObjectId("636901c9d657d0c7d8b80dc6")
    }
);


/**localidad */
db.localidad.insertMany( [
    { nombre:"Barcelona", provincia_id: ObjectId("636901c9d657d0c7d8b80dc6") },
        { nombre:"Sant Celoni", provincia_id: ObjectId("636901c9d657d0c7d8b80dc6") },
          { nombre: "Abrera",  provincia_id: ObjectId("636901c9d657d0c7d8b80dc6") }, 
          { nombre:"Badalona",  provincia_id: ObjectId("636901c9d657d0c7d8b80dc6") },
           { nombre:"El Bruc",  provincia_id: ObjectId("636901c9d657d0c7d8b80dc6") }, 
           { nombre:"Begues",  provincia_id: ObjectId("636901c9d657d0c7d8b80dc6") }, 
           { nombre:"Cardedeu",  provincia_id: ObjectId("636901c9d657d0c7d8b80dc6") }, 
           { nombre:"Esparreguera",  provincia_id: ObjectId("636901c9d657d0c7d8b80dc6") },
            { nombre:"Esplugues de Llobregat",  provincia_id: ObjectId("636901c9d657d0c7d8b80dc6") }, 
            { nombre:"Mollet del Vallès",  provincia_id: ObjectId("636901c9d657d0c7d8b80dc6") }, 
            { nombre:"Sant Joan Despí",  provincia_id: ObjectId("636901c9d657d0c7d8b80dc6") }]);


 /**clientes */       
db.cliente.insertMany([
{
"_id" : ObjectId("636956a103bb60bdbfc2fbfd"),
"nombre":"Alberto",
"apellidos":["Castillo", "Corporan"],
"codigo_postal":"08021",
"provincia":[
    {
    "nombre":"Barcelona",
    "provincia_id": ObjectId("636901c9d657d0c7d8b80dc6")
    }
],
"localidad":[
    {
        "nombre":"Barcelona",
        "localidad_id":ObjectId("636904a4d657d0c7d8b80dc7"),
        "provincia_id": ObjectId("636901c9d657d0c7d8b80dc6")   

    }],
"direccion":[
    {
     "Avenida":"Diagonal" ,
     "numero": "15",
     "piso":"2",
     "puerta":"5"  
    }
],
"telefono":"600000000"},

{  
    "_id" : ObjectId("6369586b03bb60bdbfc2fbff"), 
    "nombre":"Juan",
    "apellidos": ["Perez", "Sosa"],
    "codigo_postal":"08025",
    "provincia":[
        {
        "nombre":"Barcelona",       
        "provincia_id": ObjectId("636901c9d657d0c7d8b80dc6")
        }
    ],
    "localidad":[
        {
            "nombre":"Barcelona",
            "localidad_id":ObjectId("636904a4d657d0c7d8b80dc7"),
            "provincia_id": ObjectId("636901c9d657d0c7d8b80dc6")   
    
        }],
    "direccion":[
        {
         "calle":"Cartagena" ,
         "numero": "105",
         "piso":"18",
         "puerta":"2"  
        }
    ],
    "telefono":"600000001"},

{
    "_id" : ObjectId("636958e803bb60bdbfc2fc00"),
    "nombre":"Maria",
    "apellidos": ["Castro", "Ruiz"],
    "codigo_postal":"08025",
    "provincia":[
        {
        "nombre":"Barcelona",
        "provincia_id": ObjectId("636901c9d657d0c7d8b80dc6")
        }
    ],
    "localidad":[
        {
            "nombre":"Barcelona",
            "localidad_id":ObjectId("636904a4d657d0c7d8b80dc7"),
            "provincia_id": ObjectId("636901c9d657d0c7d8b80dc6")   
    
        }],
    "direccion":[
        {
         "calle":"Mallorca" ,
         "numero": "13",
         "piso":"entresuelo",
         "puerta":"1"  
        }
    ],
    "telefono":"600000003"},
    

{
    "_id" : ObjectId("6369591c03bb60bdbfc2fc01"),
    "nombre":"Yenny",
    "apellidos": ["Moreno", "Fernandez"],
    "codigo_postal":"08025",
    "provincia":[
        {
            "nombre":"Barcelona",
             "provincia_id": ObjectId("636901c9d657d0c7d8b80dc6")
        }
    ],

    "localidad":[
        {
            "nombre":"Barcelona",
            "localidad_id":ObjectId("636904a4d657d0c7d8b80dc7"),
            "provincia_id": ObjectId("636901c9d657d0c7d8b80dc6")}],
    "direccion":[
        {
         "calle":"Nàpols" ,
         "numero": "51",
         "piso":"4",
         "puerta":"4"}],

    "telefono":"600000004"}]);

    /**categoria */

db.categoria.insertMany([
    {"_id" : ObjectId("63695c3f03bb60bdbfc2fc02"),"categoria":"bebidas"},
    { "_id" : ObjectId("63695c3f03bb60bdbfc2fc03"),"categoria":"pizzas"},
    {"_id" : ObjectId("63695c3f03bb60bdbfc2fc04"),"categoria":"hamburguesas"}
]);

/**subcategoria */

db.subcategoria.insertMany([
    {"_id" : ObjectId("63695e4003bb60bdbfc2fc05"),"subcategoria":"invierno"},
    {"_id" : ObjectId("63695e4003bb60bdbfc2fc06"),"subcategoria":"verano"},
    {"_id" : ObjectId("63695e4003bb60bdbfc2fc07"),"subcategoria":"primavera"},
    {"_id" : ObjectId("63695e4003bb60bdbfc2fc08"),"subcategoria":"otoño"}
]);


/**producto */

db.producto.insertMany([
    { "_id" : ObjectId("6369673803bb60bdbfc2fc09"), 
    "nombre":"coca ligth",
     "descripcion":"bebida refrescante",
     "imagen":"URL",
     "precio":"2.50",
    "categoria":[ {"_id" : ObjectId("63695c3f03bb60bdbfc2fc02"),"categoria":"bebidas"}]},
    { "_id" : ObjectId("6369673803bb60bdbfc2fc0a"),
      "nombre":"agua 50cl",
      "descripcion":"agua pequeña",
      "imagen":"URL",
      "precio":"1.90",
      "categoria":[ {"_id" : ObjectId("63695c3f03bb60bdbfc2fc02"),"categoria":"bebidas"}]},
    {"_id" : ObjectId("6369673803bb60bdbfc2fc0b"),
     "nombre":"pizza barbacoa",
     "descripcio":"pizza mediana",
     "imagen":"URL",
     "precio":"12.99",
     "categoria":[{ "_id" : ObjectId("63695c3f03bb60bdbfc2fc03"),"categoria":"pizzas"}],
     "subcategoria":[{"_id" : ObjectId("63695e4003bb60bdbfc2fc05"),"subcategoria":"invierno"}]},
    {"_id" : ObjectId("6369673803bb60bdbfc2fc0c"),
    "nombre":"4 quesos",
      "descripcion":"pizza 4 quesos",
      "imagen":"URL",
      "precio":"13.75",
      "categoria":[ { "_id" : ObjectId("63695c3f03bb60bdbfc2fc03"),"categoria":"pizzas"}],
      "subcategoria":[ {"_id" : ObjectId("63695e4003bb60bdbfc2fc08"),"subcategoria":"otoño"}]},
    {"_id" : ObjectId("6369673803bb60bdbfc2fc0d"),
    "nombre":"romana",
     "descripcion":"pizza romana",
     "imagen":"URL",
     "precio":"12.99",
     "categoria":[{ "_id" : ObjectId("63695c3f03bb60bdbfc2fc03"),"categoria":"pizzas"},],
     "subcategoria":[{"_id" : ObjectId("63695e4003bb60bdbfc2fc06"),"subcategoria":"verano"}]},
    {"_id" : ObjectId("6369673803bb60bdbfc2fc0e"),
    "nombre":"hawaiana",
     "descripcion":"pizza hawaiana",
     "imagen":"URL",
     "precio":"13.50",
     "categoria":[{ "_id" : ObjectId("63695c3f03bb60bdbfc2fc03"),"categoria":"pizzas"},],
     "subcategoria":[ {"_id" : ObjectId("63695e4003bb60bdbfc2fc06"),"subcategoria":"verano"}]},
    {"_id" : ObjectId("6369673803bb60bdbfc2fc0f"),
    "nombre":"burguer",
     "descripcion":"hamburguesa especial doble",
     "imagen":"URL",
     "precio":"8.95",
     "categoria":[{"_id" : ObjectId("63695c3f03bb60bdbfc2fc04"),"categoria":"hamburguesas"}]}
]);

/**tienda */

db.tienda.insertMany([
  {"_id" : ObjectId("63696bd603bb60bdbfc2fc10"),
    "direccion":[{"avenida":"diagonal","numero":"56"}],
    "codigo_postal":"08014",
    "provincia":[
        {
            "nombre":"Barcelona",
             "provincia_id": ObjectId("636901c9d657d0c7d8b80dc6")
        }
    ],

    "localidad":[
        {
            "nombre":"Barcelona",
            "localidad_id":ObjectId("636904a4d657d0c7d8b80dc7"),
            "provincia_id": ObjectId("636901c9d657d0c7d8b80dc6")}]},
  {"_id" : ObjectId("63696bd603bb60bdbfc2fc11"),
    "direccion":[{"calle":"balmes","numero":"71"}],
    "codigo_postal":"08012",
    "provincia":[
        {
            "nombre":"Barcelona",
             "provincia_id": ObjectId("636901c9d657d0c7d8b80dc6")
        }
    ],

    "localidad":[
        {
            "nombre":"Barcelona",
            "localidad_id":ObjectId("636904a4d657d0c7d8b80dc7"),
            "provincia_id": ObjectId("636901c9d657d0c7d8b80dc6")}]}  
]);

/**empleado */

db.empleado.insertMany([
{"_id" : ObjectId("6369710903bb60bdbfc2fc12"),
"nombre":"David",
 "apellidos":["Torrente","Palau"],
 "nif":"12345678X",
 "telefono":"700000000",
 "categoria":"repartidor",
"tienda_id":ObjectId("63696bd603bb60bdbfc2fc10") },
{ "_id" : ObjectId("6369710903bb60bdbfc2fc13"),
"nombre":"vanesa",
 "apellidos":["Torrez","Luque"],
 "nif":"87654321Z",
 "telefono":"700000001",
 "categoria":"cocinero",
"tienda_id":ObjectId("63696bd603bb60bdbfc2fc10")},
{"_id" : ObjectId("6369710903bb60bdbfc2fc14"),
"nombre":"Pablo",
 "apellidos":["Delgado","Palomo"],
 "nif":"24681023w",
 "telefono":"700000002",
"categoria":"repartidor",
"tienda_id":ObjectId("63696bd603bb60bdbfc2fc11")},
{"_id" : ObjectId("6369710903bb60bdbfc2fc15"),
"nombre":"Susana",
"apellidos":["Rodriguez","Romero"],
"nif":"56783211I",
"telefono":"700000003",
"categoria":"cocinero",
"tienda_id":ObjectId("63696bd603bb60bdbfc2fc11")}

]);

/**pedido */

db.pedido.insertMany([
{"fecha": new ISODate("2022-01-20T21:00:23Z"),
 "tipo":"reparto",
 "empleado_id":ObjectId("6369710903bb60bdbfc2fc15"),
"cliente_id":ObjectId("6369591c03bb60bdbfc2fc01"),
"tienda_id":ObjectId("63696bd603bb60bdbfc2fc11"),
"detalle_pedido":[{ "producto_id":ObjectId("6369673803bb60bdbfc2fc09"),
                    "cantidad":"2"},
                {"producto_id":ObjectId("6369673803bb60bdbfc2fc0b"),
                  "cantidad":"2"}],
 "reparto":[{"fecha":new ISODate("2022-01-20T21:53:00Z"),
             "empleado_id":ObjectId("6369710903bb60bdbfc2fc14")}]},
{"fecha": new ISODate("2022-05-15T16:00:23Z"),
"tipo":"reparto",
"empleado_id":ObjectId("6369710903bb60bdbfc2fc15"),
"cliente_id":ObjectId("636958e803bb60bdbfc2fc00"),
"tienda_id":ObjectId("63696bd603bb60bdbfc2fc11"),
"detalle_pedido":[{ "producto_id":ObjectId("6369673803bb60bdbfc2fc0a"),
                   "cantidad":"2"},
               {"producto_id":ObjectId("6369673803bb60bdbfc2fc0f"),
                 "cantidad":"2"}],
"reparto":[{"fecha":new ISODate("2022-05-15T16:53:00Z"),
            "empleado_id":ObjectId("6369710903bb60bdbfc2fc14")}]},
{"fecha": new ISODate("2022-08-15T20:02:03Z"),
  "tipo":"reparto",
  "empleado_id":ObjectId("6369710903bb60bdbfc2fc13"),
  "cliente_id":ObjectId("6369586b03bb60bdbfc2fbff"),
  "tienda_id":ObjectId("63696bd603bb60bdbfc2fc10"),
  "detalle_pedido":[{"producto_id":ObjectId("6369673803bb60bdbfc2fc09"),
                     "cantidad":"3"},
                     {"producto_id":ObjectId("6369673803bb60bdbfc2fc0a"),
                      "cantidad":"1"},
                    {"producto_id":ObjectId("6369673803bb60bdbfc2fc0c"),
                     "cantidad":"2"},
                    {"producto_id":ObjectId("6369673803bb60bdbfc2fc0d")}],
  "reparto":[{"fecha": new ISODate("2022-08-15T21:02:10Z"),
              "empleado_id":ObjectId("6369710903bb60bdbfc2fc12")}]},
{"fecha": new ISODate("2022-09-05T22:15:03Z"),
"tipo":"reparto",
"empleado_id":ObjectId("6369710903bb60bdbfc2fc13"),
"cliente_id":ObjectId("636956a103bb60bdbfc2fbfd"),
"tienda_id":ObjectId("63696bd603bb60bdbfc2fc10"),
"detalle_pedido":[{"producto_id":ObjectId("6369673803bb60bdbfc2fc09"),
                   "cantidad":"3"},
                   {"producto_id":ObjectId("6369673803bb60bdbfc2fc0a"),
                    "cantidad":"1"},
                  {"producto_id":ObjectId("6369673803bb60bdbfc2fc0c"),
                   "cantidad":"2"},
                  {"producto_id":ObjectId("6369673803bb60bdbfc2fc0d")}],
"reparto":[{"fecha": new ISODate("2022-09-05T22:55:10Z"),
            "empleado_id":ObjectId("6369710903bb60bdbfc2fc12")}]}

]);