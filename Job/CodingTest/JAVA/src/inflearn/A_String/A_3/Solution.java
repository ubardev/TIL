package inflearn.A_String.A_3;

import java.util.*;

public class Solution {
//    public String solution(String str) {
//        String answer = "";
//        int m = Integer.MIN_VALUE;
//        String[] s = str.split(" ");
//
//        for (String x : s) {
//            int len  = x.length();
//            if (len > m) {
//                m = len;
//                answer = x;
//            }
//        }
//
//        return answer;
//    }
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

        if(str.length() > m) answer = str;
        return answer;
    }

    public static void main(String[] args) {
        Solution T = new Solution();
        Scanner kb = new Scanner(System.in);
        String str = kb.nextLine(); //it is time to study
        System.out.println(T.solution(str));
    }
}
