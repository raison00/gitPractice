console.log("where's the wheel?");

// hamp model
function Hamp (name, breed, age, sound, imgUrl) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.sound = sound;
    this.imgUrl = imgUrl; 
}

// hamp Instances
var Chunky = new Hamp('Chunky', 'where is the hampster', 14, 'peel banana. peel, peel banana! squeek squeek','https://www.google.com/imgres?imgurl=http://www.fourpaws.org/images_subpagenav/images_diversions/images_jokes_photos_pages/WhatHampster.jpg&imgrefurl=http://www.fourpaws.org/pages/diversion_pages/jokes_photos/WhatHampster.html&h=324&w=432&tbnid=PCym4Yb9c5FuoM:&docid=pe8otWHkokhP9M&ei=qoCiVuyaJ8ae-wGfy5TIBA&tbm=isch&ved=0ahUKEwjsl6--kb7KAhVGzz4KHZ8lBUkQMwhrKC8wLw');
var Emy = new Hamp('Emy','hampster mix', 7, 'woof woof!','https://www.google.com/imgres?imgurl=http://funny.desivalley.com/wp-content/uploads/2011/03/hampster-funny-cartoon.jpg&imgrefurl=http://funny.desivalley.com/category/hampster-funny-picture/page/2/&h=360&w=480&tbnid=HUDi7TmpWmOdZM:&docid=bGyY1S5AOQ3i9M&ei=qoCiVuyaJ8ae-wGfy5TIBA&tbm=isch&ved=0ahUKEwjsl6--kb7KAhVGzz4KHZ8lBUkQMwh5KD0wPQ' );


// hamp Array
var hampArray = [Chunky, Emy];

//Output to HTML
for (i=0;i < hampArray.length; i++) {
        name = hampArray[i].name,
        img = hampArray[i].imgUrl,
        breed = hampArray[i].breed,
        sound = hampArray[i].sound;
        var animalDiv = document.createElement('div');
        animalDiv.className = 'animalContainer'        
        animalDiv.innerHTML = '<div class="animalContent"><img class="animalImg" src="'+img+'" /><p class="name">'+name+'</p><p class="breed">'+breed+'</p><p class="sound">'+sound+'</p></div>';
        var sectionContainer = document.getElementById('hampsters');
        sectionContainer.appendChild(animalDiv);
}


