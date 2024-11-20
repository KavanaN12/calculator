let i=0;
        var num1=0;
        var num=[];
        var mun=[];
        var operation=[];
        var operator=[];
        var ansdis=document.getElementById("ans");
        var ans=document.getElementById("ans").value;
        var msg=document.getElementById("msg");
        function calculator(variable) {
            msg.value=msg.value+variable;
        }
        function number(variable){
            num.push(variable);
            for (let i = 0; i < num.length; i++) {
                mun[i]=num[num.length-1-i];
            }
        }
        function number1(variable) {
            if (operator[0]=="=") {
                operator.pop();
            }
            else{number2();}
            operate();
            operator.push(variable);
            if (variable=="=") {
                msg.value=ans
            }
        }
        function number2() {
            for (let i = 0; i < mun.length; i++) {
                num1=mun[i]*(10**i)+num1;
            }
            operation.push(num1);
            num1=0;
            num=[];
            mun=[];
        }
        function operate() {
            if (operation.length>=2) {
                perform();
            }
            else{
                ans=(parseFloat(operation[0]).toFixed(2));
            }
        }
        function perform() {
               if (operator[0]=="+") {
                operation[0]=operation[0]+operation[1];
                operation.pop();
               }
               else if (operator[0]=="-") {
                operation[0]=operation[0]-operation[1];
                operation.pop();
               }
               else if (operator[0]=="*") {
                operation[0]=operation[0]*operation[1];
                operation.pop();
               }
               else if (operator[0]=="/") {
                if(operation[1]!=0){
                    operation[0]=operation[0]/operation[1];
                    operation.pop();
                }
               }
               if (operation[1]==null) {
                operator=[];
               }
               ans=(parseFloat(operation[0]).toFixed(2));
        }
        function erase(variable) {
            mun.shift();
            num.pop();
            console.log(mun);
            msg.value=msg.value.toString().slice(0,-1);
        }
        function erase(variable) {
            mun.shift();
            num.pop();
            console.log(mun);
            msg.value=msg.value.toString().slice(0,-1);
        }