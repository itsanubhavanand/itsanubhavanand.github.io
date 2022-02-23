var employeeData;


	

function showEmp1(){
	var j=1;
	var strEmployeeDataTable= "";
	strEmployeeDataTable = '<table class="table table-striped table-hover">';
	strEmployeeDataTable = strEmployeeDataTable + '<thead>';
	strEmployeeDataTable = strEmployeeDataTable + '<tr> <th scope="col">#</th> <th scope="col">EmpId</th> <th scope="col">First</th>  <th scope="col">Place</th> <th scope="col">State</th> </tr>';
	strEmployeeDataTable = strEmployeeDataTable + '</thead>';
	strEmployeeDataTable = strEmployeeDataTable + '<tboday>';
	for(var i=0; i<employeeData.length; i++) {
	strEmployeeDataTable = strEmployeeDataTable + '<tr> <th scope="row">'+(j)+'</th> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].State+'</td> </tr>' ;
     j=j+1;
    }
	 
	strEmployeeDataTable = strEmployeeDataTable + '</tbody>';
	strEmployeeDataTable = strEmployeeDataTable + '</table>' ;
	document.getElementById("place").innerHTML = strEmployeeDataTable ; 
	
}



function showEmp2(){
	var j=1;
	var strEmployeeDataTable= "";
	strEmployeeDataTable = '<table class="table table-striped table-hover">';
	strEmployeeDataTable = strEmployeeDataTable + '<thead>';
	strEmployeeDataTable = strEmployeeDataTable + '<tr> <th scope="col">#</th> <th scope="col">EmpId</th> <th scope="col">First</th>  <th scope="col">Place</th> </tr>';
	strEmployeeDataTable = strEmployeeDataTable + '</thead>';
	strEmployeeDataTable = strEmployeeDataTable + '<tboday>';
	for(var i=0; i<employeeData.length; i=i+2) {
	strEmployeeDataTable = strEmployeeDataTable + '<tr> <th scope="row">'+(j)+'</th> <th scope="row">'+(i+102)+'</th> <td>'+employeeData[i+1].First+'</td> <td>'+employeeData[i+1].Place+'</td> </tr>' ;
     j=j+1;
    }
	  
	strEmployeeDataTable1 = strEmployeeDataTable + '</tbody>';
	strEmployeeDataTable1 = strEmployeeDataTable + '</table>' ;
	
	document.getElementById("place").innerHTML = strEmployeeDataTable ;
}


function showEmp3(){
	var j=1;
	var strEmployeeDataTable= "";
	strEmployeeDataTable = '<table class="table table-striped table-hover">';
	strEmployeeDataTable = strEmployeeDataTable + '<thead>';
	strEmployeeDataTable = strEmployeeDataTable + '<tr> <th scope="col">#</th> <th scope="col">EmpId</th> <th scope="col">First</th>  <th scope="col">Place</th> </tr>';
	strEmployeeDataTable = strEmployeeDataTable + '</thead>';
	strEmployeeDataTable = strEmployeeDataTable + '<tboday>';
	for(var i=0; i<employeeData.length; i=i+2) {
	strEmployeeDataTable = strEmployeeDataTable + '<tr> <th scope="row">'+(j)+'</th> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> </tr>' ;
     j=j+1;
    }
	  
	strEmployeeDataTable1 = strEmployeeDataTable + '</tbody>';
	strEmployeeDataTable1 = strEmployeeDataTable + '</table>' ;
	
	document.getElementById("place").innerHTML = strEmployeeDataTable ;
}


function clear1(){
	
	document.getElementById("place").innerHTML = ""; 
	
}

function fiind(){
		var s = document.getElementById('form1').value;
		Console.log(s);
}


employeeData = [{
  "First": "Ankit",
  "Last" :"Gupta",
  "Place" : "Firojabad",
  "State" : "UP"
},
{
  "First": "Jothilakshami",
  "Last" :"V",
  "Place" : "Rajapalayam",
  "State" : "TN"
},
{
  "First": "Avinash",
  "Last" :"V",
  "Place" : "Kushinagar",
  "State" : "UP"
},
{
  "First": "Vikash",
  "Last" :"V",
  "Place" : "Deoria",
  "State" : "UP"
},
{
  "First": "Rakesh",
  "Last" :"V",
  "Place" : "Bangalore",
  "State" : "kARNATAKA"
},
{
  "First": "Vishakha",
  "Last" :"V",
  "Place" : "Rajapalayam",
  "State" : "TN"
},
{
  "First": "Ravi",
  "Last" :"V",
  "Place" : "Karolbagh",
  "State" : "Delhi"
},
{
  "First": "Jothilakshami",
  "Last" :"V",
  "Place" : "Rajapalayam",
  "State" : "TN"
},
{
  "First": "Vinay",
  "Last" :"V",
  "Place" : "Pune",
  "State" : "Maharashtra"
},
{
  "First": "Dravid",
  "Last" :"V",
  "Place" : "Bangalore",
  "State" : "Karnataka"
}]