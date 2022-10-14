        //Declaração de variáveis
        let num1      = 0;
        let num2      = 0;
        let num3      = 0;
        let bas       = 0;
        let expoente  = 0;
        let resultado = 0;
        let i         = 0;
        let msg       = "";
        let d         = 0;
        //Criação de funções
        function coletar() {
            num1 = prompt("Informe um número: ");
            num2 = prompt("Informe outro número: ");
        }//Fim do coletar 
        coletar();
        function soma() {

        //Chamando metodo coletar
        
        resultado = parseFloat(num1) + parseFloat(num2);
        return resultado;
        }
        //Fim da função soma

        //Declaração de variáveis
        function subtrair() {

        //Chamando metodo coletar
        
        resultado = parseFloat(num1) - parseFloat(num2);
        return resultado;
        }
        //Fim da função soma

        function multiplicar() {

        //Chamando metodo coletar
        
        resultado = parseFloat(num1) * parseFloat(num2);
        return resultado;
        }
        //Fim da função multiplicar

        function divisao() {

            //Chamando metodo coletar
            
            if(num2 <= 0){
                resultado = "Impossível dividir por zero!";
            }else{
                resultado = parseFloat(num1) / parseFloat(num2);
            }
            return resultado;
        }//Fim função divisao

        function tabuada() {
            console.log("Tabuada do " + num1 + ": \n")
            for(i=0;i<=10;i++){
                msg += num1 + " * " + i + " = " + (parseFloat(num1) * parseFloat(i)) + "\n";
            }
            console.log(msg + "\n");
            msg = "";
            console.log("Tabuada do " + num2 + ": \n");
            for(i=0;i<=10;i++){
                msg += num2 + " * " + i + " = " + (parseFloat(num2) * parseFloat(i)) + "\n";
            }
            console.log(msg + "\n");
            return resultado;
        }// Fim do metodo
        function raiz(){
            if (num1 <= 0){
                console.log("Impossível calcular raiz de numero negativo!");
            }else{
                resultado = Math.sqrt(num1);
                console.log("a raiz do numero " + num1 + " é: " + resultado);
            }
            if (num2 <= 0){
                console.log("Impossível calcular raiz de numero negativo!");
            }else{
                resultado = Math.sqrt(num1);
                console.log("a raiz do numero " + num2 + " é: " + resultado);
            }
        function potencia(){
        resultado = Math.pow(num1, num2);
        return resultado;
        }//fim do metodo
        function bhaskara(){
            

        }
        //mostrar o dado
        console.log("O resultado da soma é: " + soma());
        console.log("O resultado da subtrair é: " + subtrair());
        console.log("O resultado da multiplicar é: " + multiplicar());
        console.log("O resultado da divisao é: " + divisao());
        tabuada();
        raiz();
        console.log("O resultado da potencia é: " + potencia());