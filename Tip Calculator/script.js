document.getElementById("tip-form").onchange = function () {
  var bill = Number(document.getElementById("billTotal").value);
  
  var tip = document.getElementById("tipInput").value;
  document.getElementById("tipOutput").innerHTML = `${tip}%`;
  
  var tipAmount = document.getElementById("tipAmount");
  var totalBillWithTip = document.getElementById("totalBill");
  
  var tipValue = bill * (tip / 100);
  var finalBill = bill + tipValue;
  
  tipAmount.value = tipValue.toFixed(2);
  totalBillWithTip.value = finalBill.toFixed(2);

  document.getElementById("results").style.display = "block";
};
