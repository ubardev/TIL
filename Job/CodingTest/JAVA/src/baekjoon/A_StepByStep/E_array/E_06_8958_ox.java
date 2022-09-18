package baekjoon.A_StepByStep.E_array;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class E_06_8958_ox {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int N = Integer.parseInt(br.readLine());

        for (int i = 0; i < N; i++) {
            int score = 0;
            int sum = 0;

            for (byte value : br.readLine().getBytes()) {
                if (value == 'O') {
                    score++;
                    sum += score;
                } else {
                    score = 0;
                }
            }

            sb.append(sum).append("\n");
        }
        System.out.println(sb);
    }
}
