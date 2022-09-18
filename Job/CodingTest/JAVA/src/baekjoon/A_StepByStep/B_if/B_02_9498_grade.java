package baekjoon.A_StepByStep.B_if;

import java.util.Scanner;

public class B_02_9498_grade {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int score = sc.nextInt();

        String result = "F";

        if (score >= 90)
            result = "A";
        else if (score >= 80)
            result = "B";
        else if (score >= 70)
            result = "C";
        else if (score >= 60)
            result = "D";

        System.out.println(result);
    }
}
