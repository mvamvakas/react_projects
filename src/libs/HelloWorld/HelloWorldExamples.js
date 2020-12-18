export const languages = {
  Brainfuck: [
    "++++++++++[>+++++++>++++++++++>+++<<<-]>++.>+.+++++++",
    "..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+."
  ],
  C: [
    `#include <stdio.h>`,
    `int main()`,
    `{`,
    `   printf("Hello, World!");`,
    `   return 0;`,
    `}`
  ],
  "C#": [
    `using System;`,
    `using System.Collections.Generic;`,
    `using System.Linq;`,
    `using System.Text;`,
    `using System.Threading.Tasks;`,
    `namespace ConsoleApp1`,
    `{`,
    `  class Program`,
    `{`,
    `static void Main(string[] args)`,
    `{`,
    `  Console.WriteLine("Hello, world!");`,
    `  Console.ReadLine();`,
    `  }`,
    `}`,
    `}`
  ],
  "C++": [
    `#include <iostream>`,
    `using namespace std;`,
    `int main() `,
    `{`,
    `    cout << "Hello, World!";`,
    `    return 0;`,
    `}`
  ],
  Clojure: [
    `(ns clojure.examples.hello`,
    `   (:gen-class))`,
    `(defn hello-world []`,
    `   (println "Hello World"))`,
    `(hello-world)`
  ],
  Cobol: [
    `*****************************`,
    `IDENTIFICATION DIVISION.`,
    `PROGRAM-ID. HELLO.`,
    `ENVIRONMENT DIVISION.`,
    `DATA DIVISION.`,
    `PROCEDURE DIVISION.`,
    `MAIN SECTION.`,
    `DISPLAY "Hello World!"`,
    `STOP RUN.`,
    `****************************`
  ],
  Elixir: [`IO.puts "Hello world from Elixir"`],
  Emojicode: [
    `🐇 🐼 🍇`,
    `  🐇🐖 🏁 ➡️ 🚂 🍇`,
    `    😀 🔤Hello world!🔤`,
    `    🍎 0`,
    `  🍉`,
    `🍉`
  ],
  Erlang: [
    `-module(hello_world).`,
    `-compile(export_all).`,
    `hello() ->`,
    `    io:format("hello world~n").`
  ],
  Fortran: [
    `PROGRAM HELLO`,
    `WRITE (*,100)`,
    `STOP`,
    `100 FORMAT (' Hello World! ' /)`,
    `END`
  ],
  Go: [
    `package main`,
    ``,
    `import "fmt"`,
    ``,
    `func main() {`,
    `    fmt.Println("hello world")`,
    `}`
  ],
  Haskell: [`main = putStrLn "Hello, world!"`],
  Html: [
    `<HTML>`,
    `<!-- Hello World in HTML -->`,
    `<HEAD>`,
    `<TITLE>Hello World!</TITLE>`,
    `</HEAD>`,
    `<BODY>`,
    `Hello World!`,
    `</BODY>`,
    `</HTML>`
  ],
  Java: [
    `class HelloWorld`,
    `{`,
    `    public static void main(String args[])`,
    `    {`,
    `        System.out.println("Hello, World");`,
    `    }`,
    `}`
  ],
  Javascript: [`alert("Hello, World!");`],
  Kotlin: [`fun main() {`, `    println("Hello World!")`, `}`],
  "Objective-c": [
    `#include <stdio.h>`,
    `#include <objpak.h>`,
    `int main(int argc,char **argv)`,
    `{`,
    `    id set = [Set new];`,
    `    argv++;while (--argc) [set add:[String str:*argv++]];`,
    `    [set do:{ :each | printf("hello, %s!\n",[each str]); }];`,
    `    return 0;`,
    `}`
  ],
  Perl: [`#!/usr/bin/perl`, `print "Hello, World!\n";`],
  Php: [
    `<html>`,
    `  <head>`,
    `    <title>PHP Test</title>`,
    `  </head>`,
    `  <body>`,
    `    <?php echo '<p>Hello World</p>'; ?> `,
    `  </body>`,
    `</html>`
  ],
  Python: [`#!/usr/bin/python`, `print "Hello, world!"`],
  Python3: [`#!/usr/bin/python3`, `print "Hello, world!"`],
  R: [`print("Hello World!", quote = FALSE)`],
  Ruby: [`puts 'Hello, world!'`],
  Rust: [`fn main() {`, `    println!("Hello World!");`, `}`],
  Scala: [
    `object HelloWorld {`,
    `  def main(args: Array[String]): Unit = {`,
    `    println("Hello, world!")`,
    `  }`,
    `}`
  ],
  Scheme: [`(begen`, `  (display "Hello, World!")`, `  (newline))`],
  TypeScript: [`let message: string = 'Hello World';`, `console.log(message);`]
};
