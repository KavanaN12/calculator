let k=0;
        var num1=0;
        var num=[];
        var mun=[];
        var operation=[];
        var operator=[];
        var ansdis=document.getElementById("ans");
        var ans=document.getElementById("ans").value;
        var msg=document.getElementById("msg");
        function calculator(variable) {
            if (variable=="doublezero") {
                msg.value=msg.value+0+0;
            }
            else{
                msg.value=msg.value+variable;
            }
        }
        function number(variable){
            if (variable=="doublezero") {
                num.push(0);
                num.push(0);
            }
            else{
                num.push(variable);
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
                msg.value=ans;
            }
        }
        function number2() {
            number3();
            operation.push(num1);
            num1=0;
            num=[];
        }
        function number3a() {
            for (let i = 0; i < num.length; i++) {
                num1=num[num.length-1-i]*(10**i)+num1;
            }
        }
        function number3() {
            var deci=false;
            var c=0;
            for (let i = 0; i < num.length; i++) {
                if(num[i]=='.'){
                    c=i;
                    deci=true;
                    break;
                }
            }
            if (deci==false) {
                number3a();
            }
            else{
                number3b(c);
            }
        }
        function number3b(var2) {
            var d=var2;
            for (let i = 1; i < num.length; i++) {
                if (num[num.length-i]=='.') {
                    number3bb(num.length-i);
                    break;
                }
                num1=(num[num.length-i]*(10**(-(num.length-1-d))))+num1;
                d++;             
            }
        }
        function number3bb(var3) {
            var a=0;
            for (let i = var3-1; i >-1 ; i--) {
                num1=num[i]*(10**(a))+num1;
                a++;
            }
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
            num.pop();
            msg.value=msg.value.toString().slice(0,-1);
            ans=msg.value;
        }