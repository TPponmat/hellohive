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

var plug_id ='3WSP221520K010067C';
var device_info = ["999", "plugload", plug_id];
		    //"saturation": parseFloat($( "#saturation_value" ).val().replace("%","")

var _values_on_submit_plugload = {};
var Is_human_click = false;

var is_on = true;

$( "#device_power_disp" ).click(function() {
    console.log("button click");
    if ($("#device_power_disp").text() == "ON") {
        document.getElementById("device_power_disp").innerHTML = "OFF";
        is_on = false;

    } else if ($("#device_power_disp").text() == "OFF") {
        document.getElementById("device_power_disp").innerHTML = "ON";
        is_on = true;

    }
    console.log($("#device_power_disp").text());
    submit_plug_data("send");
});

function submit_plug_data(values) {
    console.log("values " +values);
    console.log("values " + values.value);

    var  _data_sent= {};
    if (is_on == true){
        _data_sent["status"]  = "ON";
    } else if (is_on == false) {
        _data_sent["status"]  = "OFF";
    }
    _data_sent["mac_address"]  = mac_address;
    console.log("_data_sent" + _data_sent);
    var jsonText = JSON.stringify(_data_sent);
    console.log(_data_sent);
	$.ajax({
		  url : '/update_plugload/',
		  type: 'POST',
		  data: jsonText,
		  dataType: 'json',
		  success : function(data) {
              console.log("done changing plug status");
		  },
		  error: function(data) {
              console.log("error changing plug status");
			  $('.bottom-right').notify({
			  	    message: { text: 'Something went wrong when submitting the data. Please try again.' },
			  	    type: 'blackgloss',
                  fadeOut: { enabled: true, delay: 5000 }
			  	}).show();
		  }
		 });
}

$( "#sp_on" ).click(function() {
	if ($("#sp_on").css('background-color') == "green") {
	} else {
		$(this).css('background-color','green');
		$("#sp_off").css('background-color','rgba(222, 222, 222, 0.55)');
		status = 'ON';
	}
});

$( "#sp_off" ).click(function() {
	if ($("#sp_off").css('background-color') == "green") {
	} else {
		$(this).css('background-color','green');
		$("#sp_on").css('background-color','rgba(222, 222, 222, 0.55)');
		status = 'OFF';
	}
});
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

$( document ).ready(function() {
	$.csrftoken();
            startTime();
            setValue();
            pb_update()
			$('#log').DataTable({
				"order": [
					[0, "desc"]
				]
			});
	var plug_action;
        $("#div_sw").mouseover(function(){
            Is_human_click = true;
        });
        $("#div_sw").mouseout(function(){
            Is_human_click = false;
        });
    //get_plug_stat(test_values);,
    //$('.bootstrap-switch-container').on( "click", function() {
    $('.make-switch').on('switchChange.bootstrapSwitch', function (event, state) {
    //$('.make-switch').on('click', function (event, state)
        //alert(this);
        // alert(event);
        //alert(state);

        //alert( "SW ON/OFF" ); // jQuery 1.3+
        var plug_send = {};
		if (Is_off)
		{
			Is_off = false;
			plug_action = "ON";
            console.log("Send ON");
		}else {
			Is_off = true;
			plug_action = "OFF";
            console.log("Send OFF");
		}
        plug_send['device_info'] = device_info;
		plug_send['status'] = plug_action ;
        plug_send['mac_address'] = mac_address ;

            //submit_plugload_data(plug_send);

		console.log("test SW b Human");
        // if (Is_human_click)
        // {
             submit_plugload_data(plug_send);
        // }

        });
    // if (device_type_id != '3WSP') {
     //    var gauge_target = document.getElementById("chart_9");
     //    var gauge = new Gauge(gauge_target);
    // }
    //
    var ws = new WebSocket("ws://" + window.location.host + "/socket_plugload");

     ws.onopen = function () {
         ws.send("WS opened from html page");
     };

     ws.onmessage = function (event) {
         var _data = event.data.trim();
         _data = $.parseJSON(_data);
         var topic = _data['topic'];
         var msg = $.parseJSON(_data['message']);

         //console.log(_data['message'])
         console.log('status' + msg['status']);
         Is_human_click = false;
         console.log("this device mac_address: " + mac_address);
         console.log("message sent device_id: " + msg['device_id']);
         if (('3WIS' + mac_address) == msg['device_id']) {
             if (msg['status'] == "ON") {
                 Is_off = false;
                 $('.make-switch').bootstrapSwitch('state', true, true);
             } else if (msg['status'] == "OFF") {
                 Is_off = true;
                 $('.make-switch').bootstrapSwitch('state', false, true);
             }
             console.log("plug status updated")
         } else {
             console.log("this message is not for me")
         }
     };
		 // var topic =  false;
         // ["", "agent", "ui", device_type, command, building_name, zone_id, agent_id]
         // if (topic) {
         //     topic = topic.split('/');
         //     console.log(topic);
             // if (topic[7] == device_id && topic[4] == 'device_status_response') {
             //     if ($.type( _data['message'] ) === "string"){
             //         var _message = $.parseJSON(_data['message']);
             //         if ($.type(_message) != "object"){
             //             _message = $.parseJSON(_message)
             //         }
             //         change_plugload_values(_message);
             //     } else if ($.type( _data['message'] ) === "object"){
             //         change_plugload_values(_data['message']);
             //     }
             //
             // }
             // if (topic[7] == device_id && topic[4] == 'update_response') {
             //     var message_upd = _data['message'];
             //     var popup = false
             //     if ($.type( _data['message'] ) === "string"){
             //        if (message_upd.indexOf('success') > -1) {
             //            popup = true
             //            }
             //     } else if ($.type( _data['message'] ) === "object") {
             //        if (message_upd['message'].indexOf('success') > -1){
             //            popup = true
             //            }
             //     }

                 // if (popup) {
                 //     change_plugload_values_on_success(_values_on_submit_plugload);
                 //     $('.bottom-right').notify({
                 //        message: { text: 'The changes made at '+update_time+" are now updated in the device!"},
                 //        type: 'blackgloss',
                 //
                 //         fadeOut: { enabled: true, delay: 5000 }
                 //      }).show();
                 // }
         //     }
         // }


    //
    // var popts = {
     //    lines: 12, // The number of lines to draw
     //    angle: 0.0, // The length of each line
     //    lineWidth: 0.2, // The line thickness2
     //    pointer: {
     //        length: 0.8, // The radius of the inner circle
     //        strokeWidth: 0.03, // The rotation offset
     //        color: '#00000' // Fill color
     //    },
     //    limitMax: 'true',   // If true, the pointer will not go past the end of the gauge
     //    colorStart: '#6FADCF',   // Colors
     //    colorStop: '#8FC0DA',    // just experiment with them
     //    strokeColor: '#E0E0E0',   // to see which ones work best for you
     //    generateGradient: true,
     //    percentColors: [
     //        [0, "#a9d70b" ],
     //        [500, "#f9c802"],
     //        [1000, "#ff0000"]
     //    ],
     //    //animationSpeed: 30,
     //    fontSize: 20
    // };
    //
    //
    // if (device_type_id != '3WSP') {
     //    if (power != "") {
     //        //var power_val = [power];
     //        //var power_meter = $.jqplot('chart9', [power_val], options);
     //        $("#power_val").text(power);
     //        var power_val = parseInt(power);
     //        gauge.setTextField(document.getElementById("9-textfield"));
     //        gauge.setOptions(popts);
     //        gauge.maxValue = 1000;
     //        gauge.set(1);
     //        gauge.set(power_val);
    //
    //
     //    } else {
    //
     //    }
    // }
    //
    // function change_plugload_values_on_success(data) {
	// 	if (data.status == 'ON') {
	// 		$("#sp_on").css('background-color','green');
	// 		$("#sp_off").css('background-color','rgba(222, 222, 222, 0.55)');
	// 	} else {
	// 		$("#sp_off").css('background-color','green');
	// 		$("#sp_on").css('background-color','rgba(222, 222, 222, 0.55)');
	// 	}
	// }
});
	function change_plugload_values(data) {
		if (data.status == 'ON') {
			$("#sp_on").css('background-color','green');
			$("#sp_off").css('background-color','rgba(222, 222, 222, 0.55)');
		} else {
			$("#sp_off").css('background-color','green');
			$("#sp_on").css('background-color','rgba(222, 222, 222, 0.55)');			
		}
        if (device_type_id != '3WSP') {
            if (data.power || data.power == 0) {
                $("#power_val").text(data.power);

                gauge.set(parseInt(data.power));

            }
        }
	}

	$( "#confirm_change" ).click(function(evt) {
		evt.preventDefault();
        console.log("confirm change")
		update_time = new Date();
		update_time = update_time.toLocaleTimeString();
		var status;
		if ($("#sp_off").css('background-color') == "green" || $("#sp_off").css('background-color') == "rgb(0, 128, 0)")
			status = 'OFF';
		else if ($("#sp_on").css('background-color') == "green" || $("#sp_on").css('background-color') == "rgb(0, 128, 0)")
			status = 'ON';
		
			values = {
					"status":status,
					"device_info":device_info,
                    "mac_address": mac_address
			};
		// _values_on_submit_plugload = values;
        submit_plugload_data(values)
	});

    function submit_plugload_data(values) {
        var jsonText = JSON.stringify(values);
	    console.log("jsonText" + jsonText);
		$.ajax({
            url: '/update_plugload/',
            type: 'POST',
            data: jsonText,
            dataType: 'json',
            success: function (data) {
                /*$('.bottom-right').notify({
                 message: { text: 'Your changes will be updated shortly' },
                 type: 'blackgloss'
                 }).show();*/
                console.log(data.event);
            }/*,
             error: function(data) {
             submit_plugload_data(values);
             $('.bottom-right').notify({
             message: { text: 'Something went wrong when submitting the thermostat data. Please try again.' },
             type: 'blackgloss',
             fadeOut: { enabled: true, delay: 5000 }
             }).show();
             }
             */

			 });
    }
            console.log("mac_address: "+mac_address);
            if (mac_address == "221445K1200321") {
                document.getElementById("device_header").innerHTML = "EV Charger";
                document.getElementById("device_subheader").innerHTML = "EV Charger Controller";
                document.getElementById("device_data_header").innerHTML = "EV Charger";
            function pb_update() {
                var str ="<li><i class='fa fa-angle-right'></i><a href='/all_devices/999'>Devices</a></li>";
                str = str + "<li><i class='fa fa-angle-right'></i><a href='#'<span>EV Charger</span></li><a></li>";
                $('.page-breadcrumb').append(str);
            }
            } else if (mac_address == "221520K010067C") {
                document.getElementById("device_header").innerHTML = "Set Top Box";
                document.getElementById("device_subheader").innerHTML = "Set Top Box Controller";
                document.getElementById("device_data_header").innerHTML = "Set Top Box";
            function pb_update() {
                var str = "<li><i class='fa fa-angle-right'></i><a href='/all_devices/999'>Devices</a></li>";
                str = str + "<li><i class='fa fa-angle-right'></i><a href='#'<span>Set Top Box</span></li><a></li>";
                $('.page-breadcrumb').append(str);
            }
            } else if (mac_address == "221418K120031E") {
                document.getElementById("device_header").innerHTML = "Computer";
                document.getElementById("device_subheader").innerHTML = "Computer Controller";
                document.getElementById("device_data_header").innerHTML = "Computer";
            function pb_update() {
                var str = "<li><i class='fa fa-angle-right'></i><a href='/all_devices/999'>Devices</a></li>";
                str = str + "<li><i class='fa fa-angle-right'></i><a href='#'<span>Computer</span></li><a></li>";
                $('.page-breadcrumb').append(str);
            }
            }else if (mac_address == "5CAAFD4F8150") {
                document.getElementById("device_header").innerHTML = "KMITL Smart Plug";
                document.getElementById("device_subheader").innerHTML = "KMITL Smart Plug Controller";
                document.getElementById("device_data_header").innerHTML = "KMITL Smart Plug";
                function pb_update() {
                    var str = "<li><i class='fa fa-angle-right'></i><a href='/all_devices/999'>Devices</a></li>";
                    str = str + "<li><i class='fa fa-angle-right'></i><a href='#'<span>KMITL Smart Plug</span></li><a></li>";
                    $('.page-breadcrumb').append(str);
                }
            }

