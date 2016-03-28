var hipster = prompt("Are you a real hipster (YES, NO or MAYBE)?").toUpperCase();

switch (hipster) {
    case 'YES':
        var vinyl = prompt("Do you believe in the magical music powers of vinyl (YES or NO)?").toUpperCase();
        var bands = prompt("Do you stop listening to bands once they become popular (YES or NO)?").toUpperCase();
        if (vinyl === 'YES' && bands === 'YES') {
            console.log("Rock those horn-rimmed glasses with pride!");
        } else if (vinyl === 'YES' || bands === 'YES') {
            console.log("Congratulations for being a half-assed stereotype!");
        } else {
            console.log("Who do you think you are? No, seriously, I'm really asking.");
        }
        break;
    case 'NO':
        var glasses = prompt("Do you really need those glasses you're wearing (YES or NO)?").toUpperCase();
        var check = prompt("Checkered clothes convey the appropriate level of nonechalance I feel inside through my trendy sense of fashion (YES or NO)?").toUpperCase();
        if (glasses === 'YES' && check === 'YES') {
            console.log("LOL Who are you kidding? LIES! You're a hipster on the inside and out.");
        } else if (glasses === 'YES' || check === 'YES') {
            console.log("You may not be all the way there...yet. But we'll get ya! MUAHAHAhahahaha...");
        } else {
            console.log("You've escaped hipsterdom. Congratulations on not confirming to society's stereotypical portrail of young people, you rebel.");
        }
        break;
    case 'MAYBE':
        var organic = prompt("Is it important to you that your food is organic and local (YES or NO)?").toUpperCase();
        var nostalgic = prompt("Theme cocktails in a an underground bombshelter from the 60s served by waitrons dressed in period outfits (YES or NO)?").toUpperCase();
        if (organic === 'YES' && nostalgic === 'YES') {
            console.log("Why did you choose maybe again? You're the one Hipster to rule them all!");
        } else if (organic === 'YES' || nostalgic === 'YES') {
            console.log("You may not know but the rest of us do, I promise. You make the Hipster radar ring the alarm!");
        } else {
                console.log("You can stay on the fence as long as you don't jump on the bandwagon.");
        }
    break;
    default:
        console.log("You're being too much of a rebel by not typing real answers. Too scared to know the truth, are we?");
}
var hipster = prompt("Are you a real hipster (YES, NO or MAYBE)?").toUpperCase();

switch (hipster) {
    case 'YES':
        var vinyl = prompt("Do you believe in the magical music powers of vinyl (YES or NO)?").toUpperCase();
        var bands = prompt("Do you stop listening to bands once they become popular (YES or NO)?").toUpperCase();
        if (vinyl === 'YES' || bands === 'YES') {
            console.log("Rock those horn-rimmed glasses with pride!");
        } else {
            console.log("Who do you think you are? No, seriously, I'm really asking.");
        }
        break;
    case 'NO':
        var glasses = prompt("Do you really need those glasses you're wearing (YES or NO)?").toUpperCase();
        var check = prompt("Checkered clothes convey the appropriate level of nonechalance I feel inside through my trendy sense of fashion (YES or NO)?").toUpperCase();
        if (glasses === 'YES' && check === 'YES') {
            console.log("LOL Who are you kidding? LIES! You're a hipster on the inside and out.");
        } else {
            console.log("You've escaped hipsterdom. Congratulations on not confirming to society's stereotypical portrail of young people, you rebel.");
        }
        break;
    case 'MAYBE':
        var organic = prompt("Is it important to you that your food is organic and local (YES or NO)?").toUpperCase();
        var nostalgic = prompt("Theme cocktails in a an underground bombshelter from the 60s served by waitrons dressed in period outfits (YES or NO)?").toUpperCase();
        if (organic === 'YES' && nostalgic === 'YES') {
            console.log("Why did you choose maybe again? You're the one Hipster to rule them all!");
        } else {
            console.log("You can stay on the fence as long as you don't jump on the bandwagon.");
        }
        break;
    default:
        console.log("You're being too much of a rebel by not typing real answers. Too scared to know the truth, are we?");
}
