# Lab 01: Introducere în managementul proiectelor software

### Prof.: Lect.dr. Andrei Rusu

## Obiectiv:
Managementul codului proiectului software folosind siteme distribuite și centralizate:

* git, mercurial
* SVN, Perforce

Utilizarea instrucțiunilor __git__:

* init
* add
* commit
* log
* branch
* checkout
* push
* pull
* fetch
* merge
* ...

## Conținut

Utilizarea unui sistem de versionare a codului are 2 aspecte:

  - utilizarea locală
  - utilizarea unui server extern

În general este suficient în scopuri personale să utilizăm doar  clientul local, dar pentru a colabora cu persoane terțe, sau pentru a utiliza __git__ din diferite locații locale este util să folosim un server __git__. Exemple de servere __git__ utilizate pe larg sunt:
  
  * github
  * gitlab
  * bitbucket

### Acțiuni pentru a lucra cu clientul local

1. Instalați local un client __git__:
   - Cautam pe __google__ (sau alt sistem de căutare) __git download__ și urmăm instrucțiunile de instalare.
   - Dacă nu ne-am descurcat cu punctul anterior, accesăm https://git-scm.com/downloads și urmăm instrucțiunile de instalare în dependență de sistemul de operare utilizat.

2. Urmați orice tutorial disponibil pe net (se găsește ușor prin căutare). Se folosesc instrucțiunile __git__:
   - __git config__ - configurarea cu nume și email
   - __git init__ - inițializarea unui repozitoriu
   - __git status__ - verificarea statutului repozitoriului
   - __git add__ - adăugarea fișierelor în lista obiectelor indexate (urmărite / track-uite) de __git__
   - __git commit__ - înregistrarea stării curente a proiectului
   - __git log__ - urmărirea înregistrărilor efectuate
   - __git branch__ - crearea ramurilor/variantelor de dezvoltare a proiectului
   - __git checkout__ - selectarea ramurii/variantei active
a proiectului

### Lucrul cu serverul __git__

3. Crearea unui cont pe oricare platformă online (este de dorit să admită posibilitatea creării repozitoriilor private): __github__, __gitlab__, __bitbucket__, etc. 
4. Crearea unui repozitoriu remote (pe platforma online).
5. Încărcarea repozitoriului local pe platforma remote.

   - __git push__

6. Descărcarea locală unui repozitoriu remote

   - __git pull__
   - __git fetch__

### Pentru evaluarea activității la lab 00:

1. Creați un repozitoriu local.
2. Legați repozitoriul local de repozitoriul remote. 
3. Creați un fișier cu extensia .txt în ramura __master__: readme.txt Efectuați 3 modificări în el și înregistrațile prin commit-uri.
4. Creați o ramură nouă: __test__.
5. Creați un fișier nou __asta.txt__ în ramura __test__ și scrieți în el ceva.
6. Mutați-vă în ramura __master__ și creați un fișier nou: __goto.txt__ și scrieți un rând în el. 
7. Uniți ramura __test__ la ramura __master__. 
8. Încărcați totul în repozitoriul remote. 
9. Încărcați link-ul la repozitoriul remote la rezultate. 
