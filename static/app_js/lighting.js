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
var lamp_id ='2HUE0017881cab4b';
var _values_on_submit_lighting = {};
var test_values = {
		    "status": "ON",
		    //"saturation": parseFloat($( "#saturation_value" ).val().replace("%","")),
		    "device_info": ["999", "lighting", lamp_id]
		    };
var is_on = true;
var brightness_level = 0;
var send_brightness = false;
var color_level = 0;
var send_color = false;

var options = {
                            title: {text:"Lighting Data", fontSize:20},
                            legend: {
                              show: true,
                              labels:["Status","Brightness"],
                              fontSize: '5em',
                            },
                            series:[{
                                label: 'Status (0=OFF, 1=ON)',
                                neighborThreshold: -1,
                                yaxis: 'yaxis',
                                lineWidth: 2.5,
                                markerOptions: {
                                    lineWidth: 5,
                                }
                            }, {
                                label: 'Brightness (%)',
                                yaxis: 'y2axis',
                                lineWidth: 2.5,
                                markerOptions: {
                                    lineWidth: 5,
                                }
                            }],
                            cursor: {
                                   show: true,
                                   zoom: true
                            },
                            seriesDefaults: {
                              show: true,
                              showMarker:false,
                              pointLabels: {show:false},
                              rendererOption:{smooth: true}
                            },
                            axesDefaults: {
                              labelRenderer: $.jqplot.CanvasAxisLabelRenderer
                            },
                            axes: {
                              xaxis: {
                                label: "Time",
                                renderer: $.jqplot.DateAxisRenderer,
                                tickOptions:{formatString:'%m/%d, %H:%M'},
                                fontSize: 100,
                                //min : _status[0][0],
                                //max: _status[_status.length-1][0]
                              },
                              yaxis: {
                                min:-0.5,
                                max:1.5,
                                label: "Status (0=OFF, 1=ON)",

                              },
                              y2axis: {
                                min:0,
                                max:100,
                                label: "Brightness (%)"
                              },
                            },
                            textColor: "#ff0000",
                            grid: {
                                gridLineColor: '#ccc'
                            }
                  };

var temp = {
                seriesStyles: {
                    seriesColors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'],
                    highlightColors: ['lightpink', 'lightsalmon', 'lightyellow', 'lightgreen', 'lightblue', 'mediumslateblue']
                },
                grid: {

                },
                axesStyles: {
                   borderWidth: 0,
                   label: {
                       fontFamily: 'Sans',
                       textColor: 'white',
                       fontSize: '15pt'
                   }
                }
            };
var _status = [0,1,0,1];
var _brightness = [10,20,30,40];
console.log('_status'+_status);
var data_points = [_status, _brightness];
var plot1 = $.jqplot('chart100', data_points ,options);
console.log('already plot chart100');
$("#status").attr('checked','checked');
$("#brightness").attr('checked','checked');
var timeOut = 20;
// //Modify status	 when clicked
// $( "#light_on" ).click(function() {
// 	if ($("#light_on").css('background-color') == "green") {
// 	} else {
// 		$(this).css('background-color','green');
// 		$("#light_off").css('background-color','rgba(222, 222, 222, 0.55)');
// 		status = 'ON';
//         $('#brightness').slider('value', '100');
//         $('#brightness').slider('enable');
//         $('#brightness_value').val('100%');
// 	}
// });

$( "#device_power_disp" ).click(function() {
    console.log("button click");
    console.log($("#device_power_disp").text());

    if ($("#device_power_disp").text() == "ON") {
        document.getElementById("device_power_disp").innerHTML = "OFF";
        is_on = false;

    } else if ($("#device_power_disp").text() == "OFF") {
        document.getElementById("device_power_disp").innerHTML = "ON";
        is_on = true;

    }
    submit_lighting_data("send");
});

// $( "#light_off" ).click(function() {
// 	if ($("#light_off").css('background-color') == "green") {
// 	} else {
// 		$(this).css('background-color','green');
// 		$("#light_on").css('background-color','rgba(222, 222, 222, 0.55)');
// 		status = 'OFF';
//         $('#brightness').slider('value', '0');
//         $('#brightness').slider('disable');
//         $('#brightness_value').val('0%');
// 	}
// });
// $(function() {
//
//     $("#brightness").slider({
//         value: brightness,
//         orientation: "horizontal",
//         range: "min",
//         animate: true,
//         min: 0,
//         max: 100,
//         slide: function (event, ui) {
//             $("#brightness_value").val(ui.value + "%");
//         }
//     });
//
//
//     $("#brightness_value").val($("#brightness").slider("value") + "%");
//     $(".slider").slider("float");
//
//
//     if (_type == '2WL') {
//         $('#brightness').slider("disable");
//         $("#brightness_value").val('');
//         $('#dim_container').css('background-color', 'rgba(255, 255, 255, 0.4)');
//     }
//
//
//     if (_type == '2HUE') {
//         $('#color_container').show();
//         if (role != 'tenant') {
//             $('.color-box').colpick({
//                 colorScheme:'dark',
//                 layout:'rgbhex',
//                 color:color,
//                 submit:0,
//                 onChange:function(hsb,hex,rgb,el) {
//                     $(el).css('background-color', 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')');
//                 }
//             })
//             .css('background-color', color);
//         } else {
//             $('#color_container').css('background-color', color);     if (typeof B == "undefined"){
//         }
//     } else {
//         $('#color_container').css('background-color','rgba(255, 255, 255, 0.4)');
//     }
//
//      if (role == 'tenant') {
//          $('#brightness').slider("disable");
//
//     }
// });
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

          function update_Cur_rate(Cur_rate) {
            $("#Cur_rate").text(String(Cur_rate));
            $("#Cur_rate2").text(String(Cur_rate));
          }

         function setB(amount) {
             softSlider.noUiSlider.set(amount);
         }

         function brightness() {
             softSlider = document.getElementById('brightness');

             noUiSlider.create(softSlider, {
                 start: 50,
                 step: 1,
                 connect: 'lower',
                 range: {
                     min: 0,
                     max: 100
                 },
                 pips: {
                     mode: 'values',
                     values: [0, 25, 50, 75, 100],
                     density: 5
                 }
             });

             softSlider.noUiSlider.on('set', function ( values, handle ) {
                 if(values[handle] == 0) {
                     $(".brght").blur().removeClass("blue");
                     $("#b-0").addClass("blue");
                 } else if(values[handle] == 25) {
                     $(".brght").blur().removeClass("blue");
                     $("#b-25").addClass("blue");
                 } else if(values[handle] == 50) {
                     $(".brght").blur().removeClass("blue");
                     $("#b-50").addClass("blue");
                 } else if(values[handle] == 75) {
                     $(".brght").blur().removeClass("blue");
                     $("#b-75").addClass("blue");
                 } else if(values[handle] == 100) {
                     $(".brght").blur().removeClass("blue");
                     $("#b-100").addClass("blue");
                 } else {
                     $(".brght").blur().removeClass("blue");
                 }
                 console.log("values[handle]" + values[handle]);
                 brightness_level = parseInt(values[handle]);
                 send_brightness = true;
                 var lamp_send = {"method" : "brightness", "value": values[handle]};
                 submit_lighting_data(lamp_send);
             });
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
function setColor(color) {
        $("#colorSelector").minicolors('value', color);
    }
function color() {
        $("#colorSelector").minicolors({
            change: function(value) {
                if(value == '#ffffff') {
                    $(".clr").blur().removeClass("blue");
                    $("#c-d").addClass("blue");
                } else if(value == '#ffffee') {
                    $(".clr").blur().removeClass("blue");
                    $("#c-ww").addClass("blue");
                } else if(value == '#eeeeff') {
                    $(".clr").blur().removeClass("blue");
                    $("#c-cw").addClass("blue");
                } else if(value == '#ffeeee') {
                    $(".clr").blur().removeClass("blue");
                    $("#c-dl").addClass("blue");
                } else {
                    $(".clr").blur().removeClass("blue");
                }
                console.log(value + " --> (" + hexToRgb(value).r + "," + hexToRgb(value).g + "," + hexToRgb(value).b + ")");
                var _color = "(" + hexToRgb(value).r + "," + hexToRgb(value).g + "," + hexToRgb(value).b + ")" ;
                color_level = _color;
                send_color = true;
                var lamp_send = {"method" : "color", "value": _color};
                submit_lighting_data(lamp_send);
            },
            theme: 'bootstrap'
        });
}
         function pb_update() {
            var str ="<li><i class='fa fa-angle-right'></i><a href='/all_devices/999'>Devices</a></li>";
             str = str + "<li><i class='fa fa-angle-right'></i><a href='#'<span>Lighting</span></li><a></li>";
             $('.page-breadcrumb').append(str);
         }

$( document ).ready(function() {
    $.csrftoken();

            startTime();
            setValue();
			brightness();
			color();
            pb_update();
			renderChart();
			$('#log').DataTable({
				"order": [
					[0, "desc"]
				]
			});

			//PLOT chart100 -------------------------------------------------------------------
            var options = {
                            legend: {
                              show: true,
                              labels:["Status","Brightness"]
                            },
                            series:[{
                                label: 'Status (0=OFF, 1=ON)',
                                neighborThreshold: -1,
                                yaxis: 'yaxis'
                            }, {
                                label: 'Brightness (%)',
                                yaxis: 'y2axis'
                            }],
                            cursor: {
                                   show: true,
                                   zoom: true
                            },
                            seriesDefaults: {
                              show: true,
                              showMarker:false,
                              pointLabels: {show:false},
                              rendererOption:{smooth: true}
                            },
                            axesDefaults: {
                              labelRenderer: $.jqplot.CanvasAxisLabelRenderer
                            },
                            axes: {
                              xaxis: {
                                label: "Time",
                                renderer: $.jqplot.DateAxisRenderer,
                                tickOptions:{formatString:'%m/%d, %H:%M'},

                                //min : _status[0][0],
                                //max: _status[_status.length-1][0]
                              },
                              yaxis: {
                                min:0,
                                max:1,
                                label: "Status (0=OFF, 1=ON)"
                              },
                              y2axis: {
                                min:0,
                                max:100,
                                label: "Brightness (%)"
                              }
                            }
                  };
            var options_brightness = {
                            legend: {
                              show: true,
                              labels:["Brightness"]
                            },
                            series:{
                                label: "Brightness (%)",
                                neighborThreshold: -1,
                                yaxis: 'yaxis'
                            },
                            cursor: {
                                   show: true,
                                   zoom: true
                            },
                            seriesDefaults: {
                              show: true,
                              showMarker:false,
                              pointLabels: {show:false},
                              rendererOption:{smooth: true}
                            },
                            axesDefaults: {
                              labelRenderer: $.jqplot.CanvasAxisLabelRenderer
                            },
                            axes: {
                              xaxis: {
                                label: "Time",
                                renderer: $.jqplot.DateAxisRenderer,
                                tickOptions:{formatString:'%m/%d, %H:%M'},

                                //min : _brightness[0][0],
                                //max: _brightness[_brightness.length-1][0]
                              },
                              yaxis: {
                                min:0,
                                max:100,
                                label: "Brightness (%)"
                              }
                            }
                  };
            //Initialize plot for lighting
            var _status = [0,1,0,1];
            var _brightness = [10,20,30,40];
            console.log('_status'+_status);
            var data_points = [_status, _brightness];
            var plot1 = $.jqplot('chart100', data_points ,options);
            console.log('already plot chart100');
            $("#status").attr('checked','checked');
            $("#brightness").attr('checked','checked');

            temp = {
                seriesStyles: {
                    seriesColors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'],
                    highlightColors: ['lightpink', 'lightsalmon', 'lightyellow', 'lightgreen', 'lightblue', 'mediumslateblue']
                },
                grid: {

                },
                axesStyles: {
                   borderWidth: 0,
                   label: {
                       fontFamily: 'Sans',
                       textColor: 'white',
                       fontSize: '9pt'
                   }
                }
            };
            plot1.themeEngine.newTheme('uma', temp);
            plot1.activateTheme('uma');
            var timeOut;

            //END PLOT chart100 ------------------------------------------------------------------

            $('.bootstrap-switch-container').on( "click", function() {
                //alert( "SW ON/OFF" ); // jQuery 1.3+
                var lamp_send = {"method" : "status", "value": 0}
                submit_lighting_data(lamp_send);
                });
            //console.log("ws://" + window.location.host + "/socket_lighting");
});
    // var ws = new WebSocket("ws://" + window.location.host + "/socket_lighting");
    // console.log("websocket connection established");
    //  ws.onopen = function () {
    //      ws.send("WS opened from html page");
    //  };
    //
    //  ws.onmessage = function (event) {
    //      var _data = event.data;
    //      _data = $.parseJSON(_data);
    //      var topic = _data['topic'];
    //      // ["", "agent", "ui", device_type, command, building_name, zone_id, agent_id]
    //      if (topic) {
    //          topic = topic.split('/');
    //          console.log(topic);
    //          if (topic[7] == device_id && topic[4] == 'device_status_response') {
    //              if ($.type( _data['message'] ) === "string"){
    //                  var _message = $.parseJSON(_data['message']);
    //                  if ($.type(_message) != "object"){
    //                      _message = $.parseJSON(_message)
    //                  }
    //                  change_lighting_values(_message);
    //              } else if ($.type( _data['message'] ) === "object"){
    //                  change_lighting_values(_data['message']);
    //              }
    //
    //          }
    //          if (topic[7] == device_id && topic[4] == 'update_response') {
    //               var message_upd = _data['message'];
    //              var popup = false
    //              if ($.type( _data['message'] ) === "string"){
    //                 if (message_upd.indexOf('success') > -1) {
    //                     popup = true
    //                     }
    //              } else if ($.type( _data['message'] ) === "object") {
    //                 if (message_upd['message'].indexOf('success') > -1){
    //                     popup = true
    //                     }
    //              }
    //
    //              if (popup) {
    //                  change_lighting_values(_values_on_submit_lighting);
    //                  $('.bottom-right').notify({
    //                     message: { text: 'The changes made at '+update_time+" are now updated in the device!"},
    //                     type: 'blackgloss',
    //
    //                      fadeOut: { enabled: true, delay: 5000 }
    //                   }).show();
    //              }
    //          }
    //      }
    //  };


    // function change_lighting_values(data) {
    //     if (data.status == 'ON') {
    //         $("#light_on").css('background-color', 'green');
    //         $("#light_off").css('background-color', 'rgba(222, 222, 222, 0.55)');
    //         if (data.brightness) {
    //             if ($("#brightness").slider("option", "disabled", true) && (role != 'tenant')) {
    //                 $('#brightness').slider('enable');
    //             }
    //         }
    //         status = 'ON';
		// } else {
		// 	$("#light_off").css('background-color','green');
		// 	$("#light_on").css('background-color','rgba(222, 222, 222, 0.55)');
    //         status = 'OFF';
    //         $('#brightness').slider('disable');
		// }
    //
    //     if (data.brightness) {
    //         $('#brightness').slider({ value: data.brightness });
    //         $("#brightness_value").val(data.brightness + "%");
    //     }
    //
    //
    //     if (data.color && _type == '2HUE') {
    //         var _color = data.color;
    //         _color = _color.toString(); //should be in hex #rrggbb format
    //         $('.color-box').colpick({ color: _color });
    //         $('.color-box').css('background-color', _color);
    //     }
    // }

$( "#submit_lighting_data" ).click(function(evt) {
	evt.preventDefault();
	update_time = new Date();
	update_time = update_time.toLocaleTimeString();
	//alert(update_time);
	var status;
	if ($("#light_off").css('background-color') == "green" || $("#light_off").css('background-color') == "rgb(0, 128, 0)")
		status = 'OFF';
	else if ($("#light_on").css('background-color') == "green" || $("#light_on").css('background-color') == "rgb(0, 128, 0)")
		status = 'ON';


    if (_type == '2WL') {
        var values = {
		    "status": status,
		    "device_info":device_info
		    };
    } else if (_type == '2WSL') {
        var values = {
		    "brightness": parseFloat($( "#brightness_value" ).val().replace("%","")),
		    "status": status,
		    "device_info":device_info
		    };
    } else if (_type == '2HUE') {
        var lt_color = $('.color-box').css('background-color').toString();
        lt_color = lt_color.replace('rgb','');
        if (lt_color.indexOf('a(') > -1) {
            lt_color = '(255,255,255)';
        }
        var values = {
		    "brightness": parseFloat($( "#brightness_value" ).val().replace("%","")),
		    "color": lt_color,
		    "status": status,
		    //"saturation": parseFloat($( "#saturation_value" ).val().replace("%","")),
		    "device_info":device_info
		    };
    }
    _values_on_submit_lighting = values;
    submit_lighting_data(values);

});

function submit_lighting_data(values) {
    console.log("values " +values);
    console.log("values " + values.value);

    var  _data_sent= {};
    if (is_on == true){
        _data_sent["status"]  = "ON";
    } else if (is_on == false) {
        _data_sent["status"]  = "OFF";
    }
    if (send_brightness) {
        _data_sent["brightness"]  = brightness_level;
        send_brightness = false
    }
    if (send_color) {
        _data_sent["color"]  = color_level;
        send_color = false
    }

    _data_sent["mac_address"]  = mac_address;

    console.log("_data_sent" + _data_sent);
    console.log(_data_sent['status']);
    console.log(typeof(_data_sent));

    var jsonText = JSON.stringify(_data_sent);
    console.log(_data_sent);
	$.ajax({
		  url : '/update_light/',
		  type: 'POST',
		  data: jsonText,
		  dataType: 'json',
		  success : function(data) {
              console.log("done changing light status");
		  },
		  error: function(data) {
              console.log("error changing light status");
			  $('.bottom-right').notify({
			  	    message: { text: 'Something went wrong when submitting the data. Please try again.' },
			  	    type: 'blackgloss',
                  fadeOut: { enabled: true, delay: 5000 }
			  	}).show();
		  }
		 });
}

//PLOT chart100
function update_plot(_data) {
              _status = _data.status;
              _brightness = _data.brightness;
              console.log('_status: ' + _data.status);
              console.log('_brightness: ' + _data.brightness);
              var new_data = [];

              $.each($('input:checked'), function(index, value){

                   if (this.id == 'status') {
                       new_data.push(_status);
                   } else if (this.id == 'brightness') {
                       new_data.push(_brightness);
                   }
                   options.legend.labels.push(this.value);
                   options.axes.xaxis.min = _status[0][0];
                   console.log('axes.xaxis.min: ' + _status[0][0]);
                   options.axes.xaxis.max = _status[_status.length-1][0];
                   console.log('axes.xaxis.max: ' + _status[_status.length-1][0]);
              });
              if ($('input:checked').length == 1 && $('input:checked')[0].id == 'brightness') {
                  options_brightness.legend.labels.push('Brightness');
                  options_brightness.axes.yaxis.min = 0;
                  options_brightness.axes.yaxis.max = 100;
                  options_brightness.axes.xaxis.min = _brightness[0][0];
                  options_brightness.axes.xaxis.max = _brightness[_brightness.length-1][0];

                  if (plot1) {
                        plot1.destroy();
                   }

                  var plot2 = $.jqplot('chart100', new_data ,options_brightness);
                  plot2.themeEngine.newTheme('uma', temp);
                  plot2.activateTheme('uma');

              } else {

                   if (plot1) {
                        plot1.destroy();
                    }


                  plot2 = $.jqplot('chart100', new_data ,options);
                  plot2.themeEngine.newTheme('uma', temp);
                  plot2.activateTheme('uma');
              }

              console.log('nowww');
              $("#auto_update").attr('disabled','disabled');
              $("#stop_auto_update").removeAttr('disabled');
        }

function do_update() {
            var from_date = $("#from_date").val();
            var to_date = $("#to_date").val();
            var values = {
		        "mac": mac_address,
                "from_dt": from_date,
                "to_dt": to_date
		    };
	        var jsonText = JSON.stringify(values);
            console.log(jsonText);

				$.ajax({
				  url : '/lt_smap_update/',

				  type: 'POST',
                  data: jsonText,
                  dataType: 'json',

				  success : function(data) {

					  console.log ("testing");
					  console.log (data);
                      update_plot(data);

				  },
				  error: function(data) {

                      clearTimeout(timeOut);
                      $('.bottom-right').notify({
					  	    message: { text: 'Communication Error. Try again later!'},
					  	    type: 'blackgloss',
                          fadeOut: { enabled: true, delay: 5000 }
					  	  }).show();
				  }
				 });
                timeOut = setTimeout(do_update, 30000);

	}

//Auto update the chart
$('#auto_update').click( function(evt){
  evt.preventDefault();
  do_update();
});

$('#stop_auto_update').click(function(){
  clearTimeout(timeOut);
  $('#stop_auto_update').attr('disabled', 'disabled');
  $('#auto_update').removeAttr('disabled');
});

$('#stack_chart').click( function(evt){
    evt.preventDefault();
    stackCharts();
});

function stackCharts(){
if (timeOut) {
  clearTimeout(timeOut);
  $('#stop_auto_update').attr('disabled', 'disabled');
  $('#auto_update').removeAttr('disabled');
}
options.legend.labels = [];
var new_data = [];
$.each($('input:checked'), function(index, value){

   if (this.id == 'status') {
       new_data.push(_status);
   } else if (this.id == 'brightness') {
       new_data.push(_brightness);
   }
   options.legend.labels.push(this.value);
   options.axes.xaxis.min = _status[0][0];
   options.axes.xaxis.max = _status[_status.length-1][0];
});

  if ($('input:checked').length == 1 && $('input:checked')[0].id == 'brightness') {
          options_brightness.legend.labels.push('Brightness');
          options_brightness.axes.yaxis.min = 0;
          options_brightness.axes.yaxis.max = 100;
          options_brightness.axes.xaxis.min = _brightness[0][0];
          options_brightness.axes.xaxis.max = _brightness[_brightness.length-1][0];

          if (plot1) {
                plot1.destroy();
           }

          var plot2 = $.jqplot('chart100', new_data ,options_brightness);
          plot2.themeEngine.newTheme('uma', temp);
          plot2.activateTheme('uma');

      } else {

           if (plot1) {
                plot1.destroy();
            }

          plot2 = $.jqplot('chart100', new_data ,options);
          plot2.themeEngine.newTheme('uma', temp);
          plot2.activateTheme('uma');
      }

}

$("#get_stat").click(function(evt) {
console.log("get stat button is clicked");
evt.preventDefault();
var from_date = $("#from_date").val();
var to_date = $("#to_date").val();
get_statistics(from_date, to_date);

});

function get_statistics(from_date, to_date) {
    console.log("get_statistics")
    var values = {
        "mac": mac_address,
        "from_dt": from_date,
        "to_dt": to_date
    };
    var jsonText = JSON.stringify(values);
    console.log(jsonText);

        $.ajax({
          url : '/lt_smap_get_stat/',

          type: 'POST',
          data: jsonText,
          dataType: 'json',

          success : function(data) {
              console.log('/lt_smap_get_stat/ success');
              console.log('data.status: %s',data.status)
              if (data.status.length == 0) {
                  $('.bottom-right').notify({
                    message: { text: 'No data found for the selected time period.'},
                    type: 'blackgloss',
                  fadeOut: { enabled: true, delay: 5000 }
                  }).show();
              } else {
                  console.log('update_plot(data)');
                  update_plot(data);
                  $("#auto_update").removeAttr('disabled');
                  $("#stop_auto_update").attr('disabled', 'disabled');

              }
          },
          error: function(data) {


              $('.bottom-right').notify({
                    message: { text: 'Communication Error. Try again later!'+data},
                    type: 'blackgloss',
                  fadeOut: { enabled: true, delay: 5000 }
                  }).show();
          }
         });

}

$("#export_data").click(function(evt) {
console.log("export_data is clicked");
evt.preventDefault();
var from_date = $("#from_date").val();
var to_date = $("#to_date").val();
export_to_spreadsheet(from_date, to_date);

});

function export_to_spreadsheet(from_date, to_date) {
    var values = {
        "mac": mac,
        "from_dt": from_date,
        "to_dt": to_date
    };
    var jsonText = JSON.stringify(values);
    console.log(jsonText);
    $.ajax({
      url : '/lt_export_tsd/',
      type: 'POST',
      data: jsonText,
      dataType: 'json',
      success : function(data) {
          if (data.length == 0) {
              $('.bottom-right').notify({
                message: { text: 'No data found for the selected time period.'},
                type: 'blackgloss',
              fadeOut: { enabled: true, delay: 5000 }
              }).show();
          } else {
              JSONToCSVConvertor(data, mac, true);

          }
      },
      error: function(data) {
          $('.bottom-right').notify({
                message: { text: 'Communication Error. Try again later!'+data},
                type: 'blackgloss',
              fadeOut: { enabled: true, delay: 5000 }
              }).show();
      }
     });
}

function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
        //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
        var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
        var CSV = '';
        //This condition will generate the Label/Header
        if (ShowLabel) {
            var row = "";
            //This loop will extract the label from 1st index of on array
            for (var index in arrData[0]) {
                //Now convert each value to string and comma-seprated
                row += index + ',';
            }
            row = row.slice(0, -1);
            //append Label row with line break
            CSV += row + '\r\n';
        }
        //1st loop is to extract each row
        for (var i = 0; i < arrData.length; i++) {
            var row = "";
            //2nd loop will extract each column and convert it in string comma-seprated
            for (var index in arrData[i]) {
                row += '"' + arrData[i][index] + '",';
            }
            row.slice(0, row.length - 1);
            //add a line break after each row
            CSV += row + '\r\n';
        }
        if (CSV == '') {
            alert("Invalid data");
            return;
        }
        //Generate a file name
        var fileName = "timeseries_";
        //this will remove the blank-spaces from the title and replace it with an underscore
        fileName += ReportTitle.replace(/ /g,"_");
        //Initialize file format you want csv or xls
        var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
        //this trick will generate a temp <a /> tag
        var link = document.createElement("a");
        link.href = uri;
        //set the visibility hidden so it will not effect on your web-layout
        link.style = "visibility:hidden";
        link.download = fileName + ".csv";
        //this part will append the anchor tag and remove it after automatic click
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
