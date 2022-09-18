package baekjoon.A_StepByStep.H_basicMath1;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class H_03_1193_searchFountain {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int X = Integer.parseInt(br.readLine());

        int cross_count = 1, prev_count_sum = 0;

        while (true) {
            if (X <= prev_count_sum + cross_count) {
                if (cross_count % 2 == 1) {
                    // 분모가 큰 수부터 시작
                    // 분자는 대각선 개수 - (X 번째 - 직전 대각선까지의 누적합 - 1)
                    // 분모는 X 번째 - 직전 대각선까지의 누적합
                    System.out.print((cross_count - (X - prev_count_sum - 1)) + "/" + (X - prev_count_sum));
                    break;
                } else {
                    System.out.print((X - prev_count_sum) + "/" + (cross_count - (X - prev_count_sum - 1)));
                    break;
                }

            } else {
                prev_count_sum += cross_count;
                cross_count++;
            }
        }
    }
}
