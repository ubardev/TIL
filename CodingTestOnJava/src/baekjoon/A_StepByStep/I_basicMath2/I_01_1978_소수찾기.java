package baekjoon.A_StepByStep.I_basicMath2;

import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class I_01_1978_소수찾기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        String numbers = br.readLine();
        StringTokenizer st = new StringTokenizer(numbers, " ");


        int[] arr = new int[N];
        int count = 0;

        for (int i = 0; i < arr.length; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }


        for (int i = 0; i < arr.length; i++) {
            if (isPrime(arr[i])) count++;
        }

        System.out.println(count);
    }

    private static boolean isPrime(int number) {
        boolean result = true;

        if (number == 1) return false;

        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) result = false;
        }

        return result;
    }
//
//
//
//
//    package baekjoon.A_StepByStep.I_basicMath2;
//
//import java.io.IOException;
//import java.io.BufferedReader;
//import java.io.InputStreamReader;
//import java.util.StringTokenizer;
//
//    public class I_01_1978_소수찾기 {
//        public static void main(String[] args) throws IOException {
//            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//            int N = Integer.parseInt(br.readLine());
//            String numbers = br.readLine();
//            StringTokenizer st = new StringTokenizer(numbers, " ");
//
//
//            int[] arr = new int[N];
//            int count = 0;
//
//            for (int i = 0; i < arr.length; i++) {
//                arr[i] = Integer.parseInt(st.nextToken());
//            }
//
//
//            for (int i = 0; i < arr.length; i++) {
//                if (isPrime(arr[i])) count++;
//            }
//
//            System.out.println(count);
//        }
//
//        private static boolean isPrime(int number) {
//            boolean result = true;
//
//            if (number == 1) return false;
//
//            for (int i = 2; i <= Math.sqrt(number); i++) {
//                if (number % i == 0) result = false;
//            }
//
//            return result;
//        }
//    }

}
