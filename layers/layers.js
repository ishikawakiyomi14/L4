var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Puntos_L4_1 = new ol.format.GeoJSON();
var features_Puntos_L4_1 = format_Puntos_L4_1.readFeatures(json_Puntos_L4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_L4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_L4_1.addFeatures(features_Puntos_L4_1);
var lyr_Puntos_L4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntos_L4_1, 
                style: style_Puntos_L4_1,
                popuplayertitle: 'Puntos_L4',
                interactive: true,
                title: '<img src="styles/legend/Puntos_L4_1.png" /> Puntos_L4'
            });
var format_Postes_2 = new ol.format.GeoJSON();
var features_Postes_2 = format_Postes_2.readFeatures(json_Postes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Postes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postes_2.addFeatures(features_Postes_2);
var lyr_Postes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Postes_2, 
                style: style_Postes_2,
                popuplayertitle: 'Postes',
                interactive: true,
                title: '<img src="styles/legend/Postes_2.png" /> Postes'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Puntos_L4_1.setVisible(true);lyr_Postes_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Puntos_L4_1,lyr_Postes_2];
lyr_Puntos_L4_1.set('fieldAliases', {'Punto': 'Punto', 'X': 'X', 'Y': 'Y', 'Z': 'Z', });
lyr_Postes_2.set('fieldAliases', {'Poste': 'Poste', 'X': 'X', 'Y': 'Y', });
lyr_Puntos_L4_1.set('fieldImages', {'Punto': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', });
lyr_Postes_2.set('fieldImages', {'Poste': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Puntos_L4_1.set('fieldLabels', {'Punto': 'header label - always visible', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Z': 'inline label - visible with data', });
lyr_Postes_2.set('fieldLabels', {'Poste': 'header label - always visible', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', });
lyr_Postes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});