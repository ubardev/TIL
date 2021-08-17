package baekjoon.A_StepByStep.F_function;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class F_03_1065_hansu {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int number = Integer.parseInt(br.readLine());
        int hanSuCount = getHansuCount(number);
        System.out.println(hanSuCount);
    }

    private static int getHansuCount(int number) {
        if (number < 100)
            return number;

        int count = 99;

        for (int i = 100; i <= number; i++) {
            int hundred = i / 100;
            int ten = (i / 10) % 10;
            int one = i % 10;

            if ((hundred - ten) == (ten - one))
                count++;
        }

        return count;
    }
}
