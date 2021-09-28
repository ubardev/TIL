package baekjoon.A_StepByStep.I_basicMath2;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class I_02_2581_소수 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int min = Integer.parseInt(br.readLine());
        int max = Integer.parseInt(br.readLine());

        boolean[] primes = new boolean[max + 1];

        getPrimes(primes);

        int sum = 0;
        int minNumber = Integer.MAX_VALUE;

        for (int i = min; i < primes.length; i++) {
            if (!primes[i]) {
                sum += i;

                if (minNumber == Integer.MAX_VALUE) {
                    minNumber = i;
                }
            }
        }

        if (sum == 0) {
            System.out.println(-1);
        } else {
            System.out.println(sum);
            System.out.println(minNumber);
        }
    }

    private static void getPrimes(boolean[] primes) {
        primes[0] = true;
        primes[1] = true;

        for (int i = 2; i < Math.sqrt(primes.length); i++) {
            if (primes[i]) continue;

            for (int j = i * i; j < primes.length; j += i) {
                primes[j] = true;
            }
        }
    }
}


//package baekjoon.A_StepByStep.I_basicMath2;
//
//import java.io.BufferedReader;
//import java.io.InputStreamReader;
//import java.io.IOException;
//
//public class I_02_2581_소수 {
//    public static boolean prime[];
//
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//
//        int M = Integer.parseInt(br.readLine());
//        int N = Integer.parseInt(br.readLine());
//
//        prime = new boolean[N + 1];
//        get_prime();
//
//        int sum = 0;
//        int min = Integer.MAX_VALUE;
//        for (int i = M; i <= N; i++) {
//            if (prime[i] == false) {
//                sum += i;
//                if (min == Integer.MAX_VALUE) {
//                    min = i;
//                }
//            }
//        }
//
//        if (sum == 0) {
//            System.out.println(-1);
//        } else {
//            System.out.println(sum);
//            System.out.println(min);
//        }
//    }
//
//    private static void get_prime() {
//        prime[0] = true;
//        prime[1] = true;
//
//        for (int i = 2; i < Math.sqrt(prime.length); i++) {
//            if (prime[i]) continue;
//
//            for(int j = i * i; j < prime.length; j += i) {
//                prime[j] = true;
//            }
//        }
//    }
//}
