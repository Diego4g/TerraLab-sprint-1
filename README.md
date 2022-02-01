# Treinamento sobre git do terraLab

## Questões teóricas

### O que é git?
Git é uma ferramenta que permite que todas as mudanças realizadas sobre o código fonte de um software sejam rastreáveis e armazenadas sem sobreescrever uma às outras. Desta forma, é possível recuperar versões do código e verificar os autores e motivações das mudanças realizadas. Podemos pensar no git como se fosse uma linha do tempo, em que cada alteração implica em um novo ponto da história.

### O que é staging área?
Local temporário onde são armazenadas todas as alterações que serão adicionadas no próximo commit. Quando executamos o comando `git add <arquivos>` significa que estamos movendo `<arquivos>` do *working directory* para o *staging área*.

### O que é o working directory?
Todos os arquivos que estão sendo trabalhados no momento.

### O que é um commit?
É um instantâneo (do inglês, snapshot) das modificações adicionadas na staging area, persistindo-as no repositório local. Quando executamos o comando `git commit -m "menssagem do commit"` estamos movendo todos os arquivos do *staging área* para o *local repository*. Se imaginarmos o git como sendo uma linha do tempo, podemos pensar no commit como sendo um novo registro ponto da história.

### O que é uma branch?
É uma ramificação do código, apenas um ponteiro que aponta para um commit e tudo anterior a esse commit. O branch padrão é o master.

### O que é o head no Git?
É um ponteiro que aponta para algum commit ou alguma branch.

### O que é um merge?
Ação de juntar os commits de dois branches.

### Explique os 4 estados de um arquivo no Git.
* untracked – Arquivos que não estavam no último commit, ou seja, arquivos que ainda não foram rastreados.
* unmodified – Arquivos não modificados desde o último commit;
* modified – Arquivos modificados desde o último commit; 
* staged – Arquivos preparados para comitar.
>Uma extensão interessante no VsCode é o *gitLens*, ela nos em várias questões sobre o git, inclusive a marcação em qual estado se encontra nossos arquivos.

### Explique o comando git init.
Inicia a ferramenta do git criando uma pasta chamada `.git` na raiz do projeto.

### Explique o comando git add.
Quando executamos o comando `git add <arquivos>` significa que estamos movendo `<arquivos>` do *working directory* para o *staging área*.

### Explique o comando git status.
Mostra se os arquivos estão no estado *untracked*, *modified* ou *staged*

### Explique o comando git commit.
Quando executamos o comando `git commit -m "menssagem do commit"` estamos movendo todos os arquivos do *staging área* para o *local repository*. Se imaginarmos o git como sendo uma linha do tempo, podemos pensar no commit como sendo um novo registro ponto da história.

### Explique o comando git log.
Este comando nos permite visualizar o histórico de commits ao longo do projeto, este histórico consta o "id", o autor, a mensagem e a data do commit.

### Explique o comando git checkout -b.
O comando `git checkout <branch>` move o ponteiro *Head* para o novo ramo chamado `<branch>`, mas neste caso precisamos que o ramo `<branch>` ja esteja criado. Adicionando a flag **-b** a `<branch>` é criada e o ponteiro é movido.

### Explique o comando git reset e suas três opções.

