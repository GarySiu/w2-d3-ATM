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
  $('#balance2').text('$'+$('#amount2').val());
  $('#amount2').val('');
}
atm.withdraw1 = function() {
  var balance = parseInt($('#balance1').text().split('$')[1])
  balance = balance - $('#amount1').val();
  $('#balance1').text('$'+balance);
  $('#amount1').val('');
}
atm.validDeposit1 = function() {
  }

atm.setupListeners = function() {
  $('#deposit1').on('click', atm.deposit1);
  $('#deposit2').on('click', atm.deposit2);
  $('#withdraw1').on('click', atm.withdraw1);
}

$(document).ready(function(){
  atm.setupListeners();
})