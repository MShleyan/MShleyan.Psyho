
$("#sendMail").on("click",function(){
	
var name= $("#namejs").val().trim();
var phone= $("#phonejs").val().trim();

if(name == ""){
	$("#errorMess").text("Введите имя");
	return false;
}
if(phone == ""){
	$("#errorMess").text("Введите номер телефона");
	return false;
}
$("errorMess").text("");


$.ajax({
url: 'php/message.php',
type: 'POST',
cache: false,
data: {'name':name, 'phone': phone},
dataType: 'html',
beforeSend: function(){
	$("#sendMail").prop("disabled", true);
},
success: function(data){
if(data!=true){
	alert("Были ошибки сообщение не отправлено");
}else $("#mailForm").trigger("reset");
$("#sendMail").prop("disabled", false);
}
});
});