package baekjoon.A_StepByStep.E_array;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class E_07_4344_overAverage {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st;

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            int subN = Integer.parseInt(st.nextToken());
            int[] arr = new int[subN];
            double sum = 0;
            double average = 0;

            for (int j = 0; j < subN; j++) {
                int value = Integer.parseInt(st.nextToken());
                arr[j] = value;
                sum += value;
            }

            average = sum / subN;

            double count = 0;
            for (int j = 0; j < subN; j++) {
                if (average < arr[j])
                    count++;
            }
            System.out.printf("%.3f%%\n", (count / subN) * 100);
        }
    }
}
