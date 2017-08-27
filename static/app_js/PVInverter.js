/**

Copyright (c) 2016, Virginia Tech
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the
 following conditions are met:
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following
disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following
disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are those of the authors and should not be
interpreted as representing official policies, either expressed or implied, of the FreeBSD Project.

This material was prepared as an account of work sponsored by an agency of the United States Government. Neither the
United States Government nor the United States Department of Energy, nor Virginia Tech, nor any of their employees,
nor any jurisdiction or organization that has cooperated in the development of these materials, makes any warranty,
express or implied, or assumes any legal liability or responsibility for the accuracy, completeness, or usefulness or
any information, apparatus, product, software, or process disclosed, or represents that its use would not infringe
privately owned rights.

Reference herein to any specific commercial product, process, or service by trade name, trademark, manufacturer, or
otherwise does not necessarily constitute or imply its endorsement, recommendation, favoring by the United States
Government or any agency thereof, or Virginia Tech - Advanced Research Institute. The views and opinions of authors
expressed herein do not necessarily state or reflect those of the United States Government or any agency thereof.

VIRGINIA TECH – ADVANCED RESEARCH INSTITUTE
under Contract DE-EE0006352

#__author__ = "BEMOSS Team"
#__credits__ = ""
#__version__ = "2.0"
#__maintainer__ = "BEMOSS Team"
#__email__ = "aribemoss@gmail.com"
#__website__ = "www.bemoss.org"
#__created__ = "2014-09-12 12:04:50"
#__lastUpdated__ = "2016-03-14 11:23:33"

**/
var Is_power_on = true;
var Is_device_name = false;
var Is_temp_lock  = false;

var grid_activePower = 0;
var solar_activePower = 0;
var load_activePower = 0;
var check = true;

window.CPT_kwh = 0;
window.CPT_max = 0;
window.CPM_kwh = 0;
window.CPM_max = 0;
window.AEC_use = 0;
window.AEC_gen = 0;
mac_address = "221445K1200138";
function startTime() {
var now = new Date();
var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

var date = new Date();
var day = now.getDate();
var monthIndex = now.getMonth();
var year = now.getFullYear();

var h = now.getHours();
var m = now.getMinutes();
var s = now.getSeconds();
var ampm = h >= 12 ? 'PM' : 'AM';
h = h % 12;
h = h ? h : 12;
h = checkTime(h);
m = checkTime(m);
s = checkTime(s);
$('.current_time').html(monthNames[monthIndex] + " " + day + ", " + year + " " + h + ":" + m + ":" + s + " " + ampm);
var t = setTimeout(startTime, 500);
}

          function checkTime(i) {
            if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
            return i;
          }

          function update_Username(Username) {
            $("#Username").text(String(Username));
          }


         function setB(amount) {
             //softSlider.noUiSlider.set(amount);
             //alert(this.id);
             console.log(this.id);
         }
         function setMode()
         {
             //alert(this.id);
             console.log(this.id);

         }
         function pb_update() {
            var str ="<li><i class='fa fa-angle-right'></i><a href='/all_devices/999'>Devices</a></li>";
             str = str + "<li><i class='fa fa-angle-right'></i><a href='#'<span>PVInverter</span></li><a></li>";
             $('.page-breadcrumb').append(str);
         }

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function color() {
        console.log("color was change")

}
$( document ).ready(function() {
    $.csrftoken();
    pb_update()
    startTime();
    setValue();

    $('#log').DataTable({
        "order": [
            [0, "desc"]
        ]
    });

    $('.device_fs').on("click", function () {
       console.log(this.id);

   })

        $('#device_power_disp').on("click", function () {
        console.log("Powr SW");
        test_values = {};
        if (Is_power_on) {
            test_values["status"] = "OFF";
        } else {
            test_values["status"] = "ON";
            Is_temp_lock = false;
        }
        test_values["device_info"] = ["999", "PVInverter", mac_address];
        //alert(test_values['stautss']);
        // submit_air_data(test_values);
    });
    $('.btc').on("click", function () {
        console.log(this.id);
    });

    $('.device_set_temp ').on("click", function () {

        var element = this.id;
        var temp_now = parseInt($('#device_set_temp').text());
        Is_temp_lock = true;
        if (element == 'device_set_temp_down'){
            temp_now--;
            console.log( temp_now  );
            $('#device_set_temp').text(temp_now );

        } else if (element == 'device_set_temp_up'){
            temp_now++;
            console.log( temp_now );
            $('#device_set_temp').text( temp_now );
        }
         var test_values = {};
        test_values["status"] = "ON" ;
        test_values["temp"] = temp_now ;
        test_values["device_info"] = ["999", "PVInverter", mac_address];
        //alert(test_values['stautss']);
        submit_air_data(test_values);
    });
    $('.device_mode').on("click", function () {
        $('.device_mode').addClass( "btn-outline" );
        var test_values = {};
        console.log(this.id);
        var element = this.id;
        var mode = '0';
        test_values["mode"]="0"
        $("#" + element ).removeClass( "btn-outline" );
        //console.log("Powr SW");
        var test_values = {};
        if (element == 'pl')
        {
            test_values["mode"] = "0" ;
            $('#use_mode').text("Changing to PL");
            check = false;

         } else if (element == 'fl')
         {
            test_values["mode"] = "1" ;
             $('#use_mode').text("Changing to FL");
             check = false;
         } else if (element == 'fs')
         {
             test_values["mode"] = "2" ;
             $('#use_mode').text("Changing to FS");
             check = false;

         } else if (element == 'ups')
         {
            test_values["mode"] = "3" ;
             $('#use_mode').text("Changing to UPS");
             check = false;
         }
         else if (element == 'po')
         {
            test_values["mode"] = "4" ;
             $('#use_mode').text("Changing to PO");
             check = false;
         }
        test_values["device_info"] = ["999", "PVInverter", mac_address];
        // alert(test_values['status']);
        submit_air_data(test_values);
    });
    // socket powermeter ---------------------------------
     var ws = new WebSocket("ws://" + window.location.host + "/socket_PVInverter");

     ws.onopen = function () {
         ws.send("WS opened from html page");
     };

     ws.onmessage = function (event) {
         var _data = event.data;
         _data = $.parseJSON(_data);
         var topic = _data['topic'];
         var msg = $.parseJSON(_data['message']);
         console.log(msg);

         $('#device_set_temp').text(msg['grid_voltage']);
         $('#Inverter_activepower').text(msg['Inverter_activepower']);
         $('#Inverter_reactivepower').text(msg['Inverter_reactivepower']);

         $('#grid_reactivepower').text(msg['grid_reactivepower']);
         $('#load_activepower').text(msg['load_activepower']);
         $('#load_reactivepower').text(msg['load_reactivepower']);
         $('#grid_voltage').text((msg['grid_voltage']).toFixed(0));
         $('#battery_power').text(msg['battery_power']);
         $('#accumulated_load_power').text(msg['accumulated_load_power']);

         grid_activePower = (parseInt(msg.grid_activepower)*(-1));
         solar_activePower = (parseInt(msg.Inverter_activepower));
         load_activePower = (parseInt(msg.load_activepower));
         console.log(load_activePower);
         $('#grid_activepower').text(grid_activePower);

         if ((msg['energy_use_mode'] == "0") && (check == true))
             {
                console.log((msg['energy_use_mode']));
                $('#use_mode').text("PL");
             }
             else if ((msg['energy_use_mode'] == "1")&& (check == true))
             {
                console.log((msg['energy_use_mode']));
                $('#use_mode').text("FL");
             }
             else if ((msg['energy_use_mode'] == "2") && (check == true))
             {
                console.log((msg['energy_use_mode']));
                $('#use_mode').text("FS");
             }
             else if ((msg['energy_use_mode'] == "3") && (check == true))
             {
                console.log((msg['energy_use_mode']));
                $('#use_mode').text("UPS");
             }

            else if ((msg['energy_use_mode'] == "4") && (check == true))
             {
                console.log((msg['energy_use_mode']));
                $('#use_mode').text("PO");
             }

         //console.log(_data['message'])

     };

     //charts-grid
     $(window).load(function(){
        // $('.charts-grid').on('show.bs.modal', function (event) {
            setTimeout(function(){
                Highcharts.chart('area-grid', {
                    chart: {
                        type: 'spline',
                        animation: Highcharts.svg, // don't animate in old IE
                        marginRight: 10,
                        events: {
                            load: function () {
                                // set up the updating of the chart each second
                                var series = this.series[0],
                                    series2 = this.series[1],
                                    series3 = this.series[2];
                                setInterval(function () {
                                    var d = new Date();
                                    var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
                                    var x = (new Date(utc + (3600000*0))).getTime(); // current time
                                    series.addPoint([x, load_activePower], true, true);
                                    series2.addPoint([x, grid_activePower], true, true);
                                    series3.addPoint([x, solar_activePower], true, true);
                                }, 1000);
                            }
                        }
                    },
                    title: {
                        text: 'Current Power Generation and Consumption',
                        x: -20 //center
                    },
                    xAxis: {
                        type: 'datetime',
                        tickPixelInterval: 150
                    },
                    yAxis: {
                        title: {
                            text: 'Real Power (W)'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + '</b><br/>' +
                                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                                Highcharts.numberFormat(this.y, 2);
                        }
                    },
                    legend: {
                        //enabled: false
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderwidth: 0
                    },
                    exporting: {
                        enabled: false
                    },
                    series: [{
                        name: 'Load',
                        data: (function () {
                            // generate an array of random data
                            var d = new Date();
                            var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
                            var data = [],
                                time = (new Date(utc + (3600000*0))).getTime(), // current time,
                                i;
                            //TODO get data from database for Grid data
                            for (i = -60; i <= 0; i += 1) {
                                data.push({
                                    x: time + i * 1,
                                    y: 0
                                });
                            }
                            return data;
                        }())
                    }, {
                        name: 'Grid',
                        data: (function () {
                            var d = new Date();
                            var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
                            var data = [],
                                time = (new Date(utc + (3600000*0))).getTime(), // current time,
                                i;
                            //TODO get data from database for Grid data
                            for (i = -60; i <= 0; i += 1) {
                                data.push({
                                    x: time + i * 1,
                                    y: 0
                                });
                            }
                            return data;
                        }())
                    }, {
                        name: 'Solar',
                        data: (function () {
                            var d = new Date();
                            var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
                            var data = [],
                                time = (new Date(utc + (3600000*0))).getTime(), // current time,
                                i;
                            //TODO get data from database for Grid data
                            for (i = -60; i <= 0; i += 1) {
                                data.push({
                                    x: time + i * 1,
                                    y: 0
                                });
                            }
                            return data;
                        }())
                    }]
                });
                // Smooth Loading
                $('.js-loading').addClass('hidden');
            },1000);
        // });
     });

     //charts-solar
     $(window).load(function(){
        $('.charts-solar').on('show.bs.modal', function (event) {
            setTimeout(function(){
                Highcharts.chart('area-solar', {
                    chart: {
                        type: 'spline',
                        animation: Highcharts.svg, // don't animate in old IE
                        marginRight: 10,
                        events: {
                            load: function () {
                                // set up the updating of the chart each second
                                var series = this.series[0],
                                    series2 = this.series[1],
                                    series3 = this.series[2];
                                setInterval(function () {
                                    var d = new Date();
                                    var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
                                    var x = (new Date(utc + (3600000*0))).getTime(); // current time
                                    series.addPoint([x, load_activePower], true, true);
                                    series2.addPoint([x, grid_activePower], true, true);
                                    series3.addPoint([x, solar_activePower], true, true);
                                }, 1000);
                            }
                        }
                    },
                    title: {
                        text: 'Current Power Generation and Consumption',
                        x: -20 //center
                    },
                    xAxis: {
                        type: 'datetime',
                        tickPixelInterval: 150
                    },
                    yAxis: {
                        title: {
                            text: 'Real Power (W)'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + '</b><br/>' +
                                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                                Highcharts.numberFormat(this.y, 2);
                        }
                    },
                    legend: {
                        //enabled: false
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderwidth: 0
                    },
                    exporting: {
                        enabled: false
                    },
                    series: [{
                        name: 'Load',
                        data: (function () {
                            // generate an array of random data
                            var d = new Date();
                            var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
                            var data = [],
                                time = (new Date(utc + (3600000*0))).getTime(), // current time,
                                i;
                            //TODO get data from database for Grid data
                            for (i = -60; i <= 0; i += 1) {
                                data.push({
                                    x: time + i * 1,
                                    y: 0
                                });
                            }
                            return data;
                        }())
                    }, {
                        name: 'Grid',
                        data: (function () {
                            var d = new Date();
                            var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
                            var data = [],
                                time = (new Date(utc + (3600000*0))).getTime(), // current time,
                                i;
                            //TODO get data from database for Grid data
                            for (i = -60; i <= 0; i += 1) {
                                data.push({
                                    x: time + i * 1,
                                    y: 0
                                });
                            }
                            return data;
                        }())
                    }, {
                        name: 'Solar',
                        data: (function () {
                            var d = new Date();
                            var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
                            var data = [],
                                time = (new Date(utc + (3600000*0))).getTime(), // current time,
                                i;
                            //TODO get data from database for Grid data
                            for (i = -60; i <= 0; i += 1) {
                                data.push({
                                    x: time + i * 1,
                                    y: 0
                                });
                            }
                            return data;
                        }())
                    }]
                });
                // Smooth Loading
                $('.js-loading').addClass('hidden');
            },1000);
        });
     });

     //charts-load
     $(window).load(function(){
        $('.charts-load').on('show.bs.modal', function (event) {
            setTimeout(function(){
                Highcharts.chart('area-load', {
                    chart: {
                        type: 'spline',
                        animation: Highcharts.svg, // don't animate in old IE
                        marginRight: 10,
                        events: {
                            load: function () {
                                // set up the updating of the chart each second
                                var series = this.series[0],
                                    series2 = this.series[1],
                                    series3 = this.series[2];
                                setInterval(function () {
                                    var d = new Date();
                                    var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
                                    var x = (new Date(utc + (3600000*0))).getTime(); // current time
                                    series.addPoint([x, load_activePower], true, true);
                                    series2.addPoint([x, grid_activePower], true, true);
                                    series3.addPoint([x, solar_activePower], true, true);
                                }, 1000);
                            }
                        }
                    },
                    title: {
                        text: 'Current Power Generation and Consumption',
                        x: -20 //center
                    },
                    xAxis: {
                        type: 'datetime',
                        tickPixelInterval: 150
                    },
                    yAxis: {
                        title: {
                            text: 'Real Power (W)'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + '</b><br/>' +
                                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                                Highcharts.numberFormat(this.y, 2);
                        }
                    },
                    legend: {
                        //enabled: false
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderwidth: 0
                    },
                    exporting: {
                        enabled: false
                    },
                    series: [{
                        name: 'Load',
                        data: (function () {
                            // generate an array of random data
                            var d = new Date();
                            var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
                            var data = [],
                                time = (new Date(utc + (3600000*0))).getTime(), // current time,
                                i;
                            //TODO get data from database for Grid data
                            for (i = -60; i <= 0; i += 1) {
                                data.push({
                                    x: time + i * 1,
                                    y: 0
                                });
                            }
                            return data;
                        }())
                    }, {
                        name: 'Grid',
                        data: (function () {
                            var d = new Date();
                            var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
                            var data = [],
                                time = (new Date(utc + (3600000*0))).getTime(), // current time,
                                i;
                            //TODO get data from database for Grid data
                            for (i = -60; i <= 0; i += 1) {
                                data.push({
                                    x: time + i * 1,
                                    y: 0
                                });
                            }
                            return data;
                        }())
                    }, {
                        name: 'Solar',
                        data: (function () {
                            var d = new Date();
                            var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
                            var data = [],
                                time = (new Date(utc + (3600000*0))).getTime(), // current time,
                                i;
                            //TODO get data from database for Grid data
                            for (i = -60; i <= 0; i += 1) {
                                data.push({
                                    x: time + i * 1,
                                    y: 0
                                });
                            }
                            return data;
                        }())
                    }]
                });
                // Smooth Loading
                $('.js-loading').addClass('hidden');
            },1000);
        });
     });

});

function submit_air_data(values) {
    // topic ="ui/agent/lighting/update/bemoss/999/2HUE0017881cab4b";
    console.log("Method  " +  values.method + "  Vales " + values.value);
    console.log("nott")
    values["mac_address"]  = mac_address;
    var jsonText = JSON.stringify(values);
    console.log(jsonText);
	$.ajax({
		  url : '/update_PVInverter/',
		  type: 'POST',
		  data: jsonText,
		  dataType: 'json',
		  success : function(data) {
              console.log("done changing inverter status");
              check = true;
		     // change_lighting_values(data)
			//lighting_data_updated();
		  	/*$('.bottom-right').notify({
		  	    message: { text: 'Your settings will be updated shortly' },
		  	    type: 'blackgloss'
		  	  }).show();*/
		  },
		  error: function(data) {
              // submit_lighting_data(values);
              check = true;
			  $('.bottom-right').notify({
			  	    message: { text: 'Something went wrong when submitting the data. Please try again.' },
			  	    type: 'blackgloss'
			  	}).show();
		  }
		 });
}

