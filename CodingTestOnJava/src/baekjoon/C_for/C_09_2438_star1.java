package baekjoon.C_for;

import java.io.*;

public class C_09_2438_star1 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int count = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();

        for (int i=1; i<=count; i++) {
            for (int j=1; j<=i; j++) {
                sb.append("*");
            }
            sb.append("\n");
        }
        System.out.print(sb);
    }
}
