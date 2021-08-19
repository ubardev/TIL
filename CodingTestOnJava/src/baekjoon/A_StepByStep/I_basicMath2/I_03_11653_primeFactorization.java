package baekjoon.A_StepByStep.I_basicMath2;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class I_03_11653_primeFactorization {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        for (int i = 2; i <= Math.sqrt(N); i++) {
            while (N % i == 0) {
                System.out.println(i);
                N /= i;
            }
        }

        if (N != 1)
            System.out.println(N);
    }
}
