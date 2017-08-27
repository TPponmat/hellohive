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
            var str ="<li><i class='fa fa-angle-right'></i><a href='#'>Statistics</a></li>";
             str = str + "<li><i class='fa fa-angle-right'></i><a href='#'<span>Load Consumption</span></li><a></li>";
             $('.page-breadcrumb').append(str);
         }




function color() {
        console.log("color was change")


}

var week_p ={};
var month_p = {};
var year_p = {};
var week_b ={};
var month_b = {};
var year_b = {};
var sum_week_p = {};
var sum_month_p = {};
var sum_year_p = {};
var sum_week_b ={};
var sum_month_b = {};
var sum_year_b = {};
week_p['name'] = "Grid";
week_p['name'] = "Solar";
week_p['L'] = [3, 2.8, 1.2 ,0, 0, 0, 0 ];
week_p['A'] = [75.2, 7.2, 35.5, 0, 0, 0, 0];
week_p['P'] = [19, 17.6, 9.9, 0, 0, 0, 0];
week_p['E'] = [9.5, 10.2, 9, 0, 0, 0, 0];
week_b['L'] = [9, 8.4, 3.6,0, 0, 0, 0];
week_b['P'] = [57, 52.8, 29.7, 0, 0, 0, 0];
week_b['A'] = [225.6, 216, 106.5, 0, 0, 0, 0];
week_b['E'] = [28.5, 30.6, 27, 0, 0, 0, 0];
month_p['L'] = [17.3, 17.8, 18.7, 17];
month_p['A'] = [471.9, 506.3, 458.4, 457.5];
month_p['P'] = [119, 123.5, 124.8, 113.1];
month_p['E'] = [73.3, 63.2, 67.8, 75.3];
month_b['L'] = [51.9, 53.4, 56.1, 51];
month_b['A'] = [1415.7, 1518.9, 1375.2, 1372.5];
month_b['P'] = [357, 370.5, 374.4];
month_b['E'] = [219.9,189.6,203.4,225.9];

year_p['L'] = [0,0,0,0,0,0,0,35.3,70.6,0,0,0];
year_p['A'] = [0,0,0,0,0,0,0,947,1893.9,0,0,0];
year_p['P'] = [0,0,0,0,0,0,0,240.1,480.2,0,0,0];
year_p['E'] = [0,0,0,0,0,0,0,139.7,279.4,0,0,0];
year_b['L'] = [0,0,0,0,0,0,0,105.9,211.8,0,0,0];
year_b['A'] = [0,0,0,0,0,0,0,2841,5681.7,0,0,0];
year_b['P'] = [0,0,0,0,0,0,0,720.3,1440.6,0,0,0];
year_b['Er'] = [0,0,0,0,0,0,0,419.1,838.2,0,0,0];

sum_week_p['All'] = [88.1,264.4];
sum_week_p['Lighting'] = [1.762,7.932 ];
sum_week_p['A/C'] = [52.86,132.2];
sum_week_p['Plug'] = [26.43,74.032];
sum_week_p['EV Car'] = [7.048,50.236];
sum_month_p['All'] = [90.7,680.9,2723.9];
sum_month_p['Lighting'] = [4.535,27.236,217.912];
sum_month_p['A/C'] = [54.42,428.967,1443.667];
sum_month_p['Plug'] = [22.675,149.798,762.692];
sum_month_p['EV Car'] = [9.07,74.899,299.629];
sum_year_p['All'] = [90.7,680.9,2723.2,4085.5];
sum_year_p['Lighting'] = [7.256,20.427,136.16,163.42];
sum_year_p['A/C'] = [48.071,408.54,1497.76,2369.59];
sum_year_p['Plug'] = [25.396,204.27,544.64,1021.375];
sum_year_p['EV Car'] = [9.977,47.663,544.64,531.115];

sum_week_b['All'] = [231,696];
sum_week_b['Lighting'] = [4.62,20.88];
sum_week_b['A/C'] = [138.60,348.00];
sum_week_b['Plug'] = [69.30,194.88];
sum_week_b['EV Car'] = [18.48,132.24];
sum_month_b['All'] = [186.9,1403.4,5614.5];
sum_month_b['Lighting'] = [9.35,56.14,449.16];
sum_month_b['A/C'] = [112.14,884.14,2975.69];
sum_month_b['Plug'] = [46.73,308.75,1572.06];
sum_month_b['EV Car'] = [18.69,154.37,617.60];
sum_year_b['All'] = [186.9,1401.6,561.3,8423.7];
sum_year_b['Lighting'] = [14.95,42.05,28.07,336.95];
sum_year_b['A/C'] = [99.06,840.96,308.72,4885.75];
sum_year_b['Plug'] = [52.33,420.48,112.26,2105.93];
sum_year_b['EV Car'] = [20.56,98.11,112.26,1095.08];
var toggle_week = week_p;
var toggle_month = month_p;
var toggle_year =year_p;
var toggle_unit = "kWh";
$( document ).ready(function() {
   // $.csrftoken();
    pb_update();
    startTime();
    setTblsummary(sum_week_p, sum_month_p, sum_year_p);
    renderBarDays(toggle_week['L'], toggle_week['A'], toggle_week['P'], toggle_week['E'],toggle_unit);
    renderBarWeeks(toggle_month['L'], toggle_month['A'], toggle_month['P'], toggle_month['E'],toggle_unit);
    renderBarMonths(toggle_year['L'], toggle_year['A'], toggle_year['P'], toggle_year['E'],toggle_unit);
    $('.btn-sm').on("click", function () {
        var text = $.trim($(this).text());
        //alert($(this).text());
        if ((text) == "kWh"){
            toggle_week = week_p;
            toggle_month = month_p;
            toggle_year = year_p;
            toggle_unit = text;
            renderBarDays(week_p['L'], week_p['A'], week_p['P'], week_p['E'],text);
            renderBarWeeks(month_p['L'], month_p['A'], week_p['P'], week_p['E'],text);
            renderBarMonths(year_p['L'], year_p['A'], week_p['P'], week_p['E'],text);
             setTblsummary(sum_week_p, sum_month_p, sum_year_p);
        }else if (text == "Baht"){
           // alert ('Payyoh"s domond');
            toggle_week = week_b;
            toggle_month = month_b;
            toggle_year = year_b;
            toggle_unit = text;
            renderBarDays(week_b['L'], week_b['A'], week_b['P'], week_b['E'],text);
            renderBarWeeks(month_b['L'], month_b['A'], month_b['P'], month_b['E'],text);
            renderBarMonths(year_b['L'], year_b['A'], year_b['P'], year_b['E'],text);
            setTblsummary(sum_week_b, sum_month_b, sum_year_b);
        }
    });

});

        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
          if($(e.target).attr('id') == 't7d')
          {
            renderBarDays(toggle_week['L'], toggle_week['A'], toggle_week['P'], toggle_week['E'],toggle_unit);


          }
          else if($(e.target).attr('id') == 't4w')
          {
            renderBarWeeks(toggle_month['L'], toggle_month['A'], toggle_month['P'], toggle_month['E'],toggle_unit);
          }
          else if($(e.target).attr('id') == 't12m')
          {
            renderBarMonths(toggle_year['L'], toggle_year['A'], toggle_year['P'], toggle_year['E'],toggle_unit);
          }
          //window.dispatchEvent(new Event('resize'));
        });
              function renderBarDays(trendG, trendS , trendT, trendF ,unit) {
              $('#container').highcharts({
              chart: {
              type: 'column',
              spacingBottom: 50
              },

              credits: {
              enabled: false
              },
              title: {
                text: null
              },

              xAxis: {
              categories: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri','Sat','Sun']
              },
              yAxis: {
              min: 0,
              title: {
                  text: unit
              }
              },
              stackLabels: {
                enabled: false,
                style: {
                  fontWeight: 'bold',
                  color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
              },
              legend: {
              align: 'center',
              x: -50,
              verticalAlign: 'bottom',
              y: 35,
              floating: true,
              backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
              borderColor: '#CCC',
              borderWidth: 1,
              shadow: false
              },
              tooltip: {
              headerFormat: '<b>{point.x}</b><br/>',
              pointFormat: '{series.name}: {point.y} kWh<br/>Total: {point.stackTotal} kWh'
              },
              plotOptions: {
              column: {
                stacking: 'normal',
                dataLabels: {
                  enabled: false,
                  color: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                  style: {
                      textShadow: '0 0 3px black'
                  }
                  }
                }
              },
                    series: [{
                      name: 'Lighting',
                      data: trendG, color:'#EF4836'
                    }, {
                      name: 'A/C',
                      data: trendS, color:'#3598DC'
                    }, {
                      name: 'Plug',
                      data: trendT, color:'#26C281'
                    }, {
                      name: 'EV Car',
                      data: trendF, color:'#8E44AD'
                    },]




            });


              }
function renderBarWeeks(trendG, trendS , trendT, trendF ,unit) {
      $('#container2').highcharts({
        chart: {
          type: 'column',
          spacingBottom: 50
        },

        credits: {
          enabled: false
        },

        title: {
          text: null
        },

        xAxis: {
          categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
        },
        yAxis: {
          min: 0,
          title: {
            text: unit
          },
          stackLabels: {
            enabled: false,
            style: {
              fontWeight: 'bold',
              color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
          }
        },
        legend: {
          align: 'center',
          x: -50,
          verticalAlign: 'bottom',
          y: 35,
          floating: true,
          backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
          borderColor: '#CCC',
          borderWidth: 1,
          shadow: false
        },
        tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y} kWh<br/>Total: {point.stackTotal} kWh'
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: false,
              color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
              style: {
                textShadow: '0 0 3px black'
              }
            }
          }
        },

                    series: [{
                      name: 'Lighting',
                      data: trendG, color:'#EF4836'
                    }, {
                      name: 'A/C',
                      data: trendS, color:'#3598DC'
                    }, {
                      name: 'Plug',
                      data: trendT, color:'#26C281'
                    }, {
                      name: 'EV Car',
                      data: trendF, color:'#8E44AD'
                    },]
      });
}
function renderBarMonths(trendG, trendS , trendT, trendF ,unit) {
      $('#container3').highcharts({
          chart: {
          type: 'column',
          spacingBottom: 50
          },

          credits: {
          enabled: false
          },
          title: {
            text: null
          },

          xAxis: {
          categories: ['Jan', 'Fab', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
          },
          yAxis: {
          min: 0,
          title: {
            text: unit
          },
          stackLabels: {
            enabled: false,
            style: {
              fontWeight: 'bold',
              color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
          }
          },
          legend: {
          align: 'center',
          x: -50,
          verticalAlign: 'bottom',
          y: 35,
          floating: true,
          backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
          borderColor: '#CCC',
          borderWidth: 1,
          shadow: false
          },
          tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y} kWh<br/>Total: {point.stackTotal} kWh'
          },
          plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: false,
              color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
              style: {
                textShadow: '0 0 3px black'
              }
            }
          }
          },

                    series: [{
                      name: 'Lighting',
                      data: trendG, color:'#EF4836'
                    }, {
                      name: 'A/C',
                      data: trendS, color:'#3598DC'
                    }, {
                      name: 'Plug',
                      data: trendT, color:'#26C281'
                    }, {
                      name: 'EV Car',
                      data: trendF, color:'#8E44AD'
                    },]
      });
          }
function setTblsummary(tbl_week, tbl_month, tbl_year) {
    //--- set TBL week
    //$('#tab_1_1 table.table tr:eq(1)').text();
    var str_tbl1 = "";
    $.each(tbl_week, function(key,val){
        //console.log(val[0]);
        str_tbl1  = str_tbl1  + "<tr><td>" + key + "</td><td>" + val[0] + "</td><td>" + val[1] + "</td></tr>";
    });
    $('#tab_1_1 table.table tbody').html(str_tbl1);
    var head_tbl1 = "";
    //if (toggle_unit == "kWh"){
        head_tbl1 = "<tr><th class ='text-center'></th><th class ='text-center'>Avg. Daily (" + toggle_unit +")</th>";
        head_tbl1 = head_tbl1 + "<th class ='text-center'>Total Consumption (" +  toggle_unit + ")</th></tr>";
         $('#tab_1_1 table.table thead').html(head_tbl1);
  //  }else if (toggle_unit == "Baht") {

   // }
    //--- set TBL month
    var str_tbl2 = "";
    $.each(tbl_month, function(key,val){
        //console.log(val[0]);
        str_tbl2  = str_tbl2  + "<tr><td>" + key + "</td><td>" + val[0] + "</td><td>" + val[1] + "</td><td>" + val[2] + "</td></tr>";
    });
    $('#tab_1_2 table.table tbody').html(str_tbl2);
    var head_tbl2 = "";
    //if (toggle_unit == "kWh"){
        head_tbl2 = "<tr><th class ='text-center'></th><th class ='text-center'>Avg. Daily (" + toggle_unit +")</th>";
        head_tbl2 = head_tbl2 + "<th class ='text-center'>Avg. Weekly (" +  toggle_unit + ")</th>";
        head_tbl2 = head_tbl2 + "<th class ='text-center'>Total Consumption (" +  toggle_unit + ")</th></tr>";
         $('#tab_1_2 table.table thead').html(head_tbl2);
    var str_tbl3 = "";
    $.each(tbl_year, function(key,val){
        //console.log(val[0]);
        str_tbl3  = str_tbl3  + "<tr><td>" + key + "</td><td>" + val[0] + "</td><td>" + val[1] ;
        str_tbl3  = str_tbl3  + "</td><td>" + val[2] + "</td><td>" + val[3] + "</td></tr>";
    });
    $('#tab_1_3 table.table tbody').html(str_tbl3);
    var head_tbl3 = "";
    //if (toggle_unit == "kWh"){
        head_tbl3 = "<tr><th class ='text-center'></th><th class ='text-center'>Avg. Daily (" + toggle_unit +")</th>";
        head_tbl3 = head_tbl3 + "<th class ='text-center'>Avg. Weekly (" +  toggle_unit + ")</th>";
        head_tbl3 = head_tbl3 + "<th class ='text-center'>Avg. Monthly (" +  toggle_unit + ")</th>";
        head_tbl3 = head_tbl3 + "<th class ='text-center'>Total Consumption (" +  toggle_unit + ")</th></tr>";
         $('#tab_1_3 table.table thead').html(head_tbl3);
}





