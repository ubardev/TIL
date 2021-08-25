package baekjoon.A_StepByStep.I_basicMath2;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class I_01_1978_소수찾기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int count = 0;
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        for (int i = 0; i < N; i++) {
            int number = Integer.parseInt(st.nextToken());
            if (isPrime(number)) count++;
        }

        System.out.println(count);
    }

    private static boolean isPrime(int number) {
        if (number == 1) return false;

        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) return false;
        }
        return true;
    }
}
