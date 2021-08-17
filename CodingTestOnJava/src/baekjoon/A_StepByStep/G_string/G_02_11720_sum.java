package baekjoon.A_StepByStep.G_string;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class G_02_11720_sum {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        br.readLine();

        int sum = 0;

        for (byte value : br.readLine().getBytes()) {
            sum += value - '0';
        }

        System.out.println(sum);
    }
}
