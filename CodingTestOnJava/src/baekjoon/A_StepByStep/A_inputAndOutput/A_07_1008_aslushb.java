package baekjoon.A_inputAndOutput;

import java.util.Scanner;

public class A_07_1008_aslushb {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double a = sc.nextInt();
        double b = sc.nextInt();
        sc.close();

        System.out.println(a / b);
    }
}
