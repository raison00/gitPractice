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
var Chunky = new Hamp('swingy', 'swinging for hampsters', 14, 'schwwing','http://imgfave-chat-herokuapp-com.global.ssl.fastly.net/image_cache/1310427450927631.jpg');
var Emy = new Hamp('chunk speed','hampster mix', 7, 'coming!','http://en.bcdn.biz/Images/2015/9/18/839623cf-dc01-4504-8a1e-f4867bf4cc83.jpg' );
var Biscuit = new Hamp('biscuit','biscuit mix', 7, 'biscuit!','http://images1.fanpop.com/images/image_uploads/CUTE-hamsters-1140511_450_466.jpg' );


// hampArray
var hampArray = [Chunky, Emy, Biscuit ];

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


