package baekjoon.E_array;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class E_01_10818_minAndMax {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] numbers = new int[N];
        StringTokenizer st = new StringTokenizer(br.readLine());
        int minNumber = 1000000;
        int maxNumber = -1000000;

        for (int i=0; i<N; i++) {
            int number = Integer.parseInt(st.nextToken());
            numbers[i] = number;

            if (minNumber > number) {
                minNumber = number;
            }

            if (maxNumber < number) {
                maxNumber = number;
            }
        }

        System.out.println(minNumber + " " + maxNumber);
    }
}
