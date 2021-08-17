package baekjoon.A_StepByStep.D_while;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class D_01_10952_APlusBDash5 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String lineData = br.readLine();
        StringBuilder sb = new StringBuilder();

        while (!"0 0".equals(lineData)) {
            sb.append(lineData.charAt(0)-48 + lineData.charAt(2)-48)
                    .append("\n");
            lineData = br.readLine();
        }

        System.out.println(sb);
    }
}
