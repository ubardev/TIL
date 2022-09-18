package baekjoon.A_StepByStep.E_array;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class E_01_10818_minAndMax {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] numbers = new int[N];
        StringTokenizer st = new StringTokenizer(br.readLine());

        for (int i=0; i<N; i++) {
            int number = Integer.parseInt(st.nextToken());
            numbers[i] = number;
        }

        Arrays.sort(numbers);
        System.out.println(numbers[0] + " " + numbers[N -1]);
    }
}
