document.getElementById("submission").addEventListener('click',checkNumber);
var btnValue=document.querySelector('#submission');
var   guessInput=document.querySelector('#input-value'),
      guessLeft=3;
      text=document.querySelector('#message');
      minnum=1;
      maxnum=10,
      correctNumber=getRandomNumber(minnum,maxnum);


function checkNumber(e)
{
    e.preventDefault();

    if(btnValue.value=='Play Again')
    {
    //    btnValue.value='submit';
    //    text.style.display='none';
    //    return;
          window.location.reload();
    }
    else{
          text.style.display='block';
    }
    let guessedNumber=parseInt(guessInput.value);
    if(guessedNumber===correctNumber)
    {
        resetguesses();
        var color='green';
        showmessage(`Your guess is correct! YOU WON`,color);
    }
    else{
        color='red';
        guessLeft-=1;
        if(isNaN(guessedNumber) || guessedNumber<1 || guessedNumber>10)
        {
            color='red';
            showmessage(`Enter value between 1 and 10`,color);
        }
        else if ((guessLeft===0)) {
            resetguesses();
            showmessage(`Sorry , YOU LOST! Correct number was ${correctNumber}`,color);
        } 
        else {
            showmessage(`Your guess is incorrect! ${guessLeft} left`,color);
        }
        
    }
    clearvalue();
}

function getRandomNumber(minnum,maxnum)
{
    return Math.floor(Math.random()*(maxnum-minnum+1)+minnum);
}
function showmessage(mssg,color)
{

    text.innerHTML=mssg;
    text.style.color=color;
    guessInput.style.borderColor=color;
    guessInput.style.borderWidth="1px";
}

function clearvalue()
{
    guessInput.value=' ';
}

function resetguesses()
{
    guessLeft=3;
    document.querySelector('#submission').value='Play Again';
    
}
