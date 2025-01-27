package inflearn.A_String.A_3;

import java.util.*;

public class Main {
    public String solution(String str) {
        String answer = "";
        int m = Integer.MIN_VALUE;
        String[] s = str.split(" ");

        for (String x : s) {
            int len  = x.length();
            if (len > m) {
                m = len;
                answer = x;
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
