﻿chartOptions['I.01.1.0025'] = {
  "title": {
    "text": "Indikator 2.2.a: Anzahl Personen mit Hauptwohnsitz im Kanton Basel-Stadt",
  },
  "chart": {
    "renderTo": "container-I.01.1.0025",
  },
  "yAxis": {
    "min": 150000,
    "max": 175000,
    "tickInterval": 5000,
    "labels": {
      "format": "{value:,.0f}",
    },
  },
  "xAxis": {
    "tickInterval": 1
  },
  "credits": {
    "text": "Quelle:  Statistik der Bevölkerung und Haushalte (STATPOP);<br/>Bundesamt für Statistik.",
  },
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },
      "index": 0,
      "color": "#B375AB"
    }
  ],
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
		    var first = this.series.data[0];
			var last  = this.series.data[this.series.data.length - 1];
		    if (this.point.y === first.y || this.point.y === last.y ) {
			  return Highcharts.numberFormat(this.point.y, 0, ",", " ");
			}
			return "";
          }
      }
    }
  }
};