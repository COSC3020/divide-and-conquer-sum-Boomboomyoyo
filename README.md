[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11946361&assignment_repo_type=AssignmentRepo)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

When analyzing the Divide and Conquer Sum algorithm, I started by breaking down 
the algorithm into steps (as I referenced the lefcture example with Mergesort)

1. If array has, 0, or 1 elements, we can process the array rather easily, returning either 0 or the first element, respectively. This is just one operation, the base case.
2. If the array has 2 values, then we return their sum. This is also one operation.
3. Split the array into 3 parts. This is a fixed number of operations, so it can also be discounted asymptotically.
4. Sum each sub-array recursively. Here we finally get the first and only set of operations that scales with the size of input. Each sub-array will be (n/3) operations, as it contains a third of the input, which each need to be added together. Therefore, at this step, there are 3T(n/3) operations.
5. The final step is to sum the results together, which should be a constant number of recursions per layer of recursion.

This leads to the time complexity of the algorithm looking like this:
T(n)=3T(n/3)
    =3(3T(n/3/3))
    =9T(n/9)
    =3^iT(n/(3^i))
Where i = logbase3(n)
    =nT(1)
    =n(1)
    =n which is an element of BigTheta(n)
