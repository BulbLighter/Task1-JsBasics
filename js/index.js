console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1= 'driver';
let hacker2= 'navigator';
console.log("The driver's name:"+hacker1);
console.log("The navigator's name:"+hacker2);
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length)
{
    console.log("The driver has the longest name, it has",hacker1.length,"characters.");
}
else if(hacker1.length<hacker2.length)
{
    console.log("It seems that the navigator has the longest name, it has",hacker2.length,"characters.");
}
else
{
    console.log("Wow, you both have equally long names, XX characters!");
}
// Iteration 3: Loops

let result=" ";
for (let i = 0; i < hacker1.length; i++) 
{
    result += hacker1[i].toUpperCase() + " ";
}


console.log(result.trim());

result=" ";
for (let i = 0; i < hacker2.length; i++) 
{
    result += hacker2[hacker2.length-i-1];
}

console.log(result.trim());


for (let i = 0; i < hacker2.length; i++) 
    {
        if(hacker1==hacker2)
            {
                console.log("What?! You both have the same name?");
            }
        else
        {
            if(hacker1[i]<hacker2[i])
                {
                    console.log("The driver's name goes first.");
                    break;
                }
            else if(hacker1[i]>hacker2[i])
                {
                    console.log("Yo, the navigator goes first definitely.");
                    break;
                }
        }

    }
// Bonus Time
let word = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at laoreet nunc, id aliquet ante. Mauris fermentum felis quis iaculis hendrerit. Fusce mattis dictum porta. Proin venenatis massa urna, a porta purus tempus vitae. Nulla facilisi. Phasellus in congue mauris. Pellentesque molestie tellus nec vulputate laoreet. Pellentesque ac interdum velit. Integer feugiat urna tortor, ut dictum odio viverra at. Quisque dolor eros, suscipit interdum turpis non, ornare vestibulum lectus. Cras viverra cursus aliquet. Suspendisse eleifend id eros at accumsan. In sit amet enim at augue sollicitudin efficitur. Nulla pharetra tellus ut nibh euismod mattis. Integer in volutpat augue, vulputate fermentum lorem. Curabitur feugiat vitae dui eu blandit. Nulla posuere urna sed magna vehicula scelerisque. Quisque quis elit lectus. Sed laoreet, eros sit amet iaculis pharetra, nunc dolor fringilla diam, eu rhoncus nisl quam vitae dui. Cras dignissim tempus felis, at feugiat magna mattis at. Nulla mollis enim a velit hendrerit tincidunt. Donec luctus, ligula nec hendrerit molestie, turpis magna eleifend enim, ut faucibus nisl augue eget mauris. Cras luctus nibh massa, quis ullamcorper massa congue sit amet. Vestibulum eu hendrerit ante. Suspendisse ullamcorper turpis lectus, vel cursus ligula facilisis quis. Maecenas urna odio, sodales sit amet magna id, porta venenatis orci. Vivamus sit amet imperdiet purus. Aenean urna ex, gravida sollicitudin interdum in, semper placerat ante. Nam maximus varius turpis at placerat. Proin nulla risus, gravida sit amet massa at, eleifend ullamcorper dolor. Cras urna mi, pulvinar ac risus sed, elementum hendrerit augue. Suspendisse finibus tincidunt tellus, quis ultricies risus sagittis et. Fusce lobortis mattis pharetra. Pellentesque velit tellus, semper ut eros malesuada, consectetur scelerisque arcu. Nam elementum molestie metus, maximus vulputate nunc. Proin quis turpis consectetur, dictum ligula eget, tempor purus. Vestibulum a ex aliquet, facilisis arcu in, volutpat nibh. Aliquam ullamcorper lobortis pulvinar. Mauris scelerisque vitae lacus at sagittis. Curabitur pellentesque pellentesque mauris, sit amet mattis elit varius sit amet. ";
let count = 0;
for(let i=0;i<word.length;i++)
    {
        
        if(word[i]>="a" && word[i]<="z")
            {
                count=count+1;
            }
        if(word[i]>="A" && word[i]<="Z")
            {
                count=count+1;
            }
    }
console.log(count);
count=0
for(let i=0;i<word.length;i++)
    {
        
        if(word[i]="e")
            {
                if(word[i+1]="t")
                    {
                        count=count+1;
                    }
            }
        
    }
console.log(count);   

let phraseToCheck = "Was it a car or a cat I saw?";
let cleanedPhrase = phraseToCheck.replace(/[^a-zA-Z]/g, "").toLowerCase();
let isPalindrome = true;

for (let i = 0; i < Math.floor(cleanedPhrase.length / 2); i++) {
    if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - i - 1]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}
