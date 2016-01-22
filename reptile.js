// Reptile model
function Reptile (name, breed, age, sound, imgUrl) {
	this.name = name;
	this.breed = breed;
	this.age = age;
	this.sound = sound;
	this.imgUrl = imgUrl; 
}

// Reptile Instances
var turtle1 = new Reptile('crush', 'turtle long hair', 4, '"turtle!"', 'http://www.what-do-turtles-eat.com/wp-content/uploads/2014/10/Sea-Turtles-Habitat.jpg');
var turtle2 = new Reptile('sprout', 'turtleo', 0,'"turtle"','http://www.capitalotc.com/wp-content/uploads/2015/09/o-SEA-TURTLE-facebook.jpg');
var turtle3 = new Reptile('squidly','turtle',0, '"turtle"', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Reptiles/A-G/green-sea-turtle-swimming.jpg');
var turtle4 = new Reptile('turtle','turtle',0, '"an appropriate Reptile sound"', 'http://assets.worldwildlife.org/photos/1257/images/hero_full/SeaTurtle-1600x600px.jpg');

var turtle5 = new Reptile('turtle','turtle',0, '"an appropriate Reptile sound"', 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Reptiles/A-G/green-sea-turtle-swimming.jpg');

var turtle6 = new Reptile('turtle','turtle',0, '"an appropriate Reptile sound"', 'http://www.keywestaquarium.com/wp-content/uploads/2015/04/sea-turtle.jpg');

var turtle7 = new Reptile('turtle','turtle',0, '"an appropriate Reptile sound"', 'https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/rf/image_908w/2010-2019/WashingtonPost/2012/02/02/Interactivity/Images/138058628.jpg&w=1484');






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


