# Treinamento sobre git do terraLab

## Questões teóricas

### 1 - O que é git?
Git é uma ferramenta que permite que todas as mudanças realizadas sobre o código fonte de um software sejam rastreáveis e armazenadas sem sobreescrever uma às outras. Desta forma, é possível recuperar versões do código e verificar os autores e motivações das mudanças realizadas. Podemos pensar no git como se fosse uma linha do tempo, em que cada alteração implica em um novo ponto da história.

### 2 - O que é staging área?
Local temporário onde são armazenadas todas as alterações que serão adicionadas no próximo commit. Quando executamos o comando `git add <arquivos>` significa que estamos movendo `<arquivos>` do *working directory* para o *staging área*.

### 3 - O que é o working directory?
Todos os arquivos que estão sendo trabalhados no momento.

### 4 - O que é um commit?
É um instantâneo (do inglês, snapshot) das modificações adicionadas na staging area, persistindo-as no repositório local. Quando executamos o comando `git commit -m "menssagem do commit"` estamos movendo todos os arquivos do *staging área* para o *local repository*. Se imaginarmos o git como sendo uma linha do tempo, podemos pensar no commit como sendo um novo registro ponto da história.

### 5 - O que é uma branch?
É uma ramificação do código, apenas um ponteiro que aponta para um commit e tudo anterior a esse commit. O branch padrão é o master.

### 6 - O que é o head no Git?
É um ponteiro que aponta para algum commit ou alguma branch.

### 7 - O que é um merge?
Ação de juntar os commits de dois branches.

### 8 - Explique os 4 estados de um arquivo no Git.
* untracked – Arquivos que não estavam no último commit, ou seja, arquivos que ainda não foram rastreados.
* unmodified – Arquivos não modificados desde o último commit;
* modified – Arquivos modificados desde o último commit; 
* staged – Arquivos preparados para comitar.
>Uma extensão interessante no VsCode é o *gitLens*, ela nos informa várias questões sobre o git, inclusive a marcação em qual estado se encontra nossos arquivos.

### 9 - Explique o comando git init.
Inicia a ferramenta do git criando uma pasta chamada `.git` na raiz do projeto.

### 10 - Explique o comando git add.
Quando executamos o comando `git add <arquivos>` significa que estamos movendo `<arquivos>` do *working directory* para o *staging área*.

### 11 - Explique o comando git status.
Mostra se os arquivos estão no estado *untracked*, *modified* ou *staged*

### 12 - Explique o comando git commit.
Quando executamos o comando `git commit -m "menssagem do commit"` estamos movendo todos os arquivos do *staging área* para o *local repository*. Se imaginarmos o git como sendo uma linha do tempo, podemos pensar no commit como sendo um novo registro ponto da história.

### 13 - Explique o comando git log.
Este comando nos permite visualizar o histórico de commits ao longo do projeto, este histórico consta o "id", o autor, a mensagem e a data do commit.

### 14 - Explique o comando git checkout -b.
O comando `git checkout <branch>` move o ponteiro *Head* para o novo ramo chamado `<branch>`, mas neste caso precisamos que o ramo `<branch>` ja esteja criado. Adicionando a flag **-b** a `<branch>` é criada e o ponteiro é movido.

### 15 - Explique o comando git reset e suas três opções.
O comando `git reset <hash>` retorna para o commit de `id = <hash>`. Ele possui 3 flags importantes: 

A opção `git reset --soft <hash>`, move o HEAD para o commit indicado, mas mantém o staging e o working directory inalterados. 

A opção `git reset --mixed <hash>`, move o HEAD para o commit indicado, altera o staging e mantém o working directory. 

A opção `git reset --hard <hash>` faz com que o HEAD aponte para algum commit anterior, mas também altera a staging area e o working directory para o estado do commit indicado, ou seja, todas as alterações realizadas após o commit ao qual retornamos serão perdidas. Isso não é recomendável se as alterações já tiverem sido enviadas para o repositório remoto. Nesse caso devemos utilizar o git revert.

Outra forma de utilizar o comando git reset, é indicando quantos commits queremos retornar o HEAD, fazemos isso com o comando git reset `HEAD~n`. O parâmetro `HEAD~n`, nos indica que queremos posicionar o HEAD para n commits atrás. Por exemplo, para retornar para o commit anterior usamos HEAD~1.

### 16 - Explique o comando git revert.
`git revert <hash>` cria um novo commit com as alterações do commit com a `hash` indicada.

### 17 - Explique o comando git clone.
O comando `git clone <ssh | https >` cria uma copia do repositório com a `ssh | https` em questão para o diretorio atual.

### 18 - Explique o comando git push.
O comando `git push` é utilizado para enviar os arquivos que ja foram "commitados" em nosso repositório local para o repósitorio remoto.

### 19 - Explique o comando git pull.
O comando `git pull` é utilizado para "pegar" a versão atual do repositório remoto para o nosso repositório local.

### 20 - Como ignorar o versionamento de arquivos no Git?
Crie um arquivo chamado `.gitignore` na raiz do projeto e adicione o nome dos arquivos que não devem ser salvos. Um bom exemplo de uso é a pasta `node_modules` quando estamos trabalhando com o **NodeJs**, ela é uma pasta com vários arquivos de dependências e então ela acaba ocupando muito espaço, fazendo com que o `push` e o `pull` demorem a ser executados. Então é comum ignora-la em nossos commits afim de agilizar o processo.

### 21 - No terralab utilizamos as branches master ou main, develop e staging. Explique o objetivo de cada uma.
A branch master/main é onde o código está em perfeitas condições (ou pelo menos é o que se espera), ou seja, não temos nenhum erro/bug ocorrendo nos arquivos dessa branch.

A branch develop é onde nos desenvolvedores trabalhamos, é nela onde ocorre a implementação de fato.

A branch staging é quando desenvolvemos algo novo na aplicação e precisamos de uma validação afim de atestar se não irá quebrar ou implantar algum bug na aplicação. Se tudo estiver certo, essa alteração será enviada para a branch master/main.

## Questões teóricas
### 3 - Crie nesse repositório um arquivo que vai se chamar `calculadora.js`, abra esse arquivo em seu editor de códigos favoritos e adicione o seguinte código:

~~~javascript
const args = process.argv.slice(2);
console.log(parseInt(args[0]) + parseInt(args[1]));
~~~

### Descubra o que esse código faz através de pesquisas na internet, também descubra como executar um código em javascript e dado que o nome do nosso arquivo é calculadora.js e você entendeu o que o código faz, escreva abaixo como executar esse código em seu terminal:

Resposta: A propriedade `process.argv` é uma interface de programação de aplicativo embutida do módulo de processo que é usada para obter os argumentos passados para o processo node.js quando executado na linha de comando. O primeiro elemento do array `process.argv[0]` nos fornece o diretório do interpretador do javascript (que neste caso é o nodejs). O segundo elemento do array `process.argv[1]` é o diretório do código que esta sendo executado. Os demais parâmetros passados corresponderam aos próximos elementos elementos do array, como por exemplo, se executarmos `node calculadora.js 10 5`. O método `slice` "fatia" os 2 primeiros elementos do array, ou seja, `args[0]='10'` e `args[0]='5'`, como está sendo utilizado o `parseInt` as strings de `args` são convertidas para inteiro e com isso temos o resultado 15 em nosso console. Já se executarmos `node calculadora.js a b` não é possivel converter `a` e `b` para inteiro, logo a saída será `NaN`.

### 4 - Agora que você já tem um código feito e a resposta aqui, você precisa subir isso para seu repositório. Sem usar git add . descubra como adicionar apenas um arquivo ao seu histórico de commit e adicione calculadora.js a ele. Que tipo de commit esse código deve ter de acordo ao conventional commit. Que tipo de commit o seu README.md deve contar de acordo ao conventional commit. Por fim, faça um push desse commit.

- **chore:**: Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas.
- **feat:**: São adições de novas funcionalidades ou de quaisquer outras novas implantações ao código.
- **fix:**: Essencialmente definem o tratamento de correções de bugs.
- **refactor:**: Utilizado em quaisquer mudanças que sejam executados no código, porém não alterem a funcionalidade final da tarefa impactada.
- **docs:**: Inclusão ou alteração somente de arquivos de documentação.
- **perf:**: Uma alteração de código que melhora o desempenho.
- **style:**: Alterações referentes a formatações na apresentação do código que não afetam o significado do código, como por exemplo: espaço em branco, formatação, ponto e vírgula ausente etc.
- **test:**: Adicionando testes ausentes ou corrigindo testes existentes nos processos de testes automatizados (TDD).
- **build:**: Alterações que afetam o sistema de construção ou dependências externas (escopos de exemplo: gulp, broccoli, npm).
- **ci:**: Mudanças em nossos arquivos e scripts de configuração de CI (exemplo de escopos: Travis, Circle, BrowserStack, SauceLabs).
- **env:**: Utilizado na descrição de modificações ou adições em arquivos de configuração em processos e métodos de integração contínua (CI), como parâmetros em arquivos de configuração de containers.

### 5 - Copie e cole o código abaixo em sua calculadora.js:

~~~javascript
const soma = () => {
    console.log(parseInt(args[0]) + parseInt(args[1]));
};

const args = process.argv.slice(2);

soma();
~~~
### Descubra o que essa mudança representa em relação ao conventional commit e faça o devido commit dessa mudança. 

Com esta alteração podemos perceber 2 coisas bem interessantes no javascript. A primeira é a declaração de uma `arrow function anonima`. Anonima pois ela não tem nome, e `arrow function` pois é uma sintaxe abreviada de se declarar uma função no javascript. O segundo ponto é a questão do `hosting`(elevação), isto ocorre pois dentro da função que foi declarada, ela utiliza uma variável que só "existe" depois da declaração da função, porem o javascript utiliza do efeito `hosting` fazendo com que a váriavel `args` seja elevada para antes da declaração da função.

### 6 - João entrou em seu repositório e o deixou da seguinte maneira:

~~~javascript
const soma = () => {
    console.log(parseInt(args[0]) + parseInt(args[1]));
};

const sub = () => {
    console.log(parseInt(args[0]) - parseInt(args[1]));  
}

const args = process.argv.slice(2);

switch (args[0]) {
    case 'soma':
        soma();
    break;

    case 'sub':
        sub();
    break;

    default:
        console.log('does not support', arg[0]);
}
~~~

### Depois disso, realizou um git add . e um commit com a mensagem: "Feature: added subtraction" faça como ele e descubra como executar o seu novo código. Nesse código, temos um pequeno erro, encontre-o e corrija para que a soma e divisão funcionem. Por fim, commit sua mudança. 

No código possuí 3 linhas erradas:

- Na função `soma` foi declarada da seguinte forma: `console.log(parseInt(args[0]) + parseInt(args[1])); ` e deveria ser `console.log(parseInt(args[1]) + parseInt(args[2]));`. O mesmo acontece para a função `sub`.
- Na linha `console.log('does not support', arg[0])`; deveria ser `console.log('does not support', args[0]);`

### 7 - Por causa de joãozinho, você foi obrigado a fazer correções na sua branch principal! O produto foi pro saco e a empresa perdeu muito dinheiro porque não conseguiu fazer as suas contas, graças a isso o seu chefe ficou bem bravo e mandou você dar um jeito disso nunca acontecer. Aprenda a criar uma branch, e desenvolva a feature de divisão nessa branch. 

- `git checkout -b staging` : criando e movendo o HEAD para a branch `staging` 
- `git branch -M staging` : preparando o push para a branch staging
- `git push`: enviando alterações para o repositório remoto

### 8 - Agora que a sua divisão está funcionando e você garantiu que não afetou as outras funções, você está apto a fazer um merge request Em seu gitlab, descubra como realizá-lo de acordo com o gitflow.

Nesta fase precisamos aceitar o `pull request` no github de nosso projeto, após a revisão basta adicionar o merge e a nova alteração será salva na main branch.
