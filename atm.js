var atm = atm || {}; //Gotta learn to namespace some time

atm.deposit1 = function() {
 //WARNING: HERE BE BRACKETS. Test input for non-numbers
  if(isNaN(parseInt($('#amount1').val()))) {
    $('#amount1').val('');
    return;
  }
  var balance = parseInt($('#balance1').text().split('$')[1]);
  balance = balance + parseInt($('#amount1').val());
  $('#balance1').text('$'+balance);
  $('#amount1').val('');
}
atm.deposit2 = function() {
  if(isNaN(parseInt($('#amount2').val()))) {
    $('#amount2').val('');
    return;
  }
  var balance = parseInt($('#balance2').text().split('$')[1]);
  balance = balance + parseInt($('#amount2').val());
  $('#balance2').text('$'+balance);
  $('#amount2').val('');
}
atm.withdraw1 = function() {
  if(isNaN(parseInt($('#amount1').val()))) {
    $('#amount1').val('');
    return;
  }
  var balance = parseInt($('#balance1').text().split('$')[1]);
  if(balance - parseInt($('#amount1').val()) < 0) {
  $('#amount1').val('');
    return;
  } else {
    balance = balance - parseInt($('#amount1').val());
  }
  $('#balance1').text('$'+balance);
  $('#amount1').val('');
}
atm.withdraw2 = function() {
  if(isNaN(parseInt($('#amount2').val()))) {
    $('#amount2').val('');
    return;
  }
  var balance = parseInt($('#balance2').text().split('$')[1]);
  if(balance - parseInt($('#amount2').val()) < 0) {
  $('#amount2').val('');
    return;
  } else {
    balance = balance - parseInt($('#amount2').val());
  }
  $('#balance2').text('$'+balance);
  $('#amount2').val('');
}
atm.setupListeners = function() {
  $('#deposit1').on('click', atm.deposit1);
  $('#deposit2').on('click', atm.deposit2);
  $('#withdraw1').on('click', atm.withdraw1);
  $('#withdraw2').on('click', atm.withdraw2);
}

$(document).ready(function(){
  atm.setupListeners();
})