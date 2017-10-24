define([
  "esri/config",
  "esri/core/sniff",
  "esri/Map",
  "esri/views/SceneView",
  "esri/widgets/Search"
], function (
  esriConfig, has,
  Map, SceneView,
  Search
) {

  //app/main.js
  if (!has("dojo-built")){
    esriConfig.workers.loaderConfig = {
      paths: {
        "esri": "../arcgis-js-api"
      }
    };
  }

  var map = new Map({
    basemap: "streets-night-vector",
    ground: "world-elevation"
  });

  var view = new SceneView({
    container: "viewDiv",
    map: map,
    scale: 50000000,
    center: [-101.17, 21, 78]
  });

  var searchWidget = new Search({
    view: view,
    container: "searchDiv"
  });
});
