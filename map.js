var Main;

require([
    "esri/Map",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/layers/ElevationLayer",
    "esri/views/SceneView",
    "esri/geometry/Point",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/widgets/Search",
    "esri/smartMapping/labels/clusters",
    "esri/widgets/Legend"
    
], function(Map, Graphic, GraphicsLayer, ElevationLayer, SceneView, Point, SimpleMarkerSymbol, Search, Legend) {
    $(document).ready(function() {
        Main = (function() {
            let layer = new ElevationLayer({
                url: "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"
            });

            var map = new Map({
                basemap: "hybrid",
                ground: {
                    layers: [layer]
                },
            });

            var view = new SceneView({
                container: "map",
                viewingMode: "global",
                map: map,
                camera: {
                    position: {
                        x: -105.503,
                        y: 44.270,
                        z: 20000000,
                        spatialReference: { wkid: 4326 }
                    },
                    heading: 0,
                    tilt: 0
                },
                popup: {
                    dockEnabled: true,
                    dockOptions: {
                        breakpoint: false
                    }
                },
                environment: {
                    lighting: {
                        directShadowsEnabled: false
                    }
                }
            });

            const graphicsLayer = new GraphicsLayer();
            map.add(graphicsLayer);

            const sportColors = {
                MLB: [0, 255, 0],
                NFL: [0, 0, 255],
                NHL: [255, 0, 0],
                NBA: [255, 165, 0],
                MLS: [0, 128, 0],
                PWHL: [255, 20, 147],
                NWSL: [255, 105, 180],
                WNBA: [138, 43, 226]
            };

            const initMap = function() {
                for (const [key, value] of Object.entries(myStuff)) {
                    let sportColor = sportColors[value.sport];
                    const point = new Point({
                        x: value.coord[0],
                        y: value.coord[1],
                        spatialReference: { wkid: 4326 }
                    });

                    const markerSymbol = new SimpleMarkerSymbol({
                        style: "circle",
                        color: sportColor,
                        outline: {
                            color: [0, 0, 0],
                            width: 2
                        }
                    });

                    const pointGraphic = new Graphic({
                        geometry: point,
                        symbol: markerSymbol,
                        popupTemplate: {
                            title: key,
                            content: `
                                <br> City: ${value.city} <br><br>
                                State: ${value.state} <br><br>
                                Stadium: ${value.stadium} <br><br>
                                Sport: ${value.sport} <br><br>
                            `
                        }
                    });
                    graphicsLayer.featureReduction = {
                        type: "cluster",
                        labelingInfo: [{
                            labelExpressionInfo: {
                                expression: "$feature.cluster_count"
                            },
                            deconflictionStrategy: "none",
                            labelPlacement: "center-center",
                            symbol: {
                                type: "text",
                                color: "white",
                                font: {
                                    size: "12px"
                                },
                                haloSize: 1,
                                haloColor: "black"
                            }
                        }]
                    };

                    graphicsLayer.add(pointGraphic);
                }

                view.on("click", function(event) {
                    view.hitTest(event).then(function(response) {
                        const graphic = response.results[0]?.graphic;
                        if (graphic) {
                            view.goTo({
                                target: graphic.geometry,
                                zoom: 15
                            });
                        }
                    });
                });
            };

            const createSearchWidget = function() {
                const searchWidget = new Search({
                    view: view,
                    sources: [{
                        locator: null,
                        getSuggestions: function(value) {
                            return Object.keys(cities)
                                .filter(city => city.toLowerCase().startsWith(value.toLowerCase()))
                                .map(city => ({
                                    name: city
                                }));
                        }
                    }]
                });

                view.ui.add(searchWidget, "top-right");
                searchWidget.on("select-result", function(event) {
                    const city = event.result.name;
                    const coords = cities[city].coord;
                    view.goTo({
                        target: new Point({
                            x: coords[0],
                            y: coords[1],
                            spatialReference: { wkid: 4326 }
                        }),
                        zoom: 10
                    });
                });
            };
          const createLegendWidget = function() {
                const legend = new Legend({
                    view: view,
                    layerInfos: [{
                        layer: graphicsLayer,
                        title: "Sports Teams"
                    }]
                });
                view.ui.add(legend, "top-right");
            };

            createSearchWidget();
            initMap();
            createLegendWidget();

            return {};
        })();
    });
});

    
