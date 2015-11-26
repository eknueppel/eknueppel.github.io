function resetClickerTotal()
{
	document.getElementById('clickerTotal').value = 0;
}

function resetCurrrentTotal()
{
	document.getElementById('currentTotal').value = 0;
}

function resetRockTotal()
{
	document.getElementById('rockTotal').value = 0;
}

function resetFunc()
{
	resetClickerTotal();
	resetCurrrentTotal();
	resetRockTotal();
}

function increaseTotals()
{
	increaseClickerTotal();
		
}

function increaseClickerTotal()
{
	var value = parseInt(document.getElementById('clickerTotal').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('clickerTotal').value = value;
	checkClickerTotal(value);					
}

function increaseCurrentTotal()
{
	var value = parseInt(document.getElementById('currentTotal').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('currentTotal').value = value;						
}

function increaseCharacterLevel()
{
	var value = parseInt(document.getElementById('characterLevel').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('characterLevel').value = value;						
}

function increaseRockTotal()
{	
	var value = parseInt(document.getElementById('rockTotal').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('rockTotal').value = value;							
}

function checkClickerTotal(value)
{
	if(value%10==0)
	{
		increaseRockTotal();
		resetCurrrentTotal();
	}
	else
	{
		increaseCurrentTotal();
	}
	setAchievement(value);
	setRockType(value);
	getRockCalc();
	advanceCharacter();
}

function advanceCharacter()
{
	var value = parseInt(document.getElementById('character').style.paddingLeft, 10);
	var maxWidth = document.getElementById('characterCell').clientWidth;
	value = isNaN(value) ? 0 : value;
    value = value + 1;
	document.getElementById('character').style.paddingLeft = value + "px";
	if(value==(maxWidth-75))
	{
		document.getElementById('character').style.paddingLeft = "0px";
		alert("Your character just leveled up!");
		increaseCharacterLevel();		
	}    
}

function setAchievement(value)
{
	var achievementType = "Im a firen a meadiocre employee";						
	if (value>=100000)
	{
		achievementType = "LOL";
	}
	else if (value>=20000)
	{
		achievementType = "Seriously";
	}
	else if (value>=10000)
	{
		achievementType = ". . .instead try to bend your mind";
	}
	else if (value>=5000)
	{
		achievementType = "Don't try to bend the spoon. . .";
	}
	else if (value>=2000)
	{
		achievementType = "Get in the chopper!!!!";
	}
	else if (value>=1000)
	{
		achievementType = "Show me your guns!!!";
	}
	else if (value>=500)
	{
		achievementType = "Gettin' buff for the revolution!!";
	}
	else if (value>=100)
	{
		achievementType = "Whoa you can swing a pick bro / ma'am!";
	}				 
	document.getElementById('achievement').innerHTML = achievementType;
}

function setRockType(value)
{		
	var rock;				
	if (value>=100000000)
	{
		rock = {rockType:"Adamantine",interval:10000000};
	}
	else if (value>=20000)
	{
		rock = {rockType:"Orachalcum", interval:2000};
	}
	else if (value>=15000)
	{
		rock = {rockType:"Amethyst",interval:1500};
	}
	else if (value>=10000)
	{
		rock = {rockType:"Obsidian",interval:1000};
	}
	else if (value>=5000)
	{
		rock = {rockType:"Titanium",interval:500};
	}
	else if (value>=4000)
	{
		rock = {rockType:"Selenium",interval:400};
	}
	else if (value>=3500)
	{
		rock = {rockType:"Manganese",interval:350};
	}
	else if (value>=3000)
	{
		rock = {rockType:"Iron",interval:300};
	}
	else if (value>=2000)
	{
		rock = {rockType:"Cobalt",interval:200};
	}
	else if (value>=1000)
	{
		rock = {rockType:"Copper",interval:100};
	}
	else if (value>=750)
	{
		rock = {rockType:"Pyrite...",interval:75};
	}
	else if (value>=500)
	{
		rock = {rockType:"Granite",interval:50};
	}
	else if (value>=100)
	{
		rock = {rockType:"Geode",interval:10};		
	}
	else if (value>=50)
	{
		rock = {rockType:"Cobble",interval:5};
	}
	else if (value>=10)
	{
		rock = {rockType:"Pebble",interval:1};
	}
	else
	{
		rock = {rockType:"",interval:0};
	}
	if(interval > 0)
	{
		document.getElementById('rockName').innerHTML = rock.rockType;
		document.getElementById('rockInterval').value = rock.interval;	
	}
}

function getRockCalc()
{
	var total = document.getElementById('rockTotal').value;
	var interval = document.getElementById('rockInterval').value;
	if(interval != 0)
	{
		var displayValue = (total/interval);
		document.getElementById('rockCalc').value = displayValue;
	}
}
