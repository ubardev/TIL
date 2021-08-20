package baekjoon.A_StepByStep.I_basicMath2;

import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class I_04_1929_getPrime {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer stringTokenizer = new StringTokenizer(br.readLine(), " ");

        int M = Integer.parseInt(stringTokenizer.nextToken());
        int N = Integer.parseInt(stringTokenizer.nextToken());

        boolean[] primes = new boolean[N + 1];

        getPrimes(primes);

        for (int i = M; i <= N; i++) {
            if (!primes[i]) System.out.println(i);
        }
    }

    private static void getPrimes(boolean[] primes) {
        primes[0] = primes[1] = true;

        for (int i = 2; i < Math.sqrt(primes.length); i++) {
            if (primes[i]) continue;

            for (int j = i * i; j < primes.length; j += i) {
                primes[j] = true;
            }
        }
    }
}
