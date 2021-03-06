﻿chartOptions["I.09.5.0003"] = {
  "title": {
    "text": "Indikator 0.1.b-3: Mietpreisentwicklung der 3-Zimmer-Wohnungen"
  },
  "chart": {
    "renderTo": "container-I.09.5.0003"
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    },
    "min": 0
  },
  "xAxis": {
    "tickInterval": 1
  },
  "credits": {
    "text": "Quelle: Mietpreiserhebung;<br/>Statistisches Amt des Kantons Basel-Stadt"
  },
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },
      "index": 0,
      "color": "#008AC3"
    },
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },
      "index": 1,
      "color": "#990300"
    }
  ],
  "tooltip": {
    "shared": false
  },
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var last  = this.series.data[this.series.data.length - 1];
            if (this.point.category === last.category  &&  this.point.y === last.y ) {
              return this.series.name;
            }
            return "";
          }
      }
    }
  }
};
