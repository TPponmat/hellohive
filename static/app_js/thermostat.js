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


    $("#override_no").click(function(e) {
        e.preventDefault();

                $(this).removeClass('btn-default').addClass('btn-success');
                $('#override_yes').removeClass('btn-success').addClass('btn-default');
    });

    $("#override_yes").click(function(e) {
        e.preventDefault();

                $(this).removeClass('btn-default').addClass('btn-success');
                $('#override_no').removeClass('btn-success').addClass('btn-default');
    });

    $('#hold_none').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('btn-default')) {
            $(this).removeClass('btn-default').addClass('btn-success');
            $("#hold_temp").removeClass('btn-success').addClass('btn-default');
            $("#hold_perm").removeClass('btn-success').addClass('btn-default');
        }
        hold_th = 0
    });

    $('#hold_temp').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('btn-default')) {
            $(this).removeClass('btn-default').addClass('btn-success');
            $("#hold_none").removeClass('btn-success').addClass('btn-default');
            $("#hold_perm").removeClass('btn-success').addClass('btn-default');
        }
        hold_th = 1
    });

    $('#hold_perm').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('btn-default')) {
            $(this).removeClass('btn-default').addClass('btn-success');
            $("#hold_none").removeClass('btn-success').addClass('btn-default');
            $("#hold_temp").removeClass('btn-success').addClass('btn-default');
        }
        hold_th = 2
    });

    $('#th_heat').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('btn-default')) {
            $(this).removeClass('btn-default').addClass('btn-success');
            $("#th_cool").removeClass('btn-success').addClass('btn-default');
            $("#th_off").removeClass('btn-success').addClass('btn-default');
            $("#coolplus").prop('disabled', true);
            $("#coolminus").prop('disabled', true);
            $("#heatplus").prop('disabled', false);
            $("#heatminus").prop('disabled', false);
        }
    });

    $('#th_cool').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('btn-default')) {
            $(this).removeClass('btn-default').addClass('btn-success');
            $("#th_heat").removeClass('btn-success').addClass('btn-default');
            $("#th_off").removeClass('btn-success').addClass('btn-default');
            $("#heatplus").prop('disabled', true);
            $("#heatminus").prop('disabled', true);
            $("#coolplus").prop('disabled', false);
            $("#coolminus").prop('disabled', false);
        }
    });

    $('#th_off').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('btn-default')) {
            $(this).removeClass('btn-default').addClass('btn-success');
            $("#th_heat").removeClass('btn-success').addClass('btn-default');
            $("#th_cool").removeClass('btn-success').addClass('btn-default');
            $("#coolplus").prop('disabled', true);
            $("#coolminus").prop('disabled', true);
            $("#heatplus").prop('disabled', true);
            $("#heatminus").prop('disabled', true);
        }
    });


    $('#fan_auto').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('btn-default')) {
            $(this).removeClass('btn-default').addClass('btn-success');
            $("#fan_on").removeClass('btn-success').addClass('btn-default');
        }
    });

    $('#fan_on').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('btn-default')) {
            $(this).removeClass('btn-default').addClass('btn-success');
            $("#fan_auto").removeClass('btn-success').addClass('btn-default');
        }
    });


    $('#heatplus').click(function (e) {
        e.preventDefault();
        var currentVal = parseInt($("#heat_setpoint").text());
        if (!isNaN(currentVal) && currentVal < 95) {
            $('#heat_setpoint').text(currentVal + 1);
        } else {
            $('#heat_setpoint').text(95);
        }
        if (hold_th == 0 && (device_type_id == '1HWT'  || device_type_id == '1TH')) {
        //if setpoints are changed and mode is hold mode is None, upgrade it to temporary hold
             $('#hold_temp').click()
        }
    });

    $("#heatminus").click(function (e) {
        e.preventDefault();
        var currentVal = parseInt($("#heat_setpoint").text());
        if (!isNaN(currentVal) && currentVal > 55) {
            $('#heat_setpoint').text(currentVal - 1);
        } else {
            $('#heat_setpoint').text(55);
        }
        if (hold_th == 0 && (device_type_id == '1HWT'  || device_type_id == '1TH')) {
        //if setpoints are changed and mode is hold mode is None, upgrade it to temporary hold
            $('#hold_temp').click()
            hold_th = 1
        }

    });

    $('#coolplus').click(function (e) {
        e.preventDefault();
        var currentVal = parseInt($("#cool_setpoint").text());
        if (!isNaN(currentVal) && currentVal < 95) {
            $('#cool_setpoint').text(currentVal + 1);
        } else {
            $('#cool_setpoint').text(95);
        }
        if (hold_th == 0 && (device_type_id == '1HWT'  || device_type_id == '1TH')) {
        //if setpoints are changed and mode is hold mode is None, upgrade it to temporary hold
            $('#hold_temp').click()
            hold_th = 1
        }
    });

    $("#coolminus").click(function (e) {
        e.preventDefault();
        var currentVal = parseInt($("#cool_setpoint").text());
        if (!isNaN(currentVal) && currentVal > 55) {
            $('#cool_setpoint').text(currentVal - 1);
        } else {
            $('#cool_setpoint').text(55);
        }
        if (hold_th == 0 && (device_type_id == '1HWT'  || device_type_id == '1TH')) {
        //if setpoints are changed and mode is hold mode is None, upgrade it to temporary hold
           $('#hold_temp').click()
        }
    });

var _values_on_submit = {};
$(onStart); //short-hand for $(document).ready(onStart);
function onStart($) {

    if (override_th == 'True') {
        $("#override_yes").click();

    } else {
        $("#override_no").click();
    }

    if (device_type_id == '1TH') {
        if (hold_th == 0) {
            $('#hold_none').click();
        } else if (hold_th == 1) {
            $('#hold_temp').click();
        } else if (hold_th == 2) {
            $('#hold_perm').click();
        }
    }
    if (mode == 'HEAT') {
        $("#th_heat").click();
        if (role == 'tenant') {
           $("#heatplus").prop('disabled', true);
           $("#heatminus").prop('disabled', true);
        }
    } else if (mode == 'COOL') {
        $("#th_cool").click();
        if (role == 'tenant') {
           $("#coolplus").prop('disabled', true);
            $("#coolminus").prop('disabled', true);
        }
    } else if (mode == 'OFF') {
        $("#th_off").click();

    }

    if (fan_mode == 'AUTO') {
        $("#fan_auto").click();
    } else {
        $("#fan_on").click();
    }
}

$( document ).ready(function() {
    $.csrftoken();

    var ws = new WebSocket("ws://" + window.location.host + "/socket_thermostat");
     ws.onopen = function () {
         ws.send("WS opened from html page");
     };
     ws.onmessage = function (event) {
         var _data = event.data;
         _data = $.parseJSON(_data);
         var topic = _data['topic'];
         // ["0", "1",     "2",      "3",         "4",         "5",     "6",     "7"]
         // ["", "agent", "ui", "device_type", "command", "building", "zone", "agent_id"]
         if (topic) {
             topic = topic.split('/');
             console.log(topic);
             if (topic[7] == device_id && topic[4] == 'device_status_response') {
                 if ($.type( _data['message'] ) === "string"){
                     var _message = $.parseJSON(_data['message']);
                     if ($.type(_message) != "object"){
                         _message = $.parseJSON(_message)
                     }
                     change_tstat_values(_message);
                 } else if ($.type( _data['message'] ) === "object"){
                     change_tstat_values(_data['message']);
                 }

             }
             if (topic[7] == device_id && topic[4] == 'update_response') {
                 var message_upd = _data['message'];
                 var popup = false
                 if ($.type( _data['message'] ) === "string"){
                    if (message_upd.indexOf('success') > -1) {
                        popup = true
                        }
                 } else if ($.type( _data['message'] ) === "object") {
                    if (message_upd['message'].indexOf('success') > -1){
                        popup = true
                        }
                 }

                 if (popup) {
                     change_values_on_success_submit(_values_on_submit);
                     $('.bottom-right').notify({
                        message: { text: 'The changes made at '+update_time+" are now updated in the device!"},
                        type: 'blackgloss',

                         fadeOut: { enabled: true, delay: 5000 }
                      }).show();
                 }
             }
         }
     };


function change_values_on_success_submit(data) {
    if (data.thermostat_mode == 'OFF') {
        ('#th_off').click()

    } else if (data.thermostat_mode == 'HEAT') {
        $("#th_heat").click();
        if (role == 'tenant') {
           $("#heatplus").prop('disabled', true);
           $("#heatminus").prop('disabled', true);
        }
    } else if (data.thermostat_mode == 'COOL') {
        $("#th_cool").click();

        if (role == 'tenant') {
           $("#coolplus").prop('disabled', true);
            $("#coolminus").prop('disabled', true);
        }

    }
    if (data.fan_mode == 'ON') {
        $("#fan_on").click();

    } else if (data.fan_mode == 'AUTO') {
        $("#fan_auto").click();
    }
	$("#heat_setpoint").text(data.heat_setpoint);
    $("#cool_setpoint").text(data.cool_setpoint);

    if ((data.override).toString().toLowerCase() == 'true') {
        $("#override_yes").click();
    } else {
        $("#override_no").click();
    }

    if (device_type_id == '1HWT'  || device_type_id == '1TH') {
        if (data.hold == 0) {
            $("#hold_none").click();
        } else if (data.hold == 1) {
            $("#hold_temp").click();
        } else if (data.hold == 2) {
            $("#hold_perm").click();
        }
    }

}

function change_tstat_values(data) {
	$("#indoor_temp").text(data.temperature);
    change_values_on_success_submit(data)
}





    (function weatherloop(){
	setTimeout(function()
	{
		$.ajax({
		  url : '/weather/',
		  type: 'GET',
		  //dataType : "json",
		  success : function(data) {
		  	changeValues(data);
		  	weatherloop();
		  },
		  error: function(data) {
		  	weatherloop();
		  }
		  //timeout: 3000
		 });
	},3000000);
	})();

$( "#submitthermostatdata" ).click(function(evt) {
	evt.preventDefault();
	update_time = new Date();
	update_time = update_time.toLocaleTimeString();
    var tmode = 'HEAT';
    var fmode = 'AUTO';
    if ($("#th_heat").hasClass('btn-success')) {
        tmode = 'HEAT';
    } else if ($("#th_cool").hasClass('btn-success')) {
        tmode = 'COOL';
    } else {
        tmode = 'OFF';
    }

    if ($("#fan_auto").hasClass('btn-success')) {
        fmode = 'AUTO';
    } else if ($("#fan_on").hasClass('btn-success')) {
        fmode = 'ON';
    }

    if ($("#override_yes").hasClass('btn-success')) {
        override_th = true;
    } else {
        override_th = false;
    }

    var heat_setpoint = $("#heat_setpoint").text();
    var cool_setpoint = $("#cool_setpoint").text();

    if (device_type_id == '1HWT'  || device_type_id == '1TH') {
        if ($("#hold_none").hasClass('btn-success')) {
            hold_th = 0;
        } else if ($("#hold_temp").hasClass('btn-success')) {
            hold_th = 1;
        } else {
            hold_th = 2;
        }

        if (tmode == 'HEAT') {
            var values = {
                "thermostat_mode": tmode,
                "fan_mode": fmode,
                "heat_setpoint": parseFloat(heat_setpoint),
                "device_info": device_info,
                "override": override_th,
                "hold":hold_th
            };
        } else if (tmode == 'COOL') {
            var values = {
                "thermostat_mode": tmode,
                "fan_mode": fmode,
                "cool_setpoint": parseFloat(cool_setpoint),
                "device_info": device_info,
                "override": override_th,
                "hold":hold_th
            };
        } else {
            var values = {
                "thermostat_mode": tmode,
                "fan_mode": fmode,
                "device_info": device_info,
                "override": override_th,
                "hold":hold_th
            };
        }

    } else {
        if (tmode == 'HEAT') {
            var values = {
                "thermostat_mode": tmode,
                "fan_mode": fmode,
                "heat_setpoint": parseFloat(heat_setpoint),
                "device_info": device_info,
                "override": override_th
            };
        } else if (tmode == 'COOL') {
            var values = {
                "thermostat_mode": tmode,
                "fan_mode": fmode,
                "cool_setpoint": parseFloat(cool_setpoint),
                "device_info": device_info,
                "override": override_th
            };
        } else {
            var values = {
                "thermostat_mode": tmode,
                "fan_mode": fmode,
                "device_info": device_info,
                "override": override_th
            };
        }
    }
    _values_on_submit = values;
    submit_thermostat_data(values);

});

    function submit_thermostat_data(values) {
        var jsonText = JSON.stringify(values);
        console.log(jsonText);
        $.ajax({
              url : '/submitdata3m50/',
              type: 'POST',
              data: jsonText,
              dataType: 'json',
              success : function(data) {
                wifi3m50_update = data.update_number;
                /*wifi_3m50_data_updated(wifi3m50_update);
                $('.bottom-right').notify({
                    message: { text: 'Your thermostat settings will be updated shortly' },
                    type: 'blackgloss'
                  }).show(); */
              },
              error: function(data) {
                  submit_thermostat_data(values);
                  $('.bottom-right').notify({
                        message: { text: 'Something went wrong when submitting the thermostat data. Please try again.' },
                        type: 'blackgloss',
                      fadeOut: { enabled: true, delay: 5000 }
                    }).show();
              }
		 });
    }

});