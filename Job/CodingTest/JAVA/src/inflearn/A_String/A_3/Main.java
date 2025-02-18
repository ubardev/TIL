package inflearn.A_String.A_3;

import java.util.Scanner;

public class Main {
//  public String solution(String str) {
//    String answer = "";
//    int min = Integer.MIN_VALUE;
//    String[] strList = str.split(" ");
//
//    for (String word : strList) {
//      int length = word.length();
//      if (length > min) {
//        min = length;
//        answer = word;
//      }
//    }
//
//    return answer;
//  }

  public String solution(String str) {
    String answer = "";
    int m = Integer.MIN_VALUE, pos;

    while((pos = str.indexOf(" ")) != -1) {
      String tmp = str.substring(0, pos);
      int len = tmp.length();

      if (len > m) {
        m = len;
        answer = tmp;
      }

      str = str.substring(pos + 1);
    }

    if (str.length() > m) answer = str;
    return answer;
  }

  public static void main(String[] args) {
    Main T = new Main();
    Scanner kb = new Scanner(System.in);
    String str = kb.nextLine();
    System.out.println(T.solution(str));
  }
}
