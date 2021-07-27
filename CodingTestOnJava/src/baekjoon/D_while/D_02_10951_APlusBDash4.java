package baekjoon.D_while;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class D_02_10951_APlusBDash4 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        String row;

        while ((row = br.readLine()) != null) {
            sb.append((row.charAt(0) - 48) + (row.charAt(2) - 48))
                    .append("\n");
        }

        System.out.print(sb);
    }
}
