package baekjoon.A_StepByStep.B_if;

import java.util.Scanner;

public class B_03_2753_leapyear {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int year = sc.nextInt();

        int isLeapyear = 0;

        if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
            isLeapyear = 1;
        }

        System.out.println(isLeapyear);
    }
}
