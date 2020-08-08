```
⚠️ WORK IN PROGRESS

That project is work in progress. It's not working for all cases, just for easy cases. 
However, be careful if you try to use it and feel free to report any new issue.
```

<p align="center">
  <img
    width="250"
    src="./media/Slothcc.svg"
    alt="Slothcc – Easy way to test a console program"
  />
</p>

> Note: That project is in progress. You could use it soon.

# Motivation
I noticed a lot of new students at university, starting to coding on C and test his programs manually. In some cases, you will need to insert for example a matrix 10x10, and you will insert 100 of values manually. It is a little crazy! Also that student it's learning about this programming language, so that means that his program will have some errors before it works as expected. For each failure, the students will need to re-enter all this amount of values again. That consumes the time, time that he could learn more about the language and his program.
I'm a little sloth, so that was the first motivation to do that. 

I noticed this tool could be the first approach to how to do tests. That it's good for new people in the programming world.

# How to use

## How use the command

Slothcc has 3 types of flags:
 - `--cases` receives the file with `inputs` and `outputs`
 - `--program` recived the C program file. (Slothcc compile with gcc, if you are using Windows please download a Debian console or use the excetuable flag)
 - `--exec` recived the executable file. If you have a executable that the program return after compiled you could use it with that flag.

**Samples**

`slothcc --cases <case_file> --program <c_program_file>`

`slothcc --cases <case_file> --exec <executable_file>`

## How declare the cases

The `--cases` flag ask you for a file with `inputs` and `outputs`. The default file is `cases.slothcc`.
You need create a text file with any extension and use the following formar.

**Sample for add program**
```
input: 3
input: 3

output: The result is 6
```

The `output` should be declared with all text that you are printing on the terminal with the result.
That it's to be sure that you are testing your program correctly.

You could add any text that you have for reference. Slothcc only take the keyword `input` and `output`.

**Sample for add program with reference**
```
Enter a integer:
input: 3
Enter a integer:
input: 3

output: The result is 6
```
