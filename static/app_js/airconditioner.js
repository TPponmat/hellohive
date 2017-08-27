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
             str = str + "<li><i class='fa fa-angle-right'></i><a href='#'<span>Airconditioner</span></li><a></li>";
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
function setColor(color, Human) {
    var fan = 1;
    console.log(this.id);
    if (this.id = "device_fs_auto") {
        fan = 0;
    } else if (this.id = "device_fs_auto") {
        fan = 1;

    } else if (this.id = "device_fs_low") {
        fan = 1;

    } else if (this.id = "device_fs_medium") {
        fan = 1;

    } else if (this.id = "device_fs_medium") {
        fan = 1;

    }
}


function color() {
        console.log("color was change")


}
$( document ).ready(function() {
    $.csrftoken();
    pb_update()
    startTime();
    setValue();
    //renderChart();
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
        test_values["device_info"] = ["999", "airconditioner", mac_address];
        //alert(test_values['stautss']);
        submit_air_data(test_values);
    });
    $('.btc').on("click", function () {
        console.log(this.id);
    });
    $('.device_fs').on("click", function () {
        $('.device_fs').addClass( "btn-outline" );
        console.log(this.id);
        var element = this.id;
        var fs = '';
        $("#" + element ).removeClass( "btn-outline" );
        //console.log("Powr SW");
        var test_values = {};
        if (element == 'device_fs_auto')
        {
            fs = "0" ;

         } else if (element == 'device_fs_low')
         {
            fs = "1" ;
         } else if (element == 'device_fs_medium')
         {
             fs = "2" ;

         } else if (element == 'device_fs_high')
         {
            fs = "3" ;
         } else if (element == 'device_fs_turbo')
         {
            fs = "4" ;
         }
         test_values["status"] = "ON" ;
        test_values["fan_speed"] = fs ;
        test_values["device_info"] = ["999", "airconditioner", mac_address];
        //alert(test_values['stautss']);
        console.log(test_values);
        submit_air_data(test_values);
        $('#device_power_disp').prop("disabled", true);
        $('.device_fs').prop("disabled", true);
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
        test_values["device_info"] = ["999", "airconditioner", mac_address];
        //alert(test_values['stautss']);
        submit_air_data(test_values);
    });
    $('.device_mode').on("click", function () {
        $('.device_mode').addClass( "btn-outline" );
        console.log(this.id);
        var element = this.id;
        var mode = '';
        $("#" + element ).removeClass( "btn-outline" );
        //console.log("Powr SW");
        var test_values = {};
        if (element == 'device_mode_cool')
        {
            mode = "0" ;

         } else if (element == 'device_mode_fan')
         {
            mode = "Fan" ;
         } else if (element == 'device_mode_dry')
         {
             mode = "Dry" ;

         } else if (element == 'device_mode_auto')
         {
            mode = "Auto" ;
         }
        test_values["status"] = "ON" ;
        test_values["mode"] = mode ;
        test_values["device_info"] = ["999", "airconditioner", mac_address];
        //alert(test_values['stautss']);
        submit_air_data(test_values);
    });
});

    var ws = new WebSocket("ws://" + window.location.host + "/socket_airconditioner");

     ws.onopen = function () {
         ws.send("WS Air connected");
         console.log("open Air Socket");
     };


     ws.onmessage = function (event) {
         var _data = event.data.trim();
         _data = $.parseJSON(_data);
         var topic = _data['topic'];
         var msg = $.parseJSON(_data['message']);
         console.log(msg);

        if (msg['macaddress'] == mac_address){
             if (Is_device_name)
             {

             } else {
                 $('#device_name').html(': ' + msg['device_id']);
                 Is_device_name = true;

             }
             if(Is_temp_lock ){
                 if (parseInt(msg['set_temperature']) == parseInt($('#device_set_temp').text())){
                     $('#device_set_temp').text(msg['set_temperature']);
                     Is_temp_lock = false;
                 }

             } else {
                $('#device_set_temp').text(msg['set_temperature']);
             }

              if (msg['status'] == "ON")
             {
                 Is_power_on = true;
                 $('#device_power_disp').html("ON");
                 console.log("Device status:" + msg['status'] );
                 $('.device_fs').prop("disabled", false);
                 $('.device_mode').prop("disabled", false);
                 $('.device_set_temp').prop("disabled", false);
                 $('#device_power_disp').prop("disabled", false);


             } else if (msg['status'] == "OFF")
             {
                 console.log("Device status:" + msg['status'] );
                 Is_power_on = false;
                 $('#device_power_disp').html("OFF");
                 $('.device_fs').prop("disabled", true);
                 $('.device_mode').prop("disabled", true);
                 $('.device_set_temp').prop("disabled", true);
                 $('#device_power_disp').prop("disabled", false);
             }
             if (msg['mode'] == "Cool")
             {
                 $('.device_mode').addClass( "btn-outline" );
                 $('#device_mode_cool').removeClass( "btn-outline" );
             } else if (msg['mode'] == "Fan")
             {
                 $('.device_mode').addClass( "btn-outline" );
                 $('#device_mode_fan').removeClass( "btn-outline" );
             } else if (msg['mode'] == "Dry")
             {
                 $('.device_mode').addClass( "btn-outline" );
                 $('#device_mode_dry').removeClass( "btn-outline" );
             } else if (msg['mode'] == "Auto")
             {
                 $('.device_mode').addClass( "btn-outline" );
                 $('#device_mode_auto').removeClass( "btn-outline" );
             }
             if (msg['fan_speed'] == 0)
             {
                 $('.device_fs').addClass( "btn-outline" );
                 $('#device_fs_auto').removeClass( "btn-outline" );
             } else if (msg['fan_speed'] == 1)
             {
                 $('.device_fs').addClass( "btn-outline" );
                 $('#device_fs_low').removeClass( "btn-outline" );
             } else if (msg['fan_speed'] == 2)
             {
                 $('.device_fs').addClass( "btn-outline" );
                 $('#device_fs_medium').removeClass( "btn-outline" );
             } else if (msg['fan_speed'] == 3)
             {
                 $('.device_fs').addClass( "btn-outline" );
                 $('#device_fs_high').removeClass( "btn-outline" );
             } else if (msg['fan_speed'] == 4)
             {
                 $('.device_fs').addClass( "btn-outline" );
                 $('#device_fs_turbo').removeClass( "btn-outline" );
             }
        }
         //console.log(_data['message'])

     };


function submit_air_data(values) {
    // topic ="ui/agent/lighting/update/bemoss/999/2HUE0017881cab4b";
    console.log("Method  " +  values.method + "  Vales " + values.value);

    var jsonText = JSON.stringify(values);
    console.log(jsonText);
	$.ajax({
		  url : '/update_airconditioner/',
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
			  	    type: 'blackgloss'
			  	}).show();
		  }
		 });
}

