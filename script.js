var number = document.getElementsByClassName("number");

for(var i = 0; i < number.length; i++)
{
    number[i].addEventListener('click',function(){
        var output = removeFormat(getOutput());
        if(output != NaN)
        {
            output = output + this.id;
            printOutput(output);
        }
        
    })
}

var operator = document.getElementsByClassName("operator");

for(var i = 0; i < operator.length; i++)
{
    operator[i].addEventListener('click',function(){
        if(this.id == "clear")
        {
            document.getElementById("output-value").innerHTML = "";
            document.getElementById("history-value").innerHTML = "";
        }
       
        if(this.id == "backspace")
        {
            var output = removeFormat(getOutput()).toString();
            if(output)
            {
                output = output.substr(0, output.length - 1);
                printOutput(output);

            }
        }
        else{
            var output = getOutput();
            var history = getHistory();

            if(output != "")
            {
                output = removeFormat(output);
                history = history + output;
                if(this.id == "=")
                {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else
                {
                    history  = history + this.id;
                    printHistory(history);
                    document.getElementById("output-value").innerHTML = "";
                }
            }

        }
       
    })
}

function getHistory(){
    return document.getElementById("history-value").innerHTML;
    
}

function printHistory(num){
    document.getElementById("history-value").innerHTML = num;
}

function getOutput(){
    return document.getElementById("output-value").innerHTML;
   
}

function printOutput(num)
{
    if(num == "")
    {
        document.getElementById("output-value").innerHTML =  "";
    }
    document.getElementById("output-value").innerHTML = format(num);
}

function format(num)
{
   var n = Number(num);
    return n.toLocaleString("en");
}

function removeFormat(num)
{
    var n = num;
    n = n.replace(/,/g,'');
    return Number(n);
    
}
