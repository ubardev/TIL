package baekjoon.A_StepByStep.E_array;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class E_02_2562_maxValue {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int maxNumber = 0;
        int maxNumberIndex = 0;

        for (int i = 0; i < 9; i++) {
            int number = Integer.parseInt(br.readLine());
            if (maxNumber < number) {
                maxNumber = number;
                maxNumberIndex = i + 1;
            }
        }

        StringBuilder sb = new StringBuilder();
        sb.append(maxNumber)
                .append("\n")
                .append(maxNumberIndex);

        System.out.println(sb);
    }
}
