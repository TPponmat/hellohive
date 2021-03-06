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
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMICur_rate(Cur_rate)TED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
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
var Is_off = false;

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
//
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
//             $('#color_container').css('background-color', color);
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
                     $(".brght").blur().removeClass("grey");
                     $("#b-0").addClass("grey");
                 } else if(values[handle] == 25) {
                     $(".brght").blur().removeClass("grey");
                     $("#b-25").addClass("grey");
                 } else if(values[handle] == 50) {
                     $(".brght").blur().removeClass("grey");
                     $("#b-50").addClass("grey");
                 } else if(values[handle] == 75) {
                     $(".brght").blur().removeClass("grey");
                     $("#b-75").addClass("grey");
                 } else if(values[handle] == 100) {
                     $(".brght").blur().removeClass("grey");
                     $("#b-100").addClass("grey");
                 } else {
                     $(".brght").blur().removeClass("grey");
                 }
                 console.log(values[handle]);
                 var lamp_send = {"method" : "brightness", "value": values[handle]}
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
                    $(".clr").blur().removeClass("grey");
                    $("#c-d").addClass("grey");
                } else if(value == '#ffffee') {
                    $(".clr").blur().removeClass("grey");
                    $("#c-ww").addClass("grey");
                } else if(value == '#eeeeff') {
                    $(".clr").blur().removeClass("grey");
                    $("#c-cw").addClass("grey");
                } else if(value == '#ffeeee') {
                    $(".clr").blur().removeClass("grey");
                    $("#c-dl").addClass("grey");
                } else {
                    $(".clr").blur().removeClass("grey");
                }
                console.log(value + " --> (" + hexToRgb(value).r + "," + hexToRgb(value).g + "," + hexToRgb(value).b + ")");
                var _color = "(" + hexToRgb(value).r + "," + hexToRgb(value).g + "," + hexToRgb(value).b + ")" ;

                var lamp_send = {"method" : "color", "value": _color};
                submit_lighting_data(lamp_send);
            },
            theme: 'bootstrap'
        });
}

$( document ).ready(function() {
    $.csrftoken();

            startTime();
            setValue();
			brightness();
			color();
			renderChart();
			$('#log').DataTable({
				"order": [
					[0, "desc"]
				]
			});
    $('.bootstrap-switch-container').on( "click", function() {
        //alert( "SW ON/OFF" ); // jQuery 1.3+
        var lamp_send = {"method" : "status", "value": 0}
        submit_lighting_data(lamp_send);
        });
    //console.log("ws://" + window.location.host + "/socket_lighting");
});

var ws_dashboard = new WebSocket("ws://" + window.location.host + "/socket_dashboard");

     ws_dashboard.onopen = function () {
         ws_dashboard.send("WS opened from html page");
     };

     ws_dashboard.onmessage = function (event) {
         var _data = event.data;
         _data = $.parseJSON(_data);
         console.log(_data);
         var _topic = _data['topic'];
         console.log(_topic);
         var _headers = _data['headers'];
         console.log(_headers.data_source);
         var _message = $.parseJSON(_data['message']);
         if (_headers.data_source == 'gridApp') {
             console.log(_message.current_electricity_price);
             update_Cur_rate(_message.current_electricity_price);
         }
     };
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
    // topic ="ui/agent/lighting/update/bemoss/999/2HUE0017881cab4b";
    var status = "";
    var lamp_val = "";
        jjstatus = values.method;
        lamp_val    = values.value ;
    if (values.method == "status"){
        if (Is_off)
    {
        Is_off = false;
        lamp_val = "OFF";
    }else {
        Is_off = true;
        lamp_val = "ON";
    }
    }
/*
    var lt_color =  '#eb2323';
    lt_color = lt_color.replace('rgb','');
            if (lt_color.indexOf('a(') > -1) {
                lt_color = '(255,255,255)';
            }
    console.log(lt_color)
    */
    console.log("Method  " + jjstatus + "  Vales " + lamp_val);
     test_values[jjstatus] =  lamp_val ;
     //test_values['color'] = '(220,0,0)'

     test_values["device_info"] =  ["999", "lighting", lamp_id];

     //test_values["device_info"] = ["999", "lighting", lamp_id]
    // var vaule = {"topic" : topic, "message": status_on}
    //var device_info = ["999", "lighing", value]
    var jsonText = JSON.stringify(test_values);
    console.log(jsonText);
	$.ajax({
		  url : '/update_light/',
		  type: 'POST',
		  data: jsonText,
		  dataType: 'json',
		  success : function(data) {
		     // change_lighting_values(data)
			//lighting_data_updated();
		  	/*$('.bottom-right').notify({
		  	    message: { text: 'Your settings will be updated shortly' },
		  	    type: 'blackgloss'
		  	  }).show();*/
		  },
		  error: function(data) {
              // submit_lighting_data(values);
			  $('.bottom-right').notify({
			  	    message: { text: 'Something went wrong when submitting the data. Please try again.' },
			  	    type: 'blackgloss',
                  fadeOut: { enabled: true, delay: 5000 }
			  	}).show();
		  }
		 });
}

