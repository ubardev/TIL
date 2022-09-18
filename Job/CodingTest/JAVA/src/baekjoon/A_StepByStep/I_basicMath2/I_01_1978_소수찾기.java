package baekjoon.A_StepByStep.I_basicMath2;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class I_01_1978_소수찾기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int count = Integer.parseInt(br.readLine());
        int primeCount = 0;

        StringTokenizer stringTokenizer = new StringTokenizer(br.readLine(), " ");

        for (int i = 0; i < count; i++) {
            int number = Integer.parseInt(stringTokenizer.nextToken());
            if (isPrime(number)) {
                primeCount++;
            }
        }

        System.out.println(primeCount);
    }

    private static boolean isPrime(int number) {
        if (number == 1) return false;

        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) return false;
        }
        return true;
    }
}

//package baekjoon.A_StepByStep.I_basicMath2;
//
//import java.io.BufferedReader;
//import java.io.InputStreamReader;
//import java.io.IOException;
//import java.util.StringTokenizer;
//
//public class I_01_1978_소수찾기 {
//    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int count = Integer.parseInt(br.readLine());
//        int primeCount = 0;
//
//        StringTokenizer stringTokenizer = new StringTokenizer(br.readLine(), " ");
//
//        for (int i = 0; i < count; i++) {
//            int number = Integer.parseInt(stringTokenizer.nextToken());
//            if (isPrime(number)) {
//                primeCount++;
//            }
//        }
//
//        System.out.println(primeCount);
//    }
//
//    private static boolean isPrime(int number) {
//        if (number == 1) return false;
//
//        for (int i = 2; i <= Math.sqrt(number); i++) {
//            if (number % i == 0) return false;
//        }
//        return true;
//    }
//}
