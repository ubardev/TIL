package baekjoon.A_StepByStep.I_basicMath2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class I_06_9020_골드바흐의추측 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());

        boolean[] primes = new boolean[10001];
        getPrimes(primes);

        for (int i = 0; i < T; i++) {
            int n = Integer.parseInt(br.readLine());
            int a = n / 2;
            int b = n / 2;

            while (true) {
                if (!primes[a] && !primes[b]) {
                    System.out.println(a + " " + b);
                    break;
                }
                a--;
                b++;
            }

//            while (primes[a] && primes[b]) {
//                a--;
//                b++;
//            }
//            System.out.println(a + " " + b);
        }
    }

    private static void getPrimes(boolean[] primes) {
        primes[0] = primes[1] = true;

        for (int i = 2; i <= Math.sqrt(primes.length); i++) {
            if (primes[i]) continue;

            for (int j = i * i; j < primes.length; j += i) {
                primes[j] = true;
            }
        }
    }
}
