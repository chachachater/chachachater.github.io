/*
Description:
Kishor Balan tipped us off that the following code may need inspection: https://jupiter.challenges.picoctf.org/problem/9670/ (link) or http://jupiter.challenges.picoctf.org:9670
*/


import java.util.Scanner;
import java.lang.Character;

public class base_convert {
  static Scanner input = new Scanner(System.in );
  static Scanner input2 = new Scanner(System.in );
  static void myMethod(int choose) {

    String value = input2.nextLine();
    int valToInt = Integer.parseInt(value, choose);
    String intToString = new Character((char)valToInt).toString();
    System.out.print(intToString);

  }
  public static void main(String[] args) {
    int i = 1;
    int j = 1;
    int k = 1;

    while (k == 1) {
      System.out.print("choose a convertion:2(Binary)8(Octal)16(Hexadecimal)");
      j = input.nextInt();

      while (i == 1) {
        myMethod(j);
        System.out.print("enter 0 to choose again, enter 1 to continue");
        i = input.nextInt();
      }
      System.out.print("enter 0 to quit, enter 1 to choose again");
      k = input.nextInt();
    }
  }
}