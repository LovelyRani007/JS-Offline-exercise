const url='https://picsum.photos/list';	
fetch(url)
	.then(function (response){
		console.log('came here3');
		console.log(response);
		return response.json();
	})
	.then(function(myJson){
		console.log("type: "+ typeof myJson);
		console.log('Response fetched successfully...');
		const src='https://picsum.photos/200/300?image='
		
		//Fetching response is successfull, create HTML elements dynamically
			//HTML element to display author name
				var author=document.createElement('p');
				author.id='author';
				document.getElementById('details').appendChild(author);
				
			//HTML element to display image
				var img=document.createElement('img');
				img.style="width:100%";
				document.getElementById('slide').appendChild(img);
			
			//HTML elements for left & right button
				var leftAnchr=document.createElement('a');
				leftAnchr.id='left';
				leftAnchr.text= '\u276E';
				document.getElementById('container').appendChild(leftAnchr);
				
				var rightAnchr=document.createElement('a');
				rightAnchr.id='right';
				rightAnchr.text='\u276F';
				document.getElementById('container').appendChild(rightAnchr);
				
			//Loading a random image on page load/refresh
				var randomIndex=Math.floor(Math.random()* myJson.length);
				console.log("randomIndex: "+randomIndex);
				showSlide(randomIndex);
			
			//Function to load imag and it's details
			function showSlide(slideIndex){
					var id = myJson[slideIndex].id;
					var auth=myJson[slideIndex].author;
					var width=myJson[slideIndex].width;
					var height=myJson[slideIndex].height;
					img.src=src+id;
					author.innerHTML= "Author: "+ auth;
					
				}
				
			//onClick event of the buttons (left and right)
				var slideIndex = randomIndex;
				
				leftAnchr.onclick= function(){
					console.log("You have clicked the left button...");
					
					if(slideIndex < 1){		//If the first image is on the slider, fetch the last image on the click of left button
						slideIndex = myJson.length-1
						console.log("Slide iindex inside if:: "+slideIndex);
						showSlide(slideIndex);
					}
					else{
						slideIndex-=1;
						console.log("slide index inside else:: "+slideIndex);
						showSlide(slideIndex);
					}
				};
				
				rightAnchr.onclick=function(){
					console.log("You have clicked the right button...");
					
					if(slideIndex >=  myJson.length-1){		//If the last image is on the slider, fetch the first image on the click of right button
						slideIndex = 0;
						console.log("slide iindex inside if:: "+slideIndex);
						showSlide(slideIndex);
					}
					else{
						slideIndex += 1;
						console.log("slide index inside else:: "+slideIndex);
						showSlide(slideIndex);
					}
				};
	})
	.catch(function(error){
		console.log("Error: "+error);
	})