package baekjoon.A_StepByStep.A_inputAndOutput;

import java.util.Scanner;

public class A_06_1001_aminusb {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        sc.close();

        System.out.println(a - b);
    }
}
