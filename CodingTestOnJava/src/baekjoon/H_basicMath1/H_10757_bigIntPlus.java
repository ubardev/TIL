package baekjoon.H_basicMath1;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class H_10757_bigIntPlus {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        String str_A = st.nextToken();
        String str_B = st.nextToken();

        int max_length = Math.max(str_A.length(), str_B.length());

        int[] A = new int[max_length + 1];
        int[] B = new int[max_length + 1];

        for (int i = 0; i < str_A.length(); i++) {
            A[i] = str_A.charAt((str_A.length() - 1) - i) - '0';
        }

        for (int i = 0; i < str_B.length(); i++) {
            B[i] = str_B.charAt((str_B.length() - 1) - i) - '0';
        }

        for (int i = 0; i < max_length; i++) {
            int value = A[i] + B[i];
            A[i] = value % 10;
            A[i + 1] += (value / 10);
        }

        StringBuilder sb = new StringBuilder();

        if (A[max_length] != 0)
            sb.append(A[max_length]);

        for (int i = max_length - 1; i >= 0; i--) {
            sb.append(A[i]);
        }

        System.out.println(sb);
    }
}
