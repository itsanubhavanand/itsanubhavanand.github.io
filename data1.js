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
	strEmployeeDataTable = strEmployeeDataTable + '<tr> <th scope="row">'+(j)+'</th> <th scope="row">'+employeeData[i].EmpId+'</th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].State+'</td> </tr>' ;
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
	strEmployeeDataTable = strEmployeeDataTable + '<tr> <th scope="row">'+(j)+'</th> <th scope="row">'+employeeData[i+1].EmpId+'</th> <td>'+employeeData[i+1].First+'</td> <td>'+employeeData[i+1].Place+'</td> </tr>' ;
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
	strEmployeeDataTable = strEmployeeDataTable + '<tr> <th scope="row">'+(j)+'</th> <th scope="row">'+employeeData[i].EmpId+'</th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> </tr>' ;
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
		var s = document.getElementById('num1').value;
		var strEmployeeDataTable= "";
	strEmployeeDataTable = '<table class="table table-striped table-hover">';
	strEmployeeDataTable = strEmployeeDataTable + '<thead>';
	strEmployeeDataTable = strEmployeeDataTable + '<tr> <th scope="col">#</th> <th scope="col">EmpId</th> <th scope="col">First</th>  <th scope="col">Place</th> <th scope="col">State</th> </tr>';
	strEmployeeDataTable = strEmployeeDataTable + '</thead>';
	strEmployeeDataTable = strEmployeeDataTable + '<tboday>';
		for( var i=0; i<employeeData.length; i++){

			if(employeeData[i].EmpId == s){
				strEmployeeDataTable = strEmployeeDataTable + '<tr> <th scope="row">'+(i+1)+'</th> <th scope="row">'+employeeData[i].EmpId+'</th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].State+'</td> </tr>' ;
				break;
			}
		}strEmployeeDataTable = strEmployeeDataTable + '</tbody>';
	strEmployeeDataTable = strEmployeeDataTable + '</table>' ;
	document.getElementById("place").innerHTML = strEmployeeDataTable ;
		
		
}


employeeData = [{
  "EmpId" : "101",
  "First": "Ankit",
  "Last" :"Gupta",
  "Place" : "Firojabad",
  "State" : "UP"
  
},
{
	"EmpId" : "102",
  "First": "Jothilakshami",
  "Last" :"V",
  "Place" : "Rajapalayam",
  "State" : "TN"
},
{
	"EmpId" : "103",
  "First": "Avinash",
  "Last" :"V",
  "Place" : "Kushinagar",
  "State" : "UP"
},
{
  "EmpId" : "104",
  "First": "Vikash",
  "Last" :"V",
  "Place" : "Deoria",
  "State" : "UP"
},
{
	"EmpId" : "105",
  "First": "Rakesh",
  "Last" :"V",
  "Place" : "Bangalore",
  "State" : "kARNATAKA"
},
{
  "EmpId" : "106",
  "First": "Vishakha",
  "Last" :"V",
  "Place" : "Rajapalayam",
  "State" : "TN"
},
{
  "EmpId" : "107",
  "First": "Ravi",
  "Last" :"V",
  "Place" : "Karolbagh",
  "State" : "Delhi"
},
{
  "EmpId" : "108",
  "First": "Jothilakshami",
  "Last" :"V",
  "Place" : "Rajapalayam",
  "State" : "TN"
},
{
  "EmpId" : "109",
  "First": "Vinay",
  "Last" :"V",
  "Place" : "Pune",
  "State" : "Maharashtra"
},
{
  "EmpId" : "110",
  "First": "Dravid",
  "Last" :"V",
  "Place" : "Bangalore",
  "State" : "Karnataka"
}]