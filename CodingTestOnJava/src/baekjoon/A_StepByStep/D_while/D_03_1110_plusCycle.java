package baekjoon.A_StepByStep.D_while;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class D_03_1110_plusCycle {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int copyN = N;
        int count = 0;

        do {
            N = ((N % 10) * 10) + (((N / 10) + (N % 10)) % 10);
            count++;
        } while (N != copyN);

        System.out.println(count);
    }
}
