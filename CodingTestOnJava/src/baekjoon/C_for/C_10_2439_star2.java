package baekjoon.C_for;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class C_10_2439_star2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int count = Integer.parseInt(br.readLine());
        br.close();
        StringBuilder sb = new StringBuilder();

        for (int i=1; i<=count; i++) {
            for (int k=count-i; k>=1; k-- ) {
                sb.append(" ");
            }
            for (int j=1; j<=i; j++) {
                sb.append("*");
            }
            sb.append("\n");
        }

        System.out.print(sb);
    }
}
