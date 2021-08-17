package baekjoon.E_array;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class E_05_1546_average {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());

        int max = -1;
        double sum = 0.0;

        for (int i = 0; i < N; i++) {
            int value = Integer.parseInt(st.nextToken());

            if(max < value)
                max = value;

            sum += value;
        }

        System.out.println((sum / max * 100) / N);
    }
}
