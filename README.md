# Character Decoding
Uma aplicação simples que transforma _strings_ para uma codificação de texto diferente, ex. 'latin1', 'utf8', etc.
A aplicação foi desenvolvida em node e requer a instalação deste para funcionar.

## Input
Deve-se informar por parâmetro o encoding de entrada e, opcionalmente, o encoding de saída. Se não especificado, o encoding de saída padrão será 'utf8'. 

A entrada padrão (aka _stdin_) fornece a string à aplicação utilizando \`|\`.  _ex_.

> echo "string" | node decoding.js utf8 latin1

> cat input_file | node decoding.js latin1 utf8

## Output
A saída é a saída padrão (aka _stdout_). Pode-se enviar a saída para outra aplicação também utilizando \`|\` ou diretamente para um arquivo. _ex._ 

> cat input_file | node decoding.js latin1 utf8 > output_file

> cat input_file | node decoding.js latin1 utf8 | other_bash_software

## Uso implícito do node
Podemos chamar o node implicitamente transformando o arquivo em um executável da forma:

> chmod +x decoding.js

Indicamos que deve ser executado com o node pela instrução `#!/bin/node` na primeira linha do arquivo. Assim a execução do node torna-se implícita. _ex._

> cat input_file | ./decoding.js latin1 utf8 > output_file

## Invocando o programa de qualquer lugar do sistema
Invocamos o node implicitamente, mas ainda precisamos informar o diretório que a nossa aplicação está. Para acessarmos essa aplicação como se fosse uma aplicação instalada por pacotes, como a chamada do node, criaremos um link simbólico para a aplicação e a adicionaremos em `/bin/`. 

Estando no diretório de decondig.js, a seguinte instrução pode ser copiada e colada em seu terminal sem alterações.

> sudo ln -s $(pwd)/decoding.js /bin/decoding

Insira a senha do usuário e então poderá chamar a aplicação `decoding` em qualquer diretório do seu sistema. _ex_.

> cat input_file | decoding latin1 utf8 > output_file

## Arquivo de instalação
O script install.sh torna o arquivo `decondig.js` executável e cria o link simbólico automaticamente.
Execute o script como super usuário e a instalação estará completa.
