# Lucrarea de laborator 05-06

---

## Logica matematică și computațională

### Specializarea: 

* Informatică, seria 1, anul 1; 
* Computer Science, anul 1.

### Profesor:

* lect. dr. Andrei Rusu

## Obiective:
* Stabilirea consecințelor logice folosind metoda rezoluțiilor.
* Elaborarea și implementarea programului pentru stabilirea consecințelor logice folosind metoda rezoluțiilor.

## Condiții de rezolvare și predare a lucrării

1. Fiecare student lucrează, în calitate de exemplu, la o formulă notată cu `F` (formula e cea de la primul laborator).
2. Dacă formula `F` este o tautologie, atunci se va considera conjuncția ei cu formula `((A -> B) v (B ~ C) v (C -> D))`. 

2. Dacă formula este o contradicție, atunci se va considera disjuncția ei cu formula `((A -> B) v (B ~ C) v (C -> D))`.

2. Dacă formula `F` conține mai puțin de 4 variabile distincte, atunci se va considera conjuncția ei cu formula `((A -> B) v (B ~ C) v (C -> D))`.

3. O predare în prealabil se consideră şi predarea folosind serviciul de e-mail sau oricare altă posibilitate electronică de predare, dar predarea lucrării propriu-zisă se consideră la ora de laborator din săptămâna respectivă. Întârzierea în predarea lucrării se penalizează cu 1 punct pentru fiecare 2 saptamâni.
4. Fiecare student lucrează asupra formulei din **[listă](./LC_Lab_01_Lista_formule.html)**  în concordanță cu varianta dată de numărul său:
   * [Computer Science](./cs1.html),
   * [Informatică](./info1s1.html). 
5. În calitate de limbaj de programare puteţi folosi: C, C++, Java, Prolog, Lisp, Python, PHP, etc.
6. Orice program trebuie să afișeze în mod clar:
   - care au fost condițiile inițiale,
   - care este rezultatul,
   - rezultatele intermediare mai importante care se obțin în drumul către rezultatul final. 

## Sarcinile lucrării:

a. Să se implementeze un algoritm bazat pe principiul metodei rezoluțiilor pentru a determina dacă un set de clauze (disjuncții elementare) este consistentă sau nu. Să se afișeze etapele de rulare a algoritmului cu comentariile respective.
b. Să se aplice algoritmul implementat la punctul a) pentru a determia dacă formula `G = (A -> (B v C))` este consecință logică a formulei `F`. 
c. Verificați rezultatul folosind metoda tabelului de adevăr.


---

[Studenților](./) --> [LMC](./index-LC-info1.html) --> [Lab. 05-06]()

---

(c) Andrei RUSU, 2004 - 2019
