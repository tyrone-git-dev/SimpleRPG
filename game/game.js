var startButton = document.getElementById("start");
var chars = document.getElementById("char");
var changeClasses = document.getElementById("changeClasses");
var menu = document.getElementById("menu");
var goFight = document.getElementById("fight");
var reInc = document.getElementById("reInc");
var combat = document.getElementById("combat");
var combatInfo = document.getElementById("combatInfo");
var atkBtn = document.getElementById("atk");
var skillDesc = document.getElementById("skillDesc");
menu.style.visibility = "hidden";
atkBtn.style.visibility = "hidden";
goFight.style.visibility = "hidden";
reInc.style.visibility = "hidden";

// class change choices
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
choiceA.style.visibility = "hidden";
choiceB.style.visibility = "hidden";
choiceC.style.visibility = "hidden";

// skills
var skillsBtn = document.getElementById("skillsBtn");
skillsBtn.style.visibility = "hidden";
var skillSelection = document.getElementById("skillSelection");
skillSelection.style.visibility = "hidden";
var summon1 = document.getElementById("summon1");
var tempSkill = document.getElementById("tempSkill");


// Create's player avatar
var pImage = document.getElementById("pImage");
var imgSrc = document.getElementById("imgSrc");

var eImage = document.getElementById("eImage");
var eImgSrc = document.getElementById("eImgSrc");

// Player Object (player.js)
var Player = function(uClass, level) {
		this.uClass = uClass;
		this.level = level;
		this.xp = 0;
		this.hp = 100;
		this.mp = 20;
		this.atk = 3;
		this.def = 3;
		this.matk = 3;
		this.mdef = 3;
		this.spd = 3;
		
		this.statPoints = 0;
		this.hpStat = 0;
		this.mpStat = 0;
		this.atkStat = 0;
		this.defStat = 0;
		this.matkStat = 0;
		this.mdefStat = 0;
		this.spdStat = 0;
		
		// need to add reincarnate stat points
		this.hpRe = 0;
		this.mpRe = 0;
		this.atkRe = 0;
		this.defRe = 0;
		this.matkRe = 0;
		this.mdefRe = 0;
		this.spdRe = 0;
		
		this.atkmsg = "";
		
		this.skillSet = new Array(0);
		
		this.baseForm = "Human";
		this.transform = this.baseForm;
		
		this.statusE = "";

		//pImage.src = "yTho.jpg"; //image may be a direct link to begin with
		//pImage.style.width = "0px";
		//pImage.style.height = "350px"; // height shouldn't exceed this for optima
		//imgSrc.innerHTML = "Source: <a href=\"\" target=\"_blank\">Fantasy Fiction</a>";
		
		/*
		eImage.src = "https://i.pinimg.com/originals/6b/2c/5a/6b2c5a192ac2fc75e442a1eb3f1e5dd9.jpg";
		eImage.style.width = "400px";
		eImage.style.height = "300px";
		eImgSrc.innerHTML = "Source: <a href=\"https://www.pinterest.com/nwiernasz/grouillauxbandits/\" target=\"_blank\">GrouillauxBandits</a>";
		*/
		
		/* bandit
		pImage.src = "https://i.pinimg.com/736x/bb/d0/65/bbd065d38246531ce8de1d22aec7bb92--high-fantasy-fantasy-rpg.jpg";
		pImage.style.width = "200px";
		pImage.style.height = "300px";
		imgSrc.innerHTML = "Source: <a href=\"https://www.pinterest.com/nwiernasz/grouillauxbandits/\" target=\"_blank\">GrouillauxBandits</a>";
		*/
		
		/* apprentice
		pImage.src = "https://i.pinimg.com/originals/6b/2c/5a/6b2c5a192ac2fc75e442a1eb3f1e5dd9.jpg";
		pImage.style.width = "400px";
		pImage.style.height = "350px";
		imgSrc.innerHTML = "Source: <a href=\"https://www.pinterest.com/pin/558939003739345990/\" target=\"_blank\">Klee's Apprentice</a>";
		*/
		
		/* knight
		pImage.src = "https://i.pinimg.com/originals/6d/ca/df/6dcadf5f9e6d37bd7c62ca3afeb58d19.jpg";
		pImage.style.width = "300px";
		pImage.style.height = "350px";
		imgSrc.innerHTML = "Source: <a href=\"https://www.pinterest.com/pin/211106301262268592/\" target=\"_blank\">Klee's Apprentice</a>";
		*/
		
}; // end Player

Player.prototype.levelUp = function() {
	//pImage.src = "";
	while(this.xp >= (100 * this.level)) {
	
			this.xp -= 100 * this.level;
			this.level++;
			skillSets(player);
			
			if (baseClasses.includes(this.uClass)) {
				this.statPoints += 3;
			} else if (rank1Classes.includes(this.uClass)) {
				this.statPoints += 5;
			} else if (rank2Classes.includes(this.uClass)) {
				this.statPoints += 8;
			} else {
				this.statPoints += 3;
			}
	}
	
	if (this.level >= 10 && baseClasses.includes(this.uClass)) {
		upgradeClass(this);
	}
	
	if (this.level >= 20 && rank1Classes.includes(this.uClass)) {
		upgradeClass(this);
	}
	
	// need to add reincarnate stats
	if (baseClasses.includes(this.uClass)) { // Base Classes
		if (this.uClass == baseClasses[0]) { // Bandit Class (+atk +def -matk -mdef)
			this.hp = (100 * this.level) + (10 * this.hpStat) + (10 * this.hpRe);
			this.mp = (10 * this.level) + (5 * this.mpStat) + (5 * this.mpRe);
			this.atk = (3 * this.level) + (2 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (3 * this.level) + (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (3 * this.level) - (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (3 * this.level) - (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (3 * this.level) + (0 * this.level) +(this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You clobbered your opponent for ";
			
			banditSkillSet(player);
		} else if (this.uClass == baseClasses[1]) { // Apprentice Class (+matk +mp -atk -def)
			this.hp = (90 * this.level) + (10 * this.hpStat) + (10 * this.hpRe);
			this.mp = (15 * this.level) + (10 * this.mpStat) + (10 * this.mpRe);
			this.atk = (3 * this.level) - (1 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (3 * this.level) - (1 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (3 * this.level) + (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (3 * this.level) + (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (3 * this.level) + (0 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You pinged your opponent for ";
			apprenticeSkillSet(player);
		} else if (this.uClass == baseClasses[2]) { // Knight Class (+hp +def -matk -spd)
			this.hp = (120 * this.level) + (20 * this.hpStat) + (10 * this.hpRe);
			this.mp = (10 * this.level) + (5 * this.mpStat) + (5 * this.mpRe);
			this.atk = (3 * this.level) + (0 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (3 * this.level) + (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (3 * this.level) - (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (3 * this.level) + (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (3 * this.level) - (1 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You slashed your opponent for ";
			knightSkillSet(player);
		} else { // Just in case
			this.hp = (100 * this.level) + (10 * this.hpStat) + (10 * this.hpRe);
			this.mp = (10 * this.level) + (5 * this.mpStat) + (5 * this.mpRe);
			this.atk = (3 * this.level) + (0 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (3 * this.level) + (0 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (3 * this.level) + (0 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (3 * this.level) + (0 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (3 * this.level) + (0 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You hit your opponent for ";
		}
		
	}
	
	if (rank1Classes.includes(this.uClass)) { // Rank 1 Classes
		if (this.uClass == rank1Classes[0]) { // Maniac Class (+atk +matk -def)
			this.hp = (150 * this.level) + (15 * this.hpStat) + (15 * this.hpRe);
			this.mp = (20 * this.level) + (10 * this.mpStat) + (10 * this.mpRe);
			this.atk = (5 * this.level) + (3 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (5 * this.level) + (0 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (5 * this.level) - (1 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (5 * this.level) - (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (5 * this.level) + (0 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You smashed your opponent for ";
			banditSkillSet(player);
			maniacSkillSet(player);
		} else if (this.uClass == rank1Classes[1]) { // Mercenary Class (+atk +def -matk)
			this.hp = (150 * this.level) + (15 * this.hpStat) + (15 * this.hpRe);
			this.mp = (20 * this.level) + (10 * this.mpStat) + (10 * this.mpRe);
			this.atk = (5 * this.level) + (2 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (5 * this.level) + (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (5 * this.level) - (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (5 * this.level) - (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (5 * this.level) + (0 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You smacked your opponent for ";
			banditSkillSet(player);
			mercenarySkillSet(player);
		} else if (this.uClass == rank1Classes[2]) { // Martial Artist Class (+atk +def -matk)
			this.hp = (150 * this.level) + (15 * this.hpStat) + (15 * this.hpRe);
			this.mp = (20 * this.level) + (10 * this.mpStat) + (10 * this.mpRe);
			this.atk = (5 * this.level) + (2 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (5 * this.level) + (1 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (5 * this.level) - (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (5 * this.level) - (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (5 * this.level) + (2 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You kicked your opponent for ";
			banditSkillSet(player);
			martialArtistSkillSet(player);
		} else if (this.uClass == rank1Classes[3]) { // Scholar (+matk +mp -atk)
			this.hp = (150 * this.level) + (15 * this.hpStat) + (15 * this.hpRe);
			this.mp = (30 * this.level) + (10 * this.mpStat) + (10 * this.mpRe);
			this.atk = (5 * this.level) - (2 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (5 * this.level) + (0 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (5 * this.level) + (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (5 * this.level) + (0 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (5 * this.level) + (1 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You bolted your opponent for ";
			apprenticeSkillSet(player);
			scholarSkillSet(player);
		} else if (this.uClass == rank1Classes[4]) { // Dark Mage (+matk +mp -spd)
			this.hp = (150 * this.level) + (15 * this.hpStat) + (15 * this.hpRe);
			this.mp = (30 * this.level) + (10 * this.mpStat) + (10 * this.mpRe);
			this.atk = (5 * this.level) + (0 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (5 * this.level) + (0 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (5 * this.level) + (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (5 * this.level) + (0 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (5 * this.level) - (2 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You engulfed your opponent in darkness for ";
			apprenticeSkillSet(player);
			darkMageSkillSet(player);
		} else if (this.uClass == rank1Classes[5]) { // Cleric (+mdef +mp -atk)
			this.hp = (150 * this.level) + (15 * this.hpStat) + (15 * this.hpRe);
			this.mp = (30 * this.level) + (10 * this.mpStat) + (10 * this.mpRe);
			this.atk = (5 * this.level) - (2 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (5 * this.level) + (0 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (5 * this.level) + (0 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (5 * this.level) + (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (5 * this.level) + (1 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You prayed to hurt your opponent for ";
			apprenticeSkillSet(player);
			clericSkillSet(player);
		} else if (this.uClass == rank1Classes[6]) { // Heavy Knight (+hp +def -spd)
			this.hp = (210 * this.level) + (15 * this.hpStat) + (15 * this.hpRe);
			this.mp = (20 * this.level) + (10 * this.mpStat) + (10 * this.mpRe);
			this.atk = (5 * this.level) + (1 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (5 * this.level) + (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (5 * this.level) - (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (5 * this.level) + (0 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (5 * this.level) - (3 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You bashed your opponent for ";
			knightSkillSet(player);
			heavyKnightSkillSet(player);
		} else if (this.uClass == rank1Classes[7]) { // Samurai (+atk +spd -mdef)
			this.hp = (170 * this.level) + (15 * this.hpStat) + (15 * this.hpRe);
			this.mp = (20 * this.level) + (10 * this.mpStat) + (10 * this.mpRe);
			this.atk = (5 * this.level) + (2 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (5 * this.level) + (0 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (5 * this.level) - (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (5 * this.level) - (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (5 * this.level) + (1 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You sliced your opponent for ";
			knightSkillSet(player);
			samuraiSkillSet(player);
		} else if (this.uClass == rank1Classes[8]) { // Cavalier (+hp +spd -mdef)
			this.hp = (190 * this.level) + (15 * this.hpStat) + (15 * this.hpRe);
			this.mp = (20 * this.level) + (10 * this.mpStat) + (10 * this.mpRe);
			this.atk = (5 * this.level) + (1 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (5 * this.level) + (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (5 * this.level) - (1 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (5 * this.level) - (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (5 * this.level) + (2 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You charged your opponent for ";
			knightSkillSet(player);
			cavalierSkillSet(player);
		} else { // Just in case
			this.hp = (150 * this.level) + (15 * this.hpStat) + (15 * this.hpRe);
			this.mp = (20 * this.level) + (10 * this.mpStat) + (10 * this.mpRe);
			this.atk = (5 * this.level) + (0 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (5 * this.level) + (0 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (5 * this.level) + (0 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (5 * this.level) + (0 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (5 * this.level) + (0 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You hit your opponent for ";
		}
	}
	
	if (rank2Classes.includes(this.uClass)) { // Rank 2 Classes
		if(this.uClass == rank2Classes[0]) { // Psycho Class (+atk +matk +hp -def)
			this.hp = (220 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (30 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) + (2 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) - (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) + (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) + (0 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (1 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You smashed your opponent while yelling nonsense for ";
			banditSkillSet(player);
			maniacSkillSet(player);
		} else if (this.uClass == rank2Classes[1]) { // Barbarian (+atk +def +spd -matk)
			this.hp = (210 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (30 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) + (3 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) + (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) - (3 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) - (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (1 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You hit your opponent for ";
			banditSkillSet(player);
			maniacSkillSet(player);
		} else if (this.uClass == rank2Classes[2]) { // Duelist (+atk +def +spd -matk)
			this.hp = (210 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (30 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) + (3 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) + (1 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) - (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) - (1 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (2 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You struck your opponent with precision for ";
			banditSkillSet(player);
			mercenarySkillSet(player);
		} else if (this.uClass == rank2Classes[3]) { // Valiant (+atk +def +hp -matk)
			this.hp = (220 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (30 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) + (3 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) + (3 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) - (3 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) - (3 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (1 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You charged your opponent with ferocity for ";
			banditSkillSet(player);
			mercenarySkillSet(player);
		} else if (this.uClass == rank2Classes[4]) { // Battle Veteran (+atk +def +spd -matk)
			this.hp = (210 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (30 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) + (2 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) + (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) - (3 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) - (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (2 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You punched your opponent too hard for ";
			banditSkillSet(player);
			martialArtistSkillSet(player);
		} else if (this.uClass == rank2Classes[5]) { // Black Belt (+atk +def +spd -matk)
			this.hp = (200 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (30 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) + (3 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) + (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) - (3 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) - (1 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (3 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You roundhoused your opponent for ";
			banditSkillSet(player);
			martialArtistSkillSet(player);
		} else if (this.uClass == rank2Classes[6]) { // Mystic (+matk +mdef +spd -atk)
			this.hp = (200 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (40 * this.level) + (20 * this.mpStat) + (20 * this.mpRe);
			this.atk = (8 * this.level) - (3 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) - (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) + (3 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) + (3 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (2 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You charged a spell and blasted your opponent for ";
			apprenticeSkillSet(player);
			scholarSkillSet(player);
		} else if (this.uClass == rank2Classes[7]) { // Sorceror (+matk +mdef +mp -matk)
			this.hp = (200 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (50 * this.level) + (20 * this.mpStat) + (20 * this.mpRe);
			this.atk = (8 * this.level) - (2 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) - (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) + (3 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) + (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (1 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You casted a spell, crashing at your opponent for ";
			apprenticeSkillSet(player);
			scholarSkillSet(player);
		} else if (this.uClass == rank2Classes[8]) { // Night Mage (+matk +mdef +def -spd)
			this.hp = (200 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (40 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) - (2 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) + (0 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) + (3 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) + (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (0 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "Your opponent couldn't see you blast them for ";
			apprenticeSkillSet(player);
			darkMageSkillSet(player);
		} else if (this.uClass == rank2Classes[9]) { // Blood Mage (+matk +mdef +hp -spd)
			this.hp = (230 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (40 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) - (2 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) - (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) + (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) + (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (0 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You sapped away your opponent's life force for ";
			apprenticeSkillSet(player);
			darkMageSkillSet(player);
		} else if (this.uClass == rank2Classes[10]) { // Acolyte (+matk +mdef +spd -atk)
			this.hp = (210 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (40 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) - (3 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) + (0 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) + (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) + (4 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (1 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You peacefully hit your opponent with words for ";
			apprenticeSkillSet(player);
			clericSkillSet(player);
		} else if (this.uClass == rank2Classes[11]) { // Unholy Mage (+matk +mdef +hp -def)
			this.hp = (220 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (40 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) + (0 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) - (1 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) + (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) + (3 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (1 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You angrily hit your opponent with words for ";
			apprenticeSkillSet(player);
			clericSkillSet(player);
		} else if (this.uClass == rank2Classes[12]) { // Heavy Tank (+atk +def +spd -mdef)
			this.hp = (280 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (30 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) + (2 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) + (3 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) - (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) - (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) - (2 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "Your opponent physically hit you and unknowingly hurt themself for ";
			knightSkillSet(player);
			heavyKnightSkillSet(player);
		} else if (this.uClass == rank2Classes[13]) {  // Hell Knight (+hp +atk +def -spd)
			this.hp = (230 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (30 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) + (2 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) + (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) - (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) - (1 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (0 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "Decrepit hands from below swing at your opponent for ";
			knightSkillSet(player);
			heavyKnightSkillSet(player);
		} else if (this.uClass == rank2Classes[14]) { // Adept Ronin (+atk +def +spd -matk)
			this.hp = (220 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (30 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) + (3 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) + (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) - (3 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) - (1 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (2 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You swiftly striked your opponent for ";
			knightSkillSet(player);
			samuraiSkillSet(player);
		} else if (this.uClass == rank2Classes[15]) { // Assassin (+atk +mdef +spd -def)
			this.hp = (210 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (30 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) + (3 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) - (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) - (1 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) - (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (3 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You hit your opponent before they noticed for ";
			knightSkillSet(player);
			samuraiSkillSet(player);
		} else if (this.uClass == rank2Classes[16]) { // Paladin Rider (+hp +def +spd -matk)
			this.hp = (240 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (30 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) + (1 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) + (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) - (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) + (0 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (2 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You majestically charged your opponent for ";
			knightSkillSet(player);
			cavalierSkillSet(player);
		} else if (this.uClass == rank2Classes[17]) { // Beast Rider (+hp +atk +def -matk)
			this.hp = (260 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (30 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) + (2 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) + (2 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) - (2 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) - (2 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (1 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "Your beast chomped at your opponent for ";
			knightSkillSet(player);
			cavalierSkillSet(player);
		} else {
			this.hp = (200 * this.level) + (20 * this.hpStat) + (20 * this.hpRe);
			this.mp = (30 * this.level) + (15 * this.mpStat) + (15 * this.mpRe);
			this.atk = (8 * this.level) + (0 * this.level) + (this.atkStat) + (this.atkRe);
			this.def = (8 * this.level) + (0 * this.level) + (this.defStat) + (this.defRe);
			this.matk = (8 * this.level) + (0 * this.level) + (this.matkStat) + (this.matkRe);
			this.mdef = (8 * this.level) + (0 * this.level) + (this.mdefStat) + (this.mdefRe);
			this.spd = (8 * this.level) + (0 * this.level) + (this.spdStat) + (this.spdRe);
			
			this.atkmsg = "You hit your opponent for ";
		}
	}
}; // end prototype.levelUp

// Enemy Object enemy.js
var Enemy = function(uClass, level) {
	this.uClass = uClass;
		this.level = level;
		this.hp = 100;
		this.mp = 20;
		this.atk = 5;
		this.def = 3;
		this.matk = 1;
		this.mdef = 1;
		this.spd = 3;
		
		this.atkmsg = "";
		this.xp = 0;
		
		this.statusE = "";
	
	if (eBaseClasses.includes(this.uClass)) {
		if(this.uClass == eBaseClasses[0]) { // Wolf Class
			this.hp = (80 * this.level);
			this.mp = (5 * this.level);
			this.atk = (2 * this.level) + (1 * this.level);
			this.def = (2 * this.level) + (0 * this.level);
			this.matk = (2 * this.level) - (1 * this.level);
			this.mdef = (2 * this.level) - (1 * this.level);
			this.spd = (2 * this.level) + (2 * this.level);
			
			this.atkmsg = "Enemy bit you for ";
			this.xp = 10 * this.level;
		} else if(this.uClass == eBaseClasses[1]) { // Giant Rat Class
			this.hp = (110 * this.level);
			this.mp = (5 * this.level);
			this.atk = (2 * this.level) + (2 * this.level);
			this.def = (2 * this.level) - (1 * this.level);
			this.matk = (2 * this.level) - (1 * this.level);
			this.mdef = (2 * this.level) + (1 * this.level);
			this.spd = (2 * this.level) + (1 * this.level);
			
			this.atkmsg = "Enemy gnawed at you for ";
			this.xp = 15 * this.level;
		} else if(this.uClass == eBaseClasses[2]) { // Slime Class
			this.hp = (90 * this.level);
			this.mp = (5 * this.level);
			this.atk = (2 * this.level) + (1 * this.level);
			this.def = (2 * this.level) + (2 * this.level);
			this.matk = (2 * this.level) + (0 * this.level);
			this.mdef = (2 * this.level) + (2 * this.level);
			this.spd = (2 * this.level) + (0 * this.level);
			
			this.atkmsg = "Enemy slammed into you dealing ";
			this.xp = 10 * this.level;
		} else if(this.uClass == eBaseClasses[3]) { // Imp Class
			this.hp = (90 * this.level);
			this.mp = (5 * this.level);
			this.atk = (2 * this.level) + (0 * this.level);
			this.def = (2 * this.level) - (1 * this.level);
			this.matk = (2 * this.level) + (3 * this.level);
			this.mdef = (2 * this.level) + (1 * this.level);
			this.spd = (2 * this.level) + (1 * this.level);
			
			this.atkmsg = "Enemy blazed you for ";
			this.xp = 10 * this.level;
		} else if(this.uClass == eBaseClasses[eBaseClasses.length-1]) { // Berg, the Unruly Barbarian
			this.hp = (150 * this.level);
			this.mp = (20 * this.level);
			this.atk = (3 * this.level) + (2 * this.level);
			this.def = (3 * this.level) + (1 * this.level);
			this.matk = (3 * this.level) - (2 * this.level);
			this.mdef = (3 * this.level) - (2 * this.level);
			this.spd = (3 * this.level) + (0 * this.level);
			
			this.atkmsg = "Enemy swung at you with all their might, dealing ";
			this.xp = 50 * this.level;
		} else { // Just in case
			this.hp = (100 * this.level);
			this.mp = (5 * this.level);
			this.atk = (1 * this.level) + (0 * this.level);
			this.def = (1 * this.level) + (0 * this.level);
			this.matk = (1 * this.level) + (0 * this.level);
			this.mdef = (1 * this.level) + (0 * this.level);
			this.spd = (1 * this.level) + (0 * this.level);
			
			this.atkmsg = "Enemy hit you for ";
			this.xp = 10 * this.level;
		}
	}
	
	if (eRank1Classes.includes(this.uClass)) {
		if(this.uClass == eRank1Classes[0]) { // Alpha Wolf Class
			this.hp = (140 * this.level);
			this.mp = (10 * this.level);
			this.atk = (4 * this.level) + (2 * this.level);
			this.def = (4 * this.level) + (1 * this.level);
			this.matk = (4 * this.level) - (1 * this.level);
			this.mdef = (4 * this.level) - (1 * this.level);
			this.spd = (4 * this.level) + (2 * this.level);
			
			this.atkmsg = "Enemy chomped at you for ";
			this.xp = 15 * this.level;
		} else if(this.uClass == eRank1Classes[1]) { // Boa Constricta Class
			this.hp = (150 * this.level);
			this.mp = (10 * this.level);
			this.atk = (4 * this.level) + (2 * this.level);
			this.def = (4 * this.level) + (1 * this.level);
			this.matk = (4 * this.level) - (1 * this.level);
			this.mdef = (4 * this.level) - (2 * this.level);
			this.spd = (4 * this.level) + (3 * this.level);
			
			this.atkmsg = "Enemy tried to strangle you for ";
			this.xp = 15 * this.level;
		} else if(this.uClass == eRank1Classes[2]) { // Skeleton Class
			this.hp = (180 * this.level);
			this.mp = (5 * this.level);
			this.atk = (4 * this.level) + (2 * this.level);
			this.def = (4 * this.level) + (1 * this.level);
			this.matk = (4 * this.level) - (2 * this.level);
			this.mdef = (4 * this.level) - (2 * this.level);
			this.spd = (4 * this.level) - (1 * this.level);
			
			this.atkmsg = "Enemy smacked you for ";
			this.xp = 15 * this.level;
		} else if(this.uClass == eRank1Classes[3]) { // Lesser Demon Class
			this.hp = (150 * this.level);
			this.mp = (10 * this.level);
			this.atk = (4 * this.level) + (2 * this.level);
			this.def = (4 * this.level) + (1 * this.level);
			this.matk = (4 * this.level) + (2 * this.level);
			this.mdef = (4 * this.level) + (2 * this.level);
			this.spd = (4 * this.level) + (1 * this.level);
			
			this.atkmsg = "Enemy smacked you for ";
			this.xp = 15 * this.level;
		} else if(this.uClass == eRank1Classes[eRank1Classes.length-1]) { // Rayo, the Gamma WarWolf
			this.hp = (190 * this.level);
			this.mp = (15 * this.level);
			this.atk = (5 * this.level) + (2 * this.level);
			this.def = (5 * this.level) + (1 * this.level);
			this.matk = (5 * this.level) - (1 * this.level);
			this.mdef = (5 * this.level) - (2 * this.level);
			this.spd = (5 * this.level) + (3 * this.level);
			
			this.atkmsg = "Enemy smacked you for ";
			this.xp = 15 * this.level;
		} else { // Just in case
			this.hp = (150 * this.level);
			this.mp = (10 * this.level);
			this.atk = (4 * this.level) + (0 * this.level);
			this.def = (4 * this.level) + (0 * this.level);
			this.matk = (4 * this.level) + (0 * this.level);
			this.mdef = (4 * this.level) + (0 * this.level);
			this.spd = (4 * this.level) + (0 * this.level);
			
			this.atkmsg = "Enemy hit you for ";
			this.xp = 15 * this.level;
		}
	}
	
	if (eRank2Classes.includes(this.uClass)) {
		if(this.uClass == eRank2Classes[0]) { // Slime Mage Class
			this.hp = (210 * this.level);
			this.mp = (20 * this.level);
			this.atk = (7 * this.level) + (0 * this.level);
			this.def = (7 * this.level) + (1 * this.level);
			this.matk = (7 * this.level) + (2 * this.level);
			this.mdef = (7 * this.level) + (1 * this.level);
			this.spd = (7 * this.level) + (1 * this.level);
			
			this.atkmsg = "Enemy blasted you with elemental magic for ";
			this.xp = 20 * this.level;
		} else if(this.uClass == eRank2Classes[1]) { // Gorgon Class
			this.hp = (220 * this.level);
			this.mp = (20 * this.level);
			this.atk = (7 * this.level) + (1 * this.level);
			this.def = (7 * this.level) + (2 * this.level);
			this.matk = (7 * this.level) + (3 * this.level);
			this.mdef = (7 * this.level) + (2 * this.level);
			this.spd = (7 * this.level) + (2 * this.level);
			
			this.atkmsg = "Enemy gazed directly at you for ";
			this.xp = 20 * this.level;
		} else if(this.uClass == eRank2Classes[2]) { // Impyro Class
			this.hp = (200 * this.level);
			this.mp = (30 * this.level);
			this.atk = (7 * this.level) + (1 * this.level);
			this.def = (7 * this.level) + (0 * this.level);
			this.matk = (7 * this.level) + (4 * this.level);
			this.mdef = (7 * this.level) + (3 * this.level);
			this.spd = (7 * this.level) + (2 * this.level);
			
			this.atkmsg = "Enemy charged at you in a blazing inferno for ";
			this.xp = 20 * this.level;
		} else if(this.uClass == eRank2Classes[3]) { // Demon Nite Class
			this.hp = (240 * this.level);
			this.mp = (15 * this.level);
			this.atk = (7 * this.level) + (3 * this.level);
			this.def = (7 * this.level) + (2 * this.level);
			this.matk = (7 * this.level) + (1 * this.level);
			this.mdef = (7 * this.level) + (2 * this.level);
			this.spd = (7 * this.level) + (1 * this.level);
			
			this.atkmsg = "Enemy sliced at you with a flaming sword for ";
			this.xp = 20 * this.level;
		} else if(this.uClass == eRank2Classes[eRank2Classes.length-1]) { // Leonard, the Saber-toothed Bearigatorsaurus
			this.hp = (400 * this.level);
			this.mp = (30 * this.level);
			this.atk = (7 * this.level) + (4 * this.level);
			this.def = (7 * this.level) + (3 * this.level);
			this.matk = (7 * this.level) + (2 * this.level);
			this.mdef = (7 * this.level) + (3 * this.level);
			this.spd = (7 * this.level) + (3 * this.level);
			
			this.atkmsg = "Not sure what the attack was, but it hit you for ";
			this.xp = 20 * this.level;
		} else { // Just in case
			this.hp = (150 * this.level);
			this.mp = (15 * this.level);
			this.atk = (7 * this.level) + (0 * this.level);
			this.def = (7 * this.level) + (0 * this.level);
			this.matk = (7 * this.level) + (0 * this.level);
			this.mdef = (7 * this.level) + (0 * this.level);
			this.spd = (7 * this.level) + (0 * this.level);
			
			this.atkmsg = "Enemy hit you for ";
			this.xp = 20 * this.level;
		}
	}
}; // end Enemy

// Character Classes
// Possible names: Summoner, Beast Master, Blessed Knight, High Priest, Mystic, Scholar, Professor, Sage, Professor
// Duelist, Swordmaster, Bladedancer, Fallen Paladin, Chief Bandit, Marauder
// Find soldier rank names for reference
var baseClasses = ["Bandit", "Apprentice", "Knight"];
	
var rank1Classes = ["Maniac", "Mercenary", "Martial Artist", "Scholar", "Dark Mage", "Cleric", "Heavy Knight", "Samurai", "Cavalier"];
	
var rank2Classes = ["Psycho", "Barbarian", "Duelist", "Valiant", "Battle Veteran", "Black Belt", 
					"Mystic", "Sorcerer", "Night Mage", "Blood Mage", "Acolyte", "Unholy Mage", 
					"Heavy Tank", "Hell Knight", "Adept Ronin", "Assassin", "Paladin Rider", "Beast Rider"];
// Acolytes will have Druid choice

// Possible names: Dishonored Knight, Dr. Professor Mage, Cloistered Scholar, Demon Summoner
// Bosses: Pyrox, the Undying Phoenix
var eBaseClasses = ["Wolf", "Giant Rat", "Slime", "Imp", "Berg, the Unruly Barbarian"];
var eRank1Classes = ["Alpha Wolf", "Boa Constricta", "Skeleton", "Lesser Demon", "Rayo, the Gamma WarWolf"];
var eRank2Classes = ["Slime Mage", "Gorgon", "Impyro", "Demon Nite", "Leonard, the Saber-toothed Bearigatorsaurus"];

// Boss messages
function bossEntry(enemy) {
	if(this.uClass == eBaseClasses[eBaseClasses.length-1]) { // Berg
		combatInfo.innerHTML += "You see a giant figure leap from a mountain, landing near you!<br>";
		combatInfo.innerHTML += "Boss approaches!<br>";
	}
	
	if (this.uClass == eRank1Classes[eRank1Classes.length-1]) { // Rayo
		combatInfo.innerHTML += "You hear footsteps galloping at you from the forest!<br>";
		combatInfo.innerHTML += "Boss approaches!<br>";
	}
	
	if(this.uClass == eRank2Classes[eRank2Classes.length-1]) { // Leonard
		combatInfo.innerHTML += "You see a giant beast emerge from the lake, with a weapon in hand!<br>";
		combatInfo.innerHTML += "Boss approaches!<br>";
	}
	
} // end bossEntry()

function bossDeath(enemy) {
	if(enemy.uClass == eBaseClasses[eBaseClasses.length-1]) { // Berg
		combatInfo.innerHTML += "<br>\"Damn! How could I lose!\"<br>";
	}
	
	if (this.uClass == eRank1Classes[eRank1Classes.length-1]) { // Rayo
		combatInfo.innerHTML += "<br>\"...!\"<br>The beast has fled.<br>";
	}
	
	if (this.uClass == eRank2Classes[eRank2Classes.length-1]) { // Rayo
		combatInfo.innerHTML += "<br>\"YOU KNOCKED OUT MY SABER-TOOTH!\"<br>The beast walks back into the lake in sadness.<br>";
	}
} // end bossDeath()

function bossWin(enemy) {
	if(enemy.uClass == eBaseClasses[eBaseClasses.length-1]) { // Berg
		combatInfo.innerHTML += "<br>\"HA HA HA! Better luck next time!\"<br>";
	}
	
	if (this.uClass == eRank1Classes[eRank1Classes.length-1]) { // Rayo
		combatInfo.innerHTML += "<br>\"...\"<br>The beast has tossed you away from the forest.<br>";
	}
	
	if (this.uClass == eRank2Classes[eRank2Classes.length-1]) { // Leonard
		combatInfo.innerHTML += "<br>\"Too weak to be another trophy. Waste of time.\"<br>";
	}
} // end bossWin()

/* works; add to gameState() when ready
var bsDone = false;
function bossBS(enemy) {
	if(enemy.uClass == eBaseClasses[eBaseClasses.length-1] && enemy.hp < Math.round((150 * enemy.level)/4) && bsDone == false) { // Berg
		combatInfo.innerHTML += "<br>\"HAH! Do you think this is over!?<br>Enemy gained health.";
		enemy.hp += 50 * enemy.level;
		bsDone = true;
	}
}
*/


// Game start
var player = new Player("", 1, 0);

function updateChars() {
	chars.innerHTML = "Player Info: <br>------" + 
						  "<br>Class: " + player.uClass + " (" + player.transform + ")" +
						  "<br>Level: " + player.level + 
						  "<br>XP: " + player.xp + " / " + (player.level * 100) + 
						  "<br>Health: " + player.hp + 
						  "<br>Mana: " + player.mp + 
						  "<br>ATK: " + player.atk + 
						  "<br>DEF: " + player.def + 
						  "<br>MATK: " + player.matk + 
						  "<br>MDEF: " + player.mdef + 
						  "<br>SPD: " + player.spd;
}

// Displays character stats
function startFunc(){
	startButton.remove();
	
	if (player.statPoints > 0) {
		chars.innerHTML = "Player Info: <br>------" + 
						  "<br>Class: " + player.uClass + " (" + player.transform + ")" +
						  "<br>Level: " + player.level + 
						  "<br>XP: " + player.xp + " / " + (player.level * 100) + 
						  "<br>Health: " + player.hp + 
						  "<br>Mana: " + player.mp + 
						  "<br>ATK: " + player.atk + " <button id=\"aPlus1\">+1</button><button id=\"aPlus5\">+5</button>" + 
						  "<br>DEF: " + player.def + " <button id=\"dPlus1\">+1</button><button id=\"dPlus5\">+5</button>" + 
						  "<br>MATK: " + player.matk + " <button id=\"maPlus1\">+1</button><button id=\"maPlus5\">+5</button>" + 
						  "<br>MDEF: " + player.mdef + " <button id=\"mdPlus1\">+1</button><button id=\"mdPlus5\">+5</button>" + 
						  "<br>SPD: " + player.spd + " <button id=\"sPlus1\">+1</button><button id=\"sPlus5\">+5</button>" + 
						  "<br>Stat Points: " + player.statPoints;
		menuButton();
		
		var aPlus1 = document.getElementById("aPlus1");
		var aPlus5 = document.getElementById("aPlus5");
		var dPlus1 = document.getElementById("dPlus1");
		var dPlus5 = document.getElementById("dPlus5");
		var maPlus1 = document.getElementById("maPlus1");
		var maPlus5 = document.getElementById("maPlus5");
		var mdPlus1 = document.getElementById("mdPlus1");
		var mdPlus5 = document.getElementById("mdPlus5");
		var sPlus1 = document.getElementById("sPlus1");
		var sPlus5 = document.getElementById("sPlus5");
		
		
		aPlus1.onclick = function() {
			player.atkStat += 1;
			player.statPoints -= 1;
			
			player.levelUp();
			startFunc();
		};
		
		aPlus5.onclick = function() {
			player.atkStat += 5;
			player.statPoints -= 5;
			
			player.levelUp();
			startFunc();
		};
		
		dPlus1.onclick = function() {
			player.defStat += 1;
			player.statPoints -= 1;
			
			player.levelUp();
			startFunc();
		};
		
		dPlus5.onclick = function() {
			player.defStat += 5;
			player.statPoints -= 5;
			
			player.levelUp();
			startFunc();
		};
		
		maPlus1.onclick = function() {
			player.matkStat += 1;
			player.statPoints -= 1;
			
			player.levelUp();
			startFunc();
		};
		
		maPlus5.onclick = function() {
			player.matkStat += 5;
			player.statPoints -= 5;
			
			player.levelUp();
			startFunc();
		};
		
		mdPlus1.onclick = function() {
			player.mdefStat += 1;
			player.statPoints -= 1;
			
			player.levelUp();
			startFunc();
		};
		
		mdPlus5.onclick = function() {
			player.mdefStat += 5;
			player.statPoints -= 5;
			
			player.levelUp();
			startFunc();
		};
		
		sPlus1.onclick = function() {
			player.spdStat += 1;
			player.statPoints -= 1;
			
			player.levelUp();
			startFunc();
		};
		
		sPlus5.onclick = function() {
			player.spdStat += 5;
			player.statPoints -= 5;
			
			player.levelUp();
			startFunc();
		};
		
		if(player.statPoints < 5) {
				aPlus5.style.visibility = "hidden";
				dPlus5.style.visibility = "hidden";
				maPlus5.style.visibility = "hidden";
				mdPlus5.style.visibility = "hidden";
				sPlus5.style.visibility = "hidden";
		}
	} else {
		updateChars();
		menuButton();
	}
} // end startFunc()

// Initial character class
startButton.onclick = function() {
	upgradeClass();
}; // end startButton

// Menu
function menuButton() {
	if(menu.style.visibility == "hidden") {
		menu.style.visibility = "visible";
		goFight.style.visibility = "visible";
		reInc.style.visibility = "visible";
	} /*else {
		menu.style.visibility = "hidden";
		goFight.style.visibility = "hidden";
		reInc.style.visibility = "hidden";
	} */
	
	//menu.innerHTML = "<button id=\"fight\">Go Fight</button>";
} // end menuButton()

// Fight an enemy
goFight.onclick = function() {
		menu.style.visibility = "hidden";
		goFight.style.visibility = "hidden";
		reInc.style.visibility = "hidden";
		combatScreen();
}; // end goFight


reInc.onclick = function() {
	player.uClass = "";
	player.level = 1;
	player.xp = 0;
	
	player.hpRe = Math.round(player.hp/100);
	player.mpRe = 0;
	player.atkRe = Math.round(player.atk/10);
	player.defRe = Math.round(player.def/10);
	player.matkRe = Math.round(player.matk/10);
	player.mdefRe = Math.round(player.mdef/10);
	player.spdRe = Math.round(player.spd/10);
	
	player.statPoints = 0;
	player.hpStat = 0;
	player.mpStat = 0;
	player.atkStat = 0;
	player.defStat = 0;
	player.matkStat = 0;
	player.mdefStat = 0;
	player.spdStat = 0;
	
	player.hp = 0;
	player.mp = 0;
	player.atk = 0;
	player.def = 0;
	player.matk = 0;
	player.mdef = 0;
	player.spd = 0;

	for (let i = 0; i < player.skillSet.length; i++) {
		if (player.skillSet[i].skillActivated == true) {
			player.skillSet[i].skillActivated = false;
		}
		
		if (player.skillSet[i].tempActive == true) {
			player.skillSet[i].skillActive = false;
		}
		
		if (player.skillSet[i].summonActive == true) {
			player.skillSet[i].summonActive = false;
		}
		
		if (player.skillSet[i].transformActive == true) {
			player.skillSet[i].transformActive = false;
		}
	}
	player.skillSet = [];
	
	upgradeClass();
	reInc.style.visibility = "hidden";
}; // end reInc

function battleStats(player, enemy) {
	combat.innerHTML = "<br>" +
						"Player (" + player.uClass + ") <strong>" + player.statusE + "</strong><br>HP: " + player.hp + "<br>MP: " + player.mp + 
						
						"<br><br>" +
						"Enemy (" + enemy.uClass + ") <strong>" + enemy.statusE + "</strong><br>HP: " + enemy.hp + "<br>MP: " + enemy.mp;
} // end battleStats()


// Areas where the fight occurs
function combatScreen() {
	combatInfo.innerHTML = "";
	menu.style.visibility = "hidden";
	atkBtn.style.visibility = "visible";
	skillsBtn.style.visibility = "visible";
	
	var currentTurn = 0;
	var enemy = new Enemy(chooseEnemy(player, this), player.level);
	/* checks stats
	console.log(enemy.uClass);
	console.log(enemy.level);
	*/
	
	/*
	combat.innerHTML = "<br>" +
						"Player (" + player.uClass + ")<br>HP: " + player.hp + "<br>MP: " + player.mp +
						
						"<br><br>" +
						"Enemy (" + enemy.uClass + ")<br>HP: " + enemy.hp + "<br>MP: " + enemy.mp;
	*/
	
	battleStats(player, enemy);
	//combatInfo.innerHTML += "Turn " + currentTurn + "<br>";
	
	// Player presses attack button
	atkBtn.onclick = function() {
		/* Multiple attacks if you're faster than your opponent
		var pAttacks = 0;
		var eAttacks = 0;
		
		if (player.spd >= enemy.spd) {
			pAttacks = player.spd/enemy.spd - 1;
			while (pAttacks > 0) {
				playerAttack(player, enemy);
				combatInfo.innerHTML += "Player attacks again.<br>";
				pAttacks--;
			}
			playerAttack(player, enemy);
			enemyTurn(player, enemy);
		} else {
			eAttacks = enemy.spd/player.spd - 1;
			while (eAttacks > 0) {
				enemyTurn(player, enemy);
				combatInfo.innerHTML += "Enemy attacks again.<br>";
				eAttacks--;
			}
			enemyTurn(player, enemy);
			playerAttack(player, enemy);
		}
		*/
		
		if (player.spd >= enemy.spd) {
			currentTurn++;
			combatInfo.innerHTML += "<br>Turn " + currentTurn + "<br>";
			
			if (player.spd >= (enemy.spd * 2)) {
				playerAttack(player, enemy);
				combatInfo.innerHTML += "Player attacks again.<br>";
			}
			playerAttack(player, enemy);
			enemyTurn(player, enemy);
		} else {
			currentTurn++;
			combatInfo.innerHTML += "<br>Turn " + currentTurn + "<br>";
			
			if (enemy.spd > (player.spd * 2)) {
				enemyTurn(player, enemy);
				combatInfo.innerHTML += "Enemy attacks again.<br>";
			}
			enemyTurn(player, enemy);
			playerAttack(player, enemy);
		}

		gameState(player, enemy);
		
		combatInfo.scrollTop = combatInfo.scrollHeight;
	}; // end atkBtn
	
	skillsBtn.onclick = function() {
		skillsBtn.style.visibility = "hidden";
		skillSelection.style.visibility = "visible";
				
		let skill;
		
		//console.log("player.skillSet: " + player.skillSet[0].skillName + " " + player.skillSet[0].skillType);
		if (player.skillSet.length != 0) {
			for (let i = 0; i < player.skillSet.length; i++) {
				skillSelection.innerHTML += "<button id=\"skill" + i + "\">" + player.skillSet[i].skillName + "</button>";
			}
			
			
			for (let i = 0; i < player.skillSet.length; i++) {
				skill = document.getElementById("skill"+i);
				console.log(skill);
				
				skill.onmouseover = function() {
					skillDesc.innerHTML = player.skillSet[i].desc;
				};
				
				skill.onclick = function() {
					skillDesc.innerHTML = "&nbsp;";
					//skillsBtn.style.visibility = "visible";
					//skillSelection.style.visibility = "hidden";
				    
					if (player.skillSet[i].skillType == "active") {
						if(player.mp >= player.skillSet[i].mpCost) {
							
							//console.log(skill.length);
							currentTurn++;
							combatInfo.innerHTML += "<br>Turn " + currentTurn + "<br>";
							var chance = Math.random() * 100 + 1;
							var pDamage = 0;
								
							if (player.skillSet[i].damageType == "magic") {
								pDamage =  Math.floor(Math.random() * 10) + player.skillSet[i].damage - (Math.round(enemy.mdef/3));
							} else if (player.skillSet[i].damageType == "healing") {
								pDamage = 0;
							}else {
								pDamage =  Math.floor(Math.random() * 10) + player.skillSet[i].damage - (Math.round(enemy.def/3));
							}

							console.log("player.skillSet[i].damage: " + player.skillSet[i].damage);
							
							if (player.spd >= enemy.spd) {
								player.mp -= player.skillSet[i].mpCost;
								enemy.hp -= pDamage;

								if (player.skillSet[i].damageType == "healing") {
									combatInfo.innerHTML += "";
								} else {
									combatInfo.innerHTML += player.skillSet[i].atkMessage + pDamage + " damage. <br>";
								}
								
								activeSkills(player.skillSet[i]);
								
								if(chance >= player.skillSet[i].effectChance) {
									enemy.statusE = player.skillSet[i].damageEff;
								}
								
								summonAttack(player, enemy);
								
								enemyTurn(player, enemy);

								gameState(player, enemy);

								combatInfo.scrollTop = combatInfo.scrollHeight;
							} else  {
								if (enemy.spd > (player.spd * 2)) {
									enemyTurn(player, enemy);
									combatInfo.innerHTML += "Enemy attacks again.<br>";
								}
								enemyTurn(player, enemy);
								
								player.mp -= player.skillSet[i].mpCost;
								enemy.hp -= pDamage;

								if (player.skillSet[i].damageType == "healing") {
									combatInfo.innerHTML += "";
								} else {
									combatInfo.innerHTML += player.skillSet[i].atkMessage + pDamage + " damage. <br>";
								}
								
								activeSkills(player.skillSet[i]);
								
								if(chance > player.skillSet[i].effectChance) {
									enemy.statusE = player.skillSet[i].damageEff;
								}
								
								summonAttack(player, enemy);

								gameState(player, enemy);

								combatInfo.scrollTop = combatInfo.scrollHeight;
							}
							
						} else {
							skill.disabled = true;
						}
					} // end active if
					
					if (player.skillSet[i].skillType == "summon" && player.skillSet[i].summonActive == false && summon1.innerHTML == "") {
						if (player.mp >= player.skillSet[i].mpCost) {
							currentTurn++;
							combatInfo.innerHTML += "<br>Turn " + currentTurn + "<br>";
							console.log(player.skillSet[i].summonActive);
							player.mp -= player.skillSet[i].mpCost;
							
							player.skillSet[i].summonActive = true;
							summonSkills();
							
							console.log(player.skillSet[i].hp);
							summon1.style.visibility = "visible";
							summon1.style.border = "1px solid black";
							summon1.innerHTML = "<br>Summon: (" + player.skillSet[i].sName + ")<br>HP: " + player.skillSet[i].hp + "<br>MP: " + player.skillSet[i].mp;
							combatInfo.innerHTML += player.skillSet[i].atkMessage + "<br>";
							
							if (enemy.spd > (player.spd * 2)) {
								enemyTurn(player, enemy);
								combatInfo.innerHTML += "Enemy attacks again.<br>";
							}
							enemyTurn(player, enemy);

							gameState(player, enemy);

							combatInfo.scrollTop = combatInfo.scrollHeight;
						} else {
							combatInfo.innerHTML += "<br>Summon has no health left this battle.<br>";
							combatInfo.scrollTop = combatInfo.scrollHeight;
						}
					} // end summon if
					
					if (player.skillSet[i].skillType == "temp") {
						if (player.mp >= player.skillSet[i].mpCost && player.skillSet[i].tempActive == false) {
							currentTurn++;
							combatInfo.innerHTML += "<br>Turn " + currentTurn + "<br>";
							//console.log("def: " + player.def);
							player.mp -= player.skillSet[i].mpCost;
							
							player.skillSet[i].tempActive = true;
							tempSkills(enemy);
							
							//console.log("new def: " + player.def);
							tempSkill.innerHTML += player.skillSet[i].skillName + "<br>";
							
							combatInfo.innerHTML += player.skillSet[i].atkMessage + "<br>";
							
							summonAttack(player, enemy);
							
							if (enemy.spd > (player.spd * 2)) {
								enemyTurn(player, enemy);
								combatInfo.innerHTML += "Enemy attacks again.<br>";
							}
							enemyTurn(player, enemy);

							gameState(player, enemy);
							
							combatInfo.scrollTop = combatInfo.scrollHeight;
						} else {
							combatInfo.innerHTML += "<br>Skill is already active.<br>";
							combatInfo.scrollTop = combatInfo.scrollHeight;
						}
					} // end temp if
					
					if (player.skillSet[i].skillType == "transform") {
						if (player.mp >= player.skillSet[i].mpCost && player.skillSet[i].transformActive == false) {
							currentTurn++;
							combatInfo.innerHTML += "<br>Turn " + currentTurn + "<br>";
							console.log("player.transform: " + player.transform);
							player.mp -= player.skillSet[i].mpCost;
							
							player.skillSet[i].transformActive = true;
							transformSkills();
							
							console.log("new transform: " + player.transform);
							
							combatInfo.innerHTML += player.skillSet[i].atkMessage + "<br>";
							
							summonAttack(player, enemy);
							
							if (enemy.spd > (player.spd * 2)) {
								enemyTurn(player, enemy);
								combatInfo.innerHTML += "Enemy attacks again.<br>";
							}
							enemyTurn(player, enemy);

							gameState(player, enemy);
							
							combatInfo.scrollTop = combatInfo.scrollHeight;
						} else {
							combatInfo.innerHTML += "<br>Skill is already active.<br>";
							combatInfo.scrollTop = combatInfo.scrollHeight;
						}
					} // end transform if
					
				}; // end skill
			}
		} else {
			skillSelection.innerHTML = "No skills available.";
		}
		
		combatInfo.scrollTop = combatInfo.scrollHeight;
	}; // end skillsBtn
} // end combatScreen()

// Decides on an enemy
function chooseEnemy(player, enemy) {
	var eChoice = Math.floor(Math.random() * 5);
	console.log("eChoice " + eChoice);
	
	if (baseClasses.includes(player.uClass)) {
		enemy.uClass = eBaseClasses[eChoice];
		bossEntry(enemy);
	} else if (rank1Classes.includes(player.uClass)) {
		enemy.uClass = eRank1Classes[eChoice];
		bossEntry(enemy);
	} else if (rank2Classes.includes(player.uClass)) {
		enemy.uClass = eRank2Classes[eChoice];
		bossEntry(enemy);
	}
	
	return enemy.uClass;
} // end chooseEnemy()

// Player normal attack
function playerAttack(player, enemy) {
	var chance = Math.floor(Math.random() * 100) + 1;
	var pDamage = 0;
	var poisonDamage = 10 + Math.floor(10 * (player.level/10));
	var turnsPoisoned;
	
	
	// status afflictions
	if (player.statusE == "poison") {
		updateChars();
		
		player.hp -= poisonDamage;
		combatInfo.innerHTML += "The player is being effected by [" + player.statusE + "] and lost " + poisonDamage + " HP!<br>";
		
		turnsPoisoned++;
		if(turnsPoisoned >= 5) {
			turnsPoisoned = 0;
			player.statusE = "";
		}
	}
	
	if (player.statusE == "stun") {
		updateChars();
		combatInfo.innerHTML += "The player is being effected by [" + player.statusE + "] this turn!<br>"; 
		player.statusE = "";
		return;
	}
	
	if (player.statusE == "confusion") {
		combatInfo.innerHTML += "The player is confused! ";
		if (chance < 50) {
		updateChars();
		pDamage = (player.atk > player.matk) ? (Math.floor((Math.random() * (player.atk/2) + player.atk)/2)) : (Math.floor((Math.random() * (player.matk/2) + player.matk)/2));
		player.hp -= pDamage;
		combatInfo.innerHTML += "The player hurt themselves for " + pDamage + " damage!<br>";
		} else {
			player.statusE = "";
			combatInfo.innerHTML += "The player returned to their senses.<br>";
		}
		return;
	}
	
	if (player.statusE == "gravity") {
		updateChars();
		let gravSlow = 10 * Math.floor(player.level/20);
		
		player.spd -= gravSlow;
		combatInfo.innerHTML += "The player was slowed by the effects of gravity (-" + gravSlow + " spd).<br>";
		player.statusE = "";
	}
	// status afflictions end
	
	if (player.atk >= player.matk) {
		pDamage = Math.floor(Math.random() * (player.atk/3) + player.atk) - (Math.round(enemy.def/3));
		if (pDamage < 0) pDamage = 0;
		//console.log("player.atk: " + player.atk);
		//console.log("enemy.def: " + enemy.def);
		//var eDamage;
		enemy.hp -= pDamage;

		combatInfo.innerHTML += player.atkmsg + pDamage + " damage. <br>";
	} else {
		pDamage = Math.floor(Math.random() * (player.matk/3) + player.matk) - (Math.round(enemy.mdef/3));
		if (pDamage < 0) pDamage = 0;
		console.log("player.matk: " + player.matk);
		console.log("enemy.mdef: " + enemy.mdef);
		//var eDamage;
		enemy.hp -= pDamage;

		combatInfo.innerHTML += player.atkmsg + pDamage + " damage. <br>";
	}
	
	summonAttack(player, enemy);
	
} // end playerAttack()
function summonAttack(player, enemy) {
	var sDamage = 0;
	for (let i = 0; i < player.skillSet.length; i++) {
		var chance = Math.random() * 100;
		if (player.skillSet[i].skillType == "summon" && player.skillSet[i].summonActive == true && player.skillSet[i].hp > 0) {
			if ((player.skillSet[i].matk > player.skillSet[i].atk) && chance > 10 && player.skillSet[i].mp >= 2) {
				sDamage = player.skillSet[i].damage;
				enemy.hp -= sDamage;
				player.skillSet[i].mp -= Math.floor(2 + player.level/10);
				if (player.skillSet[i].mp < 0) player.skillSet[i].mp = 0;
				combatInfo.innerHTML += "Summon dealt " + sDamage + " damage. <br>";
				summon1.innerHTML = "<br>Summon: (" + player.skillSet[i].sName + ")<br>HP: " + player.skillSet[i].hp + "<br>MP: " + player.skillSet[i].mp;
			} else if ((player.skillSet[i].atk > player.skillSet[i].matk) && chance > 10 && player.skillSet[i].mp >= 2 && player.skillSet[i].hp > 0) {
				sDamage = player.skillSet[i].damage;
				enemy.hp -= sDamage;
				player.skillSet[i].mp -= Math.floor(2 + player.level/10);
				combatInfo.innerHTML += player.skillSet[i].atkmsg + sDamage + " damage. <br>";
				summon1.innerHTML = "<br>Summon: (" + player.skillSet[i].sName + ")<br>HP: " + player.skillSet[i].hp + "<br>MP: " + player.skillSet[i].mp;
			} else  {
				if (player.skillSet[i].hp > 0) {
					player.skillSet[i].hp -= player.skillSet[i].heal;
					player.hp += player.skillSet[i].heal;
					
					combatInfo.innerHTML += "Summon healed player for " + player.skillSet[i].heal + ".<br>";
					summon1.innerHTML = "<br>Summon: (" + player.skillSet[i].sName + ")<br>HP: " + player.skillSet[i].hp + "<br>MP: " + player.skillSet[i].mp;
				}
			}
		}
	}
}

// Enemy attacks
function enemyTurn(player, enemy) {
	var chance = Math.floor(Math.random() * 100) + 1;
	var eDamage = 0;
	var poisonDamage = 10 + Math.floor(10 * (player.level/10));
	
	// status afflictions
	if (enemy.statusE == "poison") {
		updateChars();
		let poisonOff = Math.floor(Math.random() * 10 + 1);
		
		enemy.hp -= poisonDamage;
		combatInfo.innerHTML += "The enemy is being effected by [" + enemy.statusE + "] and lost " + poisonDamage + " HP!<br>";
		
		if(poisonOff > 9) {
			combatInfo.innnerHTML += "The enemy is no longer poisoned.";
			enemy.statusE = "";
		}
	}
	
	if (enemy.statusE == "stun") {
		updateChars();
		
		combatInfo.innerHTML += "The enemy is being effected by [" + enemy.statusE + "] this turn!<br>"; 
		enemy.statusE = "";
		return;
	}
	
	if (enemy.statusE == "confusion") {
		combatInfo.innerHTML += "The enemy is confused! ";
		if (chance < 50) {
		updateChars();
		eDamage = (enemy.atk > enemy.matk) ? (Math.floor((Math.random() * (enemy.atk/2) + enemy.atk)/2)) : (Math.floor((Math.random() * (enemy.matk/2) + enemy.matk)/2));
		enemy.hp -= eDamage;
		combatInfo.innerHTML += "The enemy hurt themselves for " + eDamage + " damage!<br>";
		} else {
			enemy.statusE = "";
			combatInfo.innerHTML += "The enemy returned to their senses.<br>";
		}
		return;
	}
	
	if (enemy.statusE == "gravity") {
		updateChars();
		let gravSlow = 10 * Math.floor(player.level/20);
		
		enemy.spd -= gravSlow;
		combatInfo.innerHTML += "The enemy was slowed by the effects of gravity (-" + gravSlow + " spd).<br>";
		enemy.statusE = "";
	}
	
	if (enemy.statusE == "death") {
		updateChars();
		enemy.hp = 0;
		combatInfo.innerHTML += "The enemy has suffered from the mark!<br>";
		enemy.statusE = "";
		return;
	}
	// status afflictions end
	
	if (enemy.atk > enemy.matk) {
		//console.log("enemy.atk: " + enemy.atk);
		//console.log("player.def: " + player.def);
		eDamage = Math.floor(Math.random() * (enemy.atk/2) + enemy.atk) - (Math.round(player.def/3));
	} else {
		eDamage = Math.floor(Math.random() * (enemy.matk/2) + enemy.matk) - (Math.round(player.mdef/3));
	}
	
	var eHeal = Math.ceil(Math.random() * enemy.mdef) + 3;
	var eCrit = eDamage * 2;
	
	
	if (chance <= 10 && enemy.mp >= 5) {
		enemy.mp -= 5;
		enemy.hp += eHeal;
		combatInfo.innerHTML += "Enemy healed " + eHeal + " HP.<br>";
	} else {
		if (eDamage < 0) {
			eDamage = 0;
			combatInfo.innerHTML += "Enemy did no damage.<br>";
			return;
		}
		if (chance >= 98) {
			player.hp -= eCrit;
			combatInfo.innerHTML += "Enemy critically striked for " + eCrit + "!<br>";
		} else {
			player.hp -= eDamage;
			combatInfo.innerHTML += enemy.atkmsg + eDamage + " damage.<br>";
		}
	}
} // end enemyTurn()

// Shows whats going on in the turn
function gameState(player, enemy) {
	if (player.hp <= 0) { player.hp = 0; }
	if (enemy.hp <= 0) { enemy.hp = 0; }
	
	for (let i = 0; i < player.skillSet.length; i++) {
		if (player.skillSet[i].skillType == "summon" && player.skillSet[i].summonActive == true && player.skillSet[i].hp <= 0) {
			summon1.innerHTML = "";
			summon1.style.border = "";
		}
	}
	
	//bossBS(enemy);
	
	battleStats(player, enemy);
	
	if(enemy.hp <= 0) {
		for (let i = 0; i < player.skillSet.length; i++) {
			if (player.skillSet[i].skillType == "summon" && player.skillSet[i].summonActive == true) {
				player.skillSet[i].summonActive = false;
				summon1.style.border = "";
			}
			
			player.skillSet[i].tempActive = false;
			tempSkill.innerHTML = "";
			
			player.skillSet[i].transformActive = false;
			player.transform = player.baseForm;
		}
		
		bossDeath(enemy);
		atkBtn.style.visibility = "hidden";
		skillsBtn.style.visibility = "hidden";
		skillSelection.style.visibility = "hidden";
		skillSelection.innerHTML = "";
		skillDesc.innerHTML = "&nbsp;";
		summon1.innerHTML = "";
		var eXP = Math.floor(Math.random() * 30) + enemy.xp;
                eXP *= 4;
		//xpEarned = eXP;
		
		combatInfo.innerHTML += "<br>You win! <br>";
		combatInfo.innerHTML += "You earned " + eXP + " XP!";
		combatInfo.scrollTop = combatInfo.scrollHeight;
		player.xp += (eXP);

		player.levelUp();
		startFunc();
	}
	
	if (player.hp <= 0 && enemy.hp > 0) {
		for (let i = 0; i < player.skillSet.length; i++) {
			if (player.skillSet[i].skillType == "summon" && player.skillSet[i].summonActive == true) {
				player.skillSet[i].summonActive = false;
				summon1.style.border = "";
			}
			
			player.skillSet[i].tempActive = false;
			tempSkill.innerHTML = "";
			
			player.skillSet[i].transformActive = false;
			player.transform = player.baseForm;
		}
		
		bossWin(enemy);
		atkBtn.style.visibility = "hidden";
		skillsBtn.style.visibility = "hidden";
		skillSelection.style.visibility = "hidden";
		skillSelection.innerHTML = "";
		skillDesc.innerHTML = "&nbsp;";
		summon1.innerHTML = "";
		combatInfo.innerHTML += "<br>You lost!";
		combatInfo.scrollTop = combatInfo.scrollHeight;
		
		player.levelUp();
		startFunc();
	}
} // end gameState()

// Upgrades classes (upgradeClass.js)
function upgradeClass() {
	changeClasses.style.visibility = "visible";
	choiceA.style.visibility = "visible";
	choiceB.style.visibility = "visible";
	choiceC.style.visibility = "visible";
	
	if (player.uClass == "") { // starting class
		changeClasses.innerHTML = "Select a class: ";
		choiceA.innerHTML = baseClasses[0];
		choiceB.innerHTML = baseClasses[1];
		choiceC.innerHTML = baseClasses[2];
		
		choiceA.onclick = function() {
			player.uClass = baseClasses[0];
			//console.log(player.uClass);
			choiceA.style.visibility = "hidden";
			choiceB.style.visibility = "hidden";
			choiceC.style.visibility = "hidden";
			changeClasses.style.visibility = "hidden";
			player.levelUp();
			startFunc();
		};
		
		choiceB.onclick = function() {
			player.uClass = baseClasses[1];
			//console.log(player.uClass);
			choiceA.style.visibility = "hidden";
			choiceB.style.visibility = "hidden";
			choiceC.style.visibility = "hidden";
			changeClasses.style.visibility = "hidden";
			player.levelUp();
			startFunc();
		};
		
		choiceC.onclick = function() {
			player.uClass = baseClasses[2];
			//console.log(player.uClass);
			choiceA.style.visibility = "hidden";
			choiceB.style.visibility = "hidden";
			choiceC.style.visibility = "hidden";
			changeClasses.style.visibility = "hidden";
			player.levelUp();
			startFunc();
		};
	}

	if (baseClasses.includes(player.uClass)) { // to rank 1
		for (let i = 0; i < baseClasses.length; ++i) {			
			if (player.uClass == baseClasses[i]) {
				changeClasses.innerHTML = "Select a class: ";
				choiceA.innerHTML = rank1Classes[(i*3)];
				choiceB.innerHTML = rank1Classes[(i*3)+1];
				choiceC.innerHTML = rank1Classes[(i*3)+2];
				
				choiceA.onclick = function() {
					player.uClass = rank1Classes[(i*3)];
					player.levelUp();
					//console.log(player.uClass);
					choiceA.style.visibility = "hidden";
					choiceB.style.visibility = "hidden";
					choiceC.style.visibility = "hidden";
					changeClasses.style.visibility = "hidden";
					startFunc();
				};
				
				choiceB.onclick = function() {
					player.uClass = rank1Classes[(i*3)+1];
					player.levelUp();
					//console.log(player.uClass);
					choiceA.style.visibility = "hidden";
					choiceB.style.visibility = "hidden";
					choiceC.style.visibility = "hidden";
					changeClasses.style.visibility = "hidden";
					startFunc();
				};
				
				choiceC.onclick = function() {
					player.uClass = rank1Classes[(i*3)+2];
					player.levelUp();
					//console.log(player.uClass);
					choiceA.style.visibility = "hidden";
					choiceB.style.visibility = "hidden";
					choiceC.style.visibility = "hidden";
					changeClasses.style.visibility = "hidden";
					startFunc();
				};
			}
		}
	} else if (rank1Classes.includes(player.uClass)) { // to rank 2
		for (let i = 0; i < rank1Classes.length; ++i) {
			//console.log("rank1Classes[i]: " + rank1Classes[i]);
			if (player.uClass == rank1Classes[i]) {
				changeClasses.innerHTML = "Select a class: ";
				choiceA.innerHTML = rank2Classes[(i*2)];
				choiceB.innerHTML = rank2Classes[(i*2)+1];
				choiceC.style.visibility = "hidden";
				
				choiceA.onclick = function() {
					player.uClass = rank2Classes[(i*2)];
					player.levelUp();
					//console.log(player.uClass);
					choiceA.style.visibility = "hidden";
					choiceB.style.visibility = "hidden";
					choiceC.style.visibility = "hidden";
					changeClasses.style.visibility = "hidden";
					startFunc();
				};
				
				choiceB.onclick = function() {
					player.uClass = rank2Classes[(i*2)+1];
					player.levelUp();
					//console.log(player.uClass);
					choiceA.style.visibility = "hidden";
					choiceB.style.visibility = "hidden";
					choiceC.style.visibility = "hidden";
					changeClasses.style.visibility = "hidden";
					startFunc();
				};
			}
		}
	}
} // end upgradeClass()


/***********************************************************************
 * Skills Section
 ***********************************************************************/
 
// Skill Settings
var Skill = function(skillName, skillType) {
	// all skills should have this
	this.skillName = skillName;
	this.skillType = skillType;
	this.skillClass = "";
	this.desc = "";
	this.skillActivated = false;
	this.atkMessage = "";
	this.mpCost = 0;
	
	// passive skills
	this.incStat = [];
	this.decStat = [];
	
	// active skills
	this.damageType = "";
	this.damageEff = "";
	this.effectChance = 0;
	this.damage = 0;
	
	// temp skills
	this.tempActive = false;
	
	// summon skills
	this.summonActive = false;
	
	// transform skills
	this.transform = "";
	this.transformActive = false;
	
	if (this.skillType == "summon") {
		this.sName = "";
		this.hp = 20;
		this.mp = 20;
		this.atk = 3;
		this.def = 3;
		this.matk = 3;
		this.mdef = 3;
		this.spd = 3;
		
		this.heal = 0;
		this.atkmsg = "";
		//summon1.innerHTML += "<br>Summon: (" + this.skillName + ")<br>HP: " + this.hp + "<br>MP: " + this.mp;
	}
};

// Duelist: Thousand Piercings (active)
// Gravity Bomb (active, deals a lot of damage, costs a lot of mp)
// Rumble (active, small earthquake)
// Heavy Tank: Release Restraint (transform, takes off heavy equipment parts of the armor)

function skillSets(player) {
	// base classes
	if (player.uClass == baseClasses[0]) banditSkillSet(player);
	if (player.uClass == baseClasses[1]) apprenticeSkillSet(player);
	if (player.uClass == baseClasses[2]) knightSkillSet(player);
	
	// rank1 classes
	if (player.uClass == rank1Classes[0]) maniacSkillSet(player);
	if (player.uClass == rank1Classes[1]) mercenarySkillSet(player);
	if (player.uClass == rank1Classes[2]) martialArtistSkillSet(player);
	
	if (player.uClass == rank1Classes[3]) scholarSkillSet(player);
	if (player.uClass == rank1Classes[4]) darkMageSkillSet(player);
	if (player.uClass == rank1Classes[5]) clericSkillSet(player);
	
	if (player.uClass == rank1Classes[6]) heavyKnightSkillSet(player);
	if (player.uClass == rank1Classes[7]) samuraiSkillSet(player);
	if (player.uClass == rank1Classes[8]) cavalierSkillSet(player);
	
	// rank2 classes
}

//////////////////////////////////////////////////////////////////////////////////////////
// Base Classes
//////////////////////////////////////////////////////////////////////////////////////////
/*********************************
 * Bandit Skills
 *********************************/
// powerStrike skill
var powerStrike = new Skill("PowerStrike", "active");
powerStrike.mpCost = 2;
powerStrike.desc = "Delivers a powerful attack to the opponent. (MP: " + powerStrike.mpCost + ")";
powerStrike.atkMessage = "You hit your opponent with a powerful attack for ";
//console.log(powerStrike);

// wildFighter skill
var wildFighter = new Skill("WildFighter (+atk)", "passive");
wildFighter.desc = "Passive: Permanently raises your atk by 10.";
//console.log(wildFighter);

// bluff skill
var bluff = new Skill("Bluff", "temp");
bluff.mpCost = 4;
bluff.desc = "Fools your opponent into lowering their defense. (MP: " + bluff.mpCost + ")";
bluff.atkMessage = "You fooled your opponent into lowering their guard! Lowering their def.";
//console.log(bluff);

// rage skill
var rage = new Skill("Rage", "temp");
rage.mpCost = 12;
rage.desc = "You're a bit pissed. Increasing your damage. (MP: " + rage.mpCost + ")";
rage.atkMessage = "You're pissed off! Damage is increased.";
//console.log(rage);

// callBandit skill
var callBandit = new Skill("Call Bandit", "summon");
callBandit.mpCost = 15;
callBandit.desc = "Summons another bandit to join you in battle. (MP: " + callBandit.mpCost + ")";
callBandit.atkMessage = "You called a crew member into battle!";
//console.log(callBandit);

function banditSkillSet(player) {
	// powerStrike
	powerStrike.damage = Math.floor((player.atk/3) + Math.round(player.atk * 0.9));
	
	// bluff
	bluff.decStat[0] = Math.floor((player.level < 10 || baseClasses.includes(player.uClass)) ? 10 : (player.level * 2));
	
	// rage
	rage.incStat[0] = Math.floor((player.level < 10 || baseClasses.includes(player.uClass)) ? 10 : (player.level * 2));
	
	// callBandit
	callBandit.damage = Math.floor(Math.random() * (callBandit.atk/4)) + Math.round(callBandit.atk * 1.4);
	
	// unlock powerStrike
	if (player.level >= 1 && powerStrike.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + powerStrike.skillName;
		player.skillSet.push(powerStrike);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(powerStrike.skillActivated);
		powerStrike.skillActivated = true;
	} // end powerStrike
	
	// unlock wildFighter
	if (player.level >= 2 && wildFighter.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + wildFighter.skillName;
		//console.log(wildFighter);
		console.log(wildFighter.skillActivated);
		wildFighter.skillActivated = true;
		player.atkStat += 10;
	} // end wildFighter
	
	// unlock bluff
	if (player.level >= 3 && bluff.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + bluff.skillName;
		//console.log(bluff);
		player.skillSet.push(bluff);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(bluff.skillActivated);
		bluff.skillActivated = true;
	} // end bluff
	
	// unlock rage
	if (player.level >= 5 && rage.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + rage.skillName;
		//console.log(rage);
		player.skillSet.push(rage);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(rage.skillActivated);
		rage.skillActivated = true;
	} // end rage
	
	// unlock callBandit
	if (player.level >= 8 && callBandit.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + callBandit.skillName;
		//console.log(callBandit);
		player.skillSet.push(callBandit);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(callBandit.skillActivated);
		callBandit.skillActivated = true;
	} // end callBandit
} // end banditSkillSet
/*********************************
 * Bandit Skills End
 *********************************/

/*********************************
 * Apprentice Skills
 *********************************/
// manaBolt skill
var manaBolt = new Skill("ManaBolt", "active");
manaBolt.mpCost = 3;
manaBolt.desc = "Deals magic damage to the opponent. (MP: " + manaBolt.mpCost + ")";
manaBolt.atkMessage = "You hit your opponent with concentrated mana for ";
manaBolt.damageType = "magic";

//manaBolt.effectChance = 70;
//manaBolt.damageEff = "confusion";
//console.log(manaBolt);

// manaBoostSmall skill
var manaBoostSmall = new Skill ("ManaBoost (+MP)", "passive");
manaBoostSmall.desc = "Passive: Permanently raises your MP by 50.";
//console.log(manaBoostSmall);

// magicCharge skill
var magicCharge = new Skill("MagicCharge", "temp");
magicCharge.mpCost = 5;
magicCharge.desc = "Raises your matk a bit. (MP: " + magicCharge.mpCost + ")";
magicCharge.atkMessage = "You powered up! Raising your matk!";
//console.log(magicCharge);

// arcaneSprite skill
var arcaneSprite = new Skill("ArcaneSprite", "summon");
arcaneSprite.mpCost = 10;
arcaneSprite.desc = "Summons an Arcane Sprite as an ally. (MP: " + arcaneSprite.mpCost + ")";
arcaneSprite.atkMessage = "You summoned an ArcaneSprite!";
//console.log(arcaneSprite);

// barrier skill
var barrier = new Skill("Barrier", "temp");
barrier.mpCost = 10;
barrier.desc = "Raises your def and mdef a bit. (MP: " + barrier.mpCost + ")";
barrier.atkMessage = "You casted a shield! Raising your def and mdef!";
//console.log(barrier);

function apprenticeSkillSet(player) {
	// manaBolt
	manaBolt.damage = Math.floor((player.matk/3) + Math.round(player.matk * 1.1));
	
	// magicCharge
	magicCharge.incStat[0] = Math.floor((player.level < 10 || baseClasses.includes(player.uClass)) ? (player.level * 1.5) : (player.level * 2));
	
	// arcaneSprite
	arcaneSprite.damage = Math.floor(Math.random() * (arcaneSprite.matk/4)) + Math.round(arcaneSprite.matk * 1.2);
	
	// barrier
	barrier.incStat[0] = Math.floor((player.level < 10 || baseClasses.includes(player.uClass)) ? (player.level * 1.5) : (player.level * 2));
	
	
	// unlock manaBolt
	if (player.level >= 1 && manaBolt.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + manaBolt.skillName;
		player.skillSet.push(manaBolt);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(manaBolt.skillActivated);
		manaBolt.skillActivated = true;
	} // end manaBolt
	
	// unlock manaBoostSmall
	if (player.level >= 2 && manaBoostSmall.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + manaBoostSmall.skillName;
		//console.log(manaBoostSmall);
		console.log(manaBoostSmall.skillActivated);
		manaBoostSmall.skillActivated = true;
		player.mpStat += 5; //50
	} // end manaBoostSmall
	
	// unlock magicCharge
	if (player.level >= 3 && magicCharge.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + magicCharge.skillName;
		//console.log(magicCharge);
		player.skillSet.push(magicCharge);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(magicCharge.skillActivated);
		magicCharge.skillActivated = true;
	} // end magicCharge
	
	// unlock arcaneSprite
	if (player.level >= 5 && arcaneSprite.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + arcaneSprite.skillName;
		//console.log(arcaneSprite);
		player.skillSet.push(arcaneSprite);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(arcaneSprite.skillActivated);
		arcaneSprite.skillActivated = true;
	} // end arcaneSprite
	
	// unlock barrier skill
	if (player.level >= 8 && barrier.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + barrier.skillName;
		//console.log(barrier);
		player.skillSet.push(barrier);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(barrier.skillActivated);
		barrier.skillActivated = true;
	} // end barrier
	
} // end apprenticeSkillSet
/*********************************
 * Apprentice Skills End
 *********************************/
 
/*********************************
 * Knight Skills
 *********************************/
// weaponSmash skill
var weaponSmash = new Skill("Weapon Smash", "active");
weaponSmash.mpCost = 2;
weaponSmash.desc = "Uses your weapon to bash your opponent in the head. High chance of confusion. (MP: " + weaponSmash.mpCost + ")";
weaponSmash.atkMessage = "You smashed your opponent with your weapon for ";

weaponSmash.effectChance = 40;
weaponSmash.damageEff = "confusion";
//console.log(weaponSmash);

// defensiveFighter
var defensiveFighter = new Skill("DefensiveFighter (+def, +mdef)", "passive");
defensiveFighter.desc = "Passive: Permanently raises your def and mdef a bit.";
//console.log(defensiveFighter);

// guard skill
var guard = new Skill("Guard", "temp");
guard.mpCost = 10;
guard.desc = "You raise your defenses, increasing your def, but decreasing your atk a bit. (MP: " + guard.mpCost + ")";
guard.atkMessage = "You empahsize your guard, raised your defenses!";
//console.log(guard);

// bash -active- (stun chance)
var bash = new Skill("Bash", "active");
bash.mpCost = 7;
bash.desc = "You bash your into your opponent knocking them off balance, with a chance to stun them. (MP: " + bash.mpCost + ")";
bash.atkMessage = "You bash into your opponent with great force dealing ";

bash.effectChance = 70;
bash.damageEff = "stun";
//console.log(bash);

// summonSquire
var summonSquire = new Skill("SummonSquire", "summon");
summonSquire.mpCost = 12;
summonSquire.desc = "Summons your squire into combat. (MP: " + summonSquire.mpCost + ")";
summonSquire.atkMessage = "You summoned your squire into battle!";
//console.log(summonSquire);

function knightSkillSet(player) {
	// weaponSmash
	weaponSmash.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.2));
	
	// guard
	guard.incStat[0] = Math.floor((player.level < 10 || baseClasses.includes(player.uClass)) ? 10 : (player.level * 2));
	guard.decStat[0] = Math.floor((player.level < 10 || baseClasses.includes(player.uClass)) ? 5 : (player.level));
	
	// bash
	bash.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.3));
	
	// summonSquire
	summonSquire.damage = Math.floor(Math.random() * (summonSquire.atk/4)) + Math.round(summonSquire.atk * 1.3);
	
	// unlock weaponSmash
	if (player.level >= 1 && weaponSmash.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + weaponSmash.skillName;
		player.skillSet.push(weaponSmash);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(weaponSmash.skillActivated);
		weaponSmash.skillActivated = true;
	} // end weaponSmash
	
	// unlock defensiveFighter
	if (player.level >= 2 && defensiveFighter.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + defensiveFighter.skillName;
		//console.log(defensiveFighter);
		console.log(defensiveFighter.skillActivated);
		defensiveFighter.skillActivated = true;
		player.defStat += 10;
		player.mdefStat += 5;
	} // end defensiveFighter
	
	// unlock guard
	if (player.level >= 3 && guard.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + guard.skillName;
		//console.log(guard);
		player.skillSet.push(guard);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(guard.skillActivated);
		guard.skillActivated = true;
	} // end guard
	
	// unlock bash
	if (player.level >= 5 && bash.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + bash.skillName;
		player.skillSet.push(bash);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(bash.skillActivated);
		bash.skillActivated = true;
	} // end bash
	
	// unlock summonSquire
	if (player.level >= 8 && summonSquire.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + summonSquire.skillName;
		//console.log(summonSquire);
		player.skillSet.push(summonSquire);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(summonSquire.skillActivated);
		summonSquire.skillActivated = true;
	} // end summonSquire
} // end knightSkillSet
/*********************************
 * Knight Skills End
 *********************************/
//////////////////////////////////////////////////////////////////////////////////////////
// Base Classes End
//////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////
// Rank1 Classes
//////////////////////////////////////////////////////////////////////////////////////////
/*********************************
 * Maniac Skills
 *********************************/
// Boss' Journal skill
var bossJournal = new Skill("Boss' Journal (+HP, +matk)", "passive");
bossJournal.desc = "Passive: Permanently raises your HP and matk.";
//console.log(bossJournal);

// bombToss skill
var bombToss = new Skill("BombToss", "active");
bombToss.mpCost = 16;
bombToss.desc = "Throws a bomb that explodes when it lands. (MP: " + bombToss.mpCost + ")";
bombToss.atkMessage = "You toss an explosive bomb at the enemy dealing ";

bombToss.effectChance = 85;
bombToss.damageEff = "stun";
//console.log(bombToss);

// flamethrower skill
var flamethrower = new Skill("Flamethrower", "active");
flamethrower.mpCost = 28;
flamethrower.desc = "Emits a flame breath that burns in a cone. Does bonus magic damage. (MP: " + flamethrower.mpCost + ")";
flamethrower.atkMessage = "You breathe out a burst of fire at the enemy, dealing ";
flamethrower.damageType = "magic";
//console.log(flamethrower);

// bloodBoil skill
var bloodBoil = new Skill("BloodBoil", "temp");
bloodBoil.mpCost = 44;
bloodBoil.desc = "You become filled with anger, increasing your atk, and spd, but decreasing def. (MP: " + bloodBoil.mpCost + ")";
bloodBoil.atkMessage = "Something about the enemy makes your blood boil. You become angry!";
//console.log(bloodBoil);

// kamikazeeStrike skill
var kamikazeeStrike = new Skill("kamikazeeStrike", "active");
kamikazeeStrike.mpCost = 75;
kamikazeeStrike.desc = "You charge your enemy by recklessly bodyslamming them, weapon in hand. You also take damage from the enemy. (MP: " + kamikazeeStrike.mpCost + ")";
kamikazeeStrike.atkMessage = "You recklessly slam into the enemy dealing ";
//console.log(kamikazeeStrike);

// Boss' Pupil
var bossPupil = new Skill("Boss' Pupil (+atk, +MP)", "passive");
bossPupil.desc = "Passive: Permanently raises your atk and MP.";
//console.log(bossPupil);

// summonGrunt skill
var summonGrunt = new Skill("SummonGrunt", "summon");
summonGrunt.mpCost = 92;
summonGrunt.desc = "You yell the signal to summon Peps, the Ace Grunt. (MP: " + summonGrunt.mpCost + ")";
summonGrunt.atkMessage = "You summoned a grunt into battle!";
//console.log(summonGrunt);

// flameBomb skill
var flameBomb = new Skill("FlameBomb", "active");
flameBomb.mpCost = 110;
flameBomb.desc = "Channels a huge fireball before launching it at the enemy. Deals bonus magic damage. (MP: " + flameBomb.mpCost + ")";
flameBomb.atkMessage = "You launch a giant exploding fireball at the enemy dealing ";
//console.log(flameBomb);

// maniacalLaugh skill
var maniacalLaugh = new Skill("ManiacalLaugh", "temp");
maniacalLaugh.mpCost = 126;
maniacalLaugh.desc = "You laugh with a sense of insanity and resolve, increasing your matk and mdef, and recovering a bit of health. (MP: " + maniacalLaugh.mpCost + ")";
maniacalLaugh.atkMessage = "You laugh with insanity confusing the enemy a bit!";
//console.log(maniacalLaugh);

function maniacSkillSet(player) {
	// bombToss
	bombToss.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.3));
	
	// flamethrower
	flamethrower.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.35) + Math.round(player.matk * 0.9));
	
	// bloodBoil
	bloodBoil.incStat[0] = 12 * Math.floor(player.level/10);
	bloodBoil.incStat[1] = 10 * Math.floor(player.level/10);
	bloodBoil.decStat[0] = 8 * Math.floor(player.level/10);
	
	// kamikazeeStrike
	kamikazeeStrike.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.8));
	
	// summonGrunt
	summonGrunt.damage = Math.floor(Math.random() * (summonGrunt.atk/4)) + Math.round(summonGrunt.atk * 1.3);
	
	// flameBomb
	flameBomb.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.5) + Math.round(player.matk * 1.1));
	
	// maniacalLaugh
	maniacalLaugh.incStat[0] = 15 * Math.floor(player.level/10);
	maniacalLaugh.incStat[1] = 15 * Math.floor(player.level/10);
	maniacalLaugh.incStat[2] = 232 * Math.floor(player.level/10);
	
	// unlock bossJournal
	if (player.level >= 11 && bossJournal.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + bossJournal.skillName;
		//console.log(bossJournal);
		console.log(bossJournal.skillActivated);
		bossJournal.skillActivated = true;
		player.hpStat += 10;
		player.mpStat += 10;
	} // end bossJournal
	
	// unlock bombToss skill
	if (player.level >= 12 && bombToss.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + bombToss.skillName;
		//console.log(bombToss);
		player.skillSet.push(bombToss);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(bombToss.skillActivated);
		bombToss.skillActivated = true;
	} // end bombToss

	// unlock flamethrower skill
	if (player.level >= 13 && flamethrower.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + flamethrower.skillName;
		//console.log(flamethrower);
		player.skillSet.push(flamethrower);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(flamethrower.skillActivated);
		flamethrower.skillActivated = true;
	} // end flamethrower
	
	// unlock bloodBoil
	if (player.level >= 17 && bloodBoil.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + bloodBoil.skillName;
		//console.log(bloodBoil);
		player.skillSet.push(bloodBoil);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(bloodBoil.skillActivated);
		bloodBoil.skillActivated = true;
	} // end bloodBoil
	
	// unlock kamikazeeStrike skill
	if (player.level >= 20 && kamikazeeStrike.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + kamikazeeStrike.skillName;
		//console.log(kamikazeeStrike);
		player.skillSet.push(kamikazeeStrike);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(kamikazeeStrike.skillActivated);
		kamikazeeStrike.skillActivated = true;
	} // end kamikazeeStrike
	
	// unlock bossPupil
	if (player.level >= 23 && bossPupil.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + bossPupil.skillName;
		//console.log(bossPupil);
		console.log(bossPupil.skillActivated);
		bossPupil.skillActivated = true;
		player.atkStat += 20;
		player.mpStat += 20;
	} // end bossPupil
	
	// unlock summonGrunt
	if (player.level >= 24 && summonGrunt.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + summonGrunt.skillName;
		//console.log(summonGrunt);
		player.skillSet.push(summonGrunt);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(summonGrunt.skillActivated);
		summonGrunt.skillActivated = true;
	} // end summonGrunt
	
	// unlock flameBomb skill
	if (player.level >= 26 && flameBomb.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + flameBomb.skillName;
		//console.log(flameBomb);
		player.skillSet.push(flameBomb);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(flameBomb.skillActivated);
		flameBomb.skillActivated = true;
	} // end flameBomb
	
	// unlock maniacalLaugh
	if (player.level >= 28 && maniacalLaugh.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + maniacalLaugh.skillName;
		//console.log(maniacalLaugh);
		player.skillSet.push(maniacalLaugh);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(maniacalLaugh.skillActivated);
		maniacalLaugh.skillActivated = true;
	} // end maniacalLaugh
} // end maniacSkillSet
/*********************************
 * Maniac Skills End
 *********************************/

/*********************************
 * Mercenary Skills
 *********************************/
// Commander's Log
var commanderLog = new Skill("Commander's Log (+HP, +mdef)", "passive");
commanderLog.desc = "Passive: Permanently raises your HP and mdef.";
//console.log(commanderLog);

// hurricaneSlash skill
var hurricaneSlash = new Skill("HurricaneSlash", "active");
hurricaneSlash.mpCost = 16;
hurricaneSlash.desc = "You perform a strong slash, forcing a gust of wind to slice at the enemy. (MP: " + hurricaneSlash.mpCost + ")";
hurricaneSlash.atkMessage = "You slice at the enemy with a sharp wind dealing ";
//console.log(hurricaneSlash);

// reinforcements skill
var reinforcements = new Skill("Reinforcements", "summon");
reinforcements.mpCost = 43;
reinforcements.desc = "You call for reinforcements. One of your allies is summoned into combat. (MP: " + reinforcements.mpCost + ")";
reinforcements.atkMessage = "Oswaldo, the Chef joins the battle!";
//console.log(reinforcements);

// empowerWeapon skill
var empowerWeapon = new Skill("EmpowerWeapon", "temp");
empowerWeapon.mpCost = 60;
empowerWeapon.desc = "You enchants your weapon with mana, increasing your atk. (MP: " + empowerWeapon.mpCost + ")";
empowerWeapon.atkMessage = "Your weapon is glowing with power!";
//console.log(empowerWeapon);

// lightningImpaler skill
var lightningImpaler = new Skill("Lightning Impaler", "active");
lightningImpaler.mpCost = 39;
lightningImpaler.desc = "You jump high in the air, charging electricity, before plunging down with your weapon on the enemy. (MP: " + lightningImpaler.mpCost + ")";
lightningImpaler.atkMessage = "You crashed down on the enemy in an electric fury dealing ";
//console.log(lightningImpaler);

// Commander's Ace
var commanderAce = new Skill("Commander's Ace (+atk, +def)", "passive");
commanderAce.desc = "Passive: Permanently raises your atk and def.";
//console.log(commanderAce);

// summonComrade skill
var summonComrade = new Skill("SummonComrade", "summon");
summonComrade.mpCost = 88;
summonComrade.desc = "You let lose a scroll that summons an ally into combat. (MP: " + summonComrade.mpCost + ")";
summonComrade.atkMessage = "Murloc, teleports into the battlefield, staff in hand, ready for combat!";
//console.log(summonComrade);

// hustleTime skill
var hustleTime = new Skill("Hustle Time", "temp");
hustleTime.mpCost = 100;
hustleTime.desc = "You treat the battle a bit more seriously, increasing your def and spd, and restoring a bit of health. (MP: " + hustleTime.mpCost + ")";
hustleTime.atkMessage = "You decide to end this fight a bit more quickly!";
//console.log(hustleTime);

// crossDemonStrike skill
var crossDemonStrike = new Skill("CrossDemonStrike", "active");
crossDemonStrike.mpCost = 64;
crossDemonStrike.desc = "You slice through the enemy three times, losing sight of you each time you move. May cause confusion. (MP: " + crossDemonStrike.mpCost + ")";
crossDemonStrike.atkMessage = "You cross up the enemy three times dealing ";

crossDemonStrike.effectChance = 80;
crossDemonStrike.damageEff = "confusion";

function mercenarySkillSet(player) {
	// hurricaneSlash
	hurricaneSlash.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.4));

	// reinforcements
	reinforcements.damage = Math.floor(Math.random() * (reinforcements.atk/4)) + Math.round(reinforcements.atk * 1.4);
	
	// empowerWeapon
	empowerWeapon.incStat[0] = 15 * Math.floor(player.level/10);
	
	// lightningImpaler
	lightningImpaler.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.7));
	
	// summonComrade
	summonComrade.damage = Math.floor(Math.random() * (summonComrade.matk/4)) + Math.round(summonComrade.atk * 1.7);
	
	// hustleTime
	hustleTime.incStat[0] = 15 * Math.floor(player.level/10);
	hustleTime.incStat[1] = 20 * Math.floor(player.level/10);
	hustleTime.incStat[2] = 22 * (player.level);
	
	// crossDemonStrike
	crossDemonStrike.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.85));
	
	// unlock commanderLog
	if (player.level >= 11 && commanderLog.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + commanderLog.skillName;
		//console.log(commanderLog);
		console.log(commanderLog.skillActivated);
		commanderLog.skillActivated = true;
		player.hpStat += 20;
		player.mdefStat += 15;
	} // end commanderLog
	
	// unlock hurricaneSlash skill
	if (player.level >= 12 && hurricaneSlash.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + hurricaneSlash.skillName;
		//console.log(hurricaneSlash);
		player.skillSet.push(hurricaneSlash);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(hurricaneSlash.skillActivated);
		hurricaneSlash.skillActivated = true;
	} // end hurricaneSlash
	
	// unlock reinforcements
	if (player.level >= 14 && reinforcements.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + reinforcements.skillName;
		//console.log(reinforcements);
		player.skillSet.push(reinforcements);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(reinforcements.skillActivated);
		reinforcements.skillActivated = true;
	} // end reinforcements
	
	// unlock empowerWeapon
	if (player.level >= 17 && empowerWeapon.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + empowerWeapon.skillName;
		//console.log(empowerWeapon);
		player.skillSet.push(empowerWeapon);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(empowerWeapon.skillActivated);
		empowerWeapon.skillActivated = true;
	} // end empowerWeapon
	
	// unlock lightningImpaler skill
	if (player.level >= 20 && lightningImpaler.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + lightningImpaler.skillName;
		//console.log(lightningImpaler);
		player.skillSet.push(lightningImpaler);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(lightningImpaler.skillActivated);
		lightningImpaler.skillActivated = true;
	} // end lightningImpaler
	
	// unlock commanderAce
	if (player.level >= 23 && commanderAce.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + commanderAce.skillName;
		//console.log(commanderAce);
		console.log(commanderAce.skillActivated);
		commanderAce.skillActivated = true;
		player.atkStat += 20;
		player.defStat += 20;
	} // end commanderAce
	
	// unlock summonComrade
	if (player.level >= 24 && summonComrade.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + summonComrade.skillName;
		//console.log(summonComrade);
		player.skillSet.push(summonComrade);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(summonComrade.skillActivated);
		summonComrade.skillActivated = true;
	} // end summonComrade
	
	// unlock hustleTime
	if (player.level >= 26 && hustleTime.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + hustleTime.skillName;
		//console.log(hustleTime);
		player.skillSet.push(hustleTime);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(hustleTime.skillActivated);
		hustleTime.skillActivated = true;
	} // end hustleTime
	
	// unlock crossDemonStrike skill
	if (player.level >= 28 && crossDemonStrike.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + crossDemonStrike.skillName;
		//console.log(crossDemonStrike);
		player.skillSet.push(crossDemonStrike);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(crossDemonStrike.skillActivated);
		crossDemonStrike.skillActivated = true;
	} // end crossDemonStrike
	
} // end mercenarySkillSet
/*********************************
 * Mercenary Skills End
 *********************************/

/*********************************
 * Martial Artist Skills
 *********************************/
// Master's Lessons
var masterLessons = new Skill("Master's Lessons (+HP, +mdef)", "passive");
masterLessons.desc = "Passive: Permanently raises your HP and mdef.";
//console.log(masterLessons);

// bulkUp skill
var bulkUp = new Skill("BulkUp", "temp");
bulkUp.mpCost = 30;
bulkUp.desc = "You take a deep breath and harden your body, increasing your atk and def. (MP: " + bulkUp.mpCost + ")";
bulkUp.atkMessage = "You take a deep breath, becoming a bit bigger and tougher!";
//console.log(bulkUp);

// explosiveFist skill
var explosiveFist = new Skill("Explosive Fist", "active");
explosiveFist.mpCost = 22;
explosiveFist.desc = "A destructive punch with great speed and power. (MP: " + explosiveFist.mpCost + ")";
explosiveFist.atkMessage = "You deliver a punch that sounds like an explosion dealing ";
//console.log(explosiveFist);

// unwantedCameo skill
var unwantedCameo = new Skill("unwantedCameo", "summon");
unwantedCameo.mpCost = 45;
unwantedCameo.desc = "Your rival cameos into battle to steal the spotlight. (MP: " + unwantedCameo.mpCost + ")";
unwantedCameo.atkMessage = "Broh Lee forcefully joins the battle!";
//console.log(unwantedCameo)

// palmShockwave skill
var palmShockwave = new Skill("PalmShockwave", "active");
palmShockwave.mpCost = 15;
palmShockwave.desc = "You dash towards the enemy and hit them with a quick palm strike to the vitals. High chance of stun. (MP: " + palmShockwave.mpCost + ")";
palmShockwave.atkMessage = "You deliver a quick strike to a vital dealing ";

palmShockwave.effectChance = 40;
palmShockwave.damageEff = "stun";
//console.log(palmShockwave);

// Master's Prodigy
var mastersProdigy = new Skill("Master's Prodigy  (+HP, +mdef)", "passive");
mastersProdigy.desc = "Passive: Permanently raises your HP and mdef.";
//console.log(mastersProdigy);

// hiddenReflexes skill
var hiddenReflexes = new Skill("HiddenReflexes", "temp");
hiddenReflexes.mpCost = 70;
hiddenReflexes.desc = "You take a deep breath and relax your body, increasing your atk a bit and spd a lot. (MP: " + hiddenReflexes.mpCost + ")";
hiddenReflexes.atkMessage = "You take a deep breath, becoming more nimble!";
//console.log(hiddenReflexes);

// divingFalconKick skill
var divingFalconKick = new Skill("DivingFalconKick", "active");
divingFalconKick.mpCost = 60;
divingFalconKick.desc = "You leap into the air before diving at the enemy in a fiery fury. May cause stun. (MP: " + divingFalconKick.mpCost + ")";
divingFalconKick.atkMessage = "You dive and ragefully kick your opponent dealing ";

divingFalconKick.effectChance = 80;
divingFalconKick.damageEff = "stun";

// risingDragonFist skill
var risingDragonFist = new Skill("RisingDragonFist", "active");
risingDragonFist.mpCost = 70;
risingDragonFist.desc = "\"SHORYUKEN!\" (May cause stun.) (MP: " + risingDragonFist.mpCost + ")";
risingDragonFist.atkMessage = "You perform the motion to trigger a devastating jumping uppercut dealing ";

risingDragonFist.effectChance = 70;
risingDragonFist.damageEff = "stun";

function martialArtistSkillSet(player) {
	// bulkUp
	bulkUp.incStat[0] = 10 * Math.floor(player.level/10);
	bulkUp.incStat[1] = 10 * Math.floor(player.level/10);
	
	// explosiveFist
	explosiveFist.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.5));
	
	// unwantedCameo
	unwantedCameo.damage = Math.floor(Math.random() * (unwantedCameo.matk/4)) + Math.round(unwantedCameo.atk);
	
	// palmShockwave
	palmShockwave.damage = Math.floor((player.atk/3) + Math.round(player.atk * 0.75));
	
	// hiddenReflexes
	hiddenReflexes.incStat[0] = 10 * Math.floor(player.level/10);
	hiddenReflexes.incStat[1] = 20 * Math.floor(player.level/10);
	
	// divingFalconKick
	divingFalconKick.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.85));
	
	// risingDragonFist
	risingDragonFist.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.95));
	
	// unlock masterLessons
	if (player.level >= 11 && masterLessons.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + masterLessons.skillName;
		//console.log(masterLessons);
		console.log(masterLessons.skillActivated);
		masterLessons.skillActivated = true;
		player.hpStat += 20;
		player.mdefStat += 10;
	} // end masterLessons
	
	// unlock bulkUp
	if (player.level >= 12 && bulkUp.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + bulkUp.skillName;
		//console.log(bulkUp);
		player.skillSet.push(bulkUp);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(bulkUp.skillActivated);
		bulkUp.skillActivated = true;
	} // end bulkUp
	
	// unlock explosiveFist skill
	if (player.level >= 14 && explosiveFist.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + explosiveFist.skillName;
		//console.log(explosiveFist);
		player.skillSet.push(explosiveFist);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(explosiveFist.skillActivated);
		explosiveFist.skillActivated = true;
	} // end explosiveFist
	
	// unlock unwantedCameo
	if (player.level >= 17 && unwantedCameo.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + unwantedCameo.skillName;
		//console.log(unwantedCameo);
		player.skillSet.push(unwantedCameo);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(unwantedCameo.skillActivated);
		unwantedCameo.skillActivated = true;
	} // end unwantedCameo
	
	// unlock palmShockwave skill
	if (player.level >= 20 && palmShockwave.skillActivated == false) { 
			combatInfo.innerHTML += "<br>Skill Unlocked: " + palmShockwave.skillName;
			//console.log(palmShockwave);
			player.skillSet.push(palmShockwave);
			//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
			//console.log(palmShockwave.skillActivated);
			palmShockwave.skillActivated = true;
	} // end palmShockwave
	
	// unlock mastersProdigy
	if (player.level >= 23 && mastersProdigy.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + mastersProdigy.skillName;
		//console.log(mastersProdigy);
		console.log(mastersProdigy.skillActivated);
		mastersProdigy.skillActivated = true;
		player.hpStat += 20;
		player.mdefStat += 10;
	} // end mastersProdigy
	
	// unlock hiddenReflexes
	if (player.level >= 24 && hiddenReflexes.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + hiddenReflexes.skillName;
		//console.log(hiddenReflexes);
		player.skillSet.push(hiddenReflexes);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(hiddenReflexes.skillActivated);
		hiddenReflexes.skillActivated = true;
	} // end hiddenReflexes
	
	// unlock divingFalconKick skill
	if (player.level >= 26 && divingFalconKick.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + divingFalconKick.skillName;
		//console.log(divingFalconKick);
		player.skillSet.push(divingFalconKick);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(divingFalconKick.skillActivated);
		divingFalconKick.skillActivated = true;
	} // end divingFalconKick
	
	// unlock risingDragonFist skill
	if (player.level >= 28 && risingDragonFist.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + risingDragonFist.skillName;
		//console.log(risingDragonFist);
		player.skillSet.push(risingDragonFist);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(risingDragonFist.skillActivated);
		risingDragonFist.skillActivated = true;
	} // end risingDragonFist
	
} // end martialArtistSkillSet

/*********************************
 * Martial Artist Skills End
 *********************************/
 
 
/*********************************
 * Scholar Skills
 *********************************/
// spiritualKnowledge
var spiritualKnowledge = new Skill("Spiritual Knowledge (+HP, +MP)", "passive");
spiritualKnowledge.desc = "Passive: Permanently raises your hp and mp.";
//console.log(spiritualKnowledge);
 
// fireTornado skill
var fireTornado = new Skill("FireTornado", "active");
fireTornado.mpCost = 18;
fireTornado.desc = "Deals fire damage to the enemy. (MP: " + fireTornado.mpCost + ")";
fireTornado.atkMessage = "You let lose a blazing tornado, burning your opponent for ";

fireTornado.damageType = "magic";
//console.log(fireTornado);

// frostbite skill
var frostbite = new Skill("Frostbite", "active");
frostbite.mpCost = 18;
frostbite.desc = "Deals frost damage to the enemy. (MP: " + frostbite.mpCost + ")";
frostbite.atkMessage = "You let lose a bone chilling wind, freezing your opponent for ";

frostbite.damageType = "magic";
//console.log(frostbite);

// lightningStrike skill
var lightningStrike = new Skill("LightningStrike", "active");
lightningStrike.mpCost = 18;
lightningStrike.desc = "Lightning Strike deals damage to target enemy.  (MP: " + lightningStrike.mpCost + ")";
lightningStrike.atkMessage = "Lightning drops from the sky, searing your opponent for ";

lightningStrike.damageType = "magic";
//console.log(lightningStrike);

// flare skill
var flare = new Skill("Flare", "active");
flare.mpCost = 24;
flare.desc = "Throws an orb of fire that explodes, dealing damage. Can stun the opponent. (MP: " + flare.mpCost + ")";
flare.atkMessage = "You lobbed an orb of fire at your opponent that exploded, dealing ";

flare.damageType = "magic";
flare.effectChance = 80;
flare.damageEff = "stun";
//console.log(flare);

// golemKnight skill
var golemKnight = new Skill("GolemKnight", "summon");
golemKnight.mpCost = 62;
golemKnight.desc = "Summons a golem with a sword into combat. (MP: " + golemKnight.mpCost + ")";
golemKnight.atkMessage = "You summoned a giant golem into battle!";
//console.log(golemKnight);

// principia skill (Liber de Principia)
var principia = new Skill("Liber de Principia (+mdef, +spd)", "passive");
principia.desc = "Passive: permanently raises your mdef and spd.";
//console.log(principia);

// drain skill
var drain = new Skill("Drain", "active");
drain.mpCost = 58;
drain.desc = "Saps the life out of your opponent, recovering some of your health. (MP: " + drain.mpCost + ")";
drain.atkMessage = "You drain the enemies life for ";

drain.damageType = "magic";
//console.log(drain);

// gravity skill
var gravity = new Skill("Gravity", "active");
gravity.mpCost = 83;
gravity.desc = "Traps your opponent in a field, dealing a lot of damage. May slow the enemy. (MP: " + gravity.mpCost + ")";
gravity.atkMessage = "You created a weak event horizon, crushing your opponent for ";

gravity.damageType = "magic";
gravity.effectChance = 70;
gravity.damageEff = "gravity";
//console.log(gravity);

function scholarSkillSet(player) {
	// fireTornado
	fireTornado.damage = Math.floor((player.matk/3) + Math.round(player.matk * 1.6));
	
	// frostbite
	frostbite.damage = Math.floor((player.matk/3) + Math.round(player.matk * 1.6));
	
	// lightningStrike
	lightningStrike.damage = Math.floor((player.matk/3) + Math.round(player.matk * 1.6));
	
	// flare
	flare.damage = Math.floor((player.matk/3) + Math.round(player.matk * 1.5));
	
	// golemKnight
	golemKnight.damage = Math.floor(Math.random() * (golemKnight.atk/4)) + Math.round(golemKnight.atk * 1.3);
	
	// drain
	drain.damage = Math.floor((player.matk/3) + Math.round(player.matk * 1.8));
	
	// gravity
	gravity.damage = Math.floor((player.matk/3) + Math.round(player.matk * 2.0));
	
	
	// unlock spiritualKnowledge
	if (player.level >= 11 && spiritualKnowledge.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + spiritualKnowledge.skillName;
		//console.log(spiritualKnowledge);
		console.log(spiritualKnowledge.skillActivated);
		spiritualKnowledge.skillActivated = true;
		player.hpStat += 10;
		player.mpStat += 10;
	} // end spiritualKnowledge
	
	// unlock fireTornado skill
	if (player.level >= 12 && fireTornado.skillActivated == false) { 
			combatInfo.innerHTML += "<br>Skill Unlocked: " + fireTornado.skillName;
			//console.log(fireTornado);
			player.skillSet.push(fireTornado);
			//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
			//console.log(fireTornado.skillActivated);
			fireTornado.skillActivated = true;
	} // end fireTornado
	
	// unlock frostbite skill
	if (player.level >= 13 && frostbite.skillActivated == false) { 
			combatInfo.innerHTML += "<br>Skill Unlocked: " + frostbite.skillName;
			//console.log(frostbite);
			player.skillSet.push(frostbite);
			//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
			//console.log(frostbite.skillActivated);
			frostbite.skillActivated = true;
	} // end frostbite
	
	// unlock lightningStrike skill
	if (player.level >= 14 && lightningStrike.skillActivated == false) { 
			combatInfo.innerHTML += "<br>Skill Unlocked: " + lightningStrike.skillName;
			//console.log(lightningStrike);
			player.skillSet.push(lightningStrike);
			//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
			//console.log(lightningStrike.skillActivated);
			lightningStrike.skillActivated = true;
	} // end lightningStrike
	
	// unlock flare skill
	if (player.level >= 17 && flare.skillActivated == false) { 
			combatInfo.innerHTML += "<br>Skill Unlocked: " + flare.skillName;
			//console.log(flare);
			player.skillSet.push(flare);
			console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
			console.log(flare.skillActivated);
			flare.skillActivated = true;
	} // end flare
	
	// unlock golemKnight
	if (player.level >= 20 && golemKnight.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + golemKnight.skillName;
		//console.log(golemKnight);
		player.skillSet.push(golemKnight);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(golemKnight.skillActivated);
		golemKnight.skillActivated = true;
	} // end golemKnight
	
	// unlock principia
	if (player.level >= 24 && principia.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + principia.skillName;
		//console.log(principia);
		console.log(principia.skillActivated);
		principia.skillActivated = true;
		player.mdefStat += 20;
		player.spdStat += 30;
	} // end principia
	
	// unlock drain skill
	if (player.level >= 25 && drain.skillActivated == false) { 
			combatInfo.innerHTML += "<br>Skill Unlocked: " + drain.skillName;
			//console.log(drain);
			player.skillSet.push(drain);
			//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
			//console.log(drain.skillActivated);
			drain.skillActivated = true;
	} // end drain
	
	// unlock gravity skill
	if (player.level >= 29 && gravity.skillActivated == false) { 
			combatInfo.innerHTML += "<br>Skill Unlocked: " + gravity.skillName;
			//console.log(gravity);
			player.skillSet.push(gravity);
			//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
			//console.log(gravity.skillActivated);
			gravity.skillActivated = true;
	} // end gravity
	
} // end scholarSkillSet


/*********************************
 * Scholar Skills End
 *********************************/
 
/*********************************
 * Dark Mage Skills
 *********************************/

// Ancient Tome of Nosferatu skill
var nosferatu = new Skill("Ancient Tome of Nosferatu (+HP, +MP)", "passive");
nosferatu.desc = "Passive: Permanently raises your hp and mp.";
//console.log(nosferatu);

// noxiousBreath skill
var noxiousBreath = new Skill("Noxious Breath", "active");
noxiousBreath.mpCost = 22;
noxiousBreath.desc = "Emits a misty poison in the air. Has a chance to poison the enemy. (MP: " + noxiousBreath.mpCost + ")";
noxiousBreath.atkMessage = "You fill the air with a poisonous mist, suffocating the enemy for ";

noxiousBreath.damageType = "magic";
noxiousBreath.effectChance = 70;
noxiousBreath.damageEff = "poison";
//console.log(noxiousBreath);

// weaken
var weaken = new Skill("Weaken", "temp");
weaken.mpCost = 35;
weaken.desc = "Creates an aura that decays the enemies def and mdef. (MP: " + weaken.mpCost + ")";
weaken.atkMessage = "You created an aura to weaken the enemy!";
//console.log(weaken);

// drain skill
var drain = new Skill("Drain", "active");
drain.mpCost = 58;
drain.desc = "Saps the life out of your opponent, recovering some of your health. (MP: " + drain.mpCost + ")";
drain.atkMessage = "You drain the enemies life for ";

drain.damageType = "magic";
//console.log(drain);

// Curse of Death skill
var death = new Skill("Mark of Death", "active");
death.mpCost = 48 + (48 * Math.floor(player.matk/500));
death.desc = "Curses your opponent. Deals damage and a has low chance to kill them. (1% per 1000matk, no limit). (MP: " + death.mpCost + ")";
death.atkMessage = "You place a curse on your opponent! Dealing ";

death.damageType = "magic";
death.effectChance = 99 - Math.floor(player.matk/1000);
death.damageEff = "death";
//console.log(death);

// reaper skill
var reaper = new Skill("SkullReaper", "summon");
reaper.mpCost = 73;
reaper.desc = "Summons a giant skeleton with a scythe into combat. (MP: " + reaper.mpCost + ")";
reaper.atkMessage = "You summoned a giant reaper into battle!";
//console.log(reaper);

// Sacred Tome of Gleipnir
var gleipnir = new Skill("Sacred Tome of Gleipnir (+def, +mdef, +spd)", "passive");
gleipnir.desc = "Passive: Permanently raises your def, mdef, and spd.";
//console.log(gleipnir);

// lunarBlessing skill
var lunarBlessing = new Skill("LunarBlessing", "temp");
lunarBlessing.mpCost = 94;
lunarBlessing.desc = "A blessing from the moon empowers you, increasing your matk and mdef, and restoring a bit of health. (MP: " + lunarBlessing.mpCost + ")";
lunarBlessing.atkMessage = "The moon has blessed you!";
//console.log(lunarBlessing);

// Chained Hellhound Pup
var hellPup = new Skill("Chained HellhoundPup", "summon");
hellPup.mpCost = 117;
hellPup.desc = "Summons a Hellhound, but only a pup. (MP: " + hellPup.mpCost + ")";
hellPup.atkMessage = "You summoned a cute, but deadly Hellhound Pup!";
//console.log(hellPup);

function darkMageSkillSet(player) {
	// noxiousBreath
	noxiousBreath.damage = Math.floor((player.matk/3) + Math.round(player.matk * 1.5));
	
	// weaken
	weaken.decStat[0] = player.level * 2;
	weaken.decStat[1] = player.level * 2;
	
	// drain
	drain.damage = Math.floor((player.matk/3) + Math.round(player.matk * 1.9));
	
	// death
	death.damage = Math.floor((player.matk/3) + Math.round(player.matk * 1.7));
	
	// reaper
	reaper.damage = Math.floor(Math.random() * (reaper.atk/4)) + Math.round(reaper.atk * 1.3);
	
	// lunarBlessing
	lunarBlessing.incStat[0] = 10 * Math.floor(player.level/10);
	lunarBlessing.incStat[1] = 10 * Math.floor(player.level/10);
	lunarBlessing.incStat[2] = 15 * player.level;
	
	// hellPup
	hellPup.damage = Math.floor(Math.random() * (hellPup.atk/4)) + Math.round(hellPup.atk * 1.6);
	
	// unlock nosferatu
	if (player.level >= 11 && nosferatu.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + nosferatu.skillName;
		//console.log(nosferatu);
		//console.log(nosferatu.skillActivated);
		nosferatu.skillActivated = true;
		player.hpStat += 10;
		player.mpStat += 15;
	} // end nosferatu
	
	// unlock noxiousBreath skill
	if (player.level >= 12 && noxiousBreath.skillActivated == false) { 
			combatInfo.innerHTML += "<br>Skill Unlocked: " + noxiousBreath.skillName;
			//console.log(noxiousBreath);
			player.skillSet.push(noxiousBreath);
			//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
			//console.log(noxiousBreath.skillActivated);
			noxiousBreath.skillActivated = true;
	} // end noxiousBreath
	
	// unlock weaken
	if (player.level >= 14 && weaken.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + weaken.skillName;
		//console.log(weaken);
		player.skillSet.push(weaken);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(weaken.skillActivated);
		weaken.skillActivated = true;
	} // end weaken
	
	// unlock drain skill
	if (player.level >= 16 && drain.skillActivated == false) { 
			combatInfo.innerHTML += "<br>Skill Unlocked: " + drain.skillName;
			//console.log(drain);
			player.skillSet.push(drain);
			//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
			//console.log(drain.skillActivated);
			drain.skillActivated = true;
	} // end drain
	
	// unlock death skill
	if (player.level >= 19 && death.skillActivated == false) { 
			combatInfo.innerHTML += "<br>Skill Unlocked: " + death.skillName;
			//console.log(death);
			player.skillSet.push(death);
			//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
			//console.log(death.skillActivated);
			death.skillActivated = true;
	} // end death
	
	// unlock reaper
	if (player.level >= 22 && reaper.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + reaper.skillName;
		//console.log(reaper);
		player.skillSet.push(reaper);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(reaper.skillActivated);
		reaper.skillActivated = true;
	} // end reaper
	
	// unlock gleipnir
	if (player.level >= 24 && gleipnir.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + gleipnir.skillName;
		//console.log(gleipnir);
		//console.log(gleipnir.skillActivated);
		gleipnir.skillActivated = true;
		player.defStat += 15;
		player.mdefStat += 20;
		player.spd += 15;
	} // end gleipnir
	
	// unlock lunarBlessing
	if (player.level >= 25 && lunarBlessing.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + lunarBlessing.skillName;
		//console.log(lunarBlessing);
		player.skillSet.push(lunarBlessing);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(lunarBlessing.skillActivated);
		lunarBlessing.skillActivated = true;
	} // end lunarBlessing
	
	// unlock hellPup
	if (player.level >= 28 && hellPup.skillActivated == false) { //lvl 20
		combatInfo.innerHTML += "<br>Skill Unlocked: " + hellPup.skillName;
		//console.log(hellPup);
		player.skillSet.push(hellPup);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(hellPup.skillActivated);
		hellPup.skillActivated = true;
	} // end hellPup

} // end darkMageSkillSet
/*********************************
 * Dark Mage Skills End
 *********************************/

/*********************************
 * Cleric Skills
 *********************************/
// Book of Sirona skill
var sirona = new Skill("Book of Sirona (+def, +matk)", "passive");
sirona.desc = "Passive: Permanently raises your def and matk.";
//console.log(sirona.desc);

// heal
var heal = new Skill("Heal", "active");
heal.mpCost = 20;
heal.desc = "Your bread and butter healing. Can go over max hp. (MP: " + heal.mpCost + ")";
heal.atkMessage = "You healed some of your wounds, gaining ";

heal.damageType = "healing";
//console.log(heal);

// hurtful prayer skill
var hurtfulPrayer = new Skill("HurtfulPrayer", "active");
hurtfulPrayer.mpCost = 32;
hurtfulPrayer.desc = "You pray for your enemy to feel pain. (MP: " + hurtfulPrayer.mpCost + ")";
hurtfulPrayer.atkMessage = "You prayed to hurt the enemy for ";

hurtfulPrayer.damageType = "magic";
//console.log(hurtfulPrayer);

// blessing skill
var blessing = new Skill("Blessing", "temp");
blessing.mpCost = 52;
blessing.desc = "A blessing from the gods empowers you, increasing your def and mdef. (MP: " + blessing.mpCost + ")";
blessing.atkMessage = "The gods have blessed you!";
//console.log(blessing);

// guardianStatue skill
var guardianStatue = new Skill("GuardianStatue", "summon");
guardianStatue.mpCost = 84;
guardianStatue.desc = "Summons a guardian angel of healing into combat. (MP: " + guardianStatue.mpCost + ")";
guardianStatue.atkMessage = "You summoned a guardian angel into battle!";
//console.log(guardianStatue);

// Nashira's Knowledge skill
var nashira = new Skill("Nashira's Knowledge (+HP, +MP, +spd)", "passive");
nashira.desc = "Passive: Permanently raises your hp, mp, and spd.";
//console.log(nashira);

// holyBolt skill
var holyBolt = new Skill("HolyBolt", "active");
holyBolt.mpCost = 75;
holyBolt.desc = "You cast a holy spell and launch it at the enemy. (MP: " + holyBolt.mpCost + ")";
holyBolt.atkMessage = "You launch a holy spell at the enemy dealing ";

holyBolt.damageType = "magic";
//console.log(holyBolt);

// holyAura skill
var holyAura = new Skill("HolyAura", "temp");
holyAura.mpCost = 95;
holyAura.desc = "The gods empower you with holy magic, increasing your matk and spd, and restoring a bit of health. (MP: " + holyAura.mpCost + ")";
holyAura.atkMessage = "The gods have blessed you!";
//console.log(holyAura);

// divineRay skill
var divineRay = new Skill("DivineRay", "active");
divineRay.mpCost = 120;
divineRay.desc = "A holy ray beams from the skies, damaging your enemy. Can cause stun. (MP: " + divineRay.mpCost + ")";
divineRay.atkMessage = "You strike the enemy with holy magic from the sky dealing ";

divineRay.damageType = "magic";
divineRay.effectChance = 65;
divineRay.damageEff = "stun";

function clericSkillSet(player) {
	// heal
	heal.damage = Math.floor(player.level * 9.5);
	
	// hurtfulPrayer
	hurtfulPrayer.damage = Math.floor((player.matk/3) + Math.round(player.matk * 1.6));
	
	// blessing
	blessing.incStat[0] = 10 * Math.floor(player.level/10);
	blessing.incStat[1] = 10 * Math.floor(player.level/10);
	
	// guardianStatue
	guardianStatue.damage = 0;
	
	// holyBolt
	holyBolt.damage = Math.floor((player.matk/3) + Math.round(player.matk * 1.75));
	
	// divineRay
	divineRay.damage = Math.floor((player.matk/3) + Math.round(player.matk * 1.9));
	
	// holyAura
	holyAura.incStat[0] = 10 * Math.floor(player.level/10);
	holyAura.incStat[1] = 10 * Math.floor(player.level/10);
	holyAura.incStat[2] = 18 * player.level;
	
	// unlock sirona
	if (player.level >= 11 && sirona.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + sirona.skillName;
		//console.log(sirona);
		//console.log(sirona.skillActivated);
		sirona.skillActivated = true;
		player.defStat += 15;
		player.matkStat += 20;
	} // end sirona
	
	// unlock heal skill
	if (player.level >= 12 && heal.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + heal.skillName;
		//console.log(heal);
		player.skillSet.push(heal);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(heal.skillActivated);
		heal.skillActivated = true;
	} // end heal
	
	// unlock hurtfulPrayer skill
	if (player.level >= 13 && hurtfulPrayer.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + hurtfulPrayer.skillName;
		//console.log(hurtfulPrayer);
		player.skillSet.push(hurtfulPrayer);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(hurtfulPrayer.skillActivated);
		hurtfulPrayer.skillActivated = true;
	} // end hurtfulPrayer
	
	// unlock blessing
	if (player.level >= 15 && blessing.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + blessing.skillName;
		//console.log(blessing);
		player.skillSet.push(blessing);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(blessing.skillActivated);
		blessing.skillActivated = true;
	} // end blessing
	
	// unlock guardianStatue
	if (player.level >= 19 && guardianStatue.skillActivated == false) { //lvl 20
		combatInfo.innerHTML += "<br>Skill Unlocked: " + guardianStatue.skillName;
		//console.log(guardianStatue);
		player.skillSet.push(guardianStatue);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(guardianStatue.skillActivated);
		guardianStatue.skillActivated = true;
	} // end guardianStatue
	
	// unlock nashira
	if (player.level >= 22 && nashira.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + nashira.skillName;
		//console.log(nashira);
		//console.log(nashira.skillActivated);
		nashira.skillActivated = true;
		player.hpStat += 10;
		player.mpStat += 20;
		player.spdStat += 20;
	} // end nashira
	
	// unlock holyBolt skill
	if (player.level >= 23 && holyBolt.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + holyBolt.skillName;
		//console.log(holyBolt);
		player.skillSet.push(holyBolt);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(holyBolt.skillActivated);
		holyBolt.skillActivated = true;
	} // end holyBolt
	
	// unlock holyAura
	if (player.level >= 16 && holyAura.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + holyAura.skillName;
		//console.log(holyAura);
		player.skillSet.push(holyAura);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(holyAura.skillActivated);
		holyAura.skillActivated = true;
	} // end holyAura
	
	// unlock divineRay skill
	if (player.level >= 28 && divineRay.skillActivated == false) { 
			combatInfo.innerHTML += "<br>Skill Unlocked: " + divineRay.skillName;
			//console.log(divineRay);
			player.skillSet.push(divineRay);
			//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
			//console.log(divineRay.skillActivated);
			divineRay.skillActivated = true;
	} // end divineRay
	
} // end clericSkillSet
/*********************************
 * Cleric Skills End
 *********************************/
 

/*********************************
 * Heavy Knight Skills
 *********************************/
// King's Boon
var kingsBoon = new Skill("King's Boon (+HP, +mdef)", "passive");
kingsBoon.desc = "Passive: Permanently raises your HP and mdef.";
//console.log(kingsBoon);

// chainStrike skill
var chainStrike = new Skill("ChainStrike", "active");
chainStrike.mpCost = 18;
chainStrike.desc = "Pulls the enemy towards you, dealing damage with your weapon. (MP: " + chainStrike.mpCost + ")";
chainStrike.atkMessage = "You impale the chained enemy dealing ";
//console.log(chainStrike);

// ironWall skill
var ironWall = new Skill("IronWall", "temp");
ironWall.mpCost = 40;
ironWall.desc = "You enchant yourself with a bit of mana, increasing your def and mdef at the cost of spd. (MP: " + ironWall.mpCost + ")";
ironWall.atkMessage = "You stop moving much, but increase your defenses!";
//console.log(ironWall);

// summonGuard skill
var summonGuard = new Skill("SummonGuard", "summon");
summonGuard.mpCost = 65;
summonGuard.desc = "One of the guards jumps out and rumbles the earth when he lands into combat. (MP: " + summonGuard.mpCost + ")";
summonGuard.atkMessage = "You summoned Krug into battle!";
//console.log(summonGuard);

// quake skill
var quake = new Skill("Quake", "active");
quake.mpCost = 38;
quake.desc = "You jump and smash the ground below with a stomp, causing the ground to shake. Low chance of stun. (MP: " + quake.mpCost + ")";
quake.atkMessage = "you make an attempt at jumping, causing an earthquake dealing ";

quake.effectChance = 85;
quake.damageEff = "stun";
//console.log(quake);

// King's Boon II
var kingsBoonII = new Skill("King's Boon II (+atk, +def, +MP)", "passive");
kingsBoonII.desc = "Passive: Permanently raises your atk, def, and mp.";
//console.log(kingsBoonII);

// chainLightning skill
var chainLightning = new Skill("Chain Lightning", "active");
chainLightning.mpCost = 52;
chainLightning.desc = "Your chain becomes a lightning rod, making lightning strikes wherever it lands. (MP: " + chainLightning.mpCost + ")";
chainLightning.atkMessage = "You grab the enemy with the lightning rod, shocking them for ";
//console.log(chainLightning);

// knight's Fury skill
var knightsFury = new Skill("Knight's Fury", "temp");
knightsFury.mpCost = 90;
knightsFury.desc = "You become enraged, increasing your atk at the cost of def. (MP: " + knightsFury.mpCost + ")";
knightsFury.atkMessage = "You become enraged, changing to a more offensive stance!";
//console.log(knightsFury);

// seismicToss skill
var seismicToss = new Skill("Seismic Toss", "active");
seismicToss.mpCost = 80;
seismicToss.desc = "You grab and wrap the enemy with the chain, toss them high in the air, then forcefully slam them down. May cause stun. (MP: " + seismicToss.mpCost + ")";
seismicToss.atkMessage = "You grab wrap, toss high, and slam fast the enemy for ";

seismicToss.effectChance = 75;
seismicToss.damageEff = "stun";
//console.log(seismicToss);

function heavyKnightSkillSet(player) {
	// chainStrike
	chainStrike.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.4));
	
	// ironWall
	ironWall.incStat[0] = 10 * Math.floor(player.level/10);
	ironWall.incStat[1] = 10 * Math.floor(player.level/10);
	ironWall.decStat[0] = 10 * Math.floor(player.level/10);
	
	// summonGuard
	summonGuard.damage = Math.floor(Math.random() * (summonGuard.atk/4)) + Math.round(summonGuard.atk * 1.3);
	
	// quake
	quake.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.7));
	
	// chainLightning
	chainLightning.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.9));
	
	// knightsFury
	knightsFury.incStat[0] = 20 * Math.floor(player.level/10);
	knightsFury.decStat[0] = 20 * Math.floor(player.level/10);
	
	// seismicToss
	seismicToss.damage = Math.floor((player.atk/3) + Math.round(player.atk * 2.15));
	
	// unlock kingsBoon
	if (player.level >= 11 && kingsBoon.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + kingsBoon.skillName;
		//console.log(kingsBoon);
		//console.log(kingsBoon.skillActivated);
		kingsBoon.skillActivated = true;
		player.hpStat += 25;
		player.mdefStat += 10;
	} // end kingsBoon
	
	// unlock chainStrike skill
	if (player.level >= 12 && chainStrike.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + chainStrike.skillName;
		//console.log(chainStrike);
		player.skillSet.push(chainStrike);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(chainStrike.skillActivated);
		chainStrike.skillActivated = true;
	} // end chainStrike
	
	// unlock ironWall
	if (player.level >= 14 && ironWall.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + ironWall.skillName;
		//console.log(ironWall);
		player.skillSet.push(ironWall);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(ironWall.skillActivated);
		ironWall.skillActivated = true;
	} // end ironWall
	
	// unlock summonGuard
	if (player.level >= 16 && summonGuard.skillActivated == false) { //lvl 20
		combatInfo.innerHTML += "<br>Skill Unlocked: " + summonGuard.skillName;
		//console.log(summonGuard);
		player.skillSet.push(summonGuard);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(summonGuard.skillActivated);
		summonGuard.skillActivated = true;
	} // end summonGuard
	
	// unlock quake skill
	if (player.level >= 19 && quake.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + quake.skillName;
		//console.log(quake);
		player.skillSet.push(quake);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(quake.skillActivated);
		quake.skillActivated = true;
	} // end quake
	
	// unlock kingsBoonII
	if (player.level >= 22 && kingsBoonII.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + kingsBoonII.skillName;
		//console.log(kingsBoonII);
		//console.log(kingsBoonII.skillActivated);
		kingsBoonII.skillActivated = true;
		player.atkStat += 20;
		player.defStat += 20;
		player.mpStat += 10;
	} // end kingsBoonII
	
	// unlock chainLightning skill
	if (player.level >= 23 && chainLightning.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + chainLightning.skillName;
		//console.log(chainLightning);
		player.skillSet.push(chainLightning);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(chainLightning.skillActivated);
		chainLightning.skillActivated = true;
	} // end chainLightning
	
	// unlock knightsFury
	if (player.level >= 25 && knightsFury.skillActivated == false) {
		combatInfo.innerHTML += "<br>Skill Unlocked: " + knightsFury.skillName;
		//console.log(knightsFury);
		player.skillSet.push(knightsFury);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(knightsFury.skillActivated);
		knightsFury.skillActivated = true;
	} // end knightsFury
	
	// unlock seismicToss skill
	if (player.level >= 28 && seismicToss.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + seismicToss.skillName;
		//console.log(seismicToss);
		player.skillSet.push(seismicToss);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(seismicToss.skillActivated);
		seismicToss.skillActivated = true;
	} // end seismicToss
	
} // end heavyKnightSkillSet
/*********************************
 * Heavy Knight Skills End
 *********************************/
 
/*********************************
 * Samurai Skills
 *********************************/
// King's Boon
var kingsBoon = new Skill("King's Boon (+HP, +mdef)");
kingsBoon.desc = "Passive: Permanently raises your HP and mdef.";
//console.log(kingsBoon);

// whirlwindStrike skill
var whirlwindStrike = new Skill("WhirlwindStrike", "active");
whirlwindStrike.mpCost = 22;
whirlwindStrike.desc = "Releases a small gust of wind from the swing of your weapon. (MP: " + whirlwindStrike.mpCost + ")";
whirlwindStrike.atkMessage = "You quickly slice in front of you, releasing a gust of wind dealing ";
//console.log(whirlwindStrike);

// defensiveStance skill
var defensiveStance = new Skill("DefensiveStance", "temp");
defensiveStance.mpCost = 32;
defensiveStance.desc = "You take on a defensive stance, increasing def and mdef a bit at the cost of atk. (MP: " + defensiveStance.mpCost + ")";
defensiveStance.atkMessage = "You quickly switched to a defensive stance!";
//console.log(defensiveStance);

// smokeSignal skill
var smokeSignal = new Skill("SmokeSignal", "summon");
smokeSignal.mpCost = 46;
smokeSignal.desc = "You throw a smoke ball at your feet, signaling one of your allies into combat. (MP: " + smokeSignal.mpCost + ")";
smokeSignal.atkMessage = "The smoke clears, revealing Shashi ready for battle!";
//console.log(smokeSignal);

// bluntStrike skill
var bluntStrike = new Skill("BluntStrike", "active");
bluntStrike.mpCost = 16;
bluntStrike.desc = "You dash and jab the enemy in the vitals with the blunt part of your weapon. High chance of stun. (MP: " + bluntStrike.mpCost + ")";
bluntStrike.atkMessage = "You quickly jab the enemy with the blunt edge dealing ";

bluntStrike.effectChance = 40;
bluntStrike.damageEff = "stun";
//console.log(bluntStrike);

// King's Boon II
var kingsBoonII = new Skill("King's Boon II (+atk, +spd)", "passive");
kingsBoonII.desc = "Passive: Permanently raises your atk and spd.";
//console.log(kingsBoonII);

// ownTempo skill
var ownTempo = new Skill("OwnTempo", "temp");
ownTempo.mpCost = 67;
ownTempo.desc = "You channel your mana, increasing your atk and spd, also gives you a chance to recover from status effects. (MP: " + ownTempo.mpCost + ")";
ownTempo.atkMessage = "You take a deep breath and calm yourself!";
//console.log(ownTempo);

// bladeRush skill
var bladeRush = new Skill("BladeRush", "active");
bladeRush.mpCost = 55;
bladeRush.desc = "Rushes the enemy with your weapon drawn, striking them twice when close. (MP: " + bladeRush.mpCost + ")";
bladeRush.atkMessage = "You rush the enemy, striking them twice dealing ";
//console.log(bladeRush);

// deltaStrike skill
var deltaStrike = new Skill("DeltaStrike", "active");
deltaStrike.mpCost = 74;
deltaStrike.desc = "With quick speed, you seemingly strike from three different places simultaneously, may cause confusion. (MP: " + deltaStrike.mpCost + ")";
deltaStrike.atkMessage = "You strike the enemy at a blinding speed dealing ";

deltaStrike.effectChance = 70;
deltaStrike.damageEff = "confusion";
//console.log(deltaStrike);


function samuraiSkillSet(player) {
	// whirlwindStrike
	whirlwindStrike.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.4));
	
	// defensiveStance
	defensiveStance.incStat[0] = 10 * Math.floor(player.level/10);
	defensiveStance.incStat[1] = 10 * Math.floor(player.level/10);
	defensiveStance.decStat[0] = 5 * Math.floor(player.level/10);
	
	// smokeSignal
	smokeSignal.damage = Math.floor(Math.random() * (smokeSignal.atk/4)) + Math.round(smokeSignal.atk * 1.6);
	
	// bluntStrike
	bluntStrike.damage = Math.floor((player.atk/3) + Math.round(player.atk * 0.85));
	
	//ownTempo
	ownTempo.incStat[0] = 15 * Math.floor(player.level/10);
	ownTempo.incStat[1] = 15 * Math.floor(player.level/10);
	
	// bladeRush
	bladeRush.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.6));
	
	// deltaStrike
	deltaStrike.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.9));
	
	// unlock kingsBoon
	if (player.level >= 11 && kingsBoon.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + kingsBoon.skillName;
		//console.log(kingsBoon);
		//console.log(kingsBoon.skillActivated);
		kingsBoon.skillActivated = true;
		player.hpStat += 20;
		player.defStat += 10;
	} // end kingsBoon
	
	// unlock whirlwindStrike skill
	if (player.level >= 12 && whirlwindStrike.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + whirlwindStrike.skillName;
		//console.log(whirlwindStrike);
		player.skillSet.push(whirlwindStrike);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(whirlwindStrike.skillActivated);
		whirlwindStrike.skillActivated = true;
	} // end whirlwindStrike
	
	// unlock defensiveStance skill
	if (player.level >= 14 && defensiveStance.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + defensiveStance.skillName;
		//console.log(defensiveStance);
		player.skillSet.push(defensiveStance);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(defensiveStance.skillActivated);
		defensiveStance.skillActivated = true;
	} // end defensiveStance
	
	// unlock smokeSignal skill
	if (player.level >= 18 && smokeSignal.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + smokeSignal.skillName;
		//console.log(smokeSignal);
		player.skillSet.push(smokeSignal);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(smokeSignal.skillActivated);
		smokeSignal.skillActivated = true;
	} // end smokeSignal
	
	// unlock bluntStrike skill
	if (player.level >= 21 && bluntStrike.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + bluntStrike.skillName;
		//console.log(bluntStrike);
		player.skillSet.push(bluntStrike);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(bluntStrike.skillActivated);
		bluntStrike.skillActivated = true;
	} // end bluntStrike
	
	// unlock kingsBoonII
	if (player.level >= 24 && kingsBoonII.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + kingsBoonII.skillName;
		//console.log(kingsBoonII);
		//console.log(kingsBoonII.skillActivated);
		kingsBoonII.skillActivated = true;
		player.atkStat += 20;
		player.spdStat += 20;
	} // end kingsBoonII
	
	// unlock ownTempo skill
	if (player.level >= 25 && ownTempo.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + ownTempo.skillName;
		//console.log(ownTempo);
		player.skillSet.push(ownTempo);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(ownTempo.skillActivated);
		ownTempo.skillActivated = true;
	} // end ownTempo
	
	// unlock bladeRush skill
	if (player.level >= 27 && bladeRush.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + bladeRush.skillName;
		//console.log(bladeRush);
		player.skillSet.push(bladeRush);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(bladeRush.skillActivated);
		bladeRush.skillActivated = true;
	} // end bladeRush
	
	// unlock deltaStrike skill
	if (player.level >= 29 && deltaStrike.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + deltaStrike.skillName;
		//console.log(deltaStrike);
		player.skillSet.push(deltaStrike);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(deltaStrike.skillActivated);
		deltaStrike.skillActivated = true;
	} // end deltaStrike
	
} // end samuraiSkillSet
/*********************************
 * Samurai Skills End
 *********************************/

/*********************************
 * Cavalier Skills
 *********************************/
/** var rank1Classes = ["Maniac", "Mercenary", "Martial Artist", "Scholar", "Dark Mage", "Cleric", "Heavy Knight", "Samurai", "Cavalier"]; */

//-- Cavalier
// 11 King's Boon (passive, +HP, +mdef)
// 12 Vital Joust (active, You charge the enemy with a jousting form at a high speed, striking the enemy in the vital when close, low chance of stun)
// 14 Intimidating Glare (temp, Nadina glares directly at the enemy, unnerving the enemy and reducing their def, and mdef)
// 17 Two-Pronged Attack (active, You charge the enemy with both fangs shown and weapon drawn, striking the enemy twice)
// 20 horseWolfHowl (summon, Nadina calls a wild horsewolf to aid)
// 23 King's Boon II (passive, +atk, +def)


// King's Boon
var kingsBoon = new Skill("King's Boon (+HP, +mdef)");
kingsBoon.desc = "Passive: Permanently raises your HP and mdef.";
//console.log(kingsBoon);

// vitalJoust skill
var vitalJoust = new Skill("VitalJoust", "active");
vitalJoust.mpCost = 18;
vitalJoust.desc = "You charge the enemy in a jousting form at a high speed, striking the enemy in the vital when close, low chance of stun. (MP: " + vitalJoust.mpCost + ")";
vitalJoust.atkMessage = "You charge and joust the enemy dealing ";

vitalJoust.effectChance = 85;
vitalJoust.damageEff = "stun";
//console.log(vitalJoust);

// intimidatingGlare skill
var intimidatingGlare = new Skill("IntimidatingGlare", "temp");
intimidatingGlare.mpCost = 33;
intimidatingGlare.desc = "Nadina glares directly at the enemy, unnerving the enemy and reducing their def, and mdef. (MP: " + intimidatingGlare.mpCost + ")";
intimidatingGlare.atkMessage = "Nadina glares at the enemy, unnerving them!";
//console.log(intimidatingGlare);

// twoProngedAttack skill
var twoProngedAttack = new Skill("Two-Pronged Attack", "active");
twoProngedAttack.mpCost = 41;
twoProngedAttack.desc = "You charge the enemy with both fangs shown and weapon drawn, striking the enemy twice. (MP: " + twoProngedAttack.mpCost + ")";
twoProngedAttack.atkMessage = "You both strike the enemy dealing ";
//console.log(twoProngedAttack);

// horseWolfHowl skill
var horseWolfHowl = new Skill("HorseWolfHowl", "summon");
horseWolfHowl.mpCost = 50;
horseWolfHowl.desc = "Nadina calls a wild horsewolf to aide you in combat. (MP: " + horseWolfHowl.mpCost + ")";
horseWolfHowl.atkMessage = "Nadina howled and summoned a horsewolf to the battle!";
//console.log(horseWolfHowl);

// King's Boon II
var kingsBoonII = new Skill("King's Boon II (+atk, +def)", "passive");
kingsBoonII.desc = "Passive: Permanently raises your atk and def.";
//console.log(kingsBoonII);

// fuddleBreath skill
var fuddleBreath = new Skill("FuddleBreath", "active");
fuddleBreath.mpCost = 53;
fuddleBreath.desc = "Nadina trots around breathing out a paralyzing, misty fire around the enemy. Chance to confuse the enemy. (MP: " + fuddleBreath.mpCost + ")";
fuddleBreath.atkMessage = "Nadina runs around emitting a green fire dealing ";

fuddleBreath.effectChance = 70;
fuddleBreath.damageEff = "confusion";
//console.log(fuddleBreath);

// stampedeHooves skill
var stampedeHooves = new Skill("StampedeHooves", "temp");
stampedeHooves.mpCost = 82;
stampedeHooves.desc = "Nadina empowers herself and you with mana, increasing your atk and spd. (MP: " + stampedeHooves.mpCost + ")";
stampedeHooves.atkMessage = "You both become empowered with mana!";
//console.log(stampedeHooves);

// roughRiders skill
var roughRiders = new Skill("RoughRiders", "active");
roughRiders.mpCost = 71;
roughRiders.desc = "You lead a small squadron of cavaliers to roll over and attack the enemy. (MP: " + roughRiders.mpCost + ")";
roughRiders.atkMessage = "You all charge and massacre the enemy dealing ";
//console.log(roughRiders);

// 24 Fuddle Breath (active, Nadina trots around breathing out a paralyzing, misty fire around the enemy. Chance to confuse the enemy)
// 26 Stampede Hooves (temp, The horsewolf you're riding empowers itself and you with mana, increasing your spd and atk a bit) (Nadina empowers you both with mana!);
// 28 Rough Riders (active, lead a squadron of cavaliers to roll over and attack the enemy)
function cavalierSkillSet(player) {
	// vitalJoust
	vitalJoust.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.45));

	// intimidatingGlare
	intimidatingGlare.decStat[0] = 10 * Math.floor(player.level/10);
	intimidatingGlare.decStat[1] = 10 * Math.floor(player.level/10);
	
	// twoProngedAttack
	twoProngedAttack.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.7));
	
	// horseWolfHowl
	horseWolfHowl.damage = Math.floor(Math.random() * (horseWolfHowl.atk/4)) + Math.round(horseWolfHowl.atk * 1.75);
	
	// fuddleBreath
	fuddleBreath.damage = Math.floor((player.atk/3) + Math.round(player.atk * 1.7));
	
	// stampedeHooves
	stampedeHooves.incStat[0] = 15 * Math.floor(player.level/10);
	stampedeHooves.incStat[1] = 15 * Math.floor(player.level/10);
	
	// roughRiders
	roughRiders.damage = Math.floor((player.atk/3) + Math.round(player.atk * 2.05));
	
	// unlock kingsBoon
	if (player.level >= 11 && kingsBoon.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + kingsBoon.skillName;
		//console.log(kingsBoon);
		//console.log(kingsBoon.skillActivated);
		kingsBoon.skillActivated = true;
		player.hpStat += 15;
		player.mdefStat += 10;
	} // end kingsBoon
	
	// unlock vitalJoust skill
	if (player.level >= 12 && vitalJoust.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + vitalJoust.skillName;
		//console.log(vitalJoust);
		player.skillSet.push(vitalJoust);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(vitalJoust.skillActivated);
		vitalJoust.skillActivated = true;
	} // end vitalJoust
	
	// unlock intimidatingGlare skill
	if (player.level >= 14 && intimidatingGlare.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + intimidatingGlare.skillName;
		//console.log(intimidatingGlare);
		player.skillSet.push(intimidatingGlare);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(intimidatingGlare.skillActivated);
		intimidatingGlare.skillActivated = true;
	} // end intimidatingGlare
	
	// unlock twoProngedAttack skill
	if (player.level >= 17 && twoProngedAttack.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + twoProngedAttack.skillName;
		//console.log(twoProngedAttack);
		player.skillSet.push(twoProngedAttack);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(twoProngedAttack.skillActivated);
		twoProngedAttack.skillActivated = true;
	} // end twoProngedAttack
	
	// unlock horseWolfHowl skill
	if (player.level >= 20 && horseWolfHowl.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + horseWolfHowl.skillName;
		//console.log(horseWolfHowl);
		player.skillSet.push(horseWolfHowl);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(horseWolfHowl.skillActivated);
		horseWolfHowl.skillActivated = true;
	} // end horseWolfHowl
	
	// unlock kingsBoonII
	if (player.level >= 23 && kingsBoonII.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + kingsBoonII.skillName;
		//console.log(kingsBoonII);
		//console.log(kingsBoonII.skillActivated);
		kingsBoonII.skillActivated = true;
		player.atkStat += 20;
		player.defStat += 20;
	} // end kingsBoonII
	
	// unlock fuddleBreath skill
	if (player.level >= 24 && fuddleBreath.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + fuddleBreath.skillName;
		//console.log(fuddleBreath);
		player.skillSet.push(fuddleBreath);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(fuddleBreath.skillActivated);
		fuddleBreath.skillActivated = true;
	} // end fuddleBreath
	
	// unlock stampedeHooves skill
	if (player.level >= 26 && stampedeHooves.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + stampedeHooves.skillName;
		//console.log(stampedeHooves);
		player.skillSet.push(stampedeHooves);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(stampedeHooves.skillActivated);
		stampedeHooves.skillActivated = true;
	} // end stampedeHooves
	
	// unlock roughRiders skill
	if (player.level >= 28 && roughRiders.skillActivated == false) { 
		combatInfo.innerHTML += "<br>Skill Unlocked: " + roughRiders.skillName;
		//console.log(roughRiders);
		player.skillSet.push(roughRiders);
		//console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		//console.log(roughRiders.skillActivated);
		roughRiders.skillActivated = true;
	} // end roughRiders
	
} // end cavalierSkillSet
/*********************************
 * cavalier Skills End
 *********************************/


//////////////////////////////////////////////////////////////////////////////////////////
// Rank1 Classes End
//////////////////////////////////////////////////////////////////////////////////////////

function activeSkills(Skill) {
	// maniac
	if (Skill.skillName == "kamikazeeStrike") {
		let returnDamage = Math.floor(player.level * 5.18);
		player.hp -= returnDamage;
		console.log("returnDamage: " + returnDamage);
		combatInfo.innerHTML += "And also received " + returnDamage + " damage.<br>";
	}
	
	// scholar, dark mage
	if (Skill.skillName == "Drain") {
		let absorb = Math.floor(drain.damage/5);
		player.hp += absorb;
		combatInfo.innerHTML += "You absorbed " + absorb + "HP!<br>";
	}
	
	// cleric
	if (Skill.skillName == "Heal") {
		let healing = Skill.damage;
		player.hp += healing;
		combatInfo.innerHTML += Skill.atkMessage + healing + " health!<br>";
	}
}

function summonSkills() {
	// apprentice
	if (arcaneSprite.summonActive == true) {
		arcaneSprite.sName = "Faye";
		arcaneSprite.hp = Math.floor(Math.random() * 11) + (player.level * 10);
		arcaneSprite.mp = Math.floor(Math.random() * 11) + (player.level * 2);
		arcaneSprite.atk = Math.round(player.atk/10);
		arcaneSprite.def = Math.round(player.def/10);
		arcaneSprite.matk = Math.round(player.matk/5);
		arcaneSprite.mdef = Math.round(player.mdef/3);
		arcaneSprite.spd = Math.round(player.spd*(0.80));
		
		arcaneSprite.heal = Math.round(arcaneSprite.mdef * 2);
		arcaneSprite.atkmsg = arcaneSprite.sName + " pinged the enemy for ";
		apprenticeSkillSet(player);
	}
	
	// bandit
	if (callBandit.summonActive == true) {
		callBandit.sName = "Keith, the Bandit";
		callBandit.hp = Math.floor(Math.random() * 11) + (player.level * 30);
		callBandit.mp = Math.floor(Math.random() * 11) + (player.level * 2);
		callBandit.atk = Math.round(player.atk/7);
		callBandit.def = Math.round(player.def/7);
		callBandit.matk = Math.round(player.matk/10);
		callBandit.mdef = Math.round(player.mdef/10);
		callBandit.spd = Math.round(player.spd*(0.90));
		
		callBandit.heal = Math.round(callBandit.def * 2);
		callBandit.atkmsg = "Keith clobbered the enemy for ";
		banditSkillSet(player);
	}
	
	// knight
	if (summonSquire.summonActive == true) {
		summonSquire.sName = "Yvette, the Squire";
		summonSquire.hp = Math.floor(Math.random() * 11) + (player.level * 30);
		summonSquire.mp = Math.floor(Math.random() * 11) + (player.level * 2);
		summonSquire.atk = Math.round(player.atk/7);
		summonSquire.def = Math.round(player.def/7);
		summonSquire.matk = Math.round(player.matk/10);
		summonSquire.mdef = Math.round(player.mdef/10);
		summonSquire.spd = Math.round(player.spd*(0.90));
		
		summonSquire.heal = Math.round(summonSquire.def * 2);
		summonSquire.atkmsg = "Yvette shot the enemy with an arrow dealing ";
		knightSkillSet(player);
	}
	
	// maniac
	if (summonGrunt.summonActive == true) {
		summonGrunt.sName = "Peps, the Ace Grunt";
		summonGrunt.hp = Math.floor(Math.random() * 11) + (player.level * 50);
		summonGrunt.mp = Math.floor(Math.random() * 11) + (player.level * 4);
		summonGrunt.atk = Math.round(player.atk/6);
		summonGrunt.def = Math.round(player.def/7);
		summonGrunt.matk = Math.round(player.matk/10);
		summonGrunt.mdef = Math.round(player.mdef/10);
		summonGrunt.spd = Math.round(player.spd * 1.1);
		
		summonGrunt.heal = Math.round(summonGrunt.def * 2);
		summonGrunt.atkmsg = "Peps dashes towards and stabs the enemy, dealing ";
		maniacSkillSet(player);
	}
	
	// mercenary
	if (reinforcements.summonActive == true) {
		reinforcements.sName = "Oswaldo, the Chef";
		reinforcements.hp = Math.floor(Math.random() * 11) + (player.level * 57);
		reinforcements.mp = Math.floor(Math.random() * 11) + (player.level * 3);
		reinforcements.atk = Math.round(player.atk/6);
		reinforcements.def = Math.round(player.def/7);
		reinforcements.matk = Math.round(player.matk/8);
		reinforcements.mdef = Math.round(player.mdef/8);
		reinforcements.spd = Math.round(player.spd * 1.1);
		
		reinforcements.heal = Math.round(reinforcements.def * 2);
		reinforcements.atkmsg = "Oswaldo dashes and smashes the enemy with his hammer dealing ";
		mercenarySkillSet(player);
	}
	
	// mercenary
	if (summonComrade.summonActive == true) {
		summonComrade.sName = "Murloc, Wiseman of the Team";
		summonComrade.hp = Math.floor(Math.random() * 11) + (player.level * 63);
		summonComrade.mp = Math.floor(Math.random() * 11) + (player.level * 4);
		summonComrade.atk = Math.round(player.matk/10);
		summonComrade.def = Math.round(player.mdef/10);
		summonComrade.matk = Math.round(player.atk/5);
		summonComrade.mdef = Math.round(player.def/8);
		summonComrade.spd = Math.round(player.spd * 1.2);
		
		summonComrade.heal = Math.round(summonComrade.def * 2);
		summonComrade.atkmsg = "Murloc channels a devasting-looking spell dealing ";
		mercenarySkillSet(player);
	}
	
	// martialArtist
	if (unwantedCameo.summonActive == true) {
		unwantedCameo.sName = "Broh Lee, the Rival";
		unwantedCameo.hp = Math.floor(Math.random() * 11) + (player.level * 80);
		unwantedCameo.mp = Math.floor(Math.random() * 11) + (player.level * 0.5);
		unwantedCameo.atk = Math.round(player.atk);
		unwantedCameo.def = Math.round(player.def);
		unwantedCameo.matk = Math.round(player.matk/5);
		unwantedCameo.mdef = Math.round(player.mdef/5);
		unwantedCameo.spd = Math.round(player.spd * 1.1);
		
		unwantedCameo.heal = Math.round(unwantedCameo.def * 2);
		unwantedCameo.atkmsg = "Broh Lee kicks the enemy at blazing speeds dealing ";
		martialArtistSkillSet(player);
	}
	
	// scholar
	if (golemKnight.summonActive == true) {
		golemKnight.sName = "Bromm, the Golem Knight";
		golemKnight.hp = Math.floor(Math.random() * 11) + (player.level * 115);
		golemKnight.mp = Math.floor(Math.random() * 11) + (player.level * 2);
		golemKnight.atk = Math.round(player.matk/3);
		golemKnight.def = Math.round(player.mdef/7);
		golemKnight.matk = Math.round(player.matk/10);
		golemKnight.mdef = Math.round(player.mdef/10);
		golemKnight.spd = Math.round(player.spd*(0.70));
		
		golemKnight.heal = Math.round(golemKnight.def * 2);
		golemKnight.atkmsg = "Bromm jumped up high and slammed his greatsword into the enemy, dealing ";
		scholarSkillSet(player);
	}
	
	// dark mage
	if (reaper.summonActive == true) {
		reaper.sName = "SkullReaper Sturn, the Executioner";
		reaper.hp = Math.floor(Math.random() * 11) + (player.level * 74);
		reaper.mp = Math.floor(Math.random() * 11) + (player.level * 3);
		reaper.atk = Math.round(player.matk/4);
		reaper.def = Math.round(player.mdef/8);
		reaper.matk = Math.round(player.matk/10);
		reaper.mdef = Math.round(player.mdef/10);
		reaper.spd = Math.round(player.spd*(0.75));
		
		reaper.heal = Math.round(reaper.def * 2);
		reaper.atkmsg = "Sturn swung his scythe with shocking speed, dealing ";
		darkMageSkillSet(player);
	}
	
	// dark mage
	if (hellPup.summonActive == true) {
		hellPup.sName = "Cerberus, the Hellhound Pup";
		hellPup.hp = Math.floor(Math.random() * 11) + (player.level * 66);
		hellPup.mp = Math.floor(Math.random() * 11) + (player.level * 4);
		hellPup.atk = Math.round(player.matk/2);
		hellPup.def = Math.round(player.mdef/6);
		hellPup.matk = Math.round(player.matk/8);
		hellPup.mdef = Math.round(player.mdef/8);
		hellPup.spd = Math.round(player.spd*(1.1));
		
		hellPup.heal = Math.round(hellPup.def * 2);
		hellPup.atkmsg = "Cerberus belched a fireball, dealing ";
		darkMageSkillSet(player);
	}
	
	// cleric
	if (guardianStatue.summonActive == true) {
		guardianStatue.sName = "Andrea, Guardian Statue of Healing";
		guardianStatue.hp = Math.floor(Math.random() * 11) + (player.level * 208);
		guardianStatue.mp = 0;
		guardianStatue.atk = Math.round(player.matk/5);
		guardianStatue.def = Math.round(player.mdef/5);
		guardianStatue.matk = Math.round(player.matk/5);
		guardianStatue.mdef = Math.round(player.mdef/2.5);
		guardianStatue.spd = Math.round(player.spd);
		
		guardianStatue.heal = Math.round(guardianStatue.def * 2);
		guardianStatue.atkmsg = "Andrea won't attack. Therefore dealing ";
		clericSkillSet(player);
	}
	
	// heavyKnight
	if (summonGuard.summonActive == true) {
		summonGuard.sName = "Krug, the Rook";
		summonGuard.hp = Math.floor(Math.random() * 11) + (player.level * 98);
		summonGuard.mp = Math.floor(Math.random() * 11) + (player.level * 2);
		summonGuard.atk = Math.round(player.atk/6);
		summonGuard.def = Math.round(player.def/7);
		summonGuard.matk = Math.round(player.matk/8);
		summonGuard.mdef = Math.round(player.mdef/8);
		summonGuard.spd = Math.round(player.spd * 1.4);
		
		summonGuard.heal = Math.round(summonGuard.def * 2);
		summonGuard.atkmsg = "Krug slowly walks toward and swings his weapon at the enemy dealing ";
		heavyKnightSkillSet(player);
	}

	// samurai
	if (smokeSignal.summonActive == true) {
		smokeSignal.sName = "Shashi, the Revered";
		smokeSignal.hp = Math.floor(Math.random() * 11) + (player.level * 64);
		smokeSignal.mp = Math.floor(Math.random() * 11) + (player.level * 3);
		smokeSignal.atk = Math.round(player.atk/6);
		smokeSignal.def = Math.round(player.def/6);
		smokeSignal.matk = Math.round(player.matk/7);
		smokeSignal.mdef = Math.round(player.mdef/7);
		smokeSignal.spd = Math.round(player.spd * 1.3);
		
		smokeSignal.heal = Math.round(smokeSignal.def * 2);
		smokeSignal.atkmsg = "Shashi throws multiple shurikens and kunai dealing ";
		samuraiSkillSet(player);
	}
	
	// cavalier
	if (horseWolfHowl.summonActive == true) {
		horseWolfHowl.sName = "Skag, the Wild HorseWolf";
		horseWolfHowl.hp = Math.floor(Math.random() * 11) + (player.level * 75);
		horseWolfHowl.mp = Math.floor(Math.random() * 11) + (player.level * 3);
		horseWolfHowl.atk = Math.round(player.atk/5);
		horseWolfHowl.def = Math.round(player.def/6);
		horseWolfHowl.matk = Math.round(player.matk/9);
		horseWolfHowl.mdef = Math.round(player.mdef/7);
		horseWolfHowl.spd = Math.round(player.spd * 1.2);
		
		horseWolfHowl.heal = Math.round(horseWolfHowl.def * 2);
		horseWolfHowl.atkmsg = "Skag gallops in a burst of fire and tackles the enemy dealing ";
		cavalierSkillSet(player);
	}
}

function tempSkills(enemy) {
	// bandit
	if (bluff.tempActive == true) {
		enemy.def -= bluff.decStat[0];
		
		banditSkillSet(player);
		updateChars();
		return;
	}
	
	// bandit
	if (rage.tempActive == true) {
		player.atk += rage.incStat[0];
		
		banditSkillSet(player);
		updateChars();
		return;
	}
	
	// apprentice
	if (magicCharge.tempActive == true) {
		player.matk += magicCharge.incStat[0];
		
		apprenticeSkillSet(player);
		updateChars();
		return;
	}
	
	// apprentice
	if (barrier.tempActive == true) {
		player.def += barrier.incStat[0];
		player.mdef += barrier.incStat[0];
		
		apprenticeSkillSet(player);
		updateChars();
		return;
	}
	
	// knight
	if (guard.tempActive == true) {
		player.def += guard.incStat[0];
		player.atk -= guard.decStat[0];
		
		knightSkillSet(player);
		updateChars();
		return;
	}
	
	// maniac
	if (bloodBoil.tempActive == true) {
		player.atk += bloodBoil.incStat[0];
		player.spd += bloodBoil.incStat[1];
		player.def -= bloodBoil.decStat[0];
		
		maniacSkillSet(player);
		updateChars();
		return;
	}
	
	// maniac
	if (maniacalLaugh.tempActive == true) {
		player.matk += maniacalLaugh.incStat[0];
		player.mdef += maniacalLaugh.incStat[1];
		player.hp += maniacalLaugh.incStat[2];
		
		maniacSkillSet(player);
		updateChars();
		return;
	}
	
	// mercenary
	if (empowerWeapon.tempActive == true) {
		player.atk += empowerWeapon.incStat[0];
		
		mercenarySkillSet(player);
		updateChars();
		return;
	}
	
	// mercenary
	if (hustleTime.tempActive == true) {
		player.def += hustleTime.incStat[0];
		player.spd += hustleTime.incStat[1];
		player.hp += hustleTime.incStat[2];
		
		mercenarySkillSet(player);
		updateChars();
		return;
	}
	
	// martialArtist
	if (bulkUp.tempActive == true) {
		player.atk += bulkUp.incStat[0];
		player.def += bulkUp.incStat[1];
		
		martialArtistSkillSet(player);
		updateChars();
		return;
	}
	
	// martialArtist
	if (hiddenReflexes.tempActive == true) {
		player.atk += hiddenReflexes.incStat[0];
		player.spd += hiddenReflexes.incStat[1];
		
		martialArtistSkillSet(player);
		updateChars();
		return;
	}
	
	// dark mage
	if (weaken.tempActive == true) {
		enemy.def -= weaken.decStat[0];
		enemy.mdef -= weaken.decStat[1];
		
		darkMageSkillSet(player);
		updateChars();
		return;
	}
	
	// dark mage
	if (lunarBlessing.tempActive == true) {
		player.matk += lunarBlessing.incStat[0];
		player.mdef += lunarBlessing.incStat[1];
		player.hp += lunarBlessing.incStat[2];
		
		darkMageSkillSet(player);
		updateChars();
		return;
	}
	
	// cleric
	if (blessing.tempActive == true) {
		player.def += blessing.incStat[0];
		player.mdef += blessing.incStat[1];
		
		clericSkillSet(player);
		updateChars();
		return;
	}
	
	// cleric
	if (holyAura.tempActive == true) {
		player.matk += holyAura.incStat[0];
		player.spd += holyAura.incStat[1];
		player.hp += holyAura.incStat[2];
		
		clericSkillSet(player);
		updateChars();
		return;
	}
	
	// heavyKnight
	if (ironWall.tempActive == true) {
		player.def += ironWall.incStat[0];
		player.mdef += ironWall.incStat[1];
		player.spd -= ironWall.decStat[0];
		
		heavyKnightSkillSet(player);
		updateChars();
		return;
	}
	
	// heavyKnight
	if (knightsFury.tempActive == true) {
		player.atk += knightsFury.incStat[0];
		player.def -= knightsFury.decStat[0];
		
		heavyKnightSkillSet(player);
		updateChars();
		return;
	}
	
	// samurai
	if (defensiveStance.tempActive == true) {
		player.def += defensiveStance.incStat[0];
		player.mdef += defensiveStance.incStat[1];
		player.atk -= defensiveStance.decStat[0];
		
		samuraiSkillSet(player);
		updateChars();
		return;
	}
	
	// samurai
	if (ownTempo.tempActive == true) {
		player.atk += ownTempo.incStat[0];
		player.spd += ownTempo.incStat[1];
		player.statusE = "";
		
		samuraiSkillSet(player);
		updateChars();
		return;
	}
	
	// cavalier
	if (intimidatingGlare.tempActive == true) {
		enemy.def -= intimidatingGlare.decStat[0];
		enemy.mdef -= intimidatingGlare.decStat[1];
		
		cavalierSkillSet(player);
		updateChars();
		return;
	}
	
	// cavalier
	if (stampedeHooves.tempActive == true) {
		player.atk += stampedeHooves.incStat[0];
		player.spd += stampedeHooves.incStat[1];
		
		cavalierSkillSet(player);
		updateChars();
		return;
	}
}

function transformSkills() {
	/*
	if (manaOverlord.transformActive == true) {
		player.transform = manaOverlord.transform;
		player.matkStat += manaOverlord.incStat[0];
		player.mdefStat += manaOverlord.incStat[1];
		player.spdStat += manaOverlord.incStat[2];
		player.levelUp();
		updateChars();
	}
	*/
	
	updateChars();
}


/*
// fire skill
var fire = new Skill("Fire", "active");
fire.mpCost = 3;
fire.desc = "Deals fire damage to the opponent. (MP: " + fire.mpCost + ")";
fire.atkMessage = "You burned your opponent for ";

fire.damageType = "magic";
//console.log(fire);


// bolt skill
var bolt = new Skill("Bolt", "active");
bolt.mpCost = 5;
bolt.desc = "Deals bolt damage to the opponent. (MP: " + bolt.mpCost + ")";
bolt.atkMessage = "You bolted your opponent for ";

bolt.damageType = "magic";
//console.log(bolt);


// summonSlime skill
var summonSlime = new Skill("Summon Slime", "summon");
summonSlime.mpCost = 10;
summonSlime.desc = "Summons a Slime creature as an ally. (MP: " + summonSlime.mpCost + ")";
summonSlime.atkMessage = "You summoned a Slime!";

//console.log(summonSlime);

// raiseDef skill
var raiseDef = new Skill("RaiseDef", "temp");
raiseDef.mpCost = 3;
raiseDef.desc = "Raises your defense a bit. (MP: " + raiseDef.mpCost + ")";
raiseDef.atkMessage = "You raised your defense!";
//console.log(raiseDef);

// manaBoostSmall Skill
var manaBoostSmall = new Skill ("ManaBoost (+50)", "passive");
manaBoostSmall.desc = "Passive: Permanently raises your mana by 50.";
//console.log(manaBoostSmall);

var manaOverlord = new Skill ("ManaOverlord", "transform");
manaOverlord.mpCost = 20;
manaOverlord.desc = "Transforms into you overlord form, increasing you matk, mdef, and spd.";
manaOverlord.atkMessage = "You begin to overload with mana!";
manaOverlord.transform = "Overlord";
//console.log(manaOverlord);

// apprentice skills
function apprenticeSkillSet(player) {
	// fire
	fire.damage = Math.floor((player.matk/3) + Math.round(player.matk * 1.1));
	
	// bolt
	bolt.damage = Math.floor((player.matk/3) + Math.round(player.matk * 1.5));
	
	// summonSlime
	summonSlime.damage = Math.floor(Math.random() * (summonSlime.matk/4)) + Math.round(summonSlime.matk * 1.2);
	
	//raiseDef
	raiseDef.incStat[0] = (player.level < 10 || baseClasses.includes(player.uClass)) ? (player.level * 2) : (player.level * 3);
	
	//manaOverlord
	manaOverlord.incStat[0] = 50;
	manaOverlord.incStat[1] = 50;
	manaOverlord.incStat[2] = 50;
	
	if (player.level >= 1 && fire.skillActivated == false) { // unlock fire skill
			combatInfo.innerHTML += "<br>Skill Unlocked: " + fire.skillName;
			//console.log(fire);
			player.skillSet.push(fire);
			console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
			console.log(fire.skillActivated);
			fire.skillActivated = true;
	} // end fire
	
	if (player.level >= 3 && bolt.skillActivated == false) { // unlock bolt skill
			combatInfo.innerHTML += "<br>Skill Unlocked: " + bolt.skillName;
			//console.log(bolt);
			player.skillSet.push(bolt);
			console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
			console.log(bolt.skillActivated);
			bolt.skillActivated = true;
	} // end bolt
	
	if (player.level >= 2 && summonSlime.skillActivated == false) { // unlock summonSlime skill
			combatInfo.innerHTML += "<br>Skill Unlocked: " + summonSlime.skillName;
			//console.log(summonSlime);
			player.skillSet.push(summonSlime);
			console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
			console.log(summonSlime.skillActivated);
			summonSlime.skillActivated = true;
	} // end summonSlime
	
	if (player.level >=2 && raiseDef.skillActivated == false) { // unlock raiseDef skill
		combatInfo.innerHTML += "<br>Skill Unlocked: " + raiseDef.skillName;
		//console.log(raiseDef);
		player.skillSet.push(raiseDef);
		console.log("player.skillSet: " + player.skillSet + player.skillSet.length);
		console.log(raiseDef.skillActivated);
		raiseDef.skillActivated = true;
	} // end raiseDef
	
	if (player.level >=2 && manaBoostSmall.skillActivated == false) { // unlock manaBoostSmall
		combatInfo.innerHTML += "<br>Skill Unlocked: " + manaBoostSmall.skillName;
		//console.log(manaBoostSmall);
		console.log(manaBoostSmall.skillActivated);
		manaBoostSmall.skillActivated = true;
		player.mpStat += 5;
	} // end manaBoostSmall
	
	if (player.level >=2 && manaOverlord.skillActivated == false) { // unlock manaOverlord
		combatInfo.innerHTML += "<br>Skill Unlocked: " + manaOverlord.skillName;
		//console.log(manaOverlord);
		player.skillSet.push(manaOverlord);
		console.log(manaOverlord.skillActivated);
		manaOverlord.skillActivated = true;
	}
	
	/* summonSlime
	summonSlime.hp = Math.round(player.hp/5);
	summonSlime.mp = Math.round(player.mp/5);
	summonSlime.atk = Math.round(player.atk/10);
	summonSlime.def = Math.round(player.def/10);
	summonSlime.matk = Math.round(player.matk/5);
	summonSlime.mdef = Math.round(player.mdef/3);
	summonSlime.spd = Math.round(player.spd/(0.80));
	
	summonSlime.heal = Math.round(summonSlime.mdef * 2);
	summonSlime.atkmsg = "Summon Slime pinged the enemy for ";
	end summonSlime 
	
}

 
function summonSkills() {
	if (summonSlime.summonActive == true) {
		summonSlime.hp = Math.floor(Math.random() * 11) + (player.level * 20);
		summonSlime.mp = Math.floor(Math.random() * 11) + (player.level * 2);
		summonSlime.atk = Math.round(player.atk/10);
		summonSlime.def = Math.round(player.def/10);
		summonSlime.matk = Math.round(player.matk/5);
		summonSlime.mdef = Math.round(player.mdef/3);
		summonSlime.spd = Math.round(player.spd/(0.80));
		
		summonSlime.heal = Math.round(summonSlime.mdef * 2);
		summonSlime.atkmsg = "Summon Slime pinged the enemy for ";
	}
}

function tempSkills() {
	if (raiseDef.tempActive == true) {
		player.def += raiseDef.incStat[0];
	}
}

function transformSkills() {
	if (manaOverlord.transformActive == true) {
		player.transform = manaOverlord.transform;
		player.matkStat += manaOverlord.incStat[0];
		player.mdefStat += manaOverlord.incStat[1];
		player.spdStat += manaOverlord.incStat[2];
		player.levelUp();
		updateChars();
	}
}
*/
