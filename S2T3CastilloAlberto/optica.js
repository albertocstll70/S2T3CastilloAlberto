/** optica */



/** proveedor */
db.proveedor.insertMany([

    {
        "_id":ObjectId("6365abfe2183cfc1b42c72f7"),
    "nombre":"Vision S.L",
    "direccion":[{
            "calle":"lepant",
            "numero":"1365",
            "piso":"1","puerta":"1",
            "ciudad":"Barcelona",
            "codigo_postal":"08025",
            "pais":"España"
        }],
            
  "telefono":"655555555",
  "fax":"933333333",
  "nif":"b8080808"}


]);


/**producto */
/**embebido */
db.producto.insertMany([

    {
      "_id":ObjectId("6365b4f62183cfc1b42c72f8"),
    "nombre":"gafas m1",
    "marca":"vision",
    "gaduacion":[{
        "lente1":"2.5",
        "lente2":"2.5"
    }],
    "montura":"metalica",
    "color_montura":"azul",
    "color_vidrio":"blanco",
    "precio":"95.50",
    "proveedor":[{
        "_id":ObjectId("6365abfe2183cfc1b42c72f7"),
    "nombre":"Vision S.L",
    "direccion":[{
        "calle":"lepant",
        "numero":"1365",
        "piso":"1",
        "puerta":"1",
        "ciudad":"Barcelona",
        "codigo_postal":"08025",
        "pais":"España"
    }],
    "telefono":"655555555",
    "fax":"933333333",
    "nif":"b8080808"
}]},

    {
        "_id":ObjectId("6365b4f62183cfc1b42c72f9"),
        "nombre":"gafas m2",
        "marca":"vision","gaduacion":[{
            "lente1":"3.5",
            "lente2":"2.5"
        }],
    "montura":"pasta",
    "color_montura":"rojo",
    "color_vidrio":"blanco",
    "precio":"75.50",
    "proveedor":[{
        "_id":ObjectId("6365abfe2183cfc1b42c72f7"),
        "nombre":"Vision S.L",
        "direccion":[{
            "calle":"lepant",
            "numero":"1365",
            "piso":"1",
            "puerta":"1",
            "ciudad":"Barcelona",
            "codigo_postal":"08025",
            "pais":"España"
        }],
        "telefono":"655555555",
        "fax":"933333333",
        "nif":"b8080808"
    }]},

    {
        "_id":ObjectId("6365b4f62183cfc1b42c72fa"),
        "nombre":"gafas m3",
        "marca":"vision",
        "gaduacion":[{
            "lente1":"1.5",
            "lente2":"2.0"
        }],
     "montura":"metalica",
     "color_montura":"verde",
     "color_vidrio":"verde metalico",
     "precio":"89.50",
     "proveedor":[{
        "_id":ObjectId("6365abfe2183cfc1b42c72f7"),
        "nombre":"Vision S.L",
        "direccion":[{
            "calle":"lepant",
            "numero":"1365",
            "piso":"1",
            "puerta":"1",
            "ciudad":"Barcelona",
            "codigo_postal":"08025",
            "pais":"España"
        }],
    "telefono":"655555555",
    "fax":"933333333",
    "nif":"b8080808"
}]}  


]);


/** empleado */
db.empleado.insertMany([
    {
        "_id":ObjectId("6365b7802183cfc1b42c7300"),
        "nombre":"Juan"
    },
{
    "_id":ObjectId("6365b7802183cfc1b42c7301"),
    "nombre":"Helen"
},
{
    "_id":ObjectId("6365b7802183cfc1b42c7302"),
    "nombre":"Rocio"
},
{
    "_id":ObjectId("6365b8ed2183cfc1b42c7303"),
    "nombre":"Ana"
}

]);


/**cliente */
/**embebido */
db.cliente.insertMany([
    {
        "_id":ObjectId("6365a1dc2183cfc1b42c72f4"),
        "nombre":"alberto",
        "codigo_postal":"08025",
        "telefono":"600000000",
        "mail":"abd@al.cat",
        "fecha_registro":"2015-06-01"
    },
    {
        "_id":ObjectId("6365a8842183cfc1b42c72f5"),
        "nombre":"marcos",
        "codigo_postal":"08014",
        "telefono":"610000001",
        "mail":"dcd@al.cat",
        "fecha_registro":"2020-01-15",
        "cliente_recomienda":[{
            "_id":ObjectId("6365a1dc2183cfc1b42c72f4"),
            "nombre":"alberto",
             "codigo_postal":"08025",
            "telefono":"600000000",
            "mail":"abd@al.cat",
            "fecha_registro":"2015-06-01"
        }]},
    {
        "_id":ObjectId("6365aa542183cfc1b42c72f6"),
        "nombre":"diana",
        "codigo_postal":"08028",
        "telefono":"610000000",
        "mail":"dd@al.cat",
        "fecha_registro":"2018-09-23",
        "cliente_recomienda":[{
            "_id":ObjectId("6365a8842183cfc1b42c72f5"),
            "nombre":"marcos",
            "codigo_postal":"08014",
            "telefono":"610000001",
            "mail":"dcd@al.cat",
            "fecha_registro":"2020-01-15"
        }]}

]);


/**venta */
/**referenciado */
db.venta.insertMany([

    {
        "_id":ObjectId("6366a9fa8214e2f0ac3433b4"),
        "fecha":"2022-02-14",
        "cliente_id":ObjectId("6365a1dc2183cfc1b42c72f4"),
        "empleado_id":ObjectId("6365b7802183cfc1b42c7300"),
        "detalle_pedido":[{
            "producto_id":ObjectId("6365b4f62183cfc1b42c72f8"),
            "cantidad":"1"
        },
        {
            "producto_id":ObjectId("6365b4f62183cfc1b42c72f9"),
            "cantidad":"1"
        }]},
    {
        "_id":ObjectId("6366a9fa8214e2f0ac3433b5"),
        "fecha":"2022-06-05",
        "cliente_id":ObjectId("6365a8842183cfc1b42c72f5"),
        "empleado_id":ObjectId("6365b7802183cfc1b42c7301"),
        "detalle_pedido":[{
            "producto_id":ObjectId("6365b4f62183cfc1b42c72f9"),
            "cantidad":"1"
        },
        {
            "producto_id":ObjectId("6365b4f62183cfc1b42c72fa"),
            "cantidad":"1"
        }]},
    {
        "_id":ObjectId("6366a9fa8214e2f0ac3433b6"),
        "fecha":"2022-09-05",
        "cliente_id":ObjectId("6365aa542183cfc1b42c72f6"),
        "empleado_id":ObjectId("6365b7802183cfc1b42c7302"),
        "detalle_pedido":[{
            "producto_id":ObjectId("6365b4f62183cfc1b42c72f9"),
            "cantidad":"1"
        },
        {
            "producto_id":ObjectId("6365b4f62183cfc1b42c72f8"),
            "cantidad":"2"
        }]},
    {
        "_id":ObjectId("6366a9fa8214e2f0ac3433b7"),
        "fecha":"2022-10-05",
        "cliente_id":ObjectId("6365a1dc2183cfc1b42c72f4"),
        "empleado_id":ObjectId("6365b8ed2183cfc1b42c7303"),
        "detalle_pedido":[{
            "producto_id":ObjectId("6365b4f62183cfc1b42c72fa"),
            "cantidad":"1"
        },
        {
            "producto_id":ObjectId("6365b4f62183cfc1b42c72f8"),
            "cantidad":"1"
        },
        {
            "producto_id":ObjectId("6365b4f62183cfc1b42c72f9"),
            "cantidad":"1"
        }]}]);
