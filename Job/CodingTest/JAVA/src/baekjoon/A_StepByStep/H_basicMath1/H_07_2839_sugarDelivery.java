package baekjoon.A_StepByStep.H_basicMath1;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class H_07_2839_sugarDelivery {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int count = 0;

        while (true) {
            if (N % 5 == 0) {
                System.out.println(count + N / 5);
                break;
            } else if (N < 0){
                System.out.println(-1);
                break;
            }

            N -= 3;
            count++;
        }
    }
}
