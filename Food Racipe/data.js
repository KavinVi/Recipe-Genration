document.getElementById("butt").addEventListener("click",()=>{
	let users = document.getElementById("user").value;

	let mealAPI = fetch(
		`https://www.themealdb.com/api/json/v1/1/search.php?s=${users}`
	);

	mealAPI.then((getData)=>{
		return getData.json();
	}).then((sendData)=>{
		console.log(sendData)
		let data=''
		sendData.meals.forEach(e =>{


			data+=`
			<h1 class='text-center text-danger'>Food Category: ${e.strCategory}</h1>
			<h2 class='text-center text-secoundary'>Food Area: ${e.strArea}</h2>
			<h2 class='text-center text-warning'>Food Area: ${e.strMeal1}</h2>

			<div class="row">
    		    <div class="col-md-4">
    			    <img src="${e.strMealThumb}"  alt="" class="w-50">
    			
    		    </div>
    	        <div class="col-md-4">
    	    	    <h2>Incredients</h2>
    	    	    <ul>
    	    		    <li>${e.strIngredient1}</li>
    	    		    <li>${e.strIngredient2}</li>
    	    		    <li>${e.strIngredient3}</li>
    	    		    <li>${e.strIngredient4}</li>
    	    		    <li>${e.strIngredient5}</li>
    	    		    <li>${e.strIngredient6}</li>
    	    		    <li>${e.strIngredient7}</li>
    	    		    <li>${e.strIngredient8}</li>
    	    		    <li>${e.strIngredient9}</li>
    	    		    <li>${e.strIngredient10}</li>
    	    		    <li>${e.strIngredient11}</li>
    	    		    <li>${e.strIngredient12}</li>
    	    		    <li>${e.strIngredient13}</li>
    	    		    <li>${e.strIngredient14}</li>
    	    		    <li>${e.strIngredient15}</li>
    	    		    <li>${e.strIngredient16}</li>
    	    		    <li>${e.strIngredient17}</li>
    	    		    <li>${e.strIngredient18}</li>
    	    		    <li>${e.strIngredient19}</li>
    	    		    <li>${e.strIngredient20}</li>
    	    	    </ul>	
    	        </div>
    	        <div class="col-md-4">
    	    	    <h2>Measurement</h2>
    	    	    <ul>
    	    		    <li>${e.strMeasure1}</li>
    	    		    <li>${e.strMeasure2}</li>
    	    		    <li>${e.strMeasure3}</li>
    	    		    <li>${e.strMeasure4}</li>
    	    		    <li>${e.strMeasure5}</li>
    	    		    <li>${e.strMeasure6}</li>
    	    		    <li>${e.strMeasure7}</li>
    	    		    <li>${e.strMeasure8}</li>
    	    		    <li>${e.strMeasure9}</li>
    	    		    <li>${e.strMeasure10}</li>
    	    		    <li>${e.strMeasure11}</li>
    	    		    <li>${e.strMeasure12}</li>
    	    		    <li>${e.strMeasure13}</li>
    	    		    <li>${e.strMeasure14}</li>
    	    		    <li>${e.strMeasure15}</li>
    	    		    <li>${e.strMeasure16}</li>
    	    		    <li>${e.strMeasure17}</li>
    	    		    <li>${e.strMeasure18}</li>
    	    		    <li>${e.strMeasure19}</li>
    	    		    <li>${e.strMeasure20}</li>
    	    	    </ul>	
    	        </div>
    	</div>
    	<div class="col-12">
    		<h2>Instruction</h2>
    		<p>${e.strInstructions}</p>
    	</div>

			`


			adddata.innerHTML=data
		});
	})
});