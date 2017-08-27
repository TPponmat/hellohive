var FormWizard = function () {


    return {
        //main function to initiate the module
        init: function () {
            if (!jQuery().bootstrapWizard) {
                return;
            }

            function format(state) {
                if (!state.id) return state.text; // optgroup
                return "<img class='flag' src='../../assets/global/img/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
            }

            var form = $('#submit_form');
            var error = $('.alert-danger', form);
            var success = $('.alert-success', form);

            var displayConfirm = function() {
                $('#tab4 .form-control-static', form).each(function(){
                    var input = $('[name="'+$(this).attr("data-display")+'"]', form);
                    if (input.is(":radio")) {
                        input = $('[name="'+$(this).attr("data-display")+'"]:checked', form);
                    }
                    if (input.is(":text") || input.is("textarea")) {
                        $(this).html(input.val());
                    } else if (input.is("select")) {
                        $(this).html(input.find('option:selected').text());
                    } else if (input.is(":radio") && input.is(":checked")) {
                        $(this).html(input.attr("data-title"));
                    } else if ($(this).attr("data-display") == 'payment[]') {
                        var payment = [];
                        $('[name="payment[]"]:checked', form).each(function(){
                            payment.push($(this).attr('data-title'));
                        });
                        $(this).html(payment.join("<br>"));
                    }
                });
            }

            var handleTitle = function(tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                // set wizard title
                $('.step-title', $('#form_wizard_1')).text('Step ' + (index + 1) + ' of ' + total);
                // set done steps
                jQuery('li', $('#form_wizard_1')).removeClass("done");
                var li_list = navigation.find('li');
                for (var i = 0; i < index; i++) {
                    jQuery(li_list[i]).addClass("done");
                }

                if (current == 1) {
                    $('#form_wizard_1').find('.button-previous').hide();
                } else {
                    $('#form_wizard_1').find('.button-previous').show();
                }

                if (current >= total) {
                    $('#form_wizard_1').find('.button-next').hide();
                    $('#form_wizard_1').find('.button-submit').show();
                    displayConfirm();
                } else {
                    $('#form_wizard_1').find('.button-next').show();
                    $('#form_wizard_1').find('.button-submit').hide();
                }
                App.scrollTo($('.page-title'));
            }

            // default form wizard
            $('#form_wizard_1').bootstrapWizard({
                'nextSelector': '.button-next',
                'previousSelector': '.button-previous',
                onTabClick: function (tab, navigation, index, clickedIndex) {
                    return false;

                    success.hide();
                    error.hide();
                    if (form.valid() == false) {
                        return false;
                    }

                    handleTitle(tab, navigation, clickedIndex);
                },
                onNext: function (tab, navigation, index) {
                    if(index == 1) {
                      selectedAppliance = event.target.id;
                      body = "";


                      function checkSelect(model){
                        return model.type == selectedAppliance;
                      }

                      onlySelect = modelList.filter(checkSelect);

                      function addModel(model) {
                        id = model.name.replace(" ","_");
                        body += '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">\
                            <div class="portlet light portlet-fit bordered">\
                              <div class="portlet-body">\
                                  <div class="mt-element-overlay">\
                                      <div class="row">\
                                          <div class="col-md-12">\
                                            <div class="mt-overlay-3">\
                                                <img src="'+model.image+'" />\
                                                <div class="mt-overlay">\
                                                    <a id="'+id+'" class="mt-info button-next" href="javascript:;">' + model.name + '</a>\
                                                </div>\
                                            </div>\
                                          </div>\
                                      </div>\
                                  </div>\
                              </div>\
                            </div>\
                        </div>';
                      }

                      onlySelect.forEach(addModel);

                      $("#modelListBody").html(body);
                    }
                    else if(index == 2) {
                      selectedAppliance = event.target.id;

                      body = "";


                      function checkSelect(model){
                        return model.name.replace(" ","_") == selectedAppliance;
                      }


                      onlySelect = modelList.filter(checkSelect);

                      function addSetup(manual, index) {
                        body += '<div class="mt-element-ribbon bg-grey-steel">\
                                <div class="ribbon ribbon-border-hor ribbon-clip ribbon-color-success uppercase">\
                                    <div class="ribbon-sub ribbon-clip"></div> Step '+(index+1)+' </div>\
                                <p class="ribbon-content"> '+manual+' </p>\
                            </div>';
                      }

                      onlySelect[0].manual.forEach(addSetup);
                      $("#setupBody").html(body);

                      /*if(event.target.id == "belkin") {
                        $(".manual").hide();
                        $("#manual2").show();
                      }
                      else if(event.target.id == "Philips_hue") {
                        $(".manual").hide();
                        $("#manual1").show();
                      }
                      else {
                        setTimeout(function() {
                          $('#form_wizard_1').bootstrapWizard("next");
                        }, 100);
                      }*/
                    }
                    else if (index == 3) {
                      var data = [
                                    [
                                        "Tiger Nixon",
                                        "23:45:67:89",
                                        '<a id="23_45_67_89" class="btn green btn-xs button-next" href="javascript:;"> Approve </a>'
                                    ],
                                    [
                                        "Garrett Winters",
                                        "12:34:56:78",
                                        '<a id="12_34_56_78" class="btn green btn-xs button-next" href="javascript:;"> Approve </a>'
                                    ]
                                ]
                      $('#datatable_ajax').DataTable( {
                          data: data
                      } );

                    }
                    else if (index == 4) {
                      selectedMACAddress = event.target.id.replace("_", ":");
                      
                    }

                    success.hide();
                    error.hide();

                    //if (form.valid() == false) {
                    //    return false;
                    //}

                    handleTitle(tab, navigation, index);
                },
                onPrevious: function (tab, navigation, index) {
                    success.hide();
                    error.hide();

                    handleTitle(tab, navigation, index);
                },
                onTabShow: function (tab, navigation, index) {
                    var total = navigation.find('li').length;
                    var current = index + 1;
                    var $percent = (current / total) * 100;
                    $('#form_wizard_1').find('.progress-bar').css({
                        width: $percent + '%'
                    });
                }
            });

            $('#form_wizard_1').find('.button-previous').hide();
            $('#form_wizard_1 .button-submit').click(function () {
                alert('Finished! Hope you like it :)');
            }).hide();

            //apply validation on select2 dropdown value change, this only needed for chosen dropdown integration.
            $('#country_list', form).change(function () {
                form.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });
        }

    };

}();

jQuery(document).ready(function() {
    FormWizard.init();
});
