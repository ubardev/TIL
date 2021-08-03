package baekjoon.F_function;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class F_03_1065_hansu {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        int count = play(N);
        System.out.println(count);
    }

    private static int play(int num) {
        int count = 0;

        if (num < 100) {
            return num;
        } else {
            count = 99;

            if (num == 1000) {
                num = 999;
            }

            for (int i = 100; i <= num; i++) {
                int hun = i / 100;
                int ten = (i / 10) % 10;
                int one = i % 10;

                if ((hun - ten) == (ten - one))
                    count++;
            }
        }

        return count;
    }
}
