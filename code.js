$(document).ready(function(){

function switcher(clist, i) {
	i = 0;
	this.Next = function() {
		hide_current();
		show_next();
	}

	var hide_current = function() {
		if(clist){
			clist[i].style.visibility = "hidden";
			i++;
		}
	}

	var show_next = function() {
		if(clist){
			if(i == (clist.length)) {
				i = 0;
			}
			clist[i].style.visibility = "visible";
		}
	}
}


  var hat = $(".hat");
  var hair = $(".hair");
  var shirts = $(".shirt");
  var pants = $(".pant");
  var shoe = $(".shoe");

  var hat_picker = new switcher(hat);
  document.getElementById("hat_button").onclick = function() {hat_picker.Next(); };

  var hair_picker = new switcher(hair);
  document.getElementById("hair_button").onclick = function() {hair_picker.Next(); };

	var shirt_picker = new switcher(shirts);
	document.getElementById("shirt_button").onclick = function() {shirt_picker.Next(); };

	var pants_picker = new switcher(pants);
	document.getElementById("pant_button").onclick = function() {pants_picker.Next(); };

  var shoe_picker = new switcher(shoe);
  document.getElementById("shoe_button").onclick = function() {shoe_picker.Next(); };
});


  $("#shirt_button").click(function(){
  $("#shirt-menu").css("visibility", "visible"); });
