const questions = [
  // Time Complexity
  {cat:"Time Complexity",q:"Time complexity of Merge Sort?",a:["O(n^2)","O(n log n)","O(n)","O(log n)"],c:"O(n log n)"},
  {cat:"Time Complexity",q:"Worst-case time complexity of QuickSort?",a:["O(n^2)","O(n log n)","O(n)","O(log n)"],c:"O(n^2)"},
  {cat:"Time Complexity",q:"Binary Search time complexity?",a:["O(n)","O(log n)","O(1)","O(n log n)"],c:"O(log n)"},
  {cat:"Time Complexity",q:"Linear Search worst case?",a:["O(n)","O(1)","O(log n)","O(n log n)"],c:"O(n)"},
  {cat:"Time Complexity",q:"Best case of Bubble Sort?",a:["O(n)","O(n^2)","O(log n)","O(n log n)"],c:"O(n)"},
  {cat:"Time Complexity",q:"What is the time complexity of finding an element in a linked list?",a:["O(n)","O(n^2)","O(n log n)","O(log n)"],c:"O(n)"},
  {cat:"Time Complexity",q:"What is the time complexity of stack/queue operations (push/pop/enqueue/dequeue)?",a:["O(n)","O(n^2)","O(1)","O(n log n)"],c:"O(1)"},
  {cat:"Time Complexity",q:"What is the time complexity of hash map operations (average and worst)?",a:["O(n),O(n log n)","O(n log n),O(n)","O(log n),O(log n)","O(1),O(n)"],c:"O(1),O(n)"},
  {cat:"Time Complexity",q:"Linear Search best case?",a:["O(n)","O(1)","O(log n)","O(n log n)"],c:"O(1)"},
  {cat:"Time Complexity",q:"What is the time complexity of inserting in a sorted array?",a:["O(n log n)","O(n)","O(log n)","O(1)"],c:"O(n)"},
  {cat:"Time Complexity",q:"What is the time complexity of inserting/removing an element from a linked list (beginning)?",a:["O(1)","O(n)","O(n log n)","O(log n)"],c:"O(1)"},
  {cat:"Time Complexity",q:"What is the time complexity of accessing an element in an array?",a:["O(n^2)","O(1)","O(n)","O(log n)"],c:"O(1)"},
  // Sorting
  {cat:"Sorting Algorithms",q:"Merge Sort uses which technique?",a:["Greedy","Divide & Conquer","DP","Backtracking"],c:"Divide & Conquer"},
  {cat:"Sorting Algorithms",q:"What is the worst-case time complexity of Quick Sort?",a:["O(n log n)","O(n²)","O(n)","O(log n)"],c:"O(n²)"},
  {cat:"Sorting Algorithms",q:"Which sorting algorithm is the most efficient for nearly sorted data?",a:["Bubble Sort","Insertion Sort","Selection Sort","Heap Sort"],c:"Insertion Sort"},
  {cat:"Sorting Algorithms",q:"Which sorting algorithm is not based on comparisons?",a:["Merge Sort","Counting Sort","Quick Sort","Heap Sort"],c:"Counting Sort"},
  {cat:"Sorting Algorithms",q:"What is the space complexity of Merge Sort?",a:["O(1)","O(log n)","O(n)","O(n²)"],c:"O(n)"},
  {cat:"Sorting Algorithms",q:"Which algorithm has the best average-case performance?",a:["Quick Sort","Bubble Sort","Insertion Sort","Selection Sort"],c:"Quick Sort"},
  {cat:"Sorting Algorithms",q:"Which sorting algorithm can be implemented using recursion or iteration?",a:["Merge Sort","Selection Sort","Counting Sort","Bucket Sort"],c:"Merge Sort"},
  {cat:"Sorting Algorithms",q:"Heap Sort is based on which data structure?",a:["Stack","Queue","Heap","Tree"],c:"Heap"},
  {cat:"Sorting Algorithms",q:"Which sorting algorithm is stable?",a:["Quick Sort","Heap Sort","Merge Sort","Selection Sort"],c:"Merge Sort"},
  {cat:"Sorting Algorithms",q:"Which algorithm performs the least number of swaps?",a:["Selection Sort","Bubble Sort","Quick Sort","Insertion Sort"],c:"Selection Sort"},
  {cat:"Sorting Algorithms",q:"What is the best-case time complexity of Insertion Sort?",a:["O(n)","O(n log n)","O(n²)","O(1)"],c:"O(n)"},
  {cat:"Sorting Algorithms",q:"Which sorting algorithm is most suitable for sorting linked lists?",a:["Merge Sort","Quick Sort","Heap Sort","Counting Sort"],c:"Merge Sort"},
  {cat:"Sorting Algorithms",q:"In Quick Sort, the partitioning element is called?",a:["Pivot","Root","Key","Divider"],c:"Pivot"},
  {cat:"Sorting Algorithms",q:"Which sorting algorithm works by repeatedly finding the minimum element?",a:["Bubble Sort","Selection Sort","Insertion Sort","Merge Sort"],c:"Selection Sort"},
  {cat:"Sorting Algorithms",q:"Counting Sort works efficiently when the range of input values is?",a:["Large","Very large","Small","Random"],c:"Small"},
  // Searching
  {cat:"Searching Algorithms",q:"Binary Search works on?",a:["Sorted arrays","Unsorted arrays","Trees","Graphs"],c:"Sorted arrays"},
  {cat:"Searching Algorithms",q:"What is the time complexity of Linear Search in the worst case?",a:["O(1)","O(log n)","O(n)","O(n log n)"],c:"O(n)"},
  {cat:"Searching Algorithms",q:"What is the time complexity of Binary Search in the best case?",a:["O(1)","O(log n)","O(n)","O(n²)"],c:"O(1)"},
  {cat:"Searching Algorithms",q:"Which of the following cannot be used with Binary Search?",a:["Sorted Array","Linked List","Binary Search Tree","Ordered List"],c:"Linked List"},
  {cat:"Searching Algorithms",q:"In Binary Search, if the element is not found, how many times is the array divided?",a:["log₂n","n","n/2","n²"],c:"log₂n"},
  {cat:"Searching Algorithms",q:"What is the advantage of Binary Search over Linear Search?",a:["Less memory usage","Faster for sorted data","Can be used for unsorted data","Simpler to implement"],c:"Faster for sorted data"},
  {cat:"Searching Algorithms",q:"Which search algorithm checks every element until the target is found?",a:["Binary Search","Interpolation Search","Linear Search","Jump Search"],c:"Linear Search"},
  {cat:"Searching Algorithms",q:"Which searching algorithm works efficiently for uniformly distributed data?",a:["Binary Search","Interpolation Search","Exponential Search","Linear Search"],c:"Interpolation Search"},
  {cat:"Searching Algorithms",q:"Jump Search has a time complexity of?",a:["O(n)","O(log n)","O(√n)","O(n²)"],c:"O(√n)"},
  {cat:"Searching Algorithms",q:"Exponential Search is useful when?",a:["Array size is unknown","Array is small","Array is unsorted","Array has duplicates"],c:"Array size is unknown"},
  {cat:"Searching Algorithms",q:"Which of the following searching algorithms uses a divide-and-conquer approach?",a:["Linear Search","Binary Search","Jump Search","Hash Search"],c:"Binary Search"},
  {cat:"Searching Algorithms",q:"Hash-based searching has an average time complexity of?",a:["O(1)","O(log n)","O(n)","O(n²)"],c:"O(1)"},
  {cat:"Searching Algorithms",q:"What is the space complexity of Binary Search (iterative)?",a:["O(n)","O(log n)","O(1)","O(n²)"],c:"O(1)"},
  {cat:"Searching Algorithms",q:"Which searching algorithm uses hashing to store data for quick access?",a:["Binary Search","Linear Search","Hash Search","Jump Search"],c:"Hash Search"},
  {cat:"Searching Algorithms",q:"In Interpolation Search, the position to be checked is determined using?",a:["Midpoint formula","Probing function","Interpolation formula","Hash function"],c:"Interpolation formula"},

  // Recursion
  {cat:"Recursion",q:"Recursion uses which data structure?",a:["Stack","Queue","Heap","Tree"],c:"Stack"},
  {cat:"Recursion",q:"What is the base condition in recursion?",a:["A condition that stops recursion","A condition that restarts recursion","A loop condition","None of these"],c:"A condition that stops recursion"},
  {cat:"Recursion",q:"Which of the following problems is best solved using recursion?",a:["Sorting an array","Finding factorial","Reversing an array","Matrix multiplication"],c:"Finding factorial"},
  {cat:"Recursion",q:"In recursion, if the base case is not defined, it leads to?",a:["Compilation error","Stack Overflow","Memory Leak","Segmentation Fault"],c:"Stack Overflow"},
  {cat:"Recursion",q:"Recursion can always be converted to?",a:["Iteration","Loop","Stack operations","Array operations"],c:"Iteration"},
  {cat:"Recursion",q:"Which function calls itself directly or indirectly?",a:["Recursive Function","Inline Function","Static Function","Friend Function"],c:"Recursive Function"},
  {cat:"Recursion",q:"Tail recursion is when the recursive call is?",a:["At the beginning","In the middle","At the end of function","Never used"],c:"At the end of function"},
  {cat:"Recursion",q:"Which algorithm is an example of recursion?",a:["Binary Search","Bubble Sort","Selection Sort","Counting Sort"],c:"Binary Search"},
  {cat:"Recursion",q:"Recursion is mostly used to solve problems that have?",a:["Sequential structure","Repetitive pattern","Hierarchical or Divide-and-Conquer structure","Constant structure"],c:"Hierarchical or Divide-and-Conquer structure"},
  {cat:"Recursion",q:"What happens in every recursive call?",a:["New memory is allocated in stack","Old memory is overwritten","No new memory used","Heap memory increases"],c:"New memory is allocated in stack"},
  {cat:"Recursion",q:"Which of the following is NOT a type of recursion?",a:["Direct","Indirect","Multiple","Iterative"],c:"Iterative"},
  {cat:"Recursion",q:"Fibonacci sequence using recursion has what time complexity?",a:["O(n)","O(log n)","O(2ⁿ)","O(n²)"],c:"O(2ⁿ)"},
  {cat:"Recursion",q:"What is the main drawback of recursion?",a:["Difficult to understand","Takes more memory and time","Less flexible","Needs loops"],c:"Takes more memory and time"},
  {cat:"Recursion",q:"Mutual recursion occurs when?",a:["A function calls itself","Two or more functions call each other","Recursion happens without base case","Recursion stops early"],c:"Two or more functions call each other"},
  {cat:"Recursion",q:"Which of the following is a benefit of recursion?",a:["Improves execution speed","Reduces code complexity","Consumes less memory","Eliminates function calls"],c:"Reduces code complexity"},
  // Graph
  {cat:"Graph Algorithms",q:"Dijkstra complexity (min-heap)?",a:["O(E log V)","O(V^2)","O(VE)","O(E+V)"],c:"O(E log V)"},
  {cat:"Graph Algorithms",q:"Which algorithm is used to detect a cycle in an undirected graph?",a:["Dijkstra","Prim’s","DFS","Kruskal"],c:"DFS"},
  {cat:"Graph Algorithms",q:"Which algorithm finds the shortest path in a weighted graph with no negative edges?",a:["Dijkstra","Bellman-Ford","Floyd-Warshall","Prim’s"],c:"Dijkstra"},
  {cat:"Graph Algorithms",q:"Which algorithm works even with negative edge weights?",a:["Dijkstra","Bellman-Ford","Prim’s","Kruskal"],c:"Bellman-Ford"},
  {cat:"Graph Algorithms",q:"Which algorithm finds the Minimum Spanning Tree (MST)?",a:["Kruskal","Bellman-Ford","Dijkstra","Floyd-Warshall"],c:"Kruskal"},
  {cat:"Graph Algorithms",q:"Prim’s Algorithm is based on which technique?",a:["Divide & Conquer","Greedy","Dynamic Programming","Backtracking"],c:"Greedy"},
  {cat:"Graph Algorithms",q:"Which algorithm can find the shortest paths between all pairs of vertices?",a:["Floyd-Warshall","Dijkstra","Kruskal","Prim’s"],c:"Floyd-Warshall"},
  {cat:"Graph Algorithms",q:"Kruskal’s Algorithm uses which data structure?",a:["Heap","Queue","Disjoint Set (Union-Find)","Stack"],c:"Disjoint Set (Union-Find)"},
  {cat:"Graph Algorithms",q:"Breadth-First Search (BFS) uses which data structure?",a:["Stack","Queue","Heap","Tree"],c:"Queue"},
  {cat:"Graph Algorithms",q:"Depth-First Search (DFS) uses which data structure?",a:["Queue","Stack","Heap","Graph"],c:"Stack"},
  {cat:"Graph Algorithms",q:"What is the time complexity of BFS on a graph?",a:["O(V+E)","O(V²)","O(E log V)","O(VE)"],c:"O(V+E)"},
  {cat:"Graph Algorithms",q:"Topological Sorting applies only to which type of graph?",a:["Directed Acyclic Graph","Undirected Graph","Weighted Graph","Complete Graph"],c:"Directed Acyclic Graph"},
  {cat:"Graph Algorithms",q:"Which algorithm is used to detect a cycle in a directed graph?",a:["DFS","BFS","Kruskal","Prim’s"],c:"DFS"},
  {cat:"Graph Algorithms",q:"Which algorithm helps to find the strongly connected components?",a:["Kosaraju","Prim’s","Kruskal","Dijkstra"],c:"Kosaraju"},
  {cat:"Graph Algorithms",q:"In an adjacency matrix representation, space complexity is?",a:["O(V+E)","O(V²)","O(E)","O(V log V)"],c:"O(V²)"},
  // Trees
  {cat:"Trees",q:"What is a leaf node in a tree?",a:["Node with two children","Node with no children","Root node","Internal node"],c:"Node with no children"},
  {cat:"Trees",q:"What is the maximum number of nodes in a binary tree of height h?",a:["2^h","2^(h+1) - 1","h^2","h+1"],c:"2^(h+1) - 1"},
  {cat:"Trees",q:"In a binary search tree (BST), the left child is always?",a:["Greater than root","Smaller than root","Equal to root","Random"],c:"Smaller than root"},
  {cat:"Trees",q:"Which tree traversal gives nodes in sorted order for a BST?",a:["Preorder","Postorder","Inorder","Level order"],c:"Inorder"},
  {cat:"Trees",q:"A full binary tree of height h has how many leaf nodes?",a:["2^h","h","2^(h+1)","h^2"],c:"2^h"},
  {cat:"Trees",q:"What is the time complexity of searching in a balanced BST?",a:["O(n)","O(log n)","O(1)","O(n log n)"],c:"O(log n)"},
  {cat:"Trees",q:"Which traversal is used to copy a binary tree?",a:["Inorder","Preorder","Postorder","Level order"],c:"Preorder"},
  {cat:"Trees",q:"In a binary tree, each node has at most?",a:["1 child","2 children","3 children","4 children"],c:"2 children"},
  {cat:"Trees",q:"Height of a tree is measured as?",a:["Number of nodes","Number of edges in longest path from root","Sum of all levels","Depth of root"],c:"Number of edges in longest path from root"},
  {cat:"Trees",q:"Which traversal is used for deleting a binary tree?",a:["Preorder","Inorder","Postorder","Level order"],c:"Postorder"},
  {cat:"Trees",q:"Level order traversal of a tree is done using?",a:["Stack","Queue","Recursion","Priority Queue"],c:"Queue"},
  {cat:"Trees",q:"What is a complete binary tree?",a:["Every level except possibly last is full and nodes are left-aligned","Every node has 2 children","All leaves are at same level","Only left subtree exists"],c:"Every level except possibly last is full and nodes are left-aligned"},
  {cat:"Trees",q:"What is the maximum number of nodes at level ‘l’ in a binary tree?",a:["l","2^(l-1)","2^l","2l"],c:"2^(l-1)"},
  {cat:"Trees",q:"Which tree has all its nodes either with 0 or 2 children?",a:["Full Binary Tree","Complete Binary Tree","Perfect Binary Tree","Balanced Binary Tree"],c:"Full Binary Tree"},
  {cat:"Trees",q:"In a balanced binary tree, the difference between heights of left and right subtrees is at most?",a:["1","2","3","4"],c:"1"},
  // DP
  {cat:"Dynamic Programming",q:"Dynamic Programming is mainly used to solve problems having?",a:["Greedy property","Overlapping subproblems and optimal substructure","Backtracking property","Random structure"],c:"Overlapping subproblems and optimal substructure"},
  {cat:"Dynamic Programming",q:"Which of the following is a classic example of DP?",a:["Binary Search","Fibonacci sequence","Quick Sort","DFS"],c:"Fibonacci sequence"},
  {cat:"Dynamic Programming",q:"In DP, overlapping subproblems are stored using?",a:["Stack","Queue","Memoization or Tabulation","Recursion only"],c:"Memoization or Tabulation"},
  {cat:"Dynamic Programming",q:"What is the time complexity of the DP solution for Fibonacci numbers?",a:["O(2ⁿ)","O(n)","O(log n)","O(n²)"],c:"O(n)"},
  {cat:"Dynamic Programming",q:"Which of the following is a bottom-up approach?",a:["Memoization","Recursion","Tabulation","Brute Force"],c:"Tabulation"},
  {cat:"Dynamic Programming",q:"The 0/1 Knapsack problem is solved efficiently using?",a:["Divide & Conquer","Greedy Algorithm","Dynamic Programming","Backtracking"],c:"Dynamic Programming"},
  {cat:"Dynamic Programming",q:"Which property is essential for a problem to be solved using DP?",a:["Backtracking property","Greedy choice property","Optimal substructure","Randomness"],c:"Optimal substructure"},
  {cat:"Dynamic Programming",q:"Which of the following approaches uses recursion with caching?",a:["Tabulation","Memoization","Greedy","Backtracking"],c:"Memoization"},
  {cat:"Dynamic Programming",q:"In DP, tabulation method uses which order of computation?",a:["Top-down","Bottom-up","Random","Mixed"],c:"Bottom-up"},
  {cat:"Dynamic Programming",q:"Which algorithm uses DP to find the shortest path in a graph?",a:["Kruskal","Bellman-Ford","Dijkstra","Prim"],c:"Bellman-Ford"},
  {cat:"Dynamic Programming",q:"Longest Common Subsequence (LCS) problem can be solved using?",a:["Greedy Algorithm","Dynamic Programming","Divide and Conquer","Backtracking"],c:"Dynamic Programming"},
  {cat:"Dynamic Programming",q:"Which of the following problems cannot be solved using DP?",a:["Fibonacci","Merge Sort","Knapsack","Matrix Chain Multiplication"],c:"Merge Sort"},
  {cat:"Dynamic Programming",q:"What is the space complexity of a standard DP table for LCS of strings with lengths m and n?",a:["O(m+n)","O(mn)","O(max(m,n))","O(1)"],c:"O(mn)"},
  {cat:"Dynamic Programming",q:"In memoization, results of subproblems are stored in?",a:["Stack","Table (usually array or map)","Queue","Heap"],c:"Table (usually array or map)"},
  {cat:"Dynamic Programming",q:"Matrix Chain Multiplication problem is solved using?",a:["Greedy Algorithm","Dynamic Programming","Recursion only","Divide & Conquer"],c:"Dynamic Programming"},
  // Stack Queue
  {cat:"Stack and Queue",q:"Stack follows which principle?",a:["FIFO","LIFO","FILO","LILO"],c:"LIFO"},
  {cat:"Stack and Queue",q:"Queue follows which principle?",a:["LIFO","FIFO","Random","FILO"],c:"FIFO"},
  {cat:"Stack and Queue",q:"Which data structure is used for function call management in recursion?",a:["Queue","Stack","Array","Heap"],c:"Stack"},
  {cat:"Stack and Queue",q:"Which of the following operations is not valid for a stack?",a:["Push","Pop","Peek","Enqueue"],c:"Enqueue"},
  {cat:"Stack and Queue",q:"Which data structure is used in Breadth-First Search (BFS)?",a:["Stack","Queue","Heap","Tree"],c:"Queue"},
  {cat:"Stack and Queue",q:"Which data structure is used in Depth-First Search (DFS)?",a:["Queue","Stack","Tree","Heap"],c:"Stack"},
  {cat:"Stack and Queue",q:"In a stack, which operation removes the top element?",a:["Pop","Push","Peek","Insert"],c:"Pop"},
  {cat:"Stack and Queue",q:"In a queue, which operation adds an element at the rear?",a:["Dequeue","Enqueue","Push","Pop"],c:"Enqueue"},
  {cat:"Stack and Queue",q:"In a circular queue, when front == rear + 1, the queue is?",a:["Empty","Full","Half","Invalid"],c:"Full"},
  {cat:"Stack and Queue",q:"Which of the following can be used to check for balanced parentheses?",a:["Queue","Stack","Array","HashMap"],c:"Stack"},
  {cat:"Stack and Queue",q:"The time complexity of push and pop operations in a stack is?",a:["O(n)","O(1)","O(log n)","O(n log n)"],c:"O(1)"},
  {cat:"Stack and Queue",q:"Which of these is a type of queue where insertion and deletion can happen at both ends?",a:["Circular Queue","Double-ended Queue (Deque)","Priority Queue","Simple Queue"],c:"Double-ended Queue (Deque)"},
  {cat:"Stack and Queue",q:"Which data structure is best suited for implementing undo operations?",a:["Queue","Stack","Tree","Array"],c:"Stack"},
  {cat:"Stack and Queue",q:"Which type of queue assigns priority to elements?",a:["Simple Queue","Circular Queue","Priority Queue","Double-ended Queue"],c:"Priority Queue"},
  {cat:"Stack and Queue",q:"If N elements are pushed and then popped from a stack, how many sequences are possible?",a:["N","N!","2^N","N^2"],c:"Catalan number related (not fixed count)"},
  //Greedy Algorthm
  {cat:"Greedy Algorithms",q:"Greedy algorithms are based on which principle?",a:["Divide and Conquer","Local optimum leads to global optimum","Dynamic Programming","Backtracking"],c:"Local optimum leads to global optimum"},
  {cat:"Greedy Algorithms",q:"Which of the following is a classic example of a greedy algorithm?",a:["Fibonacci sequence","Dijkstra’s Algorithm","Merge Sort","Bellman-Ford Algorithm"],c:"Dijkstra’s Algorithm"},
  {cat:"Greedy Algorithms",q:"Which problem is solved using Kruskal’s Algorithm?",a:["Shortest Path","Minimum Spanning Tree","Longest Path","Topological Sort"],c:"Minimum Spanning Tree"},
  {cat:"Greedy Algorithms",q:"Which algorithm is used for finding the Minimum Spanning Tree using greedy approach?",a:["Bellman-Ford","Floyd-Warshall","Prim’s Algorithm","A* Search"],c:"Prim’s Algorithm"},
  {cat:"Greedy Algorithms",q:"What is the time complexity of Kruskal’s Algorithm?",a:["O(V²)","O(E log E)","O(V log V)","O(E²)"],c:"O(E log E)"},
  {cat:"Greedy Algorithms",q:"Which of these is NOT a greedy algorithm?",a:["Fractional Knapsack","Huffman Coding","Dijkstra’s Algorithm","0/1 Knapsack"],c:"0/1 Knapsack"},
  {cat:"Greedy Algorithms",q:"Huffman Coding is used for?",a:["Encryption","Data Compression","Sorting","Searching"],c:"Data Compression"},
  {cat:"Greedy Algorithms",q:"In Fractional Knapsack problem, items are chosen based on?",a:["Weight","Value","Value/Weight ratio","Random order"],c:"Value/Weight ratio"},
  {cat:"Greedy Algorithms",q:"Which of the following is a limitation of greedy algorithms?",a:["Always finds the optimal solution","May not work for all problems","Takes more time","Requires recursion"],c:"May not work for all problems"},
  {cat:"Greedy Algorithms",q:"Activity Selection problem is solved using?",a:["Dynamic Programming","Greedy Algorithm","Backtracking","Divide and Conquer"],c:"Greedy Algorithm"},
  {cat:"Greedy Algorithms",q:"Which data structure is commonly used in Huffman Coding?",a:["Stack","Queue","Priority Queue (Min-Heap)","Array"],c:"Priority Queue (Min-Heap)"},
  {cat:"Greedy Algorithms",q:"In Dijkstra’s Algorithm, what is selected greedily at each step?",a:["Node with smallest degree","Node with maximum distance","Node with minimum distance","Random node"],c:"Node with minimum distance"},
  {cat:"Greedy Algorithms",q:"Which of the following is true about greedy algorithms?",a:["They always guarantee the global optimum","They make locally optimal choices","They use recursion heavily","They require dynamic programming"],c:"They make locally optimal choices"},
  {cat:"Greedy Algorithms",q:"The greedy approach is most suitable when the problem has?",a:["Overlapping subproblems","Optimal substructure and greedy choice property","Backtracking property","Divide and Conquer property"],c:"Optimal substructure and greedy choice property"},
  {cat:"Greedy Algorithms",q:"Which of the following uses a greedy strategy for job scheduling?",a:["Job Sequencing with Deadlines","0/1 Knapsack","Matrix Chain Multiplication","Longest Common Subsequence"],c:"Job Sequencing with Deadlines"},
  //Scenario based easy
{cat:"Scenario based", q:"You are building an analytics dashboard and need to find the most viewed product from a list of daily views. Which DSA concept helps you find it efficiently?", a:["Sorting","Hash Map","Linked List","Stack"], c:"Hash Map"},
{cat:"Scenario based", q:"In a chat app, you need to check if two usernames are anagrams before assigning personalized avatars. Which method would you use?", a:["Counting frequency of letters","Using substring search","Recursion","Binary search"], c:"Counting frequency of letters"},
{cat:"Scenario based", q:"While validating nested tags in an HTML editor, which data structure helps check whether tags are properly closed?", a:["Queue","Stack","Linked List","Heap"], c:"Stack"},
{cat:"Scenario based", q:"In an online ticket booking system, customers are served in the order they arrive. Which data structure models this best?", a:["Stack","Queue","Tree","Graph"], c:"Queue"},
{cat:"Scenario based", q:"In a login system, you want to quickly verify if an entered email exists among millions of users. What structure helps fastest lookup?", a:["Array","Binary Tree","Hash Table","Stack"], c:"Hash Table"},
{cat:"Scenario based", q:"While scheduling CPU tasks to minimize idle time, which algorithmic strategy can you use?", a:["Divide and Conquer","Dynamic Programming","Greedy Approach","Backtracking"], c:"Greedy Approach"},
{cat:"Scenario based", q:"You are designing a GPS navigation feature to find the shortest route between cities. Which algorithm suits best?", a:["DFS","Kruskal's","Dijkstra's Algorithm","Prim's"], c:"Dijkstra's Algorithm"},
{cat:"Scenario based", q:"To organize files and folders in a computer, which data structure resembles this hierarchy?", a:["Graph","Array","Tree","Stack"], c:"Tree"},
{cat:"Scenario based", q:"A news feed shows top trending articles in real-time. Which structure efficiently keeps track of top k trending items?", a:["Stack","Queue","Min Heap","Hash Map"], c:"Min Heap"},
{cat:"Scenario based", q:"In a payment app, you need to find the minimum number of coins to make a transaction value. Which technique fits best?", a:["Greedy","Dynamic Programming","Recursion","Brute Force"], c:"Dynamic Programming"},
{cat:"Scenario based", q:"You are implementing an undo/redo feature in a text editor. Which data structure fits naturally for this?", a:["Stack","Linked List","Array","Queue"], c:"Linked List"},
{cat:"Scenario based", q:"In a file explorer, you want to display all subfolders inside a directory. Which approach can help traverse nested folders?", a:["Recursion","Greedy","Backtracking","Queue"], c:"Recursion"},
{cat:"Scenario based", q:"In an e-commerce app, you need to display products sorted by price. Which algorithm helps in arranging them efficiently?", a:["DFS","Merge Sort","BFS","Binary Search"], c:"Merge Sort"},
{cat:"Scenario based", q:"While searching for a user's name in a sorted database, which algorithm gives the best performance?", a:["Linear Search","Binary Search","DFS","Recursion"], c:"Binary Search"},
{cat:"Scenario based", q:"In a social network, you need to suggest friends of friends. Which algorithm can explore connections layer by layer?", a:["DFS","BFS","Prim’s","Kruskal’s"], c:"BFS"},
//medium scenario based
{cat:"Scenario based medium", q:"In a stock trading app, you need to find the maximum profit by buying and selling a stock once. Which approach is most efficient?", a:["Two pointers","Sorting","Hash Map","Brute Force"], c:"Two pointers"},
{cat:"Scenario based medium", q:"In a plagiarism checker, you must find the longest common section between two essays. Which algorithm helps?", a:["KMP Algorithm","Rabin-Karp","Longest Common Subsequence","Trie"], c:"Longest Common Subsequence"},
{cat:"Scenario based medium", q:"In a calculator app, how would you evaluate an expression like (2+3)*4 efficiently?", a:["Prefix and Postfix Evaluation","Hashing","Recursion","Dynamic Programming"], c:"Prefix and Postfix Evaluation"},
{cat:"Scenario based medium", q:"In a printer queue system, you must handle tasks with priority. Which structure will you choose?", a:["Circular Queue","Priority Queue","Deque","Simple Queue"], c:"Priority Queue"},
{cat:"Scenario based medium", q:"You want to detect duplicate images uploaded by users using hash values. Which concept fits best?", a:["Hash Map","Bloom Filter","Stack","Array"], c:"Bloom Filter"},
{cat:"Scenario based medium", q:"To distribute minimum number of coins for a given amount using available denominations, which approach is best?", a:["Dynamic Programming","Greedy Algorithm","Divide and Conquer","Backtracking"], c:"Greedy Algorithm"},
{cat:"Scenario based medium", q:"To detect whether a set of tasks with dependencies can all be completed, which algorithm helps?", a:["Topological Sort","Dijkstra’s Algorithm","BFS","DFS"], c:"Topological Sort"},
{cat:"Scenario based medium", q:"In a database index system like B-Tree, why is balancing important?", a:["To reduce memory usage","To minimize search time","To increase branching","To avoid recursion"], c:"To minimize search time"},
{cat:"Scenario based medium", q:"In a ride-sharing app, you need to quickly assign the nearest available driver to a rider. Which structure helps best?", a:["Binary Search Tree","Queue","Min Heap","Graph"], c:"Min Heap"},
{cat:"Scenario based medium", q:"In a logistics company, you need to find the minimum cost path between two cities with tolls. Which algorithm helps?", a:["Dijkstra’s Algorithm","Floyd-Warshall Algorithm","Bellman-Ford","Dynamic Programming Grid Path"], c:"Dynamic Programming Grid Path"},
{cat:"Scenario based medium", q:"In a music player app, the 'next' and 'previous' song navigation can be efficiently modeled using which type of linked list?", a:["Singly Linked List","Circular Linked List","Doubly Linked List","Skip List"], c:"Doubly Linked List"},
{cat:"Scenario based medium", q:"To design a Sudoku solver for a puzzle game, which DSA technique fits best?", a:["Recursion","Backtracking","Dynamic Programming","Greedy"], c:"Backtracking"},
{cat:"Scenario based medium", q:"To find whether two users in a social network are connected through any mutual friends, which traversal is efficient?", a:["DFS","BFS","Prim’s","Kruskal’s"], c:"BFS"},
{cat:"Scenario based medium", q:"In a real-time analytics dashboard, you need to calculate the average website hits in the last 5 minutes continuously. Which concept fits best?", a:["Stack","Sliding Window","Dynamic Programming","Hash Map"], c:"Sliding Window"},
{cat:"Scenario based medium", q:"You are implementing a search bar that gives instant suggestions as users type. Which data structure powers this efficiently?", a:["Hash Table","Trie","Heap","Graph"], c:"Trie"},
//hard scenario
{cat:"Scenario Based Hard", q:"You are designing a delivery system like Swiggy. To assign each delivery agent the nearest order efficiently, which algorithm would scale best for millions of requests?", a:["Dijkstra’s Algorithm","K-D Tree with Greedy Search","Brute Force Search","Binary Search"], c:"K-D Tree with Greedy Search"},
{cat:"Scenario Based Hard", q:"In a stock prediction engine, you must calculate maximum profit from multiple transactions with cooldown days. Which approach fits best?", a:["Greedy","Dynamic Programming","Divide and Conquer","Stack"], c:"Dynamic Programming"},
{cat:"Scenario Based Hard", q:"A social network suggests 'People You May Know' by mutual connections. Which algorithm provides efficient recommendations?", a:["DFS","BFS with Level Tracking","Union-Find + Graph Traversal","Topological Sort"], c:"Union-Find + Graph Traversal"},
{cat:"Scenario Based Hard", q:"An e-commerce site must display top 10 most viewed products in real time. Which data structure ensures fast insertion and retrieval?", a:["Heap","BST","HashMap","Linked List"], c:"Heap"},
{cat:"Scenario Based Hard", q:"You need to design a plagiarism detection tool comparing millions of documents. Which algorithmic concept will help optimize search?", a:["Suffix Tree","Hash Map","Dynamic Programming","Graph Search"], c:"Suffix Tree"},
{cat:"Scenario Based Hard", q:"To detect network loops in a huge distributed system, which DSA concept would identify cycles efficiently?", a:["BFS","DFS Cycle Detection","Disjoint Set (Union-Find)","Bellman-Ford"], c:"Disjoint Set (Union-Find)"},
{cat:"Scenario Based Hard", q:"A real-time gaming leaderboard updates player rankings every second. Which data structure allows efficient updates and rank queries?", a:["Segment Tree","Heap","Trie","AVL Tree"], c:"Segment Tree"},
{cat:"Scenario Based Hard", q:"You are building an AI chat system that auto-completes words. For massive datasets, which structure scales better than Trie?", a:["Compressed Trie (Radix Tree)","Heap","Graph","Hash Map"], c:"Compressed Trie (Radix Tree)"},
{cat:"Scenario Based Hard", q:"In a distributed caching system, how can you ensure minimal rehashing when servers are added or removed?", a:["Linear Hashing","Consistent Hashing","Quadratic Probing","Chaining"], c:"Consistent Hashing"},
{cat:"Scenario Based Hard", q:"For a route optimization app like Google Maps, how can you find the shortest path when edge weights change dynamically?", a:["Dijkstra with Min-Heap","A* Algorithm","Bellman-Ford","Floyd-Warshall"], c:"A* Algorithm"},
{cat:"Scenario Based Hard", q:"You are designing a spell checker that finds words with small edit distance differences. Which algorithm helps?", a:["Levenshtein Distance (DP)","KMP","Rabin-Karp","Trie Matching"], c:"Levenshtein Distance (DP)"},
{cat:"Scenario Based Hard", q:"In a financial fraud detection system, you must detect unusual patterns across large datasets. Which structure fits?", a:["Graph + DFS Pattern Search","Segment Tree","Stack","Linked List"], c:"Graph + DFS Pattern Search"},
{cat:"Scenario Based Hard", q:"In a ride-sharing app, to find all nearby drivers within 3km efficiently, which structure helps?", a:["Hash Map","K-D Tree (Spatial Indexing)","Heap","Segment Tree"], c:"K-D Tree (Spatial Indexing)"},
{cat:"Scenario Based Hard", q:"You need to simulate thousands of concurrent users in an online multiplayer game where actions depend on priority. Which data structure can handle this efficiently?", a:["Priority Queue","Deque","Binary Search Tree","Graph"], c:"Priority Queue"},
{cat:"Scenario Based Hard", q:"You are optimizing a compiler that must detect repeated code blocks efficiently. Which algorithmic concept best fits?", a:["Suffix Array + LCP","Dynamic Programming","Stack","BFS"], c:"Suffix Array + LCP"}


];

let current=0, score=0, currentCat="", selectedQuestions=[];

function startCategory(cat){
  currentCat=cat;
  selectedQuestions = questions.filter(q=>q.cat===cat);
  current=0; score=0;
  document.getElementById("home").style.display="none";
  document.getElementById("quiz").style.display="block";
  document.getElementById("category").innerText="Category: "+cat;
  loadQuestion();
}

function loadQuestion(){
  const q=selectedQuestions[current];
  document.getElementById("question").innerText=`Q${current+1}. ${q.q}`;

  // Update per-question progress bar
  const progress = Math.round(((current)/selectedQuestions.length)*100);
  const progressBar = document.getElementById("questionProgress");
  progressBar.style.width = progress + "%";
  progressBar.textContent = progress + "%";

  const optionsDiv=document.getElementById("options");
  optionsDiv.innerHTML="";
  q.a.forEach(opt=>{
    const div=document.createElement("div");
    div.className="option";
    div.innerText=opt;
    div.onclick=()=>selectOption(div,opt,q.c);
    optionsDiv.appendChild(div);
  });
}

function selectOption(el, chosen, correct) {
  const all = document.querySelectorAll(".option");

  // Disable all options
  all.forEach(o => o.style.pointerEvents = "none");

  if (chosen === correct) {
    // Correct choice
    el.style.backgroundColor = "rgba(0,255,0,0.4)";
    score++;
  } else {
    // Wrong choice: highlight chosen red
    el.style.backgroundColor = "rgba(255,0,0,0.4)";

    // Highlight the correct option green
    all.forEach(o => {
      if (o.innerText.trim() === correct) {
        o.style.backgroundColor = "rgba(0,255,0,0.4)";
      }
    });
  }
}


function nextQuestion(){
  if(current<selectedQuestions.length-1){current++;loadQuestion();}
  else{finishCategory();}
}

function finishCategory(){
  saveScore(currentCat,score,selectedQuestions.length);
  document.getElementById("quiz").style.display="none";
  document.getElementById("report").style.display="block";
  buildReport();
}

function buildReport(){
  const hist=JSON.parse(localStorage.getItem("dsaScores")||"{}");
  let strongest="", weakest="";
  let max=-1, min=9999;
  for(const cat in hist){
    const s=hist[cat][hist[cat].length-1];
    if(s.score>max){max=s.score; strongest=cat;}
    if(s.score<min){min=s.score; weakest=cat;}
  }
  const currentScore=hist[currentCat][hist[currentCat].length-1];
  const prevScore = hist[currentCat].length>1 ? hist[currentCat][hist[currentCat].length-2] : null;
  let improvementText = prevScore ? 
    `Previous: ${prevScore.score}/${prevScore.total} → Now: ${currentScore.score}/${currentScore.total}` :
    `First attempt in ${currentCat}.For next attempt your improvement will visible`;
  document.getElementById("reportContent").innerHTML=`
    <p><b>Category:</b> ${currentCat}</p>
    <p><b>Score:</b> ${currentScore.score}/${currentScore.total}</p>
    <p><b>Improvement:</b> ${improvementText}</p>
    <hr>
    <p><b>Strongest Topic:</b> ${strongest}</p>
    <p><b>Weakest Topic:</b> ${weakest}</p>
  `;
}

function saveScore(cat,score,total){
  let data=JSON.parse(localStorage.getItem("dsaScores")||"{}");
  if(!data[cat]) data[cat]=[];
  data[cat].push({score,total,ts:Date.now()});
  localStorage.setItem("dsaScores",JSON.stringify(data));
}

function goHome(){
  document.getElementById("report").style.display="none";
  document.getElementById("home").style.display="block";
}
