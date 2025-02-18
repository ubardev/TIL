package inflearn.A_String.A_3;

import java.util.Scanner;

public class Main {
  public String solution(String str) {
    String answer = "";
    int min = Integer.MIN_VALUE;
    String[] strList = str.split(" ");

    for (String word : strList) {
      int length = word.length();
      if (length > min) {
        min = length;
        answer = word;
      }
    }

    return answer;
  }

  public static void main(String[] args) {
    Main T = new Main();
    Scanner kb = new Scanner(System.in);
    String str = kb.nextLine();
    System.out.println(T.solution(str));
  }
}
