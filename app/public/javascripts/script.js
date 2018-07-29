// Create the "close, paid, member" buttons and append them to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  var paid = document.createElement("PAID");
  var txt2 = document.createTextNode("\u00D8");
  var member = document.createElement("MEMBER");
  var txt3 = document.createTextNode("M");
  span.className = "close";
  paid.className = "paid";
  member.className = "member";
  span.appendChild(txt);
  paid.appendChild(txt2);
  member.appendChild(txt3);
  myNodelist[i].appendChild(span);
  myNodelist[i].appendChild(paid);
  myNodelist[i].appendChild(member);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  var paid = document.createElement("PAID");
  var txt2 = document.createTextNode("\u00D8");
  var member = document.createElement("MEMBER");
  var txt3 = document.createTextNode("nM");
  if(document.getElementById("memberBox").checked)txt3 = document.createTextNode("M");
  span.className = "close";
  paid.className = "paid";
  member.className = "member";
  span.appendChild(txt);
  paid.appendChild(txt2);
  member.appendChild(txt3);
  myNodelist[i].appendChild(span);
  myNodelist[i].appendChild(paid);
  myNodelist[i].appendChild(member);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}