package baekjoon.A_StepByStep.I_basicMath2;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class I_01_1978_sosoo {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        int count = 0;

        for (int i = 0; i < T; i++) {
            int number = Integer.parseInt(st.nextToken());
            if (isPrime(number)) count++;
        }

        System.out.println(count);
    }

    private static boolean isPrime(int number) {
        if (number == 1) return false;

        for (int i = 2; i < number; i++) {
            if (number % i ==0) return false;
        }

        return true;
    }
}
