package baekjoon.A_StepByStep.E_array;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class E_03_2577_countNumber {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int result = Integer.parseInt(br.readLine()) * Integer.parseInt(br.readLine()) * Integer.parseInt(br.readLine());
        int[] arr = new int[10];

        String resultString = String.valueOf(result);

        for (int i=0; i<resultString.length(); i++) {
            arr[resultString.charAt(i) - 48]++;
        }

        for (int v : arr) {
            System.out.println(v);
        }
    }
}
