import java.util.Scanner;
import javax.xml.bind.DatatypeConverter;
import java.lang.Character;

public class base_convert {
  static Scanner input = new Scanner(System.in );
  static void myMethod(int choose) {

    String value = input.nextLine();
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