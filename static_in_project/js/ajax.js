window.onload = initAll;

var checkButton;
function initAll(){
   checkButton =  document.getElementById('check');
   checkButton.onclick = checkDisease;
}

function checkDisease(){
    var age      = document.getElementById('age').value;
    var sex      = document.getElementById('sex').value;
    var cp       = document.getElementById('cp' ).value;
    var trestbps = document.getElementById('trestbps').value;
    var chol     = document.getElementById('chol').value;
    var fbs      = document.getElementById('fbs').value;
    var restecg  = document.getElementById('restecg').value;
    var thalach  = document.getElementById('thalach').value;
    var exang    = document.getElementById('exang').value;
    var oldpeak  = document.getElementById('oldpeak').value;
    var slope    = document.getElementById('slope').value;
    var ca       = document.getElementById('ca').value;
    var thal     = document.getElementById('thal').value;

    // alert(age + sex + cp + trestbps + chol + fbs + restecg + thalach + exang + oldpeak + slope + ca + thal);

    if (age != "" || sex != "" || cp != "" || trestbps != "" || chol != "" || fbs != "" || restecg != "" || thalach != "" || exang != "" || oldpeak != "" || slope != "" || ca != "" || thal != "" ){
      $('#process').html('<img src="/static/images/preds/heartbeat.gif"> Processing Your Data....');
    }
    else{
      alert("Oh! You Seem to be in a hurry...Please Fill The Form First!!")
    }

    var url = '/predictDisease?age='+age+'&sex='+sex+'&cp='+cp+'&trestbps='+trestbps+'&chol='+chol+'&fbs='+fbs+'&restecg='+restecg+'&thalach='+thalach+'&exang='+exang+'&oldpeak='+oldpeak+'&slope='+slope+'&ca='+ca+'&thal='+thal;
    //  alert(url);
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = this.responseText;
      // alert(response);
      // document.getElementById("result").innerHTML = response;
      if (response == "true"){
        //  alert("true");
          var data = "/static/images/preds/blue.png";
          $("#heartimg").attr("src", data);
          $("#hint").html('Result :-');
          $("#message").html('OOPS!! Your Heart is At RISK !!');
          $('#process').html('<H3>Please Consult Your Doctor. Take Care</H3>');
      }
      else {
        //  alert("false");
        var data = "/static/images/preds/red.png";
        $("#heartimg").attr("src", data);
        $("#hint").html('Result :-');
        $("#message").html('Congratulations!! You have got a HEALTHY HEART');
        $('#process').html('<H3>Stay Fit</H3>');
      }
    }
  };
  req.open("GET", url, true);
  req.send();
}