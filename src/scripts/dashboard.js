var chosen=0;
var chosenTask=0;
var coordinatorArr="";

function addCoordinator() {
    var newcoordinator = document.getElementById("userL");
    var coordinatorList = document.getElementById("userList");
    
    if (newcoordinator.value == "") {
        alert("Nama harus dimasukkan");
        return false;
    }
	coordinatorArr+=newcoordinator.value+",";
    coordinatorList.innerHTML += "<li>" + newcoordinator.value + "</li> ";
    newcoordinator.value = "";
	coordinatorIndex++;
    
    return false;
}

function updateAddButtonVisibility() {
    var elmt = document.getElementById('addTask');
    elmt.style.display = 'inline-block';
}

function setChosen(str)
{
	chosen=str;
}

function setChosenT(str)
{
	chosenTask=str;
}

function NewKategori() {
    var q = document.getElementById('txtNewKategori').value;
	if(q=="")
	{
		return false;
	}
	
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		document.getElementById("nama_k").innerHTML=xmlhttp.responseText;
		}
	  }
	xmlhttp.open("GET","ajax/createkategori.php?q="+q+"&Arr="+coordinatorArr,true);
	xmlhttp.send();
	
	return false;
}

function showCoordinator()
{
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		document.getElementById("user").innerHTML=xmlhttp.responseText;
		}
	  }
	xmlhttp.open("GET","ajax/assigneeList.php",true);
	xmlhttp.send();
}

function updateStatus(n,str) {
    if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		document.getElementById("stats").innerHTML=xmlhttp.responseText;
		}
	  }
	xmlhttp.open("GET","ajax/updateStatus.php?q="+str+"&n="+n,true);
	xmlhttp.send();
	
	return false;
}

function NewTask() {
    window.location = "createtugas.php";
}

function deleteCategory()
{
	if(chosen!=0)
	{
		window.location = "deleteCat.php?q="+chosen;
	}
}

function deleteTask()
{
	if(chosenTask!=0)
	{
		window.location = "deleteTask.php?q="+chosenTask;
	}
}

function loadtugas(str)
{
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		document.getElementById("tugasT").innerHTML=xmlhttp.responseText;
		}
	  }
	xmlhttp.open("GET","ajax/tugas.php?q="+str,true);
	xmlhttp.send();
	
	return false;
}