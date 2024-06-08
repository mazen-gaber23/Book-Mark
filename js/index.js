var siteName=document.getElementById('siteName');
var siteURL=document.getElementById('siteURL');
var dataContainer;
if(localStorage.getItem('Data')==null){
    dataContainer=[];
}
else{
    dataContainer=JSON.parse(localStorage.getItem('Data'));
    displayData();
}
function addData(){
    var data={
        name:siteName.value,
        url:siteURL.value
    };
    dataContainer.push(data);
    localStorage.setItem('Data',JSON.stringify(dataContainer));
    displayData();
    clear();
}
function displayData(){
    var cartuna='';
    for(i=0;i<dataContainer.length;i++){
       cartuna+=`
         <tr>
           <td>${i+1}</td>
           <td>${dataContainer[i].name}</td>
           <td><a href="${dataContainer[i].url}"><button type="button" class="btn btn-success">Visit</button></a></td>
           <td><button onclick="deleteData(${i})" type="button" class="btn btn-danger delete">Delete</button></td>
         </tr>`;
    }
    document.getElementById('demo').innerHTML=cartuna;
}
function clear(){
    siteName.value=null;
    siteURL.value=null;

}

function deleteData(index){
      dataContainer.splice(index,1);
      displayData();
      localStorage.setItem('Data',JSON.stringify(dataContainer));

}
var button1=document.querySelector('.sub');
button1.addEventListener('click',function(){
    addData();
})
function validateData(element1){ 
   var x=document.querySelector('.sub');
  var regex={
    siteName:/.{3,}$/,
    siteURL:/^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{3}$/
  };
  if(regex[element1.id].test(element1.value)){
      element1.classList.add('is-valid');
      element1.classList.remove('is-invalid');
      x.classList.replace('disabled','btn-danger');
  }
  else{
      element1.classList.remove('is-valid');
      element1.classList.add('is-invalid');
      x.classList.replace('btn-danger','disabled');
  }
  
  }

