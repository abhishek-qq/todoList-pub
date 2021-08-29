



const inputBox = document.querySelector(".inputField input");
const inputBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
	let userData =inputBox.value; // here we want user to enter the todo task 
	if(userData.trim() !=0) {
		inputBtn.classList.add("active");
	}
	else{
		inputBtn.classList.remove("active");
	}
}


showTask();

// now if user click on the button to add new task 

inputBtn.onclick = () => {
	let userData =inputBox.value;// asking user to enter the new todo 
	let getLocalStorage = localStorage.getItem("New Todo");//getting the data from local storage 

	if(getLocalStorage == null){   //if local storage is null 

		listArr =[];  //creating a blank array;

	}
	else{

		listArr = JSON.parse(getLocalStorage);  //conerting the json string itno js object 

	}
	listArr.push(userData); // adding the new todo in array
	localStorage.setItem("New Todo",JSON.stringify(listArr));  // converting json object into string 

	showTask();
}


//this is the finction to add  task to the ul list 

function showTask(){
	let getLocalStorage = localStorage.getItem("New Todo"); // getting data from local storage
	if(getLocalStorage==null){
		listArr=[];
	}
	else{
		listArr=JSON.parse(getLocalStorage);  // converting the data from json to js object  

	}
	const pendingTask = document.querySelector(".pendingNumber");
	pendingTask.textContent = listArr.length;
	if(listArr.length > 0){
		deleteAllBtn.classList.add("active");

	}
	else{
		deleteAllBtn.classList.remove("active");

	}

	let newLiTag ='';
	listArr.forEach((element,index) =>{
		newLiTag  += `<li>${element}<span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;

	});

	todoList.innerHTML = newLiTag; //adding new LI tag hence displaying task 
	inputBox.value='';

}


// function to delete the task when completed

function deleteTask(index){

	let getLocalStorage = localStorage.getItem("New Todo");
	listArr = JSON.parse(getLocalStorage);

	listArr.splice(index,1); //delete the element at the particular index


	localStorage.setItem("New Todo",JSON.stringify(listArr));  // converting json object into string 

	showTask();	

}


// function to delete all task at once 

deleteAllBtn.onclick = ()=> {
	listArr = []; // delete the current array 
	// after deleting all the element in the array update the localStorage
	localStorage.setItem("New Todo",JSON.stringify(listArr));  // converting json object into string 

	showTask();

}














