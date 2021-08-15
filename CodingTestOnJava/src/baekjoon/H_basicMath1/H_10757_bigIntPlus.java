package baekjoon.H_basicMath1;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class H_10757_bigIntPlus {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        String num1String = st.nextToken();
        String num2String = st.nextToken();
        int maxLength = Math.max(num1String.length(), num2String.length());
        int[] num1CharArray = new int[maxLength + 1];
        int[] num2CharArray = new int[maxLength + 1];

        // 초기화
        for (int i = 0; i < num1String.length(); i++) {
            num1CharArray[i] = num1String.charAt(num1String.length() - 1 - i) - '0';
        }

        for (int i = 0; i < num2String.length(); i++) {
            num2CharArray[i] = num2String.charAt(num2String.length() - 1 - i) - '0';
        }

        // 계산
        for (int i = 0; i < maxLength; i++) {
            int value = num1CharArray[i] + num2CharArray[i];
            num1CharArray[i] = value % 10;
            num1CharArray[i + 1] = num1CharArray[i + 1] + value / 10;
        }

        StringBuilder sb = new StringBuilder();
        if (num1CharArray[maxLength] != 0)
            sb.append(num1CharArray[maxLength]);

        for (int i = maxLength - 1; i >= 0; i--) {
            sb.append(num1CharArray[i]);
        }

        System.out.println(sb);
    }
}
