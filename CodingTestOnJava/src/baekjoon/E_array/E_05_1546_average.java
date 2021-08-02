package baekjoon.E_array;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class E_05_1546_average {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        double arr[] = new double[Integer.parseInt(br.readLine())];

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        for (int i = 0; i < arr.length; i++) {
            arr[i] = Double.parseDouble(st.nextToken());
        }

        double sum = 0;
        Arrays.sort(arr);

        for (int i = 0; i < arr.length; i++) {
            sum += ((arr[i] / arr[arr.length - 1]) * 100);
        }

        System.out.println(sum / arr.length);
    }
}
