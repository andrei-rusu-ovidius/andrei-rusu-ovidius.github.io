# Laboratory 05-06

---

## Mathematical and Compuational Logic

### Speciality: 

* Informatică, seria 1, anul 1; 
* Computer Science, anul 1.

### Teacher:

* lect. dr. Andrei Rusu

## Objectives:
* To establish the logical consequences using resolutions' method.
* To develop an algorithm and implement it in a program for determination of logical consewuences  using method of resolutions.

## Conditions for solving the laboratory tasks

1. Every student works with a formula denoted by `F` as with an example. 
2. If formula `F` is a tautology then must be considered as formula its conjunction with the formula `((A -> B) v (B ~ C) v (C -> D))`. 

2. If the formula is a contradiction then there must be considered its disjunction with the formula `((A -> B) v (B ~ C) v (C -> D))`.

2. If formula `F` contains less than 4 distinct variables then should be considered its conjunction with the formula `((A -> B) v (B ~ C) v (C -> D))`.

3. O predare în prealabil se consideră şi predarea folosind serviciul de e-mail sau oricare altă posibilitate electronică de predare, dar predarea lucrării propriu-zisă se consideră la ora de laborator din săptămâna respectivă. Întârzierea în predarea lucrării se penalizează cu 1 punct pentru fiecare 2 saptamâni.
4. Every student work at the formula from the **[list](./LC_Lab_01_Lista_formule.html)**  in accordance with the variant given by its number in the list of students:
   * [Computer Science](./cs1.html),
   * [Informatică](./info1s1.html). 
5. Any programming language can be used, for example, **C, C++, Java, Prolog, Lisp, Python, PHP,** etc.
6. Any program should state clearly:
   - initial conditions,
   - which is the result,
   - important intermediary results on the way to the main results. 

## Tasks:

a. Implement an algorithm based on the principle of resolutions to determine weather a set of clauses (i.e. elementary disjunctions) is consistent or not. Show the results of main intermediate steps of the implemented algorithm with the corresponding comments. 
b. Apply the above implemented algorithm to determine if the formula `G = (A -> (B v C))` is a logical consequence of the formula `F`. 
c. Verify the obtained result using the thuth table method.


---

[Students](./) --> [LMC](./index-LC-info1.html) --> [Lab. 05-06]()

---

(c) Andrei RUSU, 2004 - 2019
