package baekjoon.A_input_and_output;

import java.util.Scanner;

public class A_05_1000_aplusb {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        sc.close();

        System.out.println(a + b);
    }
}