package baekjoon.C_for;

import java.util.Scanner;

public class C_01_2739_gugudan {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int dan = sc.nextInt();

        for (int i = 1; i <= 9; i++) {
            System.out.println(String.format("%d * %d = %d", dan, i, dan*i));
        }
    }
}
