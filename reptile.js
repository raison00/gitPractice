// Reptile model
function Reptile (name, breed, age, sound, imgUrl) {
	this.name = name;
	this.breed = breed;
	this.age = age;
	this.sound = sound;
	this.imgUrl = imgUrl; 
}

// Reptile Instances
var turtle1 = new Reptile('Mr.Grumpy', 'persian long hair', 4, '"purrrrr--purrr-persian!"', 'http://www.what-do-turtles-eat.com/wp-content/uploads/2014/10/Sea-Turtles-Habitat.jpg');
var turtle2 = new Reptile('Tiger', 'calico', 0,'"mew mew"','http://www.capitalotc.com/wp-content/uploads/2015/09/o-SEA-TURTLE-facebook.jpg');
var turtle3 = new Reptile('Blackie','tabby',0, '"meeew"', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Reptiles/A-G/green-sea-turtle-swimming.jpg');
var turtle4 = new Reptile('Milo','orange tabby',0, '"an appropriate Reptile sound"', 'http://assets.worldwildlife.org/photos/1257/images/hero_full/SeaTurtle-1600x600px.jpg');


// Reptile Array
var reptileArray = [turtle1,turtle2,turtle3,turtle4];

//Output to HTML
for (i=0;i < reptileArray.length; i++) {
		name = reptileArray[i].name,
		img = reptileArray[i].imgUrl,
		breed = reptileArray[i].breed,
		sound = reptileArray[i].sound;
		var animalDiv = document.createElement('div');
		animalDiv.className = 'animalContainer'		
		animalDiv.innerHTML = '<div class="animalContent"><img class="animalImg" src="'+img+'" /><p class="name">'+name+'</p><p class="breed">'+breed+'</p><p class="sound">'+sound+'</p></div>';
		var sectionContainer = document.getElementById('turtles');
		sectionContainer.appendChild(animalDiv);
}


