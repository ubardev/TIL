package baekjoon.A_StepByStep.C_for;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class C_07_11021_APlusBDash7 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int a = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();

        for (int i=1; i<=a; i++) {
            String str = br.readLine();
            sb.append("Case #")
                    .append(i)
                    .append(": ")
                    .append(str.charAt(0)-'0' + str.charAt(2)-'0')
                    .append("\n");
        }
        System.out.println(sb);
    }
}
