var map = L.map("map").setView([17.305674, 74.187855], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var circle = L.circle([17.305674, 74.187855], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
});

var layerGroup = L.layerGroup();

var polygon1 = L.polygon([
  [17.299364, 74.183521],
  [17.304445, 74.18365],
  [17.307067, 74.176397],
  [17.29838, 74.181075],
]).addTo(layerGroup);

var polygon = L.polygon([
  [17.299364, 74.183521],
  [17.304445, 74.18365],
  [17.29838, 74.181075],
]).addTo(layerGroup);

layerGroup.addTo(map);
circle.addTo(map);

layerGroup.remove();
layerGroup.removeLayer(polygon1);

var TowerIcon = L.Icon.extend({
  options: {
    iconUrl: "hlpole.png",
    iconSize: [30, 50],
    shadowSize: [50, 64],
    iconAnchor: [15, 50],
  },
});
hlPoleIcon = new TowerIcon({ iconUrl: "hlpole.png" });
var marker = L.marker([17.305674, 74.187855], { icon: hlPoleIcon }).addTo(map);
